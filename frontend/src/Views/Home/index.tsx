import React, { useState, useEffect } from "react";
import { Banner } from "@/src/components/Banner";
import { Header } from "@/src/components/Header";
import {
  HomeContainer,
  Title,
  TabNavContainer,
  TabItem,
  Carousel,
  Slide,
  ButtonSlide,
  NextIcon,
  CarouselContainer,
  CarouselContent,
  ButtonWrapper,
  NextButton,
  PrevButton,
  ImageContainer,
  CarouselImage,
} from "./styles";
import { GrNext, GrPrevious } from "react-icons/gr";
import carsData from "@/public/api/cars.json";

export const Home = () => {
  const [tab, setTab] = useState("Todos");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const countCarsByType = () => {
    const count: { [key: string]: number } = {
      Todos: carsData.length,
      Suv: carsData.filter((car) => car.bodyType === "suv").length,
      Estate: carsData.filter((car) => car.bodyType === "estate").length,
    };
    return count;
  };

  const handleTabClick = (tab: string) => {
    setTab(tab);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide < maxSlides - 1) {
        return prevSlide + 1;
      } else {
        return 0; 
      }
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide > 0) {
        return prevSlide - 1;
      } else {
        return maxSlides - 1; 
      }
    });
  };

  useEffect(() => {
    if (tab === "Todos") {
      setFilteredCars(carsData);
    } else {
      const filtered = carsData.filter(
        (car) => car.bodyType === tab.toLowerCase()
      );
      setFilteredCars(filtered);
    }
    setCurrentSlide(0); 
  }, [tab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxSlides = isMobile
    ? filteredCars.length
    : Math.ceil(filteredCars.length / 4);
  const disablePrevButton = currentSlide === 0;
  const disableNextButton = currentSlide === maxSlides - 1;
  const shouldHideButtons = shouldHideButtonsMobile();

  function shouldHideButtonsMobile() {
    return isMobile && filteredCars.length < 2;
  }

  return (
    <>
      <Header />
      <Banner />
      <HomeContainer>
        <Title>Todos os modelos Recharge</Title>
        <TabNavContainer>
          {Object.keys(countCarsByType()).map((type) => (
            <TabItem
              key={type}
              active={type === tab}
              onClick={() => handleTabClick(type)}
              as="div"
            >
              {type} ({countCarsByType()[type]})
            </TabItem>
          ))}
        </TabNavContainer>
        <CarouselContainer>
          <CarouselContent>
            <Carousel currentSlide={currentSlide} isMobile={isMobile}>
              {filteredCars.map((car, index) => {
                const slideIndex = isMobile ? index : Math.floor(index / 4);
                return slideIndex === currentSlide ? (
                  <Slide key={car.id}>
                    <span>{car.bodyType}</span>
                    <p>
                      {car.modelName} <span>{car.modelType}</span>
                    </p>
                    <ImageContainer>
                      <CarouselImage src={car.imageUrl} alt={car.modelName} />
                    </ImageContainer>
                    <ButtonSlide>Conheça<NextIcon /></ButtonSlide>
                    <ButtonSlide>Comprar<NextIcon /></ButtonSlide>
                  </Slide>
                ) : null;
              })}
            </Carousel>
          </CarouselContent>
          {!shouldHideButtons && (
            <ButtonWrapper>
              <PrevButton onClick={handlePrevSlide} disabled={disablePrevButton}>
                <GrPrevious />
              </PrevButton>
              <NextButton onClick={handleNextSlide} disabled={disableNextButton}>
                <GrNext />
              </NextButton>
            </ButtonWrapper>
          )}
        </CarouselContainer>
      </HomeContainer>
    </>
  );
};
