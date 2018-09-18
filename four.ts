function addPower(pow:any){
    return function(targetclass:any){
        return class{
            title = new targetclass().title;
            power = pow.power;
            city = pow.city;
        }
    }
};
@addPower({
    power : 7,
    city : "Gotham"
})
class Hero{
    title = "Batman"
};

let ch = new Hero();
console.log(ch.title, ch.power, ch.city);// Batman