(function() {

	let slideshowItem = document.querySelectorAll('.slideshow__item'),
		i;

	for(i = 0; i < slideshowItem.length; i++) {
		slideshowItem[i].addEventListener('click', function(e) {
			e.preventDefault();

			let slideshowItemImgSrc = this.children[0].getAttribute('src'),
				slideshow = this.parentElement.parentElement,
				slideshowDisplay = slideshow.querySelector('.slideshow__display').children[0];

			slideshowDisplay.setAttribute('src', slideshowItemImgSrc);			

		});
	}

})();