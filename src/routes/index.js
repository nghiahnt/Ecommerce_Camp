import configRoutes from '../configRoutes';

// Layout - import layout here

// Pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const routes = [
    { path: configRoutes.routes.home, component: Home },
    { path: configRoutes.routes.dashboard, component: Dashboard, Layout: ""},
];

export default routes;
