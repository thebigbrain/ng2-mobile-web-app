import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule
} from '@angular/material';

const modules = [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AppMaterialModule { }