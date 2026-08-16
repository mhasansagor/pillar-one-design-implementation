export default function Hero(): JSX.Element {
  return (
    <section
      id="home"
      className="figma-frame relative mx-auto h-[539px] overflow-hidden md:h-[640px] xl:h-[846px]"
    >
      <div className="absolute left-1/2 top-[37px] z-30 flex h-[45px] -translate-x-1/2 items-center justify-center rounded-pill border border-ink bg-white/10 px-[25px] text-xs font-medium leading-none text-ink md:text-base xl:text-xl">
        <span>Hello!</span>
        <img src="/assets/figma/hello-mark.svg" alt="" className="absolute -right-7 -top-4 h-[29px] w-[28px]" />
      </div>

      <div className="absolute left-1/2 top-[111px] z-20 w-full -translate-x-1/2 text-center md:w-[680px] xl:w-[913px]">
        <h1 className="relative font-display text-[47px] font-semibold leading-[0.99] tracking-normal text-ink md:text-[68px] xl:text-[95.566px]">
          I&apos;m <span className="text-accent">Jenny</span>,
          <br />
          Product Designer
          <img src="/assets/figma/headline-mark.svg" alt="" className="absolute left-[-23px] top-[170px] hidden h-[88px] w-[86px] rotate-[-167.61deg] xl:block" />
        </h1>
      </div>

      <blockquote className="absolute left-4 top-[223px] z-30 max-w-[163px] md:left-8 md:top-[310px] xl:left-[71px] xl:top-[373px] xl:max-w-[298px]">
        <img src="/assets/figma/quote.svg" alt="" className="mb-2 h-6 w-6 xl:mb-6 xl:h-9 xl:w-9" />
        <p className="text-[11px] font-medium leading-[1.28] tracking-normal text-muted xl:text-xl xl:leading-normal">
          Jenny&apos;s Exceptional product design
          <span className="hidden md:inline">
            <br />
            ensure our website&apos;s success.
            <br />
            Highly Recommended
          </span>
          <span className="md:hidden"> ensure our website&apos;s success. Highly Recommended</span>
        </p>
      </blockquote>

      <div className="absolute right-4 top-[226px] z-30 text-right md:right-8 md:top-[314px] xl:right-[71px] xl:top-[380px]">
        <div aria-label="5 out of 5 stars" className="mb-1 flex justify-end xl:mb-[21px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src="/assets/figma/star.svg" alt="" className="h-[18.2px] w-[18.2px] xl:h-8 xl:w-8" />
          ))}
        </div>
        <p className="font-display text-xl font-bold leading-none tracking-normal xl:text-[47px]">
          10 Years
        </p>
        <p className="mt-1 text-[11px] font-normal leading-none xl:mt-[5px] xl:text-xl">Experince</p>
      </div>

      <div className="absolute left-1/2 top-[278px] z-30 h-[261px] w-[375px] -translate-x-1/2 md:top-[300px] md:h-[340px] md:w-[520px] xl:top-[210px] xl:h-[636px] xl:w-[952px]">
        <img src="/assets/figma/ellipse.svg" alt="" className="absolute left-[21px] top-[94px] z-0 h-[167px] w-[333px] md:left-[42px] md:top-[122px] md:h-[218px] md:w-[435px] xl:left-[83px] xl:top-[230px] xl:h-[406px] xl:w-[812px]" />
        <img
          src="/assets/figma/portrait.png"
          alt="Jenny smiling in an orange jacket"
          className="absolute left-4 top-0 z-10 h-[261px] w-[343px] max-w-none object-cover md:left-[48px] md:h-[340px] md:w-[424px] xl:left-0 xl:h-[636px] xl:w-[952px]"
        />
      </div>
    </section>
  );
}
