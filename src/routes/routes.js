import Home from '../pages/home'
import Following from '../pages/follow'
import Explore from '../pages/explore';
import Video from '../pages/video';
import Message from '../pages/message';

const routes = [
    {
        path: '/',
        element: <Home/>,
        children: [],
    },
    {
        path: '/following',
        element: <Following/>,
        children: [],
    },
    {
        path: '/explore',
        element: <Explore/>,
        children: [],
    },
    {
        path: '/video',
        element: <Video />,
        children: [],
    },
    {
        path: '/message',
        element: <Message />,
        children: [],
    },
];

export default routes