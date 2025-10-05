import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
