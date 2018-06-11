import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import FilterBox from '../FilterBox';
import {
  ResultsFrameContainer,
  ResultCardContainer
} from './styles';

class ResultsFrame extends Component {
  populateRepoCards = repos => {
    return repos.map(repo => {
      return (
        <ResultCard
          repo={repo}
          key={`${repo.name}-${repo.node_id}`}
        />
      );
    });
  }
  render() {
    const {
      totalCount,
      repos
    } = this.props;
    return (
      <ResultsFrameContainer>
        <FilterBox />
        <ResultCardContainer>
          {totalCount > 0 &&
            this.populateRepoCards(repos)
          }
        </ResultCardContainer>
      </ResultsFrameContainer>
    );
  }
}

ResultsFrame.propTypes = {
  totalCount: PropTypes.number.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({ repos }) => {
  return {
    totalCount: repos.totalCount,
    repos: repos.items
  };
};

export default connect(mapStateToProps)(ResultsFrame);
