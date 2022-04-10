import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/projects/`

// export const create = async (project) => {
//   try {
//     const res = await fetch(BASE_URL, {
//       method: "POST",
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${tokenService.getToken()}`
//       },
//       body: JSON.stringify(project),
//     })
//     return await res.json()
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }

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

// get all projects into state
function getAll() {
  try {
    return fetch(BASE_URL)
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

// get one project
function getOne(id) {
  try {
    return fetch(`${BASE_URL}${id}`)
    .then(res => res.json())
  } catch (error) {
    throw error
  }
}

export {
  getAll,
  create,
  getOne,

}