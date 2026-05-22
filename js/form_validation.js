
  
 function validateForm()  {
 
    var myform = document.getElementById("form"); 
     
//alert pops-up if the name field is empty 
     if (myform.name.value =="") {
   
     alert("Fill your name. Your name field is empty");
     myform.name.focus();
     return false; 
     }  
	  
//alert pops-up if the box for the email ID is empty	  
if (myform.email.value == "") {
	 
   alert("Please enter your email ID.");
  myform.email.focus();
 return  false;
 }
  //alert pops-up if there is no selection in the dropdown box	  
if (myform.message.value == "") {
	 
   alert("Please select your interest.");
  myform.interest.focus();
 return  false;
 }
 else { 
  alert("Submiitted your info. successfuly. We will get back to you soon");
}

}

 



 function validateNewsletterForm()  {
 
    var myform = document.getElementById("newsletterform"); 
     
//alert pops-up if the name field is empty 
     if (myform.newname.value =="") {
   
     alert("Fill your name. Your name field is empty");
     myform.newname.focus();
     return false; 
     }  
	  
//alert pops-up if the box for the email ID is empty	  
if (myform.newemail.value == "") {
	 
   alert("Please enter your email ID.");
  myform.newemail.focus();
 return  false;
 }
 //alert pops-up if there is no selection in the dropdown box	  
if (myform.interest.value == "") {
	 
   alert("Please select your interest.");
  myform.interest.focus();
 return  false;
 }
 else { 
  alert("Subscribed to Newsletter successfully."); 
}
 }



 

