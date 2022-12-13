class Box {
    constructor (x, y, w, l, fins){
        this.x=x
        this.y=y
        this.w=w
        this.l=l
        this.fins=fins
    }
    display(){
        rect(this.x, this.y, this.w, this.l)
    } 
    fish (){
        this.y = this.y + this.fins
    }
}