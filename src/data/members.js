const image = (fileName) => new URL(`../assets/images/members/${fileName}.png`, import.meta.url).href

export const members = [
 
 
   {
    name: 'Oliver',
    voice: 'Tenor',
    year: 'Junior',
    major: 'Finance',
    board: true,
    role: 'Business Manager',
    image: image('oliver'),
  },

  {
    name: 'Advaith',
    voice: 'Baritone',
    year: 'Senior',
    major: 'Chemistry',
    board: true,
    role: 'Music Director',
    image: image('advaith'),
  },

  {
    name: 'Rayan',
    voice: 'Baritone',
    year: 'Sophomore',
    major: 'Computer Science',
    board: true,
    role: 'Assistant Business Manager',
    image: image('rayan'),
  },
  {
    name: 'Emiliano',
    voice: 'Tenor',
    year: 'Junior',
    major: 'Chemistry',
    board: true,
    role: 'Assistant Music Director',
    image: image('emiliano'),
  },
  
  {
    name: 'Arun',
    voice: 'Tenor',
    year: 'Sophomore',
    major: 'Political Science',
    board: true,
    role: 'Treasurer',
    image: image('arun'),
  },
  {
    name: 'Saint',
    voice: 'Bass',
    year: 'Sophomore',
    major: 'Biology',
    board: true,
    role: 'Social Chair',
    image: image('saint'),
  },

  {
    name: 'Matt',
    voice: 'Bass',
    year: 'Senior',
    major: 'Computer Science',
    board: false,
    role: '',
    image: image('matt'),
  },

  {
    name: 'Aidan',
    voice: 'Tenor',
    year: 'Junior',
    major: 'idk',
    board: false,
    role: '',
    image: image('aidan'),
  },
  {
    name: 'Bodi',
    voice: 'Baritone',
    year: 'Sophomore',
    major: 'some engineering',
    board: false,
    role: '',
    image: image('bodi'),
  }
]
