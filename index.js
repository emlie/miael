// jshint esversion: 6

const app = new Vue ({
  el: '#app',
  data: {
    showingProfile: false,
    showingProject: false,
    home: {
      currently: [
        'Vue.js',
        'Backbone.js'
      ]
    },
    profile: {
      img: 'img/profile.jpg',
      title: 'Mia Elisenberg',
      text: 'Hey, this is some text about myself'
    },
    esda: {
      title: 'ESDA',
      description: 'Assignments part of Elektronisk systemdesign og -analyse I & II (written in Norwegian).',
      designNotes: {
        title: 'Design notes',
        content: [
          {
            title: 'Nivåregulator',
            path: 'esda1/D1_Niv_regulator.pdf'
          }
        ]
      },
      appNotes: {
        title: 'Application notes',
        content: [
          {
            title: 'Turtallsindikator med transistor',
            path: 'esda1/D1_Niv_regulator.pdf'
          }
        ]
      }
    },
    other: {
      title: 'Other',
      description: 'Some other projects',
    },
    socials: [
      {
        title: 'Github',
        url: 'github.com/emlie/',
        img: 'icons/github-image.svg'
      },
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/mia.elisenberg',
        img: 'icons/facebook.svg'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/_emlie/',
        img: 'icons/instagram.svg'
      }
    ]
  }
});
