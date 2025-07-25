import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    exports:[
        MatButtonModule,MatCardModule,
         MatInputModule,
          MatSelectModule,
           MatFormFieldModule,
           MatToolbarModule,
           MatMenuModule,
           MatIconModule,
           MatDialogModule,
           MatSnackBarModule,
           MatProgressSpinnerModule,
           CommonModule,
           FormsModule
    ]
})

export class MaterialModule{}