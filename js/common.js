window.onload=function()
{
 var shade=document.getElementById("shade");
 var shadedownload=document.getElementById("shadedownload");
 var bt=document.getElementById("down");
 var btclose=document.getElementById("btclose");
 
 bt.onclick=function()
 {
  shade.style.display="block";
  shadedownload.style.display="block";
 }
 btclose.onclick=function()
 {
  shade.style.display="none";
  shadedownload.style.display="none"; 
 }
}

function menuClick(srcname,btname)
 {
	var srcshade=document.getElementById(srcname);
	var closebt=document.getElementById(btname);
	shade.style.display="block";
	srcshade.style.display="block";
	closebt.onclick=function()
	 {
	  shade.style.display="none";
	  srcshade.style.display="none"; 
	 }
 }