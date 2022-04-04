# System Design
The system will follow a Model View Control design.

## Model
The model is made of the data store. This contains all of the user's provided information along with all linking id's necessary for the function of the application.

## View

The view is comprised of both a Phone application for scanning QR codes and a web application for monitoring all changes to the database.

## Controller

The front-facing application on both the phone and the web application will serve as controllers, allowing them to modify the Model.