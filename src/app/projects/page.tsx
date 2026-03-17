import BgBall from "@/components/shared/BgBall";
import Heading from "@/components/shared/Heading";
import ProjectCards from "./_components/ProjectCards";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مشاريعنا | روضة الرياض",
  description:
    "استعرض أبرز مشاريع روضة الرياض في تنسيق الحدائق واللاندسكيب، من تصميم حدائق الفلل إلى تنفيذ النوافير والشلالات بأعلى جودة.",
  keywords: [
    "مشاريع تنسيق حدائق",
    "أعمال لاندسكيب",
    "تصميم حدائق فلل",
    "نوافير وشلالات",
    "روضة الرياض مشاريع",
  ],
  openGraph: {
    title: "مشاريع روضة الرياض لتنسيق الحدائق",
    description:
      "شاهد أحدث مشاريعنا في اللاندسكيب وتنسيق الحدائق بأفكار عصرية وتنفيذ احترافي.",
    url: "https://kareem-landscap.vercel.app/",
    images: [
      {
        url: "/images/img-01.png",
        width: 1200,
        height: 630,
        alt: "مشاريع روضة الرياض",
      },
    ],
  },
};

const ProjectsPage = () => {
  return (
    <div className="py-25 min-h-screen relative px-5 overflow-x-hidden">
      <div className="container mx-auto">
        <BgBall />
        <Heading text="بعض من مشاريعنا" />

        <ProjectCards />
      </div>
    </div>
  );
};

export default ProjectsPage;
