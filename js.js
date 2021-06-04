$.ajax({
	method: 'GET',
  url: 'https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=152&ELEMENT_ORDER%5bID%5d=ASC',
  dataType: 'json',
  success: function(data) {
		let usersStr = '';
		users = data.result;
		for (let key in users) {
			let user = users[key];
				usersStr += `<figure class="effect-sadie">
						<img src="img/${user.CODE.slice(2)}.jpg">
						<figcaption>
							<p class="title">${user.NAME}</p>
							<p class="preview">${user.PREVIEW_TEXT}</p>
							<p><a>Подробнее</a></p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>`;
			$('.root').html(usersStr);
		};
  }
});




$.ajax({
	method: 'GET',
  url: 'https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=153&ELEMENT_ORDER%5bID%5d=DESC',
  dataType: 'json',
  success: function(data) {
		let usersStr = '';
		users = data.result;
		for (let key in users) {
			let user = users[key];
				usersStr += `<figure class="effect-sadie">
						<img src="img/${user.CODE.slice(1)}.jpg">
						<figcaption>
							<p class="title">${user.NAME}</p>
							<p><a>Подробнее</a></p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>`;
			$('.root1').html(usersStr);
		};
  }
});

$(document).ready(function() {

  function dropActive() {
    let $menu_drop = $('.header');
    if ($menu_drop.attr('data-active')) {
      $menu_drop.removeAttr('data-active');
    } else {
      $menu_drop.attr('data-active', 'active');
    }
  };

	$('.menu_ham').click(dropActive);

});
