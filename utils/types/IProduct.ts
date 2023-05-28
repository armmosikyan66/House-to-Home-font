export interface IProduct {
    address?: string;
    author?: string;
    desc?: string;
    id: string;
    _id?: string;
    type: {
        am: string;
        en: string;
        ru: string;
    };
    price: number;
    imageUrl: string[];
    images?: File[];
    public: boolean;
    status: {
        am: string;
        en: string;
        ru: string;
    };
    floorArea?: number;
    rooms?: number;
    furniture?: boolean;
    baths?: number;
    elevator?: boolean;
    city: {
        am: string;
        en: string;
        ru: string;
    };
    region: {
        am: string;
        en: string;
        ru: string;
    };
    newBuilding?: boolean;
    floorsCount?: number;
    currentFloor?: number;
    ceilingHeight?: number;
    balcony?: boolean;
    plotArea?: number;
    buildingType?: {
        am: string;
        en: string;
        ru: string;
    };
    prdId: number;
    authorPhoneNumber?: string;
    createdAt: Date;
}

export interface IProductResponse {
    products: IProduct[],
    founded: number
}