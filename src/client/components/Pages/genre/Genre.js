import React, { Component } from 'react'
import {connect} from "react-redux";
import { fetchGenre} from "../../../redux/actions/GenreActions";
import Dashboard from "../../layouts/Dashboard";
import Genrelist from "./Genre-list";
import {Link} from "react-router-dom";
import GenreSearch from "./Genre-fillter";
//search state untuk state search
 class Genre extends Component {

  componentDidMount(){
    this.props.fetchGenre();
  }
  render() {
    const { genres } = this.props.genre;
    return (
      <div>
        <Dashboard />
        <div>
          <div className="page-container">
            {/* MAIN CONTENT*/}
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                    <GenreSearch />
                      {/* DATA TABLE*/}
                      <Link to="/genre-create" className="au-btn au-btn-icon au-btn--green au-btn--small mb-3">
                        Add Item
                       </Link>
                      <div className="table-responsive m-b-40">
                        <Genrelist genres={genres} />
                      </div>
                      {/* END DATA TABLE*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAIN CONTENT*/}
            {/* END PAGE CONTAINER*/}
          </div>
        </div>
      </div>
    )
  }
}
const MapStateToProps = state => {
  return{
    genre : state.genre,
    searchState: state.genre.searchQuery
  }
}

export default connect(MapStateToProps, { fetchGenre })(Genre)
