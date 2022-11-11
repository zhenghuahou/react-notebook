import * as React from "react";
import {
  Outlet, Link, Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import SetState18 from './pages/setState-18'
import SetState from './pages/setState'
import BeforeYouMemo from './pages/beforeYouMemo'
import Memo from './pages/memo'
import Demanhook from './pages/demanhook'
import Basic ,{routeConfig} from './pages/basic'

console.info(' routeConfig:',routeConfig);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "basic",
        element: <Basic />,
        children: routeConfig,
      },
      {
        path: "setState-18",
        element: <SetState18 />,
      },
      {
        path: "setState",
        element: <SetState />,
      },
      {
        path: "beforeyoumemo",
        element: <BeforeYouMemo />,
      },
      {
        path: "memo",
        element: <Memo />,
      },
      {
        path: "demanhook",
        element: <Demanhook />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="basic" element={<Basic />} />
//       <Route path="setState-18" element={<SetState18 />} />
//       <Route path="setState" element={<SetState />} />
//       <Route path="beforeyoumemo" element={<BeforeYouMemo />} />
//       <Route path="memo" element={<Memo />} />
//       <Route path="demanhook" element={<Demanhook />} />
//       <Route path="*" element={<NoMatch />} />
//     </Route>
//   )
// );

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
      <p className="pd10">
        <b>demo演示</b>
      </p>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/basic">basic demo</Link>
          </li>
          <li>
            <Link to="/setState-18">setState react 18</Link>
          </li>
          <li>
            <Link to="/setState">setState是同步还是异步</Link>
          </li>
          <li>
            <Link to="/beforeyoumemo">状态下放，缩小状态影响范围状态下放</Link>
          </li>
          <li>
            <Link to="/memo">memo+useCallback</Link>
          </li>
          <li>
            <Link to="/demanhook">按需加载hook</Link>
          </li>
        </ul>
      </nav>
      <section className="main">
        <Outlet />
      </section>
    </>
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
