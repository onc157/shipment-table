import { ServiceName, ServiceValue, StatusName, StatusValue } from './Enums'

export interface IOrder {
    id: string
    customer: string
    item: string
    status: string
    orderDate: Date
    shipmentDate?: Date
    shop: TShop | null
    weight: number
    tracking: string
    isArchive: boolean
    _id: string
}

export type TShop = {
    name: string
    orderNumber: string
}

export type IOrders = IOrder[] | undefined

export interface IStatus {
    name: StatusName
    value: StatusValue
}

export interface IService {
    name: ServiceName
    value: ServiceValue
}
