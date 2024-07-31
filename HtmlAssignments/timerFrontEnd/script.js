function changeText(){
        var button = document.getElementById("startStop");
        if(button.innerText=="Stop"){
            button.innerText = "Start";
        }else{
        button.innerText = "Stop";
    }
}
document.getElementById("startStop").addEventListener("click",changeText);