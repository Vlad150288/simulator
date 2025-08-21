import { technologies } from "./data.js";
import { renderUI, checkOrientation, checkOrientationThrottled } from "./ui.js"
import { addTechEventListeners, horizontalScroll, reloadPage, disableUserActions } from "./listeners.js"

checkOrientation()
horizontalScroll()
renderUI(technologies)
addTechEventListeners(technologies)
reloadPage()
disableUserActions()
window.addEventListener('resize', checkOrientationThrottled);
