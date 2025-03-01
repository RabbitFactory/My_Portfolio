const Home = () => {
  return (
    <div className="w-full h-full flex items-center bg-gray-900 p-4">
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">
        <div className="col-span-6 row-span-1 md:col-span-4 md:row-span-4 bg-white rounded-2xl">1st</div>
        <div className="row-span-2 col-span-3 md:col-span-1 md:row-span-4 rounded-2xl bg-white">2nd</div>
        <div className="row-span-2 col-span-3 md:col-span-1 md:row-span-4 rounded-2xl bg-white">3rd</div>
        <div className="col-span-3 row-span-3 md:col-span-3 md:row-span-2 bg-white rounded-2xl">4th</div>
        <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-2 bg-white rounded-2xl">5th</div>
        <div className="col-span-3 row-span-1 md:col-span-1 md:row-span-2 bg-white rounded-2xl">6th</div>
      </div>
    </div>
  );
};

export default Home;
