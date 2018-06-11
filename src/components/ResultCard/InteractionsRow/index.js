import React from 'react';
import PropTypes from 'prop-types';
import Octicons from 'octicons';
import {
  CardFooter,
  InteractionsContainer,
  SVGContainer,
  CountContainer
} from './styles';

const InteractionsRow = ({ watchersCount, stargazersCount, forksCount }) => {
  const eyeSVG = Octicons.eye.toSVG();
  const starSVG = Octicons.star.toSVG();
  const gitBranchSVG = Octicons['git-branch'].toSVG();
  return (
    <CardFooter>
      <InteractionsContainer>
        <SVGContainer
          dangerouslySetInnerHTML={{ __html: eyeSVG }}
        />
        <CountContainer>
          {watchersCount}
        </CountContainer>
      </InteractionsContainer>
      <InteractionsContainer>
        <SVGContainer
          dangerouslySetInnerHTML={{ __html: starSVG }}
        />
        <CountContainer>
          {stargazersCount}
        </CountContainer>
      </InteractionsContainer>
      <InteractionsContainer>
        <SVGContainer
          dangerouslySetInnerHTML={{ __html: gitBranchSVG }}
        />
        <CountContainer>
          {forksCount}
        </CountContainer>
      </InteractionsContainer>
    </CardFooter>
  );
};

InteractionsRow.propTypes = {
  stargazersCount: PropTypes.number.isRequired,
  watchersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired
};

export default InteractionsRow;
