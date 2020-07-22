var menuBtn =  document.querySelector('.mobile');
var arrowBtn = document.querySelector('.burger-ar');
var headerNav = document.querySelector('header nav');

// if(menuBtn.style.display = "block") {
	menuBtn.onclick = function menuBtn() {
		headerNav.style.display = "block";
		arrowBtn.style.display = "block";
		// menuBtn.style.display = "none";
	}
// } else {
	arrowBtn.onclick = function arrowBtn() {
		headerNav.style.display = "none";
		// menuBtn.style.display = "block";
		// arrowBtn.style.display = "none";
	}
// }
/*
1. Сверстать слайдер
2. Сделать переключении фото влево-вправо
3. Сделать переключении фото по клику на нижние фото
4. При клике на большую картинку увеличивать картинку в полный размер

*/
var images = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
]

// путь к картинке слайдера
var path = "img/slider/";

var currentImg = 0;

//Первая картинка
$("#main-slider img").
	attr("src", path + images[currentImg]);

// при клике на стрелку ВПРАВО меняем картинку на следующую
$("#main-slider .next").click(function (){
	currentImg++;
	// если текущая картинка последняя в массиве, то возвращаемся к первой
	if(currentImg >= images.length) { 
		currentImg = 0;
	}
	$("#main-slider img")
	.attr("src", path + images[currentImg]);

	// находим айди текущей картинки
	var $imgActive = $('#slides ul').children('[data-id="' + currentImg + '"]');
	// убираем у всех элементов класс active
	$("#slides ul li").removeClass('active');
	// добавляем класс active на активную картинку
	$imgActive.addClass('active');
	// console.dir($imgActive);
});


// при клике на стрелку ВЛЕВО меняем картинку слайдера на предыдущую
$("#main-slider .pref").click(function (){
	currentImg--;
	if(currentImg < 0) {
		currentImg = images.length - 1;
	}
		$("#main-slider img")
	.attr("src", path + images[currentImg]);

		var $imgActive = $('#slides ul').children('[data-id="' + currentImg + '"]');
	// убираем у всех элементов класс active
	$("#slides ul li").removeClass('active');
	// добавляем класс active на активную картинку
	$imgActive.addClass('active');
	// console.dir($imgActive);
});


//Создание карточек фотографий
for (var i = 0; i < images.length; i++) {
	//добавляем элемент в блок с мини картинками
	$("#slides ul").append("<li data-id='" + i + "'>" + 
		"<img src='" + 
			path + images[i] 
		+ "'></li>");
	// проверяем если это 1я картинка - добавляем класс active
	if(i == 0) {
		$("#slides ul li").addClass('active');
	}
}

// делаем клик по слайдам
$("#slides ul li").click(function (e) {
	// убираем у всех элементов класс active
	$("#slides ul li").removeClass('active');
	// на элементе, по которому кликнули, добавляем класс active
	$(this).addClass('active');
	// получаем айди элемента по которому кликнули
	var id = this.dataset.id;
	// меняем картинку в слайде
	$("#main-slider img")
		.attr("src", path + images[id]);
})

$("#main-slider img").click(function() {
	console.log(this);
	$("#opacity").css({'display':'block'});
	$('#full-img')
		.css({'display':'block'})
		.append('<img src="' + $(this).attr('src') + '">');
})

$("#opacity").click(function() {
	$('#opacity').css({'display':'none'});
	$('#full-img').css({'display':'none'}).empty();
});