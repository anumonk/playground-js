function Animal(movement) {
	this.movement = movement;
};

Animal.prototype.move = function() {
	console.log('I move by...' + this.movement);
};

Animal.prototype.type = function() {
	console.log("All i know is that i am some type of animal");
}

function Dog(movement, breed) {
	Animal.apply(this, arguments);
	this.breed = breed;
}

Dog.prototype = new Animal();

Dog.prototype.type = function() {
	console.log("I'm a dog...more specifically, i'm a" + this.breed);
}

