function Favourites() {
    return (
        <div className="pb-12 mb-16 bg-primary-200 md:pb-0">
        <div className="pt-10 bg-primary-100">
                <h1 className="pb-4 text-3xl font-semibold text-center">Get your favorites for free</h1>
        </div>
        <div className="flex justify-between bg-primary-100 md:justify-center md:space-x-16">
            <button className="items-center ">
                <h3 className="pt-2 pb-2 pl-4 pr-1 text-xl font-semibold text-center">25 <span className="text-yellow-500">★</span></h3>
                <div className="h-1 bg-black"></div>
            </button>
            <button className="items-center">
                <h3 className="px-2 pt-2 pb-2 text-xl font-semibold text-center">50 <span className="text-yellow-500">★</span></h3>
                <div className="h-1 "></div>
            </button>
            <button className="items-center">
                <h3 className="px-2 pt-2 pb-2 text-xl font-semibold text-center">150 <span className="text-yellow-500">★</span></h3>
                <div className="h-1 "></div>
            </button>
            <button className="items-center">
                <h3 className="px-2 pt-2 pb-2 text-xl font-semibold text-center">200 <span className="text-yellow-500">★</span></h3>
                <div className="h-1 "></div>
            </button>
            <button className="items-center">
                <h3 className="px-2 pt-2 pb-2 text-xl font-semibold text-center">250 <span className="text-yellow-500">★</span></h3>
                <div className="h-1"></div>
            </button>
        </div>
        <div className="md:flex md:justify-center md:items-center">
            <div className="py-8 bg-primary-200 lg:pl-60">
                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt=""/>
            </div>
            <div className="flex flex-col bg-primary-200 md:flex md:px-16 lg:px-48">
                <h1 className="pb-4 text-2xl font-semibold text-center">Customize your drink</h1>
                <p className="px-2 font-semibold text-center">Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
            </div>
        </div>
    </div>
    );
}

export default Favourites;