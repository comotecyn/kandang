var go_current     	= window.location.href;
    var reff     	= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

var direct_link_ads = rChoice([
                            "https://www.trustedgatetocontent.com/ymkq6d6p?key=187493c8159e3934f28c7782b0f1cf04",
	                     "https://www.alternativecpmgate.com/ngh2cvkhb?key=9683e840a0262076b63c10278137e779",
                        ]);

    var ars             = rChoice([
                            "https://cuteabis.com",
                            "https://besuch.potensilokal.com",
                        ]);


    var dir_type        = "arsae"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }
