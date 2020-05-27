import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private service:UserServiceService) {
    }


    canActivate(): boolean {
        return this.service.isLogIn;
    }
}