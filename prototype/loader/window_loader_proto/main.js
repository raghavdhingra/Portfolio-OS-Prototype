var counterSenArr = 0;
var counterSenArrTimer = 80;
const inc = () => {
    var sentence = "Establishing a Secure Connection";
    var senArr = sentence.split("");
    var waitsentence = "Please wait";
    var waitSenArr = waitsentence.split("");
    senArr.push("<br>");
    for (var i = 0;i<waitSenArr.length;i++){
        senArr.push(waitSenArr[i]);
    }
    setTimeout(() => {
        if (counterSenArr < 44){
            document.getElementById("sentence").innerHTML+=senArr[counterSenArr];
            counterSenArr++;
            inc();
        }
        else{
            return 0;
        }
    }, counterSenArrTimer);
}
setTimeout(() => {
    document.getElementById("sentence").innerHTML+='';
}, 4500);
inc();