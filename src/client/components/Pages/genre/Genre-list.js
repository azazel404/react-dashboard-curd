import React, { Component } from 'react'
import { removeGenre } from "../../../redux/actions/GenreActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 class GenreList extends Component {
  
    handleDelete = (id) => {
        this.props.removeGenre(id);
    }
    ///filter untuk search data dari genre
    render() {
        const {searchState} = this.props;
        ///fillter search and mapping fetch data genre
      const genres = this.props.genres
         .filter(
              genre => `${genre.name}`.toUpperCase().indexOf(searchState.toUpperCase()) >= 0
                )
      .map(genre => (
          <tr key={genre._id}>
              <td>{genre._id}</td>
              <td>{genre.name}</td>
              <td>
                  <Link to={`/genre/${genre._id}`} className="btn btn-info mr-1 btn-primary">
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => this.handleDelete(genre._id)} >Delete</button>
              </td>
          </tr>
      ))
    return (
      <div>
            <table className="table table-borderless table-data3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Genre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {genres}
                </tbody>
            </table>
      </div>
    )
  }
}
//get state props searchstate genre
const MapStateToProps = (state) => {
    return{
        searchState: state.genre.searchQuery
    }
}
export default connect(MapStateToProps, { removeGenre })(GenreList);