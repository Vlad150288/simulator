// 'use strict';
// import { technologies } from "./data.js";
// import {
//   checkRequirements,
//   updateUI,
//   undateCostReduction,
//   unlockTechnology
// } from "./functions.js";
// import {
//   mainContainerElem,
//   totalSumElem,
//   costReductionElem,
//   requirementsElem,
// } from "./selectors.js";

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM loaded');
//   console.log('main:', document.querySelector('.main'));
//   console.log('total-sum:', document.querySelector('.total-sum'));
// });


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM fully loaded');

//   let totalSum = 0;
//   let totalCostReduction = technologies[0].costReduction[technologies[0].currentLevel] + (technologies[1]?.costReduction[technologies[1].currentLevel] || 0);
  
//   let innerHTML = ``;
//   let rows = 0;

//   for (let tech of technologies) {
//     if (tech.name === 'Crystal Center') {
//       innerHTML = `
//       <div class="column-container">
//         <section class="tech-section crystal-center" data-name="${tech.name}">
//           <div class="cost-container">
//             <div class="tech-name">Crystal Center</div>
//             <div class="progress-info">${tech.currentLevel}/${tech.levelsCount}</div>
//           </div>
//           <div class="crystal-center-image">
//             <img src="${tech.image}" alt="${tech.image}">
//           </div>
//           <div class="cost-container">
//             <div class="cost-image">
//               <img src="/images/Crystal.png" alt="Cryst">
//             </div>            
//             <div class="cost-research" data-name="center-cost-research">${tech.levels[tech.currentLevel + 1]}</div>
//             <button class="cost-btn cost-reduction">+</button>
//           </div>
//         </section>
//       </div>`;
//     } else {
//       rows += 1;
//       if (rows === 1) innerHTML += `<div class="column-container">`;

//       innerHTML += `
//         <section class="tech-section ${tech.status}" data-name="${tech.name}">
//           <div class="tech-container">
//             <div class="tech-image">
//               <img src="${tech.image}" alt="${tech.image}">
//             </div>
//             <div class="tech-content">
//               <div class="tech-name">${tech.name}</div>
//               <div class="tech-progress">
//                 <span class="progress-info">${tech.currentLevel}/${tech.levelsCount}</span>
//                 <div class="progress-bar" style="width: 0%"></div>
//               </div>
//             </div>
//           </div>
//           <div class="cost-container">
//             <div class="cost-image">
//               <img src="/images/Crystal.png" alt="Cryst">
//             </div>            
//             <div class="cost-research">${tech.levels[tech.currentLevel + 1] - (tech.levels[tech.currentLevel + 1] * (totalCostReduction / 100))}</div>
//             <button class="cost-btn">+</button>
//           </div>
//           ${tech.arrow}
//         </section>`;

//       if (rows === 4) {
//         innerHTML += `</div>`;
//         rows = 0;
//       }
//     }
//   }

//   mainContainerElem.innerHTML = innerHTML;

//   // пересобрать NodeList после отрисовки
//   const techSectionElems = document.querySelectorAll('.tech-section');
//   const allResearchElems = document.querySelectorAll('.cost-research');

//   for (let sectionElem of techSectionElems) {
//     sectionElem.addEventListener('click', (event) => {
//       const costBtnElem = event.target.closest('.cost-btn');
//       const costReductionBtnElem = event.target.closest('.cost-reduction');
//       const centerInfoElem = event.target.closest('.crystal-center-image');
//       const techInfoElem = event.target.closest('.tech-container');

//       const selectedTechName = sectionElem.dataset.name;

//       let technology = technologies.find(t => t.name === selectedTechName);
//       let unlockTech = technologies.find(t => t.needForActivation === selectedTechName)?.name;

//       if (techInfoElem || centerInfoElem) {
//         console.log(technology.levels);
//       }

//       if (!costBtnElem) return;

//       if (!checkRequirements(technology) || technology.currentLevel >= technology.levelsCount) return;

//       updateUI(technology, sectionElem);

//       if (technology.currentLevel < 2 && unlockTech) {
//         unlockTechnology(unlockTech, techSectionElems);
//       }

//       if (costReductionBtnElem) {
//         undateCostReduction(allResearchElems);
//       }

//       console.log('btn elem clicked');
//     });
//   }
// });








