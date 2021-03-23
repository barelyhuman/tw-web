import { useState } from 'react';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { Loader } from 'react-feather';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [mailSent, setMailSent] = useState(false);

  const handleNext = () => {
    if (!email.length) {
      return;
    }
    setMailSent(true);
    const handler = setTimeout(() => {
      setMailSent(false);
    }, 10000);

    return () => {
      clearTimeout(handler);
    };
  };

  return (
    <>
      <section className="container-boundaries">
        <Header />
        <main className="container">
          <h1 className="text-center">Let's get you started</h1>

          {!mailSent ? (
            <div className="text-center">
              <input
                type="text"
                placeholder="Enter your e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="ml-1" onClick={handleNext}>
                Next
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-center">
                <div>
                  <h3>Login Email sent to {email}</h3>
                  <p></p>
                  <p>
                    A magic login link was sent to your email: {email}.
                    <br />
                    Kindly accept the login request in the email to move
                    forward.
                  </p>
                  <p className="text-center">
                    <strong>Waiting for confirmation</strong>
                    <br />
                    <Loader className="infinite-spinner"></Loader>
                  </p>
                </div>
              </div>
            </>
          )}

          <p>
            <a href="/" className="flex align-center">
              <i data-feather="chevron-left"></i>Go Back
            </a>
          </p>
        </main>
        <Footer />
      </section>
    </>
  );
}
