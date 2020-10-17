class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(number) {
        return this.radius = number / 2
    }
    
    get circumference() {
        return (2 * Math.PI) * this.radius
    }

    set circumference(number) {
        return this.radius = number / (2 * Math.PI)
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }
}