import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section
      id="home"
      className="figma-frame relative mx-auto h-[539px] overflow-hidden xl:h-[846px]"
    >
      <div className="absolute left-1/2 top-[37px] z-30 flex h-[45px] -translate-x-1/2 items-center justify-center rounded-pill border border-ink bg-white/10 px-[25px] text-xs font-medium leading-none text-ink xl:text-xl">
        <span>Hello!</span>
        <span aria-hidden="true" className="absolute -right-7 -top-4 block h-[28.5px] w-[27.5px]">
          <Image
            src="/assets/images/hello-mark.svg"
            alt=""
            fill
            sizes="28px"
            className="object-fill"
          />
        </span>
      </div>

      <div className="absolute left-1/2 top-[111px] z-20 w-full max-w-[375px] -translate-x-1/2 text-center xl:w-[913px] xl:max-w-none">
        <h1 className="relative font-display text-4xl font-semibold leading-[0.99] tracking-normal text-ink xl:text-[95.566px]">
          I&apos;m <span className="text-accent">Jenny</span>,
          <br />
          Product Designer
          <span aria-hidden="true" className="absolute left-[28px] top-[166px] hidden h-[74.5px] w-[71.89px] rotate-[-167.61deg] xl:block">
            <Image
              src="/assets/images/headline-mark.svg"
              alt=""
              fill
              sizes="86px"
              className="object-fill"
            />
          </span>
        </h1>
      </div>

      <span aria-hidden="true" className="absolute left-[41px] top-[168px] z-20 block h-[33.15px] w-[31.99px] rotate-[-167.61deg] xl:hidden">
        <Image
          src="/assets/images/headline-mark.svg"
          alt=""
          fill
          sizes="38px"
          className="object-fill"
        />
      </span>

      <blockquote className="absolute left-4 top-[223px] z-30 max-w-[163px] xl:left-[71px] xl:top-[373px] xl:max-w-[298px]">
        <Image
          src="/assets/images/quote.svg"
          alt=""
          width={36}
          height={36}
          className="mb-2 h-6 w-6 xl:mb-6 xl:h-9 xl:w-9"
        />
        <p className="text-[11px] font-medium leading-[1.28] tracking-normal text-muted xl:text-xl xl:leading-normal">
          Jenny&apos;s Exceptional product design
          <span className="hidden xl:inline">
            <br />
            ensure our website&apos;s success.
            <br />
            Highly Recommended
          </span>
          <span className="xl:hidden"> ensure our website&apos;s success. Highly Recommended</span>
        </p>
      </blockquote>

      <div className="absolute right-4 top-[226px] z-30 text-right xl:right-[71px] xl:top-[380px]">
        <div aria-label="5 out of 5 stars" className="mb-1 flex justify-end xl:mb-[21px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src="/assets/images/star.svg"
              alt=""
              width={32}
              height={32}
              className="h-[18.2px] w-[18.2px] xl:h-8 xl:w-8"
            />
          ))}
        </div>
        <p className="font-display text-xl font-bold leading-none tracking-normal xl:text-[47px]">
          10 Years
        </p>
        <p className="mt-1 text-[11px] font-normal leading-none xl:mt-[5px] xl:text-xl">Experince</p>
      </div>

      <div className="absolute left-1/2 top-[278px] z-30 h-[261px] w-[375px] -translate-x-1/2 xl:top-[210px] xl:h-[636px] xl:w-[952px]">
        <span aria-hidden="true" className="absolute left-[21px] top-[94px] z-0 block h-[167px] w-[333px] xl:left-[83px] xl:top-[230px] xl:h-[406px] xl:w-[812px]">
          <Image
            src="/assets/images/ellipse.svg"
            alt=""
            fill
            sizes="(min-width: 1280px) 812px, 333px"
            className="object-fill"
          />
        </span>
        <span className="absolute left-4 top-0 z-10 block h-[261px] w-[343px] max-w-none xl:left-0 xl:h-[636px] xl:w-[952px]">
          <Image
            src="/assets/images/portrait.png"
            alt="Jenny smiling in an orange jacket"
            fill
            priority
            sizes="(min-width: 1280px) 952px, 343px"
            className="object-cover"
          />
        </span>
      </div>
    </section>
  );
}
