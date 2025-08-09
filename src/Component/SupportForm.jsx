import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function SupportForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      toast.success("Thank you! We will get back to you soon");
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally API call here
    console.log("Support message sent:", { email, message });
    setSubmitted(true);
  };


  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h3>Contact Support</h3>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%", height: 100, marginBottom: 8 }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SupportForm;
