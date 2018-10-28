import React, { Component } from 'react'
import HeaderMobile from "./HeaderMobile";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default class Landing extends Component {
  render() {
    return (
        <div className="page-wrapper">
            <HeaderMobile />
            <Header />
            <Sidebar />
            {/* PAGE CONTAINER*/}
            <div className="page-container">
                
                {/* MAIN CONTENT*/}
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="overview-wrap">
                                        <h2 className="title-1">overview</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-t-25">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c1">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-account-o" />
                                                </div>
                                                <div className="text">
                                                    <h2>10368</h2>
                                                    <span>Movies</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c2">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-shopping-cart" />
                                                </div>
                                                <div className="text">
                                                    <h2>388,688</h2>
                                                    <span>Genre</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c3">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-calendar-note" />
                                                </div>
                                                <div className="text">
                                                    <h2>1,086</h2>
                                                    <span>User</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c4">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-money" />
                                                </div>
                                                <div className="text">
                                                    <h2>$1,060,386</h2>
                                                    <span>Rental</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="au-card recent-report">
                                        <div className="au-card-inner">
                                            <h3 className="title-2">recent reports</h3>
                                            <div className="chart-info">
                                                <div className="chart-info__left">
                                                    <div className="chart-note">
                                                        <span className="dot dot--blue" />
                                                        <span>products</span>
                                                    </div>
                                                    <div className="chart-note mr-0">
                                                        <span className="dot dot--green" />
                                                        <span>services</span>
                                                    </div>
                                                </div>
                                                <div className="chart-info__right">
                                                    <div className="chart-statis">
                                                        <span className="index incre">
                                                            <i className="zmdi zmdi-long-arrow-up" />25%</span>
                                                        <span className="label">products</span>
                                                    </div>
                                                    <div className="chart-statis mr-0">
                                                        <span className="index decre">
                                                            <i className="zmdi zmdi-long-arrow-down" />10%</span>
                                                        <span className="label">services</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recent-report__chart">
                                                <canvas id="recent-rep-chart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="au-card chart-percent-card">
                                        <div className="au-card-inner">
                                            <h3 className="title-2 tm-b-5">char by %</h3>
                                            <div className="row no-gutters">
                                                <div className="col-xl-6">
                                                    <div className="chart-note-wrap">
                                                        <div className="chart-note mr-0 d-block">
                                                            <span className="dot dot--blue" />
                                                            <span>products</span>
                                                        </div>
                                                        <div className="chart-note mr-0 d-block">
                                                            <span className="dot dot--red" />
                                                            <span>services</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="percent-chart">
                                                        <canvas id="percent-chart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END MAIN CONTENT*/}
                {/* END PAGE CONTAINER*/}
            </div>

           
        </div>
    )
  }
}
