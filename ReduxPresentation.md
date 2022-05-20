# Frameworks in ExchangeHub: _MUI_ _Redux_ _React Router_

## Redux: Combining reducers, asynchronous requests and avoiding race conditions

### Combining reducers

Redux file structure:

```
redux
├── reducers
│   ├── coursesReducer.js
│   ├── profileReducer.js
│   ├── studentsReducer.js
│   ├── tipsReducer.js
│   └── rootReducer.js
└── store.js
```

In an application state, or model, it is often the case that you have multiple nested substates. The model for our app contained nested states for courses, lifestyle tips, students and the profile.

To make our lives easier, we created a reducer for each substate, and combined them in the _rootReducer_.

```js
// reducers/rootReducer.js
import { combineReducers } from "redux"
import { coursesReducer } from "./coursesReducer"
import { profileReducer } from "./profileReducer"
import { studentsReducer } from "./studentsReducer"
import { tipsReducer } from "./tipsReducer"

export default combineReducers({
    profile: profileReducer,
    courses: coursesReducer,
    tips: tipsReducer,
    students: studentsReducer,
})
```

Each of these reducers only need to return the nested state, instead of the whole global state. Let me explain.

If we only had one reducer for the global state, adding a course in _courses_ would require this:

```ts
// Assuming the global state looks like this
type GlobalState = {
    profile: {
        isLoading: boolean
        error: {
            isError: boolean
            errorMessage: string
        },
        info: ...
        forms: ...
    },
    courses: {
        isLoading: boolean,
        error: {
            isError: boolean,
            errorMessage: string
        },
        courseList: Course[]
    },
    ...
}

type Action = {
    type: "courses/add"
    payload: {
        value: Course
    }
}

function reducer(state: GlobalState, action: Action) {
    switch(action.type) {

    ...

    case "courses/add":
        return {
            ...state,
            courses: {
                ...state.courses,
                courseList: [...state.courses.courseList, action.payload.value]
            }
        }

    ...

    }
}
```

However, because we _combined_ the reducers, we do the same thing in a much less confusing way with _redux/coursesReducer.js_:

```ts
// state here is now of type CoursesState and not GlobalState!

type CoursesState = {
    isLoading: boolean,
    error: {
        isError: boolean,
        errorMessage: string
    },
    courseList: Course[]
}

function coursesReducer(state: CoursesState, action: Action) {
    switch(action.type) {

    ...

    case "courses/add":
        return {
            ...state,
            courseList: [...state.courseList, action.payload.value]
        }
        // Instead of this, EWWWW!
        // return {
        //     ...state,
        //     courses: {
        //         ...state.courses,
        //         courseList: [...state.courses.courseList, action.payload.value]
        //     }
        // }

    ...

    }
}
```

Trust us, this saved us from writing a lot boilerplate and error-prone code.

### Asynchronous requests and avoiding race conditions in Redux

If you know anything about Redux, the first thing they tell you is that actions are deterministic. This means that given a certain state and action, a reducer will always return the same thing.

This is a problem with asynchronous requests, since you cannot do

```js
dispatch({ type: "students/searchForStudents", payload: { filter } })
```

Because fetching students on an API can give different results, or return an error.

Instead, what you could do is this:

```js
...

useEffect(() => {
    dispatch({ type: "students/startLoading" })

    searchStudents(filter)
        .then((searchResults) => dispatch({ type: "students/setSearchResults", payload: { searchResults } }))
        .catch((error) =>  dispatch({ type: "students/setError", payload: { errorMessage: error.message } }))

}, [filter])

...
```

This works, but first of all that's quite a lot of lines for just fetching some students. We used dispatch 3 times here and we haven't taken care of race conditions. What happens if the user changes the filter before the server responds ? We would need to use promise states and everything...

But NO, that's just annoying.

Instead, we used something called _thunk_ middleware.

The setup is easy when done with the _redux-thunk_ library:

```js
//store.js
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import rootReducer from "./reducers/rootReducer"

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
```

Before the _dispatch_ function only accepted an _Action_ object as parameter:

```ts
type Action = {
    type: string
    payload: Object
}
```

With _redux-thunk_ middleware, it now accepts a function as parameter:

```ts
type ThunkFunction: (dispatch, getState) => void
```

This enables us to write the following code:

```js
function searchStudentsThunk(dispatch, getState) {
    try {
        dispatch({
            type: "students/startLoading",
        })

        const filterStateBeforeRequest = getState().students.searchFilter

        const searchResults = await searchStudents(filterStateBeforeRequest)

        const filterStateAfterRequest = getState().students.searchFilter

        if (isObjectEqual(filterStateBeforeRequest, filterStateAfterRequest)) {
            dispatch({ type: "students/setSearchResults", payload: { searchResults } })
        }
    } catch (error) {
        dispatch({
            type: "students/setError",
            payload: {
                errorMessage: error.message
            }
        })
    }
}
```

Here we start by telling our state it needs to set itself into _loading_ mode, so that our UI can update itself and let the user know the results are loading.

Then, _getState()_ returns the global state object **atomically**, meaning _filterStateBeforeRequest_ is the filter parameters before starting the asynchronous request. Then we wait for the return of the results, and we store in _filterStateAfterRequest_ the atomic global state again and update our application state with the results **only if the filter hasn't changed in the meantime**, thus avoiding race conditions.

This means that if a user starts searching for students studying CS, but while they wait for the results they decide to actually search for students studying Biology, when the server responds with CS students, we won't be saving these results in the application state because the filter has changed in the meantime.
