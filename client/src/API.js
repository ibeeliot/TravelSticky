// Export your API functions by building them here
// define your API_URL variable and set it to your localhost:1337/travel-log
const API_URL = "http://localhost:1337";

// this will fetch all logs of entries we have via the route /api/logs which we set up as the same route in our server
export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

// this will create POSTS to our logs of entry via the same /api/logs route but this time will create a body and the method will be post
export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  });
  return response.json();
}
