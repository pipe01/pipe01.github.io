var PipedCookies = { }

function pcInit() {
	PipedCookies.logButton = document.getElementById("logButton");
	PipedCookies.logButton.innerHTML="Autoclick off";
	PipedCookies.logButton.onclick=clickme;
}

function clickme()
{
	console.log("Click log!");
	Game.onMenu = "pcCookies";
	Game.oldUpdateMenu = Game.UpdateMenu;
	pcMenu();
	/*if (!PipedCookies.inMenu)
	{
		Game.UpdateMenu();
		PipedCookies.updateMenu = Game.UpdateMenu;
		Game.UpdateMenu = function() {console.log("update");};

		var menuElement = document.getElementById("menu");
		var titleElement = document.getElementsByClassName("section");
		titleElement[0].innerHTML = "Piped Cookies";

		for (var i = menuElement.childNodes.length - 1; i >= 0; i--) {
			var element = menuElement.childNodes[i];
			if (element.className != "section")
			{
				menuElement.removeChild(element);
			}
		}
	} else {
		Game.UpdateMenu = PipedCookies.updateMenu;
		Game.ShowMenu();
	}*/
}

function pcMenu()
{
	if (Game.onMenu != "pcCookies")
	{
		return Game.oldUpdateMenu();
	}
	clearMenu();
	Game.updateMenu = function()
	{
		var menu = document.getElementById("menu");
		var title = document.createElement("div");
		title.setAttribute("class", "section");
		title.innerHTML = "Piped Cookies";
		menu.appendChild(title);
	}
	console.log("menu :D");
}

function clearMenu()
{
	var menu = document.getElementById("menu");
	for (var i = menu.childNodes.length - 1; i >= 0; i--) {
		menu.removeChild(menu.childNodes[i]);
	}
}

function clickmeold()
{
	Game.ShowMenu();
	if (window.autoClick == true) {
		PipedCookies.logButton.innerHTML="Autoclick off";
		window.autoClick = false;
		clearInterval(window.clickInterval);
	} else {
		PipedCookies.logButton.innerHTML="Autoclick on";
		window.autoClick = true;
		window.clickInterval = setInterval(Game.ClickCookie, 0);
	}
}
