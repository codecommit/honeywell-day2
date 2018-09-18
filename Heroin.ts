export class Heroin{
    fname:string;
    lname:string;
    city:string;
    constructor(fn:string, ln:string, city:string){
        this.fname = fn;
        this.lname = ln;
        this.city = city;
    }
    fullname():string{
        return this.fname+" "+this.lname
    }
}