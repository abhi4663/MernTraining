import React from 'react'
import './book.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
function Slider() {
    return (
        <>
            <Carousel className="Sliders">
                <Carousel.Item>
                    <img
                        className="d-block w-100 Sliders"
                        src="https://quotefancy.com/media/wallpaper/3840x2160/15478-Margaret-Fuller-Quote-Today-a-reader-tomorrow-a-leader.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Sliders"
                        src="https://th.bing.com/th/id/R836aa9257954fc1de27b90fc25df51b8?rik=ClNstx0XUlMwyw&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f94%2f19%2f2xNTgM.jpg&ehk=ar3v6FZXRdxz3NxvWpIv681s79urpbPY8qrk4y7yxVg%3d&risl=&pid=ImgRaw" alt="First slide"

                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Sliders"
                        src="https://th.bing.com/th/id/R7a08a4cb16da7d9e9bbab997c2996d46?rik=Xo7vdrvBiGLBlg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1850848.jpg&ehk=MumeKZo4HUB3n%2bgp71lccbC1hnfuWPbQdYUkpkjMKZU%3d&risl=&pid=ImgRaw"

                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>


    )
}

export default Slider


