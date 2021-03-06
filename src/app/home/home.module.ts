import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [ 
        SigninComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [ 
            CommonModule,
            ReactiveFormsModule,
            VMessageModule,
            RouterModule,
            FormsModule
        ]
})
export class HomeModule {

}