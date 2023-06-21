const categorySelect = document.getElementById('categorySelect');

fetch('data/bookscat.json')
    .then(response => response.json())
    .then(data => {
        const categorySelect = document.getElementById('categorySelect');
        const selectedCategoryH1 = document.getElementById('selectedCategory');
        data.category.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });

        categorySelect.addEventListener('change', function() {
            selectedCategoryH1.textContent = categorySelect.value + ' books';
        });
        selectedCategoryH1.textContent = categorySelect.value +' books';

        const bookCards = document.getElementsByClassName('bookCard');
        const books = document.getElementsByClassName('book');
        categorySelect.addEventListener('change', function() {
            for (let i = 0; i < bookCards.length; i++) {
                if (categorySelect.value === 'All' || books[i].dataset.category === categorySelect.value) {
                    bookCards[i].style.display = 'block';
                } else {
                    bookCards[i].style.display = 'none';
                }
            }
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
    });
    



