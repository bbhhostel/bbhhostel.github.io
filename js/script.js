$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 3,
    speed: 1000,
    loop: true,
    pause: 3000,
    onBeforeStart: function () {
      $("#lightSlider").removeClass("hide-elem");
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          item: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          item: 1
        }
      }],
    auto: true
  });

  $("#agra-media-gallery").lightSlider({
    item: 2,
    autoWidth: false,
    adaptiveHeight: true,
    speed: 1000,
    loop: true,
    pause: 3000,
    auto: true,
    onBeforeStart: function () {
      $("#agra-media-gallery").removeClass("hide-elem");
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          item: 1
        }
      }]
  });

  var $arrivalDate = $("input#arrivalDate")
  var $departureDate = $("input#departureDate")

  $arrivalDate.datepicker({
    format: 'M d yyyy',
    autoclose: true,
    todayHighlight: true,
    defaultViewDate: 'today'
  }).on('changeDate', function (e) {
    var a = e.date, d = $departureDate.datepicker('getDate')
    if (d != null && d < a) {
      $departureDate.datepicker('setDate', a)
    } else if (d == null) {
      $departureDate.datepicker('setDate', a)
    }
  });

  $departureDate.datepicker({
    format: 'M d yyyy',
    autoclose: true,
    todayHighlight: true,
    defaultViewDate: 'today'
  }).on('changeDate', function (e) {
    var d = e.date, a = $arrivalDate.datepicker('getDate')
    if (a != null && a > d) {
      $arrivalDate.datepicker('setDate', d)
    } else if (a === null) {
      $arrivalDate.datepicker('setDate', d)
    }
  });

  $arrivalDate.add($departureDate).datepicker('update', new Date());
});
