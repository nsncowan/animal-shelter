
// on load
window.onload = function() {
  document.querySelector("button#dark-mode").onclick = function() {
    darkmode();
  };
};


// when 'dark mode is clicked...



//'dark mode': function to set background to dark, and text to light
function darkmode() {
  document.body.style.backgroundcolor = null;
  document.body.style.backgroundcolor = "black";
};


//'light mode' : function to set background to light, and text to dark
function lightmode() {
  document.body.style.bacgroundcolor = "white"
};

//large font function


//regular font function