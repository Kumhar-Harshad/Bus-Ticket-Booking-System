import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from "./components/Head";
import Footer from "./components/Footer";
import Loader from "./Loader";


function Layout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1600); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
             {loading ? (
        <Loader />
    ) : (
        <div className='h-full w-full block bg-white'>
            <Header />
            <main>
               
                    <Outlet />
                
            </main>
            
            <Footer />
          
        </div>
    )}
        </>
    )
}

export default Layout