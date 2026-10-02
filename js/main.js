/* ============================================================
   João Andrade — Landing Page
   ============================================================
   ⚙️ CONFIGURAÇÃO: troque abaixo seu e-mail e WhatsApp reais
   antes de publicar o site.
   ============================================================ */
const SITE_CONFIG = {
  email: "joao.pandrade09@gmail.com",
  whatsapp: "5521986276290", // +55 21 98627-6290
};

/* ---------- Nav: estado ao rolar + barra de progresso ---------- */
const nav = document.getElementById("nav");
const progressBar = document.getElementById("progressBar");

function onScroll() {
  nav.classList.toggle("is-scrolled", window.scrollY > 24);
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  progressBar.style.width = pct + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Menu mobile ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Link ativo conforme a seção visível ---------- */
const sections = document.querySelectorAll("section[id]");
const linkMap = new Map();
document.querySelectorAll(".nav__link").forEach((l) => {
  const id = l.getAttribute("href").replace("#", "");
  linkMap.set(id, l);
});

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      document.querySelectorAll(".nav__link.is-active").forEach((l) => l.classList.remove("is-active"));
      const link = linkMap.get(e.target.id);
      if (link) link.classList.add("is-active");
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);
sections.forEach((s) => spy.observe(s));

/* ---------- Reveal on scroll ---------- */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

/* ---------- Contadores animados ---------- */
const counters = document.querySelectorAll(".count");
const countObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      countObs.unobserve(el);
      const target = parseInt(el.dataset.target, 10);
      const dur = 1100;
      const t0 = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  },
  { threshold: 0.6 }
);
counters.forEach((c) => countObs.observe(c));

/* ---------- Formulário → abre o e-mail do visitante ---------- */
const form = document.getElementById("contactForm");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const name = document.getElementById("fName").value.trim();
  const from = document.getElementById("fEmail").value.trim();
  const type = document.getElementById("fType").value;
  const msg = document.getElementById("fMsg").value.trim();

  const subject = encodeURIComponent(`[${type}] Contato pelo site — ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${from}\nMotivo: ${type}\n\n${msg}`);
  window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
});

/* ---------- Ano no rodapé ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================================
   ROUND CAROUSEL — port vanilla do componente Originkit
   (mesma matemática/física do original: anel 3D, raio por
   360/n, arraste com inércia, verso escurecido, tilt)
   ============================================================ */
