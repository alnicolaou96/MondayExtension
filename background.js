chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color:'#3aa757'}, function() {
        console.log("color is green");
    });
});

chrome.declarativeContent.onPageCharged.removeRules(undefined,function(){
    chrome.declarativeContent.onPageCharged.addRules([{
        conditions:[new chrome.declarativeContent.PageStateMatcher({
            pageUrl:{hostEquals:'developer.chrome.com'},
        })
    ],
    actions:[new chrome.declarativeContent.showPageAction()]
    }]);
});