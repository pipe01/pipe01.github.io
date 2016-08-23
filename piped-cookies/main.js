var PipedCookies = { }

function pcInit() {
	PipedCookies.logButton = document.getElementById("logButton");
	PipedCookies.logButton.innerHTML="Piped Cookies";
	PipedCookies.logButton.onclick=clickme;
}

function clickme()
{
	console.log("Click log!");

	if (!PipedCookies.inMenu)
	{
		PipedCookies.updateMenu = Game.UpdateMenu;
		Game.UpdateMenu = function() {};

		var menuElement = document.getElementById("menu");
		var titleElement = menuElement.getElementById("section");

		titleElement.innerHTML = "Piped Cookies";
	} else {
		Game.UpdateMenu = PipedCookies.updateMenu;
		Game.ShowMenu();
	}
}