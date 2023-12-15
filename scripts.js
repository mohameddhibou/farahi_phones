//start
const selectElement = (s) => document.querySelector(s);

//Open the menu
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});
//close the menu
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});