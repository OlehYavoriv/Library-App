import React from "react";
import ContactSupport from "../../components/ContactSupport";
import ContactImage from "../../assets/images/contact-img.jpg";

const ContactsPage = () => {
  return (
    <section className="mb-32 text-sage-green">
      <div className="container my-24 px-6 mx-auto">
        <div className="flex justify-center">
          <div className="text-center lg:max-w-3xl md:max-w-xl">
            <h2 className="text-3xl font-bold mb-12 px-6">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-sage-green
                    bg-white bg-clip-padding
                    border border-solid border-sage-green
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-sage-green focus:bg-white focus:border-sage-green focus:outline-none"
                  id="ContactName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-sage-green
                    bg-white bg-clip-padding
                    border border-solid border-sage-green
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-sage-green focus:bg-white focus:border-sage-green focus:outline-none"
                  id="ContactEmail"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
                  resize-none
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-sage-green
                    bg-white bg-clip-padding
                    border border-solid border-sage-green
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-sage-green focus:bg-white focus:border-sage-green focus:outline-none
                  "
                  id="ContactMessage"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="
                  w-full
                  px-6
                  py-2.5
                  bg-sage-green
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  transition
                  duration-150
                  ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
          <ContactSupport />
          <div className="container mx-auto px-6 py-16 text-center">
            <div className="mt-10 flex justify-center">
              <img
                className="h-96 w-full rounded-xl object-cover lg:w-4/5"
                src={ContactImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
