import payA from '../images/1A.png';
import payB from '../images/1B.png';
import payC from '../images/2A.png';
import payD from '../images/2B.png';
import payE from '../images/3A.png';

function Pay() {
  return (
    <>
      <section className="px-4 py-20 text-center bg-secondary-200">
        <h2 className="text-xl font-medium lg:text-3xl lg:font-semibold">
          Cash or card, you earn Stars
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-sm font-normal lg:text-base">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
        <div className="flex flex-col max-w-full mt-10 divide-y-2 divide-gray-300">
          <div className="flex flex-col flex-1 lg:flex-row">
            <div className="py-10 text-left lg:px-5">
              <h3 className="text-2xl font-semibold">
                1 <span className="text-lg">★</span> per dollar
              </h3>
              <p>Pay as you go</p>
            </div>
            <div className="flex flex-col items-start flex-1 px-12 py-10 text-left lg:flex-row max-w-3/4">
              <div className="flex flex-1 lg:max-w-1/2">
                <div className="flex-shrink-0">
                  <img className="w-28 h-39.5" src={payA} alt="scan and pay" />
                </div>
                <div className="max-w-full ml-4 min-w-ful lg:min-w-0">
                  <h4 className="text-xl font-medium">
                    Scan and pay separately
                  </h4>
                  <p className="mt-3">
                    Use cash or credit/debit card at the register.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 mt-5 lg:max-w-1/2 sm:mt-0">
                <div className="flex-shrink-0">
                  <img
                    className="w-28 h-39.5"
                    src={payB}
                    alt="save payment in app"
                  />
                </div>
                <div className="max-w-full min-w-full ml-4 lg:min-w-0">
                  <h4 className="text-xl font-medium">
                    Save payment in the app
                  </h4>
                  <p className="mt-3">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 lg:flex-row">
            <div className="py-10 text-left lg:px-5">
              <h3 className="text-2xl font-semibold">
                2 <span className="text-lg">★</span> per dollar
              </h3>
              <p>Add funds in the app</p>
            </div>
            <div className="flex flex-col items-start flex-1 px-12 py-10 text-left lg:flex-row max-w-3/4">
              <div className="flex flex-1 lg:max-w-1/2">
                <div className="flex-shrink-0">
                  <img className="w-28 h-39.5" src={payC} alt="preload" />
                </div>
                <div className="max-w-full min-w-full ml-4 lg:min-w-0">
                  <h4 className="text-xl font-medium">Preload</h4>
                  <p className="mt-3">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 mt-5 lg:max-w-1/2 sm:mt-0">
                <div className="flex-shrink-0">
                  <img className="w-28 h-39.5" src={payD} alt="gift card" />
                </div>
                <div className="max-w-full min-w-full ml-4 lg:min-w-0">
                  <h4 className="text-xl font-medium">
                    Register your gift card
                  </h4>
                  <p className="mt-3">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 lg:flex-row">
            <div className="py-10 text-left lg:px-5 ">
              <h3 className="text-2xl font-semibold ">
                Up to 3 <span className="text-lg">★</span> per dollar
              </h3>
              <p>With Starbucks® Rewards Visa® Card</p>
            </div>
            <div className="flex flex-col items-start flex-1 px-12 py-10 text-left lg:flex-row max-w-3/4">
              <div className="flex flex-1 lg:max-w-1/2">
                <div className="flex-shrink-0">
                  <img className="w-28 h-39.5" src={payE} alt="earn stars" />
                </div>
                <div className="max-w-full min-w-full ml-4 lg:min-w-0">
                  <h4 className="text-xl font-medium">
                    Earn Stars even faster
                  </h4>
                  <p className="mt-3">
                    Earn Stars on all purchases you make with our credit card
                    opens in new window in and outside of Starbucks. Earn 1 Star
                    per $1 when you digitally preload your Starbucks Card with
                    your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1
                    when you pay with that preloaded Starbucks Card.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pay;
