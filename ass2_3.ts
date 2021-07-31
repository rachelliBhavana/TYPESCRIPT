function SecondMaximum(...arr:number[]):number
{
    var iMax:number=arr[0]
    var sMax:number=arr[0]

    for(var i:number=0;i<arr.length;i++)
    {
        if(arr[i]>iMax)
        {
            iMax=arr[i]
        }

        if((arr[i]<iMax)&&(arr[i]>sMax))
        {
            sMax=arr[i]
        }

    }

    return sMax
}

var iRet:number
iRet=SecondMaximum(23,89,6,29,56,45,77,32)
console.log("SecondMaximum number is :",iRet)