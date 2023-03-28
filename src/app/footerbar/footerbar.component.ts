import { Component } from '@angular/core';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent {
  linkedinUrl:string = 'assets/images/linkedin.jpg'
  gitUrl:string = 'assets/images/git.jpg'
  instaUrl:string = 'assets/images/insta.jpg'
  wpUrl:string = 'assets/images/wp.jpg'
  mailUrl:string = 'assets/images/mail.jpg'
  konumUrl:string = 'assets/images/konum.jpg'
}
