function jsonFlickrFeed(data) {
	console.log(data);
	var output='';
	
	for (var i = 0; i < data.items.length; i++) {
		var title = data.items[i].title;
		var link = data.items[i].media.m.substring(0, 56);
		var blocktype =
			((i%3)===2) ? 'c':
			((i%3)===1) ? 'b':
			'a';
		output += '<div class="ui-block-' + blocktype + '">';
		// link to showphoto, onclick call showphoto and pass link and title
		output += '<a href="#showphoto" data-transition="fade"onclick="showPhoto(\'' + link +'\',\'' + title + '\')">';
		output += '<img src="' + link + '_q.jpg" alt="' + title + '" />';
		output += '</a>';
		output += '</div>';
                
	} // go through each photo
        
	$('#photolist').html(output);
} //jsonFlickrFeed

function showPhoto(link, title) {
	var output='<a href="#photos" data-transition="fade">';
	output += '<img src="' + link + '_b.jpg" alt="' + title +'" />';
	output += '</a>';
	$('#myphoto').html(output);
}





























