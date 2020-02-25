// jshint esversion: 6

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

const Profile = {
  template: `
  <div class="wrapper more-bottom mobile-more-top">
    <div id="profile" class="content more-top" v-bind="profile">
      <div class="faceImg mobile-more-top">
        <img :src="profile.img" alt="my face">
      </div>
      <div>
        <h3>{{profile.title}}</h3>
        <p>{{profile.text}}</p>
      </div>
    </div>
    <div class="content less-top air">
      <p>
      I'm a curious person eager to learn as much as possible and with a big interest in web development
      and design. I study <a :href="profile.links[0].path" class="inline-a">{{profile.links[0].title}}</a>,
       work as a web developer and tech support at <a :href="profile.links[1].path" class="inline-a">{{profile.links[1].title}}</a>,
       and I also work freelance as a mentor in <a :href="profile.links[2].path" class="inline-a">{{profile.links[2].title}}</a>.
      </p>
      <ul class="less-top">
        <li>
          <a :href="profile.links[3].path">{{profile.links[3].title}}</a>
        </li>
      </ul>
    </div>
    <!-- <img src="img/me-png.png" alt="drawing of me" class="drawing"> -->
  </div>
  `,
  data() {
    return {
      profile: {
        img: 'img/me-png.png',
        title: 'Mia Elisenberg',
        text: 'Elsys student at NTNU Trondheim',
        links: [
          {
            title: 'electronic system design and innovation (Elsys) ',
            path: 'https://www.ntnu.no/studier/mtelsys/'
          },
          {
            title: 'Vevcom, Omega',
            path: 'https://omega.ntnu.no/frontpage'
          },
          {
            title: 'MentorNorge',
            path: 'https://mentornorge.no/'
          },
          {
            title: 'Resume (Norwegian)',
            path: 'docs/Mia Elisenberg CV.pdf'
          }
        ]
      }
    }
  }
};

const Home = {
  template: `
  <div id="home" class="content mobile-even-more-top">
    <h3>
      Hi, I'm Mia
    </h3>
    <p>
      Studying electronic system design at NTNU Trondheim
      <br>
      and working as a web developer in <a :href="home.links[0].path" class="inline-a">{{home.links[0].title}}</a>.
    </p>

    <div class="project-collection">
      <div class="projects">
        <div>
          <h2 class="more-top">Currently self-learning</h2>
          <ul>
            <li v-for="thing in home.currently">
            {{thing.title}}
            <small>{{thing.description}}</small>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="more-top">Studying</h2>
          <ul>
            <li v-for="thing in home.studying">
            {{thing.title}}
            <small>{{thing.description}}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  `,
  data() {
    return {
      home: {
        about: 'heyheyhey',
        links: [
          {
            title: 'Vevcom, Omega',
            path: 'https://omega.ntnu.no/frontpage'
          }
        ],
        currently: [
          {
            title: 'Vue.js',
            description: 'For this website.'
          },
          {
            title: 'Backbone.js',
            description: 'For Vevcom at Omega (NTNU).'
          },
        ],
        studying: [
          {
            title: 'C++',
            description: 'Objekt- og prosedyreorientert programmering.'
          },
          {
            title: 'Python',
            description: 'ITGK & ESDA.'
          },
          {
            title: 'Firebase',
            description: 'IT1 & ELSYS GK.'
          },
        ]
      }
    }
  }
};

const Projects = {
  template: `
  <div id="projects" class="content mobile-even-more-top">

    <div class="project-collection">
      <h3>{{other.title}}</h3>
      <p>{{other.description}}</p>
      <div class="projects-other">
        <div>
          <h2 class="mobile-more-top">{{other.adobexd.title}}</h2>
          <ul>
            <li v-for="design in other.adobexd.content">
              <a :href="design.path">{{design.title}}</a>
              <small>{{design.description}}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project-collection">
      <h3>{{esda.title}}</h3>
      <p>{{esda.description}}</p>
      <div class="projects">
        <div>
          <h2 class="mobile-more-top">{{esda.designNotes.title}}</h2>
          <ul>
            <li v-for="designNote in esda.designNotes.content">
              <a :href="designNote.path">{{designNote.title}}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mobile-more-top">{{esda.appNotes.title}}</h2>
          <ul>
            <li v-for="appNote in esda.appNotes.content">
              <a :href="appNote.path">{{appNote.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  `,
  data() {
    return {
      esda: {
        title: 'ESDA',
        description: 'Assignments part of the course Elektronisk systemdesign og -analyse I & II (written in Norwegian).',
        designNotes: {
          title: 'Design notes',
          content: [
            {
              title: 'Nivåregulator',
              path: 'esda1/D1_Niv_regulator.pdf'
            },
            {
              title: 'Trekantoscillator med opamp',
              path: 'esda1/D3_Trekantoscillator.pdf'
            }
          ]
        },
        appNotes: {
          title: 'Application notes',
          content: [
            {
              title: 'Turtallsindikator med transistor',
              path: 'esda1/D2_Turtallsindikator.pdf'
            }
          ]
        }
      },
      other: {
        title: 'Projects',
        description: 'Some projects I have worked on in university and on my own.',
        adobexd: {
          title: 'Adobe XD',
          content: [
            {
              title: 'Elsys Hackathon 2019',
              description: 'Innovation competition in groups over 2 days.',
              path: 'https://xd.adobe.com/view/065f867f-c7a0-417f-660d-b6c0f9fe6c2b-706e/?fullscreen'
            },
            {
              title: 'Live Curling (web) 2019',
              description: 'Part of the semester project in the course Elsys GK.',
              path: 'https://xd.adobe.com/view/da8898fd-cb29-4825-68ae-6ff517b848ab-acb9/?fullscreen'
            },
            {
              title: 'Live Curling (mobile) 2019',
              description: 'Part of the semester project in the course Elsys GK.',
              path: 'https://xd.adobe.com/view/8ec925c9-9fbe-45c0-573c-c746c22cfe92-f8f8/?fullscreen'
            }
          ]
        }
      }
    }
  }
};

const router = new VueRouter ({
  routes: [
    { path: '/profile', component: Profile },
    { path: '/', component: Home },
    { path: '/projects', component: Projects }
  ]
});

const app = new Vue ({
  el: '#app',
  router,
  data: {
    /*
    showingProfile: false,
    showingProject: false,
    */
  }
}).$mount('#app');

const footer = new Vue ({
  el: 'footer',
  data: {
    socials: [
      {
        title: 'Github',
        url: 'github.com/emlie/',
        img: 'icons/github-image.svg'
      },
      {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/mia-elisenberg-45348a164/',
        img: 'icons/linkedin.svg'
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
