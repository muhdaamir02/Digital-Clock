const hele = document.getElementById("hours");
const mele = document.getElementById("minutes");
const sele = document.getElementById("seconds");
const apele = document.getElementById("ampm");
const ap1ele = document.getElementById("ampm1");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "AM";
    let ap1 = "Morning";
    if(h>12&&h<17) {
        h=h-12;
        ap = "PM";
        ap1="Afternoon";
    }
    if(h>16) {
        h=h-12;
        ap = "PM";
        ap1="Evening";
    }
    h = h<10 ? "0"+h:h;
    m = m<10 ? "0"+m:m;
    s = s<10 ? "0"+s:s;
    hele.innerText = h;
    mele.innerText = m;
    sele.innerText = s;
    apele.innerText = ap;
    ap1ele.innerText = ap1;
    setTimeout(()=>{
        updateClock();
    },1000)
    
}

updateClock();

