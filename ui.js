import { technologies, globalTotals } from "./data.js";
import { totalSumElem, totalSumBaseElem, totalSumSavedElem, costReductionElem, requirementsElem, totalCoinsElem, mainContainerElem } from "./selectors.js"
import { calculateCostReduction, getNextLevelCost, calculateTotalSumBase, calculateTotalSum, calculateSeasonCoins } from "./logic.js"

function renderUI(technologies) { // рендерим интерфейс со всеми технологиями
  const totalCostReduction = calculateCostReduction() // пересчитываем скидку на исследования перед отрисовкой
  let innerHTML = ``
  let rows = 0 // счётчик для группировки (в одном столбце от 1 до 4 технологий)

  for (let tech of technologies) {
    let safeId = tech.name.replace(/\s+/g, '-').toLowerCase(); // id для DOM-элемента без пробелов и в нижнем регистре

    if (tech.name === 'Crystal Center') {// отдельная отрисовка для здания
      innerHTML = `
        <div class="column-container crystal-center">
          <section id="${safeId}" class="tech-section" data-name="${tech.name}">
            <div class="crystal-center-info">
              <div class="tech-name">Crystal Research Center</div>
              <div class="progress-info">Lvl. ${tech.currentLevel}</div>
            </div>
            <div class="crystal-center-image">              
              <img src="${tech.image}" alt="${tech.name}">
              <span class="crystal-center-hover" data-name="${tech.name}"</span>
            </div>
            <div class="cost-container">
              <div class="cost-image">
                  <img src="./assets/Crystal.png" alt="Cryst">
                  <span class="crystal-center-hover"</span>
              </div>            
              <div class="cost-research" data-name="center-cost-research">${tech.levels[tech.currentLevel+1].toLocaleString('en-US')}</div>
              <button class="cost-btn">+</button>
            </div>
          </section>
        </div>
        `
    }
    else {
      const iconBorderMap = { // карта иконок без рамки
        'Runecraft': 'tech-image-noborder',
        'Rapid Retreat': 'tech-image-noborder',
      }
      let iconBorder = iconBorderMap[tech.name] ?? 'tech-image'

      const marginMap = { // индивидуальные отступы для некоторых технологий
        'Runecraft': 40,
        'Expanded Formations 1': 40,
        'Cutting Corners 1': 40,
        'Leadership 1': 40,
        'Barbarian Bounties': 40,
        'Karaku Reports': 40,
      }
      let margin = marginMap[tech.name] ?? 0 // задаём отступ

      rows += 1
      const rowMap = { 1: 4, 2: 3, 3: 2, 4:1 } // маппинг количества технологий в столбце-контейнере

      if (rows === 1) {
        rows = rowMap[tech.rowsCount] ?? 1 // задаём количество технологий в столбце-контейнере
        innerHTML += `<div class="column-container">`
      }
      innerHTML += `      
        <section id="${safeId}" class="tech-section ${tech.status}" style="margin-right:${margin}px;" data-name="${tech.name}">
          <div class="tech-container" data-name="${tech.name}">
              <div class="${iconBorder}">
                  <img src="${tech.image}" height="5rem" width="5rem" alt="${tech.name}">
              </div>
              <div class="tech-content">
                  <div class="tech-name">${tech.name}</div>
                  <div class="tech-progress">
                      <span class="progress-info">${tech.currentLevel}/${tech.levelsCount}</span>
                      <div class="progress-bar" style="width: 0%"></div>
                  </div>
              </div>
          </div>
          <div class="cost-container">
              <div class="cost-image">
                  <img src="./assets/Crystal.png" alt="Cryst">
              </div>            
              <div class="cost-research">${getNextLevelCost(tech).toLocaleString('en-US')}</div>
              <button class="cost-btn">+</button>
          </div>
          ${tech.arrow ?? ''}
        </section>      
        `
      if (rows === 4) { // если достигли конца строки — закрываем контейнер
        innerHTML += `</div>`
        rows = 0
      }
    }
  }

  mainContainerElem.innerHTML = innerHTML
}

function renderRequirements(unmetConditions, requirementsElem, notification, sectionElem) { // отрисовка блока требуемых технологий
  const unmetList = document.createElement('div') // создаём контейнер с требуемыми технологиями
  unmetList.classList.add('unmet-list') 
  let unmetConditionsStr = ``

  for (let condition of unmetConditions) { // проходимся по невыполненным требованиям
  let safeId = condition.name.replace(/\s+/g, '-').toLowerCase();
  unmetConditionsStr += `
    <section class="tech-section tech-unmet" data-id="${safeId}">
              <div class="tech-container-unmet">
            <div class="tech-image">
                <img src="${condition.image}" height="35rem" width="35rem">
            </div>
            <div class="tech-content">
                <div class="tech-name">${condition.name} to ${condition.level}lvl</div>
                <button class="tech-link" data-id="${safeId}">GO</button>
            </div>
        </div>
      </section>
    `
  }

  requirementsElem.innerHTML = ''  
  unmetList.innerHTML = unmetConditionsStr
  requirementsElem.innerHTML = notification
  requirementsElem.append(unmetList);

  const unmetTechElems = document.querySelectorAll('.tech-unmet') // находим элементы требований
  scrollToCenter(unmetTechElems) // добавляем скролл при клике
}
  
