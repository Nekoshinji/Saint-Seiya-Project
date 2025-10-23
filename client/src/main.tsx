// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import SaintSeiyaAccueil from "./components/SaintSeiyaAccueil";
import ClothListingAsgard from "./pages/ClothListingAsgard";
import ClothListingPoseidon from "./pages/ClothListingPoseidon";
import ClothListingSanctuaire from "./pages/ClothListingSanctuaire";
import ClothNewAsgard from "./pages/ClothNewAsgardPage";
import ClothNewPoseidon from "./pages/ClothNewPoseidonPage";
import ClothNewSanctuaire from "./pages/ClothNewSantuairePage";
import DomainAsgardPage from "./pages/DomainAsgardPage";
import DomainPoseidonPage from "./pages/DomainPoseidonPage";
import DomainSanctuairePage from "./pages/DomainSanctuairePage";
import KnightListingAsgard from "./pages/KnightListingAsgard";
import KnightListingPoseidon from "./pages/KnightListingPoseidon";
import KnightListingSanctuaire from "./pages/KnightListingSanctuaire";
import KnightNewAsgard from "./pages/KnightNewAsgardPage";
import KnightNewPoseidon from "./pages/KnightNewPoseidonPage";
import KnightNewSanctuaire from "./pages/KnightNewSantuairePage";
import VideoListing from "./pages/VideoListing";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/",
        element: <SaintSeiyaAccueil />,
      },

      {
        path: "/DomainSanctuaire",
        element: <DomainSanctuairePage />,
      },
      {
        path: "/DomainAsgard",
        element: <DomainAsgardPage />,
      },
      {
        path: "/DomainPoseidon",
        element: <DomainPoseidonPage />,
      },
      {
        path: "/knightListingSanctuaire", // The root path
        element: <KnightListingSanctuaire />, // Renders the App component for the home page
      },
      {
        path: "/knightListingAsgard", // The root path
        element: <KnightListingAsgard />, // Renders the App component for the home page
      },
      {
        path: "/knightListingPoseidon", // The root path
        element: <KnightListingPoseidon />, // Renders the App component for the home page
      },
      {
        path: "/clothListingSanctuaire", // The root path
        element: <ClothListingSanctuaire />, // Renders the App component for the home page
      },
      {
        path: "/clothListingAsgard", // The root path
        element: <ClothListingAsgard />, // Renders the App component for the home page
      },
      {
        path: "/clothListingPoseidon", // The root path
        element: <ClothListingPoseidon />, // Renders the App component for the home page
      },
      {
        path: "/knigtNewSanctuaire",
        element: <KnightNewSanctuaire />,
      },
      {
        path: "/knigtNewAsgard", // The root path
        element: <KnightNewAsgard />, // Renders the App component for the home page
      },
      {
        path: "/knigtNewPoseidon", // The root path
        element: <KnightNewPoseidon />, // Renders the App component for the home page
      },
      {
        path: "/clothNewSanctuaire", // The root path
        element: <ClothNewSanctuaire />, // Renders the App component for the home page
      },
      {
        path: "/clothNewAsgard", // The root path
        element: <ClothNewAsgard />, // Renders the App component for the home page
      },
      {
        path: "/clothNewPoseidon", // The root path
        element: <ClothNewPoseidon />, // Renders the App component for the home page
      },
      {
        path: "/video", // The root path
        element: <VideoListing />, // Renders the App component for the home page
      },
    ],
  },

  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
