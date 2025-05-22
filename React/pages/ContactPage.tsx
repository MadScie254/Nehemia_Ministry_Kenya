
import React, { useState } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import Button from '../components/ui/Button';
import { CONTACT_DETAILS } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Placeholder for form submission logic (e.g., send to an API)
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form after a delay or on successful submission from backend
      setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false); // Allow new submissions
      }, 5000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-300 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
        <p className="text-green-600">Thank you for contacting us. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 bg-white rounded-lg shadow-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
               className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`} />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
               className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`} />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
               className={`mt-1 block w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`} />
        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`}></textarea>
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full" iconLeft={<i className="fas fa-paper-plane"></i>}>
          Send Message
        </Button>
      </div>
    </form>
  );
};

const ContactInfo: React.FC = () => (
  <div className="bg-sky-600 text-white p-6 md:p-8 rounded-lg shadow-xl">
    <h3 className="text-2xl font-bold mb-6">Get in Touch Directly</h3>
    <div className="space-y-4">
      <div className="flex items-start">
        <i className="fas fa-map-marker-alt text-xl text-amber-300 mt-1 mr-4"></i>
        <div>
          <h4 className="font-semibold">Our Address</h4>
          <p>{CONTACT_DETAILS.address}</p>
        </div>
      </div>
      <div className="flex items-start">
        <i className="fas fa-phone text-xl text-amber-300 mt-1 mr-4"></i>
        <div>
          <h4 className="font-semibold">Phone</h4>
          <p>{CONTACT_DETAILS.phone}</p>
        </div>
      </div>
      <div className="flex items-start">
        <i className="fas fa-envelope text-xl text-amber-300 mt-1 mr-4"></i>
        <div>
          <h4 className="font-semibold">Email</h4>
          <p><a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:underline">{CONTACT_DETAILS.email}</a></p>
        </div>
      </div>
      <div className="flex items-start">
        <i className="fab fa-whatsapp text-xl text-amber-300 mt-1 mr-4"></i>
        <div>
          <h4 className="font-semibold">WhatsApp</h4>
          <p><a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">Chat with us on WhatsApp</a></p>
        </div>
      </div>
    </div>
  </div>
);


const MapPlaceholder: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.673700989351!2d34.88071961475716!3d0.2910919998430105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d4f3aa7c582b%3A0x9d5a4789ea9b8d43!2sKakamega!5e0!3m2!1sen!2ske!4v1626868900000!5m2!1sen!2ske" // Replace with actual Mukhonje coordinates if known
      width="100%" 
      height="100%" 
      style={{ border:0 }} 
      allowFullScreen={true} 
      loading="lazy"
      title="Nehemia Ministry Location"
    ></iframe>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <>
      <SectionHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you! Whether you have a question, a prayer request, or want to learn more about our ministry, please reach out."
      />
      <div className="grid lg:grid-cols-5 gap-8 md:gap-12 mb-12">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
      </div>
      
      <SectionHeader title="Visit Our Main Church" subtitle="Find us in Mukhonje, Kakamega County." />
      <MapPlaceholder />
    </>
  );
};

export default ContactPage;
