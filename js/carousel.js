const image_profile = [
    ['raguvengat.jpg', 'raguvenkat.26', 'Rstory.html'],
    ['sona.jpg', '_sona.23', 'Sstory.html'],
    ['varshini.jpg', 'vxrshx_10', 'Vstory.html'],
    ['aira.jpg', 'princess_aira', 'Astory.html'],
    ['pic12.jpg', 'prince_rajesh', 'Pstory.html'],
];

const story_container = document.querySelector('.owl-carousel.items');
if (story_container) {
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        
        // Add left margin conditionally for specific usernames
        let usernameStyle = '';
        if (image_profile[i][1] === '_sona.23' || image_profile[i][1] === 'vxrshx_10') {
            usernameStyle = 'style="margin-left: 12px;"'; // Adjust margin as needed
        }

        parentDiv.innerHTML = `
            <a href="${image_profile[i][2]}">
                <img src="${image_profile[i][0]}" alt="${image_profile[i][1]}">
                <p ${usernameStyle}>${image_profile[i][1]}</p>
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
