import React from 'react';
import Navbar from './Navbar'
import "../styles/global.css"
const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {props.children}
            </div>
            <footer>
                <p>Copyright 2021 Wajahat </p>
            </footer>
        </div>
    );
}

export default Layout;
