// the different advices
var advices = [
	"Dogs have no money. Isn’t that amazing? They’re broke their entire lives. But they get through. You know why dogs have no money? .. No Pockets.",
	"Money is not the most important thing in the world. Love is. Fortunately, I love money.",
	"October: This is one of the particularly dangerous months to invest in stocks. Other dangerous months are July, January, September, April, November, May, March, June, December, August and February.",
	"Undermine the entire economic structure of society by leaving the pay toilet door ajar so the next person can get in free.",
	"Money is better than poverty, if only for financial reasons.",
	"It doesn't matter if you're black or white... the only color that really matters is green.",
	"Money is the opposite of the weather. Nobody talks about it, but everybody does something about it.",
	"The safest way to double your money is to fold it over and put it in your pocket.",
	"A bank is a place that will lend you money if you can prove that you don't need it.",
	"Cocaine is God's way of saying you're making too much money."
]

// function to change the advice displayed
function changeAdvice () {
	var content = advices[Math.floor(Math.random()*advices.length)];
	$('#adviceBox').hide();
	$('#advice').html(content);
	setTimeout(function(){$('#adviceBox').show();},1);
}