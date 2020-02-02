// jshint esversion: 6

let elHeader = document.querySelector('#header');
let elFaceImg = document.querySelectorAll('.faceImg')[0];

const compHeaderHeight = window.getComputedStyle(elHeader).height;
const headerHeight = pxToNum(compHeaderHeight);

const face = new Vue ({
  el: '#face',
  data: {
    img: 'img/profile.jpg',
    imgAlt: 'my face'
  }
});

const header = new Vue ({
  el: '#header',
  data: {
    link: 'profile'
  },
  mounted: () => {
    console.log('face is here');
  }
});

const projects = new Vue ({
  el: '#projects',
  data: {
    esda1: {
      designNotes: ['Nivåregulator'],
      appNotes: ['Turtallsindikator']
    }
  }
});

function pxToNum(string) {
  // remove "px" at the end and turn string to number
  return Number(string.slice(0, string.length - 2));
}

// position face
// elFaceImg.style.setProperty("--margin", `${compHeaderHeight}`);

function placeFace() {
  elFaceImg.style.marginTop = `${headerHeight*5}px`;
  console.log('place face');
}

placeFace();
