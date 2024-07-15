import React from "react";
import Slider from "react-slick";
import "../styles/testimonials.css"; // Adjusted import path

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  
  return (
    <section id="testimonials"> {/* Added id="testimonials" */}
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight"> 3,000 individuals</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Without a doubt, this platform is great for people that want a companion by their side. There are some delays when speaking with an AI Therapist, but at least I can finally speak with one! I will continue to use this platform routinely for sure.
              </p>
              <div className="customer__details">
                <div>
                  <h5 className="customer__name">Nidhi</h5>
                  <p className="description">User</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                You know, I have always been hesitant to try out therapy involving AI. Surprisingly, this platform has helped me out quite a bit. I love it! Can't wait to see more advancements. The best part is that the therapist actually remembers what I say.
              </p>
              <div className="customer__details">
                <div>
                  <h5 className="customer__name">Sophia</h5>
                  <p className="description">User</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Absolutely, this platform has been a blessing for my son after everything he's been through. He finally has someone to talk to (someone he's not embarrassed to talk to)! I'd suggest parents consider using it, for themselves or their kids.
              </p>
              <div className="customer__details">
                <div>
                  <h5 className="customer__name">Neila</h5>
                  <p className="description">Mom</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
