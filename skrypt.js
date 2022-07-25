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
	
	var iloscCzasuPomiedzyDatami = (dataKoncowa[0] * 31536000 + dataKoncowa[1] * 2628000 + dataKoncowa[2] * 86400 + godzinaKoncowa * 3600 + minutaKoncowa * 60 + sekundaKoncowa) - (dataPoczatkowa[0] * 31536000 + dataPoczatkowa[1] * 2628000 + dataPoczatkowa[2] * 86400 + godzinaPoczatkowa * 3600 + minutaPoczatkowa * 60 + sekundaPoczatkowa);
	
	iloscCzasuPomiedzyDatami = iloscCzasuPomiedzyDatami * 1000;
	
	var iloscDni = Math.floor(iloscCzasuPomiedzyDatami / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscCzasuPomiedzyDatami % (1000 * 60)) / 1000);
	
	
	document.getElementById("iloscCzasuPomiedzyDatami").innerHTML = `${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	
	
}