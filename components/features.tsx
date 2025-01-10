"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { featuresData } from "@/lib/data";
import Feature from "./feature";
import { useSectionInView } from "@/lib/hooks";

export default function Features() {
  const { ref } = useSectionInView("Features", 0.5);

  return (
    <section ref={ref} id="features" className="scroll-mt-20 mb-12">
      <SectionHeading>My Features</SectionHeading>
      <div>
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <Feature {...feature} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}