function Animal($viewpoint, movement) {
	this.movement = movement || "moving around like an animal";
	this.$viewpoint = $viewpoint;
};

Animal.prototype.move = function() {
	this.communicate("I move by..." + this.movement);
};

Animal.prototype.communicate = function(line) {

	this.$viewpoint.append("<span>" + line + "</span>");

}

Animal.prototype.type = function() {
	this.communicate("All i know is that i am some type of animal..");
}

function Dog($viewpoint, breed) {
	this.breed = breed;
	var movement = "leaping around at quite a remarkable speed";
	arguments[1] = movement;
	Animal.apply(this, arguments);

}

//Hook up the prototype chain
Dog.prototype = new Animal();

Dog.prototype.type = function() {
	this.communicate("I'm a dog...more specifically, i'm a " + this.breed);
}

