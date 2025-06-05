"use client"

import { IFeature } from "@/types"
import { motion } from "framer-motion"

const FeatureCard = ({ title, description, icon }: IFeature) => {
  const featureVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
}

  return (
    <motion.div
      key={title}
      custom={title}
      variants={featureVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-6 border shadow-md rounded-2xl hover:shadow-xl transition cursor-pointer">
        <div className="mb-4">{icon as string}</div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard
