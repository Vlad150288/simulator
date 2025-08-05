// functions.js
import { technologies } from "./data.js";
import { totalSumElem, costReductionElem, requirementsElem } from "./selectors.js"

let totalSum = 0
let costReduction = 0
let totalCostReduction = 0
totalCostReduction = technologies[0].costReduction[technologies[0].currentLevel] + technologies[1].costReduction[technologies[1].currentLevel]

function checkRequirements(technology) {
    const nextLvl = technology.currentLevel + 1  
  
    // const currRequirement = technology.requirements?.find(tech => tech.level === nextLvl)
  
    let currRequirement = false
  
    for (let i = 0; i < technology.requirements.length; i++) {
      if (nextLvl === technology.requirements[i].level) {
        currRequirement = technology.requirements[i]
        // console.log(currRequirement)
        break
      }
    }  
  
    let unmetConditions = []
  
    if (currRequirement) {
      for (let condition of currRequirement.conditions) {
        // const requiredTech = technologies.find(tech => tech.name === condition.name)
        let requiredTech
        for (let i = 0; i < technologies.length; i++) {
          if (condition.name === technologies[i].name) {
            requiredTech = technologies[i]
            break
          }
        }      
        if (!requiredTech || requiredTech.currentLevel < condition.requiredLevel) {
          unmetConditions.push(`Requires ${condition.name} to level ${condition.requiredLevel}`)
        }
      }
    }
  
    if (unmetConditions.length > 0) {
      // console.log(unmetConditions)
      requirementsElem.textContent = unmetConditions.join(', ')
      return false
    }
    return true
  }
  
  
  
  function updateUI(technology, section) {  
    const costResearchElem = section.querySelector('.cost-research')
    const techProgressInfoElem = section.querySelector('.progress-info')
    const progressBarElem = section.querySelector('.progress-bar')
  
    technology.currentLevel++
  
    totalCostReduction = technologies[0].costReduction[technologies[0].currentLevel] + technologies[1].costReduction[technologies[1].currentLevel]
  
    if (section.dataset.name === 'Crystal Center') {
      totalSum += technology.levels[technology.currentLevel]
      console.log(section.dataset.name)
    }
    else {
      totalSum += technology.levels[technology.currentLevel] - technology.levels[technology.currentLevel] * (totalCostReduction/100)
      console.log(section.dataset.name)
    }
  
  
    if (technology.name === 'Crystal Center') {
      costResearchElem.textContent = technology.levels[technology.currentLevel+1] * totalCostReduction  
      techProgressInfoElem.textContent = `${technology.currentLevel}/${technology.levelsCount}`  
    }
    else {
      costResearchElem.textContent = technology.currentLevel === technology.levelsCount ? 'Completed!' : `${ technology.levels[technology.currentLevel+1] - (technology.levels[technology.currentLevel+1] * (totalCostReduction/100))}`
      techProgressInfoElem.textContent = `${technology.currentLevel}/${technology.levelsCount}`
      progressBarElem.style.width = `${technology.currentLevel * 100 / technology.levelsCount}%`
    }
    
    requirementsElem.textContent = '' 
    costReductionElem.textContent = `Crystal Cost Reduction: ${totalCostReduction}%`
    totalSumElem.textContent = `Total Sum: ${totalSum}` 
    console.log(totalCostReduction, totalSum)
  }
  
  
  
  function undateCostReduction(allResearchElems) {
      for (let i = 0; i < allResearchElems.length; i++) {
      console.log('cost reduction btn')
      if (allResearchElems[i].dataset.name === 'center-cost-research') {
        allResearchElems[i].textContent = technologies[i].currentLevel === technologies[i].levelsCount ? 'Completed!' : `${ technologies[i].levels[technologies[i].currentLevel+1]}`
      }
  
      else {
        allResearchElems[i].textContent = technologies[i].currentLevel === technologies[i].levelsCount ? 'Completed!' : `${ technologies[i].levels[technologies[i].currentLevel+1] - (technologies[i].levels[technologies[i].currentLevel+1] * (totalCostReduction/100))}`
      }
      console.log(totalCostReduction)
  
    }
  }
  
  
  
  
  function unlockTechnology(unlockTech, techSectionElems) {
    // let unlockSection
  
    for (let sectionElem of techSectionElems) {
      if (sectionElem.dataset.name === unlockTech) {      
        sectionElem.classList.remove('inactive')
        // unlockSection = sectionElem
        // console.log(sectionElem.dataset.name )
        // console.log(unlockTech, 'was unlocked')
      }
    }  
  }
  
  

  export {checkRequirements, updateUI, undateCostReduction, unlockTechnology}