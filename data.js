const globalTotals = { // глобальный обьект для хранения вычеслений
  totalSumBase: 0,
  totalSum: 0,
  totalCoins: 0,
  totalCostReduction: 0.1
}

const arrows = { // стрелки для UI
  horizontal: `
    <div class="arrow-cont inactive">
      <img class="arrow horizontal" src="/assets/Arrow.png"> 
    </div>`,
  bigDown: `
    <div class="arrow-cont inactive">
      <img class="arrow" src="/assets/ArrowBig.png"> 
    </div>`,
  smallDown: `
    <div class="arrow-cont inactive">
      <img class="arrow" style="left:-0.2rem" src="/assets/ArrowSmall.png"> 
    </div>`,
  smallUp: `
    <div class="arrow-cont inactive">
      <img class="arrow vertical-up" style="left:-0.2rem" src="/assets/ArrowSmall.png"> 
    </div>`,
  bigUp: `
    <div class="arrow-cont inactive">
      <img class="arrow vertical-up" src="/assets/ArrowBig.png"> 
    </div>`,
  branches3: `
    <div class="arrow-cont inactive"> 
      <img class="arrow" style="left:0.8rem; top:-8.75rem" src="/assets/ArrowBranches3.png"> 
    </div>`,
  branches5: `
    <div class="arrow-cont arrow-big inactive"> 
      <img class="arrow" style="left:0.65rem; top:-13rem" src="/assets/ArrowBranches5.png"> 
    </div>`
};

