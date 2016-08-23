function apply()
{ 
	var element = document.getElementById("logButton");
	element.innerHTML="Toggle autoclick";
	element.onclick=clickme;
}

function pcInit() {
	window.loadInterval = setInterval(function()
	{
		if (Game && Game.isReady)
		{
			clearInterval(window.loadInterval);
			apply();
		}
	}, 1000);
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