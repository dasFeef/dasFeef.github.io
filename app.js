//Dark/Light mode
const brightnessModes = ["light", "dark"];
const overlay = $(".index-bodyfaker");
const indexSwitchButton = $("#index-switch-btn");

let brightness = localStorage.getItem("view_brightness");
if(!brightnessModes.includes(brightness)) localStorage.setItem("view_brightness", "dark"), brightness = 'dark';

indexSwitchButton.show();

if(brightness == 'light'){

    indexSwitchButton.css({"left": "var(--index-switch-btn-offset-light)", "background-color":  "var(--index-switch-btn-color-light)"});
    indexSwitchButton.addClass("index-switch-btn-transition");
    overlay.hide();
} else{
    indexSwitchButton.addClass("index-switch-btn-transition");
}

indexSwitchClick();
function indexSwitchClick(){
    if(brightness == 'dark'){
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click");
        overlay.hide(), 
        localStorage.setItem("view_brightness", "light");
        brightness = 'light';
        indexSwitchButton.css({"left": "var(--index-switch-btn-offset-light)", "background-color":  "var(--index-switch-btn-color-light)"});
        indexSwitchClick();
        });
    }else {
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click"); 
        overlay.show();
        localStorage.setItem("view_brightness", "dark");
        brightness = 'dark'
        indexSwitchButton.css({"left": "var(--index-switch-btn-offset-dark)", "background-color":  "var(--index-switch-btn-color-dark)"});
        indexSwitchClick();
        });
    }
}

//Sidebar 
const menu = $("#icons-bars");
const sidebar = $(".index-sidebar");


menuClick(); 
function menuClick(){
    menu.click(() => {
        menu.off("click");
        console.log("CLICK!");
        addSidebar();
    })
}

let sidebarIsOut = false; 
async function addSidebar(){

    if(!sidebarIsOut){

        sidebar.show().animate({right: "0vw"}, 500); 
        setTimeout(() =>{
            sidebar.css("position", "absolute");
            sidebarIsOut = true; 
            menu.click(menuClick());
        }, 500)
    } 
    else {

        sidebar.css("position", "fixed").animate({right: "-17vw"}, 500); 
        setTimeout(() => {
            sidebar.hide();
            sidebarIsOut = false; 
            menu.click(menuClick());
        }, 500);
    }
}
/*
window.scrollTo({
    top: 500,
    behavior: 'smooth'
});
*/

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