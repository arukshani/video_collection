function simulateCtrlShiftAltD() {
    // console.log("simulateCtrlShiftAltD");
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