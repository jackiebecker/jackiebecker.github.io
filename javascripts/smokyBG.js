$( document ).ready(function() {
  //Init waterpipe
  var smokyBG = $('#wavybg-wrapper').waterpipe({
      //Default values
      gradientStart: '#092336',
      gradientEnd: '#3388c4',
      smokeOpacity: 0.15,
      numCircles: 2,
      maxMaxRad: 'auto',
      minMaxRad: 'auto',
      minRadFactor: 0,
      iterations: 8,
      drawsPerFrame: 10,
      lineWidth: 2,
      speed: 5,
      bgColorInner: "#ffffff",
      bgColorOuter: "#8399a8"
  });

  smokyBG.data('waterpipe').generate();

});
