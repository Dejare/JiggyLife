// HEADERR
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
const mainNav = document.querySelector("nav");
// NAV OPEN
navOpen.addEventListener("click", () => {
  mainNav.classList.add("navAnimation");
  mainNav.style.display = "block";
});
//NAV CLOSE
navClose.addEventListener("click", ()=> {
    mainNav.style.display = "none";
})
document.querySelector("li").addEventListener
("click", ()=> {
    mainNav.style = "transiton: 1s ease; display: none;";
})
// END
