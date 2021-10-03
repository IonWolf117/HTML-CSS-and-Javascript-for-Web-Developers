// Will print out "Hello [person name here] in the console
// when function is activated at script.js

(function(window) {
    var helloSpeaker = new Object();
	var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
        let message = document.getElementById('messages');
        document.write(speakWord + " " + name + "<br>")
	}

	window.helloSpeaker = helloSpeaker;

})(window);