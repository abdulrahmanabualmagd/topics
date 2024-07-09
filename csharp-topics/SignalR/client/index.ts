// 1- Install and Import '@microsoft/signalr'
import * as signalR from "@microsoft/signalr";

import { CustomLogger } from "./customLogger";
import CustomRetryPolicy from "./CustomRetryPolicy";


// 2- Create Connection 
let connection = new signalR.HubConnectionBuilder()
        .configureLogging(new CustomLogger)
        .withUrl("/chathub", {transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling | signalR.HttpTransportType.ServerSentEvents})
        .withAutomaticReconnect(new CustomRetryPolicy)
        .build();

// 3- Add Event for method names in the ChatHub.cs file 
connection.on("Receive", (user, message) => {       // Subscribe
    console.log(`${user}::${message}`);
})

// connection.off("methodName");    => Unsubscribe

console.log("Disconnected!");

// 4- Start the connection with exception handling 
connection.start().then(() => console.log("Connected Successfully!")).catch(() => console.log("Failed To connect"));