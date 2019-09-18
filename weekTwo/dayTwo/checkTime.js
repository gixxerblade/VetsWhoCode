function keepTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML = `${hour}:${minutes}:${seconds}`;
    let timeRun = setTimeout(keepTime, 500);
  }
   function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    return i;}
