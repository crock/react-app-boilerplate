import { RouterProvider, Link, Outlet } from '@tanstack/react-router';
import React from 'react';
import router from '../router';

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <h1>learn react</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </RouterProvider>
    </>
  )
}

export default App;
