function listVideos(data) {
	console.log(data);
	
	var output ='';
	for ( var i=0; i<data.feed.entry.length; i++) {

		var title = data.feed.entry[i].title.$t;
		var author = data.feed.entry[i].author[0].name.$t;
                var views = data.feed.entry[i].yt$statistics.viewCount;
		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
		var description = data.feed.entry[i].media$group.media$description.$t;
		var id = data.feed.entry[i].id.$t.substring(38);
		
		var blocktype = ((i % 2)===1) ? 'b': 'a';
		
		output += '<div class="ui-block-' + blocktype + '">';

		output += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\'' +  id +'\',\'' + title + '\',\'' + escape(description) + '\',\'' + author + '\',\''+ views +'\')">';
		output += '<h3 class="movietitle">' + title + '</h3>';
		output += '<img src="' + thumbnail + '" alt="' + title + '" />';
		output +="</a>";
		output +="</div>";
	}
	
	$('#videolist').html(output);
}

function playVideo(id, title, description, author, views) {
        var output = '<h3>' + title + '</h3>';
	output +='<iframe src="http://www.youtube.com/embed/'+ id +'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';	
	output += '<h5> Author : ' + author + '</h5>';
	output += '<h5> Views : ' + views + '</h5>';
	output += '<p>' + unescape(description) + '</p>';
	$('#myplayer').html(output);
}


