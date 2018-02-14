// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

$(window).scroll(function() {
  onScrollHandle();
});

function onScrollHandle() {
  var currentScrollPos = $(document).scrollTop();


  function demarrageProgressBar() {
    var barHTML = new ProgressBar.Circle(progressHTML, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#EF6531',
        width: 1
      },
      to: {
        color: '#E24D2C',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    var barCSS = new ProgressBar.Circle(progressCSS, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#32AADE',
        width: 1
      },
      to: {
        color: '#1070B6',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    var barJS = new ProgressBar.Circle(progressJS, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#FADC48',
        width: 1
      },
      to: {
        color: '#EEC63B',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    var barWP = new ProgressBar.Circle(progressWP, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#464646',
        width: 1
      },
      to: {
        color: '#277699',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    var barSEO = new ProgressBar.Circle(progressSEO, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#4489F1',
        width: 1
      },
      to: {
        color: '#37A856',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    var barMJML = new ProgressBar.Circle(progressMJML, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#F25F49',
        width: 1
      },
      to: {
        color: '#F33D51',
        width: 4
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    barHTML.text.style.fontSize = '2rem';
    barCSS.text.style.fontSize = '2rem';
    barJS.text.style.fontSize = '2rem';
    barWP.text.style.fontSize = '2rem';
    barSEO.text.style.fontSize = '2rem';
    barMJML.text.style.fontSize = '2rem';
    barHTML.animate(1.0);
    barCSS.animate(1.0);
    barJS.animate(0.65);
    barWP.animate(0.75);
    barSEO.animate(0.8);
    barMJML.animate(0.95); // Number from 0.0 to 1.0
  }

  // if (currentScrollPos >= $('#presentation').position().top) {
  //   demarrageProgressBar();
  // }

  if (currentScrollPos >= $('#competences').position().top - 150 && $('svg').length == 0) {
    $('.progressbarjs').css("margin-bottom", "0");
    demarrageProgressBar();
  }

}