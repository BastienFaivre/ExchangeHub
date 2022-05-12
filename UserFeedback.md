# User feedback for prototype stage done on March 20th, 2022

## User first impressions

They don’t know what to do when they arrive, no indication of which page they are on. It says HOME, but how do they know what to do, on which page they are. This is not clear.

## UX impressions

_The user clicked on different buttons experimenting with the UI_

So they click on the tabs, obviously some pages are not implemented. They focused their attention on the courses page. It doesn’t make sense that without having written anything, they get the text “No courses matching the specified search terms”. It should give examples of search terms they can use. Also, maybe the order of searching should be from broadest to more specific. Start with a school (very large range), then department, then to the very specific search factor which is a keyword. Having an example of which keywords to use would be helpful. It also doesn’t make sense that the only way to start searching is from a search icon on one of the search factors.

## Design impressions

Otherwise, very nice design, I like the colors and once I figured out that I was on a home page, I liked the the way it indicated on which page I was with the red line next to each tab.

# What we did based on this feedback

We started by changing the order of the search parameters, and made sure there was text explaining the reason why there were 0 search results (whether because of empty parameters or because no courses could be found based on search parameters).

# User feedback for mid-project review done on April 9th, 2022

At this point, only the courses search page is implemented. But the app is clearly appreciated by the users. They like the design and the way it is implemented. However, here are the remarks that were given:

-   The purpose of the website is not obvious. It should be well explain on the home page
-   The current page marker is not enough clear. It should be more visible to know on which page the users are
-   The course search is missing a user-friendly message when the search gives no results
-   The course search should include more parameters such as school and department.

However, there is also one remark that cannot be fixed:

"_The ability to jump from the About the Course page to the official KTH website is useful, but I would suggest that you include a few more details about the course, such as course content, on your page._"

This is due to the fact that the KTH APi does not provide more information about the course details. That is why the course page includes a link to the KTH page of the course.

To handle the four remarks, we added a [new issue](https://github.com/BastienFaivre/ExchangeHub/issues/16) in GitHub. From there, we implemented all the changes that were suggested. Here are pictures of the changes:
