var largeur = window.innerWidth;
var hauteur = window.innerHeight;
var leftRightLootcard = 0;
var leftRightLootcardAfter = 0;
var paddingReward = 0;
var paddingRewardAfter = 0;
var cardBottom = 0;
var cardBottomAfter = 0;

if (largeur <= hauteur) {
	document.getElementById("stylesheet").setAttribute("href", "portrait.css");
	leftRightLootcard = "32.5vw";
	leftRightLootcardAfter = "5vw";
	paddingReward = "10vw 0";
	paddingRewardAfter = "0 0 10vw 0";
	cardBottom = "2vw";
	cardBottomAfter = "4vw";
	alert("Si vous souhaitez changer l'orientation de la page, actualisez la page après avoir changé l'orientation de votre appareil")
} else {
	document.getElementById("stylesheet").setAttribute("href", "style.css");
	leftRightLootcard = "15.1vw";
	leftRightLootcardAfter = "2vw"
	paddingReward = "5vw 0";
	paddingRewardAfter = "1.15vw 0 5vw 0";
	cardBottom = "2vw";
	cardBottomAfter = "3vw";
}

var solde = 0;
var displaySolde = solde + "€";
var montant = 0;
var quantite = 1;
var prix = 1;
var displayPrix = prix + "€";
var bundle = 0;
var groupe = 0;
var repeat = 0;
var aleatoire1 = 0;
var aleatoire2 = 0;
var aleatoire3 = 0;
var audio1 = new Audio("audio1.mp3");
var audio2 = new Audio("audio2.mp3");
var audio3 = new Audio("audio3.mp3");
var audio4 = new Audio("audio4.mp3");
var audio5 = new Audio("audio5.mp3");


document.querySelector(".solde").innerHTML = displaySolde;
document.querySelector(".prix1").innerHTML = displayPrix;
document.querySelector(".prix2").innerHTML = displayPrix;
document.querySelector(".prix3").innerHTML = displayPrix;
document.querySelector(".prix4").innerHTML = displayPrix;

setTimeout(floating1, 0)


function floating1(){
	document.querySelector(".c_carte").style.bottom = cardBottomAfter;
	setTimeout(floating2, 1000)
}

function floating2(){
	document.querySelector(".c_carte").style.bottom = cardBottom;
	setTimeout(floating1, 1000)
}

function openRelaodMenu(){
	document.querySelector(".reload_menu").style.top = "0";
	document.querySelector("body").style.overflowY = "hidden";
	audio1.play();
}

function closeRelaodMenu(){
	document.querySelector(".reload_menu").style.top = "-200%";
	document.querySelector("body").style.overflowY = "overlay";
	audio5.play();
}


function get5() {
	montant = 5;
	document.querySelector(".p_montant").innerHTML = montant + "€";
}

function get10() {
	montant = 10;
	document.querySelector(".p_montant").innerHTML = montant + "€";
}

function get20() {
	montant = 20;
	document.querySelector(".p_montant").innerHTML = montant + "€";
}

function get50() {
	montant = 50;
	document.querySelector(".p_montant").innerHTML = montant + "€";
}


function reloading(){
	if (montant == 0) {
		audio5.play();
	}else{
		audio4.play();
		solde = solde + montant;
		displaySolde = solde + "€";
		document.querySelector(".solde").innerHTML = displaySolde;
		setTimeout(closeRelaodMenu, 0)
	}
	
	if (solde == 0) {
		document.querySelector(".recharger").style.display = "block";
	}else{
		document.querySelector(".recharger").style.display = "none";
	}
}


function openFortniteDetails() {
	document.querySelector(".detail_fortnite").style.top = "0%";
	document.querySelector("body").style.overflowY = "hidden";
	audio2.play();
	audio3.play();
}

function closeFortniteDetails() {
	document.querySelector(".detail_fortnite").style.top = "200%";
	document.querySelector("body").style.overflowY = "overlay";
	document.querySelector(".c_manquant1").style.display = "none";
	document.querySelector(".c_rewards1").style.padding = paddingReward;
	audio5.play();
}

function openRocketDetails() {
	document.querySelector(".detail_rocket").style.top = "0%";
	document.querySelector("body").style.overflowY = "hidden";
	audio2.play();
	audio3.play();
}

function closeRocketDetails() {
	document.querySelector(".detail_rocket").style.top = "200%";
	document.querySelector("body").style.overflowY = "overlay";
	document.querySelector(".c_manquant2").style.display = "none";
	document.querySelector(".c_rewards2").style.padding = paddingReward;
	audio5.play();
}


function openHolidayDetails() {
	document.querySelector(".detail_holiday").style.top = "0%";
	document.querySelector("body").style.overflowY = "hidden";
	audio2.play();
	audio3.play();
}

function closeHolidayDetails() {
	document.querySelector(".detail_holiday").style.top = "200%";
	document.querySelector("body").style.overflowY = "overlay";
	document.querySelector(".c_manquant3").style.display = "none";
	document.querySelector(".c_rewards3").style.padding = paddingReward;
	audio5.play();
}

