import styled from 'styled-components';

export const ContentContainer = styled.div.attrs({
  className: 'ContentContainer'
})`
  margin: 5px;
  display: flex;
  flex-basis: 80%;
  flex-direction: column;
  justify-content: space-between;
  // align-content: flex-start;
  // align-items: flex-start;
`;

export const ContentTopBar = styled.div.attrs({
  className: 'ContentTopBar'
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
`;

export const RightwardContainer = styled.span.attrs({
  className: 'RightwardContainer'
})`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const RepoTitle = styled.span.attrs({
  className: 'RepoTitle'
})`
  display: flex;
  flex-grow: 10;
  flex-basis: 100%;
  font-size: 22px;
  color: rgb(60, 60, 60);
`;

export const RepoByLine = styled.a.attrs({
  className: 'RepoByLine'
})`
  text-decoration: none;
  margin-left: 5px;
  font-size: 22px;
  color: rgb(100, 100, 100);
  font-style: italic;
`

export const LanguageText = styled.span.attrs({
  className: 'LanguageText'
})`
  font-size: 16px;
  color: rgb(60, 60, 60);
  white-space: nowrap;
  margin-right: 10px;
  font-style: italic;
`

export const RepoLink = styled.a.attrs({
  className: 'RepoLink'
})`
  font-size: 16px;
  text-decoration: none;
  margin-right: 10px;
`;

export const GithubLogo = styled.img.attrs({
  className: 'GithubLogo'
})`
  max-height: 30px;
`;
