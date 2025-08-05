import { technologies } from "./data.js";
import { renderUI } from "./ui.js"
import { addTechEventListeners, horizontalScroll, reloadPage } from "./listeners.js"

horizontalScroll()
renderUI(technologies)
addTechEventListeners(technologies)
reloadPage()
