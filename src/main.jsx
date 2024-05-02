import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./index.css"

import App from "./App.jsx"
import HomePage from "./pages/HomePage.jsx"
import CharactersPage from "./pages/CharactersPage.jsx"
import HousesPage from "./pages/HousesPage.jsx"
import SpellsPage from "./pages/SpellsPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/characters",
        element: <CharactersPage/>,
      },
      {
        path: "/houses",
        element: <HousesPage/>,
      },
      {
        path: "/spells",
        element: <SpellsPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
