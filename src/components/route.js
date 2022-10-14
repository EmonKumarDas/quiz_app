import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quizes from "../components/Quizes";
import Statistics from "../components/Statistics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            {
                path: '/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quizes></Quizes>
            },

            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics />
            },

            { path: '/blogs', element: <Blogs /> }
        ],

    }
])