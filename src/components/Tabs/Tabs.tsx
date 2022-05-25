import { Tab } from '@material-ui/core'
import { OrdersTab } from '../OrdersTab'
import React from 'react'
import Controls from '../Controls/Controls'
import { TabsStyled, WrapperStyled } from './'

export const Tabs = () => {
    const [value, setValue] = React.useState(0)

    const a11yProps = (index: number) => {
        return {
            id: `wrapped-tab-${index}`,
            'aria-controls': `wrapped-tabpanel-${index}`,
        }
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <WrapperStyled>
            <TabsStyled
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <Tab label="Текущие заказы" {...a11yProps(0)} />
                <Tab label="Архив" {...a11yProps(1)} />
            </TabsStyled>
            <Controls />
            <OrdersTab value={value} index={0}>
                Item One
            </OrdersTab>
        </WrapperStyled>
    )
}
