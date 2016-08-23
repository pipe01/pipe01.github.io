var PipedCookies = { }

function pcInit() {
	PipedCookies.logButton = document.getElementById("logButton");
	PipedCookies.logButton.innerHTML="Autoclick off";
	PipedCookies.logButton.onclick=clickme;
}

function clickme()
{
	console.log("Click log!");
	/*Game.ShowMenu();
	if (window.autoClick == true) {
		PipedCookies.logButton.innerHTML="Autoclick off";
		window.autoClick = false;
		clearInterval(window.clickInterval);
	} else {
		PipedCookies.logButton.innerHTML="Autoclick on";
		window.autoClick = true;
		window.clickInterval = setInterval(Game.ClickCookie, 0);
	}*/
	if (!PipedCookies.inMenu)
	{
		Game.UpdateMenu();
		PipedCookies.updateMenu = Game.UpdateMenu;
		Game.UpdateMenu = function() {};

		var menuElement = document.getElementById("menu");
		var titleElement = document.getElementById("section");

		titleElement.innerHTML = "Piped Cookies";
	} else {
		Game.UpdateMenu = PipedCookies.updateMenu;
		Game.ShowMenu();
	}
}
