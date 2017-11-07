$('.button').click(function() {
				var target = $(this).data('target');
				$('.changable').attr('class', 'changable');
				$('.changable').addClass(target);
			});