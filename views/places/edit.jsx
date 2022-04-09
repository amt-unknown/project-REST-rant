const React = require('react');
const Default = require('../default');

function edit_form ({place}) {
    // console.log(data)
    return(
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="name">Place Name</label>
                            <input 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.name}
                                required 
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="pic">Place Picture</label>
                            <input 
                                className="form-control"  
                                id="pic" 
                                name="pic" 
                                value={place.pic}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="city">City</label>
                            <input 
                                className="form-control" 
                                id="city" 
                                name="city" 
                                value={place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="state">State</label>
                            <input 
                                className="form-control" 
                                id="state" 
                                name="state" 
                                value={place.state}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="founded">Founded</label>
                            <input 
                                type="number"
                                className="form-control"
                                id="founded"
                                name="founded"
                                value={place.founded}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input 
                            className="form-control" 
                            id="cuisines" 
                            name="cuisines" 
                            required
                            value={place.cusines}
                        />
                    </div>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                    <br/>
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form