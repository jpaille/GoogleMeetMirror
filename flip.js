(function() {
    chrome.runtime.sendMessage('pageActionClicked');
    if (window.camIsFlipped == true) {
        unflipVideos()
        window.camIsFlipped = false;
    } else if (window.camIsFlipped == false) {
        flipVideos()
        window.camIsFlipped = true;
    }
})();
