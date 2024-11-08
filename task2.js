// WAP to print numbers from  from -1 to -num without using >= operator

num=prompt("enter a number")
for(i=-1;!(i<=num);i--){
    console.log(i)
}

//WAP to print numbers from -num(input) -1 without using <= operator
 num=prompt("enter a number")
 for(i=num;!(i>=0);i++){
    console.log(i)
 }
//WAP to print sum of even digits in a number
//input:1287
//output:sum is 10
num=prompt("enter a number")
sum=0
if(num>0){
for(i=1;i<num.length;i++)
    if(num[i]%2==0)
        sum=sum+Number(num[i])
 }
 console.log(sum)
//WAP to print sum of odd digits in a number
//input:enter a number:1811
//ouput:sum is 3
num=prompt("enter a number")
 sum=0
 if(num>0){
 for(i=0;i<num.length;i++)
   if(!(num[i]%2==0))
         sum=sum+Number(num[i])
}
console.log(sum)

