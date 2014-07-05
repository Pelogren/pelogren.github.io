var categories = [
						{ //EDUCATION
							name:'FRUIT',
							color:'#D95246', //red
							limit: '100',
							expenses: [ 
										{name: 'Banana',
										 price: 5,
										 date: '10.6.14',
										},
										{name: 'Tomato',
										 price: 3,
										 date: '14.6.14',
										},
										{name: 'Lettuce',
										 price: 1,
										 date: '16.6.14',
										}
										]
						},


						{//FOOD
							name:'DIARY',
							color:'#2A2931', //dunkeldunkelblau
							limit: '220',
							expenses: [ 
										{name: 'Parmesan Cheese',
										 price: 1,
										 date: '11.6.14',
										},
										{name: 'Yoghurt',
										 price: 3,
										 date: '14.6.14',
										},
										{name: 'Creme',
										 price: 2,
										 date: '16.6.14',
										}
										]
						},
						{//Entertainment
							name:'MEAT',
							color:'#53798D', //hellblau
							limit: '80',
							expenses: [ 
										{name: 'Tuna',
										 price: 2,
										 date: '5.6.14',
										},
										{name: 'BBQ Steak',
										 price: 1,
										 date: '14.6.14',
										}
										]},
						{//Transportation
							name:'BEVERAGES',
							color:'#53798D', //hellblau
							limit: '80',
							expenses: [ 
										{name: 'Beer',
										 price: 7,
										 date: '5.6.14',
										},
										{name: 'Milk',
										 price: 2,
										 date: '11.6.14',
										}

										]}
				];




function createExpenseEntry(category){

		var begintable= "<table>";
<<<<<<< HEAD
		var tablerows= "<thead><tr><th>ingredients</th><th class=\"listPrice\">amount</th><th></th></tr></thead><tbody>";
=======
		var tablerows= "<thead><tr><th>ingredients</th><th class=\"listPrice\">amount</th></tr></thead><tbody>";
>>>>>>> origin/master
		var endtable= "</table>";
		var sum= 0; 
		var addbutton= "<button type=\"button\" class=\"btn btn-primary btn-lg btn-block flying\" data-toggle=\"modal\" data-target=\"#addExpenseModal\">NEW ENTRY</button>"; 

	for (var element in categories[category].expenses) {  //erstellt für jedes Element in Expenses einer bestimmten Kategorie (categorie) einen Eintrag
		var sum= sum + categories[category].expenses[element].price;
<<<<<<< HEAD
		var tablerow = "<tr><td>" + categories[category].expenses[element].name + "</td><td class=\"listPrice\">" + categories[category].expenses[element].price + " x </td><td class=\"notImplemented\"><img src=\"assets/img/pencil.png\" alt=\"edit\" height=\"16px\"></td></tr>";
=======
		var tablerow = "<tr><td>" + categories[category].expenses[element].name + "</td><td class=\"listPrice\">" + categories[category].expenses[element].price + " x </td></tr>";
>>>>>>> origin/master

		var tablerows= tablerows + tablerow;
	}
		var sum =  Math.round(sum * Math.pow(10, 2)) / Math.pow(10, 2);
<<<<<<< HEAD
		var summedup= "<tr id=\"sum\"><td><span><b>Total Expenses 06/14</b></span></td><td id=\"totalsum\" class=\"listPrice\"><b>"+sum+" €</b></td</tr>";
=======
		var summedup= "<tr id=\"sum\"><td><span><b>Total Expenses 06/14</b></span></td><td id=\"totalsum\" class=\"listPrice\"><b>"+sum+" €</b></td></tr>";
>>>>>>> origin/master
		var table = "<div>" + begintable + tablerows +  "</tbody>" + endtable + addbutton +"</div>";
		return table;
};

function addExpense() {
 	var day = new Date();
 	var expenseEntry = document.getElementById('inputName').value;
 	var expensePrice = document.getElementById('inputPrice').value;
 	var category = document.getElementById('inputCategory').value; 

	categories[category].expenses.push({name: expenseEntry, price: expensePrice, date:day,});
	$("#panel-body-"+category).html(createExpenseEntry(category));

	$('#changeable').removeClass().addClass('fa fa-spinner fa-spin');
	setTimeout(function(){$('#changeable').removeClass().addClass('glyphicon glyphicon-ok').css('color','#A2CFA5');}, 1500);
	setTimeout(recolor ,2500);
 };

function recolor() {
	$('#addExpenseModal').modal('hide');
	$('#changeable').removeAttr('style');
	document.addExpenseForm.reset();
};
