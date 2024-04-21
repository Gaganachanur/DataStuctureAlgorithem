let Car = function(model){
this.model =model;
}

Car.prototype.getDetails = function(){
    return this.model;
}

let muscle = new Car('audi')
console.log(muscle.getDetails());

let dorgedemon = new Car('benz')
console.log(dorgedemon.getDetails());