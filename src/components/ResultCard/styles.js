import styled from 'styled-components';

export const CardFrame = styled.div.attrs({
  className: 'CardFrame'
})`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-radius: 15px;
  border: 1px solid rgb(190, 190, 190);
`;

export const UserContainer = styled.div.attrs({
  className: 'UserContainer'
})`
  flex: 1 1 20%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img.attrs({
  className: 'UserAvatar'
})`
  max-height: 100px;
  border-radius: 10px;
  border: 2px solid rgb(100, 100, 100);
`;

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

export const RepoTitle = styled.span.attrs({
  className: 'RepoTitle'
})`
  font-size: 22px;
  color: rgb(60, 60, 60);
`;

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

export const DescriptionContainer = styled.div.attrs({
  className: 'DescriptionContainer'
})`
  display: flex;
  flex-basis: 100%;
  margin-top: 15px;
  width: 75%;
`;

export const DescriptionText = styled.span.attrs({
  className: 'DescriptionText'
})`
  font-size: 16px;
  color: rgb(100, 100, 100);
  flex-grow: 10;
`;

export const CardFooter = styled.div.attrs({
  className: 'CardFooter'
})`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const InteractionsContainer = styled.div.attrs({
  className: 'InteractionsContainer'
})`
  display: flex;
  flex-direction: row;
  flex-basis: 15%;
`;

export const SVGContainer = styled.div.attrs({
  className: 'SVGContainer'
})`
  margin-right: 5px;
`;

export const CountContainer = styled.span.attrs({
  className: 'CountContainer'
})`
`;
