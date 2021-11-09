function clockHandler() {

let time = new Date().toTimeString();

document.getElementById("clockContainer").innerHTML = "<p>" + time + "</p>";

}

let interval = setInterval(clockHandler, 1000);