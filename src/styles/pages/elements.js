import styled from 'styled-components';
import { fontSize, color } from 'styles/variable';
import { breakpoints } from 'styles/mixins/responsive';

export const ElementsSection = styled.section`
  padding-top: 29px;
`;

export const ElementTable = styled.div`
  background-color: ${({ theme }) => theme.table};
  margin: 0 29px;
  padding-bottom: 30px;
  border: ${({ theme }) => theme.tableBorder && '1px solid #292b2e'};
  border-radius: 10px;
`;

export const ElementTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 21px;
  margin-bottom: 3px;

  h5 {
    color: ${({ theme }) => theme.tableTitle};
  }

  button {
    padding: 12px 34px 12px 33px;
    color: ${color.colorWhite};
    background-color: ${color.colorBrand};
    font-size: ${fontSize.fontSizeMedium};
    border: 0;
    border-radius: 7px;

    @media (max-width: ${breakpoints.xs}) {
      padding: 8px 20px;
    }
  }

  .btn-primary {
    :hover,
    :not(:disabled):not(.disabled):active {
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

export const ErrorText = styled.span`
  display: inline-block;
  color: ${color.colorError};
`;

export const ModalInput = styled.div`
  position: relative;
  margin: 0px 3px 30px;

  label {
    position: absolute;
    top: 0;
    left: 5px;
    color: ${color.colorLabelModal};
    font-size: ${fontSize.fontSizeXBase};
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
      color: ${color.colorBrand};
      font-weight: 300;
      transform: translate(-8px, -14px) scale(0.8);
    }

    :focus + .form-email,
    :valid + .form-email {
      left: 8px;
    }
  }
`;
