# ExchangeHub

This is a project for the course [DH2642](https://www.kth.se/student/kurser/kurs/DH2642?l=en) at [KTH](https://www.kth.se/en).

[Deployed website](http://159.69.42.15:3000)

## Description

ExchangeHub is a website for EPFL students planning to do an exchange at KTH. This platform helps future KTH exchange students to prepare their exchange in terms of course and lifestyle based on previous exchange students that left comments and reviewed.

Under **courses** tab, the users can search for KTH courses based on their search criterias. They can learn more about a specific course by clicking on it. In the detailed tab of a course, the users have access to more information about the course and also to students reviews and ratings about it.

Under **lifestyle** tab, the users can found information about the life in Sweden and Stochholm. Study tips can also be found there.

Under **students** tab, the users can found all comments and reviewed per students.

Finally, the previous exchange students have the possibility to write reviews and comments. To do this, they have to login under the **profile** page.

## Project Structure

    src
    ├── App.js
    ├── MUI
    │   └── theme.js
    ├── config
    │   └── firebaseConfig.js
    ├── coursesAPI.js
    ├── home
    │   ├── homePresenter.js
    │   └── homeView.js
    ├── index.js
    ├── mainContent
    │   ├── MainContentView.js
    │   ├── courses
    │   │   ├── coursePresenter.js
    │   │   ├── courseView.js
    │   │   ├── searchFormView.js
    │   │   ├── searchPresenter.js
    │   │   └── searchResultsView.js
    │   ├── lifestyle
    │   │   ├── tipView.js
    │   │   └── tipsPresenter.js
    │   ├── profile
    │   │   └── profilePresenter.js
    │   └── students
    │       ├── studentPresenter.js
    │       └── studentView.js
    ├── navigation
    │   ├── navigationPresenter.js
    │   └── navigationView.js
    ├── redux
    │   ├── reducers
    │   │   ├── coursesReducer.js
    │   │   ├── profileReducer.js
    │   │   └── rootReducer.js
    │   └── store.js
    └── sidebar
        ├── sidebarPresenter.js
        └── sidebarView.js

In our project we used MUI, which is a React UI library that gives us access to already stylised components according to a theme we choose. This theme is present in MUI/theme.js where we simply overwrite the main and secondary colors.

With redux and redux-thunk, we created reducers that allow us to interact with the state (which is our model). We also define functions that allow us to make asynchronous API calls and update our model when these are completed.

## Implemented features

Now, only the **courses** tab is implemented. The users can search for KTH courses and get more information on the ones they want to learn more about. Right now, the comments and reviews of courses are not implemented yet. However, you can see sample hard-coded comments for the course DH2642.

## Upcomming features

-  The **lifestyle** tab
-  The **students** tab
-  Login feature and therefore the possibility to write comments and reviews
-  Persistence of comments and reviews in _Firebase_
