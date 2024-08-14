const Main = () => {
  return (
    <div className="bg-Verydarkblue text-Offwhite sm:my-12 sm:p-4 sm:space-y-4 md:m-0">
      <h2 className="text-Softorange font-extrabold sm:text-3xl"> New </h2>
      <div className="newBlock">
        <h3 className="mainHeading"> Hydrogen VS Electric Cars</h3>
        <p className="mainText">
          {" "}
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr />
      <div className="newBlock">
        <h3 className="mainHeading">The Downsides of AI Artistry</h3>
        <p className="mainText">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div className="newBlock ">
        <h3 className="mainHeading"> Is VC Funding Drying Up?</h3>
        <p className="mainText">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default Main;
