# ExchangeHub

This is a project for the course [DH2642](https://www.kth.se/student/kurser/kurs/DH2642?l=en) at [KTH](https://www.kth.se/en).

[Deployed website](http://116.203.219.58:3000)

## Description

ExchangeHub is a website for students planning to do an exchange at KTH. This platform helps future KTH exchange students to prepare their exchange in terms of course and lifestyle based on previous exchange students that left comments and reviews.

Under **courses** tab, the users can search for KTH courses based on their search criterias. They can learn more about a specific course by clicking on it. In the detailed tab of a course, the users have access to more information about the course and also to students reviews and ratings about it.

Under **lifestyle** tab, the users can found information about the life in Sweden and Stochholm. Study tips can also be found there.

Under **students** tab, the users can found all comments and reviewed per students.

Finally, the previous exchange students have the possibility to write reviews and comments. To do this, they have to login under the **profile** page.

## Project Structure

    src
    ├── API
    │   ├── coursesAPI.js
    │   └── firebase
    │       ├── comments.js
    │       ├── students.js
    │       └── tips.js
    ├── App.js
    ├── MUI
    │   ├── styles
    │   │   └── styles.js
    │   └── theme.js
    ├── config
    │   └── firebaseConfig.js
    ├── images
    │   └── exchangestudent.jpeg
    ├── index.js
    ├── logo.svg
    ├── mainContent
    │   ├── LoadingErrorHandler.js
    │   ├── MainContentView.js
    │   ├── courses
    │   │   ├── coursePresenter.js
    │   │   ├── courseView.js
    │   │   ├── searchFormView.js
    │   │   ├── searchPresenter.js
    │   │   └── searchResultsView.js
    │   ├── home
    │   │   ├── homePresenter.js
    │   │   └── homeView.js
    │   ├── lifestyle
    │   │   ├── searchFormView.js
    │   │   ├── searchPresenter.js
    │   │   └── searchResultsView.js
    │   ├── profile
    │   │   ├── commentsPresenter.js
    │   │   ├── commentsView.js
    │   │   ├── formCommentsView.js
    │   │   ├── formInfoView.js
    │   │   ├── formTipView.js
    │   │   ├── infoPresenter.js
    │   │   ├── infoView.js
    │   │   ├── profileLoginPresenter.js
    │   │   ├── profileLoginView.js
    │   │   ├── profilePresenter.js
    │   │   ├── tipPresenter.js
    │   │   └── tipView.js
    │   └── students
    │       ├── searchFormView.js
    │       ├── searchPresenter.js
    │       ├── searchResultsView.js
    │       ├── studentPresenter.js
    │       └── studentView.js
    ├── navigation
    │   ├── navigationPresenter.js
    │   └── navigationView.js
    ├── redux
    │   ├── reducers
    │   │   ├── coursesReducer.js
    │   │   ├── profileReducer.js
    │   │   ├── rootReducer.js
    │   │   ├── studentsReducer.js
    │   │   └── tipsReducer.js
    │   └── store.js
    ├── sidebar
    │   ├── sidebarPresenter.js
    │   └── sidebarView.js
    └── utils
        ├── departments.js
        ├── isObjectEqual.js
        ├── nationalities.js
        ├── tipTypes.js
        └── universities.js

In our project we used [MUI](https://mui.com/), which is a React UI library that gives us access to already stylised components according to a theme we choose. This theme is present in MUI/theme.js where we simply overwrite the main and secondary colors.

We also used [React Router](https://reactrouter.com/docs/en/v6) for a better user experience, allowing them to navigate through the web page while still maintaining all the advantages of a SPA.

With redux and redux-thunk, we created reducers that allow us to interact with the state (which is our model). We also define functions that allow us to make asynchronous API calls and update our model when these are completed.

## How to setup

To set up the project locally, run the following commands

```bash
git clone git@github.com:BastienFaivre/ExchangeHub.git

cd ExchangeHub

npm install
```

To be able to connect to the firebase Database, you need to add the following text in _src/config/firebaseConfig.js_:

```js
export default {
    apiKey: "{SECRET_KEY}",
    authDomain: "exchange-hub-dh2642.firebaseapp.com",
    databaseURL:
        "https://exchange-hub-dh2642-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "exchange-hub-dh2642",
    storageBucket: "exchange-hub-dh2642.appspot.com",
    messagingSenderId: "337562938419",
    appId: "1:337562938419:web:09e8154dd9ca2dcde9c746",
}
```

The `apiKey` value can be found on the firebase console.

Then start the server with `npm run start` and start editing code! Open you browser on http://localhost:3000/ and everytime change you make will update instantly.
