
function addEvent(element, type, handler) {
	
	if (element.addEventListener) {
		console.log("Adding handler for event type:"+type+" to element:"+element);
		element.addEventListener(type, handler, false);
	} 
}




