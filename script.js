let result_value = "";
let history_value = "";
let inNum = (number) => {
    result_value = result_value + number;
    document.getElementById('result_value').innerHTML = result_value;
}
let clearV = () => {
    result_value = "";
    history_value = "";
    // console.log("hello");
    document.getElementById('result_value').innerHTML = result_value;
    document.getElementById('history_value').innerHTML = history_value;
}
let backspaceV = () => {
    // result_value = "";
    result_value = result_value.substring(0, result_value.length - 1);
    document.getElementById('result_value').innerHTML = result_value;
}
let inop = (oper) => {
    if (history_value === '') {
        if (oper !== '-') {
            return;
        }
    } else {
        if (result_value === '') return;
    }
    history_value = history_value + result_value + oper;
    result_value = '';
    document.getElementById('history_value').innerHTML = history_value;
    document.getElementById('result_value').innerHTML = result_value;
}
let isOp = (oper)=>{
    if (oper ==='-'|| oper ==='/'|| oper ==='+'|| oper ==='*'|| oper ==='%'){
        return true;
    }
}
let equal = () => {
    if (history_value === '') {
        console.log("hello");

    } else {
        let history_value_new = history_value.split('');
        let new_history_value = [];
        for (let i = 0; i < history_value.length; i++) {
            // console.log(history_value_new[i]);
            if (isOp(history_value_new[i])){
                console.log("oper");
                new_history_value.push(history_value_new[i]);
            } else{
                console.log("not an operator");
                let num = history_value_new[i];
                for (let j = i+1; j< history_value_new.length;j++){
                    if(isOp(history_value_new[j])){
                        i=j-1;
                        console.log(num);
                        new_history_value.push(num);
                        break;
                    }else{
                        num = num + history_value_new[j];
                    }
                }
            }
        }
        console.log(new_history_value);
    }
}