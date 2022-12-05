function debounce(func, wait=20, immediate = true) {
    var timeout;
    return function() {
        var context = this.arg = arguments;
        var later = function() {
            timeout= null;
            if(!immediate) func.apply(context, arg);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, this.arg);
    };
};

const sliderImage = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImage.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.screenY< imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));