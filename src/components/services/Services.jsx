import React from 'react'
import './services.css'
import { BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Ofter</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

            <ul className='service__list'>
               <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
            </ul>
        </article>

{/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

            <ul className='service__list'>
               <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
            </ul>
        </article>

        {/*WEB DEVELOOMENT */}

        
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

            <ul className='service__list'>
               <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>     
                <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit, amet consectetur  </p>
                </li>  
            </ul>
        </article>
          {/*END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services