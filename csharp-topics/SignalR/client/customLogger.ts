import { LogLevel, ILogger } from "@microsoft/signalr"
export class CustomLogger implements ILogger {
    log(logLevel: LogLevel, message: string) {
        if(logLevel == 0 || true){
            console.log(`${logLevel}:${message}`);
        }
    }
}