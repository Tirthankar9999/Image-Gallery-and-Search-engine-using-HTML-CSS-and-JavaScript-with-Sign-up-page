//for search
function filterImages() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const imageCards = document.querySelectorAll('.image-card');

    imageCards.forEach(function(card) {
        const imageName = card.getAttribute('data-name').toLowerCase();
        
        if (imageName.includes(searchValue)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
}

//for search

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const pageMap = {
        'mountain': 'mountains.html',
        'mountains': 'mountains.html',
        'seas and oceans': 'seas and oceans.html',
        'sea and ocean': 'seas and oceans.html',
        'sea & ocean': 'seas and oceans.html',
        'seas & oceans': 'seas and oceans.html',
        'forest': 'forest.html',
        'forests': 'forest.html',
    };

    if (pageMap[query]) {
        window.location.href = pageMap[query];
    } else {
        alert('Oops! There is no such thing as that :)');
    }
});