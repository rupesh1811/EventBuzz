$(document).ready(function() {

	$('.btn-info').on('click', function() {
		var button = $(this),
			data = button.data('id'),
			str1 = '<div class="form-group"><div class="col-sm-4"><input type="number" placeholder="Quantity" class="form-control"/></div><div class="col-sm-4"><div class="input-group"><div class="input-group-addon">&#8377;</div><input type="number" placeholder="Price" min="1" class="form-control"/><div class="input-group-addon">.00</div></div></div><div class="col-sm-2 col-sm-offset-2"><button type="button" class="form-control btn btn-danger pull-right"><span class="glyphicon glyphicon-remove"></span></button></div></div>',
		    str2 = '<div class="form-group"><div class="col-sm-4"><input type="number" placeholder="Quantity" class="form-control"/></div><div class="col-sm-2 col-sm-offset-6"><button type="button" class="form-control btn btn-danger pull-right"><span class="glyphicon glyphicon-remove"></span></button></div></div>';
		if(data == 1) {

			$('#create-event-4').prepend(str1);

		} else {

			$('#create-event-4').prepend(str2);

		}

	});

	$(document).on('click','.btn-danger', function() {
		$(this).parents('.form-group').remove();
	});
});