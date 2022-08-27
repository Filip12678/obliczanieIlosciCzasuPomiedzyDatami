function myFunction() {


	var dataPoczatkowa = document.getElementById('dataPoczatkowa').value;
	var godzinaPoczatkowa = parseFloat(document.getElementById('godzinaPoczatkowa').value);
	var minutaPoczatkowa = parseFloat(document.getElementById('minutaPoczatkowa').value);
	var sekundaPoczatkowa = parseFloat(document.getElementById('sekundaPoczatkowa').value);

	var dataKoncowa = document.getElementById('dataKoncowa').value;
	var godzinaKoncowa = parseFloat(document.getElementById('godzinaKoncowa').value);
	var minutaKoncowa = parseFloat(document.getElementById('minutaKoncowa').value);
	var sekundaKoncowa = parseFloat(document.getElementById('sekundaKoncowa').value);

	dataPoczatkowa = dataPoczatkowa.split('-');
	dataKoncowa = dataKoncowa.split('-');

	var dataPoczatkowa = new Date(parseFloat(dataPoczatkowa[0]), parseFloat(dataPoczatkowa[1]), parseFloat(dataPoczatkowa[2]), parseFloat(godzinaPoczatkowa), parseFloat(minutaPoczatkowa), parseFloat(sekundaPoczatkowa), 0);
	var dataKoncowa = new Date(parseFloat(dataKoncowa[0]), parseFloat(dataKoncowa[1]), parseFloat(dataKoncowa[2]), parseFloat(godzinaKoncowa), parseFloat(minutaKoncowa), parseFloat(sekundaKoncowa), 0);

	var iloscCzasuPomiedzyDatami = dataKoncowa - dataPoczatkowa;
	//console.log(iloscCzasuPomiedzyDatami);

	var iloscDni = Math.floor(iloscCzasuPomiedzyDatami / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60)) / 1000);


	document.getElementById("iloscCzasuPomiedzyDatami").innerHTML = `${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;


}