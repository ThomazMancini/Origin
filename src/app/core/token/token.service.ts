import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    hasToken(){
        return !!this.getToken();
    }

    setToken(Token){
        window.localStorage.setItem(KEY, Token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken(){
        window.localStorage.removeItem(KEY);
    }
}