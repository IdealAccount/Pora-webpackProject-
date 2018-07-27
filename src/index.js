
require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});

$(document).ready(function() {

	$('#name, #from').unbind().blur().keydown(function() {
		var id = $(this).attr('id');
		var val = $(this).val();

		switch(id) {
             // Проверка поля "Как вас зовут?"
           	case 'name':
              var rv_name = /^[a-zA-Zа-яА-Я]+$/;

              if(val.length > 4 && val.length < 15 && val !== '' && rv_name.test(val)) {
                 $(this).addClass('not_error');
                 $(this).next('.error-box')
                 				.text('Принято')
                  			.css('color','green')
                  			.animate({'paddingLeft':'20px'},400);
              }

              else {
                 $(this).removeClass('not_error').addClass('error');
                 $(this).next('.error-box')
                 				.html('поле "Имя" обязательно для заполнения,<br>длина имени должна составлять не менее 2 символов,<br>поле должно содержать только русские или латинские буквы')
                 				.css('color','red')
                 				.animate({'paddingLeft':'10px'},400);
              }
            break;
            // проверка "откуда вы?"
           	case 'from':
              if(val != '' && val.length < 15) {
                 $(this).addClass('not_error');
                 $(this).next('.error-box')
                 				.text('Принято')
                        .css('color','green')
                        .animate({'paddingLeft':'20px'},400);
              }
              else {
                 $(this).removeClass('not_error').addClass('error');
                 $(this).next('.error-box')
                 				.html('поле "Откуда Вы?" обязательно для заполнения,<br>не должно превышать 15 символов')
                 				.css('color','red')
                 				.animate({'paddingLeft':'10px'},400);
              }
          break;
        }
    }); //end blur()
	}); 
$(document).ready(function() {
	$('#step-first').click(function(){
		$('.step-first').animate({'left':'-70%'},600, function()	{
											$('.step-second').animate({'left':'5%'},600)
																			 .animate({'left':'20%'},400);
											});
	});
	$('#step-second').click(function(){
		$('.step-second').animate({'left':'-70%'},400, function()	{
										 		$('.step-second2').animate({'left':'5%'},600)
										 											.animate({'left':'20%'},400);
												});
	});
	$('#step-second2').click(function() {
		$('.step-second2').animate({'left':'-70%'},400, function() {
												$('.step-third').animate({'left':'5%'},600)
																				.animate({'left':'20%'});
											})
	})
});
