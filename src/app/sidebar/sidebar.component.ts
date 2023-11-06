import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public sidebarLinks = [
    {route: '/home', imgURL: '/assets/assets/home.svg', name: 'Home'},
    {route: '/user', imgURL: '/assets/assets/user.svg', name: 'Profile'},
    {route: '/card', imgURL: '/assets/assets/calendar.svg', name: 'Appointments'},
    {route: '/card', imgURL: '/assets/assets/doctors.svg', name: 'Doctors'},
    {route: '/card', imgURL: '/assets/assets/members.svg', name: 'Patients'},

  ];


  constructor(private authService: AuthenticationService) {
  }

  get isSignedIn(): boolean {
    return this.authService.isUserSignedIn();
  }

  signOut(): void {
    this.authService.signOut();
  }

  signIn(): void {
    this.authService.signIn();
  }

  public isActive(linkRoute: string, currentPath: string): boolean {
    return (currentPath.includes(linkRoute) && linkRoute.length > 1) || currentPath === linkRoute;
  }
}
