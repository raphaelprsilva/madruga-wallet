import styled from 'styled-components';
import media from 'styled-media-query';

export const FormPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const ImageWrapper = styled.img`
  padding-right: 30px;
  border-right: 1px solid var(--borders);
  width: 258px;
  height: 197px;

  ${media.lessThan('medium')`
    padding-right: 0;
    padding-bottom: 10px;
    border-right: none;
    border-bottom: 1px solid var(--borders);
    width: 200px;
    height: 150px;
  `}
`;
