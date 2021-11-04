export interface OrderInterface {
    id: string;
    customer: string;
    item: string;
    status: string;
    orderDate: string;
    shipmentDate: string | null;
    shop: ShopType | null;
    weight: string | null;
    tracking: string | null;
    isArchive: Boolean;
}

export type ShopType = {
    name: String;
    orderNumber: String;
}

export type OrdersInterface = OrderInterface[];