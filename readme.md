A Scuba Diving Calculator for Air Dives.

I have written this application on Rails as a single page app. I used twitter bootstrap to get the page styled and responsive, and well, because I wanted to learn bootstap.

Some other features are:
*an -onclick listener to start the calculations when the user clicks the calculate button.
*reads values from text boxes in JS to provide data for the calculations then writes the results of the calculations into the results area of the sheet.

removed:
<%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
from application.html.erb
as I want to include page specific javascript.

This application can be found on line at:
http://dive-planner.herokuapp.com/  