import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Pick the Right Tools, <br className="hidden sm:block" />
            <span className="brand-gradient-text">Ship Faster</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg lg:mx-0">
            Browse 15 hand-picked frontend, backend, database and DevOps
            technologies, check their ratings and difficulty, and assemble a
            stack you can start building with today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:opacity-90"
            >
              Browse Technologies
            </a>
            <a
              href="#technologies"
              className="rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-faint hover:bg-surface"
            >
              How It Works
            </a>
          </div>
        </div>

        
        <div className="relative flex justify-center">
          <div className="brand-gradient absolute inset-0 m-auto h-56 w-56 rounded-full opacity-20 blur-3xl sm:h-72 sm:w-72" />
          <img
            src={bannerImg}
            alt="Layered development stack illustration"
            className="relative w-72 sm:w-96 lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
