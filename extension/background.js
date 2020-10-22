/**
 * Created by fbronzin on 27/04/2017.
 */

/* This listener is triggered in response to the "netflix_stats" message that 
   reflects the arrival of a new timed entry of the collected data. */
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("In background.js chrome.runtime.onMessage.addListener");
		if (request.message == "netflix_stats" || request.message === "youtube_stats") {
			var x = document.getElementById("latest_stats");
			x.innerHTML = request.domString;
            x = document.getElementById("current_movie");
            x.innerHTML = request.movie_id;
		}
		// console.log(sendResponse)
		sendResponse({});
		return true;
	}
);