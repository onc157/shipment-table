import { promises as fsp } from 'fs';

type ShopType = {
    name: String;
    orderNumber: String;
}

type OrderType = {
    id: string;
    customer: string;
    item: string;
    status: string;
    orderDate: string | null;
    shipmentDate: string | null;
    shop: ShopType | null;
    weight: string | null;
    tracking: string | null;
    isArchive: Boolean;
}

const fileName = 'orders.json';

const filePath = `${__dirname}/${fileName}`;

const readItemList = async (): Promise<OrderType[]> => {
    let list: OrderType[] = [];

    try {
        const contents = await fsp.readFile(filePath, 'utf8');

        const parsedList = JSON.parse(contents);

        if (!Array.isArray(list)) {
            throw new TypeError();
        }

        list = parsedList;
    } catch (e: unknown) {
        if (!(e instanceof Error)) {
            throw e;
        }

        console.warn(`There was error: ${e.message}`);
    }

    return list;
};

const writeItemList = async (list: OrderType[]): Promise<OrderType[]> => {
    const stringifiedList = JSON.stringify(list);

    await fsp.writeFile(filePath, stringifiedList, 'utf8');

    return list;
};

const listAll = async () => {
    return readItemList();
};

const getById = async (id: string): Promise<OrderType | undefined> => {
    const list = await readItemList();

    return list.find((elem) => {
        return elem.id === id;
    });
};

const create = async (order: OrderType): Promise<OrderType | undefined> => {
    const list = await readItemList();

    list.push(order);

    await writeItemList(list);

    return order;
};

const update = async (order: OrderType): Promise<OrderType> => {
    const list = await readItemList();

    const index = list.findIndex((elem) => {
        return elem.id === order.id;
    })

    if (index !== -1) {
        throw new Error();
    }

    list[index] = order;

    await writeItemList(list);

    return order;
};

const remove = async (id: string): Promise<void> => {
    const list = await readItemList();

    const index = list.findIndex((elem) => {
        return elem.id === id;
    })

    list.splice(index, 1);

    await writeItemList(list);
};

export {
    listAll,
    getById,
    create,
    update,
    remove
}