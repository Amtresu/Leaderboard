// API ID VSzCHRYor4u7idWhbImz

export const addItems = async (name, score) => {
  const userObj = {
    user: name.value,
    score: score.value
  }
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VSzCHRYor4u7idWhbImz/scores', {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.result
}

export const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VSzCHRYor4u7idWhbImz/scores').then((response) => response.json())
  return response.result
}
