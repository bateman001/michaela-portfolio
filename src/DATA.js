import music from './styling/images/nu-strut-min.png';
import quiz from './styling/images/hiphopquiz-min.png';
import trip from './styling/images/Screen1-min.png';
import noteful from './styling/images/noteful-min.png';
import bakery from './styling/images/bakery-min.png'

const DATA = {
  PROJECTS: [
    {
      url: bakery,
      name: `Bryn's Sweet Creations`,
      live: 'https://bryns-bakery.vercel.app/',
      repo: 'https://github.com/bateman001/bryns-bakery',
      tech: ['React', 'React Hooks', 'React Spring', 'With Sizes', 'Vercel', 'Node.js', 'Express', 'PostgreSQL', 'Knex', 'Heroku'],
      description: 'A place to order your favorite treats from the cutest bakery',
      key: 1
    },
    {
      url: music,
      name: 'Nu Strut',
      live: 'https://nu-strut.vercel.app/',
      repo: 'https://github.com/bateman001/nu-strut',
      tech: ['React', 'React Hooks', 'React-Spring', 'WayPoint', 'Vercel', 'CSS' ],
      description: 'Inspired by Childish Gambinos website, this artist wanted a place to deliver his newest music first for free to his listeners',
      key: 2
    },
    {
      url: noteful,
      name: 'Noteful',
      live: 'https://noteful-teal.vercel.app/',
      repo: 'https://github.com/bateman001/noteful',
      tech: ['React', 'CSS', 'RestFUl API', 'Vercel', 'Heroku', 'PostgreSQL', 'Node.js', 'Express'],
      description: 'Application which organizes notes by folder and pulls data from a local API',
      key: 3
    },
    {
      url: trip,
      name: 'Day Tripper',
      live: 'https://bateman001.github.io/DayTripper/',
      repo: 'https://github.com/bateman001/DayTripper',
      tech: ['Jquery/JavaScript', 'HTML', 'CSS', 'RestFul API' ],
      description: 'An app using multiple APIs to give the user their optimal road trip experience. The weather, the route, and restaurants all in one click!',
      key: 4
    },
    {
      url: quiz,
      name: 'Hip Hop Quiz',
      live: 'https://bateman001.github.io/finalQuizApp/',
      repo: 'https://github.com/bateman001/finalQuizApp',
      tech: ['Jquery/JavaScript', 'HTML', 'CSS' ],
      description: 'A quiz which tests your modern hip-hop knowledge!',
      key: 5
    }, 
],
techSkills: [
   {
    stackType: 'Front End',
    stack:['HTML', 'CSS', 'JavaScript', 'JQuery', 'JQueryUI', 'React', 'React Hooks', 'React Spring', 'React Dom', 'React Router', 'React Waypoint', 'React Icons'],
  },
  {
    stackType: "Dev Tools",
    stack: ['VSCode', 'DreamWeaver', 'PhotoShop', 'Git', 'GitHub', 'DBeaver', 'PGadmin'],
  },
  {
    stackType: "Back End",
    stack: ['Node.js', 'Express', 'Morgan', 'Helmet', 'Bcryptjs', 'Cors', 'JsonWebToken', 'Nodemon', 'XSS', 'Mocha', 'Chai', 'Supertest', 'Nodemailer', 'Mailgen', 'Knex', 'PostgreSQL']
  }
]
}

export default DATA;