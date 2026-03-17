import Image from "next/image";
import BgBall from "../shared/BgBall";
import Heading from "../shared/Heading";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className=" py-25 min-h-screen relative px-5 bg-linear-to-b from-background from-30% to-card"
    >
      <div className="container mx-auto">
        <BgBall />

        <Heading text="معرض أعمالنا" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-5 ">
          {/* left */}
          <div className="z-10 space-y-5">
            <div className="relative group">
              <Image
                src="/images/img-11.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">
                    تصميم لاندسكيب
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/images/img-12.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">مشاريع عامة</h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/images/img-13.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">
                    تنسيق زهور ونباتات
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* center (bigger) */}
          <div className="z-10 space-y-5">
            <div className="relative group">
              <Image
                src="/images/img-10.jpg"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[480px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">حدائق فلل</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="relative group">
                <Image
                  src="/images/img-14.webp"
                  alt="asd"
                  width={1000}
                  height={1000}
                  className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-2xl font-bold text-white">
                      صيانة لاندسكيب
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/img-15.webp"
                  alt="asd"
                  width={1000}
                  height={1000}
                  className="w-full h-full md:h-[230px] object-cover rounded-md shadow-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-2xl font-bold text-white">
                      نوافير وشلالات
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="z-10 space-y-5">
            <div className="relative group">
              <Image
                src="/images/img-17.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">
                    تركيب أنظمة ري حديثة
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/images/img-18.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">
                    استشارات هندسية
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/images/img-19.webp"
                alt="asd"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-[230px] object-cover rounded-md shadow-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white">
                    مشاريع سكنية خاصة
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href={"/projects"}
            className={buttonVariants({ className: "p-5" })}
          >
            عرض المزيد من مشاريعنا
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
