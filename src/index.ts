import { Eth } from "./eth";
import { Ws } from "./ws";

export class Sedock {
    private url: string = ""
    
    public ws = new Ws()
    public eth = new Eth(this.url)

    constructor (_url: string) {
        if (!_url.length) {
            console.error("Sedock: [ERROR] Relay URL not passed in constructor")
        }
        this.url = _url
    }
}