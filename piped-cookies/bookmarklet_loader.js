javascript:{
  	var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', 'http://pipe01.github.io/piped-cookies/main.js');
    document.head.appendChild(js);

    var jquery = document.createElement('script');
  	jquery.setAttribute('type', 'text/javascript');
  	jquery.setAttribute('src', 'https://code.jquery.com/jquery-3.1.0.min.js');
  	jquery.onload = function() {pcInit();};
	document.head.appendChild(jquery);
}