const fetchEvent = async (artistName) => {
  try {
    const response = await fetch(
      `https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=${artistName}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { fetchEvent };
