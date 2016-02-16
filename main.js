var week;
var monthEST;
var rideSpent;

function rideCalc(){
week = document.getElementById("week").value;
monthEST = week * 4;
rideSpent = monthEST * 2.75;
sweetSpot();
}

function sweetSpot(){
	if (rideSpent > 116.50) {
		alert("Just buy a monthly!!! You're spending too much money.");
	} else {
		alert("Keep on keeping on. Don't buy a monthly.")
	}
}