import { SERVICES_LIST } from "@/constants";
import Heading from "../shared/Heading";
import { ServiceCard } from "./ServiceCard";
import BgBall from "../shared/BgBall";

const Services = () => {
  return (
    <section
      id="services"
      className="container mx-auto py-25 min-h-screen relative px-5"
    >
      <BgBall />

      <Heading text="خدماتنا" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {SERVICES_LIST.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Services;
