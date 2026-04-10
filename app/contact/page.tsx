"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up to email API (Resend, SendGrid, etc.)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-amber-800 py-14 mb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="mt-3 text-amber-200 text-lg">
            Questions about an order? Custom piece in mind? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Location</p>
                    <p className="text-sm text-stone-500 mt-0.5">Lagrange, Wyoming 82221</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Phone</p>
                    <a
                      href="tel:+13075346506"
                      className="text-sm text-amber-700 hover:underline mt-0.5 block"
                    >
                      (307) 534-6506
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Email</p>
                    <a
                      href="mailto:sanderssalesofwyo@gmail.com"
                      className="text-sm text-amber-700 hover:underline mt-0.5 block break-all"
                    >
                      sanderssalesofwyo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Response Time</p>
                    <p className="text-sm text-stone-500 mt-0.5">We reply within 1–2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="custom-orders" className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <h3 className="font-bold text-stone-900 mb-2">Custom Orders Welcome</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Looking for something unique? We love creating custom pieces for special
                occasions, gifts, and home décor. Reach out and tell us your vision.
              </p>
            </div>

            <div id="shipping" className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
              <h3 className="font-bold text-stone-900 mb-2">Shipping Policy</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li>• Free shipping on orders $75+</li>
                <li>• Standard shipping: 5–7 business days</li>
                <li>• Expedited available at checkout</li>
                <li>• All orders packed with care</li>
              </ul>
            </div>

            <div id="returns" className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
              <h3 className="font-bold text-stone-900 mb-2">Return Policy</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Not happy? Return any item within 30 days for a full refund. Custom pieces
                are final sale. Contact us first and we&apos;ll make it right.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6">
                  <Check className="w-9 h-9 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900">Message Sent!</h2>
                <p className="mt-3 text-stone-500 max-w-sm">
                  Thank you for reaching out! We&apos;ll get back to you within 1–2 business days.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm space-y-5">
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Send Us a Message</h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      className="mt-1"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-1"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1"
                      placeholder="(307) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      className="mt-1"
                      placeholder="Custom order, question..."
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Tell us what you're looking for, or ask us anything..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-shine"
                  disabled={loading}
                >
                  {loading ? "Sending..." : <><Send className="mr-2 w-4 h-4" />Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
