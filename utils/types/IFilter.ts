export interface IFilter {
    city: string;
    region: string;
    type: string;
    status: string;
    price: {
        from: number;
        to: number;
    };
    areaSize: {
        from: number,
        to: number;
    };
    rooms: string;
    baths: string;
}