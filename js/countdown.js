function startTimer(duration, display) {
    var timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
		
		days = parseInt(timer / (24 * 60 * 60), 10);
		hours = parseInt((timer - (days * 24 * 60 * 60)) / (60 * 60), 10);
        minutes = parseInt((timer - ((days * 24 * 60 * 60) + (hours * 60 * 60))) / 60, 10);
        seconds = parseInt((timer - ((days * 24 * 60 * 60) + (hours * 60 * 60))) % 60, 10);

		/*
		hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		*/

        display.text(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var goalTime = (28 * 24 * 60 * 60 ) + (6 * 60 * 60) + (42 * 60) + 12,
        display = $('#time');
    startTimer(goalTime, display);
});