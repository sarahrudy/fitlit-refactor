export const fetchApiData = (type) => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => console.log("API error"))
};


  // return fetch(`http://localhost:3001/api/v1/${type}`, {
  //   method: 'POST',
  //   body: JSON.stringify(body),
  //   headers: {
  //     'Content-type': 'application/json'
  //   }
  // })
