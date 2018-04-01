import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ex: 'ex',
      stories: [
        {
          location: 'Dhaka, Bangladesh',
          img: '1.png',
          description: "I always sat in the first row. I always had the highest rank in class. I wanted to be a teacher, just like my teachers. But when it was time to enroll in grade seven, my mother told me we couldn’t afford it. I cried and begged but she just stayed silent. My teachers were so sad that they offered to pay half of the tuition. But it wasn’t enough because we’d still have to pay for the books and exams. So my mother made me understand that school was not in my luck. I’m still seventeen, but now I’m married and I work as a maid for a family. I wash their clothes, wash their dishes, clean their bathroom. Their house is near a school. So every morning I have to watch the children walk by in their uniforms.",
          date: "Jan 28, 2018"
        },
        {
          location: 'Udaipur, India',
          img: '2.png',
          description: "My husband passed away when my children were very small. I taught myself handicrafts to survive, but it barely earned enough for us to eat. When my oldest son turned eighteen, I found him a wife. I was hoping that she’d help with the household. But she abandoned us after my granddaughter was born. I came home from work one day and found the child alone. I could only get her to stop crying by soaking an apple in goat’s milk. I’ve been raising her ever since that day. She calls me ‘mummy.’ With a lot of hardships I have made her grow. She survives on apples and milk. But I’m old. And when I’m gone, I don’t know who will take care of her.",
          date: "Jan 28, 2018"
        },
        {
          location: 'Udaipur, India',
          img: '3.png',
          description: "I want to be a police. I’ll find the robbers because they have handkerchiefs on their faces. I’ll tell them that it’s bad to steal. And to never steal again. Then I’ll hit them with a stick and their mom and dad will yell at them. And if they don’t listen, I’ll hit them with a stick again.",
          date: "Jan 28, 2018"
        },
        {
          location: 'Dhaka, Bangladesh',
          img: '1.png',
          description: "I always sat in the first row. I always had the highest rank in class. I wanted to be a teacher, just like my teachers. But when it was time to enroll in grade seven, my mother told me we couldn’t afford it. I cried and begged but she just stayed silent. My teachers were so sad that they offered to pay half of the tuition. But it wasn’t enough because we’d still have to pay for the books and exams. So my mother made me understand that school was not in my luck. I’m still seventeen, but now I’m married and I work as a maid for a family. I wash their clothes, wash their dishes, clean their bathroom. Their house is near a school. So every morning I have to watch the children walk by in their uniforms.",
          date: "Jan 28, 2018"
        },
        {
          location: 'Udaipur, India',
          img: '2.png',
          description: "My husband passed away when my children were very small. I taught myself handicrafts to survive, but it barely earned enough for us to eat. When my oldest son turned eighteen, I found him a wife. I was hoping that she’d help with the household. But she abandoned us after my granddaughter was born. I came home from work one day and found the child alone. I could only get her to stop crying by soaking an apple in goat’s milk. I’ve been raising her ever since that day. She calls me ‘mummy.’ With a lot of hardships I have made her grow. She survives on apples and milk. But I’m old. And when I’m gone, I don’t know who will take care of her.",
          date: "Jan 28, 2018"
        }
      ]
    }
  }

  render() {
    let stories = this.state.stories;

    return (
      <div className="container-fluid">

        <input type="checkbox"></input>

        <div className="container-nav">
          <ul className="about">
            <div>
              <ul>
                <li>Stories</li>
                <li>Countries</li>
                <li>Series</li> 
              </ul>
              <ul>
                <li><a href="https://www.facebook.com/humansofnewyork/" target="_blank">facebook</a></li>
                <li><a href="https://twitter.com/humansofny" target="_blank">twitter</a></li>
                <li><a href="https://www.instagram.com/humansofny/" target="_blank">instagram</a></li> 
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

          <div className="nav">
            <span>Humans of New York</span>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
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
              <a href="http://www.humansofnewyork.com/" target="_blank">go to the original</a>
              <a href="https://www.amazon.com/gp/product/1250058902/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250058902&linkCode=as2&tag=humofnewyor-20&linkId=PDCZMIXZETZP44D7" target="_blank">purchase the book</a>
            </div>
          </div>

          <div id="trigger" className="spacer s0"></div>

          <div className="container-story">
            {stories.map( (child, index) => 
              (
                <div id="target" key={index}>
                  <div>{'0' + (index + 1)}</div>
                  <div>{child.location}</div>
                  <div style={{background: `url(../images/${child.img}) center center no-repeat`, backgroundSize: 'cover'}}></div>
                  <div>{child.description}</div>
                  <div>{child.date}</div>
                </div>
              )
            )}
          </div>

          <div className="spacer s2"></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app')[0]);