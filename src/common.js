function checkJenkinsState() {
    if (localStorage['jenkins_url'] != undefined) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', localStorage['jenkins_url'] + '/api/json', true);
        if (localStorage['username'] != undefined && localStorage['api_token'] != undefined) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(localStorage['username'] + ':' + localStorage['api_token']));
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var response = JSON.parse(xhr.responseText);
                var jobs = response.jobs;
                chrome.browserAction.setBadgeText({"text":""});
                for(var i = 0, len = jobs.length; i < len; i++) {
                    var color = jobs[i].color;
                    if (color.match(/_anime$/)) {
                        chrome.browserAction.setBadgeText({"text":"Use"});
                        break;
                    }
                }
            }
        };
        xhr.send();
    } else {
        chrome.browserAction.setBadgeText({"text":"None"});
    }
}

setIntervalCheckState = function() {
    if (localStorage['interval_minutes'] != undefined) {
        interval_minutes = parseInt(localStorage['interval_minutes'], 10);
        if (interval_minutes < 1) {
            interval_minutes = 1;
        }
    } else {
        interval_minutes = 1;
    }
    localStorage['timerId'] = setInterval(checkJenkinsState, interval_minutes*60*1000);
};

clearIntervalTimer = function(){
    if (localStorage['timerId'] != undefined) {
        clearInterval(localStorage['timerId']);
    }
};

setBrowserActionOnClickTrigger = function(){
    chrome.browserAction.onClicked.addListener(function() {
        if (localStorage['jenkins_url'] != undefined) {
            chrome.tabs.create({url: localStorage['jenkins_url']})
        }
    });
};