'use strict'
// script.js
import { technologies } from "./data.js";
import { checkRequirements, updateUI, undateCostReduction, unlockTechnology} from "./functions.js"
import { mainContainerElem } from "./selectors.js";



document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  console.log('main:', document.querySelector('.main'));
  console.log('total-sum:', document.querySelector('.total-sum'));
});





  let totalSum = 0;
  let totalCostReduction = technologies[0].costReduction[technologies[0].currentLevel] + (technologies[1]?.costReduction[technologies[1].currentLevel] || 0);

  let innerHTML = ``
  let rows = 0

  for (let tech of technologies) {
    if (tech.name === 'Crystal Center') {
      innerHTML = `
      <div class="column-container">
       <section class="tech-section crystal-center" data-name="${tech.name}">
                <div class="cost-container">
                    <div class="tech-name">Crystal Center</div>
                        <div class="progress-info">${tech.currentLevel}/${tech.levelsCount}</div>
                </div>

                  <div class="crystal-center-image">
                      <img src="${tech.image}" alt="${tech.image}">
                  </div>

              <div class="cost-container">
                  <div class="cost-image">
                      <img src="/images/Crystal.png" alt="Cryst">
                  </div>            
                  <div class="cost-research" data-name="center-cost-research">${tech.levels[tech.currentLevel+1]}</div>
                  <button class="cost-btn cost-reduction">+</button>
              </div>
          </section>
          </div>`
    }
    else {
      rows += 1
      if (rows === 1) {
        innerHTML += `<div class="column-container">`
      }
      innerHTML += `      
          <section class="tech-section ${tech.status}" data-name="${tech.name}">
          <div class="tech-container">
              <div class="tech-image">
                  <img src="${tech.image}" alt="${tech.image}">
              </div>
              <div class="tech-content ">
                  <div class="tech-name">${tech.name}</div>
                  <div class="tech-progress">
                      <span class="progress-info">${tech.currentLevel}/${tech.levelsCount}</span>
                      <div class="progress-bar" style="width: 0%"></div>
                  </div>
              </div>
          </div>
          <div class="cost-container">
              <div class="cost-image">
                  <img src="/images/Crystal.png" alt="Cryst">
              </div>            
              <div class="cost-research">${tech.levels[tech.currentLevel+1] - (tech.levels[tech.currentLevel+1] * (totalCostReduction/100))}</div>
              <button class="cost-btn">+</button>
          </div>
          ${tech.arrow}
      </section>      
      `
      if (rows === 4) {
        innerHTML += `</div>`
        rows = 0
      }
    }

  }
  mainContainerElem.innerHTML = innerHTML
  console.log(rows)
  

  

// const totalSumElem = document.querySelector('.total-sum')
// const costReductionElem = document.querySelector('.cost-reduction')
// const requirementsElem = document.querySelector('.requirements')
// const techSectionElems = document.querySelectorAll('.tech-section')
// const allResearchElems = document.querySelectorAll('.cost-research')

  // пересобрать NodeList после отрисовки
  const techSectionElems = document.querySelectorAll('.tech-section');
  const allResearchElems = document.querySelectorAll('.cost-research');


for (let sectionElem of techSectionElems) {
  sectionElem.addEventListener('click', (event) => {
    const costBtnElem = event.target.closest('.cost-btn')
    const costReductionBtnElem = event.target.closest('.cost-reduction')
    const centerInfoElem = event.target.closest('.crystal-center-image')
    const techInfoElem = event.target.closest('.tech-container')

    const selectedTechName = sectionElem.dataset.name
    // const technology = technologies.find(tech => tech.name === selectedTechName)

    let technology
    let unlockTech     

    for (let i = 0; i < technologies.length; i++) {
      if (selectedTechName === technologies[i].name) {
        technology = technologies[i]
      }
    }    

    for (let i = 0; i < technologies.length; i++) {
      if (selectedTechName === technologies[i].needForActivation) {
        unlockTech = technologies[i].name
      }
    }  

    if (techInfoElem || centerInfoElem) {
      console.log(technology.levels)
    }

    if (!costBtnElem) return
   



    if (!checkRequirements(technology) || technology.currentLevel >= technology.levelsCount) return;
    
    updateUI(technology, sectionElem)
    if (technology.currentLevel < 2) {
      unlockTechnology(unlockTech, techSectionElems)
    }

    if (costReductionBtnElem) {
      undateCostReduction(allResearchElems)
    }
    console.log('btn elem btn')
    
  })
}