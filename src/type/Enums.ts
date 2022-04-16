export enum FieldsName {
    CUSTOMER = 'customer',
    ITEM = 'item',
    STATUS = 'status',
    ORDER_DATE = 'orderDate',
    SHIPMENT_DATE = 'shipmentDate',
    SERVICE_NAME = 'shop.name',
    SERVICE_ORDER_NUMBER = 'shop.orderNumber',
    WEIGHT = 'weight',
    TRACKING = 'tracking',
    IS_ARCHIVE = 'isArchive',
}

export enum StatusName {
    PAID = 'Оплачено',
    WORKING = 'В работе',
}

export enum StatusValue {
    PAID = 'paid',
    WORKING = 'working',
}

export enum ServiceName {
    EBAY = 'eBay',
    SITE = 'Сайт',
}

export enum ServiceValue {
    EBAY = 'ebay',
    SITE = 'site',
}
