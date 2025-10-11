// import { motion } from 'framer-motion';

// interface FounderCardProps {
//   name: string;
//   title: string;
//   quirk: string;
//   perk: string;
//   powerMove: string;
//   takeaway: string;
//   delay?: number;
// }

// export const FounderCard = ({
//   name,
//   title,
//   quirk,
//   perk,
//   powerMove,
//   takeaway,
//   delay = 0
// }: FounderCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay }}
//       whileHover={{ scale: 1.02 }}
//       className="glass rounded-2xl p-8 relative overflow-hidden group"
//     >
//       {/* Gold accent bar */}
//       <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative z-10">
//         <h3 className="text-3xl font-bold mb-2 text-gradient-gold">{name}</h3>
//         <p className="text-primary text-sm uppercase tracking-wider mb-6">{title}</p>

//         <div className="space-y-4 text-foreground/80">
//           <div>
//             <span className="text-primary font-semibold">Quirk:</span>
//             <p className="mt-1">{quirk}</p>
//           </div>

//           <div>
//             <span className="text-primary font-semibold">Perk:</span>
//             <p className="mt-1">{perk}</p>
//           </div>

//           <div>
//             <span className="text-primary font-semibold">Power Move:</span>
//             <p className="mt-1">{powerMove}</p>
//           </div>

//           <div className="pt-4 border-t border-border">
//             <p className="text-sm italic text-muted-foreground">{takeaway}</p>
//           </div>
//         </div>
//       </div>

//       {/* Glow effect */}
//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </motion.div>
//   );
// };

import { motion } from "framer-motion";

interface FounderCardProps {
  name: string;
  title: string;
  quirk: string;
  perk: string;
  powerMove: string;
  takeaway: string;
  delay?: number;
}

export const FounderCard = ({
  name,
  title,
  quirk,
  perk,
  powerMove,
  takeaway,
  delay = 0,
}: FounderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-2 text-gradient-gold">{name}</h3>
        <p className="text-primary text-sm uppercase tracking-wider mb-6">
          {title}
        </p>

        <div className="space-y-4 text-slate-600">
          <div>
            <span className="text-primary font-semibold">Quirk:</span>
            <p className="mt-1">{quirk}</p>
          </div>

          <div>
            <span className="text-primary font-semibold">Perk:</span>
            <p className="mt-1">{perk}</p>
          </div>

          <div>
            <span className="text-primary font-semibold">Power Move:</span>
            <p className="mt-1">{powerMove}</p>
          </div>

          <div className="pt-4 border-t border-slate-300/70">
            <p className="text-sm italic text-slate-500">{takeaway}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
