"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"


interface BenefitProps {
    benefit: {
        title: string
        description: string
    } 
}

const Benefit = ({ benefit }: BenefitProps) => {
    const benefitVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            transition: {
            delay: i * 0.2,
            duration: 0.7,
            ease: "easeInOut",
            type: "spring",
            stiffness: 120,
            damping: 20,
            },
        }),
        hover: {
            scale: 1.05,
            rotate: 2,
            transition: {
            duration: 0.3,
            ease: "easeInOut",
            },
        },
        }

    return (
    <div>
        <motion.div
          key={benefit.title}
          custom={benefit.title}
          variants={benefitVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="p-5 bg-slate-800 rounded-md flex items-start gap-3 shadow-md hover:shadow-lg transition"
        >
          <CheckCircle className="text-green-500 mt-1" size={28} />
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">{benefit.title}</h3>
            <p className="text-slate-400 text-sm md:text-base">{benefit.description}</p>
          </div>
        </motion.div>
    </div>
    )
}

export default Benefit