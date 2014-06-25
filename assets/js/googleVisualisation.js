google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawVisualization);

      
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Category', 'Expenses Juno'],
      ['Education',     12.90],
      ['Food',      18.50],
      ['Entertainment',  20.00],
      ['Transportation',   15.00]
    ]);
    var options = {
      colors:['#D95246','#2A2931','#53798D','#344E5B'],
      fontName:'Roboto',

      chartArea:{left:0,top:20,width:'100%',height:'80%'},

      backgroundColor:'none',
      pieSliceText: 'none',
      legend: {position: 'labeled'}
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

  }

  function drawVisualization() {
    // Some raw data (not necessarily accurate)
     var data = google.visualization.arrayToDataTable([
      ['Month', 'Education', 'Food', 'Entertainment', 'Transportation'],
      ['April 2014',  41,      204,         33,             162],
      ['May 2014',  13,      178,        69,             26.8],
      ['Juno 2014',  57.98,      198,        57,             64.7]
    ]);
    var options = {
      title : 'Expenses last three months',
      vAxis: {title: "Expenses in €"},
      seriesType: "bars",
      colors:['#D95246','#2A2931','#53798D','#344E5B'],
      fontName:'Roboto',
      backgroundColor:'none',
      legend: {position: 'none'},
      chartArea:{left:0,top:10,width:'75%',height:'80%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    var data1 = google.visualization.arrayToDataTable([
  ['Category','Expense', { role: 'style' }, { role: 'annotation' }],
  ['Education',13.94, '#D95246', 'Education'],           
  ['Food' ,18.9, '#2A2931', 'Food'],            
  ['Entertainment', 19.30, '#53798D','Entertainment'],
  ['Transportation', 16.45, '#344E5B','Transportation'] 
      ]);
 var options1 ={
            width:600, height:200,
            vAxis: {textPosition: "none"},
            hAxis: {title: "Euro"},
            chartArea:{left:0,top:10,width:'40%',height:'100%'},
            fontName:'Roboto',
            backgroundColor:'none',
            legend: {position: 'none'}
           };
  // Create and draw the visualization.
  var chart1= new google.visualization.BarChart(document.getElementById('visualization')).
      draw(data1,options1);

  // The donut chart1
    var data = google.visualization.arrayToDataTable([
    ['BUDGET', 'SPEND'],
    ['SPEND',     90],
    ['LEFT',      30]
  ]);

  var options2 ={
            pieHole: 0.7,
            colors:['#D95246','#DDDDDD'],
            fontName:'Roboto',

            chartArea:{left:0,top:20,width:'70%',height:'80%'},

            backgroundColor:'none',
            pieSliceText: 'none',
            legend: {position: 'none'}
           };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options2);

    // The donut chart2
    var data = google.visualization.arrayToDataTable([
    ['BUDGET', 'SPEND'],
    ['SPEND',     40],
    ['LEFT',      35]
  ]);

  var options3 ={
            pieHole: 0.7,
            colors:['#2A2931','#DDDDDD'],
            fontName:'Roboto',

            chartArea:{left:0,top:20,width:'70%',height:'80%'},

            backgroundColor:'none',
            pieSliceText: 'none',
            legend: {position: 'none'}
           };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options3);

    // The donut chart3
    var data = google.visualization.arrayToDataTable([
    ['BUDGET', 'SPEND'],
    ['SPEND',     60],
    ['LEFT',      5]
  ]);

  var options4 ={
            pieHole: 0.7,
            colors:['#53798D','#DDDDDD'],
            fontName:'Roboto',

            chartArea:{left:0,top:20,width:'70%',height:'80%'},

            backgroundColor:'none',
            pieSliceText: 'none',
            legend: {position: 'none'}
           };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart.draw(data, options4);

    // The donut chart4
    var data = google.visualization.arrayToDataTable([
    ['BUDGET', 'SPEND'],
    ['SPEND',     18],
    ['LEFT',      72]
  ]);

  var options5 ={
            pieHole: 0.7,
            colors:['#344E5B','#DDDDDD'],
            fontName:'Roboto',

            chartArea:{left:0,top:20,width:'70%',height:'80%'},

            backgroundColor:'none',
            pieSliceText: 'none',
            legend: {position: 'none'}
           };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart4'));
  chart.draw(data, options5);
  }




  



