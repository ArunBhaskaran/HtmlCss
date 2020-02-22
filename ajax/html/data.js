var xhr=new XMLHttpRequest();
xhr.open('GET','data1.html');
 xhr.send();
xhr.onload=function()
{
 if(xhr.status==200)
 {
     document.getElementById('content').innerHTML=xhr.responseText;
 }
 
}