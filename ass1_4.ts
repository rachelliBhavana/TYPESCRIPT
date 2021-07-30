/*
Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number
*/ 
function CheckPrime(iNo:number):Boolean
{
    for(var i:number=2;i<iNo;i++)
    {
        if(iNo%i==0)
        {
            break

        }
    }

    if(i==iNo)
    {
        return true
    }
    else
    {
        return false
    }
}

var iRet:Boolean
iRet=CheckPrime(11)
if(iRet==true)
{
    console.log(iRet)
}
else
{
    console.log(iRet)
}