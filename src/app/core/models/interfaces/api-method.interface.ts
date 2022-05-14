export interface ApiReponseInterface<T> {
    response : {
        contentType: string;
        data: {
            [name: string]: T
        },
        message: string;
        statusCode: number;
    }
}