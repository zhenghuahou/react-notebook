import * as React from "react";
import {
  Outlet, Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SetState18 from './pages/setState-18'
import Profiler from './pages/profiler'
import UseLayoutEffect from './pages/useLayoutEffect'
import SetState from './pages/setState'
import BeforeYouMemo from './pages/beforeYouMemo'
import Memo from './pages/memo'
import Demanhook from './pages/demanhook'
import Basic, { routeConfig } from './pages/basic'
import Program, { routeConfig as ProgramRouteConfig } from './pages/program'

const routerCfg = [
  {
    path: "basic",
    element: <Basic />,
    title: 'basic demo',
    children: routeConfig,
  },
  {
    path: "programming",
    element: <Program />,
    title: '编程案例',
    children: ProgramRouteConfig,
  },
  {
    path: "profiler",
    title: 'react profiler',
    element: <Profiler />,
  },
  {
    path: "useLayoutEffect",
    title:'useLayoutEffect',
    element: <UseLayoutEffect />,
  },
  {
    path: "setState-18",
    title: 'setState with react v18',
    element: <SetState18 />,
  },
  {
    path: "setState",
    title: 'setState是同步还是异步',
    element: <SetState />,
  },
  {
    path: "beforeyoumemo",
    title: '状态下放，缩小状态影响范围状态下放',
    element: <BeforeYouMemo />,
  },
  {
    path: "memo",
    title: 'memo+useCallback',
    element: <Memo />,
  },
  {
    path: "demanhook",
    title: '按需加载hook',
    element: <Demanhook />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: routerCfg,
  },
]);

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
        {routerCfg.map(r => {
          const {path,title} = r;
          return (<li  key={path}>
            <Link to={path}>{title}</Link>
          </li>)
        })}
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
