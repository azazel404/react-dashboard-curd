import React, { Component } from 'react'
import { removeMovie } from "../../../redux/actions/MovieActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 class MovieList extends Component {
  
    handleDelete = (id) => {
        this.props.removeMovie(id);
    }
    
    render() {
      const movies = this.props.movies.map(movie => (
          <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                  <Link to={`/movie/${movie._id}`} className="btn btn-info mr-1 btn-primary">
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => this.handleDelete(movie._id)} >Delete</button>
              </td>
          </tr>
      ))
    return (
      <div>
            <table className="table table-borderless table-data3">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>genre</th>
                        <th>numberInStock</th>
                        <th>dailyRentalRate</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies}
                </tbody>
            </table>
      </div>
    )
  }
}

export default connect(null, { removeMovie })(MovieList);