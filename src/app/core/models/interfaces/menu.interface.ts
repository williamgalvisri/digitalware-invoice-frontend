export interface MenuInterface {
    key: string;
    label: string;
    route: string;
    data: DataRouteInterface
}

export interface DataRouteInterface {
    title: string;
    description?: string;
}