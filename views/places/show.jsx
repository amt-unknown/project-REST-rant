const React = require('react')
const comment = require('../../models/comment')
const Default = require('../default')

function show ({place}) {
    let comments = (
        <h3 className='inactive'>
            No Comments yet!
        </h3>
    )
    if (place.comments.length) {
        comments = place.comments.map(comment => {
        return (
            <div className="col-sm-12">
            <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{comment.content}</h4>
            <h3>
                <stong>- {comment.author}</stong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            </div>
        )
        })
    }
    return(
        <Default>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={place.pic} alt={place.name}/>
                        <h3>
                            Located in {place.city}, {place.state}
                        </h3> 
                    </div>
                    <div className="col-sm-6">
                        <h1>{place.name}</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                        </div>
                        <div>
                            <h2>Desciption</h2>
                            <h3>
                                {place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {place.cuisines}
                            </h4>
                        </div>
                        <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                    <hr />
                    <div className="row">
                        <h2><br/>Comments</h2>
                        {comments}
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = show