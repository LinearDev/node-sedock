import fetch from "node-fetch"
import { block, tx } from "./types"

export class Eth {
    private url: string = ""

    constructor (_url: string) {
        this.url = _url
    }

    public async sendTransaction(device: string, user: string, data: string): Promise<tx> {
        const req = await fetch(this.url, {
            method: "POST",
            body: {
                "method": "sendTransaction",
                "params": {
                    "device_id": device,
                    "user_id": user,
                    "data": data
                }
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        const res = await req.json()
        return res as tx
    }

    public async getBlockNumber(device: string): Promise<number> {
        const req = await fetch(this.url, {
            method: "POST",
            body: {
                "method": "getBlockNumber",
                "params": {
                    "deviceId": device,
                }
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        const res = await req.json()
        return res as number
    }

    public async getBlock(blockNumber: string, device: string): Promise<block> {
        const req = await fetch(this.url, {
            method: "POST",
            body: {
                "method": "getBlock",
                "params": {
                    "block": blockNumber,
                    "deviceId": device
                }
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        const res = await req.json()
        return res as block
    }
}