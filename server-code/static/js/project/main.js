//Shows all projects for a particular year when the circle is clicked
$('.projects_show').click(function(){
	$('.projects_show').slideToggle('slow')
	$("#projects"+this.id).slideToggle('slow')
})

//Takes user back to page which shows all years
$('.projects_back').click(function(){
	$('.projects_show').slideToggle('slow')
	$("#projects"+this.id).slideToggle('slow')
})
