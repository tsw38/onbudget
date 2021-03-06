import { rest } from '@tsw38/otis'

import { getFixture, NAMES as FIXTURE_NAMES } from '../../get-fixture'

const handlers = [
  rest.post('/categories', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.categories)))
  ),
  rest.post('/addCategory', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.addCategory)))
  ),
  rest.post('/editCategory', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.editCategory)))
  ),
  rest.post('/transactions', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.transactions)))
  ),
  rest.post('/addTransaction', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.addTransaction)))
  ),
  rest.post('/transactionsByMonth', (req, res, ctx) =>
    res(ctx.json(getFixture(FIXTURE_NAMES.transactionsByMonth)))
  )
]

export default handlers
