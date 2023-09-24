function sharpees(n){
    let num=10
    let count=0
    let res=[]
    while(count!=n){
        let temp=num
        let flag=0
        while(temp>9){
            if(Math.abs(temp%10-(Math.floor(temp/10))%10)!==1){
                flag=1
                break
            }
            temp=Math.floor(temp/10)
        }
        if(flag!=1){
            res.push(num)
            count+=1
        }
        num=num+1
    }
    return res
}
const output=sharpees(10)
console.log(output)