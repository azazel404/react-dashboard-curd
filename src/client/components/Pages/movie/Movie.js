import React, { Component } from 'react'
import {connect} from "react-redux";
import { fetchMovie} from "../../../redux/actions/MovieActions";
import Dashboard from "../../layouts/Dashboard";
import MovieList from "./Movie-list";
import {Link} from "react-router-dom";

 class Movie extends Component {

  componentDidMount(){
    this.props.fetchMovie();
  }
  render() {
    const { movies } = this.props.movie;
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
                      {/* DATA TABLE*/}
                      <Link to="/movie-create" className="au-btn au-btn-icon au-btn--green au-btn--small mb-3">
                        Add Item
                       </Link>
                      <div className="table-responsive m-b-40">
                        <MovieList movies={movies} />
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
    movie : state.movie
  }
}

export default connect(MapStateToProps, { fetchMovie })(Movie)
