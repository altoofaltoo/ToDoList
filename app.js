
//  consts to require {
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js")
const items = [];
const workItems = [];
//}

//Ejs template {
app.set('view engine', 'ejs');
//}

//Body-Parser {
   app.use(bodyParser.urlencoded({extended: true}))
   app.use(express.static("public"));
//}

// Code to show up on page {
app.get("/", function(req, res) {
   const day = date.getDate();
  res.render("list.ejs", {
   listTitle: day,
   newListItems: items
})
})
app.post("/", function (req, res) {

  const item = req.body.newItem;
   if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
   items.push(item);
   res.redirect("/");
}

})

app.get("/work", function(req, res) {


   res.render("list", {
   listTitle: "Work List",
   newListItems: workItems
   });
});

app.post("/work", function(req, res) {
    let items = req.body.newItem;
    workItems.push(item);
    res.write("<button>Hello</button>");
    res.redirect("/work");
})

app.get("/about", function(req, res){
   res.render("about");
})
//}

// Code to get to port {
app.listen(process.env.PORT || 2000, function() {
   console.log("Port running on port 2000");
});
//}
