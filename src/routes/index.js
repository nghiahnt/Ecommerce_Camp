import configs from '../configs';

// Layout - import layout here
import { DashboardLayout } from '../layouts';

// Pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

// Need change to public route - using in user was logined
const routes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.dashboard, component: Dashboard, layout: DashboardLayout},
];

// Need to declare privite route - when user is not login 

export default routes;
