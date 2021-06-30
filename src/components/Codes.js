import SimpleLinks from "./Subcomponents/SimpleLinks";

function Codes() {
  return (
    <>
      <section className="px-4 py-20 text-left lg:max-w-xl lg:ml-32 xl:ml-60">
        <h2 className="text-3xl font-semibold">Star Codes</h2>
        <p className="mt-4 text-base">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </p>
        <div className="mt-6">
          <form className="flex flex-col" action="">
            <input
              className="w-full py-2 pl-3 text-lg font-medium placeholder-black rounded-lg focus:outline-none ring-1 ring-black"
              type="text"
              placeholder="Enter your Star Code"
            />
            <button className="self-end px-4 py-1 mt-5 mr-1 text-lg font-medium focus:outline-none ring-1 rounded-2xl ring-black">
              Submit
            </button>
          </form>
        </div>
        <p className="mt-5 text-sm">Have a receipt but don't have a code?</p>
        <p className="text-sm">
          Go to{' '}
          <SimpleLinks className="text-primary-200">starbucks-stars.com</SimpleLinks>{' '}
          to upload your receipt and collect your Stars.
        </p>
      </section>
    </>
  );
}

export default Codes;
