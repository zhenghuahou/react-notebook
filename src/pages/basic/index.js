import {
    Outlet, Link, Route,
} from "react-router-dom";
import routeConfig from './route'

export { default as routeConfig } from './route'

export default function Basic() {
    return (
        <div className="basic-wrap">
            <ul className="basic-nav">
                {routeConfig.map((r) => {
                    const {path,title} = r
                    return <li key={path}>
                        <Link  to={path}>{title}</Link>
                    </li>
                })}
            </ul>
            <hr/>
            <Outlet />
        </div>
    );
}
