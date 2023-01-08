function czyPrzestepny(rok)
{
	if (rok < 0) {rok = rok * -1;}
	
	if (rok == 100 || rok == 200 || rok == 300 || rok == 500 || rok == 600 || rok == 700 || rok == 900 || rok == 1000 || rok == 1100 || rok == 1300 || rok == 1400 || rok == 1500 || rok == 1700) {
		return 1;
	}
	
	else {
		return (rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0);
	}
}



/* function iloscDniOd1Stycznia1Roku(dzien, miesiac, rok, godzina, minuta, sekunda) {
	
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
	
	
	
} */






function iloscDniPomiedzyDatami(dzienPoczatkowy, miesiacPoczatkowy, rokPoczatkowy, dzienKoncowy, miesiacKoncowy, rokKoncowy) {
	
	var miesiace_W_Roku = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var czyRokJestPrzestepny = 0;
	
	
	var licznikDni = 0;
	
	
	while (true) {
		
		czyRokJestPrzestepny = czyPrzestepny(rokPoczatkowy);
		
		if (czyRokJestPrzestepny == 1) {miesiace_W_Roku[2] = 29;}
		
		if (czyRokJestPrzestepny == 0) {miesiace_W_Roku[2] = 28;}
		
		
		
		if (miesiace_W_Roku[miesiacPoczatkowy] != dzienPoczatkowy) {
			
			dzienPoczatkowy++;
		}
		
		else if (miesiace_W_Roku[miesiacPoczatkowy] == dzienPoczatkowy && miesiacPoczatkowy == 12) {
			
			dzienPoczatkowy = 1;
			miesiacPoczatkowy = 1;
			rokPoczatkowy++;
			if (rokPoczatkowy == 0) {rokPoczatkowy = 1;}
		}
		
		else if (miesiace_W_Roku[miesiacPoczatkowy] == dzienPoczatkowy) {
			
			dzienPoczatkowy = 1;
			miesiacPoczatkowy++;
		}
		
		if (rokPoczatkowy == 1752 && miesiacPoczatkowy == 9 && dzienPoczatkowy == 3) {
			dzienPoczatkowy = 14;
		}
		
		
		licznikDni++;
		
		
		
		
		if (rokPoczatkowy == rokKoncowy && miesiacPoczatkowy == miesiacKoncowy && dzienPoczatkowy == dzienKoncowy) {
			break;
		}
		
		
		
		
		
	}
	
	return licznikDni;
	
	
	
}









function myFunction() {


	var dzienPoczatkowy = parseFloat(document.getElementById('dzienPoczatkowy').value);
	var miesiacPoczatkowy = parseFloat(document.getElementById('miesiacPoczatkowy').value);
	var rokPoczatkowy = parseFloat(document.getElementById('rokPoczatkowy').value);
	var godzinaPoczatkowa = parseFloat(document.getElementById('godzinaPoczatkowa').value);
	var minutaPoczatkowa = parseFloat(document.getElementById('minutaPoczatkowa').value);
	var sekundaPoczatkowa = parseFloat(document.getElementById('sekundaPoczatkowa').value);


	var dzienKoncowy = parseFloat(document.getElementById('dzienKoncowy').value);
	var miesiacKoncowy = parseFloat(document.getElementById('miesiacKoncowy').value);
	var rokKoncowy = parseFloat(document.getElementById('rokKoncowy').value);
	var godzinaKoncowa = parseFloat(document.getElementById('godzinaKoncowa').value);
	var minutaKoncowa = parseFloat(document.getElementById('minutaKoncowa').value);
	var sekundaKoncowa = parseFloat(document.getElementById('sekundaKoncowa').value);
	
	
	
	var iloscDniPomiedzyObiemaDatami = iloscDniPomiedzyDatami(dzienPoczatkowy, miesiacPoczatkowy, rokPoczatkowy, dzienKoncowy, miesiacKoncowy, rokKoncowy);
	
	
	var godzinaPoczatkowaJakoCzescDnia = godzinaPoczatkowa/24 + minutaPoczatkowa/1440 + sekundaPoczatkowa/86400;
	var godzinaKoncowaJakoCzescDnia = godzinaKoncowa/24 + minutaKoncowa/1440 + sekundaKoncowa/86400;
	
	var iloscSekundPomiedzyDatami = (iloscDniPomiedzyObiemaDatami + (godzinaKoncowaJakoCzescDnia - godzinaPoczatkowaJakoCzescDnia)) * 86400;
	
	
	var iloscDni = parseInt(iloscSekundPomiedzyDatami / 86400);
	var iloscGodzin = parseInt((iloscSekundPomiedzyDatami - iloscDni * 86400) / 3600);
	var iloscMinut = parseInt((iloscSekundPomiedzyDatami - (iloscDni * 86400 + iloscGodzin * 3600)) / 60);
	var iloscSekund = iloscSekundPomiedzyDatami - (iloscDni * 86400 + iloscGodzin * 3600 + iloscMinut * 60);
	
	
	//var iloscDni = Math.floor(iloscMilisekundPomiedzyDatami / (1000 * 60 * 60 * 24));
	//var iloscGodzin = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	//var iloscMinut = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60 * 60)) / (1000 * 60));
	//var iloscSekund = Math.floor((iloscMilisekundPomiedzyDatami % (1000 * 60)) / 1000);
	
	
	
	document.getElementById("iloscCzasuPomiedzyDatami").innerHTML = `${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	
	
	
	


}