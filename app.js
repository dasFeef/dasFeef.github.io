//Dark/Light mode
const brightnessModes = ["light", "dark"];
const overlay = $(".index-bodyfaker");
const indexSwitchButton = $("#index-switch-btn");

let brightness = localStorage.getItem("view_brightness");
if(!brightnessModes.includes(brightness)) localStorage.setItem("view_brightness", "dark"), brightness = 'dark';


if(brightness == 'light'){
    indexSwitchButton.addClass("index-switch-light");
    overlay.hide();
}

indexSwitchClick();
function indexSwitchClick(){
    if(brightness == 'dark'){
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click");
        overlay.hide(), 
        localStorage.setItem("view_brightness", "light");
        brightness = 'light';
        indexSwitchButton.css({'margin-left': '2.5vw', 'background-color': '#77EFA5'});
        indexSwitchClick();
        });
    }else {
        indexSwitchButton.click(() => { 
        indexSwitchButton.off("click"); 
        overlay.show();
        localStorage.setItem("view_brightness", "dark");
        brightness = 'dark'
        indexSwitchButton.css({'margin-left': '0vw', 'background-color': '#307f69'});
        indexSwitchClick();
        });
    }
}

//Sidebar 
const menu = $("#icons-bars");
const sidebar = $(".index-sidebar");

function addSidebar(){
    sidebar.css('--index-sidebar-visibility', 'visible');
    let i = -20; 
    
    const interval = setInterval(() => {
        if(i === -1) clearInterval(interval);
        i++;
        sidebar.css('--index-sidebar-offset-right', `${i}vw`);
        
    }, 15)
}

function removeSidebar(){
    let i = 0; 
    
    const interval = setInterval(() => {
        if(i === -20) clearInterval(interval), sidebar.css('--index-sidebar-visibility', 'hidden');
        i--;
        sidebar.css('--index-sidebar-offset-right', `${i}vw`);
        
    }, 15)
}

menuClick();
function menuClick(){
    menu.click(() => {
        if(sidebar.css('--index-sidebar-visibility') == 'hidden'){
            addSidebar();
            menu.off("click"), setTimeout(() => {menuClick()}, 315);
        }
        else{
            removeSidebar();
            menu.off("click"), setTimeout(() => {menuClick()}, 315);
        }
    })

}
/*
window.scrollTo({
    top: 500,
    behavior: 'smooth'
});
*/