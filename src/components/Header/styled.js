import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  background-color: var(--black);

  img {
    margin-left: 2rem;
    width: 59px;
    height: 59px;

    ${media.lessThan('small')`
      width: 50px;
      height: 50px;
    `}
  }
`;

export const UserDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 570px;
  margin-right: 2rem;
  color: var(--white);

  ${media.lessThan('medium')`
    flex-direction: column;
    width: 210px;
  `}
`;

export const UserDataWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 285px;
  margin-right: 2rem;

  ${media.lessThan('medium')`
    flex-direction: row;
    justify-content: start;
    margin-right: 0;
    width: 200px;
  `}

  span:first-child {
    margin-bottom: 0.5rem;
    color: var(--lightContrast);
    font-weight: bolder;

    ${media.lessThan('medium')`
      min-width: 55px;
    `}
  }

  span:last-child {
    padding-left: 0.25rem;

    ${media.lessThan('medium')`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }
`;
