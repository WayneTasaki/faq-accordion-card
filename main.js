
// let acc = document.getElementsByClassName('accordion');

// Array.from(acc).forEach(e => { e.addEventListener('click', activeAcc)})

// function activeAcc() {
//   this.classList.toggle('active')
//   let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//     let arrow = this.getElementsByTagName('img')[0]
//     arrow.classList.toggle('up')
// }

var acc = document.getElementsByClassName("accordion");
var i;

// Open the first accordion
var firstAccordion = acc[0];
var firstPanel = firstAccordion.nextElementSibling;
// ** REMOVE COMMENT BELOW - for first accordion open by default ** //
// firstAccordion.classList.add("active");
// firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

// Add onclick listener to every accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    // For toggling purposes detect if the clicked section is already "active"
    var isActive = this.classList.contains("active");
    // Rotate arrow icon
    let arrow = this.getElementsByClassName('arrow')[0]
    let upArrow = arrow.classList.contains('up')
    // arrow.classList.add('up')

    // Close all accordions
    var allAccordions = document.getElementsByClassName("accordion");
    let allArrows = document.getElementsByClassName('arrow')
    for (j = 0; j < allAccordions.length; j++) {
      // Remove active class from section header
      allAccordions[j].classList.remove("active");
      allArrows[j].classList.remove('up');
      
      

      // Remove the max-height class from the panel to close it
      var panel = allAccordions[j].nextElementSibling;
      var maxHeightValue = getStyle(panel, "maxHeight");
    
    if (maxHeightValue !== "0px") {
        panel.style.maxHeight = null;
        
      }
      
    }

    // Toggle the clicked section using a ternary operator
    // isActive ? this.classList.remove("active") : this.classList.add("active");

    if (isActive == true) {
      this.classList.remove('active')
      arrow.classList.remove('up')
    } else {
      this.classList.add('active')
      arrow.classList.add('up')
    }

    // Toggle the panel element
    var panel = this.nextElementSibling;
    var maxHeightValue = getStyle(panel, "maxHeight");
    
    if (maxHeightValue !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

  // Cross-browser way to get the computed height of a certain element. Credit to @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
  function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }




  