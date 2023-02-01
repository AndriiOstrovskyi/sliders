let counterr = 1;

setInterval(function(){
    document.getElementById('radio' + counterr).checked = true;
    console.log(document.getElementById('radio' + counterr).checked)
    counterr++;
    if(counterr > 4) {
        counterr = 1;
    }
}, 5000);