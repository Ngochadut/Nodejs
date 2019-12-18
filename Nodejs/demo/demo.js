var users = [
	{ name: 'Nguyen Ngoc Ha', gender: 'female'},
	{ name: 'Nguyen Ngoc Quan', gender: 'male'},
	{ name: 'Nguyen Ngoc Van', gender: 'female'},
	{ name: 'Nguyen Ngoc Hai', gender: 'male'},
	{ name: 'Nguyen Ngoc Minh', gender: 'male'}
];
var userList = $('#userList');
var genderFilter = $('#genderFilter');

render(userList,users);

genderFilter.on('change', function(){
	var selectedGender =  this.value;
});
function render(container, items){
	var htmlItems = items.map(function(item){
		return '<li class="list-group-item">' + item.name+'</li>'

	});
	var html = htmlItems.join();
	container.html(html);
}
