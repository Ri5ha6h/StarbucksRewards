import SimpleLinks from "./Subcomponents/SimpleLinks";

function Starting() {
  return (
    <>
      <section className="px-4 py-20 text-center">
        <h2 className="text-xl font-medium lg:text-3xl lg:font-semibold">
          Getting started is easy
        </h2>
        <p className="mt-3 text-lg font-normal lg:text-xl">
          Earn Stars and get rewarded in a few easy steps.
        </p>
        <div className="flex flex-col flex-1 mt-10 text-left lg:flex-row lg:text-center lg:justify-around md:px-24">
          <div className="flex mt-4 lg:flex-col lg:px-5">
            <div className="flex items-center justify-center w-12 h-12 p-4 mx-auto text-2xl font-medium border-2 rounded-full text-primary-200 border-primary-200 ">
              1
            </div>
            <div className="px-4">
              <h4 className="text-xl font-medium lg:hidden">
                Download the Starbucks App
              </h4>
              <h4 className="hidden mt-5 text-xl font-medium lg:block">
                Create an account
              </h4>
              <p className="mt-4 lg:hidden">
                <SimpleLinks className=" text-primary-200">Join in the app</SimpleLinks>
                {' '}to get access to the full range of Starbucks® Rewards benefits.
                You can also{' '}
               <SimpleLinks className="text-primary-200">join online</SimpleLinks>
                .
              </p>
              <p className="hidden mt-4 lg:block">
                To get started,{' '}
               <SimpleLinks className="text-primary-200">join now</SimpleLinks>
                . You can also{' '}
                <SimpleLinks className="text-primary-200">join in the app</SimpleLinks>{' '}
                to get access to the full range of Starbucks® Rewards benefits.
              </p>
            </div>
          </div>
          <div className="flex mt-4 lg:flex-col lg:px-5">
            <div className="flex items-center justify-center w-12 h-12 p-4 mx-auto text-2xl font-medium border-2 rounded-full text-primary-200 border-primary-200 ">
              2
            </div>
            <div className="px-4">
              <h4 className="text-xl font-medium lg:mt-5">
                Order and pay how you’d like
              </h4>
              <p className="mt-4">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.{' '}
                <SimpleLinks className="text-primary-200">Learn how</SimpleLinks>
              </p>
            </div>
          </div>
          <div className="flex mt-4 lg:flex-col lg:px-5">
            <div className="flex items-center justify-center w-12 h-12 p-4 mx-auto text-2xl font-medium border-2 rounded-full text-primary-200 border-primary-200 ">
              3
            </div>
            <div className="px-4">
              <h4 className="text-xl font-medium lg:mt-5">
                Earn Stars, get Rewards
              </h4>
              <p className="mt-4">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Starting;
