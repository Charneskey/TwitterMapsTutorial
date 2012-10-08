 function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
 }
 function onDeviceReady(){
     
 }
 function getTweets() {
	    var q = "ufo+spotted"
	        rpp = 5,
	        twurl = "http://search.twitter.com/search.json?q=";
	    $.getJSON(twurl + q + "&rpp=" + rpp + "&callback=?", function(data){
	        $("#tmpl-tweets").tmpl(data.results).appendTo("#tweets");
	    });
}
