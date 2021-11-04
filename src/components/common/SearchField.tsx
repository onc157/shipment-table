import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { COLOR_GREY, COLOR_WHITE } from './Style';
import styled from 'styled-components';

const SearchFieldStyled = styled.div`
  margin-right: 20px;
  width: 620px;
`

const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    height: 36px;
    background-color: ${COLOR_WHITE};
  }
`

export const SearchField = () => {
    return (
        <SearchFieldStyled>
            <TextFieldStyled
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                                <SearchIcon style={{ color: COLOR_GREY }} />
                        </InputAdornment>
                    )
                }}
                placeholder="Поиск"
                variant="outlined"
            />
        </SearchFieldStyled>
    )
}