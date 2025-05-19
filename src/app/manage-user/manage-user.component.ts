import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-manage-user',
    standalone: false,
    templateUrl: './manage-user.component.html',
    styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    deleteUser(id: number | undefined) {
        this.userService.deleteUser(id as number);
    }


}
