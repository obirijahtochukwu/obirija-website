import React from 'react';
import { FaCcVisa, FaSpeakerDeck, FaMagento, FaReact, FaDatabase, FaCss3Alt, FaArrowRight, FaQuoteLeft, FaPhone, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Content() {
  return (
    <article>
      <header  className='content container-fluid py-sm-4 p-md-5'>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 mx-auto">
            <p className="text-capitalize semi-color-1">obirijah tochukwu, a front-end web developer.</p>
            <h1>Specialized in creating sleek premium user interfaces with the help of  React.</h1>
            <h6 className='semi-color-2'>I'm currently a user interface designer and a front-end web developer with 2 years of experience, now i work in one agency in indonesia. My hubby is making explorations visual appearance is clean and easy to use.</h6>
            <a href="https://wa.me/+2349131772550" ><button className="phone-link px-3 py-2 my-3">let's talk <FaPhone/></button></a >
          </div>
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <img src="./banner.png" alt="" className="w-100 mx-auto" />
          </div>
        </div>
      </header>
      <main className="container py-4">
        <h5 className='mb-3'><small><i>Satisfied clients i have worked with.</i> </small></h5>
        <div className="d-flex justify-content-between align-items-center client-logo">
        <span>
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-success">o</span>
                <span className="text-primary">g</span>
                <span className="text-warning">l</span>
                <span className="text-danger">e</span>
              </span>
              <span>
                <FaCcVisa className='visa-icon'/> <span>Visa</span>
              </span>
              <span className=' d-none d-md-block'>
                <FaMagento className='mag-icon'/> <span>Magento</span>
              </span>
              <span>
                <FaSpeakerDeck id='services'  className='deck-icon'/> <span>Deck</span>
              </span>
        </div>
      </main>
      <article className='article'>
        <div className="container py-5">
          <h5 id='skills' className="text-uppercase text-center"><i>expertise</i></h5>
          <h1 className="text-center">The power of React. Put to work</h1>
          <div className="row mt-4">
            <div className="col-10 col-md-4 mb-4 mx-auto">
              <div className="article-card px-3">
                <div><FaReact style={{color: 'blue'}} className="icon my-4 p-2"/></div>
                <h5>Top-notch technologies</h5>
                <p className="text-white">I used top-notch technologies to create an exceptional online presence for your business</p>
              </div>
            </div>
            <div className="col-10 col-md-4 mx-auto mb-4">
              <div className="article-card mx-auto px-3">
                <div><FaCss3Alt style={{color: 'rgb(245, 201, 6)'}} className="icon my-4 p-2"/></div>
                <h5>Latest UI Library</h5>
                <p className="text-white">With the help of the latest UI Libraries, I make sure that your website looks modern and fresh.</p>
              </div>
            </div>
            <div className="col-10 col-md-4 mx-auto mb-4">
              <div className="article-card mx-auto px-3">
                <div><FaDatabase className="icon my-4 p-2"/></div>
                <h5>Architecture & Server</h5>
                <p className="text-white">Deep knowledge of software architecture and server technologies that make your website perfetly develop</p>
              </div>
            </div>
          </div>
          
        </div>
      </article>
      <main className='container-fluid bg-white'>
        <div className="row help py-5">
          <div className="col-12 col-md-4 col-lg-3 mx-auto mb-3">
            <h1 id='about' className='text-bold'>What do I help?</h1>
            <p>I will help you with finding a solution and solve your problems, we use process design to create digital products, besides that  i also help business grow and expand globally. </p>
            <h2 className="text-warning mb-0 pb-0">325+</h2>
            <small className='text-muted'>Project completed</small>
            <h2 className="text-warning mb-0 pb-0 mt-3">284+</h2>
            <small className='text-muted'>happy client</small>
          </div>
          <div className="col-12 col-md-8 col-lg-7 mx-auto mb-3">
            <div className="help-card py-4 px-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="./s4.jpg" alt="" style={{width: '8rem', height: '7rem'}} className='mx-3 img-border'/>
                  <div>
                    <h4 className="text-white">Website Design</h4>
                    <p className='text-muted'>42 Projects</p>
                  </div>
                </div>
                <FaArrowRight/>
              </div>
            </div>
            <div className="help-card py-4 px-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="./banner2.jpg" alt="" style={{width: '8rem'}} className='mx-3 img-border'/>
                  <div>
                    <h4 className="text-white">Mobile App Design</h4>
                    <p className='text-muted'>22 Projects</p>
                  </div>
                </div>
                <FaArrowRight/>
              </div>
            </div>
            <div className="help-card py-4 px-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="./b1.jpg" alt="" style={{width: '8rem'}} className='mx-3 img-border'/>
                  <div>
                    <h4 className="text-white">Dashboard</h4>
                    <p className='text-muted'>10 Projects</p>
                  </div>
                </div>
                <FaArrowRight/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <article style={{borderRadius: '0 0 50px 0'}} className='bg-white'>
        <div className="container">
          <div className="row py-4">
            <h1 id='works' className='col-11 mx-auto my-4'>Work hard, successful client product.</h1>
            <div className="col-11 col-md-5 col-lg-3 mx-auto mb-4">
              <div className="work-card mx-auto mb-3">
                <img src="./Screenshot (19).png" alt="" className="w-100" />
                <small className="text-muted">#Research #Development #Optimization</small>
                <h5><b>Task management</b></h5>
                <p>Take a look at how I used React to create a premium and smooth task managment website for VC-funded Stanford StartX-accelerated startup.</p>
                <a href='https://mern-todo-obj.netlify.app' className="card-link">View case study <FaArrowRight/></a>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-3 mx-auto mb-4 ">
              <div className="work-card mx-auto">
                <img src="./Screenshot (20).png" alt="" className="w-100" />
                <small className="text-muted">#Yoga #Development #OnlineClass</small>
                <h5><b>LUNATIX</b></h5>
                <p>See how I created a website that connects thousands of coaches around the world with students and help's students to learn yoga while at home.</p>
                <a href='https://lunatix.netlify.app' className="card-link">View case study <FaArrowRight/></a>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-3 mx-auto mb-4 ">
              <div className="work-card mx-auto">
                <img src="./Screenshot (22).png" alt="" className="w-100" />
                <small className="text-muted">#Design #Estate #Development</small>
                <h5><b>Arnowlogi estate</b></h5>
                <p>Check out how I helped develop the front-end of a real estate website that focuses on making their client's dream mansion come to through.</p>
                <a href='https://arnowlogi-estate.netlify.app' className="card-link">View case study <FaArrowRight/></a>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-3 mx-auto mb-4 ">
              <div className="work-card mx-auto">
                <img src="./Screenshot (23).png" alt="" className="w-100" />
                <small className="text-muted">#Ecommerce #Design #Optimization</small>
                <h5><b>JUMIA TRADE</b></h5>
                <p>See how i created a pixel-perfect landing page for an ecommerce company that sales and deliver's home accessories and electronics gadget.</p>
                <a href='https://ecommerce-obj.netlify.app' className="card-link">View case study <FaArrowRight/></a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <div className="d-flex justify-content-around align-items-center py-5 px-5">
                <div>
                  <q id='testmonials' style={{fontSize: '1.6rem'}}> <i>Tochukwu has been an awesome team member, very focused and hardworking. Always willing to learn and experiment with something new. Quick at finding solutions and very responsive.</i> </q >
                  <div className="d-flex align-items-center my-3">
                    <div className='img-round-border mx-3'>
                      <img src="./t1.jpg" alt="" style={{borderRadius: '50%'}} className='m-2' />
                    </div>
                    <div>
                      <p className='mb-0 pb-0'><b>Nicholas Gudumac</b></p>
                      <p className="text-muted">Founder & CTO at Planeable</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <main className='bg' style={{backgroundColor: 'rgb(3, 3, 146)', borderRadius: '0 50px 0 0'}}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-sm-11 col-md-10 mx-auto">
              <div className="d-flex align-item-center text-white">
                <img src="./A3.jpg" alt="" style={{width: '15rem', border: '0.5rem outset white'}} className='d-none d-md-block' />
                <div className='mx-3'>
                  <div className='d-flex'>
                    <sup>
                      <FaQuoteLeft style={{fontSize: '2rem'}} className='mx-3'/>
                    </sup>
                    <div>
                      <h2>Tochukwu is a professional designer, he really helps my business by providing value to my business.</h2>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div>
                      <p className='mb-0 pb-0'><b>James</b></p>
                      <p className="text-mmuted">CEO at Netflix</p>
                    </div>
                    <div>
                      <FaArrowRight/>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <article className='bg-white'>
        <div className="container py-5">
          <h1 id='contact' style={{color: 'rgb(24, 24, 153)'}} className="text-center">Interested in working with me?</h1>
          <h6 className="text-center text-bold my-3">Do you need a digital product? Yes I can help you. I have 7 years of work experience as UI/UX and Front-End Web designer.</h6>
          <div className="text-center"><a href="tel:+2349130420916" className="talk-btn px-4 py-1 my-2"> let's talk</a></div>
        </div>
      </article>
      <footer>
        <div className="container py-5">
          <div className="row">
            <h5 className='text-center'><b>FOLLOW ME</b></h5>
            <h2 className="text-center"><small>@</small></h2>
            <div className="col-12 col-md-5 mx-auto mt-2">
              <div className="d-flex align-items-center justify-content-between justify-content-md-around">
                <div className="text-center">
                  <a href="https://facebook.com/tobirijah.sixtus">
                    <div className='footer-icon'><FaFacebook/></div>
                    <b>Facebook</b>
                  </a>
                </div>
                <div className="text-center">
                  <a href="https://wa.me/+2349131772550">
                    <div className='footer-icon text-success'><FaWhatsapp/></div>
                    <b className='text-success'>Whatsapp</b>
                  </a>
                </div>
                <div className="text-center">
                  <a href="https://github.com/obirijahtochukwu">
                    <div className='footer-icon text-info'><FaGithub/></div>
                    <b className='text-info'>Github</b>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div> 
      </footer>
    </article>
  )
}