(function initRoundCarousel() {
  const viewport = document.getElementById("rcViewport");
  if (!viewport) return;
  const ring = document.getElementById("rcRing");
  const tiltEl = document.querySelector(".rc__tilt");
  const slides = Array.from(ring.querySelectorAll(".rc__slide"));
  const count = slides.length;
  const angle = 360 / count;

  /* Parâmetros do original — speed reduzido p/ dar tempo de ler os cards */
  const SPACING = 3;
  const SENSITIVITY = 5;
  const SPEED = 1.4; // original: 7
  const TILT = -7;
  const PERSPECTIVE = 3000;
  const INNER_DIM = 3.5;

  const factor = 1 + SPACING * 0.15;
  const degPerSec = SPEED * 6 * 1; // direction: "right"
  const reduced = false;

  tiltEl.style.transform = `rotateX(${TILT}deg)`;
  viewport.style.perspective = `${PERSPECTIVE}px`;

  /* Verso escurecido de cada card (innerDim do original) */
  slides.forEach((s) => {
    const front = s.querySelector(".rc__face--front");
    const back = document.createElement("div");
    back.className = "rc__face rc__face--back";
    back.setAttribute("aria-hidden", "true");
    back.setAttribute("inert", "");
    back.innerHTML = front.innerHTML;
    back.style.filter = `brightness(${INNER_DIM / 10})`;
    s.appendChild(back);
  });

  /* Raio do anel: (w * factor) / (2 * tan(π / n)) — idêntico ao original */
  let radius = 0;
  function layout() {
    const w = ring.clientWidth || 300;
    radius = (w * factor) / (2 * Math.tan(Math.PI / count));
    ring.style.setProperty("--rc-radius", radius.toFixed(1) + "px");
    ring.style.setProperty("--rc-angle", angle + "deg");
  }
  layout();
  window.addEventListener("resize", layout);

  /* Estado da física */
  let rot = 0, vel = 0, last = 0, target = null;
  let lastInteract = 0, hovering = false;
  const drag = { active: false, x: 0 };

  const apply = () => {
    ring.style.transform = `translateZ(${(-radius).toFixed(1)}px) rotateY(${rot}deg)`;
  };
  apply();

  /* pausa o loop quando o carrossel sai da tela */
  let inView = true;
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0 }).observe(viewport);

  function draw(now) {
    if (!inView) { last = 0; requestAnimationFrame(draw); return; }
    const dt = last ? (now - last) / 1000 : 0;
    last = now;
    const f = Math.min(dt, 0.1);

    if (!drag.active) {
      if (target !== null) {
        const diff = target - rot;
        rot += diff * Math.min(1, f * 7);
        if (Math.abs(diff) < 0.05) { rot = target; target = null; }
      } else if (Math.abs(vel) > 0.01) {
        rot += vel * f;
        vel *= 0.94; // decaimento de inércia do original
        if (Math.abs(vel) < 60) { target = Math.round(rot / angle) * angle; vel = 0; } // snap: para alinhado ao card
      } else if (!reduced && !hovering && now - lastInteract > 2600) {
        rot += degPerSec * f; // rotação automática
      }
    }
    apply();
    updateInert();
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  /* Arraste com trava de eixo (preserva o scroll vertical no touch) */
  let pid = null, sx = 0, sy = 0, axis = null;

  viewport.addEventListener("pointerdown", (e) => {
    pid = e.pointerId; sx = e.clientX; sy = e.clientY; axis = null;
    drag.x = e.clientX;
    vel = 0; target = null;
  });
  viewport.addEventListener("pointermove", (e) => {
    if (pid === null) return;
    if (axis === null && (Math.abs(e.clientX - sx) > 6 || Math.abs(e.clientY - sy) > 6)) {
      axis = Math.abs(e.clientX - sx) > Math.abs(e.clientY - sy) ? "h" : "v";
      if (axis === "h") {
        drag.active = true;
        viewport.classList.add("is-dragging");
        viewport.setPointerCapture?.(pid);
      }
    }
    if (axis !== "h") return;
    const dx = e.clientX - drag.x;
    drag.x = e.clientX;
    const k = 0.3 * SENSITIVITY;
    rot += dx * k;
    vel = dx * k * 60;
    lastInteract = performance.now();
  });
  const endDrag = () => {
    if (pid === null) return;
    pid = null; axis = null;
    drag.active = false;
    viewport.classList.remove("is-dragging");
    lastInteract = performance.now();
  };
  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("dragstart", (e) => e.preventDefault());

  /* Pausa a rotação automática enquanto o mouse está em cima */
  viewport.addEventListener("mouseenter", () => { hovering = true; });
  viewport.addEventListener("mouseleave", () => { hovering = false; });

  /* Setas: alinham o próximo/anterior card de frente */
  const frontIndex = () => Math.round(-rot / angle);
  const goTo = (i) => {
    target = -i * angle;
    lastInteract = performance.now();
  };
  document.getElementById("rcNext").addEventListener("click", () => goTo(frontIndex() + 1));
  document.getElementById("rcPrev").addEventListener("click", () => goTo(frontIndex() - 1));

  /* Teclado: setas giram o anel quando o viewport está focado */
  viewport.setAttribute("tabindex", "0");
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { goTo(frontIndex() + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft")  { goTo(frontIndex() - 1); e.preventDefault(); }
  });

  /* Cards fora da frente saem da ordem de tabulação (inert):
     teclado/leitor de tela só alcançam links visíveis */
  let lastFront = -1;
  function updateInert() {
    const front = ((Math.round(-rot / angle) % count) + count) % count;
    if (front === lastFront) return;
    lastFront = front;
    slides.forEach((s, i) => {
      if (i === front) s.removeAttribute("inert");
      else s.setAttribute("inert", "");
    });
  }
})();

/* ============================================================
   KINETIC TEXT GRID — port vanilla do "Appear Text" (Originkit)
   Mesma linha do tempo: expand → wipe → hold → reset → reveal,
   em loop infinito, via Web Animations API.
   ============================================================ */
