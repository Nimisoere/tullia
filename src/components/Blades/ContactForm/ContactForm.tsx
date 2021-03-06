import { Link } from "gatsby"
import { navigate } from "gatsby-link"
import React from "react"

interface Props {
  blade: any
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm: React.FC<Props> = ({ blade }) => {
  const [submitted, setSubmitted] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState<any>({
    fullname: "",
    email: "",
    message: "",
  })

  const { fullname, email, message } = formData

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch(error => alert(error))
  }
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="w-full bg-gray-100 py-14">
      <div className="container max-w-3xl mx-auto flex justify-center items-center">
        {/*         {submitted && (
          <div className="bg-green-100 p-4 text-green-700 mb-4">
            Form submitted successfully
          </div>
        )}
        <h4 className="text-center text-4xl font-light mb-10">
          {blade?.formTitle}
        </h4>
        <form
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="w-full"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="flex mb-2 flex-wrap w-full">
            <div className="w-full sm:w-1/2 sm:pr-4">
              <div className="mb-8 flex flex-col w-full">
                <label className="mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={handleChange}
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
                  value={email}
                  onChange={handleChange}
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
                  value={message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="border border-gray-200 p-4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              className={`bg-${blade?.primaryCta?.buttonStyle?.toLowerCase()} w-full sm:w-auto hover:bg-secondary text-white py-4 px-8`}
              type="submit"
              aria-label="send message"
            >
              {blade?.primaryCta?.caption}
            </button>
          </div>
        </form>
       */}
        <a
          className={`bg-${blade?.primaryCta?.buttonStyle?.toLowerCase()} w-full max-w-xs  text-xl leading-none hover:bg-secondary text-white py-6 flex items-center justify-center`}
          href="mailto:contact@tuliawine.com"
          aria-label="send message"
        >
          Send us a Mail
        </a>
      </div>
    </div>
  )
}

export default ContactForm
