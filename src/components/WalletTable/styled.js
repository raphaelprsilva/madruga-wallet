import styled from 'styled-components';
import media from 'styled-media-query';

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
`;

export const TableData = styled.tbody`
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;
