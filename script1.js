let result_value = "";
let history_value = "";
let inNum = (number)=>{
	result_value = result_value + number;
	document.getElementById('result_value').innerHTML = result_value;
}
let clearV = ()=>{
	result_value = "";
	history_value = "";
	// console.log("hello");
	document.getElementById('result_value').innerHTML = result_value;
	document.getElementById('history_value').innerHTML = history_value;
}
let backspaceV = ()=>{
	// result_value = "";
	result_value = result_value.substring(0, result_value.length - 1);
	document.getElementById('result_value').innerHTML = result_value;
}
let inop = (oper)=>{
	if (history_value == ''){
		if(oper != '-'){
		return;
		}
	}else{
		if (result_value == '') return;
	}
	history_value = history_value+result_value + oper;
	result_value = '';
	document.getElementById('history_value').innerHTML = history_value;
	document.getElementById('result_value').innerHTML = result_value;
}
let equal = ()=>{
	if (history_value == ''){
		console.log("hello");
		return;
	}else{
		history_value.split('');
		for(let i = 0; i < history_value.length; i++){
			document.getElementById('history_value').innerHTML = history_value;
			console.log(i);
			
		}
	}
}