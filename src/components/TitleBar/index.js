import React from 'react';
import PropTypes from 'prop-types';
import {
  TopBarContainer,
  TitleText
} from './styles';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TitleText>
        Repo Search
      </TitleText>
    </TopBarContainer>
  );
};

export default TopBar;
