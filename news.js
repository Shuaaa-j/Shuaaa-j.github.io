/* More News Button Scroll */
var moreNewsButton = document.querySelector('.cta-button');
var esportsSection = document.querySelector('.esports-section');

moreNewsButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    esportsSection.scrollIntoView({ behavior: 'smooth' });
});
 cxz                                                                                                                                                                                                                                                                                            
