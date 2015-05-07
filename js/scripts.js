$('#zh').click(function(){
  $.ajax({
    url: "http://fireball-x.com/",
    type: 'GET',
    header: {
      "Accept-Language": "zh;q=1.0"
    },
    dataType: 'html',
    crossDomain: true
  });
});
