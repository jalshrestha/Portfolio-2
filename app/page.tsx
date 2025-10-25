import { Mail, Linkedin, Github, Globe, FileText } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <header className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="mb-12 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Jaljala Shrestha Lama
          </h1>
        </header>

        <section className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            I'm Jaljala, a deeply ambitious and analytical Computer Science undergrad at Northern Kentucky
            University, driven by an unyielding blend of discipline, curiosity, and visionary foresight. I approach challenges as a researcher unraveling complexities, an engineer forging solutions, and a strategist charting paths to transformation—intensely pursuing knowledge in reinforcement learning and quantitative finance, always bridging theory to tangible impact. I've cultivated a profound resilience that fuels my quest for excellence, innovation, and meaningful change. Passionate about the frontiers of AI, machine learning, finance, and privacy—interwoven with philosophical inquiries into human potential and consciousness—I'm currently advancing NLP research for ethical LLM deployments, architecting multi-agent systems for dynamic applications in trading and exploration, and harmonizing personal evolution with aspirations in quantitative roles, encompassing holistic well-being through travel, fitness, and financial wisdom.
          </p>
        </section>




        <section className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Projects</h2>

          <div className="space-y-8">
            {/* Neural Options Oracle */}
            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Neural Options Oracle</h3>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                AI Trading Platform with FastAPI, OpenAI agents for analysis, LightGBM boosting, and Prophet
                forecasting; scalable infrastructure via Docker and Supabase.
              </p>
              <a
                href="https://github.com/jalshrestha/Option-Oracle"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Circus Escape</h3>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                Dark atmospheric text-based adventure game built with KorGE engine. Navigate through the mysterious "Time Enders Circus" with immersive story, inventory system, and branching dialogue choices.
              </p>
              <a
                href="https://github.com/jalshrestha/Circus-Escape"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Wanderer */}
            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Wanderer</h3>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                AI Travel Companion & Social Matching Platform – Full-stack app using React, Node.js, Firebase, and
                Gemini AI for intelligent itineraries and user matching.
              </p>
              <a
                href="https://github.com/jalshrestha/Wanderer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Crypto Price Prediction */}
            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Crypto Price Prediction</h3>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                LSTM ensemble wrapped with Gemini RAG for explainable forecasts; includes technical indicators and
                sentiment analysis pipeline.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Thoughts</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                The universe's mysteries aren't just scientific—they're philosophical invitations to question existence, purpose, and the interplay of chaos and order.
              </span>
            </li>
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                True learning thrives on diversity, weaving threads from science, philosophy, art, and finance to reveal unexpected connections and deeper insights.
              </span>
            </li>
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Independence forges unbreakable resilience, transforming solitude into a powerful catalyst for self-discovery and unyielding personal growth.
              </span>
            </li>
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Life's impermanence sharpens our focus: hard work isn't about defying the inevitable end, but about infusing every moment with meaning and legacy.
              </span>
            </li>
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                The perfect human isn't flawless—it's a harmonious blend of intellectual curiosity, emotional wisdom, moral integrity, and the courage to evolve.
              </span>
            </li>
            <li className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Consciousness emerges at the nexus of technology and philosophy, where AI might one day mirror the human soul's profound, hidden depths.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Publications</h2>
          <ul className="space-y-4">
            <li>
              <a
                href={process.env.NODE_ENV === 'production' ? '/Portfolio-2/blockchain.pdf' : '/blockchain.pdf'}
                className="group inline-flex items-start gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span>
                  <span className="font-semibold">Hybrid GNN + CodeBERT:</span> Architecture for detecting fraudulent
                  Ethereum smart contracts.
                </span>
              </a>
            </li>
            <li>
              <a
                href={process.env.NODE_ENV === 'production' ? '/Portfolio-2/2025_ISCAP_LLM_course_design__Updated_.pdf' : '/2025_ISCAP_LLM_course_design__Updated_.pdf'}
                className="group inline-flex items-start gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span>
                  <span className="font-semibold">ISCAP 2025 Paper:</span> LLM Course Design Framework - Innovative approaches to integrating Large Language Models in educational curricula and course development methodologies.
                </span>
              </a>
            </li>
            <li>
              <a
                href={process.env.NODE_ENV === 'production' ? '/Portfolio-2/2025_ChatGPT_ICETC_LLM_course_design-2.pdf' : '/2025_ChatGPT_ICETC_LLM_course_design-2.pdf'}
                className="group inline-flex items-start gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span>
                  <span className="font-semibold">ICETC Submission:</span> Semantic-novelty metric using multiple LLMs for automated review processes.
                </span>
              </a>
            </li>
            <li>
              <a
                href={process.env.NODE_ENV === 'production' ? '/Portfolio-2/01_19979_cis-4.pdf' : '/01_19979_cis-4.pdf'}
                className="group inline-flex items-start gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span>
                  <span className="font-semibold">MIPRO 2025 Paper:</span> Analyzing ChatGPT users and prompts for privacy vulnerabilities and safer LLM practices.
                </span>
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Contact</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/jalshrestha"
              className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="mailto:jaljalalama56@gmail.com"
              className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jaljala-shrestha-lama-78b5b1212/"
              className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://jalshrestha.github.io/Portfolio/"
              className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" />
              Portfolio
            </a>
          </div>
        </section>

        <section className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
          <a
            href={process.env.NODE_ENV === 'production' ? '/Portfolio-2/Jaljala_Resume.pdf' : '/Jaljala_Resume.pdf'}
            className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-5 w-5" />
            View Resume
          </a>
        </section>

        {/* Footer */}
        <footer className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright © 2025 Jaljala Shrestha Lama</p>
        </footer>
      </div>
    </div>
  )
}
