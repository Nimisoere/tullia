import React from "react"

interface Props {}

const ContactForm = (props: Props) => {
  return (
    <div className="w-full bg-gray-100 py-14">
      <div className="container max-w-3xl mx-auto">
        <h4 className="text-center text-4xl font-light mb-10">
          Send us a message
        </h4>
        <div className="w-full">
          <div className="flex mb-2 flex-wrap w-full">
            <div className="w-full sm:w-1/2 sm:pr-4">
              <div className="mb-8 flex flex-col w-full">
                <label className="mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  className="border border-gray-200 p-4"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <div className="mb-8 flex flex-col w-full">
                <label className="mb-2">Email Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-200 p-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="w-full ">
              <div className="mb-4 flex flex-col w-full">
                <label className="mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="border border-gray-200 p-4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              className="bg-primary w-full sm:w-auto hover:bg-secondary text-white py-4 px-8"
              type="button"
              aria-label="send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
