import { technologies } from "./data.js";
import { renderUI, checkOrientation } from "./ui.js"
import { addTechEventListeners, horizontalScroll, reloadPage } from "./listeners.js"

checkOrientation()
horizontalScroll()
renderUI(technologies)
addTechEventListeners(technologies)
reloadPage()
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
