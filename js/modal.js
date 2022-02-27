document.getElementById('close').addEventListener('click', function () {
    chrome.storage.local.set({closed: '1'});
});
Array.from(document.getElementsByClassName('trans')).forEach(function (elem) {
    elem.innerText = chrome.i18n.getMessage(elem.getAttribute('data-text'))
});
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    chrome.tabs.create({url: chrome.runtime.getURL('/1v1_lol.html')}, function () {
        chrome.storage.local.set({opened: Date.now()});
    });
});