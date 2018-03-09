import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="menu">
          <input type="checkbox"></input>
          <span>Humans of New York</span>
          <div>
            <div></div>
            <div></div>
          </div>

          <ul>
            <div>
              <ul>
                <li>Stories</li>
                <li>Countries</li>
                <li>Series</li> 
              </ul>
              <ul>
                <li><a href="https://www.facebook.com/humansofnewyork/">facebook</a></li>
                <li><a href="https://www.facebook.com/humansofnewyork/">twitter</a></li>
                <li><a href="https://www.facebook.com/humansofnewyork/">instagram</a></li> 
              </ul>
            </div>

            <div>
              <div>
                <div className="profilepic wes"></div>
                <p>The Web Developer</p>
                <p>Wesley Choi</p>
                <p>I like creating things that are useful beyond their visual appeal, and meaningful enough to make a genuine impact on people’s lives. When I’m not coding, I watch football, basketball, stand-up comedy, and youtube podcasts.</p>
                <p>Email</p>
                <p>weschoi.creative@gmail.com</p>
              </div>
              <div>
                <div className="profilepic brandon"></div>
                <p>The Creator</p>
                <p>Brandon Stanton</p>
                <p>Humans of New York began as a photography project in 2010.  The initial goal was to photograph 10,000 New Yorkers on the street, and create an exhaustive catalogue of the city’s inhabitants.</p>
                <p>Email</p>
                <p>honybrandon@gmail.com </p>
              </div>
            </div>
          </ul>


        </div>

        <div className="main">
          <div className="hero">

            <div className="names">
              <div>
                <div>Reimagined by</div>
                <div>Wesley Choi</div>
              </div>
              <div>
                <div>Inspired by</div>
                <div>Brandon Stanton</div>
              </div>
            </div>

            <div className="container-newyork">
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
              <span>New York</span>
            </div>

            <div className="statue"></div>
            <div className="arrow"></div>

            <div className="quote">
              <div>"I went to New York City to be born again."</div>
              <div>Kurt Vonnegut</div>
            </div>

            <div className="links">
              <a href="http://www.humansofnewyork.com/">go to the original</a>
              <a href="https://www.amazon.com/gp/product/1250058902/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250058902&linkCode=as2&tag=humofnewyor-20&linkId=PDCZMIXZETZP44D7" target="_blank">purchase the book</a>
            </div>

          </div>

          <div className="container-story">
            <div className="story">Story 1</div>
            <div className="story">Story 2</div>
            <div className="story">Story 3</div>
            <div className="story">Story 4</div>
            <div className="story">Story 5</div>
            <div className="story">Story 6</div>
            <div className="story">Story 7</div>
            <div className="story">Story 8</div>
            <div className="story">Story 9</div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app')[0]);