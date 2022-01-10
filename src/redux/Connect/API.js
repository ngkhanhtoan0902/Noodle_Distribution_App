const dbURL = "https://reactnativedatabase-a5682-default-rtdb.firebaseio.com";

export const getNoodle = () => {

    return fetch(dbURL)
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
    };
