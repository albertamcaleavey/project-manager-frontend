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

export const create = project => {
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

// get projects into state