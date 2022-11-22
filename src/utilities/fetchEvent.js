const fetchEvent = async (keyword, city) => {
  
  try {
    // const response = await fetch(`https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=${keyword}locale=*&city=${city}` );
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=B508AYsHRiO6ZiYuGWNLrIqaZNmjpZuG&locale=*&city=${city}&classificationName=music&keyword=${keyword}`);
    const json = await response.json();
    console.log(json);
    
    return json;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { fetchEvent };
