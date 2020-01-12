import styled from 'styled-components';
import { Table } from 'reactstrap';

export const TableInfo = styled(Table)`
  font-size: 17px;

  thead {
    tr {
      border-bottom: 1px solid #eaeced;

      th {
        padding: 28px;
        color: #555555;
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
      background-color: #f7f8f9;

      td {
        padding-top: 24px;
        padding-bottom: 13px;
      }
    }

    td {
      padding: 28px;
      padding-top: 30px;
      padding-bottom: 18px;
      border: 0;

      @media (max-width: 1140px) {
        vertical-align: middle;
      }

      :nth-child(1) {
        padding-left: 72px;
        color: #a0a0a0;
      }

      :nth-child(2) {
        width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      :nth-child(3),
      :nth-child(4) {
        text-align: center;
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
        font-size: 15px;
        border: 0;

        :focus,
        :active {
          outline: 0;
        }
      }

      .btn-success {
        margin-right: 11px;
        background-color: #6ad36e;

        @media (max-width: 1594px) {
          margin-right: 0;
          /* margin-bottom: 5px; */
        }
      }

      .btn-danger {
        background-color: #fb5867;
      }
    }
  }
`;
