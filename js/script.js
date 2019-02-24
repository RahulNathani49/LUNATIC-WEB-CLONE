function click1(){
    var sec = document.getElementById('circ2').style.backgroundColor = "#dcdcdc";
    document.getElementById('circ1').style.backgroundColor = "#1ea9fe";
}
function click2(){
    var fir = document.getElementById('circ1').style.backgroundColor = "#dcdcdc";
    
    document.getElementById('circ2').style.backgroundColor = "#1ea9fe" ;
    
}

function togg(){                                    document.getElementById('menubar').style.display = "none";

 document.getElementById('cross').style.display = "block";

document.getElementsByClassName('mobile-menu')[0].style.display = "block"; 

}

function crossclick(){
    
 document.getElementById('menubar').style.display = "block";
    
 document.getElementById('cross').style.display = "none"; 

document.getElementsByClassName('mobile-menu')[0].style.display = "none";
    
    
}