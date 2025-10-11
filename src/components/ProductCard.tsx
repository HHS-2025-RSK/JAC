import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export const ProductCard = ({ title, subtitle, description, icon, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl p-10 relative overflow-hidden group"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 text-primary">
          {icon}
        </div>
        
        <h3 className="text-4xl font-bold mb-3 text-gradient-gold">{title}</h3>
        <p className="text-xl text-primary mb-6 font-semibold">{subtitle}</p>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
