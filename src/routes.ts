import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import { NAV_ITEMS } from "Constants";
import AboutComponent from "components/about";
import ContactComponent from "components/contact";

  const router = createBrowserRouter([
    {
        path: NAV_ITEMS.home,
        Component: App
    },
    {
      path: NAV_ITEMS.about,
      Component: AboutComponent
  },
  {
    path: NAV_ITEMS.contact,
    Component: ContactComponent
}
  ]);

  export default router;