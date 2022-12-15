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




