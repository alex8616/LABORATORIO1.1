function sumadigitos(a){
      var aux=0;
      while (a!=0) {
          aux=parseInt(aux+(a%10));
          a=a/10;
      }
      return parseInt(aux);
}
console.log("addTwoDigits(n) = " + sumadigitos(29));
