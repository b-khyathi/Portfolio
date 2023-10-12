import AboutComponent from "components/about"
import ContactComponent from "components/contact"
import HomeComponent from "components/home"

export const USER = 'Arpit Dadhich'

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
        name: 'React',
        title: 'about.skills.skillList.react',
        className: 'devicon-react-original',
    },
    {
        name: 'Angular',
        title: 'about.skills.skillList.angular',
        className: 'devicon-angularjs-plain',
    },
    {
        name: 'HTML',
        title: 'about.skills.skillList.html',
        className: 'devicon-html5-plain',
    },
    {
        name: 'CSS',
        title: 'about.skills.skillList.css',
        className: 'devicon-css3-plain',
    },
    {
        name: 'Next JS',
        title: 'about.skills.skillList.nextjs',
        className: 'devicon-nextjs-original',
    },
    {
        name: 'Node JS',
        title: 'about.skills.skillList.nodejs',
        className: 'devicon-nodejs-plain',
    },
    {
        name: 'SASS',
        title: 'about.skills.skillList.sass',
        className: 'devicon-sass-original',
    },
    {
        name: 'Javascript',
        title: 'about.skills.skillList.javascript',
        className: 'devicon-javascript-plain',
    },
    {
        name: 'Typescript',
        title: 'about.skills.skillList.typescript',
        className: 'devicon-typescript-plain',
    },
    {
        name: 'GitHub',
        title: 'about.skills.skillList.github',
        className: 'devicon-github-original',
    },
    {
        name: 'BitBucket',
        title: 'about.skills.skillList.bitbucket',
        className: 'devicon-bitbucket-original',
    },
    {
        name: 'VS Code',
        title: 'about.skills.skillList.vscode',
        className: 'devicon-vscode-plain',
    },
]

export const LANG_LIST = [
    {
        code: 'en',
        title: 'English'
    },
    {
        code: 'es',
        title: 'Spanish'
    },
    {
        code: 'hi',
        title: 'Hindi'
    },
]