import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Faqs = () => {
  return (
    <div>
      <Navbar />
      <section className="py-24 faq-hero h-72 flex items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-5xl tracking-wider">FAQs</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-3/4 box-shadow px-10 pb-10 pt-16">
              <div className="mb-6">
                <h4 className="text-xl font-semibold">
                  1.{" "}
                  <span className="border-l-4 pl-2">
                    How often do you empty my bin?
                  </span>
                </h4>
                <p className="italic pl-8 pt-2">
                  Collection schedules can vary from business to business,
                  depending on different needs. We can schedule collections to
                  suit your needs once we have conducted a thorough waste audit
                  to identify the best possible service for you. Collections can
                  range from daily to monthly and anything in-between that works
                  for you.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold">
                  2.{" "}
                  <span className="border-l-4 pl-2">
                    Why should my business recycle?
                  </span>
                </h4>
                <p className="italic pl-8 pt-2">
                  Recycling can have many benefits for your business. By
                  recycling, you can do your bit to help save the planet.
                  Products made from recycled materials have many environmental
                  benefits; it uses less raw materials, less water and less
                  energy. Recycling can also save your business money by
                  implementing recycling streams and reducing the amount of
                  waste sent to landfill sites. You can significantly reduce
                  your waste disposal costs. Recycling is far more
                  cost-effective than general waste disposal.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold">
                  3.{" "}
                  <span className="border-l-4 pl-2">
                    What are your opening times?
                  </span>
                </h4>
                <p className="italic pl-8 pt-2">
                  Our usual openings are as follows. Opening hours may be
                  slightly different during public holidays. If you need to
                  speak to us, please call us on +232-79-316-767. If you need to
                  talk to us outside of our opening hours, please use our
                  contact page to get in touch with us, and we'll get back to
                  you as soon as possible.
                </p>
                <p className="italic pl-8 pt-2 font-semibold">
                  Monday - Friday: 7am - 5pm <br />
                  Saturday: 8am - 12pm <br />
                  Sunday: Closed
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold">
                  4.{" "}
                  <span className="border-l-4 pl-2">
                    What if I'm satisfied with my current waste management
                    provider?
                  </span>
                </h4>
                <p className="italic pl-8 pt-2">
                  We respect our competition, and if you already receive a good
                  service, that's fine by us. However, please do consider a
                  couple of these points first. If you allow us to carry out our
                  free service audit to check to ensure you really are getting
                  the best value from your current provider. Many providers do
                  not proactively manage waste disposal, merely offering a
                  collection service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faqs;
