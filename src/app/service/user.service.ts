import { Injectable } from '@angular/core';
import { User } from '../User';
import {HTTP_TRANSFER_CACHE_ORIGIN_MAP} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userData: string = 'userData';


    constructor() {
        if (!localStorage.getItem((this.userData))) {
            const users: User[] = [
                { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "password": "Alice@123", "gender": "Female" },
                { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "password": "BobPass123", "gender": "Male" },
                { "id": 3, "name": "Clara White", "email": "clara.white@example.com", "password": "ClaraW!te", "gender": "Female" },
                { "id": 4, "name": "David Brown", "email": "david.brown@example.com", "password": "David#456", "gender": "Male" },
                { "id": 5, "name": "Ella Davis", "email": "ella.davis@example.com", "password": "EllaPass789", "gender": "Female" },
                { "id": 6, "name": "Frank Miller", "email": "frank.miller@example.com", "password": "Frank_2025", "gender": "Male" },
                { "id": 7, "name": "Grace Lee", "email": "grace.lee@example.com", "password": "GracePwd321", "gender": "Female" },
                { "id": 8, "name": "Henry Wilson", "email": "henry.wilson@example.com", "password": "Henry987", "gender": "Male" },
                { "id": 9, "name": "Isla Martinez", "email": "isla.martinez@example.com", "password": "IslaSecure", "gender": "Female" },
                { "id": 10, "name": "Jack Taylor", "email": "jack.taylor@example.com", "password": "Jack#2024", "gender": "Male" }
            ];
            localStorage.setItem(this.userData, JSON.stringify(users));
        }
    }

    getUsers() {
        const users = localStorage.getItem(this.userData);
        return users ? JSON.parse(users) : [];
    }

    addUser(user: User) {
        const users = this.getUsers();
        user.id = Math.floor(Math.random() * 101);
        users.push(user);
        localStorage.setItem(this.userData, JSON.stringify(users));
    }

    deleteUser(id: number) {
        const users: User = this.getUsers().filter((user: { id: number; }) => user.id !== id);
        localStorage.setItem(this.userData, JSON.stringify(users));
    }
}
