import './Carousel.css';
import { DotButton, useDotButton } from './CarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = (props) => {
  const { burgers, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {burgers.map((burger) => (
            <div className="embla__slide" key={burger.id}>
              <img className="embla__slide__imgs" src={burger.imgUrl} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
