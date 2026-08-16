import ServiceCard from "./ServiceCard";
import type { ServiceCardData } from "./types";

const SERVICES: ServiceCardData[] = [
  {
    id: 1,
    title: "UI/ UX Design",
    imageSrc: "/assets/figma/service-ui.png",
    imageAlt: "Smart home mobile interface design",
  },
  {
    id: 2,
    title: "Web Design",
    imageSrc: "/assets/figma/service-web.png",
    imageAlt: "Food ordering app interface design",
  },
  {
    id: 3,
    title: "Landing Page",
    imageSrc: "/assets/figma/service-ui.png",
    imageAlt: "Landing page interface design",
  },
];

export default function Services(): JSX.Element {
  return (
    <section
      id="service"
      className="service-shell figma-frame relative mx-auto h-[605px] overflow-hidden rounded-2xl px-4 py-10 text-white md:h-[720px] md:px-8 xl:h-[878px] xl:rounded-[50px] xl:px-[71px] xl:py-[116px]"
    >
      <div
        aria-hidden="true"
        className="absolute -left-[89px] top-[107px] h-[133px] w-[130px] rotate-[151.66deg] bg-[url('/assets/figma/orange-abstract.png')] bg-cover opacity-90 blur-[1.5px] xl:-left-[184px] xl:top-[50px] xl:h-[442px] xl:w-[432px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[289px] top-[126px] h-[84px] w-[84px] rotate-[-146.4deg] bg-[url('/assets/figma/orange-abstract.png')] bg-cover blur-[2.5px] xl:left-1/2 xl:top-[71px] xl:h-[181px] xl:w-[181px] xl:-translate-x-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute left-[250px] top-[427px] h-[249px] w-[249px] bg-[url('/assets/figma/orange-abstract.png')] bg-cover xl:-right-[387px] xl:left-auto xl:top-[196px] xl:h-[873px] xl:w-[873px]"
      />

      <div className="relative z-10 mx-auto flex w-full flex-col gap-[26px]">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between xl:gap-0">
          <h2 className="font-display text-[40px] font-semibold leading-none tracking-normal xl:text-5xl">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="w-full text-left text-base font-medium leading-normal tracking-normal text-white md:max-w-[576px] xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="-mx-4 flex w-[calc(100%_+_32px)] gap-4 overflow-visible px-4 md:mx-auto md:grid md:w-full md:max-w-[860px] md:grid-cols-2 xl:max-w-[1299px] xl:grid-cols-[416px_416px_416px] xl:justify-between xl:gap-0 xl:px-0">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={index === 2 ? "md:hidden xl:block" : "block"}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1 xl:gap-[11px]">
          <span className="h-2 w-8 rounded-pill bg-accent xl:h-[15px] xl:w-[60px]" />
          <span className="h-2 w-2 rounded-full bg-fog xl:h-[15px] xl:w-[15px]" />
          <span className="h-2 w-2 rounded-full bg-fog xl:h-[15px] xl:w-[15px]" />
          <span className="h-2 w-2 rounded-full bg-fog xl:h-[15px] xl:w-[15px]" />
        </div>
      </div>
    </section>
  );
}
