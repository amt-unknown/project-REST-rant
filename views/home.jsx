const React = require('react');
const Default = require('./default');

function home () {
    return (
    <Default>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" style={{width: 800}}/>
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Default>
    );
};

module.exports = home;