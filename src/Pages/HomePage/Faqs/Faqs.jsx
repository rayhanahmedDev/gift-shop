import React from "react";

export const Faqs = () => {
  return (
    <div className="my-14">
      <div>
        <h2 className="text-4xl font-semibold text-center">
          We Are Answer Some Popular Question
        </h2>
      </div>
      {/* question section */}

      {/* 1st faq */}
      <div className="collapse collapse-arrow bg-base-200 mt-12 shadow-xl py-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
          Who should I to contact if I have any queries?
        </div>
        <div className="collapse-content">
          <p className="text-[18px] text-[#01162DAB]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going
          </p>
        </div>
      </div>
      {/* 2nd faq */}
      <div className="collapse collapse-arrow bg-base-200 mt-7 shadow-xl py-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
          How long will it take to get my package ?
        </div>
        <div className="collapse-content">
          <p className="text-[18px] text-[#01162DAB]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going
          </p>
        </div>
      </div>
      {/* 3rd faq */}
      <div className="collapse collapse-arrow bg-base-200 mt-7 shadow-xl py-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
        What is the shelf life of sweets being provided?                                        
        </div>
        <div className="collapse-content">
          <p className="text-[18px] text-[#01162DAB]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going
          </p>
        </div>
      </div>
      {/* 4th faq */}
      <div className="collapse collapse-arrow bg-base-200 mt-7 shadow-xl py-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
        Items are different from what I ordered                                        
        </div>
        <div className="collapse-content">
          <p className="text-[18px] text-[#01162DAB]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going
          </p>
        </div>
      </div>
      {/* 5th faq */}
      <div className="collapse collapse-arrow bg-base-200 mt-7 shadow-xl py-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
        How to place an order for a giftbox?                                        
        </div>
        <div className="collapse-content">
          <p className="text-[18px] text-[#01162DAB]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going
          </p>
        </div>
      </div>
    </div>
  );
};
