import React from 'react'
import HomeSideImage from '../assets/imgs/home-side.png'

const Banner = () => {
  return (
    <div className="container">
        <div className="row align-items-center my-auto">
            <div className="col-lg-6 col-12">
                <div className="text-start my-4 my-lg-0">
                <h1 className="display-2 fw-semibold text-secondary">
                    Good Food's Good Mood
                </h1>
                <h4 className="text-light">Here's all you want everything.</h4>
                <p className="text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas distinctio delectus adipisci iusto, dignissimos beatae
                    nisi tempore iste veritatis eos, ab maiores consequuntur, amet
                    praesentium ipsa excepturi placeat obcaecati pariatur.
                </p>
                <button className="btn-secondary btn rounded-0">Order now</button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="right_side">
              <img src={HomeSideImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner