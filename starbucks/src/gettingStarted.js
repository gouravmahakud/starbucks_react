import Steps from "./steps";
function GettingStarted(){
    return (
      <div className="">
        <div class="flex flex-col items-center justify-center mt-24">
          <h1 class="text-3xl font-bold text-center md:text-4xl">
            Getting started is easy
          </h1>
          <p class="pt-4 text-lg">
            Earn Stars and get rewardeed in a few steps
          </p>
        </div>
        <div className="flex flex-col pb-12 mb-24 md:flex-row md:justify-center md:items-start md:space-x-9">
          <Steps
            parentClassProp="flex px-4 pt-12 md:hidden lg:hidden"
            src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
            step="Download the Starbucks app"
            desc="Join in the app to get access to the full range of Starbucks® Rewards benefits. You can also join online."
          />
          <Steps
            parentClassProp="flex hidden px-4 pt-12 md:flex-col md:block lg:block md:max-w-md"
            src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
            step="Create an account"
            desc="To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits."
          />
          <Steps
            parentClassProp="flex px-4 pt-12 md:flex-col md:max-w-md"
            src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
            step="Order and pay how you’d like"
            desc="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how"
          />
          <Steps
            parentClassProp="flex px-4 pt-12 md:flex-col md:max-w-md"
            src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
            step="Earn Stars, get Rewards"
            desc="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
          />
        </div>
      </div>
    );
}
export default GettingStarted;