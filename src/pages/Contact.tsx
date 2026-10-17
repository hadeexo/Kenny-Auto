import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactCard {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}

const contactCards: ContactCard[] = [
  {
    icon: Phone,
    title: "0803 865 9145",
    text: "Call us Mon–Fri, 9am–6pm",
    href: "tel:+2348038659145",
  },
  {
    icon: Mail,
    title: "info@yourdomain.com",
    text: "We reply within one business day",
    href: "mailto:info@yourdomain.com",
  },
  {
    icon: MessageCircle,
    title: "Chat With Us",
    text: "Message us on WhatsApp",
    href: "https://wa.me/234803659145",
  },
];


const fieldClass =
  "w-full rounded-xl bg-[#bebebe] px-5 py-4 text-base text-white " +
  "placeholder:text-gray-500 outline-none border border-transparent " +
  "focus:border-[#ffffff] transition-colors";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // hook up to your API / email service here
    console.log(form);
  };

  return (
    <section className="bg-[#e5e7f0] px-6 py-20 text-black">
      <div className="mx-auto max-w-3xl">
        {/* Heading block */}
        <div className="mb-12 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[3px] w-5 rounded bg-[#1704c0]" />
            <span className="text-sm font-medium uppercase text-[#1704c0]">
              Contact us
            </span>
          </div>
          <h2 className="text-5xl font-bold md:text-6xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400">
            Have a question about a car or want to book a viewing? Send us a
            message and we'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your First Name"
              className={fieldClass}
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your Last Name"
              className={fieldClass}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className={fieldClass}
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className={fieldClass}
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write Your Message Here..."
            rows={6}
            className={`${fieldClass} resize-none`}
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl border border-blue-500 bg-transparent py-4 text-base text-blue-500 transition-colors hover:bg-blue-500 hover:text-black"
          >
            Send Message
          </button>
        </form>

        {/* Contact cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, title, text, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#bebebe] px-4 py-6 text-center transition-colors hover:border-blue-500"
            >
              <Icon size={26} className="mb-3 text-blue-500" />
              <p className="text-base text-white">{title}</p>
              <p className="mt-2 text-sm text-gray-500">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
