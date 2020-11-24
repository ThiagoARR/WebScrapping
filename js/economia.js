function main(){
		fetch("https://cors-anywhere.herokuapp.com/https://jovempan.com.br/noticias/economia")
		.then(resp => resp.text())
		.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x, "text/html");

			var title = doc.querySelectorAll(".highlight-item .post-title a");
			var imgpost = doc.querySelectorAll(".highlight-item img");
			var link = doc.querySelectorAll(".highlight-item .post-title a");
			var imgpost1 = doc.querySelectorAll(".type-post img");
			var link1 = doc.querySelectorAll(".status-publish .post-title a");
			var title1 = doc.querySelectorAll(".status-publish .post-title a");


			var titlemain = document.querySelectorAll(".wrap-title-noticia a");
			var main = document.querySelector(".main-news");
			var aside1 = document.querySelector(".aside-news-1");
			var aside2 = document.querySelector(".aside-news-2");
			var botnewstitle = document.querySelectorAll(".bottom-news-title a");
			var fotobotnews = document.querySelectorAll(".wrap-foto-bottom-news img");
			var refer = document.querySelectorAll(".bottom-news-title a");
			main.style.backgroundImage = "url('"+imgpost[0].src+"')";
			aside1.style.backgroundImage = "url('"+imgpost[1].src+"')";
			aside2.style.backgroundImage = "url('"+imgpost[2].src+"')";
			console.log(title1[0].innerHTML);
			console.log(imgpost1[0].src);
			console.log(link1[0].href);
			for (var i = 0; i < titlemain.length; i++) {
				titlemain[i].innerHTML = title[i].innerHTML;
				titlemain[i].href = link[i].href;
			}

			for (var i = 0; i < botnewstitle.length; i++) {
				botnewstitle[i].innerHTML = title1[i].innerHTML;
			}

			for (var i = 0; i < fotobotnews.length; i++) {
				fotobotnews[i].src = imgpost1[i].src;
			}

			for (var i = 0; i < refer.length; i++) {
				refer[i].href = link1[i].href;
			}

		})
		.catch(e => document.write(e));
}

window.onload = main;