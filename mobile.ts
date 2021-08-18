export class mobile
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor (name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameranumber:number, price:number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameranumber;
        this.price = price;
    }

    getName(): string
    {return this.name}
    setName(name:string)
    {this.name = name;}

    getModel(): string
    {return this.model}
    setModel(model:string)
    {this.model = model}

    getTrademark(): string
    {return this.trademark}
    setTrademark(trademark:string)
    {this.trademark = trademark}

    getSDSize(): number
    {return this.sdSize}
    setSDSize(SDSize:number)
    {this.sdSize = SDSize}

    getColor(): string
    {return this.color}
    setColor(color:string)
    {this.color = color}

    getIs5g(): boolean
    {return this.is5G}
    setIs5G(is5g:boolean)
    {this.is5G = is5g}

    getCameraNumber(): number
    {return this.cameraNumber}
    setCameraNumber(cameranumber:number)
    {this.cameraNumber = cameranumber}

    getPrice():number
    {return this.price}
    setPrice(price:number)
    {this.price = price}

    printAll()
    {
        console.log(`The characteristics of the mobile ${this.name} are:
        Name : ${this.name}
        Model: ${this.model}
        Trademark : ${this.trademark}
        SD Size (GB) : ${this.sdSize}
        Color: ${this.color}
        Is 5G?: ${this.is5G}
        Number of Cameras: ${this.cameraNumber}`);
    }
}
