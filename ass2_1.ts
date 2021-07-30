/*
Write a typescript program which contains one function named as Maximum. That function accepts 
array of numbers and returns the largest number from array. 
Input : 23 89 6 29 56 45 77 32 
Output : Maximum number is 89
*/
function Maxi(...arr:number[]):number
{
    var iMax:number=arr[0]

    for(var i:number=0;i<arr.length;i++)
    {
        if(arr[i]>iMax)
        {
            iMax=arr[i]
        }
    }

    return iMax
}

var iret:number
iret=Maxi(23,89,6,29,56,45,77,32)
console.log("Maximum number is :",iret)