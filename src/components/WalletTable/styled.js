import styled from 'styled-components';
import media from 'styled-media-query';
import { ButtonWrapper } from '../WalletForm/styled';

export const TableWrapper = styled.div`
  ${media.lessThan('medium')`
    overflow-x: auto;
    width: 100%;
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--borders);
  margin: 1rem 1.5rem;
`;

export const TableHead = styled.thead`
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--contrast3);
    color: white;
    border: 1px solid var(--borders);
    padding: 8px;
  }

  th:last-child {
    width: 175px;
  }
`;

export const TableRow = styled.tr`
  border: 1px solid var(--borders);
  padding: 8px;

  :nth-child(even) {
    background-color: #f2f2f2;
  }

  :nth-child(odd) {
    background-color: var(--white);
  }

  :hover {
    background-color: #ddd;
  }

  td:last-child {
    display: flex;
    justify-content: space-between;
    border: none;
  }
`;

export const TableData = styled.tbody`
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

export const TableEditButton = styled(ButtonWrapper)`
  width: 70px;
  background-color: #B39644;

  :hover {
    background-color: #8F7836;
  }
`;

export const TableDeleteButton = styled(ButtonWrapper)`
  width: 70px;
  background-color: #44B396;

  :hover {
    background-color: #368F78;
  }
`;
