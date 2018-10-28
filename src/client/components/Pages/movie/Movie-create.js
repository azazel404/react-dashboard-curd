import React, { Component } from 'react'
import { connect } from "react-redux";
import { TextFieldForm, SelectForm } from "../../../utils/FormComponent";
import Dashboard from "../../layouts/Dashboard";
import { addMovie } from "../../../redux/actions/MovieActions";
import {fetchGenre} from "../../../redux/actions/GenreActions";
import { withRouter } from 'react-router-dom';

class MovieCreate extends Component {

    componentDidMount() {
        this.props.fetchGenre();
    }

    state = {
        title: '',
        genreId: '',
        numberInStock: '',
        dailyRentalRate: '',
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: this.state.title,
            genreId: this.state.genreId,
            numberInStock: this.state.numberInStock,
            dailyRentalRate: this.state.dailyRentalRate,
        }
        console.log(newItem);
        this.props.addMovie(newItem, this.props.history);
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
        
    }
    render() {
        const {genres} = this.props.genre
        const selectOptions = genres.map(option => (
            <option key={option._id} value={option._id}>
            
                {option.name}
            </option>
        ));
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
                                        <div className="col-lg-6">
                                            <div className="card">
                                                
                                                <div className="card-header">Movie</div>
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h3 className="text-center title-2">Movie Create</h3>
                                                    </div>
                                                    <hr />
                                                    <form onSubmit={this.HandleSubmit}>
                                                        <TextFieldForm
                                                            label="title "
                                                            className="control-label mb-1"
                                                            name="title"
                                                            value={this.state.title}
                                                            onChange={this.onChange}
                                                        />
                                                         <SelectForm
                                                            placeholder="Genre"
                                                            name="genreId"
                                                            value={this.state.genreId}
                                                            onChange={this.onChange}
                                                            options={selectOptions}
                                                         />
                                                        <TextFieldForm
                                                            label="numberInStock"
                                                            className="control-label mb-1"
                                                            name="numberInStock"
                                                            value={this.state.numberInStock}
                                                            onChange={this.onChange}
                                                        />
                                                        <TextFieldForm
                                                            label="dailyRentalRate"
                                                            className="control-label mb-1"
                                                            name="dailyRentalRate"
                                                            value={this.state.dailyRentalRate}
                                                            onChange={this.onChange}
                                                        />
                                                        <div>
                                                            <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                                                Create Movie
                                                            </button>
                                                        </div>
                                                    </form>
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
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movie: state.movie,
    genre: state.genre
});
export default connect(mapStateToProps, { addMovie, fetchGenre})(withRouter(MovieCreate));