/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mitali Kapadia   Student ID: 150414217   Date: 01/21/2023
*
********************************************************************************/ 


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var serverVerbs = ["GET","GET","GET","POST","GET","POST"];
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Mitali kapadia","Mitali kapadia: mkapadia8@myseneca.ca","User Logged In","Main Panel","Logout Complete"];


function httpRequest(httpVerb,path) {
    for(let i = 0; i < serverPaths.length; i++){
        if (serverPaths[i] == path ) {
            if (serverVerbs[i] == httpVerb) {
                return "200: " + serverResponses[i]
            }
            // else {
            //     return `404: Unable to process ${httpVerb} request for ${path}`
            // }
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`
}

// console.log(httpRequest("GET","/"))
// console.log(httpRequest("GET","/about"))
// console.log(httpRequest("GET","/contact"))
// console.log(httpRequest("POST","/login"))
// console.log(httpRequest("POST","/panel"))
// console.log(httpRequest("POST","/randomPath2"))


function automateTests() {
    testVerbs = ["GET","POST"]
    testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]

    function randomRequest() {
        temp1 = getRandomInt(testVerbs.length)
        temp2 = getRandomInt(testPaths.length)
        var randVerb = testVerbs[temp1]
        var randPath = testPaths[temp2]

        console.log(httpRequest(randVerb,randPath))
    }

    setInterval(randomRequest,1000)

}

automateTests()