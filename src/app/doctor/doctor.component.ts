import { Component } from '@angular/core';

interface User {
  name: string;
  office: number;
  email: string;
  department: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctors: User[] = [
    {
      name: 'Arthur Melo',
      office: 3213,
      email: 'arthurmelo@example.com',
      department: 'General'
    },
    {
      name: 'Julia Smith',
      office: 3485,
      email: 'julia.smith@example.com',
      department: 'Cardiology'
    },
    {
      name: 'Robert Johnson',
      office: 3859,
      email: 'robert.johnson@example.com',
      department: 'Neurology'
    },
    {
      name: 'Emily Davis',
      office: 3908,
      email: 'emily.davis@example.com',
      department: 'Surgery'
    },
    {
      name: 'John Brown',
      office: 3542,
      email: 'john.brown@example.com',
      department: 'Dermatology'
    },
    {
      name: 'Susan Miller',
      office: 3535,
      email: 'susan.miller@example.com',
      department: 'Surgery'
    },
    {
      name: 'Michael Wilson',
      office: 3265,
      email: 'michael.wilson@example.com',
      department: 'General'
    },
    {
      name: 'Mary Johnson',
      office: 3490,
      email: 'mary.johnson@example.com',
      department: 'Neurology'
    },
    {
      name: 'James Lee',
      office: 3423,
      email: 'james.lee@example.com',
      department: 'Cardiology'
    },
    {
      name: 'Patricia Garcia',
      office: 3324,
      email: 'patricia.garcia@example.com',
      department: 'Dermatology'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
