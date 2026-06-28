import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Mail, Linkedin, Github, MessageCircle, Send, Briefcase } from "lucide-react";
import { useState } from "react";
import { sendEmailFn } from "@/lib/mail";
import { toast } from "sonner";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build <span className="text-gradient">something legendary</span></>}
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {[
              { Icon: Mail, label: "Email", value: "prince62058@gmail.com", href: "mailto:prince62058@gmail.com" },
              { Icon: Linkedin, label: "LinkedIn", value: "/in/prince62058", href: "https://www.linkedin.com/in/prince62058/" },
              { Icon: Github, label: "GitHub", value: "@prince62058", href: "https://github.com/prince62058" },
              { Icon: Briefcase, label: "Fiverr", value: "Hire on Fiverr", href: "#" },
              { Icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: "#" },
            ].map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] flex items-center justify-center text-background">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={async (e) => {
              e.preventDefault();
              if (isSending) return;
              
              setIsSending(true);
              const formElement = e.currentTarget;
              const formData = new FormData(formElement);
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const subject = formData.get("subject") as string;
              const message = formData.get("message") as string;
              
              try {
                await sendEmailFn({ data: { name, email, subject, message } });
                setSent(true);
                toast.success("Message sent successfully!");
                formElement.reset();
                setTimeout(() => setSent(false), 4000);
              } catch (err) {
                console.error("Failed to send message:", err);
                toast.error("Failed to send message. Please try again later.");
              } finally {
                setIsSending(false);
              }
            }}
            className="glass rounded-3xl p-8 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[oklch(0.7_0.28_295)/0.2] blur-3xl" />
            <div className="relative space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Name</label>
                  <input required name="name" className="w-full mt-1.5 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Email</label>
                  <input required type="email" name="email" className="w-full mt-1.5 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Subject</label>
                <input name="subject" className="w-full mt-1.5 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Message</label>
                <textarea required name="message" rows={4} className="w-full mt-1.5 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground resize-none transition-colors" placeholder="Tell me about your project..." />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] text-background font-semibold glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition-all"
              >
                {isSending ? (
                  "Sending Message..."
                ) : sent ? (
                  "Message Sent ✓"
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
