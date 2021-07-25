/*
Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10
*/
function DisplayFactors(no:number)
{
    for(var i:number=0;i<no;i++)
    {
        if(no%i==0)
        {
            console.log(i);
        }
    }
}
var val:number =20
DisplayFactors(val);