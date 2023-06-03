/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Chester Gil Balbuena Student ID:113088223  Date: May 20, 2023
*
********************************************************************************/ 

serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"] //Array of HTTP verbs for server requests 
serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"] //Array of server paths
serverResponses = ["Welcome to WEB700 Assignment 1", 
"This assignment was prepared by Chester Gil Balbuena", "Student Name: cbalbuena@myseneca.ca", "cbalbuena", "Main Panel", "Logout Complete"] //Array of server responses


function httpRequest(httpVerb, path){ //function  to handle HTTP requests based on the given verb and path 
    for (i=0; i<serverPaths.length; i++){
        if (httpVerb == serverVerbs[i] && path == serverPaths[i]){
            return "200: " + serverResponses[i] //return a sucessful response 
        }
    }
    return "404: Unable to process " + httpVerb + " request for " + path; //Return a 404 error if no matching verb and path found 
}

function getRandomInt(max) { //function to generate a random integer with a given range
    return Math.floor(Math.random() * max);
}

function automateTests(){ //function to automate tests by sending random request at regular intervals
    testVerbs = ["GET","POST"] //array of HTTP verbs for test requests 
    testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"] //array of test paths 

    function randomRequest(){ //function to send a random request using a random verb and path 
        randVerb = testVerbs[getRandomInt(testVerbs.length)]
        randPath = testPaths[getRandomInt(testPaths.length)]
        console.log(httpRequest(randVerb,randPath)) // call the httpRequest function with the random verbs and path, and log the result
    }
    setInterval(randomRequest, 1000); //Call randomRequest function every 1 second
}

automateTests(); //start the automated tests 


