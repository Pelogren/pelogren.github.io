function toDaily() {
   	$("#dailyOverview").show();
	$("#monthlyOverview").hide();
	$("#periodOverview").hide();
	$("#daily").addClass('activeOverview');   
	$("#monthly").removeClass('activeOverview');
	$("#periodly").removeClass('activeOverview');
 };

 function toMonthly() {
   	$("#dailyOverview").hide();
   	$("#monthlyOverview").show();
   	$("#periodOverview").hide();
   	$("#daily").removeClass('activeOverview');   
	$("#monthly").addClass('activeOverview');
	$("#periodly").removeClass('activeOverview');
 };

 function toPeriod() {
   	$("#dailyOverview").hide();
   	$("#monthlyOverview").hide();
   	$("#periodOverview").show();
   	$("#daily").removeClass('activeOverview');   
	$("#monthly").removeClass('activeOverview');
	$("#periodly").addClass('activeOverview');
 };


$("#dailyOverview").on("swipeleft",toMonthly());
$("#monthlyOverview").on("swipeleft",toPeriod());
$("#periodOverview").on("swiperight",toMonthly());
$("#monthlyOverview").on("swiperight",toDaily());
