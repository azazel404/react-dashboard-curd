import React, { Component } from 'react'
import { TextFieldForm } from "../../../utils/FormComponent";
import { connect } from "react-redux";
import { SearchGenre } from "../../../redux/actions/GenreActions";
///pembuatan component search
class GenreSearch extends Component {
    state = {
        search: ''
    }
        handleChange = e => {
        const {SearchGenre} = this.props
        SearchGenre(e.target.value);
    };

render() {
    console.log(this.props);
    const { searchState } = this.props
    return (
      <React.Fragment>
          <TextFieldForm
                className="control-label mb-1"
                type="text"
                name="search"
                value={searchState}
                onChange={this.handleChange}
                placeholder="search"
            />
      </React.Fragment>
    )
  }
}
const MapStateToProps = (state) => {
    return{
        searchState: state.genre.searchQuery
    }
}

export default connect(MapStateToProps, { SearchGenre })(GenreSearch);