import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/home';
import ScrollToTop from '../components/ScrollToTop';
import Reasons from '../pages/reasons';
import Gallery from '../pages/gallery';
import LoveLetter from '../pages/love-letter';
import ValentineProposal from '../pages/be-my-val';
import NotFound from '../pages/error/not-found';


function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([

  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/reasons",
    element: (
      <MainLayout>
        <Reasons />
      </MainLayout>
    ),
  },
  {
    path: "/gallery",
    element: (
      <MainLayout>
        <Gallery />
      </MainLayout>
    ),
  },
  {
    path: "/love-letter",
    element: (
      <MainLayout>
        <LoveLetter />
      </MainLayout>
    ),
  },
  {
    path: "/be-my-val",
    element: (
      <MainLayout>
        <ValentineProposal />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;