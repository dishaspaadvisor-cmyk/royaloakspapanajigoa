export const metadata = {
  title: "Terms & Conditions | Blue Lotus Spa",
  description: "Terms and Conditions for Blue Lotus Spa",
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-pink-100">
            Please read these terms carefully before using our website
            and spa services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-pink-100 bg-white p-8 shadow-lg md:p-12">
          <p className="mb-8 text-gray-600">
            Last Updated: June 2026
          </p>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website or using our services, you agree
                to comply with these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                2. Spa Appointments
              </h2>
              <p>
                Appointments should be booked in advance and customers
                are encouraged to arrive on time.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                3. Cancellation Policy
              </h2>
              <p>
                Appointments canceled with insufficient notice may be
                subject to cancellation fees according to our policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                4. Health Information
              </h2>
              <p>
                Clients should disclose any medical conditions,
                allergies, or concerns before receiving treatments.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                5. Payments
              </h2>
              <p>
                Payment for services must be completed at the time of
                service unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                6. Website Usage
              </h2>
              <p>
                Users agree not to misuse the website, interfere with
                functionality, or attempt unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                7. Limitation of Liability
              </h2>
              <p>
                We are not liable for any indirect, incidental, or
                consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms and Conditions
                at any time. Changes will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                9. Contact Information
              </h2>
              <p>
                If you have any questions regarding these Terms &
                Conditions, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}