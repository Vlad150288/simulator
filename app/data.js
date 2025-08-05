// data.js
export const technologies = [
    {
      name: 'Crystal Center',
      image: '/images/CrysCenter.png',
      arrow: '',
      levelsCount: 25,
      status: 'active',
      needForActivation: '',
      levels: {
        1: 420, 2: 600, 3: 900, 4: 1150, 5: 1400,
        6: 1700, 7: 2000, 8: 2600, 9: 3000, 10: 3600,
        11: 4400, 12: 5200, 13: 5600, 14: 6000, 15: 6600,
        16: 7400, 17: 8200, 18: 9600, 19: 10000, 20: 12600,
        21: 14400, 22: 16200, 23: 18600, 24: 20500, 25: 24000,
      },
      costReduction: {
        1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4, 5: 0.5,
        6: 0.6, 7: 0.7, 8: 0.8, 9: 0.9, 10: 1,
        11: 1.2, 12: 1.4, 13: 1.6, 14: 1.8, 15: 2,
        16: 2.2, 17: 2.4, 18: 2.8, 19: 3, 20: 3.4,
        21: 3.8, 22: 4, 23: 4.3, 24: 4.6, 25: 5,
      },
      currentLevel: 1,
      requirements: [
      ],
    },
    {
      name: 'Quanched Blades 1',
      image: '/images/Inf1.jpg',
      arrow: '',
      levelsCount: 10,
      status: 'active',
      needForActivation: '',
      levels: {
        1: 30000, 2: 40000, 3: 300, 4: 450, 5: 600,
        6: 900, 7: 1200, 8: 1600, 9: 2000, 10: 2600
      },
      costReduction: {
        0: 0, 1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4, 5: 0.5,
        6: 0.6, 7: 0.7, 8: 0.8, 9: 0.9, 10: 1
      },
      currentLevel: 0,
      requirements: [
        {
          level: 3,
          conditions: [{ name: 'Attack Formation 1', requiredLevel: 2 }, { name: 'Attack Infantry', requiredLevel: 5 }]
        },
        {
          level: 5,
          conditions: [{ name: 'Attack Formation 1', requiredLevel: 4 }]
        }
      ],
    },
    {
      name: 'Attack Formation 1',
      image: '/images/Arch1.jpg',
      arrow: '',
      levelsCount: 10,
      status: 'active',
      needForActivation: '',
      levels: {
        1: 220, 2: 300, 3: 400, 4: 650, 5: 800,
        6: 1100, 7: 1400, 8: 1800, 9: 2200, 10: 3000
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [
        {
          level: 4,
          conditions: [{ name: 'Attack Infantry', requiredLevel: 5 }]
        }
      ],
    },
    {
      name: 'Attack Infantry',
      image: '/images/Inf1.jpg',
      arrow: '',
      levelsCount: 10,
      status: 'active',
      needForActivation: '',
      levels: {
        1: 150, 2: 200, 3: 300, 4: 400, 5: 600,
        6: 800, 7: 1000, 8: 1400, 9: 1800, 10: 2200
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [],
    },
    {
      name: 'Health Cavalry',
      image: '/images/Inf1.jpg',
      arrow: '',
      levelsCount: 10,
      status: 'active',
      needForActivation: '',
      levels: {
        1: 150, 2: 200, 3: 300, 4: 400, 5: 600,
        6: 800, 7: 1000, 8: 1400, 9: 1800, 10: 2200
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [],
    },
      {
      name: 'Quanched Blades 2',
      image: '/images/Inf1.jpg',
      arrow: '<div class="arrow"></div>',
      levelsCount: 10,
      status: 'inactive',
      needForActivation: 'Quanched Blades 1',
      levels: {
        1: 220, 2: 300, 3: 400, 4: 650, 5: 800,
        6: 1100, 7: 1600, 8: 2100, 9: 2800, 10: 3600
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [
        {
          level: 1,
          conditions: [{ name: 'Quanched Blades 1', requiredLevel: 1 }]
        }
      ],
    },
    {
      name: 'Attack Formation 2',
      image: '/images/Inf1.jpg',
      arrow: '<div class="arrow"></div>',
      levelsCount: 5,
      status: 'inactive',
      needForActivation: 'Attack Formation 1',    
      levels: {
        1: 220, 2: 300, 3: 400, 4: 650, 5: 800      
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [
        {
          level: 1,
          conditions: [{ name: 'Attack Formation 1', requiredLevel: 1 }]
        },
        {
          level: 4,
          conditions: [{ name: 'Health Cavalry', requiredLevel: 3 }]
        }
      ],
    },
    {
      name: 'Attack Infantry 2',
      image: '/images/Inf1.jpg',
      arrow: '<div class="arrow"></div>',
      levelsCount: 5,
      status: 'inactive',
      needForActivation: 'Attack Infantry',    
      levels: {
        1: 220, 2: 300, 3: 400, 4: 650, 5: 800      
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [
        {
          level: 1,
          conditions: [{ name: 'Attack Infantry', requiredLevel: 1 }]
        },
        {
          level: 4,
          conditions: [{ name: 'Health Cavalry', requiredLevel: 3 }]
        }
      ],
    },
    {
      name: 'Health Cavalry 2',
      image: '/images/Inf1.jpg',
      arrow: `
      <div class="arrow-cont">
        <span class="arrow horizontal" style="width:83px; bottom:263px; right:319px"></span>
        <span class="arrow vertical" style="bottom:176px; width:173px; right:234px"></span>
        <span class="arrow horizontal" style="width:83px"></span>
      </div>
    `,
      levelsCount: 5,
      status: 'inactive',
      needForActivation: 'Health Cavalry',    
      levels: {
        1: 220, 2: 300, 3: 400, 4: 650, 5: 800      
      },
      costReduction: {},
      currentLevel: 0,
      requirements: [
        {
          level: 1,
          conditions: [{ name: 'Health Cavalry', requiredLevel: 1 }]
        },
        {
          level: 4,
          conditions: [{ name: 'Health Cavalry', requiredLevel: 3 }]
        }
      ],
    }
  ]