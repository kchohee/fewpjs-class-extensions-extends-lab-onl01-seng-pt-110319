// Your code here
class Polygon{
    constructor(array){
        this.parameter = array
    }

    get countSides(){
        return this.parameter.length
    }
    get perimeter(){
        let perimeter = 0;
        for (let side of this.parameter) {
            perimeter += side;
        }
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid(){
        return (this.parameter[0] + this.parameter[1] > this.parameter[2]) && (this.parameter[1] + this.parameter[2] > this.parameter[0]) && (this.parameter[0] + this.parameter[2] > this.parameter[1]);
    }
}
class Square extends Polygon {
    get isValid(){
        return ((this.parameter[0] === this.parameter[1]) && (this.parameter[0] === this.parameter[2]) && (this.parameter[0] === this.parameter[3]));
    }
    get area(){
        return this.parameter[0] * this.parameter[0];
    }
}