(function initKineticText() {
  const host = document.getElementById("kineticBand");
  if (!host) return;
  const zoomEl = document.getElementById("ktZoom");

  const TEXT = "Code secure · Build solid";
  const rowCount = 3;
  const repeatCount = 5;
  const rowGap = 16;
  const wordGap = 30;
  const expandDurationSec = 1.1;
  const holdDurationSec = 1.2;
  const horizontalShiftPx = 70;
  const zoomScalePct = 112;
  const EASE = "ease-in-out";

  const reduced = false;

  const safeRowCount = rowCount % 2 === 0 ? rowCount + 1 : rowCount;
  const centerRow = Math.floor(safeRowCount / 2);
  const safeRepeat = repeatCount % 2 === 0 ? repeatCount + 1 : repeatCount;
  const centerWord = Math.floor(safeRepeat / 2);

  const HOME_FACTOR = 0.4;
  const motionSec = Math.max(0.1, expandDurationSec);
  const holdSec = Math.max(0, holdDurationSec);
  const tIn = motionSec;
  const tWipe = tIn + motionSec;
  const tWord = tWipe + holdSec;
  const tReset = tWord + 0.4;
  const tReveal = tReset + motionSec * 0.7;
  const total = tReveal + Math.max(0.2, holdSec * 0.4);
  const n = (t) => t / total;
  const VISIBLE = "inset(0% 0% 0% 0%)";
  const maxZoom = zoomScalePct / 100;

  zoomEl.style.gap = rowGap + "px";

  /* offsets estritamente crescentes (exigência da WAAPI) */
  const strictOffsets = (arr) => {
    const out = arr.slice();
    for (let i = 1; i < out.length; i++) {
      out[i] = Math.min(1, Math.max(out[i], out[i - 1] + 0.0005));
    }
    return out;
  };
  const kf = (props, values, offsets) =>
    values.map((v, i) => ({ [props]: v, offset: offsets[i], easing: EASE }));

  const anims = [];

  for (let r = 0; r < safeRowCount; r++) {
    const row = document.createElement("div");
    row.className = "kt__row";
    row.style.gap = wordGap + "px";
    zoomEl.appendChild(row);

    const isCenterRow = r === centerRow;
    const distY = r - centerRow;
    const direction = r % 2 === 0 ? 1 : -1;
    const speedMultiplier = 0.7 + (Math.abs(distY) % 3) * 0.45;
    const driftFull = direction * horizontalShiftPx * speedMultiplier;
    const driftHome = driftFull * HOME_FACTOR;
    const wipeLTR = r % 2 === 0;
    const hidden = wipeLTR ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)";

    for (let w = 0; w < safeRepeat; w++) {
      const isCenter = isCenterRow && w === centerWord;
      const span = document.createElement("span");
      span.className = "kt__word" + (isCenter ? " kt__word--center" : "");
      span.dataset.text = TEXT; // texto via CSS ::before (decorativo, fora do audit de contraste)
      row.appendChild(span);

      if (isCenter || reduced) continue;

      const denom = Math.max(1, safeRepeat - 1);
      const sweepT = wipeLTR ? w / denom : (safeRepeat - 1 - w) / denom;
      const wipeWindow = tWipe - tIn;
      const perWipe = wipeWindow * 0.5;
      const wStartOut = tIn + sweepT * (wipeWindow - perWipe);
      const wEndOut = wStartOut + perWipe;
      const revealWindow = tReveal - tReset;
      const perReveal = revealWindow * 0.5;
      const wStartIn = tReset + sweepT * (revealWindow - perReveal);
      const wEndIn = wStartIn + perReveal;

      anims.push(
        span.animate(
          kf(
            "clipPath",
            [VISIBLE, VISIBLE, hidden, hidden, VISIBLE, VISIBLE],
            strictOffsets([0, n(wStartOut), n(wEndOut), n(wStartIn), n(wEndIn), 1])
          ),
          { duration: total * 1000, iterations: Infinity }
        )
      );
    }


    if (reduced) continue;
    const x = isCenterRow
      ? { v: [driftHome, driftFull, 0, 0, driftHome, driftHome],
          t: [0, n(tIn), n(tWipe), n(tReset), n(tReveal), 1] }
      : { v: [driftHome, driftFull, driftFull, driftHome, driftHome],
          t: [0, n(tIn), n(tWord), n(tReset), 1] };
    anims.push(
      row.animate(
        kf("transform", x.v.map((px) => `translateX(${px}px)`), strictOffsets(x.t)),
        { duration: total * 1000, iterations: Infinity }
      )
    );
  }

  if (!reduced) {
    anims.push(
      zoomEl.animate(
        kf("transform", ["scale(1)", `scale(${maxZoom})`, "scale(1)", "scale(1)"],
           strictOffsets([0, n(tIn), n(tWipe), 1])),
        { duration: total * 1000, iterations: Infinity }
      )
    );

    /* pausa as animações quando a faixa sai da tela */
    new IntersectionObserver(
      ([e]) => anims.forEach((a) => (e.isIntersecting ? a.play() : a.pause())),
      { threshold: 0 }
    ).observe(host);
  }
})();

