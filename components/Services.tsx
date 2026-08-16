import { SERVICES } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services(): JSX.Element {
  return (
    <section
      id="service"
      className="service-shell figma-frame relative mx-auto h-[605px] overflow-hidden rounded-2xl px-4 py-10 text-white xl:h-[878px] xl:rounded-[50px] xl:px-[71px] xl:py-[116px]"
    >
      <div
        aria-hidden="true"
        className="absolute -left-[50px] top-[132px] h-[133px] w-[130px] rotate-[151.66deg] bg-[url('/assets/images/orange-abstract.png')] bg-cover opacity-90 blur-[1.5px] xl:-left-[149px] xl:top-[140px] xl:h-[441.9px] xl:w-[432.33px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[305px] top-[146px] h-[84px] w-[84px] rotate-[-146.4deg] bg-[url('/assets/images/orange-abstract.png')] bg-cover blur-[2.5px] xl:left-[527px] xl:top-[121px] xl:h-[180.95px] xl:w-[180.95px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[250px] top-[427px] h-[249px] w-[249px] bg-[url('/assets/images/orange-abstract.png')] bg-cover xl:-right-[387px] xl:left-auto xl:top-[196px] xl:h-[873px] xl:w-[873px]"
      />

      <div className="relative z-10 mx-auto flex w-full flex-col gap-[26px] xl:gap-[96px]">
        <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-end xl:justify-between xl:gap-0">
          <h2 className="font-display text-[40px] font-semibold leading-none tracking-[-0.6px] xl:text-5xl xl:tracking-[-0.72px]">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="w-full text-left text-base font-medium leading-[1.2] tracking-[-0.24px] text-white xl:max-w-[576px] xl:text-xl xl:font-normal xl:leading-normal xl:tracking-[-0.3px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 xl:gap-[39px]">
          <div className="-mx-4 flex w-[calc(100%_+_32px)] gap-4 overflow-visible px-4 xl:mx-auto xl:grid xl:w-full xl:max-w-[1299px] xl:grid-cols-[416px_416px_416px] xl:justify-between xl:gap-0 xl:px-0">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={index === 2 ? "hidden shrink-0 xl:block" : "block shrink-0"}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1 xl:gap-[11.311px]">
            <span className="h-2 w-8 rounded-pill bg-accent xl:h-[15.081px] xl:w-[60.324px]" />
            <span className="h-2 w-2 rounded-full bg-fog xl:h-[15.081px] xl:w-[15.081px]" />
            <span className="h-2 w-2 rounded-full bg-fog xl:h-[15.081px] xl:w-[15.081px]" />
            <span className="h-2 w-2 rounded-full bg-fog xl:h-[15.081px] xl:w-[15.081px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
