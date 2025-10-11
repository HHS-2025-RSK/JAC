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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg p-10 max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="bg-white/70 border-slate-300/50 focus:border-primary transition-colors text-slate-800"
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-white/70 border-slate-300/50 focus:border-primary transition-colors text-slate-800"
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
            className="bg-white/70 border-slate-300/50 focus:border-primary transition-colors min-h-[150px] text-slate-800"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold text-lg py-6 transition-all duration-300"
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};
