import logo from './img/logo_book_store.png';
import './css/main.css';
import React from "react";

function Header() {
    return (
        <div className="App">
            <header>
                <nav className="App-header-nav">

                    <img src={logo} className="App-logo" alt="logo"/>

                    <div className="order-blocks">
                        <div className="search-button">
                            <div className="container">
                              <span className="lupa">
                                <i className="fa fa-search"></i>
                              </span>
                                <input type="search" id="search" placeholder="¿Qué quieres buscar?"/>
                            </div>
                        </div>
                        <ul className="icons">
                            <li><a href="/cliente"><i className="far fa-user"></i> </a></li>
                            <li><i className="fas fa-calendar-alt"></i>
                            </li>
                            <li><i className="fas fa-globe-americas"></i></li>
                            <li><i className="fas fa-bars"></i></li>
                        </ul>
                    </div>
                </nav>
                <hgroup>
                    <h1>Books Store</h1>
                    <h2>Find your favorite books</h2>
                </hgroup>
            </header>
        </div>
    )
        ;
}

export default Header;
