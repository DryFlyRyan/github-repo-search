import React from 'react';
import PropTypes from 'prop-types';
import GithubLogoSrc from '../../../img/github_logo.png';
import {
  ContentTopBar,
  RepoTitle,
  RepoByLine,
  RightwardContainer,
  LanguageText,
  RepoLink,
  GithubLogo
} from './styles';

const TopBar = ({ name, ownerName, ownerPage, repoUrl, language }) => {
  return (
    <ContentTopBar>
      <RepoTitle>
        {`${name} by `}
        <RepoByLine
          href={ownerPage}
          target="_blank"
        >
          {ownerName}
        </RepoByLine>
      </RepoTitle>
      <RightwardContainer>
        <LanguageText>
          {language}
        </LanguageText>
        <RepoLink
          href={repoUrl}
          target="_blank"
        >
          <GithubLogo
            src={GithubLogoSrc}
          />
        </RepoLink>
      </RightwardContainer>
    </ContentTopBar>
  );
};

TopBar.defaultProps = {
  language: 'Not Specified'
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerPage: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default TopBar;
