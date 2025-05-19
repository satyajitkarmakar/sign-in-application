import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../service/user.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
    selector: 'app-manage-user',
    standalone: false,
    templateUrl: './manage-user.component.html',
    styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.loadUsers();

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.loadUsers();
        });

    }

    loadUsers() {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    deleteUser(id: number | undefined) {
        this.userService.deleteUser(id as number).subscribe(() => {
            this.loadUsers();
        });
    }


}
