const API_URL = process.env.API_URL; 

async function fetchAPI(path) {
  const headers = { 'Content-Type': 'application/json' }

  console.log(API_URL); 

  // Call a remote api that saves scrapped Salla blg data
  const res = await fetch(`${API_URL}${path}`, {
    headers,
    method: 'GET',
  })
  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json; 
}

export async function getEvents() {
  const data = await fetchAPI('/events'); 
  console.log(data);
  
  return data; 
}
export async function getEventContentByPassingEventId(eventId) {
  const data = await fetchAPI(`/event/${eventId}`); 
  console.log(data);

  return data; 
}
export async function listallEvents() {
  const data = await fetchAPI(`/events`); 
  console.log(data);

  return data; 
}
