function sumar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)+parseFloat(valor2);
    if (valor1==""||valor2==""){
        alert("El campo esta vacio")
     }
else
{resultadoTotal.innerHTML= "El resultado es:" + resultadosuma;}
}
function restar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoresta=parseFloat(valor1)-parseFloat(valor2);
 if (valor1==""||valor2==""){
    alert("El campo esta vacio")
 }
else
{resultadoTotal.innerHTML= "El resultado es:" - resultadoresta;}
}
function multiplicar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadomultiplicacion=parseFloat(valor1)*parseFloat(valor2);
 if (valor1==""||valor2==""){
    alert("El campo esta vacio")
 }
else
{resultadoTotal.innerHTML= "El resultado es:" * resultadomultiplicacion}
}
function dividir(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadodivision=parseFloat(valor1)/parseFloat(valor2);
 if (valor1==""||valor2==""){
    alert("El campo esta vacio")
 }
else
{resultadoTotal.innerHTML= "El resultado es:" / resultadodivision;}
}