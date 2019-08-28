var c = 0;

/*let app = angular.module('movielist', [])*/

function onDocumentFinish(n){
	loadUserData(n); 
}

function loadUserData(n){
	// membuat sebuah objek untuk melakukan request ke HTTP server
	// secara asynchronous
	console.log(n);
	let request = new XMLHttpRequest()
	let url1 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=77b6286462d8dd1c812957e7672573b4&language=en-US&page=1'
	request.open('GET', url1, true)

	//handler saat request berhasil di-load
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			let data = JSON.parse(request.responseText)
			if(n==1)generateMovieData(data);
			else if (n==2)detailsMovie(data);
		}
		else{
			alert('Page Not Found!')
		}
	}
	//handler jika koneksi ke server terganggu
	request.onerror = function(){
		alert('Request Failed! Check your internet connection!')
	}
	//menjalankan request
	request.send()
}

/*function generateMovieData(data){
	console.log(data);
	console.log(data.results[0].original_title)
	let idx = 0
	let card = document.getElementById('card').querySelector('div')
	
	for(idx = 0; idx < data.results.length; idx++){
		
		let x1 = document.createElement('h4')
		x1.appendChild(document.createTextNode(data.results[idx].original_title))*/
		
		/*let x2 = document.createElement('img')
		x2.setAttribute("src", "(https://image.tmdb.org/t/p/w500/"+data[idx].poster_path);
		x2.setAttribute("src", "img_pulpit.jpg");*/

		/*card.appendChild(x1);*/
		/*card.appendChild(x2)*/
		
	//}
//}

function generateMovieData(data){
	datas = JSON.parse(JSON.stringify(data));
	console.log(datas.results[0].title);
	console.log(datas.results[0]);
	let card1 = document.getElementById('mov').querySelector('div')
	card1.classList.add("card");
	

	let card2 = document.getElementById('mov2').querySelector('div')
	card2.classList.add("card");
	

	let card3 = document.getElementById('mov3').querySelector('div')
	card3.classList.add("card");
	

	let card4 = document.getElementById('mov4').querySelector('div')
	card4.classList.add("card");
	

	 /*$("#moviedata").mirandajs(datas.results);*/
	 // const detectContainer = document.getElementById("card-container");
	 // detectTbody.innerHTML = ''
	 helo = localStorage.getItem("username");
	 document.getElementById("hello").innerHTML = "Selamat datang, " + helo;

	 for(idx = 0; idx < datas.results.length; idx++){
	 	var judul = datas.results[idx].title;
	 	var gambar = datas.results[idx].poster_path;
	 	

	 	let nomor = document.createAttribute('value')
		nomor.value = idx;

	 	let x1 = document.createElement('div')
	 	x1.appendChild(document.createTextNode(judul))
		x1.style.textAlign = "center";
		x1.style.fontSize = "13px";
		x1.style.marginTop = "20px";

		let x3 = document.createElement('img')
		x3.setAttribute("src", "https://image.tmdb.org/t/p/w300"+gambar);
		x3.setAttribute("max-width", "250px");
		x3.setAttribute("height", "375px");


		let x2 = document.createElement('a')
	 	x2.appendChild(document.createTextNode("Details"))
	 	x2.classList.add("btn");
	 	x2.classList.add("btn-primary");
	 	x2.style.marginTop = "10px";
	 	x2.style.marginBottom = "50px";
	 	x2.style.color = "white";
	 	x2.setAttribute("href", "../halaman_3/index3.html");
	 	x2.value = idx;


	 	/*x2.addEventListener('click', function(){detailsMovie(x2.value)})*/
	 	/*console.log(x2.value);*/
	 	
	 	x2.addEventListener('click', 
	 		function(){
	 			localStorage.setItem("value", x2.value);
	 			localStorage.setItem("id_movie", datas.results[x2.value].id)
	 		}
	 	)
	

		if(idx % 4 == 0){
			card1.appendChild(x3);
			card1.appendChild(x1);
			card1.appendChild(x2);
		}

		else if(idx % 4 == 1){
			card2.appendChild(x3);
			card2.appendChild(x1);
			card2.appendChild(x2);
		}

		else if(idx % 4 == 2){
			card3.appendChild(x3);
			card3.appendChild(x1);
			card3.appendChild(x2);
		}
		
		else if(idx % 4 == 3){
			card4.appendChild(x3);
			card4.appendChild(x1);
			card4.appendChild(x2);
		}
		
/*https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg*/
		/*$scope.nama = nama;
		$scope.id = id;
		$scope.visi = visi;
		$scope.misi = misi;
		$scope.gambar1 = gambar1;
		$scope.gambar2 = gambar2;
		$scope.gambar3 = gambar3;*/
		/*$scope.records = datas.results;*/
	 }
}

function detailsMovie(data){
	console.log("asdasdasdasdsaddassd");
	datas = JSON.parse(JSON.stringify(data));
	value = localStorage.getItem("value");
	

	

	var gambar = data.results[value].poster_path;
	var title = datas.results[value].title;
	var date = datas.results[value].release_date;
	var deskripsi = datas.results[value].overview;
	/*var budget = datas.results[1].title;
	var perusahaan = datas.results[1].title;*/

	document.getElementById("gambar").src = "https://image.tmdb.org/t/p/w300"+gambar;
	document.getElementById("title").innerHTML = "Title:"+"<br>"+title;
	document.getElementById("date").innerHTML = "Release Date:"+"<br>"+date;
	document.getElementById("deskripsi").innerHTML = "Description:"+"<br>"+deskripsi;
	document.getElementById("judulPage").innerHTML = title + " - Details";

	loadUserData2();
	/*document.getElementById("budget").innerHTML = budget;
	document.getElementById("perusahaan").innerHTML = perusahaan;*/
}

function loadUserData2(){
	// membuat sebuah objek untuk melakukan request ke HTTP server
	// secara asynchronous
	
	let request = new XMLHttpRequest()
	id_movie = localStorage.getItem("id_movie")
	let url2 = 'https://api.themoviedb.org/3/movie/'+id_movie+'?api_key=77b6286462d8dd1c812957e7672573b4&language=en-US'
	request.open('GET', url2, true)

	//handler saat request berhasil di-load
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			let data = JSON.parse(request.responseText)
			detailsMovie2(data);
			
		}
		else{
			alert('Page Not Found!')
		}
	}
	//handler jika koneksi ke server terganggu
	request.onerror = function(){
		alert('Request Failed! Check your internet connection!')
	}
	//menjalankan request
	request.send()
}

function detailsMovie2(data){
	datas2 = JSON.parse(JSON.stringify(data));
	value = localStorage.getItem("id_movie");
	console.log(datas2);

	let budget = datas2.budget;
	if(datas2.budget == 0){
		document.getElementById("budget").innerHTML = "Budget:" + "<br>" + "unknown";
	}

	else
	document.getElementById("budget").innerHTML = "Budget:" + "<br>"+ "$" + budget;

	var perusahaan = [];

	for(idx = 0; idx < datas2.production_companies.length; idx++){
		/*perusahaan.push("datas2.production_companies[idx].name");*/
		perusahaan.push(datas2.production_companies[idx].name);

	}
	if(datas2.production_companies.length == 0){
		perusahaan.push("unknown");
		document.getElementById("perusahaan").innerHTML = "Production Company:" + "<br>" +perusahaan;
	}
	else if(datas2.production_companies.length == 1) 
		document.getElementById("perusahaan").innerHTML = "Production Company:" + "<br>" +perusahaan;
	else
	document.getElementById("perusahaan").innerHTML = "Production Companies:" + "<br>" +perusahaan;
}