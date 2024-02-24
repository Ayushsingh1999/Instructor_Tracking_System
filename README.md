##Instructor Tracking management system 

#This backend system is designed to track the check-in and check-out times of instructors in institutes and provide aggregated monthly reports of their working hours.

##Features

#Check-in & Check-out Management: APIs are provided to record the check-in and check-out times of instructors separately.

#Data Validation: The system validates the input data, including the instructor's ID, date, and timings to ensure accuracy and consistency.

#Aggregated Monthly Report: An API endpoint generates a monthly report showing the total checked-in time for each instructor within the specified month.

#Database Integration: Utilizes MongoDB as the database to store the check-in/out records.

#Scalability: Built on Node.js and Express.js, the system is easily scalable to handle a large number of instructors and requests.


##Prerequisites

#Node.js installed on your machine.

#MongoDB installed and running locally on the default port.

##Installation

#Clone this repository to your local machine:

git clone <repository-url>

#Install dependencies:

npm install
Start the server:


npm start
The server will start running on http://localhost:3000 by default.

##API Endpoints

##POST /checkin: Record the check-in time of an instructor.
#Request Body:
{
    "instructorId": "uniqueInstructorId",
    "checkIn": "2024-02-22T08:00:00.000Z"
}


##POST /checkout: Record the check-out time of an instructor.
#Request Body:

{
    "instructorId": "uniqueInstructorId",
    "checkOut": "2024-02-22T16:00:00.000Z"
}


##GET /monthly-report/:month/:year:
#Generate an aggregated monthly report of total checked-in time for all instructors in the specified month and year.
Example: /monthly-report/2/2024 will generate the report for February 2024.


##Testing

#To test the program, you can use tools like Postman or curl to send requests to the API endpoints. Ensure to test various scenarios, including multiple check-ins and check-outs per day.

