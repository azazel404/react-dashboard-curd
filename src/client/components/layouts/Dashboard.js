import React, { Component } from 'react'



import Header from "./Header";
import Sidebar from "./Sidebar";
import HeaderMobile from "./HeaderMobile";


export default class Dashboard extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <HeaderMobile />
                <Sidebar />
                <Header />
            </div>
        )
    }
}
