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

          :nth-child(1) {
            padding-left: 72px;
            color: #a0a0a0;
          }

          :nth-child(2) {
            display: inline-block;
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

export const ModalRadio = styled.div`
  margin-left: 10px;

  .modal-label__first {
    margin-right: 20px;
  }

  input {
    margin-right: 5px;
    vertical-align: text-top;
  }
`;

export const ModalInput = styled.div`
  position: relative;
  margin: 0px 3px 30px;

  label {
    position: absolute;
    top: 0;
    left: 5px;
    font-size: 1rem;
    color: #757575;
    cursor: text;
    pointer-events: none;
    transform: translateY(50%);
    transition: transform 0.2s ease-out, color 0.2s ease-out, -webkit-transform 0.2s ease-out;
  }

  input {
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      border-bottom: 1px solid #38c6da;
      box-shadow: 0 1px 0 0 #38c6da;
    }

    :focus + label,
    :valid + label {
      left: 5px;
      color: #38c6da;
      font-weight: 300;
      font-size: 1rem;
      transform: translate(-8px, -14px) scale(0.8);
    }

    :focus + .form-email,
    :valid + .form-email {
      left: 8px;
    }
  }
`;
