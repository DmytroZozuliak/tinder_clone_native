export interface Card {
  firstName: string
  lastName: string
  job: string
  photoURL: string
  age: number
  id: number
}

export const maleCardsData: Card[] = [
  {
    id: 1,
    firstName: 'Dmytro',
    lastName: 'Zozuliak',
    job: 'FSoftware Developer',
    photoURL:
      'https://scontent.fiev7-4.fna.fbcdn.net/v/t31.18172-8/13235309_702468493224920_1623362384695285198_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bB1Dj8lcmE0AX-EKDBV&tn=hppvm3znYdwHNVtn&_nc_ht=scontent.fiev7-4.fna&oh=00_AfAXnRSrVq6RyG6HLefL8WA2CNVSORd3OQXbUfpUozEwwg&oe=642149FC',
    age: 33,
  },
  {
    id: 2,
    firstName: 'Elon',
    lastName: 'Mask',
    job: 'CEO',
    photoURL:
      'https://scontent.fiev7-3.fna.fbcdn.net/v/t39.30808-6/318771351_103632185931933_5455273492949628163_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cUsu05nYm4cAX9n-oS1&_nc_ht=scontent.fiev7-3.fna&oh=00_AfBOiGSSHNOoDw0k3_6FjuyFVSTHSvZGAuDkCLKJWCuHfg&oe=63FF9CD7',
    age: 40,
  },
]

const femaleCardsData: Card[] = [
  {
    id: 3,
    firstName: 'Ann',
    lastName: 'Kuzmenko',
    job: 'House keeper',
    photoURL:
      'https://scontent.fiev7-3.fna.fbcdn.net/v/t1.6435-9/38469642_1604468689678510_6571201165747290112_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=gHMyQQkfcvoAX_pcCod&_nc_ht=scontent.fiev7-3.fna&oh=00_AfAuXKZ4bZ29Zh2tc5NqP7ZZCMiCvFKLE82kHVTaYOh7Ew&oe=6421575D',
    age: 33,
  },
]
