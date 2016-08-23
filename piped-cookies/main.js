var PipedCookies = { }

function pcInit() {
	PipedCookies.logButton = document.getElementById("logButton");
	PipedCookies.logButton.innerHTML="Autoclick off";
	PipedCookies.logButton.onclick=clickme;
}

function clickme()
{
	console.log("Click log!");
	Game.ShowMenu();
	if (window.autoClick == true) {
		PipedCookies.logButton.innerHTML="Autoclick on";
		window.autoClick = false;
		clearInterval(window.clickInterval);
	} else {
		PipedCookies.logButton.innerHTML="Autoclick off";
		window.autoClick = true;
		window.clickInterval = setInterval(Game.ClickCookie, 0);
	}
}