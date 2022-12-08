const aboutBtnL = $("#index-aboutSection-btn-toLeft"); 
const aboutBtnR = $("#index-aboutSection-btn-toRight");

aboutClick();
function aboutClick(){

    aboutBtnL.click(() => {
        moveAboutSection('left');
    });

    aboutBtnR.click(() => {
        moveAboutSection('right');
    });
}

const aboutSectionText = $(".index-aboutSection-text");

function moveAboutSection(direction){

    aboutSectionText.animate({left: "100vh"}, 2000)

}

/*
window.scrollTo({
    top: 500,
    behavior: 'smooth'
});
*/