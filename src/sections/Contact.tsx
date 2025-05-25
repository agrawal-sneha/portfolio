import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { setupAnimations } from '../utils/animations';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    setupAnimations();
  }, []);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'agrawalsnehu16@gmail.com',
      href: 'mailto:agrawalsnehu16@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 93301 39655',
      href: 'tel:+919330139655',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="card p-6 text-center fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{info.title}</h3>
              {info.href ? (
                <a 
                  href={info.href} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-center">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-center">
              There was an error sending your message. Please try again.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                placeholder="Job Opportunity"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary inline-flex items-center gap-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;