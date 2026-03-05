'use client'

import { motion } from "framer-motion"

export default function ProfilePage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  const experiences = [
    {
      company: "Rudy Technology Co., Ltd.",
      role: "Backend Developer",
      period: "Apr 2021 - Present",
      desc: "Developing backend services, APIs, and system integrations for enterprise internal platforms."
    },
    {
      company: "S.L.A.K Public Co., Ltd.",
      role: "Website Developer (Trainee)",
      period: "Jul 2020 - Mar 2021",
      desc: "Developed and maintained company websites using modern web technologies."
    }
  ]

  const skillGroups = [
    {
      title: "Backend",
      skills: ["NestJS", "Laravel", "Node.js", "Golang", "Python"]
    },
    {
      title: "Frontend",
      skills: ["Vue.js / Nuxt.js", "React / Next.js", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Redis"]
    },
    {
      title: "DevOps / Cloud",
      skills: ["AWS EC2", "Azure AD"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "GitLab", "Figma", "Jest"]
    },
    {
      title: "AI / Integration",
      skills: [
        "AI API Integration",
        "AI NLP Model",
        "Prompt Engineering",
        "Webhook Integration",
        "Queue / Background Jobs",
        "OneSignal",
        "LINE LIFF"
      ]
    }
  ]

  const projects = [
    {
      title: "Enterprise Internal Management System",
      desc: "Internal enterprise platform for managing projects, workflows, and operational processes with role-based access and dashboard monitoring."
    },
    {
      title: "LINE Chatbot Automation Platform",
      desc: "Multi-tenant chatbot platform built on LINE Messaging API with AI-powered automation, webhook processing, and scalable backend services."
    },
    {
      title: "Notification & Messaging Service",
      desc: "High-performance notification system supporting push messaging and background job processing using Redis queues and third-party integrations."
    },
    {
      title: "Field Service Management System",
      desc: "System for managing on-site installation and service operations including job scheduling, technician assignments, and operational dashboards."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-10">

        <motion.img
          src="/profile.jpg"
          className="w-36 h-36 rounded-full shadow-xl mb-6 object-cover"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl font-bold"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Kawinpat Raweepornpisarn
        </motion.h1>

        <motion.p
          className="text-gray-500 mt-3 text-lg"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          Backend Developer • AI Developer
        </motion.p>

      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6 mb-20">

        <motion.h2
          className="text-2xl font-bold mb-4"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-600 leading-relaxed"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          Backend developer specializing in API development, system integration,
          and scalable backend architecture. Experienced in building enterprise
          systems, chatbot platforms, and AI-powered applications using modern
          technologies such as NestJS, Laravel, Redis, and cloud infrastructure.
        </motion.p>

      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <motion.h2
          className="text-2xl font-bold mb-10"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillGroups.map(group => (

            <motion.div
              key={group.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >

              <h3 className="font-bold mb-3">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {group.skills.map(skill => (

                  <span
                    key={skill}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Work Experience
        </h2>

        <div className="space-y-4">

          {experiences.map((exp, i) => (

            <div
              key={i}
              className="bg-white/60 backdrop-blur-md border border-white/40 p-5 rounded-xl shadow"
            >

              <div className="flex justify-between flex-wrap">

                <h3 className="font-bold">
                  {exp.role}
                </h3>

                <span className="text-sm text-gray-500">
                  {exp.period}
                </span>

              </div>

              <p className="text-gray-700 mt-1">
                {exp.company}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {exp.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 mt-10 mb-20">

        <motion.h2
          className="text-2xl font-bold mb-5"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map(p => (

            <div
              key={p.title}
              className="
                p-6
                rounded-2xl
                bg-white/30
                backdrop-blur-xl
                border border-white/40
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                transition
              "
            >

              <h3 className="font-bold text-lg mb-2">
                {p.title}
              </h3>

              <p className="text-gray-700 text-sm">
                {p.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="text-center py-16 border-t">

        <motion.h2
          className="text-2xl font-bold mb-4"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-gray-500"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          kawinpat.ra@gmail.com
        </motion.p>

      </section>

    </div>
  )
}