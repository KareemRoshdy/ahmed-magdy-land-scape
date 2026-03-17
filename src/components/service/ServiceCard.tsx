import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesListType } from "@/types";
import Image from "next/image";

interface ServiceCardProps {
  card: servicesListType;
}

export function ServiceCard({ card }: ServiceCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 z-10 bg-card/10 backdrop-blur-xl">
      <Image
        src={card.image}
        alt={card.title}
        width={500}
        height={500}
        className="mx-auto w-40 h-30 object-cover"
      />

      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary dark:text-white">
          {card.title}
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardFooter className="h-full">
        <div className="flex items-center justify-center gap-2 mx-auto">
          {card.images.map((img) => (
            <Image
              key={img.id}
              src={img.src}
              alt={card.title}
              width={500}
              height={500}
              className="mx-auto w-1/2 h-30 object-cover rounded-md"
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
