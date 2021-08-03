/*
Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.
*/
class Arithmetic
{
    Number1:number;
    Number2:number;
    Result:number;

    constructor(x:number,y:number)
    {
        this.Number1 = x;
        this.Number2 = y;
        this.Result = 0;
    }
    Addition():number
    {
        this.Result=this.Number1+this.Number2;
        return this.Result
    }
    Substraction():number
    {
        this.Result=this.Number1-this.Number2;
        return this.Result
    }
    Multiplication():number
    {
        this.Result=this.Number1*this.Number2;
        return this.Result
    }
    Division():number
    {
        this.Result=this.Number1/this.Number2;
        return this.Result
    }
}

var iret : number = 0;
var obj1 = new Arithmetic(10,20);
var obj2 = new Arithmetic(10,5);

iret=obj1.Addition();
console.log("Addition of obj1 is : ",iret);
iret = obj2.Addition();
console.log("Addition of obj2 is : ",iret);

iret=obj1.Substraction();
console.log("Substraction of obj1 is : ",iret);
iret = obj2.Substraction();
console.log("Substraction of obj2 is : ",iret);

iret=obj1.Multiplication();
console.log("Multiplication of obj1 is : ",iret);
iret = obj2.Multiplication();
console.log("Multiplication of obj2 is : ",iret);

iret=obj1.Division();
console.log("Division of obj1 is : ",iret);
iret = obj2.Division();
console.log("Division of obj2 is : ",iret);

