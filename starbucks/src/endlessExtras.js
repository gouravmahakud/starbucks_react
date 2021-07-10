import Extra from "./extras";
function EndlessExtras() {
    return (
      <div className="">
        <div className="flex flex-col items-center text-center justify-items-center">
          <h1 className="text-2xl font-bold">Endless Extras</h1>
          <p className="inline px-4 pt-4 font-semibold">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. <br className="hidden md:inline-block" /> Say hello to
            easy ordering, tasty Rewards and—yes, free coffee.
          </p>
        </div>
        <div className="pt-12 md:flex md:flex-row md:justify-center md:items-start md:space-x-11">
          <Extra
            src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
            data="Fun Freebies"
            desc="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills"
            learnMore="https://www.google.com"
          />
          <Extra
            src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
            data="Order & pay ahead"
            desc="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills"
            learnMore="https://www.google.com"
          />
          <Extra
            src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
            data="Get to free faster"
            desc="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
            learnMore="https://www.google.com"
          />
        </div>
      </div>
    );
}

export default EndlessExtras;