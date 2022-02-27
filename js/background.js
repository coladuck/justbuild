chrome.browserAction.onClicked.addListener(game_1v1_lol);

chrome.runtime.onInstalled.addListener(function (r) {
    if (r.reason === "install")
        game_1v1_lol();
});

function game_1v1_lol() {
    chrome.tabs.create({url: chrome.runtime.getURL("1v1_lol.html")}, function () {})
}