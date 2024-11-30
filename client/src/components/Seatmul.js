import React, { useState } from 'react';

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 250; // Example price per seat

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((s) => s !== seat); // Deselect seat
      } else {
        return [...prevSeats, seat]; // Select seat
      }
    });
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div>
      <h1>Select Your Seats</h1>
      <div>
        {Array.from({ length: 25 }, (_, index) => (
          <button
            key={index}
            onClick={() => toggleSeat(index)}
            style={{
              backgroundColor: selectedSeats.includes(index) ? 'green' : 'lightgray',
              margin: '5px',
              padding: '10px',
            }}
          >
            Seat {index + 1}
          </button>
        ))}
      </div>
      <h2>Total Price: ${totalPrice}</h2>
      <h3>Selected Seats: {selectedSeats.map(seat => seat + 1).join(', ')}</h3>
    </div>
  );
};

export default SeatSelector;
