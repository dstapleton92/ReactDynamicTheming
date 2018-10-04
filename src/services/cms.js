export const cmsData = {
  alabama: {
    name: 'Crimson Tide',
    colors: {
      primary: '#9A2031',
      secondary: '#C9C9C9'
    },
    logo: '/images/teams/alabama/logo.png',
    slogan: 'Roll Tide!',
    mascot: 'Big Al'
  },
  auburn: {
    name: 'Auburn Tigers',
    colors: {
      primary: '#061F49',
      secondary: '#E26D35'
    },
    logo: '/images/teams/auburn/logo.png',
    slogan: 'War Eagle!',
    mascot: 'Aubie the Tiger'
  },
  georgia: {
    name: 'Georgia Bulldogs',
    colors: {
      primary: '#AC2431',
      secondary: '#000000'
    },
    logo: '/images/teams/georgia/logo.png',
    slogan: 'Go Dawgs!',
    mascot: 'Uga'
  }
}

export function getCMSData (key) {
  let data = cmsData[key]
  if (!data) {
    data = cmsData['georgia']
  }
  return data
}
