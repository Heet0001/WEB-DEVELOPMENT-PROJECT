document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('pricing-toggle');
    const totalCostElement = document.getElementById('total-cost');
    const pricingCards = document.querySelectorAll('.pricing-card');

    let selectedCard = null;

    function updatePrices() {
        let totalCost = 0;

        pricingCards.forEach(card => {
            const nightlyPrice = parseInt(card.getAttribute('data-nightly-price'));
            const weeklyPrice = parseInt(card.getAttribute('data-weekly-price'));
            const priceElement = card.querySelector('.price');

            if (toggle.checked) {
                priceElement.textContent = `${weeklyPrice}₹/week`;
                if (card === selectedCard) {
                    totalCost = weeklyPrice;
                }
            } else {
                priceElement.textContent = `${nightlyPrice}₹/night`;
                if (card === selectedCard) {
                    totalCost = nightlyPrice;
                }
            }
        });

        totalCostElement.textContent = totalCost;
    }

    toggle.addEventListener('change', updatePrices);

    document.querySelectorAll('.pricing-card .btn').forEach(button => {
        button.addEventListener('click', () => {
            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }

            selectedCard = button.closest('.pricing-card');
            selectedCard.classList.add('selected');
            updatePrices();
        });
    });

    
    updatePrices();
});
