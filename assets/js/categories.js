var categories = [
						{ //EDUCATION
							name:'Education',
							color:'#D95246', //red
							limit: '100',
							expenses: [ 
										{name: 'Bear Neurowissenschaften',
										 price: 98.90,
										 date: '10.6.14',
										},
										{name: 'Schöning Theo. Informatik',
										 price: 19.90,
										 date: '14.6.14',
										},
										{name: 'Bleistift',
										 price: 0.90,
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
										 price: 17.96,
										 date: '11.6.14',
										},
										{name: 'Döner',
										 price: 3.50,
										 date: '14.6.14',
										},
										{name: 'Einkauf Rewe',
										 price: 20.50 ,
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
										 price: 17.60,
										 date: '5.6.14',
										},
										{name: 'Kino mit James',
										 price: 13.50,
										 date: '14.6.14',
										}
										]},
						{//Transportation
							name:'Entertainment',
							color:'#53798D', //hellblau
							limit: '80',
							expenses: [ 
										{name: 'Semesterticket SS14',
										 price: 141.00,
										 date: '5.6.14',
										},
										{name: 'Taxi Ulm',
										 price: 13.50,
										 date: '11.6.14',
										}

										]}
				];




function createExpenseEntry(category){

		var begintable= "<table>";
		var tablerows= "<thead><tr><th>Expense</th><th class=\"listPrice\">Price</th></tr></thead><tbody>";
		var endtable= "</table>";
		var sum= 0; 
		var addbutton= "<button type=\"button\" class=\"btn btn-primary btn-lg btn-block flying\" data-toggle=\"modal\" data-target=\"#addExpenseModal\">ADD NEW EXPENSE</button>"; 

	for (var element in categories[category].expenses) {  //erstellt für jedes Element in Expenses einer bestimmten Kategorie (categorie) einen Eintrag
		var sum= sum + categories[category].expenses[element].price;
		var tablerow = "<tr><td>" + categories[category].expenses[element].name + "</td><td class=\"listPrice\">" + categories[category].expenses[element].price + " €</td></tr>";

		var tablerows= tablerows + tablerow;
	}
		var sum =  Math.round(sum * Math.pow(10, 2)) / Math.pow(10, 2);
		var summedup= "<tr id=\"sum\"><td><span><b>Total Expenses 06/14</b></span></td><td id=\"totalsum\" class=\"listPrice\"><b>"+sum+" €</b></td></tr>";
		var table = "<div>" + begintable + tablerows +  summedup + "</tbody>" + endtable + addbutton +"</div>";
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
