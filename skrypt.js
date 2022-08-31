function czyPrzestepny(rok)
{
	if (rok == 100 || rok == 200 || rok == 300 || rok == 500 || rok == 600 || rok == 700 || rok == 900 || rok == 1000 || rok == 1100 || rok == 1300 || rok == 1400 || rok == 1500 || rok == 1700) {
		return 1;
	}
	
	else {
		return (rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0);
	}
}



function iloscDniOd1Stycznia1Roku(dzien, miesiac, rok, godzina, minuta, sekunda) {
	
	var miesiace_W_Roku = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var czyRokJestPrzestepny = 0;
	
	
	var dzienDoSprawdzenia = parseInt(dzien);
	var miesiacDoSprawdzenia = parseInt(miesiac);
	var rokDoSprawdzenia = parseInt(rok);
	
	
	dzien = 1;
	miesiac = 1;
	rok = 1;
	
	var licznikDni = 0;
	
	
	while (true) {
		
		czyRokJestPrzestepny = czyPrzestepny(rok);
		
		if (czyRokJestPrzestepny == 1) {miesiace_W_Roku[2] = 29;}
		
		if (czyRokJestPrzestepny == 0) {miesiace_W_Roku[2] = 28;}
		
		
		
		if (miesiace_W_Roku[miesiac] != dzien) {
			
			dzien++;
		}
		
		else if (miesiace_W_Roku[miesiac] == dzien && miesiac == 12) {
			
			dzien = 1;
			miesiac = 1;
			rok++;
		}
		
		else if (miesiace_W_Roku[miesiac] == dzien) {
			
			dzien = 1;
			miesiac++;
		}
		
		if (rok == 1752 && miesiac == 9 && dzien == 3) {
			dzien = 14;
		}
		
		
		licznikDni++;
		
		
		
		
		if (rok == rokDoSprawdzenia && miesiac == miesiacDoSprawdzenia && dzien == dzienDoSprawdzenia) {
			
			break;
		}
		
		
		
		
		
	}
	
	licznikDni = licznikDni + (1/24 * parseInt(godzina)) + (1/1440 * parseInt(minuta)) + (1/86400 * parseInt(sekunda));
	
	return licznikDni*86400000;
	
	
	
}









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
	
	//console.log(dataPoczatkowa);

	//var dataPoczatkowa = new Date(parseFloat(dataPoczatkowa[0]), parseFloat(dataPoczatkowa[1]), parseFloat(dataPoczatkowa[2]), parseFloat(godzinaPoczatkowa), parseFloat(minutaPoczatkowa), parseFloat(sekundaPoczatkowa), 0);
	//var dataKoncowa = new Date(parseFloat(dataKoncowa[0]), parseFloat(dataKoncowa[1]), parseFloat(dataKoncowa[2]), parseFloat(godzinaKoncowa), parseFloat(minutaKoncowa), parseFloat(sekundaKoncowa), 0);
	
	
	//console.log(dataPoczatkowa[2], dataPoczatkowa[1], dataPoczatkowa[0]);
	
	
	
	
	
	
	
	
	
	
	
	
	

	var dataPoczatkowa = iloscDniOd1Stycznia1Roku(dataPoczatkowa[2], dataPoczatkowa[1], dataPoczatkowa[0], godzinaPoczatkowa, minutaPoczatkowa, sekundaPoczatkowa);
	var dataKoncowa = iloscDniOd1Stycznia1Roku(dataKoncowa[2], dataKoncowa[1], dataKoncowa[0], godzinaKoncowa, minutaKoncowa, sekundaKoncowa);
	
	var iloscMilisekundPomiedzyDatami = dataKoncowa - dataPoczatkowa;
	
	
	var iloscDni = Math.floor(iloscMilisekundPomiedzyDatami / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60)) / 1000);
	
	
	
	document.getElementById("iloscCzasuPomiedzyDatami").innerHTML = `${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	
	
	
	


}