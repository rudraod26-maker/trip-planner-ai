export function calculateBudget(days: number) {

  const travelCost = 1800;
  const hotelPerNight = 1500;
  const foodPerDay = 400;
  const localTransportPerDay = 200;

  const hotelCost = hotelPerNight * (days - 1);
  const foodCost = foodPerDay * days;
  const transportCost = localTransportPerDay * days;

  const total =
    travelCost +
    hotelCost +
    foodCost +
    transportCost;

  return {
    travelCost,
    hotelCost,
    foodCost,
    transportCost,
    total
  };
}