/*
 * @Author: ADI
 * @Date: 2021-03-21 10:11:16
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 10:13:39
 */
const router = require('koa-router')()

router.get('/error', async(ctx, next) => {
  await ctx.render('error')
})

router.get('*', async(ctx, next) => {
  await ctx.render('404')
})

module.exports = router