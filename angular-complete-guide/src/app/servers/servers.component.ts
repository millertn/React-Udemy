import { Component, OnInit } from '@angular/core';

//NOTE: the templats, both of these are valid, but you will want one or the other, you must have a template however and obvs external ones are preffered
//NOTE: the selector options, all of these are valid depending on how you want your app to be!
@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = "No server has been created";
  serverName = '';
  serverCreated = false;
  servers = [ 'TestServer', 'TestServer2'];

  constructor () { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000, );
  }

  ngOnInit (): void {
  }

  onCreateServer () : void {
    // this.serverCreationStatus = "Now creating a server, Name will be " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName (event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
