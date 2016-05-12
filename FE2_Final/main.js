$(document).ready(function(){
	var btn_Name = $('#btn_hide').text();
	var newImgUrl, newImgEl, lastLink, imgSrc;
	//alert(btn_Name);

	if(typeof(Storage) !== "undefined") 
	{
    	//alert('Your browser doesn')
	} 
	else 
	{
	    // Sorry! No Web Storage support..
	}
	$('#btn_collapse').click(function(){
    	$('#wrapper').toggleClass('shortWrapper');
    });

    $('#btn_hide').click(function(){
    	$('#gallery').toggle(2000,function(){
    		$('.galleryImg').toggle(500);
    	});
    	if(btn_Name == 'Hide')
    	{
    		$('#btn_hide').text('Show');
    	}
    	else
    	{
    		$('#btn_hude').text('Hide');
    	}
    });

    $('#btn_add').click(function(){
    	lastLink = localStorage.getItem('lastAddedImg');
    	//alert(lastLink);
    	if(lastLink != 'null' && lastLink != '')
    	{
    		newImgUrl = prompt('Write the iasdasdmg url please.',lastLink);
    		if(newImgUrl)
    		{
    			newImgEl = '<img class="galleryImg" alt="Error 404" src="'+ newImgUrl +'" />';
    			$('#gallery').append(newImgEl);
    			if(newImgUrl != lastLink && newImgUrl != null)
    			{	
    				localStorage.setItem('lastAddedImg',newImgUrl);
    			}
    		}
    	}
    	else
    	{
    		newImgUrl = prompt('Write the img url please.','http://LOL');
    		if(newImgUrl != '' && newImgUrl != null)
    		{
    			newImgEl = '<img class="galleryImg" alt="Error 404" src="'+ newImgUrl +'" />';
    			localStorage.setItem('lastAddedImg', newImgUrl);
    			$('#gallery').append(newImgEl);
    		}	
	    	else
	    	{
	    		alert('Bad input. Please check your url.');
	    	}		
    	}
    });
    $('#gallery').on('click','img',function(){
    	imgSrc = $(this).attr('src');
    	$('#mainPic').attr('src', imgSrc);
    	//alert('M?');
    });
});