function divide( ino1:number, ino2:number)
{
    var ans:number=0
    if(ino2==0)
    {
        return -1;
    }
    ans=ino1/ino2;
    return ans;
}
var ivalue1=15,ivalue2=5;
var iret =0;
iret=divide(ivalue1,ivalue2);
console.log("Division is : ",iret);

