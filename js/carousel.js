const image_profile = [
    ['raguvengat.jpg', 'raguvenkat.26', 'profile.html'],
    ['sona.jpg', ' _sona.23', 'story.html'],
    ['varshini.jpg', 'vxrshx_10', 'home.html'],
    ['aira.jpg', 'princess_aira', 'index.html'],
    ['pic12.jpg', 'prince_rajesh', 'story.html'],
];

const story_container = document.querySelector('.owl-carousel.items');
if (story_container) {
    for (var i = 0; i < image_profile.length; i++) { // Adjusted to loop through the full array
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <a href="${image_profile[i][2]}"> <!-- Added anchor tag for redirection -->
                <img src="${image_profile[i][0]}" alt="${image_profile[i][1]}">
                <p>${image_profile[i][1]}</p>
            </a>
        `;
        story_container.appendChild(parentDiv);
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 5,
    responsiveClass: true,
    responsive: {
        1: {
            items: 4,
            nav: true
        },
        550: {
            items: 0,
            nav: false
        }
    }
});
