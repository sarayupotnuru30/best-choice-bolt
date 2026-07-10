import { HeroSlider } from '../components/home/HeroSlider';
import { Categories } from '../components/home/Categories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Brands } from '../components/home/Brands';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { StoreLocation } from '../components/home/StoreLocation';

export function Home() {
  return (
    <>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <Brands />
      <WhyChooseUs />
      <StoreLocation />
    </>
  );
}
