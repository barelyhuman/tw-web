import Footer from '../components/common/footer'
import Header from '../components/common/header'

export default function Home() {
  return (
    <>
      <Header className="container-boundaries" />
      <div className="container-boundaries" >
        <nav>
          <a href="/" className="mr-2">
            Home
          </a>
          <a href="#about" className="mr-2">
            About
          </a>
          <a href="#features" className="mr-2">
            Features
          </a>
          <a href="#pricing" className="mr-2">
            Pricing
          </a>
          <a href="#contact" className="mr-2">
            Contact
          </a>
        </nav>
      </div>
      <main className="container-boundaries">
        <article>
          <h2 className="f-large text-center">Make Time Tracking a habit!</h2>
          <div className="mb-2 text-center">
            <a href="/login" className="button primary">
              Get Started
            </a>
          </div>
          <hr />
          <section className="mt-2">
            <h3 id="about">About</h3>
            <p>
              TillWhen was built to be used by people who need to get started
              with time management in their life while keeping it as simple as
              possible.
            </p>
            <p>
              While aimed at working individuals and project based workflows in
              mind, it can still be used by any individual to keep a daily
              timelog
            </p>
          </section>
          <section className="mt-2">
            <h3 id="features">Features</h3>
            <p>
              TillWhen aims to be simple and to the point, so we only add things
              that are really needed
            </p>
            <ul>
              <li>
                <strong>Dashboard</strong> - Overall Log Stats, know how
                productive you've been
              </li>
              <li>
                <strong>Worklogs</strong> - Go back in time, check your logs for
                a specific day
              </li>
              <li>
                <strong>Integrations</strong> - Slack, and more (Beta)
              </li>
              <li>
                <strong>Projects</strong> - Categorize timelogs into projects
              </li>
            </ul>
          </section>
          <section className="mt-2">
            <h3 id="pricing">Pricing</h3>
            <div className="border br-1 p-2 w-50">
              <h2 className="text-center">$2 - $$$</h2>
              <p class="p-1">
                We don't have any complex set of plans, you{' '}
                <strong>pre-pay </strong>
                for every month's worth of usage with whatever you wish to, with
                the minimum payment being $2
              </p>
            </div>
          </section>
          <section className="mt-2">
            <h3 id="contact">Contact</h3>
            <p>
              We are just a mail away. Send your queries to{' '}
              <a href="mailto:ahoy@barelyhuman.dev">ahoy@barelyhuman.dev</a> to
              get in touch.
            </p>
          </section>
        </article>
      </main>
      <Footer className="container-boundaries" />
    </>
  )
}
