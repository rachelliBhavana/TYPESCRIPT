/*
Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89
*/
function maxi(no1:number,no2:number,no3:number):number
{
    if(no1>no2)
    {
        return no1;
    }
    else if(no2>no3)
    {
        return no2;
    }
    else
    {
        return no3;
    }
}
var i:number=23;
var j:number=89;
var k:number=6;
var ret:number=0;
ret=maxi(i,j,k);
console.log("maximum number is: ",ret);