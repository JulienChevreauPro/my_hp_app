import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CharactersPage from "./pages/CharactersPage.jsx";
import HousesPage from "./pages/HousesPage.jsx";
import SpellsPage from "./pages/SpellsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function getCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => data);
}

function getCharactersByHouseName() {
  return fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => data);
}

function getSpells() {
  return fetch("https://hp-api.onrender.com/api/spells")
  .then(response => response.json())
  .then(data => data);
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
        loader: () => getCharacters(),
      },
      {
        path: "/houses",
        element: <HousesPage />,
        loader: () => getCharactersByHouseName(),
      },
      {
        path: "/spells",
        element: <SpellsPage />,
        loader: () => getSpells(),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
