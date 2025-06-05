import Header from "@/components/shared/header"
import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"
import { IUser, IFeature } from "@/types"
import {
  Users,
  FileText,
  MessageCircle,
  Code2,
  MonitorSmartphone,
  Share2,
} from "lucide-react"
import FeatureCard from "@/components/shared/features"
import Benefit from "@/components/shared/benefit"
import HomeHeader from "@/components/shared/home-header"

const HomePage = async () => {
  const session = await getServerSession(authOptions)
  const user: IUser = session.user

  return (
    <>
      <Header label="Home" />
      <main className="min-h-screen w-full text-white px-4 md:px-10 py-8 md:py-16">
        <div className="w-full">
          <HomeHeader username={user.username ? user.username: user.email }/>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
                <FeatureCard {...feature} key={index}/>
            ))}
          </section>

          <section className="p-6 rounded-md border-t border-slate-700 text-sky-400 text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">IT Sohasida Yangi Boshlayotganlarmi?</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base">
              Bizning platformada siz uchun ko‘plab mentorlik maqolalari, open source loyihalar, amaliy kod misollari va hayotiy tajribalar mavjud. O‘rganing, baham ko‘ring va o‘zingizni har tomonlama rivojlantiring!
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Platformaning Afzalliklari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <Benefit benefit={benefit} key={idx}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

const features: IFeature[] = [
  {
    title: "Jamoa",
    description: "Foydalanuvchilar bilan tanishing, profil oching va tarmog‘ingizni kengaytiring.",
    icon: <Users className="text-sky-600" size={36} />
  },
  {
    title: "Postlar",
    description: "O‘z fikrlaringizni ulashing, bilim almashing va IT yangiliklardan xabardor bo‘ling.",
    icon: <FileText className="text-green-600" size={36} />
  },
  {
    title: "Munozaralar",
    description: "Forumlar va chatlarda ishtirok eting, muammolarga yechim toping.",
    icon: <MessageCircle className="text-purple-600" size={36} />
  },
  {
    title: "Dasturlash Resurslari",
    description: "Frontend, Backend va Fullstack resurslar jamlanmasi siz uchun tayyor.",
    icon: <Code2 className="text-pink-600" size={36} />
  },
  {
    title: "Texnologiyalar Blogi",
    description: "Zamonaviy texnologiyalar haqida maqolalar va tajribalar bilan tanishing.",
    icon: <MonitorSmartphone className="text-orange-600" size={36} />
  },
  {
    title: "Tajribangizni bo‘lishing",
    description: "Hayotiy saboqlar, yutuq va mashaqqatlaringizni ulashing va boshqalarga ilhom bo‘ling.",
    icon: <Share2 className="text-red-600" size={36} />
  }
]

 const benefits: { title: string; description: string }[] = [
  {
    title: "Real jamoa bilan ishlash tajribasi",
    description: "Community loyihalar orqali haqiqiy muhitda kod yozish va hamkorlik qilish imkoniyati."
  },
  {
    title: "Mentorlik va yo‘naltirish",
    description: "Katta tajribaga ega dasturchilardan maslahatlar, fikrlar va yo‘naltirishlar."
  },
  {
    title: "Portfolio uchun amaliy ishlar",
    description: "Open source va community loyihalari orqali kuchli portfolio yaratish imkoniyati."
  },
  {
    title: "Shaxsiy o‘sish va ilhom",
    description: "O‘z tajribangizni boshqalar bilan baham ko‘rgan holda o‘zingizni kuchliroq his eting."
  },
  {
    title: "Loyihangizni ulashing, fikr oling va rivojlaning.",
    description: "Loyihangizni baham ko‘rib, fikr oling, kamchilik va yutuqlaringizni tahlil qiling, tez rivojlanish imkoniyatini yarating!"
  }
]

export default HomePage
