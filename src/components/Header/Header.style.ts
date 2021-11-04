import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderWrapper = styled(AppBar)`
  &.MuiAppBar-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 2px 4%;
    margin-bottom: 30px;
  }
`

export const HeaderTitle = styled.h1`
  margin-right: 15px;
`

export const HeaderDescription = styled.div`
  flex-grow: 1;
  font-size: 0.75rem;
  font-weight: 300;
`