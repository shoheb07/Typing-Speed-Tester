let timer = 60;
let interval;

function startTest(){

    clearInterval(interval);

    timer = 60;

    document.getElementById("time").innerHTML =
        "Time: " + timer + " sec";

    interval = setInterval(function(){

        timer--;

        document.getElementById("time").innerHTML =
            "Time: " + timer + " sec";

        if(timer <= 0){

            clearInterval(interval);

            calculateResult();
        }

    },1000);
}

function calculateResult(){

    let originalText =
        document.getElementById("sentence").innerText;

    let typedText =
        document.getElementById("input").value;

    let words =
        typedText.trim().split(" ").length;

    let wpm = words;

    let correctChars = 0;

    for(let i=0; i<typedText.length; i++){

        if(typedText[i] === originalText[i]){
            correctChars++;
        }
    }

    let accuracy =
        (correctChars / originalText.length) * 100;

    document.getElementById("wpm").innerHTML =
        "WPM: " + wpm;

    document.getElementById("accuracy").innerHTML =
        "Accuracy: " + accuracy.toFixed(2) + "%";
}
