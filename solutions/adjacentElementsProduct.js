function inputarray(array)
{
   a=0;
   b=0;
   var conteo = [] ;
  for( i=0; i<array.length-1; i++)
  {
      a =array[i]*array[i+1];
      conteo[i] = a;
  }
  for(j=0; j<conteo.length; j++)
  {
    if(conteo[j]>b)
      b=conteo[j];


  }
  return b;
}
console.log(inputarray([3,6,-2,-5,7,3]));
