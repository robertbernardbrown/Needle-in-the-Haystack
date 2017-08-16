var haystack = ['hay', 'rabbit', 'needle', 'hat'];

function findNeedle(haystack) {
  
 for (i = 0; i < haystack.length; i++) {
    
      var x = i;
   
    if (haystack[i] === 'needle') console.log ('Found the needle at position ' + x);
    if (haystack[i] !== 'needle') console.log ('Nothing');
  }
  
}

findNeedle(haystack);
