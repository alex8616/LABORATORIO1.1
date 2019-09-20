function longestDigitsPrefix(str1)
{
	l = str1.length;
	var fin =1;
	var r = null;
	entero = 0;
	for (null;fin<=l;fin++)
	{
		try
		{
			r = parseInt(str1.substring(0,fin));
		}
		catch
		{
			fin--;
			r parseInt(str1.substring(0,fin));
			entero = 1;
			break;
		}

	}
	return r
}
console.log(longestDigitsPrefix("1348basd sds"));