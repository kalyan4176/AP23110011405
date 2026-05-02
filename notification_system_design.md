
// How to run the backend server part

1. fork the code from github
2. check your path
3. open new terminal
4. execute the command npm init -y to initialise
5. execute the command npm install to install noe_modules
6. execute the command npm install express axios cors  to install dependencies
7. execute the command cd notification_app_be
8. then execute the command node server.js
9. you can see the following stuff if server is successfully running:
        Server running on port 5000
        Logging Failed due to 401 error
        [local_log] BACKEND | INFO | service | Server started on 5000


// How to test your backend api

1. download tunderclient extension from vs code 
2. open the tunderclient
3. as the surver is running on port paste the link http://localhost:5000/api in testing path
4. if you get 200 ok then the path is tested perfectly.
5. as the surver is running on port paste the link http://localhost:5000/api/vehicles/optimize in testing path
6. if you get 200 ok then the path is tested perfectly and you may get output of the data too.

