import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome Page'
  name = this.route.snapshot.params['name']
  messageFromSerive :string

  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) {

  }

  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    // console.log("get welcome message called")
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('Last line of Get Welcome message');
  }
  getWelcomeMessageWithParameter() {
    // console.log("get welcome message called")
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response){
    this.messageFromSerive=response.message
    //console.log(response)
    //console.log(response.message)
  }

  handleErrorResponse(error){
     this.messageFromSerive = error.error.message;
  }

}
