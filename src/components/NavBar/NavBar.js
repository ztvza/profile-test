import React from 'react';
import './NavBar.css';
import '../../bace/container.css';

const NavBar = () => {
    return (
        <div className="container_header">
            <div className="navbar">
                <h3 className="navbar_title">Zahar</h3>

                <div className="navbar_items">
                    <a href="https://t.me/zaharkiy" className="navbar_item">Связаться со мной</a>
                    <a href="https://github.com/ztvza" className="navbar_item">Проекты</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;