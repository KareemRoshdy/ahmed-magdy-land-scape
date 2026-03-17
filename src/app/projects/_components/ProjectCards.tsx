"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS_IMAGES, PROJECTS_VIDEOS } from "@/constants";
import Image from "next/image";
import { Activity, useEffect, useState } from "react";

const ProjectCards = () => {
  const ITEMS_PER_PAGE = 10;

  const [page, setPage] = useState(1);
  const [tag, setTag] = useState<"images" | "videos">("images");

  const visibleProjects = PROJECTS_IMAGES.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const visibleProjectsVideos = PROJECTS_VIDEOS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const handleClick = (type: string) => {
    if (type === "next") {
      setPage(page + 1);
    } else if (type === "back") {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <div className="flex items-center gap-1 mt-10">
        <Button
          variant={tag === "images" ? "default" : "outline"}
          className="rounded-3xl z-50"
          onClick={() => {
            setPage(1);
            setTag("images");
          }}
        >
          صور
        </Button>
        <Button
          variant={tag === "videos" ? "default" : "outline"}
          className="rounded-3xl"
          onClick={() => {
            setPage(1);
            setTag("videos");
          }}
        >
          فيديوهات
        </Button>
      </div>
      <Activity mode={tag === "images" ? "visible" : "hidden"}>
        <>
          <div className="grid grid-cols-2 md:grid-cols-3     lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
            {visibleProjects.map((item) => (
              <Card key={item.id} className="p-1 z-10 md:h-[400px]">
                <CardContent className="p-1 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.id.toString()}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center mt-5 gap-2">
            <Button
              disabled={page * ITEMS_PER_PAGE >= PROJECTS_IMAGES.length}
              className="cursor-pointer z-10"
              onClick={() => handleClick("next")}
            >
              التالي
            </Button>
            <p className="px-3 py-1 border rounded-md z-10">{page}</p>
            <Button
              disabled={page === 1}
              onClick={() => handleClick("back")}
              className="cursor-pointer z-10"
            >
              السابق
            </Button>
          </div>
        </>
      </Activity>

      <Activity mode={tag === "videos" ? "visible" : "hidden"}>
        <>
          <div className="grid grid-cols-2 md:grid-cols-3     lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10 z-10">
            {visibleProjectsVideos.map((item) => (
              <Card key={item.id} className="p-1 z-10 md:h-[400px]">
                <CardContent className="p-1 w-full h-full">
                  <video
                    src={item.image}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-md"
                    controls
                    muted
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center mt-5 gap-2 ">
            <Button
              disabled={page * ITEMS_PER_PAGE >= PROJECTS_VIDEOS.length}
              className="cursor-pointer z-10"
              onClick={() => handleClick("next")}
            >
              التالي
            </Button>
            <p className="px-3 py-1 border rounded-md z-50">{page}</p>
            <Button
              disabled={page === 1}
              onClick={() => handleClick("back")}
              className="cursor-pointer z-10"
            >
              السابق
            </Button>
          </div>
        </>
      </Activity>
    </>
  );
};

export default ProjectCards;
