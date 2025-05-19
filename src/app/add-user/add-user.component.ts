import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import {User} from '../User';
import {filter, map} from 'rxjs';

@Component({
    selector: 'app-add-user',
    standalone: false,
    templateUrl: './add-user.component.html',
    styleUrl: './add-user.component.css'
})
export class AddUserComponent {
    userForm!: FormGroup;
    ifExist: boolean = false;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            gender: ['', Validators.required]
        });
    }

    onSubmit() {
        const newUser: User = {

            name: this.userForm.value.name,
            email: this.userForm.value.email,
            password: this.userForm.value.password,
            gender: this.userForm.value.gender
        }

        this.userService.getUsers().subscribe(data => {
            this.ifExist = data.some(user => user.email === newUser.email);
        });

        if (this.ifExist) {
            alert('User already exists');
            this.userForm.reset();
            return;
        }

        this.userService.addUser(newUser).subscribe(
            () => {
                alert('User added successfully');
                this.router.navigate(['/manage-user']);
            }
        );


    }

    onReset() {
        this.userForm.reset();
    }
}
