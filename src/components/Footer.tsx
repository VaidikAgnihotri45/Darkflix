import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 py-10 px-4 md:px-12 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <a href="#" className="hover:text-white transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition">Audio Description</a>
            <a href="#" className="block hover:text-white transition">Investor Relations</a>
            <a href="#" className="block hover:text-white transition">Legal Notices</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition">Help Center</a>
            <a href="#" className="block hover:text-white transition">Jobs</a>
            <a href="#" className="block hover:text-white transition">Cookie Preferences</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition">Gift Cards</a>
            <a href="#" className="block hover:text-white transition">Terms of Use</a>
            <a href="#" className="block hover:text-white transition">Corporate Information</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition">Media Center</a>
            <a href="#" className="block hover:text-white transition">Privacy</a>
            <a href="#" className="block hover:text-white transition">Contact Us</a>
          </div>
        </div>

        {/* Service Code */}
        <div className="mt-8">
          <button className="border border-gray-600 text-gray-400 text-xs py-1 px-2 hover:text-white transition">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-6">© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;