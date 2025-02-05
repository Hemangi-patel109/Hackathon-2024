const dockContainer = document.querySelector(".dock");
const dockItems = dockContainer.querySelectorAll(".dock-item");

const defaultItemScale = 1;
const hoverItemScale = 1.8; 
const neighborItemScale = 1.3;

const defaultMargin = "10px";
const expandedMargin = "40px";
 

const updateDockItems = () => {
    dockItems.forEach((item, index) => {
        let scale = defaultItemScale;
        let margin = defaultMargin;
        
        if (item.isHovered) {
            scale = hoverItemScale;
            margin = expandedMargin;
        } else if (item.isNeighbour) {
            scale = neighborItemScale;
            margin = defaultMargin;
        }
        
        item.style.transform = `scale(${scale})`;
        item.style.margin = `0 ${margin}`;
    });
    
 
    if (dockItems.some(item => item.isHovered)) {
        dockContainer.style.width = "10000px";
    } else {
        dockContainer.style.width = "";
    }
};

dockItems.forEach((item) => {
    item.addEventListener("mousemove", () => {
        dockItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
            otherItem.isNeighbour = Math.abs(
                Array.from(dockItems).indexOf(otherItem) - Array.from(dockItems).indexOf(item)
            ) === 1;
        });
        updateDockItems();
    });
});

dockContainer.addEventListener("mouseleave", () => {
    dockItems.forEach((item) => {
        item.isHovered = false;
        item.isNeighbour = false;
    });
    updateDockItems();
});

let dashboardname=document.querySelector(".dashboard-name")
let nameofUser=document.createElement("h1")
nameofUser.setAttribute("class","User-name")

nameofUser.innerHTML=``
dashboardname.appendChild(nameofUser);

const main = () => {
    const articles = Array.from(document.querySelectorAll("article"));
  
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add("reveal");
      }, index * 250);
    });
  };
  document.addEventListener("DOMContentLoaded", main);
  
const patient="Hemangi";
  let name=document.querySelector(".dashboard_header")
name.innerHTML=`Hi Welcome! ${patient} `