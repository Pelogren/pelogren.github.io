$(document).on("pagecreate","#pageone",function(){

  	$("#dailyOverview").on("swipeleft",function(){
  	  $("#monthlyOverview").show();
  	  $("#dailyOverview").hide();
  	});

  	$("#monthlyOverview").on("swiperight",function(){
    $("#dailyOverview").show();
    $("#monthlyOverview").hide();
  });
});