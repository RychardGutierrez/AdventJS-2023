/*
Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

drawGift(4, '+')
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####

drawGift(5, '*')
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####

drawGift(1, '^')
#
Important: We have been told that there is always to leave a newline at the end of the drawing.
*/

function drawGift(size, symbol) {
  if (size == 1) {
    return '#\n';
  }
  const rows = [];
  // First row
  rows[0] = '#'.repeat(size).padStart(size * 2 - 1, ' ');

  // Middle row
  rows[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;

  // Last row
  rows[size * 2 - 2] = '#'.repeat(size);

  for (let index = 1; index < size - 1; index++) {
    let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(index - 1)}#`;

    rows[index] = draft.padStart(size * 2 - 1, ' ');
    rows[size * 2 - 2 - index] = draft;
  }

  return rows.join('\n').concat('\n');
}

const result = drawGift(5, '*');
console.log(result);
