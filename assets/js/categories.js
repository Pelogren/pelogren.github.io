var categories = [
						{ //EDUCATION
							name:'Education',
							color:'#D95246', //red
							limit: '100',
							expenses: [ 
										{name: 'Bear Neurowissenschaften',
										 price: '98.90 €',
										 date: '10.6.14',
										},
										{name: 'Schöning Theo. Informatik',
										 price: '19.90 €',
										 date: '14.6.14',
										},
										{name: 'Bleistift',
										 price: '0.90 €',
										 date: '16.6.14',
										}
										]
						},


						{//FOOD
							name:'Food',
							color:'#2A2931', //dunkeldunkelblau
							limit: '220',
							expenses: [ 
										{name: 'Einkauf Aldi',
										 price: '17.96 €',
										 date: '11.6.14',
										},
										{name: 'Döner',
										 price: '3.50 €',
										 date: '14.6.14',
										},
										{name: 'Einkauf Rewe',
										 price: '20.50 €',
										 date: '16.6.14',
										}
										]
						},
						{//Entertainment
							name:'Entertainment',
							color:'#53798D', //hellblau
							limit: '80',
							expenses: [ 
										{name: 'Biergarten',
										 price: "17.60 €",
										 date: '5.6.14',
										},
										{name: 'Kino mit James',
										 price: "13.50 €",
										 date: '14.6.14',
										}
										]},
						{//Transportation
							name:'Entertainment',
							color:'#53798D', //hellblau
							limit: '80',
							expenses: [ 
										{name: 'Semesterticket SS14',
										 price: '141.00 €',
										 date: '5.6.14',
										},
										{name: 'Taxi Ulm',
										 price: '13.50 €',
										 date: '11.6.14',
										}

										]}
				];


function createExpenseEntry(category){

		var begintable= "<table>";
		var tablerows= "<thead><tr><th>Expense</th><th>Price</th></tr></thead><tbody>";
		var endtable= "</table>";
		var addexpense= "<tr class=\"addexpense\" onclick='addExpense("+category+")'><td><b>Add new Expense</b></td><td><i class=\"fa fa-plus-dark fa-plus-square-o fa-2x\"></i></td></tr>";
	
	for (var element in categories[category].expenses) {  //erstellt für jedes Element in Expenses einer bestimmten Kategorie (categorie) einen Eintrag

		var tablerow = "<tr><td>" + categories[category].expenses[element].name + "</td><td>" + categories[category].expenses[element].price + "</td></tr>";

		var tablerows= tablerows + tablerow;
	}

		var table = "<div>" + begintable + tablerows + "</tbody>" + addexpense + endtable + "</div>";
		return table;
};


// function addExpense (category) {
// 	var day = new Date();

// 	categories[category].expenses.push({name:'test', price:'0€', date:day,});
// 	$("#panel-body-education").html(createExpenseEntry(category));
// };

