import AboutComponent from "components/about"
import ContactComponent from "components/contact"
import HomeComponent from "components/home"

export const USER= 'Arpit Dadhich'

export const NAV_ITEMS = {
    home: '/',
    about: '/about',
    contact: '/contact',
    login: '/login'
}

export const ROUTES_CONFIG = [
    {
        path: NAV_ITEMS.home,
        Component: HomeComponent
    },
    {
      path: NAV_ITEMS.about,
      Component: AboutComponent
  },
  {
    path: NAV_ITEMS.contact,
    Component: ContactComponent
}
  ]

export const SKILLS = [
    {
        title: 'React',
        className: 'devicon-react-original',
    },
    {
        title: 'Angular',
        className: 'devicon-angularjs-plain',
    },
    {
        title: 'HTML',
        className: 'devicon-html5-plain',
    },
    {
        title: 'CSS',
        className: 'devicon-css3-plain',
    },
    {
        title: 'Next JS',
        className: 'devicon-nextjs-original',
    },
    {
        title: 'Node JS',
        className: 'devicon-nodejs-plain',
    },
    {
        title: 'SASS',
        className: 'devicon-sass-original',
    },
    {
        title: 'Javascript',
        className: 'devicon-javascript-plain',
    },
    {
        title: 'Typescript',
        className: 'devicon-typescript-plain',
    },
    {
        title: 'GitHub',
        className: 'devicon-github-original',
    },
    {
        title: 'BitBucket',
        className: 'devicon-bitbucket-original',
    },
    {
        title: 'VS Code',
        className: 'devicon-vscode-plain',
    },
]