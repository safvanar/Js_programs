function findNPrimes(n){
    const primes=[2,3]
    let count=2
    let candidate=4
    while(count!==n){
        let flag=0
        for(let i=2;i<Math.floor(Math.sqrt(candidate))+1;i++){
            if(candidate%i===0){
                flag=1
                break
            }
        }
        if(flag!==1){
            primes.push(candidate)
            count+=1
        }
        candidate+=1
    }
    return primes
}

const n=parseInt(prompt("Enter the number prime numbers to print: "))
const output=findNPrimes(n)
res=''
for(let i=0;i<n;i++){
    res+=output[i]+' '
}
console.log(res)