import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section>
      <footer className="bg-card lg:grid lg:grid-cols-5 border-t ">
        <div className="relative block h-[330px] lg:col-span-2 lg:h-full">
          <Image
            width={1000}
            height={1000}
            src="/images/logo/main-logo.png"
            alt="img"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  اتصل بنا
                </span>

                <a
                  href="#"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
                >
                  0123456789
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>من الإثنين إلى الجمعة: 10 صباحًا - 5 مساءً</li>
                <li>عطلة نهاية الأسبوع: 10 صباحًا - 3 مساءً</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  الخدمات
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تصميم وتنسيق الحدائق الخارجية
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      زراعة الحدائق والمساحات الخضراء
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تنسيق داخلي للفيلات (Indoor Landscaping)
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تنفيذ الحدائق الداخلية (نباتات داخلية وديكور نباتي)
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تركيب جدران خضراء (Green Walls)
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تركيب النوافير والشلالات الداخلية والخارجية
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      تصميم وتنفيذ أنظمة الري الحديثة
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      إدارة وتنفيذ المناقصات
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      توريد وتركيب العشب الطبيعي والصناعي
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 dark:text-gray-200">
                      صيانة الحدائق بشكل دوري
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  الشركة
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <p className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 cursor-default">
                      من نحن
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 cursor-default">
                      فريق العمل
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 cursor-default">
                      مراجعة الحسابات
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                  >
                    الشروط والأحكام
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                  >
                    سياسة الخصوصية
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                  >
                    سياسة ملفات تعريف الارتباط
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
                © {year} جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
