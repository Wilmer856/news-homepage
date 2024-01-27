const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const bar1 = document.querySelector(".bar-1")
const bar2 = document.querySelector(".bar-2")
const bar3 = document.querySelector(".bar-3")

hamburger.addEventListener("click", () => {
    
    if(!(navMenu.style.right === "0px")) {
        navMenu.style.right = "0";
    } else {
        navMenu.style.right = "100%";
    }
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
    document.querySelector(".main-con").classList.toggle("active-back")
    document.querySelector(".web3-img").classList.toggle("active-img")
    document.querySelector(".article-btn").classList.toggle("active-img")


});
