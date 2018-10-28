import React, {Component} from "react";
import { Link } from "react-router-dom";



class Sidebar extends Component{
    render(){
        return(
           <div>
                < aside className="menu-sidebar d-none d-lg-block" >
                    <div className="logo">
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                             
                                <li>
                                    <Link to="/genre">
                                        <i className="fas fa-chart-bar" />Genres</Link>
                                </li>
                                <li>
                                    <Link to="/movie">
                                        <i className="fas fa-chart-bar" />Movies</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside >
           </div>
        )
    }
}

export default Sidebar;