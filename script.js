var numero = document.getElementById("num");
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");
var num0 = document.getElementById("0");
var num_point = document.getElementById(".");
var num_plus = document.getElementById("+");
var num_minus = document.getElementById("-");
var num_multiply = document.getElementById("*");
var num_devide = document.getElementById("/");
var num_CE = document.getElementById("CE");
var num_sum = document.getElementById("=");

numero.addEventListener("input", affiche);
num1.addEventListener("click", affich1);
num2.addEventListener("click", affich2);
num3.addEventListener("click", affich3);
num4.addEventListener("click", affich4);
num5.addEventListener("click", affich5);
num6.addEventListener("click", affich6);
num7.addEventListener("click", affich7);
num8.addEventListener("click", affich8);
num9.addEventListener("click", affich9);
num0.addEventListener("click", affich0);
num_CE.addEventListener("click", affich_CE);
num_point.addEventListener("click", affich_point);
num_plus.addEventListener("click", add);
num_minus.addEventListener("click", sous);
num_multiply.addEventListener("click", mult);
num_devide.addEventListener("click", dev);
num_sum.addEventListener("click", result);
var test =1,a=0,b=0,d=0,c;
function affiche(){
    if (test != 1){
        numero.value = numero.value;
    }
    else {
        numero.value = "";
        numero.value = numero.value;
        test = 0;
    }
    
}
function affich1(){
    if (test != 1){
        numero.value = numero.value + 1;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 1;
        test = 0;
        ec=1;
    }
}
function affich2(){
    if (test != 1){
        numero.value = numero.value + 2;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 2;
        test = 0;
        ec=1;
    }
}

function affich3(){
    if (test != 1){
        numero.value = numero.value + 3;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 3;
        test = 0;
        ec=1;
    }
}

function affich4(){
    if (test != 1){
        numero.value = numero.value + 4;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 4;
        test = 0;
        ec=1;
    }
}

function affich5(){
    if (test != 1){
        numero.value = numero.value + 5;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 5;
        test = 0;
        ec=1;
    }
}

function affich6(){
    if (test != 1){
        numero.value = numero.value + 6;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 6;
        test = 0;
        ec=1;
    }
}

function affich7(){
    if (test != 1){
        numero.value = numero.value + 7;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 7;
        test = 0;
        ec=1;
    }
}

function affich8(){
    if (test != 1){
        numero.value = numero.value + 8;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 8;
        test = 0;
        ec=1;
    }
}

function affich9(){
    if (test != 1){
        numero.value = numero.value + 9;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 9;
        test = 0;
        ec=1;
    }
}

function affich0(){
    if (test != 1){
        numero.value = numero.value + 0;
    }
    else {
        numero.value = "";
        numero.value = numero.value + 0;
        test = 0;
        ec=1;
    }
}

function affich_point(){
    if (test != 1){
        if (numero.value != ""){
            numero.value = num.value+".";
        }
    }
    else {
        numero.value = "";
        if (numero.value != ""){
            numero.value = num.value+".";
        }
        test = 0;
        ec=1;
    }
}

function affich_CE(){
    numero.value = "";
    a=b=d=0;
    ec=1;
    test=1

}

function add() {
    if (numero.value != "" && ec == 1){
        a = parseFloat(numero.value);
        c =1;
        test = 1
        ec = 0
    }
}

function sous() {
    if (numero.value != "" && ec == 1){
        a = parseFloat(numero.value);
        c =2;
        test = 1
        ec = 0
    }
    else {
        numero.value = "-"
        test = 0
    }
}

function mult() {
    if (numero.value != "" && ec == 1){
        a = parseFloat(numero.value);
        c =3;
        test = 1
        ec = 0
    }
}
function dev() {
    if (numero.value != "" && ec == 1){
        a = parseFloat(numero.value);
        c =4;
        test = 1
        ec = 0
    }
}

function result() {
    if (c == 1) {
        if (numero.value != "" && ec == 1) {
            b = parseFloat(numero.value);
            numero.value = a+b
            test = 1;
            ec=0
            c=0
        }
    }
    else if (c == 2) {
        if (numero.value != "" && ec == 1) {
            b = parseFloat(numero.value);
            numero.value = (a-b)
            test = 1;
            ec=0
            c=0
        }
    }
    else if (c == 3) {
        if (numero.value != "" && ec == 1) {
            b = parseFloat(numero.value);
            numero.value = (a*b)
            test = 1;
            ec=0
            c=0
        }
    }
    else if (c == 4) {
        if (numero.value != "" && ec == 1) {
            b = parseFloat(numero.value);
            numero.value = (a/b)
            test = 1;
            ec=0
            c=0
        }
    }
    else{
        b = parseFloat(numero.value);
        numero.value = (b)
        test = 1;
        ec=0
        c=0
    }
}