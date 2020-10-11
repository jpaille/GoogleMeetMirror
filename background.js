chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    css: ["video"]
                })
            ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
});

var isFlipped = true;
// handle icon change on click
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === 'pageActionClicked') {
        chrome.tabs.query({
	 active: true,
	 lastFocusedWindow: true
        }, function(tabs) {
	 var tab = tabs[0];
	 if (isFlipped){
	     chrome.pageAction.setIcon({tabId: tab.id, path: 'icon24_deactivated.png'});
	     isFlipped = false;
	 }
	 else {
	     chrome.pageAction.setIcon({tabId: tab.id, path: 'icon24.png'});
	     isFlipped = true;
	 }
        });
    }
});
