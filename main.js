window.onload = function() {

    document.getElementById('n1').onclick = function() {
        DialClick("n1");
    }

    document.getElementById('n2').onclick = function() {
        DialClick("n2");
    }

    document.getElementById('n3').onclick = function() {
        DialClick("n3");
    }

    document.getElementById('n4').onclick = function() {
        DialClick("n4");
    }

    document.getElementById('n5').onclick = function() {
        DialClick("n5");
    }

    document.getElementById('n6').onclick = function() {
        DialClick("n6");
    }

    document.getElementById('n7').onclick = function() {
        DialClick("n7");
    }

    document.getElementById('n8').onclick = function() {
        DialClick("n8");
    }

    document.getElementById('n9').onclick = function() {
        DialClick("n9");
    }

    document.getElementById('agree').onclick = function() {
        target = document.getElementById('agree');
        target.style.background = '#CCC';
        setTimeout("target.style.background = '#FFF';", 500);
    }

    function DialClick(nx) {
        target = document.getElementById(nx);
        target.className = "active";
        setTimeout("target.className = 'number'", 200);
    }

    function NumberBackgroundClean() {
        var elements = document.getElementsByClassName('number');
        for (i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#FFF';
        }
    }


}