import { Avatar, Image, Typography } from 'antd'
import { Link } from 'react-router-dom'

import './style.scss'

export const About = () => {
    return (
        <div className="about-str">
            <div className="about">
                <div className="about-left">
                <div className="image-stack">
                    <div className="image-stack__item image-stack__item--top">
                        <Image
                            className="img-about"
                            src="https://i.pinimg.com/originals/ca/b0/fc/cab0fcb462447c0e0b52773ead503ebc.jpg"
                        />
                    </div>
                    <div className="image-stack__item image-stack__item--bottom">
                        <Image
                            className="img-about" 
                            src="https://i.pinimg.com/474x/f5/2d/5e/f52d5e8fff59c5363417172dcab46c58.jpg"
                        />
                    </div>
                </div>
                </div>
                <div className="about-right">
                    <Typography className="content-title-about">
                        Grow Up Your Workflow Speed.
                    </Typography>
                    <Typography className="content-description-about">
                        Find everything you are looking for - phones, tablets, computers, watches and more.
                    </Typography>
                </div>
            </div>
            <div>
                <Typography className="title-about">
                    Grow Up Your Workflow Speed.
                </Typography>
                <Typography>
                    Find everything you are looking for - phones, tablets, computers, watches and more.
                </Typography>
                <div className="stictics-about-content">
                    <div className="col-uses-about">
                        <Typography className="number-about">
                            <Link to="/">
                                27,882
                            </Link>
                        </Typography>
                        <Typography>
                            Number of users
                        </Typography>
                    </div>
                    <div className="liked-about">
                        <Typography className="number-about">
                            <Link to="/">
                                90%
                            </Link>
                        </Typography>
                        <Typography >
                            Liked
                        </Typography>
                    </div>
                    <div className="number-of-orders-about">
                        <Typography className="number-about">
                            <Link to="/">
                                70,952
                            </Link>
                        </Typography>
                        <Typography>
                            Number of orders
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="our-work">
                <div className="our-work-info">
                    <div className="description-work-info">
                        <Typography className="title-our-work">
                            Our Work
                        </Typography>
                        <Typography className="desription-info">
                            We give the opportunity to touch and use what is really beautiful and useful. After all, technology has become a part of our lives.
                        </Typography>
                    </div>
                </div>
                <div className="img-our-info">
                    <Image 
                        src="https://miro.medium.com/max/1400/1*D4kTIjhVkhHlYO-yJBnZTw.png"
                    />
                </div>
            </div>
            <div className="our-member">
                <Typography>
                    Our member
                </Typography>
                <div className="info-member">
                    <div className="about-member">
                        <Avatar 
                            className="avatar-member"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src="https://i.pinimg.com/originals/a0/d3/23/a0d323cac69a70179f659e674bfed821.jpg"
                        />
                        <Typography className="name-member">
                            John Smith
                        </Typography>
                        <Typography className="text-about-member">
                            <Link to="/">
                                SEO EXPERT
                            </Link>
                        </Typography>
                    </div>
                    <div className="about-member">
                        <Avatar 
                            className="avatar-member"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b306be7b-ef3b-4813-8a1e-c009213d3e42/360"
                        />
                        <Typography className="name-member">
                            Amber Ares
                        </Typography>
                        <Typography className="text-about-member">
                            <Link to="/">
                                Business Analyst
                            </Link>
                        </Typography>
                    </div>
                    <div className="about-member">
                        <Avatar 
                            className="avatar-member"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src="https://i.pinimg.com/originals/c9/30/9b/c9309b10d07c8ff0daadb0913132bb78.jpg"
                        />
                        <Typography className="name-member">
                            Mark Wilson
                        </Typography>
                        <Typography className="text-about-member">
                            <Link to="/">
                                Back-end Developer
                            </Link>
                        </Typography>
                    </div>
                    <div className="about-member">
                        <Avatar 
                            className="avatar-member"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src="https://i.pinimg.com/474x/e3/4a/56/e34a56cf31397c3796485e75c1f7b9fc.jpg"
                        />
                        <Typography className="name-member">
                            Thomas Anderson
                        </Typography>
                        <Typography className="text-about-member">
                            <Link to="/">
                                Front-end Developer
                            </Link>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}