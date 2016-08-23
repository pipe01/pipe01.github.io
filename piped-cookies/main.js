function apply()
{ 
	var element = document.getElementById("logButton");
	element.innerHTML="Toggle autoclick";
	element.onclick=clickme;
}

function pcInit() {
  var jquery = document.createElement('script');
  jquery.setAttribute('type', 'text/javascript');
  jquery.setAttribute('src', 'https://code.jquery.com/jquery-3.1.0.min.js');
  jquery.onload = function() {apply();};
  document.head.appendChild(jquery);
}

function clickme()
{
	console.log("Click log!");
	Game.ShowMenu();
	if (window.autoClick == true) {
		window.autoClick = false;
		clearInterval(window.clickInterval);
	} else {
		window.autoClick = true;
		window.clickInterval = setInterval(Game.ClickCookie, 0);
	}
}

window.loadInterval = setInterval(function()
{
	if (Game && Game.isReady)
	{
		clearInterval(window.loadInterval);
		pcInit();
	}
}, 1000);