//Dark/Light mode
const brightnessModes = ["light", "dark"];
const darkIcon = $("#icons-dark");
const lightIcon = $("#icons-light");
const overlay = $(".index-bodyfaker");

let brightness = localStorage.getItem("view_brightness");
if(!brightnessModes.includes(brightness)) darkIcon.hide(), switchToLightMode(), localStorage.setItem("view_brightness", "dark");

else{
    if(brightness == "dark") darkIcon.hide(), switchToLightMode();
    if(brightness == "light") lightIcon.hide(), overlay.hide(), switchToDarkMode();
}

function switchToLightMode(){
    lightIcon.click(() => {
        lightIcon.off("click");
        overlay.hide(),
        lightIcon.hide(); 
        darkIcon.show();    

        localStorage.setItem("view_brightness", "light");
        setTimeout(() => {switchToDarkMode()}, 500);
    })
}

function switchToDarkMode(){
    darkIcon.click(() => {
        darkIcon.off("click");
        overlay.show();
        darkIcon.hide(); 
        lightIcon.show(); 

        localStorage.setItem("view_brightness", "dark");
        setTimeout(() => {switchToLightMode()}, 500);
    })
}


//Sidebar 
const menu = $("#icons-bars");
const sidebar = $(".index-sidebar");

function addSidebar(){
    sidebar.css('--index-sidebar-visibility', 'visible');
    let i = -25; 
    
    const interval = setInterval(() => {
        if(i === -1) clearInterval(interval);
        i++;
        sidebar.css('--index-sidebar-offset-right', `${i}vw`);
        
    }, 10)
}

function removeSidebar(){
    let i = 0; 
    
    const interval = setInterval(() => {
        if(i === -26) clearInterval(interval), sidebar.css('--index-sidebar-visibility', 'hidden');
        i--;
        sidebar.css('--index-sidebar-offset-right', `${i}vw`);
        
    }, 10)
}

menuClick();
function menuClick(){
    menu.click(() => {
        if(sidebar.css('--index-sidebar-visibility') == 'hidden'){
            addSidebar();
            menu.off("click"), setTimeout(() => {menuClick()}, 260);
        }
        else{
            removeSidebar();
            menu.off("click"), setTimeout(() => {menuClick()}, 260);
        }
    })

}