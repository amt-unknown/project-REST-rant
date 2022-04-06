const React = require('react')
const Default = require('../default')
const new_form = require('./new')

function comment_form(){
    return(
        <Default>
            <main>
                <h1>Comment on Place</h1>
                <form class="row g-3" method="POST" action="/places/:id">
                    <div className="col-md-6">
                        <label htmlFor="author" className="form-label">Your Name</label>
                        <input 
                            className="form-control" 
                            id="author" 
                            name="author" 
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="stars" className="form-label">Stars</label>
                        <select id="stars" className="form-select">
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="content" className="form-label">Your Comment</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="content" 
                            name="content" 
                        />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rant"
                                name="rating"
                            />
                            <label class="form-check-label" htmlFor="rant">Rant?</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Add Comment" />
                    </div>
                </form>
            </main>
        </Default>
    )
}

module.exports = comment_form