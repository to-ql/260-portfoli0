const workBtn01 = document.querySelector(".js-workBtn01")
const workPage01 = document.querySelector(".js-workPage01")
const workBtn02 = document.querySelector(".js-workBtn02")
const workPage02 = document.querySelector(".js-workPage02")
const workBtn03 = document.querySelector(".js-workBtn03")
const workPage03 = document.querySelector(".js-workPage03")
const workBtn04 = document.querySelector(".js-workBtn04")
const workPage04 = document.querySelector(".js-workPage04")

const WORK_CLICKED = "workAni"

function handleClickWork01() {
    workPage01.classList.add(WORK_CLICKED); 
    workPage02.classList.remove(WORK_CLICKED);
    workPage03.classList.remove(WORK_CLICKED);  
    workPage04.classList.remove(WORK_CLICKED); 
 }

 function handleClickWork02() {
    workPage02.classList.add(WORK_CLICKED); 
    workPage01.classList.remove(WORK_CLICKED); 
    workPage03.classList.remove(WORK_CLICKED); 
    workPage04.classList.remove(WORK_CLICKED); 
 }

 function handleClickWork03() {
    workPage03.classList.add(WORK_CLICKED); 
    workPage01.classList.remove(WORK_CLICKED); 
    workPage02.classList.remove(WORK_CLICKED); 
    workPage04.classList.remove(WORK_CLICKED); 
 }
 function handleClickWork04() {
   workPage04.classList.add(WORK_CLICKED); 
   workPage01.classList.remove(WORK_CLICKED); 
   workPage02.classList.remove(WORK_CLICKED); 
   workPage03.classList.remove(WORK_CLICKED); 
}


function init () {
    workBtn01.addEventListener("click", handleClickWork01)
    workBtn02.addEventListener("click", handleClickWork02)
    workBtn03.addEventListener("click", handleClickWork03)
    workBtn04.addEventListener("click", handleClickWork04)
}

init();
