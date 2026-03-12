import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-[url(/images/banner.png)]
    bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-linear-to-l from-black/60 to-transparent">
        <div className="container mx-auto h-full px-5">
          <div className="h-full flex items-center justify-start  text-white">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-8xl py-5 font-bold text-gradient">
                روضة الرياض
              </h1>
              <p className="text-3xl sm:text-4xl md:text-6xl max-w-2xl font-semibold">
                لاندسكيب متميز في المملكة العربية السعودية
              </p>
              <p className="text-xl sm:text-2xl md:text-4xl max-w-xl text-(--beige) mt-5">
                نحن شركة رائدة و متخصصه في تصميم و تنفيذ و صيانة الحدائق و
                المساحات الخضراء
              </p>

              <div className="mt-5 flex items-center justify-start gap-3">
                <Link
                  href="#contact"
                  className={buttonVariants({
                    className: "rounded-md p-5 font-bold",
                  })}
                >
                  اطلب استشارة
                </Link>
                <Link
                  href="#gallery"
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "rounded-md p-5 bg-(--beige)  text-primary font-bold",
                  })}
                >
                  معرض اعمالنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
