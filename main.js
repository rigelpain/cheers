

function BackgroundChangeColor1() {
    NumberBackgroundClean();
    document.getElementById('n1').style.background = '#FFC9F4';
}

function BackgroundChangeColor2() {
    NumberBackgroundClean();
    document.getElementById('n2').style.background = '#ACEEFF';
}

function agree(){

}

function NumberBackgroundClean() {
    var elements = document.getElementsByClassName('number');
    for(i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = '#FFF';
    }
}

function clickTest(){
    target = document.getElementById("n8");
    if(target.className == null || target.className == "number") {
      target.className = "active";
    }else {
      target.className = "number";
    }
}
