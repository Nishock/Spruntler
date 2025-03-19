import * as React from "react";
import { Button } from "./your-button-path"; // Update with actual path
import Stepper, { Step } from "./Stepper";

export function ContactFormButton() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <>
      <Button 
        onClick={() => setIsModalOpen(true)}
        variant="outline"
        className="contact-us-button"
      >
        Contact Us
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <Stepper
              initialStep={1}
              onFinalStepCompleted={() => setIsModalOpen(false)}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-600">We&apos; d love to hear from you!</p>
              </Step>
              <Step>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </Step>
              <Step>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full p-2 border rounded h-32"
                      placeholder="Your message..."
                    />
                  </div>
                </div>
              </Step>
              <Step>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                  <p>We&apos; ll get back to you shortly.</p>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      )}
    </>
  );
}