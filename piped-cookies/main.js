var PipedCookies = { }

function pcInit() {
	PipedCookies.logButton = document.getElementById("logButton");
	PipedCookies.logButton.innerHTML="Autoclick off";
	PipedCookies.logButton.onclick=clickme;
}

function clickme()
{
	console.log("Click log!");
	if (Game.onMenu != "pcCookies")
	{
		Game.onMenu = "pcCookies";
		Game.oldUpdateMenu = Game.UpdateMenu;
		pcMenu();	
	} else if (Game.onMenu == "pcCookies") {
		Game.onMenu = "";
	}
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
	Game.UpdateMenu = function()
	{
		clearMenu();
		var menu = document.getElementById("menu");
		
		var title = document.createElement("div");
		title.setAttribute("class", "section");
		title.innerHTML = "Piped Cookies";
		menu.appendChild(title);
		
		var subsection = document.createElement("div");
		subsection.setAttribute("class", "subsection");
		addListing(subsection, "hola", "como estas?", "test");
		
	}
	console.log("menu :D");
}

function test()
{
	console.log("Sdfhdfh");
}

function addListing(subsection, text, desc, onclick)
{
	/*var html = subsection.innerHTML;
	html += "<div class='listing'>"
	html += "<a class='option' onclick='" + onclick + "'>"
	html += text;
	html += "</a>";
	html += "<label>" + desc + "</desc>";*/
	
	var element = document.createElement("a");
	element.setAttribute("class", "option");
	element.setAttribute("onclick", onclick);
	element.innerHTML = text;
	subsection.appendChild(element);
	
	var element1 = document.createElement("label");
	element1.innerHTML = desc;
	subsection.appendChild(element1);
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
