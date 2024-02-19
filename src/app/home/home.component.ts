import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedOption: string = '';
  frontend = {
    title:'Front-end developer',
    description :'Designing new features while managing older ones Monitoring application performance, overseeing traffic drops related to usability, and preparing for other relevant issues that may arise Creating prototypes and mockups, managing brand quality consistency, and designing high-quality graphic images Working together with Back End Developers to improve usability Developing the standards of codes and libraries such that they are easily traceable in future Creating user-friendly web pages by using markup languages, such as HTML Maximizing the application pace by optimizing the scalability of applications Being up to date with current trends and emerging technologies',
    company:'Apexbit Solutions',
    salary:'60,000 CAD'
  };
  backend = {
    title:'Back-end developer',
    description :'Designing new features while managing older ones Monitoring application performance, overseeing traffic drops related to usability, and preparing for other relevant issues that may arise Creating prototypes and mockups, managing brand quality consistency, and designing high-quality graphic images Working together with Back End Developers to improve usability Developing the standards of codes and libraries such that they are easily traceable in future Creating user-friendly web pages by using markup languages, such as HTML Maximizing the application pace by optimizing the scalability of applications Being up to date with current trends and emerging technologies',
    company:'Apexbit Solutions',
    salary:'70,000 CAD'
  };
  fullstack = {
    title:'Full-stack developer',
    description :'Designing new features while managing older ones Monitoring application performance, overseeing traffic drops related to usability, and preparing for other relevant issues that may arise Creating prototypes and mockups, managing brand quality consistency, and designing high-quality graphic images Working together with Back End Developers to improve usability Developing the standards of codes and libraries such that they are easily traceable in future Creating user-friendly web pages by using markup languages, such as HTML Maximizing the application pace by optimizing the scalability of applications Being up to date with current trends and emerging technologies',
    company:'Apexbit Solutions',
    salary:'80,000 CAD'
  };
  onClick() {
    console.log('Clicked button');
  }
}
