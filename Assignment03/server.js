var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var cData = require("./modules/collegeData")
var path = require("path")


// GET / route to serve home.html
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "views", "home.html");
    res.sendFile(filePath);
});


// GET /about route to serve about.html
app.get("/about", (req, res) => {
    // Construct the file path to the about.html file
    const filePath = path.join(__dirname, "views", "about.html");

    // Send the about.html file as the response
    res.sendFile(filePath);
});


// GET /htmlDemo route to serve about.html
app.get("/htmlDemo", (req, res) => {
    // Construct the file path to the about.html file
    const filePath = path.join(__dirname, "views", "htmlDemo.html");

    // Send the about.html file as the response
    res.sendFile(filePath);
});



// Initialize the data and start the server
cData.initialize()
    .then(() => {
        console.log("Data initialized successfully.");
        
        //student route
        app.get("/students", (req, res) => {
            // Check if the "course" query parameter exists in the request
            if (req.query.course) {
                // If the "course" parameter exists, call getStudentsByCourse()
                cData.getStudentsByCourse(req.query.course)
                    .then((students) => {
                        console.log(students); // Print the filtered students to the console
                        res.json(students); // Send the filtered students as JSON response
                    })
                    .catch((error) => {
                        console.log(error); // Print the error to the console
                        res.json({ message: "no results" }); // Send an error message as JSON response
                    });
            } else {
                // If the "course" parameter does not exist, call getAllStudents()
                cData.getAllStudents()
                    .then((students) => {
                        console.log(students); // Print all students to the console
                        res.json(students); // Send all students as JSON response
                    })
                    .catch((error) => {
                        console.log(error); // Print the error to the console
                        res.json({ message: "no results" }); // Send an error message as JSON response
                    });
            }
        });
        
        //tas route
        app.get("/tas", (req, res) => {
            // Call the getTAs function to retrieve teaching assistants' data
            cData.getTAs()
                .then((tas) => {
                    res.json(tas); // Send the teaching assistants' data as JSON response
                })
                .catch((error) => {
                    console.log(error); // Log the error to the console
                    res.json({ message: "no results" }); // Send an error message as JSON response
                });
        });

        //courses route
        app.get("/courses", (req, res) => {
            // Call the getCourses function to retrieve courses data
            cData.getCourses()
                .then((courses) => {
                    res.json(courses); // Send the courses data as JSON response
                })
                .catch((error) => {
                    console.log(error); // Log the error to the console
                    res.json({ message: "no results" }); // Send an error message as JSON response
                });
        });

        //student num route
        app.get("/student/:num", (req, res) => {
            const studentNum = req.params.num //Extract the student number from the URL parameter

            //Call the getStudentByNum function to retrieve studentByNum data
            cData.getStudentByNum(studentNum)
            .then((studentByNum) => {
                res.json(studentByNum); //Sends the studentBynum data as JSON response
            })
            .catch((error) => {
                console.log(error);  //log the error to the console
                res.json({ message: "no results"}); //Send an error message as JSON response

            });

        
        });

// Add the 404 error handling middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404-error.gif"));
});

        // start the server listening
        app.listen(HTTP_PORT, ()=> {console.log("Server listening on port: " + HTTP_PORT)});
    })

    .catch((error) => {
        console.error("Failed to initialize data:", error);
    });
