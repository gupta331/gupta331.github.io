

$('.button-1').click(function() {
	$(this).data('button');

 $('.content').attr('class', 'column content');
 $('.content').addClass(button_name);

 $('.nav-item').removeClass('active');
 $(this).addClass('active');

});

$('.button-2').click(function() {
	$(this).data('button');

 $('.content').attr('class', 'column content');
 $('.content').addClass(button_name);

 $('.nav-item').removeClass('active');
 $('.about-text').addClass('hide');
 $(this).addClass('active');

 });