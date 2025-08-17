const createSeatPlan = (totalSeats, rowNumbers, seatsInRow, ticketPrice) => {
  let seatNumber = 0;
  // creatin a array for seats
  const seatsAvailable = Array.from({ length: totalSeats }, (_, i) => {
    let seatRow = Math.floor(i / seatsInRow); //in each row number of seats so that we can decide row number if its a b c.
    seatNumber = seatNumber < seatsInRow ? seatNumber + 1 : 1; // to decide number of seat after A-10 it should be B-1
    
    let price
    switch(rowNumbers[seatRow]){
      case "GOLD":
        price = ticketPrice[0];
        break;
      case "SILVER":
        price = ticketPrice[1];
        break;
      case "A":
        price = ticketPrice[2];
        break;
      default:
        price = ticketPrice[3]
    }

    return { seats: `${rowNumbers[seatRow]}-${seatNumber}`, available: true, price: price};
  });

  return seatsAvailable;
};

export default createSeatPlan;