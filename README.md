# Setup Project and Running the project locally
1. Clone the project from the github.
2. In terminal run 'npm install' , make sure you are in root directory of the repo.
3. Create a '.env' file and add DB_URI=<MongoDB connection URL>.
4. Now in terminal run : 'npm run start:dev' . This will run the project locally at Port 3000 .

Postman collection : https://www.postman.com/harshul2k/notification-api-workspace/collection/qkhynyd/notification-api?action=share&creator=15402272

# Routes Implemented
1. POST /api/preferences
2. GET /api/preferences/:userId
3. PATCH /api/preferences/:userId
4. DELETE /api/preferences/:userId
5. POST /api/notifications/send
6. GET /api/notifications/:userId/logs
7. GET /api/notifications/stats

# Error Handling
I have done global error handling by making a global filter . It handles the unhandeled exceptions .

# Rate limiting
I have rate limited to make atmost 2 requests within 5 seconds .

# Validations
1. For email format , validation is done using @IsEmail validoator.
2. For timezone , i've created a custom validtor .
