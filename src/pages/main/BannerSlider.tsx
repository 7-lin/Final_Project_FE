import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styled from "styled-components";

const BannerSlider = () => {
  const banners = ["banner0.png", "banner1.png", "banner2.png", "banner3.png"];

  const PrevArrow = (props: any) => {
    return <GoChevronLeft onClick={props.onClick} className="left-button" />;
  };

  const NextArrow = (props: any) => {
    return <GoChevronRight onClick={props.onClick} className="right-button" />;
  };

  const settings: any = {
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToscroll: 1,
    draggable: true,
    dots: true,
    dotsClass: "slick-dots",
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          color: "var(--color-blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        // breakpoints: 480,
      },
    ],
  };

  return (
    <SliderDiv>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner} className="container">
            <img src={`/${banner}`} />
            <div className="tags">
              <span>#시칠리아</span>
              <span>#5070</span>
              <span>#골프여행</span>
            </div>
            <div className="title">
              <span>시칠리아 5070 여행</span>
            </div>
          </div>
        ))}
      </Slider>
    </SliderDiv>
  );
};

const SliderDiv = styled.div`
  .container {
    position: relative;
  }

  .tags {
    display: flex;
    gap: 10px;
    position: absolute;
    color: white;
    text-align: center;
    display: flex;
    padding: 10px;
    top: 25%;
    background-color: #86868666;
    right: 50%;
    transform: translateX(50%);
    white-space: pre;
  }

  .title {
    font-size: 50px;
    position: absolute;
    top: 35%;
    display: flex;
    color: white;
    right: 50%;
    transform: translateX(50%);
    white-space: pre;

    span {
      background-color: #0d99ff66;
      padding: 10px 20px;
    }
  }

  img {
    width: 100%;
  }

  .left-button {
    position: absolute;
    align-items: center;
    width: 50px;
    height: 50px;
    top: 50%;
    z-index: 9;
    transform: translateY(-50%);
    color: white;
    cursor: pointer;
  }
  .right-button {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: white;
    cursor: pointer;
    transform: translateY;
  }

  .slick-dots ul {
    display: flex;
    gap: 1px;
  }

  .slick-dots li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
  }

  .slick-dots li button::before {
    border: none;
    background-color: var(--color-blue);
    color: transparent;
    cursor: pointer;
    display: block;
    border-radius: 100%;
    padding: 0;
    width: 12px;
    height: 12px;
  }

  .slick-dots li.slick-active button::before {
    background-color: var(--color-blue);
    width: 20px;
    margin-left: -5px;
    border-radius: 60px;
  }
`;

export default BannerSlider;