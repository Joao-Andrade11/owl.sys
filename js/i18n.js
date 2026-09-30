/* ============================================================
   i18n — PT (fonte no HTML) · EN · ES
   Seletor na navbar, preferência salva, sem flash.
   ============================================================ */
(function () {
  const I18N = {
    en: {
      "doc.title": "João Andrade — Junior Developer | Information Security & GRC",
      "doc.meta": "João Andrade, junior developer with an edge in Information Security and GRC. ISO/IEC 27001:2022 Lead Auditor, Cyber Defense technologist. Java, Spring Boot, Python and SQL. Creator of eTreinamentos. Open to opportunities and freelance projects.",
      skip: "Skip to content",
      "nav.about": "About", "nav.project": "Featured", "nav.projects": "Projects",
      "nav.journey": "Journey", "nav.services": "Services", "nav.cta": "Talk to me",
      "a11y.theme": "Toggle dark/light theme", "a11y.menu": "Open menu",
      "a11y.carousel": "3D projects carousel", "a11y.prev": "Rotate to previous card", "a11y.next": "Rotate to next card",
      "hero.eyebrow": "// JUNIOR DEVELOPER · INFORMATION SECURITY",
      "hero.subtitle": `I build software on a solid foundation: <strong>secure backend</strong>, clean code and measurable results. I come from <strong>Training &amp; Development and GRC</strong> — over three years among ISO audits, processes and people — and from there I brought the habit of observing first and solving with precision.`,
      "hero.cta1": "View projects", "hero.cta2": "Get in touch",
      "hero.loc": "Niterói · RJ — open to remote work",
      "term.hero": `&gt; booting owl.sys...

<span class="t-ok">[ OK ]</span> Developer profile loaded
<span class="t-ok">[ OK ]</span> Security layer armed

ROLE     : Junior Developer
EDGE     : Information Security
STACK    : Java · Spring Boot · Python · SQL
BUILDING : eTreinamentos (Next.js + PostgreSQL)
STUDYING : Java &amp; OOP <span class="t-dim">-&gt;</span> Full Stack · DevOps
STATUS   : <span class="t-status">● ONLINE</span>

&gt; awaiting next challenge<span class="t-cursor">█</span>`,
      "m1.label": `to locate a certificate <em>(before: 10 min)</em>`,
      "m2.label": `training completion rate <em>(before: 40%)</em>`,
      "m3.unit": "weeks", "m3.label": "from design to production on eTreinamentos",
      "sobre.tag": "ABOUT",
      "sobre.title": `Secure code begins with<br />well-observed decisions.`,
      "sobre.p1": `I am a junior developer focused on <strong>backend and information security</strong>, with a degree in <strong>Cyber Defense</strong> (Estácio). I work with Java, Spring Boot, Python and SQL, building <em>secure by design</em> systems — authentication, role-based authorization, automated tests and dependency analysis from the very first commit.`,
      "sobre.p2": `My background is in <strong>Training &amp; Development and GRC</strong>: over three years at Microware Tecnologia de Informação, supporting <strong>ISO 9001, ISO/IEC 20000 and ISO/IEC 27001</strong> audits — certified as <strong>ISO/IEC 27001:2022 Lead Auditor</strong>. Living with manual processes is how <a href="#destaque" class="link-strong">eTreinamentos</a> was born — a system I built from scratch, now in production delivering measurable results.`,
      "sobre.quote": "“Sees in the dark. Doesn't blink before deciding. Flies in silence.”",
      "owl.title": "Why the owl",
      "owl.p": `Vision that sees what goes unnoticed, full attention before acting, silent and precise presence. That is how I think about security and code: <strong>observe first, strike the problem with precision</strong>.`,
      "owl.li1": "Secure backend", "owl.li1s": "(secure by design)",
      "owl.li2s": "— next step", "owl.li3s": "— active interest",
      "feat.tag": "FEATURED PROJECT", "feat.status": "In active use · production",
      "feat.desc": `Full-stack web system for <strong>corporate certification management</strong>, with automatic certificate OCR and expiration alerts. Built solo — from design to production — in 3 weeks, from a real pain point in the Training &amp; Development area.`,
      "feat.r1": "Time to locate a certificate", "feat.r2": "Training completion rate",
      "feat.note": "Private project, in production. Technical details available upon contact.",
      "term.feat": `&gt; SELECT tempo_busca FROM antes;
<span class="t-warn">10 min</span>  <span class="t-dim">-- manual process</span>

&gt; SELECT tempo_busca FROM agora;
<span class="t-good">30 s</span>    <span class="t-dim">-- OCR + index</span>

&gt; SELECT conclusao_treinamentos;
antes : <span class="t-warn">40%</span>
agora : <span class="t-good">78%</span>  <span class="t-dim">-- expiration alerts</span>

&gt; status: <span class="t-status">production · active use</span> █`,
      "proj.tag": "PROJECTS", "proj.title": "Study and technical evolution projects",
      "proj.lead": "Each one marked a step on the way — from security foundations to real time.",
      "s1.status": "production",
      "s1.desc": "Corporate certification management with automatic OCR and expiration alerts.",
      repo: "repo",
      "s2.desc": "REST API with authentication, role-based authorization, tests, SBOM and security analysis.",
      "s2.metric": "secure by design",
      "s3.desc": "Real-time collaborative Kanban with WebSocket/STOMP and JWT authentication.",
      "s3.metric": "real time",
      "s4.kicker": "differentiator", "s4.title": "Information Security",
      "s4.desc": "Security from the first commit: authentication, roles, audited dependencies.",
      "s4.metric": "sees in the dark",
      "s5.kicker": "studies", "s5.title": "Java & OOP → DevOps",
      "s5.desc": "Solid object-oriented fundamentals today; pipelines and infrastructure tomorrow.",
      "s5.metric": "always learning",
      "s6.kicker": "freelance", "s6.title": "Available for projects",
      "s6.desc": "APIs, web systems and automations with clear scope and agreed delivery.",
      "s6.cta": "request a quote →",
      "s7.kicker": "you're on it", "s7.title": "This portfolio",
      "s7.desc": "Landing page built from scratch: pure HTML5, CSS3 and JavaScript — from layout to 3D components, all hand-written.",
      "s7.metric": "0 dependencies",
      "proj.hint": "drag to rotate · click the arrows", "proj.profile": "full GitHub profile",
      "traj.tag": "JOURNEY & STUDIES",
      "traj.title": `From T&amp;D to development,<br />without losing focus on people.`,
      "t1.h": "2022 — 2024 · Cyber Defense Technologist",
      "t1.p": "Estácio. The foundation in security, networks and risk management — the ground where the developer was born.",
      "t2.h": "2023 — 2024 · Microware — Apprentice (T&D)",
      "t2.p": "First steps structuring corporate training: organizing and running internal trainings, teaching materials, support for ISO 9001 and 20000 audits, and first contact with Power Automate and Bizagi.",
      "t3.h": "2024 — present · Microware — Training & Development Analyst",
      "t3.p": `Automations with Power Automate and Bizagi that cut manual work time by ~40%; support for ISO 9001, 20000 and 27001 audits; KPI analysis on LMS platforms and BPMN process modeling. This is where I built <strong>eTreinamentos</strong> and shipped it to production.`,
      "t4.h": "Present · Junior Developer",
      "t4.p": "APIs with Java 25 and Spring Boot — authentication, role-based authorization, automated tests, SBOM — plus full-stack with Next.js and PostgreSQL. Open evolution on GitHub.",
      "t5.h": "Next step",
      "t5.p": `Going deeper into Java &amp; OOP with Spring Boot, with an active interest in evolving toward <strong>Full Stack</strong> and then <strong>DevOps</strong> — taking care of the code from the interface to production.`,
      c1: "ISO/IEC 27001:2022 Lead Auditor", c2: "Prompt Engineering in ChatGPT",
      c3: "Cyber Defense Technologist · Estácio", "c.cert": "certification",
      "stack.title": "Stack & tools", "stack.data": "Data", "stack.tools": "Tools",
      "stack.study": "Currently studying", "stack.oo": "Advanced OOP",
      "serv.tag": "SERVICES · FREELANCE", "serv.title": "Need to get an idea off the paper?",
      "serv.lead": "Beyond full-time opportunities, I take on lean freelance projects with clear communication and delivery agreed from day one.",
      "sv1.h": "APIs & back-end",
      "sv1.p": "REST APIs with Java/Spring Boot or Python: authentication, integrations and business rules, secure by design.",
      "sv2.h": "Custom web systems",
      "sv2.p": "Dashboards, internal tools and management systems with Next.js/React and databases — like eTreinamentos.",
      "sv3.h": "Automations & scripts",
      "sv3.p": "I automate repetitive tasks in your operation with Python, Power Automate and Bizagi: document reading, spreadsheets, approvals and integrations between systems.",
      "proc.title": "How it works",
      "pr1.h": "Briefing", "pr1.p": "I understand the problem and the expected result.",
      "pr2.h": "Proposal", "pr2.p": "Scope, deadline and price — in writing, no surprises.",
      "pr3.h": "Development", "pr3.p": "Incremental deliveries with regular check-ins.",
      "pr4.h": "Delivery", "pr4.p": "Documented code + support period.",
      "serv.cta": "Request a quote",
      "cont.tag": "CONTACT", "cont.title": "Let's talk.",
      "cont.p": "If you recruit and are looking for a junior with a solid foundation and a security edge — or if you need a well-executed freelance project — write to me. I reply fast.",
      "ch.email": "E-mail",
      "cont.loc": "Niterói · RJ — available for remote roles across Brazil.",
      "form.name": "Name", "form.email": "E-mail", "form.type": "Reason for contact", "form.msg": "Message",
      opt1: "Job opportunity (recruiting)", opt2: "Freelance project", opt3: "Other",
      "ph.name": "Your name", "ph.email": "you@company.com",
      "ph.msg": "Tell me a bit about the opportunity or project...",
      "form.send": "Send message",
      "form.hint": "Submitting opens your e-mail app with everything filled in — nothing is stored on this site.",
      "foot.p": `© <span id="year">2026</span> João Andrade — designed and developed by me, from layout to deploy.`,
      "foot.top": "Back to top ↑",
    },
    es: {
      "doc.title": "João Andrade — Desarrollador Júnior | Seguridad de la Información y GRC",
      "doc.meta": "João Andrade, desarrollador júnior con diferencial en Seguridad de la Información y GRC. Auditor Líder ISO/IEC 27001:2022, tecnólogo en Defensa Cibernética. Java, Spring Boot, Python y SQL. Creador de eTreinamentos. Disponible para oportunidades y proyectos freelance.",
      skip: "Saltar al contenido",
      "nav.about": "Sobre", "nav.project": "Proyecto", "nav.projects": "Proyectos",
      "nav.journey": "Trayectoria", "nav.services": "Servicios", "nav.cta": "Hable conmigo",
      "a11y.theme": "Alternar tema oscuro/claro", "a11y.menu": "Abrir menú",
      "a11y.carousel": "Carrusel 3D de proyectos", "a11y.prev": "Girar a la tarjeta anterior", "a11y.next": "Girar a la siguiente tarjeta",
      "hero.eyebrow": "// DESARROLLADOR JÚNIOR · SEGURIDAD DE LA INFORMACIÓN",
      "hero.subtitle": `Construyo software con base sólida: <strong>backend seguro</strong>, código limpio y resultados medibles. Vengo del área de <strong>Entrenamiento &amp; Desarrollo y GRC</strong> — más de tres años entre auditorías ISO, procesos y personas — y de allí traje el hábito de observar primero y resolver con precisión.`,
      "hero.cta1": "Ver proyectos", "hero.cta2": "Contáctame",
      "hero.loc": "Niterói · RJ — disponible para remoto",
      "term.hero": `&gt; booting owl.sys...

<span class="t-ok">[ OK ]</span> Perfil de desarrollador cargado
<span class="t-ok">[ OK ]</span> Capa de seguridad armada

ROLE     : Desarrollador Júnior
EDGE     : Seguridad de la Información
STACK    : Java · Spring Boot · Python · SQL
BUILDING : eTreinamentos (Next.js + PostgreSQL)
STUDYING : Java y POO <span class="t-dim">-&gt;</span> Full Stack · DevOps
STATUS   : <span class="t-status">● ONLINE</span>

&gt; esperando el próximo desafío<span class="t-cursor">█</span>`,
      "m1.label": `para localizar un certificado <em>(antes: 10 min)</em>`,
      "m2.label": `de conclusión de entrenamientos <em>(antes: 40%)</em>`,
      "m3.unit": "semanas", "m3.label": "del diseño a producción en eTreinamentos",
      "sobre.tag": "SOBRE",
      "sobre.title": `El código seguro comienza con<br />decisiones bien observadas.`,
      "sobre.p1": `Soy desarrollador júnior enfocado en <strong>backend y seguridad de la información</strong>, tecnólogo en <strong>Defensa Cibernética</strong> (Estácio). Trabajo con Java, Spring Boot, Python y SQL construyendo sistemas <em>secure by design</em>: autenticación, autorización por roles, pruebas automatizadas y análisis de dependencias desde el primer commit.`,
      "sobre.p2": `Mi origen está en <strong>Entrenamiento &amp; Desarrollo y GRC</strong>: más de tres años en Microware Tecnologia de Informação, apoyando auditorías <strong>ISO 9001, ISO/IEC 20000 e ISO/IEC 27001</strong> — certificado como <strong>Auditor Líder ISO/IEC 27001:2022</strong>. Conviviendo con procesos manuales nació <a href="#destaque" class="link-strong">eTreinamentos</a>, el sistema que desarrollé desde cero y que hoy está en producción generando resultados medibles.`,
      "sobre.quote": "“Ve en la oscuridad. No parpadea antes de decidir. Vuela en silencio.”",
      "owl.title": "Por qué el búho",
      "owl.p": `Visión que ve lo que pasa desapercibido, atención total antes de actuar y presencia silenciosa y certera. Así pienso la seguridad y el código: <strong>observar primero, atacar el problema con precisión</strong>.`,
      "owl.li1": "Backend seguro", "owl.li1s": "(secure by design)",
      "owl.li2s": "— próximo paso", "owl.li3s": "— interés activo",
      "feat.tag": "PROYECTO DESTACADO", "feat.status": "En uso activo · producción",
      "feat.desc": `Sistema web full-stack para <strong>gestión de certificaciones corporativas</strong>, con OCR automático de certificados y alertas de vencimiento. Desarrollado en solitario — del diseño a producción — en 3 semanas, a partir de un dolor real del área de Entrenamiento &amp; Desarrollo.`,
      "feat.r1": "Tiempo para localizar un certificado", "feat.r2": "Tasa de conclusión de entrenamientos",
      "feat.note": "Proyecto privado, en producción. Detalles técnicos disponibles mediante contacto.",
      "term.feat": `&gt; SELECT tempo_busca FROM antes;
<span class="t-warn">10 min</span>  <span class="t-dim">-- proceso manual</span>

&gt; SELECT tempo_busca FROM agora;
<span class="t-good">30 s</span>    <span class="t-dim">-- OCR + índice</span>

&gt; SELECT conclusao_treinamentos;
antes : <span class="t-warn">40%</span>
agora : <span class="t-good">78%</span>  <span class="t-dim">-- alertas de vencimiento</span>

&gt; status: <span class="t-status">producción · uso activo</span> █`,
      "proj.tag": "PROYECTOS", "proj.title": "Proyectos de estudio y evolución técnica",
      "proj.lead": "Cada uno marcó un paso en el camino — de la fundamentación en seguridad al tiempo real.",
      "s1.status": "producción",
      "s1.desc": "Gestión de certificaciones corporativas con OCR automático y alertas de vencimiento.",
      repo: "repo",
      "s2.desc": "API REST con autenticación, autorización por roles, pruebas, SBOM y análisis de seguridad.",
      "s2.metric": "secure by design",
      "s3.desc": "Kanban colaborativo en tiempo real con WebSocket/STOMP y autenticación JWT.",
      "s3.metric": "tiempo real",
      "s4.kicker": "diferencial", "s4.title": "Seguridad de la Información",
      "s4.desc": "Seguridad desde el primer commit: autenticación, roles, dependencias auditadas.",
      "s4.metric": "ve en la oscuridad",
      "s5.kicker": "estudios", "s5.title": "Java y POO → DevOps",
      "s5.desc": "Fundamentos sólidos de orientación a objetos hoy; pipelines e infraestructura mañana.",
      "s5.metric": "siempre aprendiendo",
      "s6.kicker": "freelance", "s6.title": "Disponible para proyectos",
      "s6.desc": "APIs, sistemas web y automatizaciones con alcance claro y entrega acordada.",
      "s6.cta": "pedir presupuesto →",
      "s7.kicker": "estás en él", "s7.title": "Este portafolio",
      "s7.desc": "Landing page construida desde cero: HTML5, CSS3 y JavaScript puros — del layout a los componentes 3D, todo escrito a mano.",
      "s7.metric": "0 dependencias",
      "proj.hint": "arrastra para girar · haz clic en las flechas", "proj.profile": "perfil completo en GitHub",
      "traj.tag": "TRAYECTORIA Y ESTUDIOS",
      "traj.title": `De T&amp;D al desarrollo,<br />sin perder el foco en las personas.`,
      "t1.h": "2022 — 2024 · Tecnólogo en Defensa Cibernética",
      "t1.p": "Estácio. La base en seguridad, redes y gestión de riesgos — el terreno donde nació el desarrollador.",
      "t2.h": "2023 — 2024 · Microware — Aprendiz (T&D)",
      "t2.p": "Primeros pasos en la estructuración de entrenamientos corporativos: organización y ejecución de entrenamientos internos, materiales didácticos, apoyo a auditorías ISO 9001 y 20000 y primer contacto con Power Automate y Bizagi.",
      "t3.h": "2024 — actual · Microware — Analista de Entrenamiento y Desarrollo",
      "t3.p": `Automatizaciones con Power Automate y Bizagi que redujeron ~40% el tiempo de actividades manuales; apoyo a auditorías ISO 9001, 20000 y 27001; análisis de KPIs en plataformas EAD y modelado de procesos en BPMN. Fue aquí donde desarrollé y puse en producción <strong>eTreinamentos</strong>.`,
      "t4.h": "Actual · Desarrollador Júnior",
      "t4.p": "APIs con Java 25 y Spring Boot — autenticación, autorización por roles, pruebas automatizadas, SBOM — y full-stack con Next.js y PostgreSQL. Evolución abierta en GitHub.",
      "t5.h": "Próximo paso",
      "t5.p": `Profundizando Java y POO con Spring Boot, con interés activo en evolucionar hacia <strong>Full Stack</strong> y, enseguida, <strong>DevOps</strong> — cuidar el código de la interfaz a producción.`,
      c1: "Auditor Líder ISO/IEC 27001:2022", c2: "Prompt Engineering en ChatGPT",
      c3: "Tecnólogo en Defensa Cibernética · Estácio", "c.cert": "certificación",
      "stack.title": "Stack y herramientas", "stack.data": "Datos", "stack.tools": "Herramientas",
      "stack.study": "En estudio", "stack.oo": "POO avanzada",
      "serv.tag": "SERVICIOS · FREELANCE", "serv.title": "¿Necesitas sacar una idea del papel?",
      "serv.lead": "Además de las oportunidades formales, trabajo como freelancer en proyectos acotados, con comunicación clara y entrega acordada desde el inicio.",
      "sv1.h": "APIs y back-end",
      "sv1.p": "APIs REST con Java/Spring Boot o Python: autenticación, integraciones y reglas de negocio, con seguridad desde el diseño.",
      "sv2.h": "Sistemas web a medida",
      "sv2.p": "Paneles, herramientas internas y sistemas de gestión con Next.js/React y base de datos — como eTreinamentos.",
      "sv3.h": "Automatizaciones y scripts",
      "sv3.p": "Automatizo tareas repetitivas de tu operación con Python, Power Automate y Bizagi: lectura de documentos, planillas, aprobaciones e integraciones entre sistemas.",
      "proc.title": "Cómo funciona",
      "pr1.h": "Briefing", "pr1.p": "Entiendo el problema y el resultado esperado.",
      "pr2.h": "Propuesta", "pr2.p": "Alcance, plazo y valor — por escrito y sin sorpresas.",
      "pr3.h": "Desarrollo", "pr3.p": "Entregas incrementales con check-ins regulares.",
      "pr4.h": "Entrega", "pr4.p": "Código documentado + período de soporte.",
      "serv.cta": "Pedir presupuesto",
      "cont.tag": "CONTACTO", "cont.title": "Hablemos.",
      "cont.p": "Si reclutas y buscas un júnior con base sólida y diferencial en seguridad — o si necesitas un proyecto freelance bien ejecutado — escríbeme. Respondo rápido.",
      "ch.email": "E-mail",
      "cont.loc": "Niterói · RJ — disponible para vacantes remotas en todo Brasil.",
      "form.name": "Nombre", "form.email": "E-mail", "form.type": "Motivo del contacto", "form.msg": "Mensaje",
      opt1: "Oportunidad de trabajo (reclutamiento)", opt2: "Proyecto freelance", opt3: "Otro asunto",
      "ph.name": "Tu nombre", "ph.email": "tu@empresa.com",
      "ph.msg": "Cuéntame un poco sobre la oportunidad o proyecto...",
      "form.send": "Enviar mensaje",
      "form.hint": "El envío abre tu aplicación de correo con todo completado — nada se almacena en este sitio.",
      "foot.p": `© <span id="year">2026</span> João Andrade — diseñado y desarrollado por mí, del layout al deploy.`,
      "foot.top": "Volver arriba ↑",
    },
  };

  const root = document.documentElement;
  const store = {
    get() { try { return localStorage.getItem("lang"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("lang", v); } catch (e) {} },
  };

  function apply(lang) {
    root.setAttribute("lang", lang === "en" ? "en" : lang === "es" ? "es" : "pt-BR");
    const d = I18N[lang];
    if (d) {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const k = el.getAttribute("data-i18n");
        if (d[k] != null) el.textContent = d[k];
      });
      document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const k = el.getAttribute("data-i18n-html");
        if (d[k] != null) el.innerHTML = d[k];
      });
      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const k = el.getAttribute("data-i18n-placeholder");
        if (d[k] != null) el.setAttribute("placeholder", d[k]);
      });
      document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const k = el.getAttribute("data-i18n-aria");
        if (d[k] != null) el.setAttribute("aria-label", d[k]);
      });
      if (d["doc.title"]) document.title = d["doc.title"];
      const meta = document.querySelector('meta[name="description"]');
      if (meta && d["doc.meta"]) meta.setAttribute("content", d["doc.meta"]);
      const y = document.getElementById("year");
      if (y) y.textContent = new Date().getFullYear();
    }
    document.querySelectorAll(".lang__btn").forEach((b) =>
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang)
    );
  }

  const switcher = document.getElementById("langSwitch");
  if (switcher) {
    switcher.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang__btn");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      store.set(lang);
      apply(lang);
    });
  }

  const saved = store.get();
  if (saved && saved !== "pt") apply(saved);
})();
