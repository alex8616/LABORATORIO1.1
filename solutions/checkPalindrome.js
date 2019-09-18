function palindro(str){
      for ( i = 0; i < str.length ; i++) {
          if(str.charAt(i) !== str.charAt(str.length-1-i)){
            return false;
          }
      }
        return true;
}
      console.log(palindro("abba"));
