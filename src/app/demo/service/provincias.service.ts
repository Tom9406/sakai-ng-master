import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProvinciasService {

    constructor(private http: HttpClient) { }

    getProvincias() {
        return this.http.get<any>('assets/demo/data/provincias.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}