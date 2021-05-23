import request from '@/utils/request'
// POST /jwt/login
export function login(username, password) {
  return request({
    url: '/api/jwt/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

// GET /jwt/getUserName
export function getInfo(token) {
  console.log(token)
  return request({
    url: '/api/jwt/getUserName',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
