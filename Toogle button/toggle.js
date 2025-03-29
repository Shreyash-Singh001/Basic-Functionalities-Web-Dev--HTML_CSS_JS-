const body=document.querySelector("body")
const tog=document.querySelector(".co");

const toggle = () =>{
    const rev=tog.classList.toggle("active");
}

const darkmode = () => {
    document.body.classList.toggle("dark");
}

tog.addEventListener("click", toggle);
tog.addEventListener("click", darkmode);
