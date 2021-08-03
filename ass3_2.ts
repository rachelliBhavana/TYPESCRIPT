/*
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
class Cricle
{
    Radius:number;
    pi:number;
    ans:number;

    constructor(x:number)
    {
        this.Radius=x;
        this.pi=3.14;
        this.ans=0;
    }
    Area():number
    {
        this.ans=this.pi*this.Radius*this.Radius;
        return this.ans;
    }
}

var iret : number = 0;
var obj1 = new Cricle(7);
var obj2 = new Cricle(3);

iret = obj1.Area();
console.log("Area of onj1 is :",iret);
iret = obj2.Area();
console.log("Area of obj2 is : ",iret);
