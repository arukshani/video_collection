/**
 * Created by fbronzin on 27/04/2017.
 */

/* This listener is triggered in response to the "netflix_stats" message that 
   reflects the arrival of a new timed entry of the collected data. */
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		// console.log(sender.tab ?
		// 	"from a content script:" + sender.tab.url :
		// 	"from the extension");
		
		// console.log("In background.js chrome.runtime.onMessage.addListener");
		// if (request.message == "netflix_stats" || request.message === "youtube_stats") {
			if (request.message == "netflix_stats") {
			var x = document.getElementById("latest_stats");
			console.log("movie id" + request.movie_id)
			x.innerHTML = request.domString;
            x = document.getElementById("current_movie");
            x.innerHTML = request.movie_id;
		}
		// console.log(sendResponse)
		sendResponse({});
		return true;
	}
);


// chrome.runtime.onMessage.addListener(request,sender, sendResponse => {
// 	console.log("HELLO");
// 	sendResponse({ farewell: 'goodbye' });
// 	return true;
// 	// if (request.greeting === 'hello') {
// 	//   sendResponse({ farewell: 'goodbye' })
// 	// }
// });