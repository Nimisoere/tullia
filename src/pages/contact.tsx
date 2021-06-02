import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const Contact: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Get in touch" description="" />
      <div className="w-full py-10">
        <div className="container flex flex-wrap mx-auto">
          <div className="w-full sm:w-1/3 sm:p-10">
            <div className="bg-primary flex flex-wrap mb-10 sm:mb-0 items-stretch text-white">
              <div
                style={{
                  backgroundImage:
                    "url(https://tuliawine.com/static/office-1fa2b93064cabdb072a4b222574fe414.jpeg)",
                  backgroundSize: "cover",
                }}
                className="w-full h-16 sm:h-auto sm:w-1/4"
              />
              <div className="p-8 w-full sm:w-3/4">
                <h4 className="mb-4 text-xl text-secondary">South Africa</h4>
                <address className="font-light mb-4">
                  Some address 23 St Lane, Durban DS34 348
                </address>
                <p>
                  <span>Phone:</span> 0800-000-0000
                </p>
                <p>
                  <span>Email:</span> mail@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 sm:p-10">
            <div className="bg-primary flex flex-wrap mb-10 sm:mb-0 items-stretch text-white">
              <div
                style={{
                  backgroundImage:
                    "url(https://tuliawine.com/static/office-1fa2b93064cabdb072a4b222574fe414.jpeg)",
                  backgroundSize: "cover",
                }}
                className="w-full h-16 sm:h-auto sm:w-1/4"
              />
              <div className="p-8 w-full sm:w-3/4">
                <h4 className="mb-4 text-xl text-secondary">United Kingdom</h4>
                <address className="font-light mb-4">
                  Some address 23 St Lane, Durban DS34 348
                </address>
                <p>
                  <span>Phone:</span> 0800-000-0000
                </p>
                <p>
                  <span>Email:</span> mail@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 sm:p-10">
            <div className="bg-primary flex flex-wrap mb-10 sm:mb-0 items-stretch text-white">
              <div
                style={{
                  backgroundImage:
                    "url(https://tuliawine.com/static/office-1fa2b93064cabdb072a4b222574fe414.jpeg)",
                  backgroundSize: "cover",
                }}
                className="w-full h-16 sm:h-auto sm:w-1/4"
              />
              <div className="p-8 w-full sm:w-3/4">
                <h4 className="mb-4 text-xl text-secondary">Nigeria</h4>
                <address className="font-light mb-4">
                  Some address 23 St Lane, Durban DS34 348
                </address>
                <p>
                  <span>Phone:</span> 0800-000-0000
                </p>
                <p>
                  <span>Email:</span> mail@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
