var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'bamazon'
})

connection.connect(function (err) {
  if (err) {
    return console.log(err)
  }
  queryProductList()
})

function queryProductList() {
  console.log("Items up for sale")
  console.log("-----------------")
  connection.query('SELECT * FROM products', function (err, res) {
  var dataProducts = []
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].product_name + ' | ' + res[i].department_name + ' | ' + "$" + res[i].price + ' | ' + res[i].stock_quantity)
      console.log('---------------')
    }
    mainMenu(res);
  });
};

var mainMenu = function(products) {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the ID of the product you would like to buy?",
      name: "ID"
    },
    {
      type: "input",
      message: "How many units of the product would you like?",
      name: 'units'
    }

  ]).then(function(results){
    var inputID = results.ID
    connection.query('SELECT * FROM products WHERE item_id = ' + inputID, function(err, res, fields) {
      if (res) {
        if (results.units <= res[0].stock_quantity){
          console.log('you have bought ' +  results.units + " " + res[0].product_name)
        } else {
          console.log("Insufficient Quantity!");
        }

      }
    })

})
}
