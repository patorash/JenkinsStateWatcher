names = ['jenkins_url', 'interval_minutes'];

document.getElementById('save').onclick = function() {
    for(var i = 0, len = names.length; i < len; i++) {
        console.log(names[i])
        localStorage[names[i]] = document.getElementById(names[i]).value;
    }
    clearIntervalTimer();
    setIntervalCheckState();
    setBrowserActionOnClickTrigger();
    checkJenkinsState();
    alert('Saved!!');
};

document.body.onload = function(){
    for(var i = 0, len = names.length; i < len; i++) {
        if (localStorage[names[i]] != undefined) {
            document.getElementById(names[i]).value = localStorage[names[i]];
        }
    }
};

