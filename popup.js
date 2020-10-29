(function() {
    'use strict';

    window.activated = new Array();

    const flipMessage = 'Google Meet Mirror - My cam is not flipped';

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'flip.js', allFrames: true}
        );
        
        chrome.pageAction.getTitle({ tabId: tabs[0].id }, (title) => {
            chrome.pageAction.setTitle({
                tabId: tabs[0].id,
                title: (title == flipMessage) ? 'Google Meet Mirror - My cam is flipped' : flipMessage
            });

            window.close();
        });
    });

    chrome.pageAction.onClicked.addListener(function(tab) { 
        if(!window.activated[tab.id]) {
	 chrome.pageAction.setIcon({tabId: tab.id, path: 'icon24.png'});
	 window.activated[tab.id] = true;
	 alert("activated");
        } else{
	 chrome.pageAction.setIcon({tabId: tab.id, path: 'icon24_deactivated.png'});
	 window.activated[tab.id] = false;
	 alert("not activated");
        }
    })
}
)();
