import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CreateUserComponent {
  roles = [
    {name: 'Patient', value:'patient', viewValue: 'patient'},
    {name: 'Doctor',  value:'doctor', viewValue: 'doctor'},
  ];

  isDropdownVisible = false;

  radioButtons = [
    {
      id: '1',
      label: 'Patient'
    },
    {
      id: '2',
      label: 'Doctor'
    },
    {
      id: '3',
      label: 'Admin'
    },
  ];

  selectedOption: string | null = null;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  updateSelection(option: string) {
    this.selectedOption = option;
    this.isDropdownVisible = false; // Optional: Close dropdown after selection.
  }

}
