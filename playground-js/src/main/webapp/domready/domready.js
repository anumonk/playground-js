(function(domReady) {

	// Array of DOMContentLoaded event handlers.
	var events = {};
	var domReadyID = 1;
	var bDone = false;

	domReady.attach = function(handler) {
		// Assign each event handler a unique ID. If the handler has an ID, it
		// has already been added to the events object or been run.
		if (!handler.$$domReadyID) {
			handler.$$domReadyID = domReadyID++;

			// If the DOMContentLoaded event has happened, run the function.
			if (bDone) {
				handler();
				return true;
			}

			// store the event handler in the hash table
			events[handler.$$domReadyID] = handler;
			console.log("Added dom-ready event handler at index:" + domReadyID);
		}
	};

	function run() {
		// quit if this function has already been called
		console.log("Running all dom-ready listeners");
		if (bDone) {
			return;
		}

		// Flag this function so we don't do the same thing twice
		bDone = true;

		// iterates through array of registered functions
		for ( var i in events) {
			events[i]();
		}
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function() {
			console.log("DOM content loaded event fired");
			run();
		}, false);
	}

}(window.domReady = window.domReady || {}));
