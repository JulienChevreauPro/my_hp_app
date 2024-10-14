import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CharactersPage from "./pages/CharactersPage.jsx";
import HousesPage from "./pages/HousesPage.jsx";
import HouseNamePage from "./pages/HouseNamePage.jsx";
import SpellsPage from "./pages/SpellsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function getCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => data);
}

function fetchCharactersByHouseName(houseName) {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
    .then((response) => response.json())
    .then((data) => data);
}

const getCharactersByHouseName = (houseName) => {
  switch (houseName) {
    case "Hufflepuff":
    case "Ravenclaw":
    case "Slytherin":
    case "Gryffindor":
      return fetchCharactersByHouseName(houseName);
    default:
      return Promise.resolve([]);
  }
};

function getSpells() {
  return fetch("https://hp-api.onrender.com/api/spells")
    .then((response) => response.json())
    .then((data) => data);
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
      },
      {
        path: "/houses/:houseName",
        element: <HouseNamePage />,
        loader: ({ params }) => getCharactersByHouseName(params.houseName),
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
