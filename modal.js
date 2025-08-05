import { technologies } from "./data.js";
import { requirementsElem } from "./selectors.js"

function mainModal() {    
  if (mainModal._listenerAdded) return; // защита от повторного добавления слушателя
  mainModal._listenerAdded = true;

  document.addEventListener('click', (event) => { // добавляем глобальный обработчик кликов
    const centerInfoElem = event.target.closest('.crystal-center-hover')
    const techInfoElem = event.target.closest('.tech-container')
    const closeModalBtn = event.target.closest('.close-modal-btn')
    const existingModalElem = document.querySelector('.modal-techs') // уже открытая модалка

    if (closeModalBtn) { // если клик по кнопке закрытия — удаляем модалку
      removeModal(existingModalElem);
    }

    if (techInfoElem || centerInfoElem) { // если клик по технологии или по центру
      let selectedTechName = centerInfoElem ? centerInfoElem.dataset.name : techInfoElem.dataset.name // определяем имя выбранной технологии
      let technology = technologies.find(tech => tech.name === selectedTechName) // находим объект технологии по имени

      requirementsElem.innerHTML = '' // очищаем блок с требованиями

      if (!existingModalElem) { // если модалка ещё не открыта — создаём новую
        initModal(technology, selectedTechName)
      }      
      else { // если модалка уже есть — меняем контент
        selectedTechName === 'Crystal Center' ? renderCrystalCenterModal(technology, selectedTechName, existingModalElem) : renderTechModal(technology, selectedTechName, existingModalElem)
      }
    }

    const isOutsideClick = !event.target.closest('.modal-techs') && !centerInfoElem && !techInfoElem; // если кликнули вне модалки — закрываем её
    if (existingModalElem && isOutsideClick) {
      removeModal(existingModalElem);
    }
  })
}

function initModal(technology, selectedTechName) { // создаём модалку, добавляем её в DOM
  document.addEventListener('keydown', onEscape)
  const modalElem = document.createElement('div')  
  modalElem.classList.add('modal-techs')
  document.body.append(modalElem) 
  selectedTechName === 'Crystal Center' ? renderCrystalCenterModal(technology, selectedTechName, modalElem) : renderTechModal(technology, selectedTechName, modalElem) // определяем какой тип модалки отрисовывать
}

function renderCrystalCenterModal(technology, selectedTechName, target) { // рендер модалки Crystal Center
  let modalContent = `  
    <h2 class="modal-tech-name">${selectedTechName}</h2>
    <button class="close-modal-btn">+</button>
    <div class="modal-header modal-header-center">
        <div class="modal-header-inner">Level</div>
        <div class="modal-header-inner">Build Cost</div>
        <div class="modal-header-inner">${technology.bonusType}</div>
    </div>
    <div class="modal-cont"></div>
  `
  target.innerHTML = modalContent

  const modalContElem = document.querySelector('.modal-cont')

  let listElem = `<div class="modal-scroll">` // генерируем строки модалки
  for (let cost in technology.levels) {
    listElem += `<div class="modal-row modal-row-center">
      <div>${cost}</div>
      <div>${technology.levels[cost].toLocaleString('en-US')}</div>
      <div>${technology.bonus[cost]}</div>
    </div>`
  }
  modalContElem.innerHTML = listElem + `</div>`
  modalScroll(modalContElem)
}

function renderTechModal(technology, selectedTechName, target) { // рендер модалки технологии
  let modalContent = `  
    <h2 class="modal-tech-name">${selectedTechName}</h2>
    <button class="close-modal-btn">+</button>
    <div class="modal-header">
        <div class="modal-header-inner">Level</div>
        <div class="modal-header-inner">Season Coins</div>
        <div class="modal-header-inner">Base Crystal Cost</div>
        <div class="modal-header-inner">${technology.bonusType}</div>
    </div>
    <div class="modal-cont"></div>
  `
  target.innerHTML = modalContent

  const modalContElem = document.querySelector('.modal-cont')

  let listElem = `<div class="modal-scroll">` // генерируем строки модалки
  for (let cost in technology.levels) {
    listElem += `<div class="modal-row">
      <div>${cost}</div>
      <div>${technology.seasonCoins[cost].toLocaleString('en-US')}</div>
      <div>${technology.levels[cost].toLocaleString('en-US')}</div>
      <div>${technology.bonus[cost]}</div>
    </div>`
  }
  modalContElem.innerHTML = listElem + `</div>`
  modalScroll(modalContElem)
}

function modalScroll(modalContElem) {
  modalContElem.addEventListener('wheel', function(event) { // горизонтальный скролл колесом мышки
    if (event.deltaX !== 0 && !event.shiftKey) {
      event.preventDefault();
        window.scrollBy({
        top: event.deltaX, 
        behavior: 'auto'
      });
    }
  }, { passive: false });
}

function removeModal(existingModalElem) { // удаляем модалку
  document.removeEventListener('keydown', onEscape)
  existingModalElem.remove()
}

function onEscape(event) { // функция закрытия модалки по Esc
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal-techs')
    if (modal) {
      removeModal(modal)
    }
  }
}

export { mainModal }