// Export your API functions by building them here
// define your API_URL variable and set it to your localhost:1337/travel-log
const API_URL = "http://localhost:1337";

// this will fetch all logs of entries we have via the route /api/logs which we set up as the same route in our server
export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  console.log("This is all your log entries: ", "\n", response);
  return response.json();
}

// this will create POSTS to our logs of entry via the same /api/logs route but this time will create a body and the method will be post
export async function createLogEntry(entry) {
  const apiKey = entry.apiKey;
  //deletes this key entry because you don't want the body of the request to have the API key
  delete entry.apiKey;
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": apiKey
    },
    body: JSON.stringify(entry)
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }

  // AXIOS error
  // this is the syntax for throwing an error
  else {
    const error = new Error(json.message);
    error.response = json;
    throw error;
  }
}
