function billingFunction(){
	var a=document.getElementById('shippingName').value;
	var b=document.getElementById('shippingZip').value;
	if(document.getElementById('same').checked){
		document.getElementById('billingName').value=a;
		document.getElementById('billingZip').value=b;
	}
	else{
		document.getElementById('billingName').value="";
		document.getElementById('billingZip').value="";
	}

}