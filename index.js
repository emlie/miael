// jshint esversion: 6

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

const Profile = {
  template: `
  <div class="wrapper">
    <div id="profile" class="content more-top" v-bind="profile">
      <div class="faceImg">
        <img :src="profile.img" alt="my face">
      </div>
      <div>
        <h3>{{profile.title}}</h3>
        <p>{{profile.text}}</p>
      </div>
    </div>
    <div class="content less-top">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
  `,
  data() {
    return {
      profile: {
        img: 'img/profile.jpg',
        title: 'Mia Elisenberg',
        text: 'Hey, this is some text about myself'
      }
    }
  }
};

const Home = {
  template: `
  <div id="home" class="content">
    <h3>Currently working on</h3>
    <ul>
      <li v-for="thing in home.currently">{{thing}}</li>
    </ul>
  </div>
  `,
  data() {
    return {
      home: {
        currently: [
          'Vue.js',
          'Backbone.js'
        ]
      }
    }
  }
};

const Projects = {
  template: `
  <div id="projects" class="content">
    <div class="project-collection">
      <h3>{{esda.title}}</h3>
      <p>{{esda.description}}</p>
      <div class="projects">
        <div>
          <h2>{{esda.designNotes.title}}</h2>
          <ul>
            <li v-for="designNote in esda.designNotes.content">
              <a :href="designNote.path">{{designNote.title}}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>{{esda.appNotes.title}}</h2>
          <ul>
            <li v-for="appNote in esda.appNotes.content">
              <a :href="appNote.path">{{appNote.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="project-collection">
      <h3>{{other.title}}</h3>
      <p>{{other.description}}</p>
      <div class="projects">
        <div>
          <h2>{{esda.designNotes.title}}</h2>
          <ul>
            <li v-for="designNote in esda.designNotes.content">
              <a :href="designNote.path">{{designNote.title}}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>{{esda.appNotes.title}}</h2>
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
}).$mount('#app');
