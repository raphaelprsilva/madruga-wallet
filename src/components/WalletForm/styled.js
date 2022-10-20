/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;

  margin: 1rem;

  ${media.lessThan('large')`
    height: 200px;
    flex-direction: column;
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
    height: 315px;
    align-items: start;
    margin: 1rem 0;
  `}

  input {
    padding: 0.5rem 1rem;
    border: 1px solid var(--borders);
    border-radius: 5px;
    margin-right: 1rem;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;

    width: 150px;
    height: 35px;
    left: 454px;
    top: 525px;

    ${media.lessThan('medium')`
      margin-right: 0;
    `}
  }

  input:focus {
    border: 1.3px solid var(--borderFocus);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
    padding-left: 1rem;
  `}

  label {
    margin-bottom: 0.5rem;
    font-weight: bolder;

    ${media.lessThan('medium')`
      padding-right: 0.5rem;
    `}
  }

  span {
    align-self: flex-end;
    font-size: 0.75rem;
    color: var(--highlight);
    margin-bottom: 0.5rem;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
    padding-left: 1rem;
  `}

  label {
    margin-bottom: 0.5rem;
    font-weight: bolder;

    ${media.lessThan('medium')`
      padding-right: 0.5rem;
    `}
  }

  select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--borders);
    border-radius: 5px;
    margin-right: 1rem;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    background-color: var(--white);

    width: 180px;
    height: 35px;
    left: 454px;
    top: 525px;
  }

  select:focus {
    border: 1.3px solid #a3a0a0;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 10px;
  margin-top: 0.7rem;

  width: 190px;
  height: 35px;
  left: 454px;
  top: 601px;

  background-color: var(--contrast2);
  border-radius: 5px;
  font-weight: bolder;
  color: var(--white);
  border: none;
  transition: background-color 0.5s ease;

  ${media.lessThan('medium')`
    min-width: 250px;
    margin-left: 1rem;
  `}

  :hover {
    background-color: var(--contrast3);
    cursor: pointer;
  }

  :disabled {
    background-color: var(--disabled);
  }
`;
