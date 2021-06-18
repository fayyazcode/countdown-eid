

var a= setInterval(function (){
    var setDate = new Date("20 july, 2021").getTime();
    var now = new Date().getTime();
    var differ = setDate - now
    var days = Math.floor(differ / (1000 * 60 * 60 * 24))
    var hours = Math.floor((differ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var mints = Math.floor((differ % (1000 * 60 * 60)) / (1000 * 60))
    var sec = Math.floor((differ % (1000 * 60)) / 1000)


document.getElementById('time1').innerHTML=days +" :" ;
document.getElementById('time2').innerHTML=hours+" :" ;
document.getElementById('time3').innerHTML=mints+" :" ;
document.getElementById('time4').innerHTML=sec ;


document.getElementById('one').innerHTML="Days"
document.getElementById('two').innerHTML=" Hours"
document.getElementById('three').innerHTML=" Minutes"
document.getElementById('four').innerHTML=" Seconds"
},1000);
function bg(){
var a=document.getElementById('head').style.backgroundImage="url(a.gif)"

}