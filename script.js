var equation="" /* equation pour stocker l'equation*/ 
var number ="" /* pour stocker le numero*/
var r=0 /* r pour entrer un nouveau num apres l'operation*/
var retype = 0 /*pour ne pas retaper une operation 2 fois*/
function insert(numero){
    if(numero != '+' && numero != '-' && numero != '*' && numero != '/') {
        if (r!=1){
            number = document.getElementById('result').value + numero;
            document.getElementById('result').value = number
        }
        else{
            document.getElementById('result').value = ""
            number = ""
            number = document.getElementById('result').value + numero;
            document.getElementById('result').value = number
            r = 0
            retype = 0
        }  
    }
    else if (retype == 0){
        equation = equation + number
        equal()
        equation = equation + numero
        r = 1
        retype = 1
        number = ""
    }
}

function pequal(){
    equation = equation + number;
    equal();
    number = ""
}

function equal(){
    var res = document.getElementById('result').value
    if(res){
        document.getElementById('result').value = eval(equation);
        number = document.getElementById('result').value
        equation = number
        retype = 0
    }else{
        document.getElementById('result').value = ""
    }
}

function reset(){
    document.getElementById('result').value = ""
    equation = ""
    number = ""
}

function back(){
    var res = document.getElementById('result').value
    if(res){
        document.getElementById('result').value = res.substring(0, res.length-1)
    }
}