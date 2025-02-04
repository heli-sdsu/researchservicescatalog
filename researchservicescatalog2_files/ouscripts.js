const scrollToId = function(id) {
	var headerHeight = $('.header__wrapper').outerHeight();
	var $el = $(id);
	var $scrollOffset = $el.offset().top - headerHeight;

	$('html,body').animate({ scrollTop: $scrollOffset }, 700);
};

const scrollToAnchor = function(e) {
	var hrefVal = e.target.hasAttribute('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href');
	if (hrefVal !== undefined) {
		var anchorHref = '#' + hrefVal.replace('#', '');
		if ($(anchorHref).length) {
			e.preventDefault();
			scrollToId(anchorHref);
		}
	}
};

const scrollToFragment = (e) => {
	const anchorId = window.location.hash;
	if ($(anchorId).length) {
		scrollToId(anchorId);
	}
}

$(function() {
	$('a[href^="#"][href!="#"]').on('click', scrollToAnchor);
});
