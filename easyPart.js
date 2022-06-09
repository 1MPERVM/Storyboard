//Был добавлен height, чтобы было схоже с картинкой вложенной в ТЗ(В ТЗ указан width, но меняется height).
let height = '600';
let button = document.getElementById("mainBtn");

// Создание дерева
let row = document.createElement("div");
row.id = "row";
document.body.appendChild(row);

let firstImage = document.createElement("img");
firstImage.setAttribute("src","1.jpg");
let secondImage = document.createElement("img");
secondImage.setAttribute("src","2.jpg");
let thirdImage = document.createElement("img");
thirdImage.setAttribute("src","3.jpg");

row.appendChild(firstImage);
row.appendChild(secondImage);
row.appendChild(thirdImage);

let mainRowChilds = row.children;

//Логика приложения

button.addEventListener("click", function(){
	drawStoryBoard(mainRowChilds, height);
});

function drawStoryBoard(mainRowChilds, height){
	for (let i = 0; i < mainRowChilds.length; i++) {
		mainRowChilds[i].height = height;
	}
}