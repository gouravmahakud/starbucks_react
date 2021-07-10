function Hero(){
    return (
      <div className="">
        <div className="text-center bg-cover bg-hero-sm bg-primary-200 md:hidden aspect-w-3 aspect-h-4">
          <div className="flex-col px-4 py-8">
            <h2 className="font-semibold text-22">FREE COFFEE</h2>
            <h2 className="font-semibold text-22">IS A TAP AWAY</h2>
            <div className="pt-4">
              <h4 className="text-xl font-semibold">
                Join now to start earning Rewards
              </h4>
            </div>
            <div className="pt-8">
              <button className="px-4 py-2 text-lg font-semibold text-white border-2 rounded-full border-primary-300 bg-primary-300">
                Join in the app
              </button>
            </div>
            <div className="pt-4">
              <a
                href="https://starbucks.app.link/VLa2I3inh9"
                className="text-lg underline "
              >
                or join online
              </a>
            </div>
          </div>
        </div>
        <div className="hidden bg-cover bg-hero-xl bg-primary-200 md:block h-180">
          <div className="flex-col content-start px-4 py-8 pt-64 ml-12">
            <h2 className="font-semibold md:text-4xl lg:text-6xl">FREE COFFEE</h2>
            <h2 className="font-semibold md:text-4xl lg:text-6xl">IS A TAP AWAY</h2>
            <div className="pt-4">
              <h4 className="text-xl font-semibold">
                Join now to start earning Rewards
              </h4>
            </div>
            <div className="pt-8">
              <button className="px-4 py-2 text-lg font-semibold text-white border-2 rounded-full border-primary-300 bg-primary-300">
                Join in the app
              </button>
            </div>
            <div className="pt-4">
              <a
                href="https://starbucks.app.link/VLa2I3inh9"
                className="text-lg underline "
              >
                or join online
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;