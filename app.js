
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const appkey = "9b6fe39c3a19a5f51b9e2d6fada94d98";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${appkey}`;

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `https://openweathermap.org/img/wn/${icon}.png`;

      res.render("weather", { city: query, temperature: temp, description: weatherDescription, iconURL: imageURL });
    });
  }).on("error", function(error) {
    console.log("Error: " + error.message);
    res.render("error");
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});



// const express = require("express");
// const app = express();

// app.set("view engine", "ejs"); // Set EJS as the view engine

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public")); // Serve static files from the "public" directory

// app.get("/", function(req, res) {
//   res.render("index");
// });

// app.post("/", function(req, res) {
//   const cityName = req.body.cityName;

//   // Perform weather API call or any other operations you need

//   const weatherData = {
//     city: cityName,
//     temperature: 25,
//     description: "Sunny"
//   };

//   res.render("weather", { weatherData });
// });

// app.listen(3000, function() {
//   console.log("Server is running on port 3000.");
// });



// const https = require("https");//native pacakge 
// const express = require("express");
// const bodyParser = require("body-parser");//pacakage to read the input provided by the user

// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));// necessary line to be able to enter the data send by the user

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
//   });

// app.post("/", function(req, res){
// const querry2 = "req.body.cityName";  
// const appkey2 = "9b6fe39c3a19a5f51b9e2d6fada94d98";  
// const units2 = "metric";
// const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${querry2}&units=${units2}&appid=${appkey2}`; // `${variable name}` 

//   https.get(url2, function(response1){
// console.log(response1);
//   });

//   res.on("data", function(data){
//     const weatherData2 = JSON.parse(data);
//    const temp = weatherData2.main.temp;
//    const weatherDescription2 = weatherData2.weather[0].description;
//    const icon2 = weatherData2.weather[0].icon;
//    const imageURL2 = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
//    res.write(" erueruwe");
//    res.write("<img src=" + imageURL2 + ">");
//   });
// https.get(url2, function(response1){
// console.log(response1.statusCode);
// });

// });

// app.listen(3000, function(){
//     console.log("Server is running on port 3000.");
// });

//res.send("Server is up and running") imp send is method that can be called only once a object if the calls are multiple then the website will crash

//post vale main
//    const query = req.body.cityName;
// const apikey = "9b6fe39c3a19a5f51b9e2d6fada94d98";
// const units = "metric";
// const url=`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apikey}`;


// response.on("data", function(data){
//     const weatherData = JSON.parse(data)
//     const temp = weatherData.main.temp; //parent is main and temp is the child of it do this or use jaseon extension and go onto the link then click on the object that you want the address of and on left side you will get the option for copying the path then all we have to do is objectname.copiedaddress
//     // console.log(temp);
//     const weatherDescription = weatherData.weather[0].description;
//     // console.log(weatherDescription);
//     const icon = weatherData.weather[0].icon;
//     const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//     // console.log(JSON.stringify(weatherData)); This will turn the javascript object(weatherData) into a string
//     res.write(`<p> The weather is currently ${weatherDescription} </p>`);// to avoid using multiple send response use .write
//     res.write("<h1>The temperature in" + query + "is "+ temp + " degree Celcius. </h1>");
//     res.write("<img src=" + imageURL + ">");
//     res.send()
// });
// });
// });

// https.get(url, function(response) {
//     console.log(response.statusCode);
  
//     let data = "";
  
//     response.on("data", function(chunk) {
//       data += chunk;
//     });
  
//     response.on("end", function() {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const weatherDescription = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
//       res.write(`<p> The weather is currently ${weatherDescription} </p>`);
//       res.write(`<h1>The temperature in ${query} is ${temp} degree Celsius. </h1>`);
//       res.write(`<img src="${imageURL}">`);
//       res.send();
//     });
//   });


// const https = require("https");
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function (req, res) {
//   const query = req.body.cityName;
//   const appkey = "9b6fe39c3a19a5f51b9e2d6fada94d98";
//   const units = "metric";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${appkey}`;

//   https.get(url, function (response) {
//     console.log(response.statusCode);

//     response.on("data", function (data) {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const weatherDescription = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//       res.write(`<h1>The temperature in ${query} is ${temp} degrees Celsius.</h1>`);
//       res.write(`<p>The weather is currently ${weatherDescription}.</p>`);
//       res.write(`<img src="${imageURL}" alt="Weather icon">`);
//       res.send();
//     });
//   });
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000.");
// });

