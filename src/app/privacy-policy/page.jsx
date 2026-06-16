export const metadata = {
  title: "Privacy Policy | Blue Lotus Spa",
  description: "Privacy Policy for Blue Lotus Spa",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-pink-100">
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
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
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name,
                phone number, email address, and appointment details
                when you contact us or book our services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                2. How We Use Your Information
              </h2>
              <p>
                Your information helps us provide spa services,
                manage appointments, improve customer experience,
                and communicate important updates.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                3. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect
                your personal information from unauthorized access,
                disclosure, or misuse.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                4. Cookies
              </h2>
              <p>
                Our website may use cookies to improve browsing
                experience and analyze website traffic.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                5. Third-Party Services
              </h2>
              <p>
                We may use trusted third-party services for website
                analytics, booking systems, and communication purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                6. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your
                personal information by contacting us.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-pink-600">
                7. Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy,
                please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}