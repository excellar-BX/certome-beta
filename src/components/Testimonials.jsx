import React, { useRef, useState } from 'react'
import './Testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BiLeftArrowAlt, BiRightArrowAlt, BiSolidStar, BiStar } from 'react-icons/bi'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Testimonials = () => {

    const Data = [
        { name: "Abisayo FA", role: "Lead Developer", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Software Developer", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Project Manager", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Senior Developer", pic: 'imgIcon.jpg' }]
    const [active, setActive] = useState()
    return (
        <div>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                breakpoints={{
        300:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3},
                }}
                onSlideChange={(cur) => setActive(cur.realIndex)}
                loop={true}
                speed={800}
                autoplay={{ delay: 3000, }}
                pagination={{ el: 'pagination', clickable: true }}
                navigation={{
                    nextEl: "next-btn",
                    prevEl: "prev-btn",
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]} >
                {Data.map((data, index) => (
                    <SwiperSlide>
                        <div className={`shadow-xl ${active === index ? 'scale-100' : 'scale-75'} my-10 rounded-xl bg-[#fafafa] py-10 px-5 h-[400px] w-[450px] `} >
                            <div className='flex itemx-center my-5 ' >
                                <div className='w-16  mx-2 ' ><img className='rounded-full' src={data.pic} alt="" /></div>
                                <div>
                                    <p className='font-MontserratBold text-xl' >{data.name}</p>
                                    <div className='flex text-xl justify-between items-center' >
                                        <p className='text-lg' >{data.role}</p>
                                        <div className='flex text-web-orange-600 mx-4 '><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiStar /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center' >
                                <p className="font-MontserratBold text-2xl my-2 ">It was a very good experience</p>
                                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias itaque, saepe reprehenderit dignissimos voluptate omnis laboriosam consectetur, debitis, beatae ducimus fugiat impedit at velit. Iste expedita dicta cumque veniam impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis cum quis sit dolor numquam. Enim excepturi, reprehenderit laboriosam reiciendis porro iure! Magnam explicabo nostrum sunt consequatur dolore. Suscipit, dignissimos. </div>
                            </div>
                        </div>
                    </SwiperSlide>)

                )}

                <div className="arrows flex text-2xl justify-between mx-auto my-20 max-w-[500px] ">
                    <div className="prev-btn p-2 rounded-full bg-[grey] "><BiLeftArrowAlt /></div>
                    <div className="next-btn p-2 rounded-full bg-[grey] "><BiRightArrowAlt /></div>
                </div>
                <div className='pagination bg-primary w-3 ' ></div>

            </Swiper>
        </div>
    )
}

export default Testimonials