function openTwitchDetails() {
	document.querySelector(".detail_twitch").style.top = "0%";
	document.querySelector("body").style.overflowY = "hidden";
	audio2.play();
	audio3.play();
}

function closeTwitchDetails() {
	document.querySelector(".detail_twitch").style.top = "200%";
	document.querySelector("body").style.overflowY = "overlay";
	document.querySelector(".c_manquant4").style.display = "none";
	document.querySelector(".c_rewards4").style.padding = paddingReward;
	audio5.play();
}


function pack1() {
	document.querySelector(".c_manquant1").style.display = "none";
	document.querySelector(".c_manquant2").style.display = "none";
	document.querySelector(".c_manquant3").style.display = "none";
	document.querySelector(".c_manquant4").style.display = "none";
	
	document.querySelector(".c_rewards1").style.padding = paddingReward;
	document.querySelector(".c_rewards2").style.padding = paddingReward;
	document.querySelector(".c_rewards3").style.padding = paddingReward;
	document.querySelector(".c_rewards4").style.padding = paddingReward;
	
	quantite = 1;
	document.querySelector(".p_quantite1").innerHTML = quantite + " Pack";
	document.querySelector(".p_quantite2").innerHTML = quantite + " Pack";
	document.querySelector(".p_quantite3").innerHTML = quantite + " Pack";
	document.querySelector(".p_quantite4").innerHTML = quantite + " Pack";
	prix = 1;
	displayPrix = prix + "€";
	document.querySelector(".prix1").innerHTML = displayPrix;
	document.querySelector(".prix2").innerHTML = displayPrix;
	document.querySelector(".prix3").innerHTML = displayPrix;
	document.querySelector(".prix4").innerHTML = displayPrix;
	repeat = 1;
}

function pack5() {
	document.querySelector(".c_manquant1").style.display = "none";
	document.querySelector(".c_manquant2").style.display = "none";
	document.querySelector(".c_manquant3").style.display = "none";
	document.querySelector(".c_manquant4").style.display = "none";
	
	document.querySelector(".c_rewards1").style.padding = paddingReward;
	document.querySelector(".c_rewards2").style.padding = paddingReward;
	document.querySelector(".c_rewards3").style.padding = paddingReward;
	document.querySelector(".c_rewards4").style.padding = paddingReward;
	
	quantite = 5;
	document.querySelector(".p_quantite1").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite2").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite3").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite4").innerHTML = quantite + " Packs";
	prix = 4;
	displayPrix = prix + "€";
	document.querySelector(".prix1").innerHTML = displayPrix;
	document.querySelector(".prix2").innerHTML = displayPrix;
	document.querySelector(".prix3").innerHTML = displayPrix;
	document.querySelector(".prix4").innerHTML = displayPrix;
	repeat = 5;
}

function pack10() {
	document.querySelector(".c_manquant1").style.display = "none";
	document.querySelector(".c_manquant2").style.display = "none";
	document.querySelector(".c_manquant3").style.display = "none";
	document.querySelector(".c_manquant4").style.display = "none";
	
	document.querySelector(".c_rewards1").style.padding = paddingReward;
	document.querySelector(".c_rewards2").style.padding = paddingReward;
	document.querySelector(".c_rewards3").style.padding = paddingReward;
	document.querySelector(".c_rewards4").style.padding = paddingReward;
	
	quantite = 10;
	document.querySelector(".p_quantite1").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite2").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite3").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite4").innerHTML = quantite + " Packs";
	prix = 7;
	displayPrix = prix + "€";
	document.querySelector(".prix1").innerHTML = displayPrix;
	document.querySelector(".prix2").innerHTML = displayPrix;
	document.querySelector(".prix3").innerHTML = displayPrix;
	document.querySelector(".prix4").innerHTML = displayPrix;
	repeat = 10;
}

function pack25() {
	document.querySelector(".c_manquant1").style.display = "none";
	document.querySelector(".c_manquant2").style.display = "none";
	document.querySelector(".c_manquant3").style.display = "none";
	document.querySelector(".c_manquant4").style.display = "none";
	
	document.querySelector(".c_rewards1").style.padding = paddingReward;
	document.querySelector(".c_rewards2").style.padding = paddingReward;
	document.querySelector(".c_rewards3").style.padding = paddingReward;
	document.querySelector(".c_rewards4").style.padding = paddingReward;
	
	quantite = 25;
	document.querySelector(".p_quantite1").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite2").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite3").innerHTML = quantite + " Packs";
	document.querySelector(".p_quantite4").innerHTML = quantite + " Packs";
	prix = 17;
	displayPrix = prix + "€";
	document.querySelector(".prix1").innerHTML = displayPrix;
	document.querySelector(".prix2").innerHTML = displayPrix;
	document.querySelector(".prix3").innerHTML = displayPrix;
	document.querySelector(".prix4").innerHTML = displayPrix;
	repeat = 25;
}


function fortnitePay() {
	bundle = "bundleImage1";
	groupe = "fortnite";
	setTimeout(pay, 0)
}

