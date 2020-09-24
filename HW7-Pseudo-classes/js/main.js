	function myFunc (NameId) {
        let n = 1 + Math.floor(Math.random()*10);
        document.getElementById(NameId).style.backgroundImage = "url(img/"+n+".jpg)" ;
        document.getElementById(NameId).style.backgroundSize = "cover";
    }
    function back(NameId) {
        document.getElementById(NameId).style.background = "rgb(92, 90, 90)";
    }