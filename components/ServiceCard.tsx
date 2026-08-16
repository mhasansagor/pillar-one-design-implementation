import type { ServiceCardData } from "./types";

export default function ServiceCard({
  service,
}: {
  service: ServiceCardData;
}): JSX.Element {
  const cardMask = {
    WebkitMaskImage: "url('/assets/figma/service-card-mask.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/assets/figma/service-card-mask.svg')",
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",
  };

  return (
    <article className="group relative h-[354.135px] w-[290px] shrink-0 overflow-visible md:h-[420px] md:w-full md:max-w-[416px] xl:h-[508px] xl:w-[416px] xl:max-w-none">
      <div className="absolute inset-0" style={cardMask}>
        <img
          src="/assets/figma/service-card-shell.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />

        <header className="absolute left-0 top-[30.67px] z-20 w-full px-[25.793px] xl:top-11 xl:px-[37px]">
          <h3 className="font-display text-[22.308px] font-medium leading-none tracking-normal xl:text-[32px]">
            {service.title}
          </h3>
          <img
            src="/assets/figma/service-card-line.svg"
            alt=""
            className="absolute left-0 top-[46px] h-0.5 w-full xl:top-[67px]"
          />
        </header>

        <div className="absolute left-1/2 top-[110.14px] h-[244px] w-full -translate-x-1/2 md:top-[142px] md:h-[278px] xl:top-[158px] xl:h-[350px]">
          <div className="absolute left-1/2 top-0 h-[229.351px] w-[228.654px] -translate-x-1/2 rounded-t-[24.399px] bg-[#757575] opacity-50 md:h-[260px] md:w-[260px] xl:h-[329px] xl:w-[328px] xl:rounded-t-[35px]" />
          <div className="absolute left-1/2 top-[10.5px] h-[229.351px] w-[260.721px] -translate-x-1/2 rounded-t-[24.399px] bg-[#9e9d9d] md:h-[260px] md:w-[300px] xl:h-[329px] xl:w-[374px] xl:rounded-t-[35px]" />
          <div className="absolute left-1/2 top-[15.34px] h-[214.014px] w-[290px] -translate-x-1/2 overflow-hidden rounded-[24.399px] bg-white shadow-[0_18px_30px_rgba(0,0,0,0.15)] md:top-[38px] md:h-[240px] md:w-full xl:top-[43px] xl:h-[307px] xl:rounded-[35px]">
            <img
              src={service.imageSrc}
              alt={service.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={`View ${service.title} work`}
        className="absolute left-[210.53px] top-[274.66px] z-30 grid h-[79.471px] w-[79.471px] place-items-center rounded-full bg-navy text-white transition-transform group-hover:-translate-y-1 md:left-auto md:right-0 md:top-auto md:bottom-0 md:h-20 md:w-20 xl:h-[114px] xl:w-[114px]"
      >
        <img src="/assets/figma/arrow-up-right.svg" alt="" className="h-9 w-9 xl:h-[72px] xl:w-[72px]" />
      </button>
    </article>
  );
}
