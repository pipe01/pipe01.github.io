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
		PipedCookies.menu = 
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
		PipedCookies.menu = document.getElementById("menu");

		var title = document.createElement("div");
		title.setAttribute("class", "section");
		title.innerHTML = "Piped Cookies";
		PipedCookies.menu.appendChild(title);
		
		addTitleSection("Testing");

		var subsection = document.createElement("div");
		subsection.setAttribute("class", "subsection");
		PipedCookies.menu.appendChild(subsection);
		addListingButton(subsection, "hola", "como estas?", "test()");
		
	}
	console.log("menu :D");
}

function test()
{
	console.log("Sdfhdfh");
}

function addTitleSection(text)
{
	var section = document.createElement("div");
	section.setAttribute("class", "title");
	section.innerHTML = text;
	PipedCookies.menu.appendChild(section);
}

function addListingButton(subsection, text, desc, onclick)
{
	var listing = document.createElement("listing");
	subsection.appendChild(listing);
	
	var aelement = document.createElement("a");
	aelement.setAttribute("class", "option");
	aelement.setAttribute("onclick", onclick);
	aelement.innerHTML = text;
	listing.appendChild(aelement);
	
	var labelelement = document.createElement("label");
	labelelement.innerHTML = desc;
	listing.appendChild(labelelement);
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
