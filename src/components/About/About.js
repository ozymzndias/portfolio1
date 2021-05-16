import React from 'react'
import './About.css'
import sassy from '../../images/sassy.png'

export default function About() {
    return (
        <div id="ABOUT" className="About">
            <div className="Heading">
              <h1>ABOUT</h1>
              <div className="HeadingBar"></div>
            </div>   
            <div className="Flex-Container">
              <div className="Containers">
                <div className="Tach">
                    <i class="fas fa-shipping-fast fa-5x"></i>
                    <h1>Fast</h1>
                    <p>Quick turnaround and interaction.</p>
                </div>
                <div className="Reliable">
                    <i class="far fa-handshake fa-5x"></i>
                    <h1>Reliable</h1>
                    <p>Able to accomodate to your needs.</p>
                </div>
                <div className="Intuitive">
                    <i class="fas fa-pencil-ruler fa-5x"></i>
                    <h1>Intuitive</h1>
                    <p>Strong passion for graphics and design.</p>
                </div>
                <div className="Dynamic">
                    <i class="fas fa-magic fa-5x"></i>
                    <h1>Dynamic</h1>
                    <p>Websites don't have to be uniform,<br></br> I love making pages that stand out.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="AboutWrapper">
                <div className ="AboutLeft">
                  
                  <div className="Me">
                    <div className="img">
                      <img src={sassy} height={200}></img>
                    <div className="MyText">
                      <h1>Who is Adam Silc?</h1>
                      <p>I'm currently a student at TrioS college. I have a<br></br> strong passion for design/creativity, and<br></br> bringing a unique user experience.</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="AboutRight">
                  <div className= "BarFlexCss">
                    <div className="BarFillCss" style={{width:'75%'}}>
                      <div className="TagBoldCss">CSS</div>
                    </div>
                    <span>75%</span>
                  </div>
                  <div className= "BarFlexHtml">
                    <div className="BarFillHtml" style={{width:'75%'}}>
                      <div className="TagBoldHtml">HTML</div>
                    </div>
                    <span>75%</span>
                  </div>
                  <div className= "BarFlexJs">
                    <div className="BarFillJs" style={{width:'70%'}}>
                      <div className="TagBoldJs">JavaScript</div>
                    </div>
                    <span>70%</span>
                  </div>
                  <div className= "BarFlexReact">
                    <div className="BarFillReact" style={{width:'65%'}}>
                      <div className="TagBoldReact">React</div>
                    </div>
                    <span>65%</span>
                  </div>
                  <div className= "BarFlexC">
                    <div className="BarFillC" style={{width:'70%'}}>
                      <div className="TagBoldC">C#</div>
                    </div>
                    <span>70%</span>
                  </div>
                  <div className= "BarFlexSQL">
                    <div className="BarFillSQL" style={{width:'60%'}}>
                      <div className="TagBoldSQL">SQL</div>
                    </div>
                    <span>60%</span>
                  </div>
                  <div className= "BarFlexPS">
                    <div className="BarFillPS" style={{width:'80%'}}>
                      <div className="TagBoldPS">Photoshop</div>
                    </div>
                    <span>80%</span>
                  </div>
                  <div className= "BarFlexIS">
                    <div className="BarFillIS" style={{width:'85%'}}>
                      <div className="TagBoldIS">Illustrator</div>
                    </div>
                    <span>85%</span>
                  </div>
                  
                  
                </div>
              </div>
            </div>




        </div>
    )
}
