import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/home';
import Connect from '../pages/connect';
import ScrollToTop from '../components/ScrollToTop';


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
    path: "/connect",
    element: (
      <MainLayout>
        <Connect />
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