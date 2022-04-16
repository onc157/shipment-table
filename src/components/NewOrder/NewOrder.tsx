import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from '../common'
import { Dialog, MenuItem, Typography } from '@material-ui/core'
import { COLOR_BLUE } from '../common'
import {
    ItemButtonStyled,
    ItemStyled,
    SubmitButtonStyled,
    TextFieldStyled,
    WrapperStyled,
    SelectStyled,
} from './NewOrder.style'
import { useCreateOrderMutation } from '../../api/OrdersService'
import { DatePicker } from '@material-ui/pickers'
import { Services } from '../../constants/statuses'
import { ServiceValue } from '../../type/Enums'

export const NewOrder = () => {
    const [createOrder] = useCreateOrderMutation()

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    const validationSchema = yup.object({
        customer: yup.string().required('Введите имя'),
        item: yup.string().required('Добавьте товар'),
        shop: yup.object({
            orderNumber: yup.string().required('Введите номер заказа'),
        }),
    })

    const formik = useFormik({
        initialValues: {
            shop: {
                orderNumber: '',
                name: ServiceValue.EBAY,
            },
            customer: '',
            item: '',
            orderDate: Date.now(),
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            // alert(JSON.stringify(values, null, 2))
            createOrder(values)
        },
    })

    return (
        <>
            <Button bgcolor={COLOR_BLUE} onClick={handleOpen}>
                + Новый заказ
            </Button>
            <Dialog disableEnforceFocus open={isOpen} onClose={handleClose}>
                <WrapperStyled onSubmit={formik.handleSubmit}>
                    <Typography variant="h5" gutterBottom>
                        Новый заказ
                    </Typography>
                    <TextFieldStyled
                        id="customer"
                        name="customer"
                        label="ФИО"
                        variant="outlined"
                        value={formik.values.customer}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.customer &&
                            Boolean(formik.errors.customer)
                        }
                        helperText={
                            formik.touched.customer && formik.errors.customer
                        }
                    />
                    <ItemStyled>
                        <TextFieldStyled
                            id="item"
                            name="item"
                            label="Товар"
                            variant="outlined"
                            value={formik.values.item}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.item &&
                                Boolean(formik.errors.item)
                            }
                            helperText={
                                formik.touched.item && formik.errors.item
                            }
                        />
                        <ItemButtonStyled color="primary" variant="contained">
                            +
                        </ItemButtonStyled>
                    </ItemStyled>
                    <SelectStyled
                        fullWidth
                        id="shop.name"
                        name="shop.name"
                        variant="outlined"
                        value={formik.values.shop.name}
                        onChange={formik.handleChange}
                    >
                        {Services.map((service) => (
                            <MenuItem value={service.value} key={service.value}>
                                {service.name}
                            </MenuItem>
                        ))}
                    </SelectStyled>
                    <TextFieldStyled
                        id="shop.orderNumber"
                        name="shop.orderNumber"
                        label="Номер заказа"
                        variant="outlined"
                        value={formik.values.shop.orderNumber}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.shop?.orderNumber &&
                            Boolean(formik.errors.shop?.orderNumber)
                        }
                        helperText={
                            formik.touched.shop?.orderNumber &&
                            formik.errors.shop?.orderNumber
                        }
                    />
                    <DatePicker
                        label="Дата оплаты"
                        value={formik.values.orderDate}
                        onChange={(value) => {
                            formik.setFieldValue('orderDate', value, false)
                        }}
                        mask="__.__.____"
                        disableFuture
                        renderInput={(props) => (
                            <TextFieldStyled
                                {...props}
                                name="orderDate"
                                variant="outlined"
                                helperText={null}
                            />
                        )}
                    />
                    <SubmitButtonStyled
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        СОЗДАТЬ ЗАКАЗ
                    </SubmitButtonStyled>
                </WrapperStyled>
            </Dialog>
        </>
    )
}
