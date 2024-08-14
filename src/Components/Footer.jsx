export const Footer = () => {
  return (
    <div className="sm:mb-16 md:grid md:grid-cols-3 md:gap-x-6">
      <div className="footerBlock">
        <div className="imgParent">
          <img
            src="./assets/images/image-retro-pcs.jpg"
            alt="retro pc"
            className="footerImg "
          />
        </div>

        <div className="textBlock">
          <h4 className="footerCount"> 01</h4>
          <h5 className="footerHeading"> Reviving Retro PCs</h5>
          <p className="footerText">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="footerBlock">
        <div
          className="imgParent sm:w-[160px]
        md:w-[150px]"
        >
          {" "}
          <img
            src="./assets/images/image-top-laptops.jpg"
            alt="top laptops"
            className="footerImg "
          />
        </div>

        <div className="textBlock">
          <h4 className="footerCount">02</h4>
          <h5 className="footerHeading">Top 10 Laptops of 2022</h5>
          <p className="footerText">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="footerBlock">
        <div className="imgParent ">
          {" "}
          <img
            src="./assets/images/image-gaming-growth.jpg"
            alt="gaming growth"
            className="footerImg "
          />
        </div>

        <div className="textBlock">
          <h4 className="footerCount"> 03</h4>
          <h5 className="footerHeading"> The Growth of Gaming</h5>
          <p className="footerText">
            {" "}
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
