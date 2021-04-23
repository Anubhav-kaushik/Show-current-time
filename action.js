function deciToHex(num){
    num = parseInt(num)
    let hexNum = ["0", "1", "2", "3", "4", '5', '6',
    '7', '8', '9', 'a', 'b', 'c', 'd',
     'e', 'f']

     num = num % 16
     num = hexNum[num]
     return num
}

function changeColor(element, numbers){
    /*
    @param numbers: maximum length of the array should be 6
     */
    let hexNums = []
    numbers.forEach(element => {
        let temp = deciToHex(element)
        hexNums.push(temp)       
    });
    number = hexNums.join("")
    element.style.color = "#"+number;
}

function zeroBehind(number){
    if(number<10)
        number = "0"+number;
    return number;
}

function updateCurrentTime(id){
    let date = new Date();
    let day = date.getDay();

    let days = ["Sunday","Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayMonth = zeroBehind(date.getDate());
    let month = zeroBehind(date.getMonth() + 1);
    let year = zeroBehind(date.getFullYear());

    let hour = zeroBehind(date.getHours());
    let minutes = zeroBehind(date.getMinutes());
    let seconds = zeroBehind(date.getSeconds());

    var el = document.getElementById(id);
    el.textContent = dayMonth + "/" + month + "/" + year + " " + days[day] + " " + hour + ":" + minutes + ":" + seconds;

    changeColor(el, [dayMonth, month, day, hour, minutes, seconds]);
}

setInterval(updateCurrentTime, 1000, "time");

