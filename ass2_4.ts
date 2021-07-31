
var ChkAmst=(iNo)=>{

    var iNo2:number=iNo
    var iNo3:number=iNo
    var iCnt:number=0
    var iDigit:number=0
    var iSum:number=1
    var iSum2:number=0
    while(iNo>0)
    {
        iCnt++
        iNo=(iNo/10)
        iNo=Math.floor(iNo);
        
    }

    while(iNo2>0)
    {
        iDigit = Math.floor(iNo2%10)
        iSum=1
        for(var i=1;i<=iCnt;i++)
        {
            iSum=iSum*iDigit;
        }  
        iSum2=iSum2+iSum
        iNo2=Math.floor(iNo2/10)
    }
    
    if(iSum2==iNo3)
    {
        return true
    }
    else
    {
        return false
    }
}

var iRet:boolean
iRet=ChkAmst(1634)
if(iRet==true)
{
    console.log(true)
}
else
{
    console.log(false)
}