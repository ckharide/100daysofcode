
 var timeour;

function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("clockdisplay").innerText = time;
        document.getElementById("clockdisplay").textContent = time;
        
        setTimeout(showTime, 1000);
    
}

function add() {
 let value = document.getElementById("text").textContent;
 time = value.split(':');
 mins = parseInt(time[0]);
 secs = parseInt(time[1]);
 secs = secs + 1;
 if(secs === 60) {
     mins = mins +1 ;
     secs = 0;
 }
 document.getElementById("text").textContent = mins + ":" + secs;
 timeour = setTimeout(add, 100);
}

function reset() {
    document.getElementById("text").textContent = 00 + ":" + 00;
    clearTimeout(timeour);
}

function stop() {
    let value = document.getElementById("text").textContent;
    time = value.split(':');
    mins = parseInt(time[0]);
    secs = parseInt(time[1]);
    document.getElementById("text").textContent = mins + ":" + secs;
    clearTimeout(timeour);
}