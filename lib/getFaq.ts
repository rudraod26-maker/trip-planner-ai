export function getFaq(title: string) {

const place = title
.replace(/ itinerary| travel guide/gi, "")
.trim();

return [

{
question: `What is the best time to visit ${place}?`,
answer: `${place} can usually be visited throughout the year, but the best season depends on the type of experience you want such as sightseeing, festivals or pleasant weather.`
},

{
question: `How many days are enough for ${place}?`,
answer: `Most travelers spend 2 to 4 days exploring ${place} depending on attractions, travel time and itinerary preferences.`
},

{
question: `Is ${place} expensive for tourists?`,
answer: `${place} can be explored on different budgets. Budget travelers can find affordable hotels and local transport options while luxury travelers have premium stays available.` 
},

{
question: `What are the top places to visit in ${place}?`,
answer: `${place} offers many attractions including temples, historical sites, scenic viewpoints and local markets.` 
}

];

}