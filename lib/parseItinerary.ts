export function parseItinerary(text: string) {

  const days = text.split(/Day\s*\d+/i).filter(Boolean);

  return days.map((dayText, index) => {

    const activities = dayText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return {
      day: index + 1,
      activities
    };

  });

}