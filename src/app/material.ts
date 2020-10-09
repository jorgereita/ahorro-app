import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatInputModule, MatTabsModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatBadgeModule, MatTooltipModule,
    MatSelectModule,MatSnackBarModule,MatProgressSpinnerModule,MatStepperModule,MatGridListModule,MatListModule,MatExpansionModule,
    MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatTreeModule,MatRadioModule,MatSidenavModule,
    MatProgressBarModule,MatSlideToggleModule,MatSliderModule,MatChipsModule,MatButtonToggleModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule,
        MatInputModule, MatTabsModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatBadgeModule, MatTooltipModule,
        MatSelectModule,MatSnackBarModule,MatProgressSpinnerModule,MatStepperModule,MatGridListModule,MatListModule,MatExpansionModule,
        MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,MatFormFieldModule, MatInputModule,MatNativeDateModule,MatDialogModule,MatRadioModule,
        MatSidenavModule,MatProgressBarModule,MatSlideToggleModule,MatSliderModule,MatChipsModule,MatButtonToggleModule
         
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule,
        MatInputModule, MatTabsModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatBadgeModule, MatTooltipModule,
        MatSelectModule,MatSnackBarModule,MatProgressSpinnerModule,MatStepperModule,MatGridListModule,MatListModule,MatExpansionModule,
        MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,MatNativeDateModule ,MatDialogModule,MatTreeModule,MatRadioModule,
        MatSidenavModule,MatProgressBarModule,MatSlideToggleModule,MatSliderModule,MatChipsModule,MatButtonToggleModule
    ]
})
export class MaterialModule { }