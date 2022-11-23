const fetchEvent = async (keyword, city) => {
  
  try {
    const response = await fetch(`https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=${keyword}&locale=*&city=${city}` );
    const json = await response.json();
    console.log(json);
    
    return json;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { fetchEvent };