const technologies = [ // массив технологий
  {
    name: 'Crystal Center',
    bonusType: 'Crystal Cost',
    bonus: {
      1: '-0.1%', 2: '-0.2%', 3: '-0.3%', 4: '-0.4%', 5: '-0.5%', 6: '-0.6%', 7: '-0.7%', 8: '-0.8%', 9: '-0.9%', 10: '-1.0%', 11: '-1.2%', 12: '-1.4%', 13: '-1.6%', 14: '-1.8%', 15: '-2.0%', 16: '-2.2%', 17: '-2.4%', 18: '-2.6%', 19: '-2.8%', 20: '-3.0%', 21: '-3.3%', 22: '-3.6%', 23: '-4.0%', 24: '-4.5%', 25: '-5.0%'
    },
    seasonCoins: false,
    image: '/assets/Research_Center.png',
    arrow: false,
    levelsCount: 25,
    rowsCount: 1,
    status: '',
    needForActivation: false,
    levels: {
      1: 0, 2: 5000, 3: 10000, 4: 15000, 5: 22500,
      6: 30000, 7: 40000, 8: 50000, 9: 65000, 10: 80000,
      11: 97500, 12: 115000, 13: 135000, 14: 155000, 15: 175000,
      16: 200000, 17: 225000, 18: 250000, 19: 275000, 20: 300000,
      21: 330000, 22: 360000, 23: 390000, 24: 420000, 25: 450000,
    },
    costReduction: {
      1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4, 5: 0.5,
      6: 0.6, 7: 0.7, 8: 0.8, 9: 0.9, 10: 1,
      11: 1.2, 12: 1.4, 13: 1.6, 14: 1.8, 15: 2,
      16: 2.2, 17: 2.4, 18: 2.6, 19: 2.8, 20: 3,
      21: 3.3, 22: 3.6, 23: 4, 24: 4.5, 25: 5,
    },
    currentLevel: 1,
    requirements: [],
  },
  {
    name: 'Quanched Blades 1',
    bonusType: 'Infantry Attack',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Quenched_Blades.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: '',
    needForActivation: false,
    levels: {
      1: 30000, 2: 60000, 3: 90000, 4: 120000, 5: 150000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [],
  },
  {
    name: 'Improved Bows 1',
    bonusType: 'Archer Attack',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Improved_Bows.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: '',
    needForActivation: false,
    levels: {
      1: 30000, 2: 60000, 3: 90000, 4: 120000, 5: 150000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [],
  },
  {
    name: 'Mounted Combat Techniques 1',
    bonusType: 'Cavalry Attack',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Mounted_Combat.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: '',
    needForActivation: false,
    levels: {
      1: 30000, 2: 60000, 3: 90000, 4: 120000, 5: 150000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [],
  },
  {
    name: 'Improved Projectiles 1',
    bonusType: 'Siege Attack',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Improved_Projectiles.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: '',
    needForActivation: false,
    levels: {
      1: 30000, 2: 60000, 3: 90000, 4: 120000, 5: 150000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [],
  },
    {
    name: 'Swift Marching 1',
    bonusType: 'Infantry March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Swift_Marching.png',
    arrow: arrows.bigDown,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Quanched Blades 1'], 
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Quanched Blades 1', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Quanched Blades 1', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Quanched Blades 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Fleet of Foot 1',
    bonusType: 'Archer March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Fleet_of_Foot.png',
    arrow: arrows.smallDown,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Improved Bows 1'],     
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Improved Bows 1', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Improved Bows 1', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Improved Bows 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Swift Steeds 1',
    bonusType: 'Cavalry March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Mounted_Combat.png',
    arrow: arrows.smallUp,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Mounted Combat Techniques 1'],    
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Mounted Combat Techniques 1', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Mounted Combat Techniques 1', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Mounted Combat Techniques 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Reinforced Axles 1',
    bonusType: 'Siege March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Reinforced_Axles.png',
    arrow: arrows.bigUp,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Improved Projectiles 1'],   
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Improved Projectiles 1', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Improved Projectiles 1', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Improved Projectiles 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Call to Arms 1',
    bonusType: 'Unit Capacity',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+3.0%', 6: '+4.0%', 7: '+6.0%', 8: '+8.0%', 9: '+11.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Call_to_Arms.png',
    arrow: arrows.branches3,
    levelsCount: 10,
    rowsCount: 1,
    status: 'inactive',
    needForActivation: ['Swift Marching 1', 'Fleet of Foot 1', 'Swift Steeds 1', 'Reinforced Axles 1'],    
    levels: {
      1: 80000, 2: 120000, 3: 160000, 4: 200000, 5: 240000,
      6: 280000, 7: 320000, 8: 360000, 9: 400000, 10: 500000,    
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 3 }, { name: 'Fleet of Foot 1', requiredLevel: 3 }, { name: 'Swift Steeds 1', requiredLevel: 3 }, { name: 'Reinforced Axles 1', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'one',
        conditions: [{ name: 'Quanched Blades 1', requiredLevel: 5 }, { name: 'Improved Bows 1', requiredLevel: 5 }, { name: 'Mounted Combat Techniques 1', requiredLevel: 5 }, { name: 'Improved Projectiles 1', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 5 }, { name: 'Fleet of Foot 1', requiredLevel: 5 }, { name: 'Swift Steeds 1', requiredLevel: 5 }, { name: 'Reinforced Axles 1', requiredLevel: 5 }]
      },
      {
        level: 9,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 17 }]
      },
    ],
  },
  {
    name: 'Cutting Corners 1',
    bonusType: 'Crystal Cost',
    bonus: {
      1: '-1.0%', 2: '-2.0%', 3: '-3.0%', 4: '-4.0%', 5: '-5.0%'
    },
    seasonCoins: {
      1: 500, 2: 600, 3: 700, 4: 800, 5: 1000
    },
    image: '/assets/Cutting_Corners.png',
    arrow: '',
    levelsCount: 5,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Call to Arms 1'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 200000, 5: 250000,
    },
    costReduction: {
      0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
    },
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 1', requiredLevel: 1 }]
      },
    ],
  },
  {
    name: 'Cultural Exchange',
    bonusType: 'Favor & Crystals',
    bonus: {
      1: '+5.0%', 2: '+10.0%', 3: '+15.0%', 4: '+20.0%', 5: '+25.0%', 6: '+30.0%', 7: '+35.0%', 8: '+40.0%', 9: '+45.0%', 10: '+50.0%', 11: '+60.0%', 12: '+70.0%', 13: '+80.0%', 14: '+90.0%', 15: '+100.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000, 11: 2000, 12: 2000, 13: 2000, 14: 2000, 15: 2000
    },
    image: '/assets/Cultural_Exchange.png',
    arrow: arrows.branches3,
    levelsCount: 15,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Call to Arms 1'],    
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000,
      6: 120000, 7: 140000, 8: 160000, 9: 180000, 10: 200000, 
      11: 220000, 12: 240000, 13: 260000, 14: 280000, 15: 300000,    
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 1', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 1', requiredLevel: 8 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 5 }]
      },
      {
        level: 10,
        mode: 'one',
        conditions: [{ name: 'Quanched Blades 2', requiredLevel: 5 }, { name: 'Improved Bows 2', requiredLevel: 5 }, { name: 'Mounted Combat Techniques 2', requiredLevel: 5 }, { name: 'Improved Projectiles 2', requiredLevel: 5 }]
      },
      {
        level: 15,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 23 }]
      },
    ],
  },
  {
    name: 'Leadership 1',
    bonusType: 'Rally Capacity',
    bonus: {
      1: '+3.0%', 2: '+6.0%', 3: '+9.0%', 4: '+12.0%', 5: '+15.0%'
    },
    seasonCoins: {
      1: 500, 2: 600, 3: 700, 4: 800, 5: 1000
    },
    image: '/assets/Leadership.png',
    arrow: '',
    levelsCount: 5,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Call to Arms 1'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 200000, 5: 250000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 1', requiredLevel: 1 }]
      },
    ],
  },
  {
    name: 'Barbarian Bounties',
    bonusType: 'Barb Dmg/Crystals',
    bonus: {
      1: '+5.0%', 2: '+10.0%', 3: '+15.0%', 4: '+20.0%', 5: '+25.0%', 6: '+30.0%', 7: '+35.0%', 8: '+40.0%', 9: '+45.0%', 10: '+50.0%', 11: '+60.0%', 12: '+70.0%', 13: '+80.0%', 14: '+90.0%', 15: '+100.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000, 11: 2000, 12: 2000, 13: 2000, 14: 2000, 15: 2000
    },
    image: '/assets/Barbarian_Bounties.png',
    arrow: '',
    levelsCount: 15,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Cultural Exchange'],    
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000,
      6: 120000, 7: 140000, 8: 160000, 9: 180000, 10: 200000, 
      11: 220000, 12: 240000, 13: 260000, 14: 280000, 15: 300000,    
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Cultural Exchange', requiredLevel: 1 }]
      },
    ],
  },
  {
    name: 'Call to Arms 2',
    bonusType: 'Unit Capacity',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+5.0%', 4: '+8.0%', 5: '+11.0%', 6: '+14.0%', 7: '+18.0%', 8: '+22.0%', 9: '+27.0%', 10: '+35.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Call_to_Arms.png',
    arrow: arrows.branches5,
    levelsCount: 10,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Cultural Exchange'],    
    levels: {
      1: 80000, 2: 120000, 3: 200000, 4: 300000, 5: 400000,
      6: 500000, 7: 600000, 8: 700000, 9: 800000, 10: 1000000,  
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Cultural Exchange', requiredLevel: 5 }]
      },
      {
        level: 7,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 18 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 21 }]
      },
      {
        level: 9,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 24 }, { name: 'Call to Arms 1', requiredLevel: 10 }]
      },
      {
        level: 10,
        mode: 'all',
        conditions: [{ name: 'Crystal Center', requiredLevel: 25 }]
      },
    ],
  },
  {
    name: 'Karaku Reports',
    bonusType: 'Karaku/Crystal Inc',
    bonus: {
      1: '+5.0%', 2: '+10.0%', 3: '+15.0%', 4: '+20.0%', 5: '+25.0%', 6: '+30.0%', 7: '+35.0%', 8: '+40.0%', 9: '+45.0%', 10: '+50.0%', 11: '+60.0%', 12: '+70.0%', 13: '+80.0%', 14: '+90.0%', 15: '+100.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000, 11: 2000, 12: 2000, 13: 2000, 14: 2000, 15: 2000
    },
    image: '/assets/Karaku_Reports.png',
    arrow: '',
    levelsCount: 15,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Cultural Exchange'],    
    levels: {
      1: 20000, 2: 40000, 3: 60000, 4: 80000, 5: 100000,
      6: 120000, 7: 140000, 8: 160000, 9: 180000, 10: 200000, 
      11: 220000, 12: 240000, 13: 260000, 14: 280000, 15: 300000,    
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Cultural Exchange', requiredLevel: 1 }]
      },
    ],
  },
  {
    name: 'Cutting Corners 2',
    bonusType: 'Crystal Cost',
    bonus: {
      1: '-1.0%', 2: '-2.0%', 3: '-3.0%', 4: '-4.0%', 5: '-5.0%', 6: '-7.0%', 7: '-9.0%', 8: '-11.0%', 9: '-13.0%', 10: '-15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Cutting_Corners.png',
    arrow: '',
    levelsCount: 10,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],    
    levels: {
      1: 30000, 2: 60000, 3: 90000, 4: 120000, 5: 150000,
      6: 200000, 7: 250000, 8: 300000, 9: 400000, 10: 500000,
    },
    costReduction: {
      0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
      6: 7, 7: 9, 8: 11, 9: 13, 10: 15,
    },
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Cutting Corners 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Leadership 2',
    bonusType: 'Rally Capacity',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+5.0%', 4: '+8.0%', 5: '+11.0%', 6: '+14.0%', 7: '+18.0%', 8: '+22.0%', 9: '+27.0%', 10: '+35.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Leadership.png',
    arrow: '',
    levelsCount: 10,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 200000, 5: 250000,
      6: 300000, 7: 400000, 8: 600000, 9: 900000, 10: 1500000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 1 }]
      },
      {
        level: 2,
        mode: 'all',
        conditions: [{ name: 'Leadership 1', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Quanched Blades 2',
    bonusType: 'Infantry Attack',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+4.5%', 4: '+6.0%', 5: '+7.5%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Quenched_Blades.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],
    levels: {
      1: 100000, 2: 200000, 3: 300000, 4: 400000, 5: 500000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 8 }]
      },
    ],
  },
  {
    name: 'Improved Bows 2',
    bonusType: 'Archer Attack',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+4.5%', 4: '+6.0%', 5: '+7.5%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Improved_Bows.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],
    levels: {
      1: 100000, 2: 200000, 3: 300000, 4: 400000, 5: 500000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 8 }]
      },
    ],
  },
  {
    name: 'Mounted Combat Techniques 2',
    bonusType: 'Cavalry Attack',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+4.5%', 4: '+6.0%', 5: '+7.5%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Mounted_Combat.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],
    levels: {
      1: 100000, 2: 200000, 3: 300000, 4: 400000, 5: 500000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 8 }]
      },
    ],
  },
  {
    name: 'Improved Projectiles 2',
    bonusType: 'Siege Attack',
    bonus: {
      1: '+1.0%', 2: '+3.0%', 3: '+4.5%', 4: '+6.0%', 5: '+7.5%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1700, 5: 2000
    },
    image: '/assets/Improved_Projectiles.png',
    arrow: arrows.horizontal,
    levelsCount: 5,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Call to Arms 2'],
    levels: {
      1: 100000, 2: 200000, 3: 300000, 4: 400000, 5: 500000
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Call to Arms 2', requiredLevel: 8 }]
      },
    ],
  },
    {
    name: 'Starmetal Shields',
    bonusType: 'Infantry Defense',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Starmetal_Shields.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Quanched Blades 2'],
    levels: {
      1: 100000, 2: 150000, 3: 200000, 4: 250000, 5: 300000,
      6: 600000, 7: 600000, 8: 600000, 9: 600000, 10: 600000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Quanched Blades 2', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Quanched Blades 2', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Starmetal Bracers',
    bonusType: 'Archer Defense',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Starmetal_Bracers.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Improved Bows 2'],
    levels: {
      1: 100000, 2: 150000, 3: 200000, 4: 250000, 5: 300000,
      6: 600000, 7: 600000, 8: 600000, 9: 600000, 10: 600000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Improved Bows 2', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Improved Bows 2', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Starmetal Harnesses',
    bonusType: 'Cavalry Defense',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Starmetal_Harnesses.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Mounted Combat Techniques 2'],
    levels: {
      1: 100000, 2: 150000, 3: 200000, 4: 250000, 5: 300000,
      6: 600000, 7: 600000, 8: 600000, 9: 600000, 10: 600000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Mounted Combat Techniques 2', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Mounted Combat Techniques 2', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Starmetal Axles',
    bonusType: 'Siege Defense',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Starmetal_Axles.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Improved Projectiles 2'],
    levels: {
      1: 100000, 2: 150000, 3: 200000, 4: 250000, 5: 300000,
      6: 600000, 7: 600000, 8: 600000, 9: 600000, 10: 600000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Improved Projectiles 2', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Improved Projectiles 2', requiredLevel: 5 }]
      },
    ],
  },
    {
    name: 'Swift Marching 2',
    bonusType: 'Infantry March Spd',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Swift_Marching.png',
    arrow: arrows.bigDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Starmetal Shields'], 
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 100000,
      6: 100000, 7: 100000, 8: 100000, 9: 100000, 10: 100000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Starmetal Shields', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Starmetal Shields', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Starmetal Shields', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Fleet of Foot 2',
    bonusType: 'Archer March Spd',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Fleet_of_Foot.png',
    arrow: arrows.smallDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Starmetal Bracers'],     
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 100000,
      6: 100000, 7: 100000, 8: 100000, 9: 100000, 10: 100000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Starmetal Bracers', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Starmetal Bracers', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Starmetal Bracers', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Swift Steeds 2',
    bonusType: 'Cavalry March Spd',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Mounted_Combat.png',
    arrow: arrows.smallUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Starmetal Harnesses'],    
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 100000,
      6: 100000, 7: 100000, 8: 100000, 9: 100000, 10: 100000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Starmetal Harnesses', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Starmetal Harnesses', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Starmetal Harnesses', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Reinforced Axles 2',
    bonusType: 'Siege March Spd',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Reinforced_Axles.png',
    arrow: arrows.bigUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Starmetal Axles'],   
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 100000,
      6: 100000, 7: 100000, 8: 100000, 9: 100000, 10: 100000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Starmetal Axles', requiredLevel: 1 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Starmetal Axles', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Starmetal Axles', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Larger Camps',
    bonusType: 'Rein Capacity',
    bonus: {
      1: '+10.0%', 2: '+25.0%', 3: '+40.0%', 4: '+65.0%', 5: '+100.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000
    },
    image: '/assets/Larger_Camps.png',
    arrow: arrows.branches3,
    levelsCount: 5,
    rowsCount: 1,
    status: 'inactive',
    needForActivation: ['Swift Marching 2', 'Fleet of Foot 2', 'Swift Steeds 2', 'Reinforced Axles 2'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 250000, 5: 500000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 8 }, { name: 'Fleet of Foot 2', requiredLevel: 8 }, { name: 'Swift Steeds 2', requiredLevel: 8 }, { name: 'Reinforced Axles 2', requiredLevel: 8 }]
      },
      {
        level: 2,
        mode: 'all',
        conditions: [{ name: 'Cutting Corners 2', requiredLevel: 10 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Barbarian Bounties', requiredLevel: 7 }, { name: 'Karaku Reports', requiredLevel: 7 }]
      },
      {
        level: 4,
        mode: 'all',
        conditions: [{ name: 'Barbarian Bounties', requiredLevel: 12 }, { name: 'Karaku Reports', requiredLevel: 12 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Barbarian Bounties', requiredLevel: 15 }, { name: 'Karaku Reports', requiredLevel: 15 }]
      },
    ],
  },
  {
    name: 'Runecraft',
    bonusType: 'Rune Summoning',
    bonus: {
      1: '2 Per Day'
    },
    seasonCoins: {
      1: 2000
    },
    image: '/assets/Runecraft.png',
    arrow: '',
    levelsCount: 1,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Larger Camps'],    
    levels: {
      1: 3000000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Larger Camps', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Special Concoctions 1',
    bonusType: 'Healing Cost',
    bonus: {
      1: '-0.5%', 2: '-1.0%', 3: '-1.5%', 4: '-2.0%', 5: '-3.0%', 6: '-4.0%', 7: '-6.0%', 8: '-8.0%', 9: '-11.0%', 10: '-15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 2000, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Special_Concoctions.png',
    arrow: arrows.branches5,
    levelsCount: 10,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Larger Camps'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 200000, 5: 250000,
      6: 300000, 7: 400000, 8: 600000, 9: 900000, 10: 1500000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Larger Camps', requiredLevel: 3 }]
      },
      {
        level: 5,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }, { name: 'Reinforced Axles 2', requiredLevel: 10 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Larger Camps', requiredLevel: 4 }]
      },
      {
        level: 10,
        mode: 'all',
        conditions: [{ name: 'Larger Camps', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Expanded Formations 1',
    bonusType: 'Troop Dispatch',
    bonus: {
      1: '+1'
    },
    seasonCoins: {
      1: 4000
    },
    image: '/assets/Expanded_Formations.png',
    arrow: '',
    levelsCount: 1,
    rowsCount: 3,
    status: 'inactive',
    needForActivation: ['Larger Camps'],    
    levels: {
      1: 3000000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Larger Camps', requiredLevel: 5 }]
      },
    ],
  },
  {
    name: 'Emergency Support',
    bonusType: 'Archer March Spd',
    bonus: {
      1: '+2.0%', 2: '+4.0%', 3: '+6.0%', 4: '+8.0%', 5: '+10.0%', 6: '+13.0%', 7: '+16.0%', 8: '+20.0%', 9: '+25.0%', 10: '+30.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Emergency_Support.png',
    arrow: '',
    levelsCount: 10,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],    
    levels: {
      1: 50000, 2: 100000, 3: 150000, 4: 200000, 5: 250000,
      6: 300000, 7: 400000, 8: 550000, 9: 700000, 10: 900000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 1 }]
      },
    ],
  },
  {
    name: 'Rapid Retreat',
    bonusType: 'Rapid Retreat',
    bonus: {
      1: '200 Gems'
    },
    seasonCoins: {
      1: 4000
    },
    image: '/assets/Rapid_Retreat.png',
    arrow: '',
    levelsCount: 1,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],    
    levels: {
      1: 3000000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 1 }]
      },
    ],
  },

  {
    name: 'Iron Infantry',
    bonusType: 'Infantry Health',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Iron_Infantry.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],
    levels: {
      1: 150000, 2: 225000, 3: 300000, 4: 375000, 5: 450000,
      6: 900000, 7: 900000, 8: 900000, 9: 900000, 10: 900000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 5 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 8 }]
      },
      {
        level: 4,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 8 }]
      },
      {
        level: 6,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 10 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Archers Focus',
    bonusType: 'Archer Health',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Archers_Focus.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],
    levels: {
      1: 150000, 2: 225000, 3: 300000, 4: 375000, 5: 450000,
      6: 900000, 7: 900000, 8: 900000, 9: 900000, 10: 900000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 5 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 8 }]
      },
      {
        level: 4,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 8 }]
      },
      {
        level: 6,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 10 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Riders Resilience',
    bonusType: 'Cavalry Health',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Riders_Resilience.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],
    levels: {
      1: 150000, 2: 225000, 3: 300000, 4: 375000, 5: 450000,
      6: 900000, 7: 900000, 8: 900000, 9: 900000, 10: 900000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 5 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 8 }]
      },
      {
        level: 4,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 8 }]
      },
      {
        level: 6,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 10 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Siege Provisions',
    bonusType: 'Siege Health',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Siege_Provisions.png',
    arrow: arrows.horizontal,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 1'],
    levels: {
      1: 150000, 2: 225000, 3: 300000, 4: 375000, 5: 450000,
      6: 900000, 7: 900000, 8: 900000, 9: 900000, 10: 900000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 5 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 8 }]
      },
      {
        level: 4,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 8 }]
      },
      {
        level: 6,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 1', requiredLevel: 10 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Emergency Support', requiredLevel: 10 }]
      },
    ],
  },

  {
    name: 'Swift Marching 3',
    bonusType: 'Infantry March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Swift_Marching.png',
    arrow: arrows.bigDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Iron Infantry'], 
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 120000,
      6: 250000, 7: 250000, 8: 250000, 9: 250000, 10: 250000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Iron Infantry', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Iron Infantry', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Fleet of Foot 3',
    bonusType: 'Archer March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Fleet_of_Foot.png',
    arrow: arrows.smallDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Archers Focus'],     
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 120000,
      6: 250000, 7: 250000, 8: 250000, 9: 250000, 10: 250000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Archers Focus', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Archers Focus', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Swift Steeds 3',
    bonusType: 'Cavalry March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Mounted_Combat.png',
    arrow: arrows.smallUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Riders Resilience'],    
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 120000,
      6: 250000, 7: 250000, 8: 250000, 9: 250000, 10: 250000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Riders Resilience', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Riders Resilience', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Reinforced Axles 3',
    bonusType: 'Siege March Spd',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+7.0%', 7: '+9.0%', 8: '+11.0%', 9: '+13.0%', 10: '+15.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Reinforced_Axles.png',
    arrow: arrows.bigUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Siege Provisions'],   
    levels: {
      1: 30000, 2: 50000, 3: 70000, 4: 90000, 5: 120000,
      6: 250000, 7: 250000, 8: 250000, 9: 250000, 10: 250000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Siege Provisions', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Siege Provisions', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Special Concoctions 2',
    bonusType: 'Healing Cost',
    bonus: {
      1: '-1.0%', 2: '-2.0%', 3: '-3.0%', 4: '-4.0%', 5: '-6.0%', 6: '-8.0%', 7: '-11.0%', 8: '-14.0%', 9: '-18.0%', 10: '-25.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Special_Concoctions.png',
    arrow: arrows.branches5,
    levelsCount: 10,
    rowsCount: 1,
    status: 'inactive',
    needForActivation: ['Swift Marching 3', 'Fleet of Foot 3', 'Swift Steeds 3', 'Reinforced Axles 3'],    
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 3', requiredLevel: 1 }, { name: 'Fleet of Foot 3', requiredLevel: 1 }, { name: 'Swift Steeds 3', requiredLevel: 1 }, { name: 'Reinforced Axles 3', requiredLevel: 1 }]
      },
      {
        level: 3,
        mode: 'one',
        conditions: [{ name: 'Swift Marching 3', requiredLevel: 10 }, { name: 'Fleet of Foot 3', requiredLevel: 10 }, { name: 'Swift Steeds 3', requiredLevel: 10 }, { name: 'Reinforced Axles 3', requiredLevel: 10 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{name: 'Leadership 2', requiredLevel: 10}],
      },
      {
        level: 10,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }]
      },
    ],
  },

  {
    name: 'Celestial Guidance',
    bonusType: 'Auto Help Count',
    bonus: {
      1: '+10', 2: '+20', 3: '+30'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400
    },
    image: '/assets/Celestial_Guidance.png',
    arrow: '',
    levelsCount: 3,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],    
    levels: {
      1: 300000, 2: 500000, 3: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 3 }]
      },
    ],
  },
  {
    name: 'Expanded Formations 2',
    bonusType: 'Troop Dispatch',
    bonus: {
      1: '+1'
    },
    seasonCoins: {
      1: 4000
    },
    image: '/assets/Expanded_Formations.png',
    arrow: '',
    levelsCount: 1,
    rowsCount: 2,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],    
    levels: {
      1: 6000000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 10 }]
      },
    ],
  },

  {
    name: 'Prise de Fer',
    bonusType: 'Infantry Dmg Red',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Prise_de_Fer.png',
    arrow: arrows.bigDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 3 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 5 }, { name: 'Fleet of Foot 1', requiredLevel: 5 }, { name: 'Swift Steeds 1', requiredLevel: 5 }, { name: 'Reinforced Axles 1', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }, { name: 'Reinforced Axles 2', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Mantlets',
    bonusType: 'Archer Dmg Red',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Mantlets.png',
    arrow: arrows.smallDown,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 3 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 5 }, { name: 'Fleet of Foot 1', requiredLevel: 5 }, { name: 'Swift Steeds 1', requiredLevel: 5 }, { name: 'Reinforced Axles 1', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }, { name: 'Reinforced Axles 2', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Pike Wall',
    bonusType: 'Cavalry Dmg Red',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Pike_Wall.png',
    arrow: arrows.smallUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 3 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 5 }, { name: 'Fleet of Foot 1', requiredLevel: 5 }, { name: 'Swift Steeds 1', requiredLevel: 5 }, { name: 'Reinforced Axles 1', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }, { name: 'Reinforced Axles 2', requiredLevel: 10 }]
      },
    ],
  },
  {
    name: 'Shatterproof',
    bonusType: 'Siege Dmg Red',
    bonus: {
      1: '+0.5%', 2: '+1.0%', 3: '+1.5%', 4: '+2.0%', 5: '+2.5%', 6: '+3.5%', 7: '+4.5%', 8: '+5.5%', 9: '+7.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Shatterproof.png',
    arrow: arrows.bigUp,
    levelsCount: 10,
    rowsCount: 4,
    status: 'inactive',
    needForActivation: ['Special Concoctions 2'],
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 3 }]
      },
      {
        level: 3,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 1', requiredLevel: 5 }, { name: 'Fleet of Foot 1', requiredLevel: 5 }, { name: 'Swift Steeds 1', requiredLevel: 5 }, { name: 'Reinforced Axles 1', requiredLevel: 5 }]
      },
      {
        level: 5,
        mode: 'all',
        conditions: [{ name: 'Special Concoctions 2', requiredLevel: 5 }]
      },
      {
        level: 8,
        mode: 'all',
        conditions: [{ name: 'Swift Marching 2', requiredLevel: 10 }, { name: 'Fleet of Foot 2', requiredLevel: 10 }, { name: 'Swift Steeds 2', requiredLevel: 10 }, { name: 'Reinforced Axles 2', requiredLevel: 10 }]
      },
    ],
  },

  {
    name: 'Surprise Strike',
    bonusType: 'Damage',
    bonus: {
      1: '+1.0%', 2: '+2.0%', 3: '+3.0%', 4: '+4.0%', 5: '+5.0%', 6: '+6.0%', 7: '+7.0%', 8: '+8.0%', 9: '+9.0%', 10: '+10.0%'
    },
    seasonCoins: {
      1: 1000, 2: 1200, 3: 1400, 4: 1600, 5: 1800, 6: 2000, 7: 2000, 8: 2000, 9: 2000, 10: 2000
    },
    image: '/assets/Surprise_Strike.png',
    arrow: '',
    levelsCount: 10,
    rowsCount: 1,
    status: 'inactive',
    needForActivation: ['Prise de Fer', 'Mantlets', 'Pike Wall', 'Shatterproof'],    
    levels: {
      1: 50000, 2: 75000, 3: 100000, 4: 200000, 5: 300000,
      6: 400000, 7: 500000, 8: 600000, 9: 700000, 10: 800000,
    },
    costReduction: false,
    currentLevel: 0,
    requirements: [
      {
        level: 1,
        mode: 'one',
        conditions: [{ name: 'Prise de Fer', requiredLevel: 3 }, { name: 'Mantlets', requiredLevel: 3 }, { name: 'Pike Wall', requiredLevel: 3 }, { name: 'Shatterproof', requiredLevel: 3 }]
      },
      {
        level: 4,
        mode: 'one',
        conditions: [{ name: 'Prise de Fer', requiredLevel: 5 }, { name: 'Mantlets', requiredLevel: 5 }, { name: 'Pike Wall', requiredLevel: 5 }, { name: 'Shatterproof', requiredLevel: 5 }]
      },
    ],
  },
]

export {technologies, globalTotals}