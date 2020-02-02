// jshint esversion: 6

const app = new Vue ({
  el: '#app',
  data: {
    showingProfile: false,
    showingProject: false,
    esda: {
      description: 'Assignments part of Elektronisk systemdesign og -analyse I & II (written in Norwegian).',
      designNotes: [
        {
          title: 'Nivåregulator',
          path: 'esda1/D1_Niv_regulator.pdf'
        }
      ],
      appNotes: [
        {
          title: 'Turtallsindikator med transistor',
          path: 'esda1/D1_Niv_regulator.pdf'
        }
      ]
    },
    other: {
      description: 'Some other projects',
    }
  }
});
