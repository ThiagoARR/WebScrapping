function main(){
	fetch("https://cors-anywhere.herokuapp.com/https://www.techtudo.com.br/")
		.then(resp => resp.text())
		.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x, "text/html");

			var title = doc.querySelectorAll(".feed-post-link");
			var resumo = doc.querySelectorAll(".feed-post-body-resumo")
			var imgpost = doc.querySelectorAll(".feed-media-wrapper img");
			var link = doc.querySelectorAll(".feed-media-wrapper a");

			var titlemain = document.querySelectorAll(".wrap-title-noticia a");
			var main = document.querySelector(".main-news");
			var aside1 = document.querySelector(".aside-news-1");
			var aside2 = document.querySelector(".aside-news-2");
			var botnewstitle = document.querySelectorAll(".bottom-news-title a");
			var botnewsabout = document.querySelectorAll(".bottom-news-about");
			var fotobotnews = document.querySelectorAll(".wrap-foto-bottom-news img");
			var refer = document.querySelectorAll(".bottom-news-title a");

			main.style.backgroundImage = "url('"+imgpost[0].src+"')";
			aside1.style.backgroundImage = "url('"+imgpost[1].src+"')";
			aside2.style.backgroundImage = "url('"+imgpost[2].src+"')";


			for (var i = 0; i < titlemain.length; i++) {
				titlemain[i].innerHTML = title[i].innerHTML;
				titlemain[i].href = link[i].href;
			}

			for (var i = 3; i < botnewstitle.length + 3; i++) {
				botnewstitle[i - 3].innerHTML = title[i].innerHTML;
			}

			for (var i = 3; i < botnewsabout.length + 3; i++) {
				botnewsabout[i - 3].innerHTML = resumo[i].innerHTML;
			}

			for (var i = 3; i < fotobotnews.length +3; i++) {
				fotobotnews[i - 3].srcset = imgpost[i].srcset;
			}

			for (var i = 3; i < refer.length+3; i++) {
				refer[i - 3].href = link[i].href;
			}

		})
		.catch(e => document.write(e));
}

window.onload = main;