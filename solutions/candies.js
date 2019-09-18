function candies(n,m){
        a=0;
        b=0;
     a=parseInt(m/n);
     b=parseInt(a*n);
    return parseInt (b);

}
console.log(candies(3,10));
