const profileBtn = document.querySelector(".js-profileBtn");
const profilePage = document.querySelector(".js-profile");
const workListBtn = document.querySelector(".js-workListBtn")
const workList = document.querySelector(".js-workList")

const currentText = workListBtn.innerHTML;

const PROFLIE_CLICKED = "profileAni"
const WORKLIST_CLICKED = "worklistAni"


function handleClickProfile() {
    profilePage.classList.toggle(PROFLIE_CLICKED);
 }

function handleClickWorkList() {
   workList.classList.toggle(WORKLIST_CLICKED);

   if(workListBtn.innerText == currentText){
    workListBtn.innerText = "Enjoy!";
    }else{
        workListBtn.innerText = currentText;
    }
}

function init () {
    /*profileBtn.addEventListener("click", handleClickProfile)*/
    workListBtn.addEventListener("click", handleClickWorkList)
}

init();
