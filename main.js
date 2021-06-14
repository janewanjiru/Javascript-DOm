function doSomething(){
    document.getElementById("mybody").setAttribute("style","background-color:#F5D95A;")
 }
 function btnFunction(){
     var x = document.getElementById("blog").getAttribute("name")
     document.getElementById("display").innerHTML = x
     document.getElementById("display1").innerHTML = "'Judith - Late is not never ,its all about time'"
     document.getElementById("display2").innerHTML = "Veronicah - Software Developer "
     document.getElementById("display3").innerHTML = "Juliet - Life is a mistery"
     document.getElementById("display4").innerHTML = "Jane-if the opportunity doesn't knock , build a door. "
     document.getElementById("display5").innerHTML = "Pamela -The price of greatness is responsibility"
     document.getElementById("display6").innerHTML = "Constant"
     var y = document.getElementById("blog").hasAttribute("NAME");
     document.getElementById("hasSomething").innerHTML = y;
     alert("Its included")
 }