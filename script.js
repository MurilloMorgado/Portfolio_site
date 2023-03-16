let show = true;

const menuToggle=document.querySelector(".menu-toggle")
const menuSection=document.querySelector(".menu-section")

  menuToggle.addEventListener("click", () =>{
    document.body.style.overflow = show ? "hidden": "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
  })