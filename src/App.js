import * as React from "react";
import {
  Outlet, Link, Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* Using path="*"" means "match anything", so this route
      acts like a catch-all for URLs that we don't have explicit
      routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);


export default function App() {
  return (
    <div className="app-demo">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

function Layout() {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="nomatch">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
