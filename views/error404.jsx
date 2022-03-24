const React = require('react');
const Default = require('./default')

function error404 () {
    return( 
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img src='http://placekitten.com/250/250' alt="Chia Fruit Shake" style={{width: 800}}/>
                <div>
                    Photo by <a href="https://flickr.com/photos/bigtallguy/">BigTallGuy</a> license: <a href="https://creativecommons.org/licenses/by/2.0/">license:</a> on <a href="placekitten.com/250/250">Place Kitten</a>
                </div>
            </div>
            </main>
        </Default>
    );
};

module.exports = error404;