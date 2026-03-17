import Heading from "../shared/Heading";
import BgBall from "../shared/BgBall";
import { ContactForm } from "./ContactForm";
import { Instagram, LocationEdit, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { RiSnapchatFill, RiTiktokFill, RiWhatsappLine } from "@remixicon/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-30 px-5 min-h-screen relative bg-linear-to-b from-background from-30% to-card"
    >
      <div className="container mx-auto">
        <BgBall />
        <Heading text="اتصل بنا" />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactForm />

          <div className="space-y-5 z-20">
            <div className="flex items-center gap-4">
              <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
                <LocationEdit />
                العنوان:
              </h3>
              <p className="text-sm">القاهرة, مصر</p>
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
                <PhoneCall />
                الهاتف:
              </h3>
              <p className="text-sm">123456789</p>
            </div>

            {/* <div className="flex items-center gap-1">
              <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
                <Mail />
                البريد الالكتروني:
              </h3>
              <p className="text-sm">info@ahmedmagdy.com</p>
            </div> */}

            <div className="flex items-center gap-4 ">
              <Link
                href={"#"}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <Instagram className="size-5 text-white" />
              </Link>

              <Link
                href={"#"}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <RiSnapchatFill className="size-5 text-white" />
              </Link>
              <Link
                href={"#"}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <RiTiktokFill className="size-5 text-white" />
              </Link>

              <Link
                href={"#"}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <RiWhatsappLine className="size-5 text-white" />
              </Link>
            </div>

            <div>
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855561.9997453657!2d48.14179559481173!3d24.72191789280174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1773348926047!5m2!1sar!2seg"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
