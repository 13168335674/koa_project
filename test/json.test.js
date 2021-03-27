/*
 * @Author: ADI
 * @Date: 2021-03-21 12:30:13
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 12:33:17
 */
const server = require('./server')

test('json接口', async () => {
  const res = await server.get('/json');
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
  expect(res.body.title).toBe('koa2 json')
})