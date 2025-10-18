// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useState } from 'react';

// export const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="glass rounded-2xl p-10 max-w-2xl mx-auto"
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
//             Name
//           </label>
//           <Input
//             id="name"
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="bg-background/50 border-border/50 focus:border-primary transition-colors"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
//             Email
//           </label>
//           <Input
//             id="email"
//             type="email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             className="bg-background/50 border-border/50 focus:border-primary transition-colors"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
//             Message
//           </label>
//           <Textarea
//             id="message"
//             value={formData.message}
//             onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//             className="bg-background/50 border-border/50 focus:border-primary transition-colors min-h-[150px]"
//             required
//           />
//         </div>

//         <Button
//           type="submit"
//           className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold text-lg py-6 transition-all duration-300"
//         >
//           Send Message
//         </Button>
//       </form>
//     </motion.div>
//   );
// };

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Note: Removed 'motion' import as the parent component handles the animation

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  // The <motion.div> wrapper has been removed.
  // This component now returns the <form> directly.
  // The parent 'ContactSection' provides the card background, padding, and animation.
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          // Updated styles for a solid look on a gradient background
          className="bg-white border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-colors text-slate-800"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-colors text-slate-800"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="bg-white border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-colors min-h-[150px] text-slate-800"
          required
        />
      </div>

      <Button
        type="submit"
        // Updated button to match the 'emerald' theme
        className="w-full bg-amber-600 hover:bg-emerald-700 text-white font-semibold text-lg py-6 transition-all duration-300"
      >
        Send Message
      </Button>
    </form>
  );
};
