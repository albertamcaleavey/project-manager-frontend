import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/projects/`

function create(project) {
  try {
    return fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(project),
    })
    .then(res => res.json())
  } catch (error) {
    console.log(error)
    throw error
  }
}

function getAll() {
  try {
    return fetch(BASE_URL)
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

function getOne(id) {
  try {
    return fetch(`${BASE_URL}${id}`)
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

function addTask(id, data){
  try {
    return fetch(`${BASE_URL}${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

function deleteOne(id){
  try {
    return fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

export {
  create,
  getAll,
  getOne, 
  addTask,
  deleteOne
}