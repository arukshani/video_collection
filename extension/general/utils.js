function getTabID() {
    chrome.runtime.sendMessage( {
            message: "get_tab_id"
        },
        function(response) {
            return response;
        }
    );
}

function hashcode(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return String(hash).replace("-", "0");
}

function simulateCtrlShiftAltD() {
    console.log("simulateCtrlShiftAltD");
	function keyEvent(el, ev) {
		var eventObj = document.createEvent("Events");
		eventObj.initEvent(ev, true, true);

		eventObj.keyCode = 68;
		eventObj.which = 68;
		eventObj.ctrlKey = true;
		eventObj.shiftKey = true;
		eventObj.altKey = true;
        // element.addEventListener("DOMContentLoaded", function(event) {
        //     // console.log("DOM fully loaded and parsed");
        //     console.log(el);
        //     el.dispatchEvent(eventObj);
        //  });
        el.dispatchEvent(eventObj);
		
	}
    // document.addEventListener("DOMContentLoaded", function(event) {
        var element = document.body;
        // console.log("DOM fully loaded and parsed" + element);
        keyEvent(element, "keydown");
	    keyEvent(element, "keypress");
	    keyEvent(element, "keyup");
    // });
	
}