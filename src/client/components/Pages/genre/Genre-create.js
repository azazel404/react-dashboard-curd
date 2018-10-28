import React, { Component } from 'react'
import { connect } from "react-redux";
import { TextFieldForm } from "../../../utils/FormComponent";
import Dashboard from "../../layouts/Dashboard";
import { addGenre } from "../../../redux/actions/GenreActions";
import { withRouter } from 'react-router-dom';

class GenreCreate extends Component {
    state = {
        name: ''
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
           name : this.state.name
        }
        this.props.addGenre(newItem, this.props.history);
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
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
                                                <div className="card-header">Genre</div>
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h3 className="text-center title-2">Genre Create</h3>
                                                    </div>
                                                    <hr />
                                                    <form onSubmit={this.HandleSubmit}>
                                                        <TextFieldForm
                                                            label="title name"
                                                            className="control-label mb-1"
                                                            name="name"
                                                            value={this.state.name}
                                                            onChange={this.onChange}
                                                        />
                                                        <div>
                                                            <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                                                Create Genre
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
    genre: state.genre
});
export default connect(mapStateToProps, { addGenre })(withRouter(GenreCreate));