import styled from 'styled-components';
import { Table } from 'reactstrap';
import { fontSize, color } from 'styles/variable';
import { breakpoints } from 'styles/mixins/responsive';

export const TableInfo = styled(Table)`
  font-size: ${fontSize.fontSizeBase};

  thead {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.borderTopTable};

      th {
        padding: 28px;
        color: ${({ theme }) => theme.tableHead};
        border: 0;

        :nth-child(1) {
          width: 382px;
          padding-left: 72px;
        }

        :nth-child(2) {
          width: 313px;
          /* width: 480px; */
        }

        :nth-child(3) {
          width: 244px;
          text-align: center;
        }

        :nth-child(4) {
          text-align: center;
        }
      }
    }
  }

  tbody {
    tr:nth-of-type(even) {
      background-color: ${({ theme }) => theme.tableRowEven};

      td {
        padding-top: 24px;
        padding-bottom: 13px;
      }
    }

    tr:nth-of-type(odd) {
      background-color: ${({ theme }) => theme.tableRowOdd};
    }

    td {
      padding: 28px;
      padding-top: 30px;
      padding-bottom: 18px;
      border: 0;
      vertical-align: middle;

      :nth-child(1) {
        padding-left: 72px;
        color: ${color.elementTable};
      }

      :nth-child(2) {
        color: ${({ theme }) => theme.tableColumnView};

        span {
          width: 100px;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      :nth-child(3),
      :nth-child(4) {
        text-align: center;
      }

      &:nth-child(4) {
        @media (max-width: ${breakpoints.lg}) {
          display: flex;
          flex-direction: column;
        }
      }

      .name-element {
        display: inline-block;
        width: 215px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .btn {
        width: 83px;
        height: 37px;
        font-size: ${fontSize.fontSizeSmall};
        border: 0;

        :focus,
        :active {
          outline: 0;
        }
      }

      .btn-success {
        margin-right: 11px;
        background-color: ${color.btnSuccess};

        @media (max-width: ${breakpoints.lg}) {
          margin-right: 0;
          margin-bottom: 5px;
        }
      }

      .btn-danger {
        background-color: ${color.btnDanger};
      }
    }
  }
`;
