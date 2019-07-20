
window.onload =function(){
    document.getElementById('n1').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n1').style.background = '#FFC9F4';
    }

    document.getElementById('n2').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n2').style.background = '#ACEEFF';
    }

    document.getElementById('n3').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n3').style.background = '#80ff7dd6';
    }

    document.getElementById('n4').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n4').style.background = '#80ff7dd6';
    }

    document.getElementById('n5').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n5').style.background = '#80ff7dd6';
    }

    document.getElementById('n6').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n6').style.background = '#80ff7dd6';
    }

    document.getElementById('n7').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n7').style.background = '#80ff7dd6';
    }

    document.getElementById('n8').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n8').style.background = '#80ff7dd6';
    }

    document.getElementById('n9').onclick = function(){
      NumberBackgroundClean();
      document.getElementById('n9').style.background = '#80ff7dd6';
    }

    function NumberBackgroundClean() {
        var elements = document.getElementsByClassName('number');
        for(i=0; i<elements.length; i++){
            elements[i].style.backgroundColor = '#FFF';
        }
    }

    document.getElementById('agree').onclick = function(){
      document.getElementById('agree').style.background = '#AAA';
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
