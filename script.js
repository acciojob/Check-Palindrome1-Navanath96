// complete the given function

function palindrome(str){
for(let i=0; i<str.length; i++){
	for(let j=str.length-1; j>=0; j--){
		if(arr[i]==arr[j]){
			j++;
			i++;
		}
		else{
			return false;
		}
	}
}
	return true;
}
module.exports = palindrome
