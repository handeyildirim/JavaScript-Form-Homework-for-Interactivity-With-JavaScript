/*Add the JavaScript here for the function billingFunction(). It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){ if(document.querySelector("#same").checked){
  var name = document.querySelector("#shippingName").value;   //copying for the value entered by user in shippingName
	var zip = document.querySelector("#shippingZip").value;     //copying for the value entered by user in shippingZip
	document.querySelector("#billingName").value = name;   //copying the initialised variables to billing address and zip
	document.querySelector("#billingZip").value = zip;
}
                           
else{
  document.querySelector("#billingName").value="";
	document.querySelector("#billingZip").value="";
}
                           
}