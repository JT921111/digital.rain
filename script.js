$(document).ready(function () {
  for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 20; j++) {
      var k = i * 20 + j;
      $('.container').append('<div id="' + k + '">' + Math.floor(Math.random() * 10) + '</div>');
    }
  }

  const glow = [160, 580, 61, 621, 82, 262, 522, 143, 483, 184, 324, 504, 145, 445, 46, 326, 686, 107, 727, 208, 648, 169, 349, 589, 130, 430, 610, 111, 731, 192, 552, 173, 593, 94, 494, 55, 535, 96, 276, 616, 137, 377, 717, 38, 418, 658, 19, 779, 60, 580];
  var start = Math.floor(Math.random() * 15);

  function starting(n) {
    for (var i = 0; i < glow.length; i++) {
      glow[i] += 20 * n;
    }
  }

  function rain() {
    for (var i = 0; i < glow.length; i++) {
      $('#' + glow[i]).text(Math.floor(Math.random() * 10)).css('color', 'white');
      $('#' + (parseInt(glow[i]) - 20)).text(Math.floor(Math.random() * 10)).css('color', 'lime');
      $('#' + (parseInt(glow[i]) - 40)).text(Math.floor(Math.random() * 10)).css('color', 'lime');
      $('#' + (parseInt(glow[i]) - 60)).text(Math.floor(Math.random() * 10)).css('color', 'lime');
      $('#' + (parseInt(glow[i]) - 80)).text(Math.floor(Math.random() * 10)).css('color', 'lime');
      $('#' + (parseInt(glow[i]) - 100)).text(Math.floor(Math.random() * 10)).css('color', 'lime');
      $('#' + (parseInt(glow[i]) - 120)).text(Math.floor(Math.random() * 10)).css('color', 'black');
      glow[i] += 20;
      if (glow[i] >= 920) {
        glow[i] -= 920;
      }
    }
  }

  starting(start);

  setInterval(function () {
    rain();
  }, 100);
})