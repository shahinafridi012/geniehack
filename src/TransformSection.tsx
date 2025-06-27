import { useState } from "react";
import emailjs from "emailjs-com";

export default function TransformSection() {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Message form states
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [message, setMessage] = useState("");

  // Schedule form states
  const [scheduleName, setScheduleName] = useState("");
  const [scheduleEmail, setScheduleEmail] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  // EmailJS config
  const SERVICE_ID = "service_ifm7twd";
  const TEMPLATE_ID_MESSAGE = "template_jemm3cq";
  const TEMPLATE_ID_SCHEDULE = "template_zorn3pd";
  const USER_ID = "Vv-nEzPOyKLyzcjg-";

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName.trim() || !msgEmail.trim() || !message.trim()) return;

    setSending(true);
    setSuccessMsg("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_MESSAGE,
        {
          from_name: msgName,
          from_email: msgEmail,
          message: message,
        },
        USER_ID
      );
      setSuccessMsg("Message sent successfully!");
      setMsgName("");
      setMsgEmail("");
      setMessage("");
      setShowMessageModal(false);
    } catch (error) {
      setSuccessMsg("Failed to send message. Try again later.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const sendScheduleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleName.trim() || !scheduleEmail.trim() || !scheduleDate.trim())
      return;

    setSending(true);
    setSuccessMsg("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_SCHEDULE,
        {
          from_name: scheduleName,
          from_email: scheduleEmail,
          schedule_date: scheduleDate,
        },
        USER_ID
      );
      setSuccessMsg("Schedule request sent! We'll contact you soon.");
      setScheduleName("");
      setScheduleEmail("");
      setScheduleDate("");
      setShowScheduleModal(false);
    } catch (error) {
      setSuccessMsg("Failed to send schedule request. Try again later.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#4b1e7e] to-[#752f91] text-white text-center py-20 px-6 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-pink-400 rounded-full filter blur-3xl opacity-30 animate-pulse mix-blend-screen"
      ></div>

      <h2 className="relative text-4xl md:text-5xl font-bold z-10">
        Ready to Transform Your <br />
        <span className="text-pink-400 magical-glow">Digital Presence?</span>
      </h2>
      <p className="text-gray-200 mt-4 max-w-2xl mx-auto z-10 relative">
        Join hundreds of satisfied clients who have grown their businesses with
        GenieHack. Let's make your digital dreams a reality!
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap z-10 relative">
        <button
          onClick={() => setShowMessageModal(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition-all"
        >
          Get Started Now →
        </button>
        <button
          onClick={() => setShowScheduleModal(true)}
          className="bg-black hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold text-white shadow"
        >
          Schedule a Call
        </button>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <Modal
          onClose={() => setShowMessageModal(false)}
          title="Send us a message"
        >
          <form onSubmit={sendMessage} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={msgName}
              onChange={(e) => setMsgName(e.target.value)}
              required
              disabled={sending}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={msgEmail}
              onChange={(e) => setMsgEmail(e.target.value)}
              required
              disabled={sending}
            />
            <textarea
              placeholder="Write your message here..."
              className="resize-none rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={sending}
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Modal>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <Modal
          onClose={() => setShowScheduleModal(false)}
          title="Schedule a Call"
        >
          <form onSubmit={sendScheduleRequest} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={scheduleName}
              onChange={(e) => setScheduleName(e.target.value)}
              required
              disabled={sending}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={scheduleEmail}
              onChange={(e) => setScheduleEmail(e.target.value)}
              required
              disabled={sending}
            />
            <input
              type="datetime-local"
              className="rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              required
              disabled={sending}
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
              disabled={sending}
            >
              {sending ? "Sending..." : "Request Schedule"}
            </button>
          </form>
        </Modal>
      )}

      {successMsg && (
        <p className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-600 px-6 py-3 rounded-md shadow-lg z-50 animate-fadeIn text-white">
          {successMsg}
        </p>
      )}

      <style>{`
        .magical-glow {
          position: relative;
          z-index: 1;
          text-shadow:
            0 0 5px #f472b6,
            0 0 10px #f43f5e,
            0 0 20px #db2777,
            0 0 30px #be185d,
            0 0 40px #9d174d;
          animation: glowPulse 3s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% {
            text-shadow:
              0 0 5px #f472b6,
              0 0 10px #f43f5e,
              0 0 20px #db2777,
              0 0 30px #be185d,
              0 0 40px #9d174d;
          }
          50% {
            text-shadow:
              0 0 10px #f472b6,
              0 0 20px #f43f5e,
              0 0 30px #db2777,
              0 0 40px #be185d,
              0 0 50px #9d174d;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

function Modal({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
