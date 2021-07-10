import Cards from "./cards";
function EarnStars() {
    return (
      <div className="px-4 py-10 bg-primary-200 md:px-6 lg:px-12">
        <div className="pb-12 mb-4 text-center">
          <h1 className="pt-6 pb-4 text-3xl font-semibold">
            Cash or card, you earn Stars
          </h1>
          <p className="font-semibold">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        <div className="md:flex-col lg:flex lg:flex-row lg:justify-items-center lg:space-x-36">
          <div className="pb-8 lg:min-w-max">
            <p className="text-2xl font-semibold">1★ per dollar</p>
            <p>Pay as you go</p>
          </div>
          <div className="md:space-x-8 md:flex">
            <Cards
              src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
              data="Scan and pay separately"
              desc="Use cash or credit/debit card at the register."
            />
            <Cards
              src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
              data="Save payment in the app"
              desc="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step"
            />
          </div>
        </div>
        <div>
          <hr className="pt-4 pb-10 border-t-2 border-black" />
        </div>
        <div className="md:flex-col lg:flex lg:flex-row lg:justify-items-center lg:space-x-36">
          <div className="pb-8 lg:min-w-max">
            <p className="text-2xl font-semibold">2★ per dollar</p>
            <p>Add funds in the app</p>
          </div>
          <div className="md:space-x-8 md:flex">
            <Cards
              src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
              data="Preload"
              desc="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
            />
            <Cards
              src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
              data="Register your gift card"
              desc="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
            />
          </div>
        </div>
        <div>
          <hr className="pt-4 pb-10 border-t-2 border-black" />
        </div>
        <div className="lg:space-x-4 md:flex-col lg:flex lg:flex-row">
          <div className="pb-8 lg:min-w-max">
            <p className="text-2xl font-semibold">3★ per dollar</p>
            <p>With Starbucks® Rewards Visa® Card</p>
          </div>
          <div className="md:flex">
            <Cards
              src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
              data="Earn Stars even faster"
                        desc="Earn Stars on all purchases you make with our"
              rest="in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."          
            >
              <a
                class="text-primary-300 underline"
                target="_blank"
                href="https://www.google.com"
              >
                credit card
              </a>
            </Cards>
          </div>
        </div>
      </div>
    );
}

export default EarnStars;