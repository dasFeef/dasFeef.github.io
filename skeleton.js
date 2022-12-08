//Dark/Light mode
const brightnessModes = ["light", "dark"];
const overlay = $(".bodyfaker");
const indexSwitchButton = $("#switch-btn");

let brightness = localStorage.getItem("view_brightness");
if(!brightnessModes.includes(brightness)) localStorage.setItem("view_brightness", "dark"), brightness = 'dark';

indexSwitchButton.show();

if(brightness == 'light'){

    indexSwitchButton.css({"left": "var(--switch-btn-offset-light)", "background-color":  "var(--switch-btn-color-light)"});
    indexSwitchButton.addClass("switch-btn-transition");
    overlay.hide();
} else{
    indexSwitchButton.addClass("switch-btn-transition");
}

indexSwitchClick();
function indexSwitchClick(){
    if(brightness == 'dark'){
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click");
        overlay.hide(), 
        localStorage.setItem("view_brightness", "light");
        brightness = 'light';
        indexSwitchButton.css({"left": "var(--switch-btn-offset-light)", "background-color":  "var(--switch-btn-color-light)"});
        indexSwitchClick();
        });
    }else {
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click"); 
        overlay.show();
        localStorage.setItem("view_brightness", "dark");
        brightness = 'dark'
        indexSwitchButton.css({"left": "var(--switch-btn-offset-dark)", "background-color":  "var(--switch-btn-color-dark)"});
        indexSwitchClick();
        });
    }
}

//Sidebar 
const menu = $("#sidebar-btn");
const sidebar = $(".sidebar");


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
