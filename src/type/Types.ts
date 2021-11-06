export interface OrderInterface {
    id: string;
    customer: string;
    item: string;
    status: string;
    orderDate: string;
    shipmentDate?: string | null;
    shop: ShopType | null;
    weight: string;
    tracking: string;
    isArchive: Boolean;
}

export type ShopType = {
    name: string;
    orderNumber: string;
}

export type OrdersInterface = OrderInterface[];