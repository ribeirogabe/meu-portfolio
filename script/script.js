// 🐱‍💻 ANIMATION HIDE START SCREEN

const startButton = document.querySelector(".start-button")

startButton.addEventListener('click', hideStartScreen)
startButton.addEventListener('click', showParagraphs)

function hideStartScreen (){

    // hide button and title

    let startBtn = document.querySelector(".start-button")

    let startTitle = document.querySelector(".start-title-screen")

    startBtn.classList.add("hide-title-and-button")
    startTitle.classList.add("hide-title-and-button")
        
    setTimeout(function() {

        //hide screen start

        let startScreen = document.querySelector(".start-screen")

        startScreen.classList.add("hide-start-screen-animation")

    }, 400);

    
}

function showParagraphs(){
    setTimeout(() => {
        let firstParagraph = document.querySelector(".about-me-one")
        let secondParagraph = document.querySelector(".about-me-two")
        let thirdParagraph = document.querySelector(".about-me-three")
        let imgNote = document.querySelector(".img-note")
        let fileDownload = document.querySelector(".arquivo-download")
    
        firstParagraph.classList.add("add-show-animation-content")
        secondParagraph.classList.add("add-show-animation-content-two")
        thirdParagraph.classList.add("add-show-animation-content-three")
        imgNote.classList.add("add-show-animation-img-note")
        fileDownload.classList.add("add-show-animation-file-dwld")

    }, 1000);
}


// ADD STYLE NAV BAR 

const itemAboutMe = document.querySelector(".item-about-me")
const itemProjects = document.querySelector(".item-projects")
const itemContact = document.querySelector(".item-contact")

document.addEventListener('DOMContentLoaded', selectAboutMe)

itemAboutMe.addEventListener('click', selectAboutMe)
itemProjects.addEventListener('click', selectProjects)
itemContact.addEventListener('click', selectContact)





function selectAboutMe(){
    document.querySelector(".item-about-me").style.backgroundColor = "#7B7EA2"

    if (document.querySelector(".item-about-me").style.backgroundColor = "#7B7EA2") {

        document.querySelector(".item-contact").style.backgroundColor = ""
        document.querySelector(".item-projects").style.backgroundColor = ""

       
    }

    showScreenAboutMe()
}

function selectProjects(){
    document.querySelector(".item-projects").style.backgroundColor = "#7B7EA2"

    if (document.querySelector(".item-projects").style.backgroundColor = "#7B7EA2") {

        document.querySelector(".item-contact").style.backgroundColor = ""
        document.querySelector(".item-about-me").style.backgroundColor = ""
       
    }

    showScreenProjects()
    showContentProjects()
}

function selectContact(){
    document.querySelector(".item-contact").style.backgroundColor = "#7B7EA2"

    if (document.querySelector(".item-contact").style.backgroundColor = "#7B7EA2") {

        document.querySelector(".item-projects").style.backgroundColor = ""
        document.querySelector(".item-about-me").style.backgroundColor = ""
       
    }

    showScreenContact()
    showContentContact()
}




function showScreenAboutMe(){


    document.querySelector(".about-me-screen").style.display = "flex"

    if(document.querySelector(".about-me-screen").style.display = "flex"){

        document.querySelector(".projects-screen").style.display = "none"
        document.querySelector(".contact-screen").style.display = "none"
    }

        // setTimeout(() => {
        //     let firstParagraph = document.querySelector(".about-me-one")
        //     let secondParagraph = document.querySelector(".about-me-two")
        //     let thirdParagraph = document.querySelector(".about-me-three")
        //     let imgNote = document.querySelector(".img-note")
        //     let fileDownload = document.querySelector(".arquivo-download")
        
        //     firstParagraph.classList.add("add-show-animation-content")
        //     secondParagraph.classList.add("add-show-animation-content-two")
        //     thirdParagraph.classList.add("add-show-animation-content-three")
        //     imgNote.classList.add("add-show-animation-img-note")
        //     fileDownload.classList.add("add-show-animation-file-dwld")

        // }, 500);
    
}

function showScreenProjects(){

    document.querySelector(".projects-screen").style.display = "flex"

    if(document.querySelector(".projects-screen").style.display = "flex"){
        document.querySelector(".about-me-screen").style.display = "none"
        document.querySelector(".contact-screen").style.display = "none"
    }
    
}

function showScreenContact(){
    document.querySelector(".contact-screen").style.display = "flex"

    if(document.querySelector(".contact-screen").style.display = "flex"){
        document.querySelector(".projects-screen").style.display = "none"
        document.querySelector(".about-me-screen").style.display = "none"
    }

    
}






// show content screens


function showContentProjects(){


    let projectJdv = document.querySelector(".project-jogo-da-velha")
    let projectJdm = document.querySelector(".project-jogo-da-memoria")
    let projectLogin = document.querySelector(".project-login-screen")
    let projectTodo = document.querySelector(".project-todo-list")
    
    setTimeout(() => {
        projectJdv.classList.add("add-show-content-project-one")
        projectJdm.classList.add("add-show-content-project-two")
        projectLogin.classList.add("add-show-content-project-three")
        projectTodo.classList.add("add-show-content-project-four")
 
    }, 200);


}

function showContentContact(){
    let formContact = document.querySelector(".contact-me")
    let mapContact = document.querySelector(".contact-map")
    let moreContact = document.querySelector(".more-contact")

    setTimeout(() => {
        formContact.classList.add("add-show-contact-content")
        mapContact.classList.add("add-show-contact-content-map")
        moreContact.classList.add("add-show-contact-content-more")
    }, 200);
}

