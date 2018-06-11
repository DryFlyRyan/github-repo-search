import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import InteractionsRow from './InteractionsRow';
import {
  CardFrame,
  UserContainer,
  UserAvatar,
  ContentContainer,

  DescriptionContainer,
  DescriptionText
} from './styles';

const ResultCard = ({ repo }) => {
  return (
    <CardFrame>
      <UserContainer>
        <a
          href={repo.owner.html_url}
          target="_blank"
        >        
          <UserAvatar
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            title={repo.owner.login}
          />
        </a>
      </UserContainer>
      <ContentContainer>
        <TopBar
          name={repo.name}
          ownerName={repo.owner.login}
          ownerPage={repo.owner.html_url}
          repoUrl={repo.html_url}
          language={repo.language}
        />
        <DescriptionContainer>
          <DescriptionText>
            {repo.description}
          </DescriptionText>
        </DescriptionContainer>
        <InteractionsRow
          watchersCount={repo.watchers_count}
          stargazersCount={repo.stargazers_count}
          forksCount={repo.forks}
        />
      </ContentContainer>
    </CardFrame>
  );
};

ResultCard.propTypes = {
  repo: PropTypes.shape().isRequired
};

export default ResultCard;
