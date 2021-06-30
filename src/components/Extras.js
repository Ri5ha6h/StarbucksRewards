import fun from '../images/1-fun-freebies.jpg';
import order from '../images/2-order-and-pay-ahead.jpg';
import faster from '../images/3-get-to-free-faster.jpg';
import SimpleLinks from './Subcomponents/SimpleLinks';

function Extras() {
  return (
    <>
      <section className="px-10 py-20 text-center">
        <h2 className="text-xl font-medium lg:text-3xl lg:font-semibold">
          Endless Extras
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-sm font-normal lg:text-base">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
        <div className="flex flex-col mt-10 text-left lg:flex-row lg:text-center lg:justify-around">
          <div className="flex flex-1 mt-4 lg:flex-col lg:px-5">
            <div className="flex items-center justify-center flex-shrink-0 cursor-pointer lg:mx-auto">
              <img className="w-28 h-28" src={fun} alt="fun freebies" />
            </div>
            <div className="max-w-full px-4">
              <h4 className="text-xl font-medium lg:mt-5">Fun freebies</h4>
              <p className="mt-4">
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
              <SimpleLinks className="block mt-4 text-primary-200">
                Learn more
              </SimpleLinks>
            </div>
          </div>
          <div className="flex flex-1 mt-4 lg:flex-col lg:px-5 ">
            <div className="flex items-center justify-center flex-shrink-0 cursor-pointer lg:mx-auto ">
              <img
                className="w-28 h-28"
                src={order}
                alt="order and pay ahead"
              />
            </div>
            <div className="max-w-full px-4">
              <h4 className="text-xl font-medium lg:mt-5">Order & pay ahead</h4>
              <p className="mt-4">
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
              <SimpleLinks className="block mt-4 text-primary-200">
                Learn more
              </SimpleLinks>
            </div>
          </div>
          <div className="flex flex-1 mt-4 lg:flex-col lg:px-5 ">
            <div className="flex items-center justify-center flex-shrink-0 cursor-pointer lg:mx-auto">
              <img
                className="w-28 h-28"
                src={faster}
                alt="get to free faster"
              />
            </div>
            <div className="max-w-full px-4">
              <h4 className="text-xl font-medium lg:mt-5">
                Get to free faster
              </h4>
              <p className="mt-4">
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
              <SimpleLinks className="block mt-4 text-primary-200">
                Learn more
              </SimpleLinks>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Extras;
