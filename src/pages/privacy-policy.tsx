import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import QuickLinks from "../components/Blades/QuickLinks/QuickLinks"
import Layout from "../components/Layout/Layout"

interface Props {}

const Contact: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        description="Your data is safe with us"
      />
      <div className="container flex flex-wrap font-light mx-auto py-20">
        <div className="w-full sm:w-1/3 mb-10">
          <QuickLinks />
        </div>
        <div className="w-full max-w-3xl  sm:w-2/3 mb-10">
          <h4 className="font-medium text-3xl mb-4">Heading 1</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
            <span>
              Velit vitae sapiente ut culpa optio iste nostrum quae? Voluptates
              commodi corrupti molestias numquam. Vel autem dolorum hic placeat
              quisquam, velit cupiditate, dolor exercitationem doloribus
              voluptatibus omnis eveniet! Quae, illo?
            </span>
            <span>
              Commodi tenetur temporibus consectetur maiores sint earum,
              possimus voluptates facere recusandae eveniet optio pariatur ab
              totam aspernatur ratione autem voluptatum alias voluptatibus atque
              expedita, sed tempore necessitatibus nam ipsum. Tempora!
            </span>
          </p>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              ipsa dicta cumque id reprehenderit vitae itaque autem, quod
              voluptatem quam, assumenda ullam magnam molestiae! Consequatur
              rerum nesciunt totam culpa perspiciatis!
            </span>
            <span>
              Nemo magnam cumque deserunt neque laborum est, optio eos quis
              laudantium minus quos in non distinctio, tempora quisquam
              voluptatibus magni qui, molestias corrupti ab. Ut dignissimos
              doloremque tempora autem quasi?
            </span>
            <span>
              Doloremque magnam laudantium, dolorem impedit necessitatibus
              saepe, accusantium incidunt nesciunt iste, error ex omnis eveniet
              eos consectetur tempore ad quod itaque reprehenderit adipisci
              minima. Neque itaque autem id aut quaerat.
            </span>
          </p>
          <h4 className="font-medium text-3xl mb-4">Heading 2</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
            <span>
              Velit vitae sapiente ut culpa optio iste nostrum quae? Voluptates
              commodi corrupti molestias numquam. Vel autem dolorum hic placeat
              quisquam, velit cupiditate, dolor exercitationem doloribus
              voluptatibus omnis eveniet! Quae, illo?
            </span>
            <span>
              Commodi tenetur temporibus consectetur maiores sint earum,
              possimus voluptates facere recusandae eveniet optio pariatur ab
              totam aspernatur ratione autem voluptatum alias voluptatibus atque
              expedita, sed tempore necessitatibus nam ipsum. Tempora!
            </span>
          </p>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              ipsa dicta cumque id reprehenderit vitae itaque autem, quod
              voluptatem quam, assumenda ullam magnam molestiae! Consequatur
              rerum nesciunt totam culpa perspiciatis!
            </span>
            <span>
              Nemo magnam cumque deserunt neque laborum est, optio eos quis
              laudantium minus quos in non distinctio, tempora quisquam
              voluptatibus magni qui, molestias corrupti ab. Ut dignissimos
              doloremque tempora autem quasi?
            </span>
            <span>
              Doloremque magnam laudantium, dolorem impedit necessitatibus
              saepe, accusantium incidunt nesciunt iste, error ex omnis eveniet
              eos consectetur tempore ad quod itaque reprehenderit adipisci
              minima. Neque itaque autem id aut quaerat.
            </span>
          </p>
          <h4 className="font-medium text-3xl mb-4">Heading 3</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
            <span>
              Velit vitae sapiente ut culpa optio iste nostrum quae? Voluptates
              commodi corrupti molestias numquam. Vel autem dolorum hic placeat
              quisquam, velit cupiditate, dolor exercitationem doloribus
              voluptatibus omnis eveniet! Quae, illo?
            </span>
            <span>
              Commodi tenetur temporibus consectetur maiores sint earum,
              possimus voluptates facere recusandae eveniet optio pariatur ab
              totam aspernatur ratione autem voluptatum alias voluptatibus atque
              expedita, sed tempore necessitatibus nam ipsum. Tempora!
            </span>
          </p>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              ipsa dicta cumque id reprehenderit vitae itaque autem, quod
              voluptatem quam, assumenda ullam magnam molestiae! Consequatur
              rerum nesciunt totam culpa perspiciatis!
            </span>
            <span>
              Nemo magnam cumque deserunt neque laborum est, optio eos quis
              laudantium minus quos in non distinctio, tempora quisquam
              voluptatibus magni qui, molestias corrupti ab. Ut dignissimos
              doloremque tempora autem quasi?
            </span>
            <span>
              Doloremque magnam laudantium, dolorem impedit necessitatibus
              saepe, accusantium incidunt nesciunt iste, error ex omnis eveniet
              eos consectetur tempore ad quod itaque reprehenderit adipisci
              minima. Neque itaque autem id aut quaerat.
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
