
    let number = 0;
    document.querySelector("button").onclick = function() {
        number = number + 0.05;
        document.getElementById("number").innerHTML = 'Your balance is ' + Math.floor(number * 100) / 100 + ' ART';
        document.querySelector("button").setAttribute('disabled', 'disabled');
    }

        function btnenabl() {
        document.getElementById('rewa').removeAttribute("disabled");}
        
        