function scrollToCenter(unmetTechElems) { // скроллим до нужной технологии, если кликнули на GO
  for (let tech of unmetTechElems) {
    tech.addEventListener('click', (event) => {
      const link = event.target.closest('.tech-link')
      const targetId = tech.dataset.id // получаем id технологии
      const targetElem = document.getElementById(targetId) // находим DOM-элемент цели по id

      if (link) {
        const DOMrect = targetElem.getBoundingClientRect(); // получаем позицию элемента
        const absoluteLeft = window.scrollX + DOMrect.left - (window.innerWidth / 2) + (DOMrect.width / 2) // считаем центрирование
        targetElem.classList.remove('tech-animation'); // сбрасываем анимацию, чтобы можно было запустить повторно
        void targetElem.offsetWidth; // "фокус" для перезапуска анимации
        targetElem.classList.add('tech-animation');
  
        window.scrollTo({
          left: absoluteLeft,
          behavior: 'smooth'
        });
      }        
    })
  }
}

function unlockTechnology(unlockTechs, techSectionElems) { // активируем технологии, которые стали доступными
  const unlockSet = new Set(unlockTechs) // unlockTechs - технологии которые открывает текущая технология технология на первом уровне, Set для быстрого поиска по имени
  for (let tech of techSectionElems) { // techSectionElems - NodeList технологий в DOM
    if (unlockSet.has(tech.dataset.name)) { // сверяем имя технологии в NodeList и в unlockTechs
      tech.classList.remove('inactive') // убираем класс inactive, технология
    }
  }
}

function updateCostReduction(researchCostElems) { // обновляем цену исследований в интерфейсе с учётом новой скидки
  for (let i = 0; i < researchCostElems.length; i++) { // проходим по всем полям стоимостей технологий
    let technology = technologies[i] // индексы совпадают с массивом technologies, потому DOM элементы и обьекты technologies связаны автоматически
    researchCostElems[i].textContent = technology.currentLevel === technology.levelsCount ? 'Completed!' : `${getNextLevelCost(technology).toLocaleString('en-US')}` // если достигли максимального уровня выводим 'Completed!', иначе пересчитываем цену для следующего уровня
  }
}  

function updateUI(technology, section) { // обновляем интерфейс после нажатия на "+"
  const techProgressInfoElem = section.querySelector('.progress-info')
  const progressBarElem = section.querySelector('.progress-bar')
  const costResearchElem = section.querySelector('.cost-research')
  const arrowElem = section.querySelector('.arrow-cont')

  if (technology.arrow && arrowElem) {
    arrowElem.classList.remove('inactive') // активируем стрелку, если есть
  } 

  technology.currentLevel++  // повышаем уровень технологии

  globalTotals.totalSumBase = calculateTotalSumBase(technology) // добавляем к общей сумме без скидки
  globalTotals.totalSum = calculateTotalSum(technology, globalTotals.totalCostReduction) // пересчитываем сумму с учётом скидки

  if (technology.costReduction) { // если технология даёт скидку, пересчитываем её (центр изучения, 'Cutting Corners')
    calculateCostReduction()
  }  

  if (technology.seasonCoins) {
    globalTotals.totalCoins = calculateSeasonCoins(technology) // если технология даёт монеты — пересчитываем
  }   

  if (section.dataset.name === 'Crystal Center') { // Обновление прогресса в интерфейсе
    techProgressInfoElem.textContent = `Lvl. ${technology.currentLevel}`  
  } else {
    techProgressInfoElem.textContent = `${technology.currentLevel}/${technology.levelsCount}`
    progressBarElem.style.width = `${technology.currentLevel * 100 / technology.levelsCount}%`
  }

  requirementsElem.textContent = '' 
  costReductionElem.textContent = `Crystal Cost Reduction ${globalTotals.totalCostReduction.toFixed(1)}%` // выводим скидку в хедере
  costResearchElem.textContent = technology.currentLevel === technology.levelsCount ? 'Completed!' : `${getNextLevelCost(technology).toLocaleString('en-US')}` // если не достягли максимального уровня, выводим цену за следующий уровень с учётом скидки
  totalSumBaseElem.textContent = globalTotals.totalSumBase.toLocaleString('en-US')
  totalSumElem.textContent = globalTotals.totalSum.toLocaleString('en-US')
  totalSumSavedElem.textContent = (globalTotals.totalSumBase - globalTotals.totalSum).toLocaleString('en-US')
  totalCoinsElem.textContent = globalTotals.totalCoins.toLocaleString('en-US')
}

export { renderUI, renderRequirements, unlockTechnology, updateCostReduction, updateUI }