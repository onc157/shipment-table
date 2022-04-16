import { COLOR_BLACK, COLOR_BLUE, COLOR_GREY } from '../components/common'
import { FieldsName } from '../type/Enums'
import { Services, Statuses } from '../constants/statuses'

export const FieldsConfig = {
    id: {
        isLink: false,
        weight: 400,
        color: COLOR_BLACK,
        fontSize: 0.875,
    },
    customer: {
        name: FieldsName.CUSTOMER,
        isLink: false,
        weight: 600,
        color: COLOR_BLACK,
        fontSize: 0.875,
    },
    item: {
        name: FieldsName.ITEM,
        isLink: false,
        weight: 400,
        color: COLOR_GREY,
        fontSize: 0.875,
    },
    status: {
        name: FieldsName.STATUS,
        values: Statuses,
    },
    orderDate: {
        name: FieldsName.ORDER_DATE,
        disabled: true,
    },
    shipmentDate: {
        name: FieldsName.SHIPMENT_DATE,
    },
    serviceName: {
        name: FieldsName.SERVICE_NAME,
        values: Services,
    },
    serviceOrderNumber: {
        name: FieldsName.SERVICE_ORDER_NUMBER,
        isLink: false,
        weight: 400,
        color: COLOR_GREY,
        fontSize: 0.875,
    },
    weight: {
        name: FieldsName.WEIGHT,
        isLink: false,
        weight: 400,
        color: COLOR_BLACK,
        fontSize: 1,
    },
    tracking: {
        name: FieldsName.TRACKING,
        isLink: false,
        weight: 600,
        color: COLOR_BLUE,
        fontSize: 0.875,
    },
    isArchive: {
        name: FieldsName.IS_ARCHIVE,
    },
}
