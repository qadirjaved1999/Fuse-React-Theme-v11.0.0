// import { lazy } from 'react'
// const QadirJavedApp = lazy(() => ('./QadirJavedApp.jsx'));
// const Salman = lazy(() => ('./qadirjaved/Salman.jsx'));
// const SyedShehroz = lazy(() => ('./qadirjaved/SyedShehroz.JSX'));
// const Mubashir = lazy(() => ('./qadirjaved/Mubashir.jsx'))
import QadirJavedApp from "./QadirJavedApp";
import Salman from "./qadirjaved/Salman";
import Mubashir from "./qadirjaved/Mubashir";
import SyedShehroz from "./qadirjaved/SyedShehroz";

const QadirJavedAppRoute = {
  path: "/",
  element: <QadirJavedApp />,
  children: [
    {
        path: '/salman',
        element: <Salman />
    },
    {
        path: '/syedshehroz',
        element: <SyedShehroz />
    },
    {
        path: '/mubashir',
        element: <Mubashir />
    }
  ]
}

export default QadirJavedAppRoute