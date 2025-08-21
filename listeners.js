import { checkRequirements, findTechnologiesToUnlock} from "./logic.js"
import { renderRequirements, unlockTechnology, updateCostReduction, updateUI } from "./ui.js"
import { mainModal } from "./modal.js"
import { requirementsElem } from "./selectors.js"

function addTechEventListeners(technologies) { // обработчики событий
  const techSectionElems = document.querySelectorAll('.tech-section')
  const researchCostElems = document.querySelectorAll('.cost-research')
  
  for (let sectionElem of techSectionElems) { // навешиваем обработчик клика на каждую секцию технологии
    sectionElem.addEventListener('click', (event) => {
      const costBtnElem = event.target.closest('.cost-btn')
      const centerInfoElem = document.querySelector('.crystal-center-hover')
      const techInfoElem = event.target.closest('.tech-container')      

      const selectedTechName = sectionElem.dataset.name  // получаем имя технологии из HTML из dataset
      const technology = technologies.find(tech => tech.name === selectedTechName) // находим эту технологию в массиве технологий
      
      if (techInfoElem || centerInfoElem && !costBtnElem) { // если клик на технологию, но не на кнопку, вызов модал
        mainModal()
      }
  
      if (!costBtnElem) return  
  
      const { passed, unmetConditions, mode } = checkRequirements(technologies, technology) // получаем из checkRequirements массив с невыполненными техами unmetConditions, mode (нужно одно или все чтоб пойти дальше по дереву), и булевая passed

      if (!passed) { // если checkRequirements вернула фолс значит требование не выполнено, собираем уведомление для renderRequirements 
        let notification
        if (mode === 'one') { // если достаточно изучить одну технологию для прогресса Requires either
            notification = `<h4 class="notification">Requires either</h4>`
        }
        if (mode === 'all') { // если нужно всё изучить Requires
            notification = `<h4 class="notification">Requires</h4>`
        }
        renderRequirements(unmetConditions, requirementsElem, notification, sectionElem) // передаём unmetConditions, глобальный контейнер requirementsElem, уведомление
        return
      }

      if (technology.currentLevel >= technology.levelsCount) { // если достигли максимального уровня, выходим
          return
      }

      updateUI(technologies, technology, sectionElem) // если дошли сюда обновляем UI

      if (technology.currentLevel === 1) { // если технология === 1 уровень, получаем доступ к прокачке следующих технологий
        const unlockTechs = findTechnologiesToUnlock(technologies, selectedTechName) // findTechnologiesToUnlock находит следующие технологии и сохраняем в массив
        unlockTechnology(unlockTechs, techSectionElems) 
      }
  
      if (technology.costReduction) { // если технология даёт скидку на изучение технологий
        updateCostReduction(technologies, researchCostElems)
      }  
    })
  }
}  

function horizontalScroll() {  // скроллим по горизонтали
  document.addEventListener('wheel', (event) => {
    const isInsideModal = event.target.closest('.modal-cont')
    if (isInsideModal) { // если курсор на модалке горизонтальный скролл отключаем  
      return;
    }  
    if (event.deltaY !== 0 && !event.shiftKey) {
      event.preventDefault()
        window.scrollBy({
        left: event.deltaY, // используем вертикальное колесо для горизонтального скролла
        behavior: 'auto'
      });
    }
  }, { passive: false })
}

function reloadPage() { // кнопка для перезагрузки страницы и сброс прогресса
  document.addEventListener('click', (event) => {
    const resetBtn = event.target.closest('.reset-btn')
    if (resetBtn) location.reload()
  })
}

function disableUserActions() {
  document.addEventListener('contextmenu', (event) => event.preventDefault());
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && ['c', 'x', 's', 'u'].includes(event.key.toLowerCase())) {
      event.preventDefault()
    }
  });
}

export { addTechEventListeners, horizontalScroll, reloadPage, disableUserActions }
