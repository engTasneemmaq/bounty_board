/** @format */
export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">How can I apply for a bounty?</h3>
          <p className="text-gray-700">
            Simply browse through available bounties and click on "Apply Now" 
            to start the application process.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">How do I post a bounty?</h3>
          <p className="text-gray-700">
            If you are a company or project owner, you can post a bounty from your dashboard 
            by filling in the required details.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Is using Bounty Board free?</h3>
          <p className="text-gray-700">
            Creating an account is free. Posting and completing bounties may involve 
            agreed-upon payments between the poster and the developer.
          </p>
        </div>
      </div>
    </div>
  );
}
