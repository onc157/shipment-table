import { IService, IStatus } from '../type/Types'
import {
    ServiceName,
    ServiceValue,
    StatusName,
    StatusValue,
} from '../type/Enums'

export const Statuses: IStatus[] = [
    { name: StatusName.PAID, value: StatusValue.PAID },
    { name: StatusName.WORKING, value: StatusValue.WORKING },
]

export const Services: IService[] = [
    { name: ServiceName.EBAY, value: ServiceValue.EBAY },
    { name: ServiceName.SITE, value: ServiceValue.SITE },
]
