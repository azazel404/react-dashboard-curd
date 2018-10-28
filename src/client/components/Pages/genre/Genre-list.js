import React, { Component } from 'react'
import { removeGenre } from "../../../redux/actions/GenreActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 class GenreList extends Component {
  
    handleDelete = (id) => {
        this.props.removeGenre(id);
    }
    
    render() {
      const genres = this.props.genres.map(genre => (
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

export default connect(null, { removeGenre })(GenreList);