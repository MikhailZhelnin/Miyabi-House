import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import Banner from "@/components/Banner/Banner";
import Specialties from "@/components/Specialties/Specialties";
import Testimonials from "@/components/Testimonials/Testimonials";

import {ISpecialtiesItem, ITestimonialsItem} from "../../models";
import {images} from "../../public/assets/images/images";

const specialtiesData: ISpecialtiesItem[] = [
  {
    id: 1,
    image: images.specialties.sushi,
    title: 'Sushi',
    varieties: 12,
  },
  {
    id: 2,
    image: images.specialties.ramen,
    title: 'Ramen',
    varieties: 8,
  },
  {
    id: 3,
    image: images.specialties.mochi,
    title: 'Mochi',
    varieties: 5,
  },
  {
    id: 4,
    image: images.specialties.onigiri,
    title: 'Onigiri',
    varieties: 5,
  },
]
const testimonialsData: ITestimonialsItem[] = [
  {
    id: 1,
    image: images.testimonials.first,
  },
  {
    id: 2,
    image: images.testimonials.second,
  },
  {
    id: 3,
    image: images.testimonials.third,
  },
]

export default function Home() {
  return (
    <Main meta={<Meta title="Miyabi House Home" description="Miyabi House home page"/>}>
      <Banner/>
      <Specialties specialties={specialtiesData}/>
      <Testimonials testimonials={testimonialsData}/>
    </Main>
  )
}
