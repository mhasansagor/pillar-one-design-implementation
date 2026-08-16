import Image from "next/image";
import type { ServiceCardData } from "@/types/content";

export default function ServiceCard({
  service,
}: {
  service: ServiceCardData;
}): JSX.Element {
  const cardMask = {
    WebkitMaskImage: "url('/assets/images/service-card-mask.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/assets/images/service-card-mask.svg')",
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",
  };

  return (
    <article className="group relative h-[354.135px] w-[290px] shrink-0 overflow-visible xl:h-[508px] xl:w-[416px] xl:max-w-none">
      <div className="absolute inset-0" style={cardMask}>
        <span aria-hidden="true" className="absolute inset-0 block h-full w-full">
          <Image
            src="/assets/images/service-card-shell.svg"
            alt=""
            fill
            sizes="(min-width: 1280px) 416px, 290px"
            className="object-fill"
          />
        </span>

        <header className="absolute left-0 top-[30.67px] z-20 w-full px-[25.793px] xl:top-11 xl:px-[37px]">
          <h3 className="font-display text-[22.308px] font-medium leading-normal tracking-[-0.3346px] xl:text-[32px] xl:tracking-[-0.48px]">
            {service.title}
          </h3>
          <span aria-hidden="true" className="absolute left-0 top-[46px] block h-0.5 w-full xl:top-[67px]">
            <Image
              src="/assets/images/service-card-line.svg"
              alt=""
              fill
              sizes="(min-width: 1280px) 416px, 290px"
              className="object-fill"
            />
          </span>
        </header>

        <div className="absolute left-1/2 top-[110.14px] h-[244px] w-full -translate-x-1/2 xl:top-[158px] xl:h-[350px]">
          <div className="absolute left-1/2 top-0 h-[229.351px] w-[228.654px] -translate-x-1/2 rounded-t-[24.399px] bg-[#757575] opacity-50 xl:h-[329px] xl:w-[328px] xl:rounded-t-[35px]" />
          <div className="absolute left-1/2 top-[10.5px] h-[229.351px] w-[260.721px] -translate-x-1/2 rounded-t-[24.399px] bg-[#9e9d9d] xl:h-[329px] xl:w-[374px] xl:rounded-t-[35px]" />
          <div className="absolute left-1/2 top-[15.34px] h-[214.014px] w-[290px] -translate-x-1/2 overflow-hidden rounded-[24.399px] bg-white shadow-[0_18px_30px_rgba(0,0,0,0.15)] xl:top-[43px] xl:h-[307px] xl:w-full xl:rounded-[35px]">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1280px) 416px, 290px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={`View ${service.title} work`}
        className="absolute left-[210.53px] top-[274.66px] z-30 grid h-[79.471px] w-[79.471px] place-items-center rounded-full bg-navy text-white transition-transform group-hover:-translate-y-1 xl:left-auto xl:right-0 xl:top-auto xl:bottom-0 xl:h-[114px] xl:w-[114px]"
      >
        <Image
          src="/assets/images/arrow-up-right.svg"
          alt=""
          width={72}
          height={72}
          className="h-9 w-9 xl:h-[72px] xl:w-[72px]"
        />
      </button>
    </article>
  );
}
