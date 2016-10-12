const request = require('supertest')

describe('User entity requests', () => {
    // api/users
  describe('Given a request to get all existing users', () => {
    it('returns Unauthorized (401) if no JWT token is provided')
    it('returns Unauthorized (401) if an invalid JWT token is provided')
    it('returns Ok (200) with json array containing all existing users providing a valid request')
  })

    // api/users/:userName
  describe('Given a request to get a user by username', () => {
    it('returns Unauthorized (401) if no JWT token is provided')
    it('returns Unauthorized (401) if an invalid JWT token is provided')
    it('returns Not Found (404) providing invalid username')
    it('returns Ok (200) with json containing user providing a valid username')
  })
})
