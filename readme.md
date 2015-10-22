A Scuba Diving Calculator for Air Dives.

I have written this application on Rails as a single page app. I used twitter bootstrap to get the page styled and responsive, and well, because I wanted to learn bootstap.

Some other features are:
*an -onclick listener to start the calculations when the user clicks the calculate button.
*reads values from text boxes in JS to provide data for the calculations then writes the results of the calculations into the results area of the sheet.
*controlller specific Javascript comes from .coffee files so that when you load one sheet the event listeners of another sheet do not report "cannot add event listener of null".

Have removed <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %> from th heads of the .erb files as it was causing js to load twice (as it is in application.html.erb)

adding welcome from coffee on the page loader in deco works, why not in air?



This application can be found on line at:
http://dive-planner.herokuapp.com/  