const fetchEvent = async (query, input) => {
  let fetchCall =
    query === "artist"
      ? `https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=${input}`
      : `https://app.ticketmaster.com/discovery/v2/events?apikey=B508AYsHRiO6ZiYuGWNLrIqaZNmjpZuG&locale=*&city=${input}&classificationName=music`;
  try {
    const response = await fetch(fetchCall);
    const json = await response.json();
    console.log(json);
    
    return json;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { fetchEvent };
