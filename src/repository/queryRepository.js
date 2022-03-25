const queries = {}

function registerQuery(query) {
    const userQueries = queries[query.userEmail] || []
    userQueries.push(query)
    queries[query.userEmail] = userQueries
}

function getQueries(userEmail) {
    const foundQueries = userEmail ? queries[userEmail] : Object.values(queries)
    return foundQueries
}

module.exports = {
    registerQuery,
    getQueries,
}
