import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[ `
        .online {
            color:white;
        }

        .offline {
            color:salmon;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string;

    constructor() {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    getServerStatus():string {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}