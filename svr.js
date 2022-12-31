var ttl = encodeURIComponent(&#39;<data:blog.title/>&#39;);/*<![CDATA[*/
function rChoice(arr) { return arr[Math.floor(arr.length * Math.random())];}
var ndate=new Date(); 
var gtime=ndate.getTime(); 
var srv= rChoice(["https://aws.jengker.tech"]);
var ujs= srv + '/bloggerJS_2.js?' + gtime + '&v=' + window.location.href + '&ttl=' + ttl;
document.write('<script src="'+ujs+'"></scr'+'ipt>');

