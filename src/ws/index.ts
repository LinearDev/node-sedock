import WebSocket from "ws"
import { block } from "../eth/types"

export class Ws {
    private ws: WebSocket | undefined

    static readonly OPEN = 1
    static readonly CLOSED = 3
    static readonly CONNECTING = 0
    static readonly CLOSING = 2
    
    public connect(ws_relay: string) {
        this.ws = new WebSocket(ws_relay)

        if (this.ws == undefined) {return}
        this.ws.addEventListener("open", () => {
            if (this.ws == undefined) {return}
            this.ws.send("IwantLogin")
            this.ws.send("HELO")
        })
    }

    public subscribe(callback: (ws_status: number, data: block | undefined) => void) {
        if (this.ws == undefined) {return}

        if (this.ws.readyState == this.ws.CLOSED) {
            callback(3, undefined)
            return
        }

        if (this.ws.readyState == this.ws.CONNECTING) {
            callback(0, undefined)
            return
        }

        if (this.ws.readyState == this.ws.CLOSING) {
            callback(2, undefined)
            return
        }

        this.ws.addEventListener("message", (event: WebSocket.MessageEvent) => {
            callback(1, JSON.parse(String(event.data)) as block)
        })
    }
}