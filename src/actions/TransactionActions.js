import { TRANSACTIONS, TRANSACTION, STATEMENT } from 'state/AppReducer'

export const fetchTransactions = () => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  return api({
    dispatch,
    getState,
    getFirebase,
    path: 'transactions'
  }).then(({ transactions } = {}) => {
    dispatch({
      type: `${TRANSACTIONS}_SUCCESS`,
      payload: transactions
    })

    return transactions
  })
}

export const fetchTransactionsByMonth = month => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  dispatch({
    type: `${TRANSACTIONS}_BY_MONTH_PENDING`
  })

  return api({
    dispatch,
    getState,
    getFirebase,
    body: month.getTime(),
    path: 'transactionsByMonth'
  }).then(({ transactionsByMonth }) => {
    dispatch({
      type: `${TRANSACTIONS}_BY_MONTH_SUCCESS`,
      payload: transactionsByMonth
    })
  })
}

export const addTransactionAction = body => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  dispatch({
    type: `ADD_${TRANSACTIONS}_PENDING`
  })

  return api({
    body: {
      ...body,
      amount: Number(body.amount),
      date: new Date(body.date).getTime() || 0
    },
    dispatch,
    getState,
    getFirebase,
    path: 'addTransaction'
  }).then(({ addTransaction }) => {
    dispatch({
      type: `ADD_${TRANSACTIONS}_SUCCESS`,
      payload: addTransaction
    })

    return addTransaction
  })
}

export const editTransactionAction = body => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  dispatch({
    type: `EDIT_${TRANSACTION}_PENDING`
  })

  return api({
    body: {
      ...body,
      amount: Number(body.amount),
      date: new Date(body.date).getTime() || 0
    },
    dispatch,
    getState,
    getFirebase,
    path: 'editTransaction'
  }).then(({ editTransaction }) => {
    dispatch({
      type: `EDIT_${TRANSACTION}_SUCCESS`,
      payload: editTransaction
    })

    return editTransaction
  })
}

export const clearReduxState = () => dispatch => {
  dispatch({
    type: `UNSET_MODIFY_${TRANSACTION}_MODAL`
  })
}

export const deleteTransactionAction = transactionId => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  dispatch({
    type: `DELETE_${TRANSACTION}_PENDING`
  })

  return api({
    body: { transactionId },
    dispatch,
    getState,
    getFirebase,
    path: 'deleteTransaction'
  }).then(({ deleteTransaction }) => {
    dispatch({
      type: `DELETE_${TRANSACTION}_SUCCESS`,
      payload: transactionId
    })

    return deleteTransaction
  })
}

export const importStatementAction = body => async (
  dispatch,
  getState,
  { getFirebase, api }
) => {
  dispatch({
    type: `IMPORT_${STATEMENT}_PENDING`
  })

  return api({
    body,
    dispatch,
    getState,
    getFirebase,
    path: 'importStatement'
  }).then(({ importStatement } = {}) => {
    dispatch({
      type: `IMPORT_${STATEMENT}_SUCCESS`,
      payload: importStatement
    })

    return importStatement
  })
}