function rocketPay() {
	bundle = "bundleImage2";
	groupe = "rocket";
	setTimeout(pay, 0)
}

function holidayPay() {
	bundle = "bundleImage3";
	groupe = "holiday";
	setTimeout(pay, 0)
}

function twitchPay() {
	bundle = "bundleImage4";
	groupe = "twitch";
	setTimeout(pay, 0)
}


function pay() {
	if (solde - prix < 0) {
		audio5.play();
		document.querySelector(".c_manquant1").style.display = "flex";
		document.querySelector(".c_manquant2").style.display = "flex";
		document.querySelector(".c_manquant3").style.display = "flex";
		document.querySelector(".c_manquant4").style.display = "flex";

		document.querySelector(".c_rewards1").style.padding = paddingRewardAfter;
		document.querySelector(".c_rewards2").style.padding = paddingRewardAfter;
		document.querySelector(".c_rewards3").style.padding = paddingRewardAfter;
		document.querySelector(".c_rewards4").style.padding = paddingRewardAfter;
	}else{
		audio1.play();
		solde = solde - prix;
		displaySolde = solde + "€";
		document.querySelector(".solde").innerHTML = displaySolde;
		setTimeout(closeFortniteDetails, 0)
		setTimeout(closeRocketDetails, 0)
		setTimeout(closeHolidayDetails, 0)
		setTimeout(closeTwitchDetails, 0)
		setTimeout(toOpen, 0)
	}

	if (solde == 0) {
		document.querySelector(".recharger").style.display = "block";
	}else{
		document.querySelector(".recharger").style.display = "none";
	}
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function toOpen() {
	document.querySelector("#bundle").src = "img/" + bundle + ".png";
	aleatoire1 = getRandomInt(10);
	aleatoire2 = getRandomInt(10);
	aleatoire3 = getRandomInt(10);
	document.querySelector(".lootcard1").src="img/" + groupe + aleatoire1 + ".png";
	document.querySelector(".lootcard2").src="img/" + groupe + aleatoire2 + ".png";
	document.querySelector(".lootcard3").src="img/" + groupe + aleatoire3 + ".png";
	setTimeout(openning, 0)
}


function openning() {
	document.querySelector(".rewarding").style.top = "0";
	document.querySelector(".bundle").style.display = "block";
	document.querySelector(".bundle").style.opacity = "100%";
	document.querySelector(".bundle").style.transform = "rotate3d(0, 0, 0, 180deg)";
	document.querySelector(".recup").style.display = "none";
	document.querySelector(".lootcard1").style.display = "none";
	document.querySelector(".lootcard2").style.display = "none";
	document.querySelector(".lootcard3").style.display = "none";
	document.querySelector(".recup").style.opacity = "0%";
	document.querySelector(".lootcard1").style.opacity = "0%";
	document.querySelector(".lootcard2").style.opacity = "0%";
	document.querySelector(".lootcard3").style.opacity = "0%";
	document.querySelector(".lootcard1").style.transform = "rotate(0deg)";
	document.querySelector(".lootcard3").style.transform = "rotate(0deg)";
	document.querySelector(".lootcard1").style.left = leftRightLootcard;
	document.querySelector(".lootcard3").style.right = leftRightLootcard;
	document.querySelector("body").style.overflowY = "hidden";
}


function bundle_openning() {
	document.querySelector(".bundle").style.opacity = "0%";
	document.querySelector(".bundle").style.transform = "rotate3d(0, 0.1, 0, 180deg)";
	repeat = repeat - 1;
	setTimeout(bundle_openned, 300)
}


function bundle_openned() {
	document.querySelector(".bundle").style.display = "none";
	document.querySelector(".recup").style.display = "block";
	document.querySelector(".lootcard1").style.display = "block";
	document.querySelector(".lootcard2").style.display = "block";
	document.querySelector(".lootcard3").style.display = "block";
	setTimeout(lootcards_showing, 150)
}


function lootcards_showing() {
	document.querySelector(".recup").style.opacity = "100%";
	document.querySelector(".lootcard1").style.opacity = "100%";
	document.querySelector(".lootcard2").style.opacity = "100%";
	document.querySelector(".lootcard3").style.opacity = "100%";
	document.querySelector(".lootcard1").style.transform = "rotate(-10deg)";
	document.querySelector(".lootcard3").style.transform = "rotate(10deg)";
	document.querySelector(".lootcard1").style.left = leftRightLootcardAfter;
	document.querySelector(".lootcard3").style.right = leftRightLootcardAfter;
	audio4.play();
}


function verification() {
	if (repeat == 0){
		setTimeout(closeRewardMenu, 0)
	}else{
		setTimeout(toOpen, 0)
	}
}


function closeRewardMenu() {
	if (repeat > 0){
		audio1.play();
		setTimeout(toOpen, 0)
	}else{
		audio5.play();
		document.querySelector(".rewarding").style.top = "-200%";
		document.querySelector("body").style.overflowY = "overlay";
	}
}