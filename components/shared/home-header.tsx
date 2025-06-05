"use client"

import { Handshake } from "lucide-react"
import { motion } from "framer-motion"

interface HomeHeaderProps {
    username: string
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
      duration: 0.6,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6, delay: 1 } },
}

const HomeHeader = ({ username }: HomeHeaderProps) => {
  return (
    <motion.section
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-2xl md:text-4xl flex flex-wrap justify-center items-center gap-2 font-bold mb-4 text-center"
        variants={itemVariants}
      >
        Salom,{" "}
        <motion.span className="text-sky-600" variants={itemVariants}>
          {username}
        </motion.span>
        <Handshake size={30} />
      </motion.h1>
      <motion.p
        className="text-sm md:text-lg text-slate-300"
        variants={itemVariants}
      >
        UCD (Uzun Devs Community) platformangizga xush kelibsiz! Bu yerda siz nafaqat bilim va texnik tajribalarni, balki hayotiy mashaqqatlaringizni, o‘rgangan saboqlaringizni va o‘z yutuqlaringizni boshqalar bilan bo‘lishishingiz mumkin.
        <br />
        <motion.span
          className="text-sky-400 font-medium"
          variants={itemVariants}
        >
          Zero, bilim — ulashilganda mukammallashadi. Bilim o‘rgatish uchun o‘rganiladi.
        </motion.span>
      </motion.p>
    </motion.section>
  )
}

export default HomeHeader
