import styled from 'styled-components';

export const ElementsSection = styled.section`
  height: 100%;
  padding-top: 29px;
  background-color: #f1f3f5;

  .element__table {
    background-color: #fff;
    margin: 0 29px;
    padding-bottom: 17px;
    border-radius: 10px;

    table {
      font-size: 17px;

      th,
      td {
        border: 0;
      }

      thead {
        tr {
          border-bottom: 1px solid #eaeced;

          th {
            padding: 28px;
            color: #555555;

            :nth-child(1) {
              width: 382px;
              padding-left: 72px;
            }

            :nth-child(2) {
              width: 380px;
              /* width: 480px; */
            }

            :nth-child(3) {
              width: 215px;
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

          :nth-child(1) {
            padding-left: 72px;
            color: #a0a0a0;
          }

          .name-element {
            display: inline-block;
            width: 215px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .btn {
            font-size: 15px;
            padding: 8px 27px;
            border: 0;

            :focus,
            :active {
              outline: 0;
            }
          }

          .btn-success {
            margin-right: 3px;
            background-color: #6ad36e;
          }

          .btn-danger {
            background-color: #fb5867;
          }
        }
      }
    }
  }

  .element__tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 21px;
    margin-bottom: 3px;

    button {
      padding: 12px 34px 12px 33px;
      color: #fff;
      background-color: #38c6da;
      font-size: 18px;
      border: 0;
      border-radius: 7px;
    }

    .btn-primary:not(:disabled):not(.disabled):active {
      background-color: #38c6da;
      opacity: 0.8;
    }
  }
`;
