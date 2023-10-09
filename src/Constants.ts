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