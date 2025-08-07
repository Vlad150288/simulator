import { technologies, globalTotals } from "./data.js";

function calculateCostReduction() { // считаем скидку на исследования
  let totalCostReduction = 0
  for (let tech of technologies) {
    if (tech.costReduction) {
        totalCostReduction += tech.costReduction[tech.currentLevel]
    }
  }
  globalTotals.totalCostReduction = totalCostReduction // сохраняем в глобальный обьект, важно чтоб сначала изучили 'Cutting Corners', и уже потом увелечили скидку, а не наоборот
  return globalTotals.totalCostReduction
}

function calculateTotalSumBase(technology) { // считаем сумму потраченых кристалов без учёта скидки
  let currentCrystalCost = technology.levels[technology.currentLevel]
  globalTotals.totalSumBase += currentCrystalCost
  return globalTotals.totalSumBase
}

function calculateTotalSum(technology, totalCostReduction) { // считаем сумму с учётом скидки
  let currentCrystalCost = technology.levels[technology.currentLevel]
  globalTotals.totalSum = technology.name === 'Crystal Center' ? globalTotals.totalSum += currentCrystalCost : globalTotals.totalSum += currentCrystalCost - (currentCrystalCost * (totalCostReduction/100)) // 'Crystal Center' не технология, а здание, потому на него скидка не расспространяется
  return globalTotals.totalSum
}

function calculateSeasonCoins(technology) { // считаем монеты сезона
  let currentCoinsBonus = technology.seasonCoins[technology.currentLevel]
  globalTotals.totalCoins += currentCoinsBonus
  return globalTotals.totalCoins
}

function checkRequirements(technology) { // проверка требований перед обновление интерфейса и дальнейшим прогрессом
  const nextLvl = technology.currentLevel + 1  
  let currRequirement = technology.requirements.find(req => req.level === nextLvl) // перед повышением уровня находим требования для повышения

  let completedCondition = []
  let unmetConditions = []

  if (!currRequirement) { 
    return { passed: true, unmetConditions: [], mode: null } // если для повышения уровня требований нет возвращаем passed: true
  }
        
  for (let condition of currRequirement.conditions) { // проходимся по требованиям (conditions - массив обьектов с ключами name и requiredLevel)
    const requiredTechs = technologies.find(tech => tech.name === condition.name) // находим по имени необходимые технологии в глобальном массиве 
    const isCompleted = !requiredTechs || requiredTechs.currentLevel >= condition.requiredLevel ? true : false // если технология найдена и уровень достаточный — считается выполненным

    if (isCompleted) { // добавляем в список выполненных
      completedCondition.push(condition.name)          
    }
    else {
      unmetConditions.push({ // если условие не выполнено — сохраняем инфу для подсветки и отображения
        name : requiredTechs.name,
        image : requiredTechs.image,
        level : condition.requiredLevel
      }) 
    }
  }  

  let passed = false
  if (currRequirement.mode === 'one' && completedCondition.length > 0) { // если достаточно одного выполненного условия
      passed = true    
  }
  if (currRequirement.mode === 'all' && unmetConditions.length === 0) { // если должны быть выполнены все условия
      passed = true
  } 
  return { passed, unmetConditions, mode: currRequirement.mode } // возвращаем статус и список невыполненных требований
}

function findTechnologiesToUnlock(selectedTechName) { // определяем, какие технологии нужно разблокировать после изучения текущей
  const unlockTechs = [] // массив имён технологий, которые станут доступны
  for (let i = 0; i < technologies.length; i++) { // перебираем все технологии
      for (let j = 0; j < technologies[i].needForActivation.length; j++) { // у каждой проверяем, зависят ли они от selectedTechName
        if (selectedTechName === technologies[i].needForActivation[j]) {
          unlockTechs.push(technologies[i].name) // если технология зависит — добавляем в список на разблокировку
          break // дальше проверять не нужно
        }          
      }       
  } 
  return unlockTechs
}

function getNextLevelCost(technology) { // узнаём стоимость следующего уровня технологии с учётом скидки
  let totalCostReduction = calculateCostReduction() // сначала пересчитываем общую скидку
  let baseCost = technology.levels[technology.currentLevel+1] // узнаём базовую стоимость следующего уровня
  let nextLvlCost

  nextLvlCost = technology.name === 'Crystal Center' ? baseCost : baseCost - (baseCost * (totalCostReduction/100)) // применяем скидку, если не 'Crystal Center'
  return nextLvlCost
}

export { calculateCostReduction, checkRequirements, findTechnologiesToUnlock, getNextLevelCost, calculateTotalSumBase, calculateTotalSum, calculateSeasonCoins }