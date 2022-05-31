import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: null },
];
const privateRouter = [];
export { publicRouter, privateRouter };
