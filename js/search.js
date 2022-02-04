(function(){
    const searchBar = document.getElementById('searchbar');
    if(searchBar) {
        const filterResultsByValue = (value) => {
            if(value) {
                const cards = document.querySelectorAll('.card');
                if(cards && cards.length > 0) {
                    const unimportantCards = [...cards].filter((card) => card.textContent.trim().toLowerCase().indexOf(value) == -1);
                    unimportantCards.forEach((card) => card.parentElement.classList.add('hidden'));

                    const importantCards = [...cards].filter((card) => card.textContent.trim().toLowerCase().indexOf(value) != -1);
                    importantCards.forEach((card) => card.parentElement.classList.remove('hidden'));
                }
            }
        }

        const showAllCards = () => {
            const cards = document.querySelectorAll('.card');
            if(cards && cards.length > 0) {
                cards.forEach((card) => card.parentElement.classList.remove('hidden'));
            }
        }

        searchBar.addEventListener('keyup', (e) => {
            const target = e.target;
            const value = target.value.trim().toLowerCase();
           
            value == "" ? showAllCards() : filterResultsByValue(value);
        })
    }
})();