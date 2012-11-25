function listPosts(data) {
    var output = '';
    $.each(data.posts,function(key,val) {
        
        var tempDiv = document.createElement("tempDiv");
        tempDiv.innerHTML = val.excerpt;
        $("a",tempDiv).remove();
        var excerpt = tempDiv.innerHTML;
                
        output +='<div data-role="collapsible">';
        output+='<h3>' + val.title + '</h3>';
        output+='<p><a style="color : inherit; text-decoration:none" href="#blogpost" onclick="showPost(' + val.id + ')">' + val.excerpt + '</a></p>';
        output+='</div>';
    }); // go through each post
	
    $('#newslist').html(output);
} // lists all the posts

function showPost(id) {
    $.getJSON('http://nplancher.info/natifood/blog?json=get_post&post_id=' + id + '&callback=?', function(data) {
        var output='';
        output += '<h3>' + data.post.title + '</h3>';
        output += data.post.content;
        $('#mypost').html(output);
    }); //get JSON Data for Stories
} //showPost	