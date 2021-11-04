import styled from 'styled-components';
import { Button as ButtonMaterial } from '@material-ui/core'
import { COLOR_WHITE } from './Style';

export const Button = styled(ButtonMaterial)<{
    bgcolor: string
}>`
  &.MuiButton-root {
    padding: 0 15px;
    flex-wrap: nowrap;
    background-color: ${({ bgcolor }) => bgcolor};
    color: ${COLOR_WHITE};
    font-weight: 400;
    border-radius: 6px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.14), 
                0 2px 1px rgba(0, 0, 0, 0.12), 
                0 1px 3px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #3E7DD8;
      box-shadow: none;
    }
    
    &:disabled {
      box-shadow: none;
    }
  }
`