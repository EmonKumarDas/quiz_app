import React, { createContext } from "react";
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

export const TopicContext = createContext();

const Root = () => {
    const topics = useLoaderData();
    return (
        <TopicContext.Provider value={topics}>
            <Header />
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicContext.Provider>
    );
};

export default Root;
