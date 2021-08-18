import { mobile } from "./mobile"

export class MobileLibrary
{
    private name:string
    private location:string
    private mobiles: mobile[]
    private totalprice: number

    constructor(name:string, location:string, mobiles:mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalprice = this.totalPriceCalculation()
    }

    getName():string
    {return this.name}
    setName(name:string)
    {this.name = name}

    getLocation():string
    {return this.location}
    setLocation(location:string)
    {this.location = location}

    getMobiles():mobile[]
    {return this.mobiles}
    setMobiles(mobiles:mobile[])
    {this.mobiles = mobiles}

    getTotalPrice():number
    {return this.totalprice}
    setTotalPrice(totalprice:number)
    {this.totalprice = totalprice}

    private totalPriceCalculation():number
    {   let sumatoria:number = 0
        for (let index = 0; index < this.mobiles.length; index++) {
        sumatoria += this.mobiles[index].getPrice()}
        return sumatoria;
    }

    printLibrary()
    {
        console.log(`This is all my mobiles:`);
        for (let index = 0; index < this.mobiles.length; index++) {
            this.mobiles[index].printAll()
        }
    }
}