import * as Sentry from '@sentry/react'

const sentryMiddleware = ({ getState, dispatch }) => next => action => {
	switch (action.type) {
		case '@@reactReduxFirebase/LOGIN':
			const { email } = action.auth

			Sentry.setContext('user', {
				email
			})
			break
		default:
			break
	}

	return next(action)
}

export default sentryMiddleware
