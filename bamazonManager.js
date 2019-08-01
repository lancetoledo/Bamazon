var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id" + connection.threadId);
});

function runManager(){
    inquirer.prompt([{
            type: "options",
            name: "operator",
            message: "What would you like to do today?",
            choices: [
                "View Products For Sale",
                "View Low Inventory",
                "Add To Inventory",
                "Add New Product",
            ]        
    }])

    .then(function(response){
        var choice = response.operator;
        console.log(operator);
    })
}

runManager()