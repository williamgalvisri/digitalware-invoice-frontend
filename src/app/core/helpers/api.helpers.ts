import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiReponseInterface } from "../models/interfaces/api-method.interface";

export class ApiMethodHelpper {
    private apiMethod: string;
    private http!: HttpClient;
    constructor(_http: HttpClient) {
        this.apiMethod = environment.baseUrl;
        this.http = _http
    }

    public Get<T>(url: string) {
        return this.http.get<ApiReponseInterface<T>>(`${this.apiMethod}/${url}`).pipe(map(res => res.response.data))
    }

    public Post<T>(url: string, payload: any) {
        return this.http.post<ApiReponseInterface<T>>(`${this.apiMethod}/${url}`, payload).pipe(map(res => res.response.data))
    }

    public Put<T>(url: string, payload: any) {
        return this.http.put<ApiReponseInterface<T>>(`${this.apiMethod}/${url}`, payload).pipe(map(res => res.response.data))
    }

    public Delete<T>(url: string) {
        return this.http.delete<ApiReponseInterface<T>>(`${this.apiMethod}/${url}`).pipe(map(res => res.response.data))
    }
}