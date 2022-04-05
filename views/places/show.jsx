const React = require('react')
const Default = require('../default')

function show (data) {
    return(
        <Default>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={data.place.pic} alt={data.place.name}/>
                        <h3>
                            Located {data.id} in {data.place.city}, {data.place.state}  and {data.place.id}
                        </h3> 
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                        </div>
                        <div>
                            <h2>Desciption</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {data.place.cuisines}
                            </h4>
                        </div>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                    <hl/>
                    <div className="row">
                        <h2><br/>Comments</h2>
                        <p>No comments yet!</p>
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = show