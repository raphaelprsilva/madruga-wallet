/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 314px;

  padding: 1rem;
  margin: 1.5rem;

  ${media.lessThan('small')`
    width: 300px;
  `}

  input {
    padding: 0.5rem 1rem;
    border: 1px solid var(--borders);
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;

    width: 300px;
    height: 45px;
    left: 454px;
    top: 525px;

    ${media.lessThan('small')`
      width: 250px;
    `}
  }

  input:focus {
    border: 1.3px solid var(--borderFocus);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }

  span {
    align-self: flex-end;
    font-size: 0.75rem;
    color: var(--highlight);
    margin-bottom: 0.5rem;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  margin-top: 1rem;
  gap: 10px;

  width: 300px;
  height: 40px;
  left: 454px;
  top: 601px;

  background-color: var(--contrast2);
  border-radius: 5px;
  font-weight: bolder;
  color: var(--white);
  border: none;
  transition: background-color 0.5s ease;

  ${media.lessThan('small')`
      width: 250px;
  `}

  :hover {
    background-color: var(--contrast3);
    cursor: pointer;
  }

  :disabled {
    background-color: var(--disabled);
  }
`;
