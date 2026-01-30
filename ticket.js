let selectedTicketPrice = 0;
let selectedTicketType = '';
let selectedSeats = [];
// チケットカード選択
document.querySelectorAll('.ticket-card').forEach(card => {
    card.addEventListener('click', function () {
        document.querySelectorAll('.ticket-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        selectedTicketPrice = parseInt(this.dataset.price);
        selectedTicketType = this.dataset.type;
        updateSummary();
    });
});
// 座席選択
document.querySelectorAll('.seat.available').forEach(seat => {
    seat.addEventListener('click', function () {
        const seatNumber = this.textContent;
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
        } else {
            this.classList.add('selected');
            selectedSeats.push(seatNumber);
        }
        updateSummary();
    });
});
function updateSummary() {
    // 選択中のチケット表示
    if (selectedTicketType) {
        document.getElementById('selectedTicket').innerHTML = `
            <div class="d-flex justify-content-between">
                <span>${selectedTicketType}</span>
                <span class="fw-bold">¥${selectedTicketPrice.toLocaleString()}</span>
            </div>
        `;
    }
    // 選択中の座席表示
    if (selectedSeats.length > 0) {
        document.getElementById('selectedSeats').innerHTML = `
            <div class="d-flex flex-wrap gap-2">
                ${selectedSeats.map(seat => `<span class="badge" style="background: var(--primary-color);">${seat}</span>`).join('')}
            </div>
        `;
    } else {
        document.getElementById('selectedSeats').innerHTML = '<span class="text-muted">座席を選択してください</span>';
    }
    // 料金計算
    const serviceFee = selectedTicketPrice > 0 ? Math.floor(selectedTicketPrice * 0.1) : 0;
    const total = selectedTicketPrice + serviceFee;
    document.getElementById('ticketPrice').textContent = `¥${selectedTicketPrice.toLocaleString()}`;
    document.getElementById('serviceFee').textContent = `¥${serviceFee.toLocaleString()}`;
    document.getElementById('totalPrice').textContent = `¥${total.toLocaleString()}`;
}