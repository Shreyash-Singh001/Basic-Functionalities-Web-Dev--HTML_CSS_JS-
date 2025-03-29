let section = document.querySelector("section");
let icons = document.querySelector(".icons");

const darkmode =() =>{
    section.classList.toggle("dark");
}


// calling the function every one sec 
setInterval(()=>{
    let date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();

    let d;
    d=hour<12? "AM" : "PM";
    hour=hour>12? hour-12 : hour;
    hour=hour==0? hour=12:hour;

    document.querySelector(".hour-num").innerText = hour;
    document.querySelector(".min-num").innerText = min;
    document.querySelector(".sec-num").innerText = sec;
    document.querySelector(".am-pm").innerText = d;

},1000);
icons.addEventListener("click", darkmode);
