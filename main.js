import { technologies } from "./data.js";
import { renderUI } from "./ui.js"
import { addTechEventListeners, horizontalScroll, reloadPage } from "./listeners.js"


function showRotate() {
    if (document.querySelector('.rotate')) return;
    console.log(window.innerWidth, window.innerHeight)
    const rotate = document.createElement('div')
    rotate.classList.add('rotate')
    rotate.innerHTML = `<div><img  src="./assets/Rotate.png"></div>`
    document.body.append(rotate)
}

function checkOrientation() {
    if (window.innerWidth < window.innerHeight) {
        showRotate()
    }
    else {
        if (document.querySelector('.rotate')) {
            document.querySelector('.rotate').remove()
        }
        // document.querySelector('.rotate')?.remove();
    }
}
checkOrientation()

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);


horizontalScroll()
renderUI(technologies)
addTechEventListeners(technologies)
reloadPage()
