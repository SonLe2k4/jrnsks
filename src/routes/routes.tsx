import About from '../page/About/About';
import BlogPage from '../page/Blog';
import BlogDetailsPage from '../page/BlogDetails';
import HomePage from '../page/HomePage';
import ShopPage from '../page/ShopPage';
import { IRoutes } from './type';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
    {
        path: '/blog-details',
        element: <BlogDetailsPage />,
    },
] as IRoutes[];

export default routes;
