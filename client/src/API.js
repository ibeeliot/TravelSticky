// Export your API functions by building them here
// define your API_URL variable and set it to your localhost:1337/travel-log
const API_URL = "http://localhost:1337";

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}
