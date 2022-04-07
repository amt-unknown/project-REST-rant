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
            <div className="col-sm-12 rant-box">
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
                        <hr/>
                        <div className="rant-post-box">
                        <h1>Got Your Own Rant or Rave?</h1>
                        <form className="row g-3" method="POST" action={`/places/${place.id}/comment`}>
                            <div className="col-12">
                                <label htmlFor="content" className="form-label">Your Comment</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    id="content" 
                                    name="content" 
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="author" className="form-label">Your Name</label>
                                <input 
                                    className="form-control" 
                                    id="author" 
                                    name="author" 
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="stars" className="form-label">Stars</label>
                                <input 
                                    className="form-range"
                                    type="range"
                                    id="stars"
                                    name="stars"   
                                    min="1"
                                    max="5"
                                    step="0.5"
                                />
                            </div>
                            <div className="col-md-2">
                                <div className="form-check">
                                    <label class="form-check-label" htmlFor="rant" id="rant-checkbox">Rant?</label>
                                    <br/>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="rant"
                                        name="rant"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Add Comment" />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = show