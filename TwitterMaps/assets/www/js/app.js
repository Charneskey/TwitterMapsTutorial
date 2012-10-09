 function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
      //document.addEventListener("deviceready",loaded,false);//for the camera????
 }
 function onDeviceReady(){
     
 }
 function getTweets(data){
	//console.log(data);	
	 var output='<ul data-role="listview" data-theme="a">';
		$.each(data.results, function(key, val){
			var text=val.text;
			var thumbnail= val.profile_image_url;
			var name=val.from_user_name;
			var user=val.from_user;
		    output+= '<li>'
			output += '<img src="'+thumbnail +'" alt = "Photo of "'+name +'">';
			output += '<div data-role="controlgroup"><a href = "http://twitter.com/'+ user + '"><h2>'+name+'</h2></a>'+text+'</div>';
		   	output +='</li>';
		});
		output += '</ul>';
		$('#tweetlist').html(output);
	}
 //Camera functions
 var pictureSource, destinationType;
 

function loaded() {
	 pictureSource=navigator.camera.PictureSourceType;
	 destinationType=navigator.camera.DestinationType;
}
function getPhoto(imageData) {
	 var smallImage = document.getElementById('smallImage');
	 smallImage.style.display = 'block';
	 smallImage.src = "data:image/jpeg;base64," + imageData;
}
function capturePhoto() {
	navigator.camera.getPicture(getPhoto, onFail, { quality: 50 });
}
function onFail(message) {
	alert('Failed because: ' + message);
}