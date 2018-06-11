import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSort } from '../../services/repos/actions';

import SearchBar from '../SearchBar';
import {
  FilterBoxContainer,
  RadioGroupContainer,
  RadioGroupLabel,
  RadioSelectionContainer,
  LeftSelectionBox,
  RightSelectionBox
} from './styles';

class FilterBox extends Component {
  updateSort = e => {
    this.props.updateSortDispatch(e.target.value);
  }
  render() {
    const {
      sort
    } = this.props;
    return (
      <FilterBoxContainer>
        <SearchBar />
        <RadioGroupContainer>
          <RadioGroupLabel>
            Sort By:
          </RadioGroupLabel>
          <RadioSelectionContainer>
            <LeftSelectionBox
              value="relevance"
              selected={!sort}
              onClick={this.updateSort}
            >
              Relevance
            </LeftSelectionBox>
            <RightSelectionBox
              value="stars"
              onClick={this.updateSort}
              selected={sort}
            >
              Stars
            </RightSelectionBox>
          </RadioSelectionContainer>
        </RadioGroupContainer>
      </FilterBoxContainer>
    );
  }
};

FilterBox.propTypes = {
  sort: PropTypes.string.isRequired,
  updateSortDispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ repos }) => {
  return {
    sort: repos.params.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortDispatch: sort => {
      dispatch(updateSort(sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);
