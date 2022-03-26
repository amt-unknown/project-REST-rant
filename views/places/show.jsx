const React = require('react')
const Default = require('../default')

function show (data) {
    return(
        <Default>
            <main>
                <h1>{data.place.name}</h1>
            </main>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
        </Default>
    )
}

module.exports = show