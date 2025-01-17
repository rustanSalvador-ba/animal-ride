nameServer="pizzariadobaiano.com.br";


function atualiza2(){

  var data = $('#form1').serialize();
    
    $.ajax({
      type : 'POST',
      url  : 'https://'+nameServer+'/novoPedido.php',
      data : data,
      dataType: 'json',
      beforeSend: function()
      { 
        $("#menssagem").html('Buscando...');
      },
      success :  function(response){
 //alert(response.length);  

if(response!=null){


 if(response[0].codigo == "2"){ 

          
 
for (i = 0; i < response.length; i++) {
  //mostrou=0;
//countPedido=$("#countPedido").val();
//countPedido++;
var color="red";

if(response[i].status=="Confirmado"){
  // color="green";

}
else{
if(response[i].status=="Aguardando"){  

  //tocaSirene();
// color="red";
alert("Novo Pedido");
 window.location.href="principal.html";
}
 //openPedido(countPedido);
}

//alert(response[i].status);


if(response[i].status=="Despachado"){
  // color="blue";

}


}//for




}


}



 
}

});
}


setInterval("atualiza2()",8000);
