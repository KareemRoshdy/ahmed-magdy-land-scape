import { NavLinkType, servicesListType } from "@/types";

export const NAV_LINKS: NavLinkType[] = [
  { name: "الرئيسية", href: "/" },
  { name: "خدماتنا", href: "#services" },
  { name: "المعرض", href: "#gallery" },
  { name: "من نحن", href: "#about" },
  { name: "اتصل بنا", href: "#contact" },
];

export const SERVICES_LIST: servicesListType[] = [
  {
    id: 1,
    image: "/images/icon-09.png",
    title: "صيانة اللاندسكيب",
    description:
      "صيانة حديقة فيلا في الرياض: خدمات صيانة شاملة للحفاظ على جمال الحديقة وحيويتها",
    images: [
      {
        id: 1,
        src: "/images/img-01.png",
      },
      { id: 2, src: "/images/img-02.png" },
    ],
  },
  {
    id: 2,
    image: "/images/icon-01.png",
    title: "المشاريع العامة",
    description:
      "متنزه واسع يتميز بمساحات خضراء وممرات للمشي. مساحات خضراء على طول الكورنيش تتميز بأشجار النخيل والزهور.",
    images: [
      {
        id: 3,
        src: "/images/img-03.png",
      },
      {
        id: 4,
        src: "/images/img-04.png",
      },
    ],
  },
  {
    id: 3,
    image: "/images/icon-08.png",
    title: "تصميم اللاندسكيب",
    description:
      "تصميم حديقة فيلا في الرياض: تصميم مبتكر يجمع بين العصرية والتقليدية",
    images: [
      {
        id: 5,
        src: "/images/img-05.png",
      },
      {
        id: 6,
        src: "/images/img-06.png",
      },
    ],
  },
  {
    id: 4,
    image: "/images/icon-07.png",
    title: "استشارات اللاندسكيب",
    description:
      "التخطيط الذكي: دراسة المساحات المتوفرة وكيفية استغلالها بأفضل شكل ممكن لتحقيق التوازن بين الجمال والوظيفة.",
    images: [
      {
        id: 7,
        src: "/images/img-07.png",
      },
      {
        id: 8,
        src: "/images/img-08.png",
      },
    ],
  },
  {
    id: 5,
    image: "/images/icon-03.png",
    title: "تنسيق الزهور والنباتات",
    description:
      "تنسيق زهور ونباتات في حديقة مجمع سكني بالدمام: اختيار وتنسيق الزهور والنباتات المناسبة لكل مساحة.",
    images: [
      {
        id: 9,
        src: "/images/img-19.webp",
      },
      {
        id: 10,
        src: "/images/img-10.jpg",
      },
    ],
  },
  {
    id: 6,
    image: "/images/icon-02.png",
    title: "تركيب أنظمة الري",
    description:
      "تركيب نظام ري في حديقة مجمع سكني بالدمام: نظام ري فعال يضمن توفير المياه ونمو النباتات بشكل صحي.",
    images: [
      {
        id: 11,
        src: "/images/img-11.webp",
      },
      {
        id: 12,
        src: "/images/img-12.webp",
      },
    ],
  },
  {
    id: 7,
    image: "/images/icon-04.png",
    title: "صيانة اللاندسكيب",
    description:
      "صيانة حديقة فيلا في الرياض: خدمات صيانة شاملة للحفاظ على جمال الحديقة وحيويتها",
    images: [
      {
        id: 13,
        src: "/images/img-13.webp",
      },
      {
        id: 15,
        src: "/images/img-14.webp",
      },
    ],
  },
  {
    id: 8,
    image: "/images/icon-05.png",
    title: "المشاريع العامة",
    description:
      "متنزه واسع يتميز بمساحات خضراء وممرات للمشي. مساحات خضراء على طول الكورنيش تتميز بأشجار النخيل والزهور.",
    images: [
      {
        id: 16,
        src: "/images/img-15.webp",
      },
      {
        id: 17,
        src: "/images/img-16.jpeg",
      },
    ],
  },
];
