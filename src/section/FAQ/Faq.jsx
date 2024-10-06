import React from "react";
import FaqTamplate from "./FaqTamplate";

const Faq = () => {
  const faqData = [
    {
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
    {
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
    {
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
    {
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
  ];
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <FaqTamplate data={faqData[0]}></FaqTamplate>
            <FaqTamplate data={faqData[1]}></FaqTamplate>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <FaqTamplate data={faqData[2]}></FaqTamplate>
            <FaqTamplate data={faqData[3]}></FaqTamplate>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
