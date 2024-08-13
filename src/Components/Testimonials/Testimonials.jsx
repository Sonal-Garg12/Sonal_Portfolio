import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials=()=>{
  const clients = [
    {
      img: profilePic1,
      review: 
     "  The code delivered was clean, well-documented, and made our application easy to maintain and scale. The attention to detail throughout the development process was outstanding. !"
    },
    {
      img: profilePic2,
      review: 
     " The software developed was both reliable and efficient, meeting all deadlines without compromising on quality. The final product performed flawlessly  !"
    },
     {
      img: profilePic3,
      review: 
     " Challenges were quickly understood, and solutions provided were not only effective but also innovative. The ability to solve complex problems was impressive. "
    },
    {
      img: profilePic4,
      review: 
     " The initial concept was transformed into a fully functional application that exceeded expectations in terms of usability and performance.  !"
    },
  ]
  return(
<div className="t-wrapper" id='Testimonials'>
  <div className="t-heading">
  <span>Clients always get </span>
  <span>Exceptional Work </span>
  <span>from me...</span>
  </div>
  <div className='blur t-blur1' style={{background: "var(--purple"}}></div>
  <div className='blur t-blur2' style={{background: "skyblue"}}></div>
  {/**Slider */}
 <Swiper
 modules={[Pagination]}
 slidesPerView ={1}
 pagination={{clickable: true}}
 >
{clients.map((client, index)=>{
  return(
    <SwiperSlide key={index}>
      <div className="testimonial">
      <img src={client.img} alt=''/>
      <span>{client.review}</span>
      </div>
    </SwiperSlide>
  )
}

)}
 </Swiper>
</div>
  )
}
export default Testimonials