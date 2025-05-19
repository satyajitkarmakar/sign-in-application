import { Injectable } from '@angular/core';
import { User } from '../User';
import {HTTP_TRANSFER_CACHE_ORIGIN_MAP, HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:3000/data';

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get<User[]>(this.baseUrl);
    }

    addUser(user: User) {
        return this.http.post<User>(this.baseUrl, user);
    }

    deleteUser(id: number) {
        return this.http.delete<User>(`${this.baseUrl}/${id}`)
    }
}
