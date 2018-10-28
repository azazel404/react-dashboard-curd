import React, { Component } from 'react'
import { connect } from "react-redux";
import { TextFieldForm, SelectForm } from "../../../utils/FormComponent";
import Dashboard from "../../layouts/Dashboard";
import { addMovie } from "../../../redux/actions/MovieActions";
import { withRouter } from 'react-router-dom';

class MovieCreate extends Component {
    state = {
        title: '',
        genre: '',
        numberInStock: '',
        dailyRentalRate: '',
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: this.state.title,
            genre: this.state.title,
            numberInStock: this.state.title,
            dailyRentalRate: this.state.title,
        }
        this.props.addMovie(newItem, this.props.history);
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {

        const options = [
            { label: 'select genre', value: 0 },
            { label: 'actions', value: 'actions' },
            { label: 'drama', value: 'drama' },
            { label: 'thiller', value: 'thiller' },
            { label: 'horor', value: 'horor' },
          
        ];

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
                                                            name="genre"
                                                            value={this.state.genre}
                                                            onChange={this.onChange}
                                                            options={options}
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
    movie: state.movie
});
export default connect(mapStateToProps, { addMovie })(withRouter(MovieCreate));