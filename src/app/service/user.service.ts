import { Injectable } from '@angular/core';
import { User } from '../User';
import {HTTP_TRANSFER_CACHE_ORIGIN_MAP, HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = 'http://localhost:3000/data/';

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get<User[]>(this.baseUrl);
    }

    addUser(user: User) {

    }

    deleteUser(id: number) {

    }
}
