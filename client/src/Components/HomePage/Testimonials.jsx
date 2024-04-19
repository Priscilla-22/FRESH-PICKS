import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowLeft  from '../../shared/ArrowLeft';
import ArrowRight from '../../shared/ArrowRight';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,

      name: 'Simon Mwangi',
      title: 'CEO of Acme Inc.',
      quote:
        'Fresh Picks has completely changed the way I do grocery shopping. The produce is always fresh and the delivery is fast and reliable.',
    },
    {
      id: 2,
      name: 'Victor Muteithia',
      title: 'Marketing Manager',
      quote:
        'I love how easy it is to use Fresh Picks. The website is intuitive and the selection of products is impressive.',
    },
    {
      id: 3,
      name: 'Priscilla Wakahia',
      title: 'Software Engineer',
      quote:
        "I was skeptical at first, but Fresh Picks has won me over. The quality of the food is excellent and the convenience can't be beat.",
    },
    {
      id: 4,
      name: 'Philip Wekullo',
      title: 'Marketing Manager',
      quote:
        'I love how easy it is to use Fresh Picks. The website is intuitive and the selection of products is impress'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Customers Are Saying</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="text-gray-800 font-bold mb-2">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
