// selectors.js
import { technologies } from "./data.js";

const mainContainerElem = document.querySelector('.main')

let totalSum = 0
let costReduction = 0
let totalCostReduction = 0
totalCostReduction = technologies[0].costReduction[technologies[0].currentLevel] + technologies[1].costReduction[technologies[1].currentLevel]

const totalSumElem = document.querySelector('.total-sum')
const costReductionElem = document.querySelector('.cost-reduction')
const requirementsElem = document.querySelector('.requirements')
const techSectionElems = document.querySelectorAll('.tech-section')
const allResearchElems = document.querySelectorAll('.cost-research')

export { mainContainerElem, totalSum, costReduction, totalCostReduction, totalSumElem, costReductionElem, requirementsElem, techSectionElems, allResearchElems }