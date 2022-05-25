import styled from 'styled-components'
import { Tabs } from '@material-ui/core'
import { COLOR_BLUE, COLOR_LIGHT_GREY } from '../common'

export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4%;
    height: 100%;
`

export const TabsStyled = styled(Tabs)`
    margin-bottom: 30px;
    border-bottom: 1px solid ${COLOR_LIGHT_GREY};

    .MuiTab-root.Mui-selected {
        color: ${COLOR_BLUE};
    }

    .MuiTabs-indicator {
        background-color: ${COLOR_BLUE};
    }
`
