// Will print out "Good Bye [person name here] in the console
// when function is activated at script.js

(function(window) {
var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
        document.write(speakWord + " " + name + "<br>")
    };
    window.byeSpeaker = byeSpeaker;
})(window);
;