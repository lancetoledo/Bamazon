var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'bamazon'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id" + connection.threadId);
});

function showProducts(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var showTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
		for(var i = 0; i < res.length; i++){
			showTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
        console.log(showTable.toString());
        orderPrompt()
		
	});
}

function orderPrompt(){
    inquirer.prompt([
        {
            name: "ItemID",
            type: "input",
            message:"Enter the Item ID of what you'd like to purchase.",
            filter:Number
        },
        {
            name:"Quantity",
            type:"input",
            message:"How many items do you wish to purchase?",
            filter:Number
        },
    
     ]).then(function(answers){
         var IDrequest = answers.ItemID;
         var quantityrequest = answers.Quantity;
         purchaseOrder(IDrequest, quantityrequest);
     });
    };


function purchaseOrder(IDrequest, quantityrequest){
    connection.query('Select * FROM products WHERE item_id = ' + IDrequest, function(err,res){
		if(err){console.log(err)};
		if(quantityrequest <= res[0].stock_quantity){
			var totalCost = res[0].price * quantityrequest;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + quantityrequest + " " +res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query('UPDATE products SET stock_quantity = ' + (res[0].stock_quantity - quantityrequest) + ' WHERE item_id = ' + IDrequest);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		showProducts();
	});
}






showProducts();
