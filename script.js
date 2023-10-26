//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	get getWidth(){
		return this.width;
	}
	get getHeight(){
		return this.height;
	}
	getArea(){
		return this.height * this.width;
	}
}

class Square extends Rectangle {
	constructor(width, height){
		super(width, height);
		this.width = width;
		this.height = height;
	}
	getPerimeter(){
		return 2 * (this.height + this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
