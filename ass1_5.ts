/*
Write a typescript program which contains one function named as Fibonacci. That function accept 
one number from user and print Fibonacci series till that number. 
Input : 21 
Output : 1 1 2 3 5 8 13 2
*/
function Fibonacci(iNo:number)
{
    var t1:number=0
    var t2:number=1
    console.log(t1,t2)
    for(var t:number=1;t<iNo;)
    {
        console.log(t=t1+t2)
        t1=t2
        t2=t
    }
}

Fibonacci(21)