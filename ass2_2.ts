function Sumation(...arr:number[]):number
{
    var iSum:number=0

    for(var i:number=0;i<arr.length;i++)
    {
        iSum=iSum+arr[i]
    }

    return iSum
}

var iRet:number
iRet=Sumation(23,6,7,4,5,7)
console.log("Addition is :",iRet)