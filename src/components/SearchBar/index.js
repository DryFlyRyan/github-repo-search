import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchRepos } from '../../services/repos/actions';
import {
  SearchBarFrame,
  SearchBarInput
} from './styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter' && this.state.query) {
      this.props.searchReposDispatch(this.state.query);
    }
  }
  render() {
    return (
      <SearchBarFrame>
        <SearchBarInput
          value={this.state.query}
          placeholder="Search for a repository"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </SearchBarFrame>
    );
  }
}

SearchBar.propTypes = {
  searchReposDispatch: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    searchReposDispatch: query => {
      dispatch(searchRepos(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
