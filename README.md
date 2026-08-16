# CS465-Fullstack
CS-465 Full Stack Development with MEAN 
# CS 465 Full Stack Development

## Architecture

Throughout this project, I worked with different types of frontend development to create both the customer-facing and administrative sides of the Travlr Getaways application. The customer-facing website uses Express, HTML, JavaScript, and Handlebars templates to display travel information. This approach allows the server to retrieve information and generate the webpage that is shown to the customer. The administrative side uses Angular as a single-page application (SPA). The SPA provides a more interactive experience because administrators can view, add, and edit trip information without needing to reload an entirely new webpage for each action. Working with both approaches helped me understand how different frontend designs can be used depending on what users need from an application.

The backend uses MongoDB, which is a NoSQL database. MongoDB works well with this application because trip information can be stored as documents that closely match the JSON data used throughout the application. It also works well with JavaScript and the other technologies in the MEAN stack. Using Mongoose allowed the application to define the structure of trip data while providing a way for the server to communicate with MongoDB.

## Functionality

JSON and JavaScript are related, but they serve different purposes. JavaScript is a programming language used to create application logic and functionality, while JSON is a format used to organize and exchange data. In the Travlr Getaways application, JSON helps connect the frontend and backend. The server can retrieve trip information from MongoDB and return it through the RESTful API as JSON. The frontend can then use that information to display the available trips to the user.

Throughout development, I refactored the application as new functionality was added. One example was changing the original static customer-facing pages so that trip information could be retrieved dynamically rather than being written directly into the HTML. The project was also reorganized to use routes, controllers, models, and views. When developing the Angular SPA, reusable components were created for features such as displaying individual trips and working with trip information. Reusable UI components reduce duplicated code and make the application easier to update because the same component can be used in multiple places instead of recreating the same functionality.

## Testing

Testing the full stack application helped me better understand how HTTP methods, API endpoints, the database, and security work together. Different HTTP methods are used depending on the action being performed. GET requests retrieve information, POST requests create new information, and PUT requests update existing information. The API endpoints determine where those requests are sent and which server-side functions handle them. For example, the `/api/trips` endpoint can retrieve or add trip information, while `/api/trips/:tripCode` can work with a specific trip.

Testing became more involved after security was added because some actions should only be available to authenticated administrators. The application uses authentication and JSON Web Tokens (JWTs) to protect administrative functions. An administrator must successfully log in before performing protected actions such as adding or updating trip information. Testing therefore involves more than confirming that an endpoint returns the correct data. It also requires confirming that protected requests work for an authenticated user and that unauthorized access is prevented. Working through this process helped me understand how the frontend, API, server, security controls, and database all depend on one another in a full stack application.

## Reflection

This course helped me develop a much better understanding of how the individual pieces of a full stack application work together. Before completing this project, I had worked with several programming concepts separately, but building Travlr Getaways gave me experience connecting a frontend, server, API, and database into one working application. I also gained more experience using tools and technologies such as JavaScript, Node.js, Express, Angular, MongoDB, Mongoose, RESTful APIs, and authentication.

One of the most valuable skills I developed was troubleshooting problems across different parts of an application. A problem displayed on the frontend does not always originate there, so I learned to work through the different layers of the application and determine where an issue was occurring. I also became more comfortable testing API requests, working with databases, using reusable components, and adding security to an application. These skills will help me become a more marketable candidate because I can demonstrate experience developing and testing a complete full stack application rather than only working with one part of the development process.