/* ============================================================
   NEON BORDER — port vanilla (Originkit)
   Arcos cônicos viajando o perímetro (2 grupos defasados 0.5),
   camadas de glow com blur + plus-lighter, máscara de anel.
   Aplicado ao terminal do eTreinamentos (seção 02).
   ============================================================ */
(function initNeonBorder() {
  const reduced = false;
  document.querySelectorAll(".terminal").forEach((target) => {
    if (target.parentElement) attachNeon(target);
  });

  function attachNeon(target) {
    const COLOR = "#ED8B36";
    const THICK = 2;
    const BORDER_SIZE = 34;
    const GLOW = 70;
    const SPEED = 6;
    const MOVEMENT = "continuous";
    const RADIUS = 12;

    const GLOW_LAYERS = [
      { blur: 8, opacity: 0.5, reach: 0.3 },
      { blur: 14, opacity: 0.3, reach: 0.6 },
      { blur: 26, opacity: 0.18, reach: 1 },
    ];
    const MAX_GLOW_BLUR = 26;
    const MAX_GLOW_REACH = 36;
    const EDGE_COPIES = 2;

    /* ---------- matemática do original ---------- */
    function withAlpha(input, alpha) {
      const a = Math.max(0, Math.min(1, alpha));
      if (typeof input !== "string") return "rgba(0,0,0," + a + ")";
      const s = input.trim();
      const hex = s.match(/^#([0-9a-f]{3,8})$/i);
      if (hex) {
        let h = hex[1];
        if (h.length === 3 || h.length === 4)
          h = h.split("").map((c) => c + c).join("");
        const n = parseInt(h.slice(0, 6), 16);
        if (!Number.isFinite(n)) return "rgba(0,0,0," + a + ")";
        return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
      }
      const rgb = s.match(/^rgba?\(([^)]+)\)/i);
      if (rgb) {
        const p = rgb[1].split(",").map((v) => parseFloat(v));
        if (p.length >= 3 && p.slice(0, 3).every(Number.isFinite))
          return "rgba(" + p[0] + "," + p[1] + "," + p[2] + "," + a + ")";
      }
      return "rgba(0,0,0," + a + ")";
    }

    function perimeterPoint(u, w, h) {
      const d = (((u % 1) + 1) % 1) * 2 * (w + h);
      if (d < w) return [d, 0];
      if (d < w + h) return [w, d - w];
      if (d < w * 2 + h) return [w - (d - w - h), h];
      return [0, h - (d - w * 2 - h)];
    }

    function cornerLap(k, w, h) {
      const p = 2 * (w + h);
      const at = [0, w / p, (w + h) / p, (w * 2 + h) / p];
      return Math.floor(k / 4) + at[((k % 4) + 4) % 4];
    }

    function perimeterAngle(u, w, h) {
      const pt = perimeterPoint(u, w, h);
      return (Math.atan2(pt[0] - w / 2, h / 2 - pt[1]) * 180) / Math.PI;
    }

    const ARC_SAMPLES = 18;
    const MIN_ARC = 0.015;

    function buildArc(lap, lengthPct, w, h, color) {
      const fw = w > 0 ? w : 100;
      const fh = h > 0 ? h : 100;
      const len = Math.max(0, Math.min(100, lengthPct));
      const span = Math.max(MIN_ARC, (len / 100) * 0.5);
      const solidT = len / 100;

      const stops = [];
      let base = 0, prev = 0, acc = 0;
      for (let i = 0; i <= ARC_SAMPLES; i++) {
        const f = i / ARC_SAMPLES;
        const angle = perimeterAngle(lap + (f - 0.5) * span, fw, fh);
        if (i === 0) base = angle;
        else {
          let d = angle - prev;
          while (d > 180) d -= 360;
          while (d < -180) d += 360;
          acc += d;
        }
        prev = angle;
        const t = Math.abs(f - 0.5) * 2;
        const k = solidT >= 1 ? 1 : t <= solidT ? 1 : 1 - (t - solidT) / (1 - solidT);
        stops.push(withAlpha(color, k * k * (3 - 2 * k)) + " " + acc.toFixed(2) + "deg");
      }
      const end = acc.toFixed(2);
      stops.push(withAlpha(color, 0) + " " + end + "deg");
      stops.push(withAlpha(color, 0) + " 360deg");
      return "conic-gradient(from " + base.toFixed(2) + "deg at 50% 50%, " + stops.join(", ") + ")";
    }

    function makeEaseFn(pts) {
      const x1 = pts[0], y1 = pts[1], x2 = pts[2], y2 = pts[3];
      if (x1 === y1 && x2 === y2) return (t) => t;
      const bez = (a, b, t) => {
        const u = 1 - t;
        return 3 * u * u * t * a + 3 * u * t * t * b + t * t * t;
      };
      return (t) => {
        const x = Math.max(0, Math.min(1, t));
        let s = x;
        for (let i = 0; i < 8; i++) {
          const cx = bez(x1, x2, s) - x;
          const u = 1 - s;
          const dx = 3 * u * u * x1 + 6 * u * s * (x2 - x1) + 3 * s * s * (1 - x2);
          if (Math.abs(dx) < 1e-6) break;
          s -= cx / dx;
          s = Math.max(0, Math.min(1, s));
        }
        return bez(y1, y2, s);
      };
    }
    const stepEase = makeEaseFn([0.72, 0.16, 0.18, 1.05]);
    const glideEase = makeEaseFn([0.65, 0, 0.35, 1]);

    /* ---------- DOM ---------- */
    const parent = target.parentElement;
    parent.style.position = "relative";
    const root = document.createElement("div");
    root.className = "neon";
    parent.appendChild(root);

    const amount = Math.max(0, Math.min(100, GLOW)) / 100;
    const ringAt = (share) => THICK + amount * MAX_GLOW_REACH * share;
    const glowOuter = 10 + MAX_GLOW_REACH + MAX_GLOW_BLUR * 2;

    function makeBand(r, offset) {
      const d = document.createElement("div");
      d.className = "neon__band";
      d.style.inset = offset - r + "px";
      d.style.padding = r + "px";
      d.style.borderRadius = RADIUS + r + "px";
      return d;
    }
    function makeGroup() {
      const g = document.createElement("div");
      g.className = "neon__group";
      if (amount > 0) {
        GLOW_LAYERS.forEach((l) => {
          const layer = document.createElement("div");
          layer.className = "neon__glow";
          layer.style.opacity = l.opacity;
          layer.style.filter = "blur(" + l.blur + "px)";
          layer.style.inset = -glowOuter + "px";
          layer.style.padding = glowOuter + "px";
          layer.style.borderRadius = RADIUS + glowOuter + "px";
          layer.appendChild(makeBand(ringAt(l.reach), glowOuter));
          g.appendChild(layer);
        });
      }
      for (let i = 0; i < EDGE_COPIES; i++) {
        const e = document.createElement("div");
        e.className = "neon__edge";
        e.appendChild(makeBand(THICK, 0));
        g.appendChild(e);
      }
      root.appendChild(g);
      return g;
    }
    const groupA = makeGroup();
    const groupB = makeGroup();

    const r0 = root.getBoundingClientRect();
    let w = r0.width, h = r0.height;
    if ("ResizeObserver" in window) {
      new ResizeObserver(() => {
        const r = root.getBoundingClientRect();
        w = r.width; h = r.height;
      }).observe(root);
    }

    /* pausa o loop quando o terminal sai da tela */
    let inView = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0 }).observe(root);
    }

    function setArcs(lapVal) {
      groupA.style.setProperty("--arc", buildArc(lapVal, BORDER_SIZE, w, h, COLOR));
      groupB.style.setProperty("--arc", buildArc(lapVal + 0.5, BORDER_SIZE, w, h, COLOR));
    }
    setArcs(0.125);
    if (reduced) return;

    /* ---------- loop (continuous) ---------- */
    let last = performance.now();
    let corner = 0, stepT = 0, tick = false;
    function frame(now) {
      if (!inView) { last = now; requestAnimationFrame(frame); return; }
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      const s = Math.max(0, Math.min(20, SPEED));
      if (s > 0) {
        const step = MOVEMENT === "step";
        const beat = step
          ? 3 + ((0.35 - 3) * (s - 1)) / 19
          : (30 + ((4 - 30) * (s - 1)) / 19) / 4;
        stepT += dt / beat;
        while (stepT >= 1) { stepT -= 1; corner += 1; }
        const eased = step ? stepEase(Math.min(1, stepT * 2)) : glideEase(stepT);
        const fw = w > 0 ? w : 100;
        const fh = h > 0 ? h : 100;
        const from = cornerLap(corner, fw, fh);
        const to = cornerLap(corner + 1, fw, fh);
        tick = !tick;
        if (tick) setArcs(from + (to - from) * eased);
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
})();

/* ---------- Toggle de tema claro/escuro ---------- */
(function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const root = document.documentElement;

  const store = {
    get() { try { return localStorage.getItem("theme"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("theme", v); } catch (e) {} },
  };

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    store.set(next);
  });
})();
