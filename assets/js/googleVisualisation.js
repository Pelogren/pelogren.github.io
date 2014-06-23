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
      chartArea:{left:10,top:10,width:'70%',height:'80%'},
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
      series: {3: {type: "line"}},
      colors:['#D95246','#2A2931','#53798D','#344E5B'],
      fontName:'Roboto',
      backgroundColor:'none',
      legend: {position: 'none'},
      chartArea:{left:25,top:10,width:'70%',height:'80%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

