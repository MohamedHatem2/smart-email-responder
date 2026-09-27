/* ============================================================
   عدّل الرابط ده بس
   ============================================================ */
const WEBHOOK_URL =
  "https://mohamed-hatem-22.app.n8n.cloud/webhook/smart-email-responder";
/* ============================================================ */

/* ---------------- Translations ---------------- */
const i18n = {
  ar: {
    langToggle: "EN",
    brandTitle: "الرد الذكي على <em>الإيميلات</em>",
    wcBadge: "مدعوم بالذكاء الاصطناعي",
    welcomeTitle: "أهلاً بيك",
    welcomeSub:
      "قبل ما نبدأ، محتاجين نعرف اسمك وإيميلك عشان نبعتلك الردود عليه بعد التحليل.",
    labelName: "الاسم",
    phName: "مثال: أحمد محمد",
    labelUserEmail: "الإيميل",
    phUserEmail: "you@example.com",
    hintUserEmail: "الإيميل اللي هيوصلك عليه الردود.",
    btnStart: "يلا نبدأ",
    panelEmail: "بيانات الإيميل",
    panelEmailSub: "حط الإيميل اللي وصلك وخلينا نحلله.",
    labelFrom: "من (From)",
    phFrom: "client@example.com",
    labelSubject: "الموضوع (Subject)",
    phSubject: "استفسار عن الخدمة",
    labelBody: "نص الإيميل",
    phBody: "الصق نص الإيميل هنا...",
    btnAnalyze: "تحليل وتوليد الردود",
    panelSteps: "إيه اللي هيحصل؟",
    panelStepsSub: "الخطوات بسيطة وواضحة.",
    stepsList:
      "1. هنحلل الإيميل ونحدد نوعه وأولويتك.<br />2. هنجهزلك <b>3 ردود</b> بمستويات مختلفة:<br />&nbsp;&nbsp;• رسمي &nbsp; • شبه رسمي &nbsp; • عادي<br />3. هتبعتها كلها على إيميلك.",
    resultTitle: "النتيجة",
    greet: "مرحباً",
    btnBack: "تحليل إيميل تاني",
    footer: "Powered by n8n & OpenRouter",
    lblCategory: "التصنيف",
    lblUrgency: "الأولوية",
    lblSentiment: "المشاعر",
    lblSummary: "ملخص سريع",
    toneOfficial: "رسمي",
    toneSemi: "شبه رسمي",
    toneCasual: "عادي",
    copy: "نسخ",
    copied: "✓ تم النسخ",
    errFillAll: "لازم تملأ كل الحقول: From + Subject + النص.",
    errName: "اكتب اسمك الأول.",
    errEmail: "اكتب إيميل صحيح.",
    errConn: "مشكلة في الاتصال بـ n8n",
    errFlow: "الوورك فلو رجّع خطأ.",
    errServer: "n8n رجّع خطأ",
    errNetwork: "تعذّر الوصول للسيرفر",
    loading: "جاري التحليل...",
    successTitle: "تم التحليل وبعتنا الردود على إيميلك",
    alertDetails: "تفاصيل الخطأ",
    plTitle: "جاري التحضير",
    plSub: "ثانية واحدة…",
    aoTitle: "الذكاء الاصطناعي بيشتغل…",
    aoSub: "بنحلل الإيميل ونجهزلك 3 ردود",
    aoStep1: "تحليل نبرة ومحتوى الإيميل",
    aoStep2: "تحديد اللغة والتصنيف",
    aoStep3: "توليد الردود الثلاثة",
    aoEta: "بنجهز حاجة حلوة…",
    emptyReply: "لم يتم استلام هذا الرد من الذكاء الاصطناعي. جرّب تحليل الإيميل مرة تانية.",
    emptyRepliesWarning: "الذكاء الاصطناعي ما رجّعش الردود. جرّب تاني أو غيّر الموديل في n8n.",
  },
  en: {
    langToggle: "ع",
    brandTitle: "Smart Email <em>Responder</em>",
    wcBadge: "Powered by AI",
    welcomeTitle: "Welcome",
    welcomeSub:
      "Before we start, we need your name and email so we can send the replies to you after analysis.",
    labelName: "Name",
    phName: "e.g. Ahmed Mohamed",
    labelUserEmail: "Email",
    phUserEmail: "you@example.com",
    hintUserEmail: "We'll send the replies to this email.",
    btnStart: "Let's start",
    panelEmail: "Email Details",
    panelEmailSub: "Paste the email you received and let us analyze it.",
    labelFrom: "From",
    phFrom: "client@example.com",
    labelSubject: "Subject",
    phSubject: "Inquiry about your service",
    labelBody: "Email body",
    phBody: "Paste the email body here...",
    btnAnalyze: "Analyze & Generate Replies",
    panelSteps: "What happens next?",
    panelStepsSub: "Simple and clear steps.",
    stepsList:
      "1. We analyze the email and detect its type and urgency.<br />2. You get <b>3 replies</b> with different tones:<br />&nbsp;&nbsp;• Official &nbsp; • Semi-formal &nbsp; • Casual<br />3. All replies are sent to your email.",
    resultTitle: "Result",
    greet: "Hi",
    btnBack: "Analyze another email",
    footer: "Powered by n8n & OpenRouter",
    lblCategory: "Category",
    lblUrgency: "Urgency",
    lblSentiment: "Sentiment",
    lblSummary: "Quick summary",
    toneOfficial: "Official",
    toneSemi: "Semi-formal",
    toneCasual: "Casual",
    copy: "Copy",
    copied: "✓ Copied",
    errFillAll: "Please fill all fields: From + Subject + Body.",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email.",
    errConn: "Failed to reach n8n",
    errFlow: "Workflow returned an error.",
    errServer: "n8n returned an error",
    errNetwork: "Could not reach the server",
    loading: "Analyzing...",
    successTitle: "Analysis done — replies sent to your email",
    alertDetails: "Error details",
    plTitle: "Preparing",
    plSub: "Just a moment…",
    aoTitle: "AI is thinking…",
    aoSub: "Analyzing the email and crafting 3 replies",
    aoStep1: "Analyzing tone and content",
    aoStep2: "Detecting language and category",
    aoStep3: "Generating the three replies",
    aoEta: "Cooking something nice…",
    emptyReply: "This reply was not received from AI. Try analyzing the email again.",
    emptyRepliesWarning: "AI didn't return replies. Try again or switch the model in n8n.",
  },
};

/* ---------------- State ---------------- */
const state = {
  lang: localStorage.getItem("ser-lang") || "ar",
  theme: localStorage.getItem("ser-theme") || "light",
  user: { name: "", email: "" },
  lastResult: null,
};

const $ = (id) => document.getElementById(id);
const t = (key) => i18n[state.lang][key] ?? key;

/* ---------------- Utils ---------------- */
function esc(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/* ---------------- Result Persistence ---------------- */
function saveLastResult(data) {
  state.lastResult = data;
  try {
    sessionStorage.setItem("ser-last-result", JSON.stringify(data));
    sessionStorage.setItem("ser-last-user", JSON.stringify(state.user));
  } catch (e) {
    /* ignore quota errors */
  }
}

function clearLastResult() {
  state.lastResult = null;
  try {
    sessionStorage.removeItem("ser-last-result");
    sessionStorage.removeItem("ser-last-user");
  } catch (e) {
    /* ignore */
  }
}

function restoreLastResult() {
  try {
    const raw = sessionStorage.getItem("ser-last-result");
    const userRaw = sessionStorage.getItem("ser-last-user");
    if (raw) {
      state.lastResult = JSON.parse(raw);
      if (userRaw) state.user = { ...state.user, ...JSON.parse(userRaw) };
      return true;
    }
  } catch (e) {
    /* ignore */
  }
  return false;
}

/* ---------------- Reply Extraction (robust) ---------------- */
function extractReply(data, toneKey) {
  if (!data) return "";

  const sources = [
    data.replies,
    data.reply,
    data.result,
    data,
  ];

  const altKeys = {
    official: ["official", "formal", "officialReply", "replyOfficial"],
    semi: ["semi", "semiFormal", "semi_formal", "semiReply", "semiOfficial"],
    casual: ["casual", "informal", "casualReply", "friendly"],
  };

  for (const src of sources) {
    if (!src || typeof src !== "object") continue;
    for (const key of altKeys[toneKey] || [toneKey]) {
      const val = src[key];
      if (typeof val === "string" && val.trim().length > 0) {
        return val.trim();
      }
    }
  }

  return "";
}

/* ---------------- Alerts (Toast) ---------------- */
const alertBox = $("globalAlert");
let alertTimer = null;

function hideAlert() {
  if (alertTimer) {
    clearTimeout(alertTimer);
    alertTimer = null;
  }
  alertBox.classList.remove("show", "error", "success");
}

function showAlert(type, title, detail) {
  if (alertTimer) clearTimeout(alertTimer);

  alertBox.className = "global-alert show " + type;
  alertBox.innerHTML = `
    <button class="close-x" type="button" aria-label="close">×</button>
    <div class="title">${type === "error" ? "⚠️" : "✓"} ${esc(title)}</div>
    ${
      detail
        ? `
      <div style="font-size:12px;opacity:.75;margin-top:4px;">${esc(t("alertDetails"))}</div>
      <div class="detail">${esc(detail)}</div>
    `
        : ""
    }
  `;
  alertBox.querySelector(".close-x").addEventListener("click", hideAlert);

  const duration = type === "error" ? 7000 : 4500;
  alertTimer = setTimeout(hideAlert, duration);
}

const showError = (title, detail) => showAlert("error", title, detail);
const showSuccess = (title, detail) => showAlert("success", title, detail);

/* ---------------- Page Loader ---------------- */
const loader = $("pageLoader");
const loaderBar = $("plBarFill");

function showLoader(duration = 1800) {
  return new Promise((resolve) => {
    loaderBar.style.transition = "none";
    loaderBar.style.width = "0%";
    loader.classList.add("show");

    requestAnimationFrame(() => {
      loader.classList.add("visible");
      requestAnimationFrame(() => {
        loaderBar.style.transition = `width ${duration}ms cubic-bezier(0.16,1,0.3,1)`;
        loaderBar.style.width = "100%";
      });
    });

    setTimeout(() => {
      loader.classList.remove("visible");
      setTimeout(() => {
        loader.classList.remove("show");
        resolve();
      }, 450);
    }, duration);
  });
}

/* ---------------- Theme ---------------- */
const icons = {
  light:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
};

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  $("themeIcon").innerHTML = icons[theme === "light" ? "dark" : "light"];
  localStorage.setItem("ser-theme", theme);
}

$("themeBtn").addEventListener("click", () => {
  applyTheme(state.theme === "light" ? "dark" : "light");
});

/* ---------------- Language ---------------- */
function applyLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Static labels with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      const label = el.querySelector(".btn-label");
      if (label) label.textContent = i18n[lang][key];
      else el.textContent = i18n[lang][key];
    }
  });
  // Static placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
  });
  // Static HTML labels (brand etc)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  $("langLabel").textContent = i18n[lang].langToggle;
  document.title =
    lang === "ar" ? "الرد الذكي على الإيميلات" : "Smart Email Responder";

  // Overlay / loader labels
  $("plTitle").textContent = i18n[lang].plTitle;
  $("plSub").textContent = i18n[lang].plSub;
  $("aoTitle").textContent = i18n[lang].aoTitle;
  $("aoSub").textContent = i18n[lang].aoSub;
  $("aoStep1Label") && ($("aoStep1Label").textContent = i18n[lang].aoStep1);
  $("aoStep2Label") && ($("aoStep2Label").textContent = i18n[lang].aoStep2);
  $("aoStep3Label") && ($("aoStep3Label").textContent = i18n[lang].aoStep3);
  $("aoEta").textContent = i18n[lang].aoEta;

  localStorage.setItem("ser-lang", lang);

  // ── Re-render dynamic content (replies, chips, summary) with new lang ──
  if (state.lastResult) {
    renderResults(state.lastResult);
  }
}

$("langBtn").addEventListener("click", () => {
  applyLang(state.lang === "ar" ? "en" : "ar");
});

/* ---------------- Screens ---------------- */
function goTo(step) {
  hideAlert();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  $("screen-" + step).classList.add("active");
  document.querySelectorAll(".step-dots span").forEach((d) => {
    d.classList.toggle("on", Number(d.dataset.step) <= step);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------- Copy ---------------- */
async function copyText(text, btn) {
  const labelSpan = btn.querySelector(".copy-label");
  const original = labelSpan.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  btn.classList.add("done");
  labelSpan.textContent = t("copied");
  setTimeout(() => {
    btn.classList.remove("done");
    labelSpan.textContent = original;
  }, 1600);
}

/* ---------------- Results ---------------- */
function renderResults(data) {
  $("whoName").textContent = state.user.name || "—";

  const a = data.analysis || {};
  $("analysisBox").innerHTML = `
    <div class="analysis-strip">
      <span class="chip cat">${esc(t("lblCategory"))}: ${esc(a.category || "—")}</span>
      <span class="chip urg">${esc(t("lblUrgency"))}: ${esc(a.urgency || "—")}</span>
      <span class="chip sen">${esc(t("lblSentiment"))}: ${esc(a.sentiment || "—")}</span>
    </div>
    <div class="summary-box">
      <b>${esc(t("lblSummary"))}</b>
      ${esc(a.summary || "—")}
    </div>
  `;

  const tones = [
    { key: "official", label: t("toneOfficial"), icon: "🏛", cls: "tone-official" },
    { key: "semi",     label: t("toneSemi"),     icon: "✍️", cls: "tone-semi" },
    { key: "casual",   label: t("toneCasual"),   icon: "💬", cls: "tone-casual" },
  ];

  // Resolve reply texts — try all possible key names
  const resolved = tones.map((tone) => ({
    ...tone,
    text: extractReply(data, tone.key),
  }));

  const allEmpty = resolved.every((r) => !r.text);

  const box = $("repliesBox");
  box.innerHTML = "";

  if (allEmpty) {
    box.innerHTML = `
      <div class="global-alert show error" style="position:static;transform:none;margin:0;">
        <div class="title">⚠️ ${esc(t("emptyRepliesWarning"))}</div>
      </div>
    `;
    return;
  }

  resolved.forEach((tone, i) => {
    const text = tone.text || t("emptyReply");
    const card = document.createElement("div");
    card.className = "reply-card " + tone.cls;
    if (!tone.text) card.style.opacity = "0.6";
    card.innerHTML = `
      <div class="reply-top">
        <span class="reply-label">${tone.icon} ${tone.label}</span>
        <button class="copy-btn" type="button" data-i="${i}" ${!tone.text ? "disabled" : ""}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span class="copy-label">${esc(t("copy"))}</span>
        </button>
      </div>
      <div class="reply-text">${esc(text)}</div>
    `;
    box.appendChild(card);
  });

  box.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tone = resolved[Number(btn.dataset.i)];
      if (!tone || !tone.text) return;
      copyText(tone.text, btn);
    });
  });
}

/* ---------------- Step 1 → Loader → 2 ---------------- */
$("startBtn").addEventListener("click", async () => {
  hideAlert();
  const name = $("userName").value.trim();
  const email = $("userEmail").value.trim();

  if (!name) {
    showError(t("errName"));
    return;
  }
  if (!isEmail(email)) {
    showError(t("errEmail"));
    return;
  }

  state.user.name = name;
  state.user.email = email;

  await showLoader(1800);
  goTo(2);
});

/* ---------------- Analyze Overlay ---------------- */
const aoEl = $("analyzeOverlay");
const aoProgress = $("aoProgressFill");
const aoSteps = [
  document.querySelector('.ao-step[data-step="1"]'),
  document.querySelector('.ao-step[data-step="2"]'),
  document.querySelector('.ao-step[data-step="3"]'),
];

const AO_PROGRESS = {
  start: 6,
  step1: 28,
  step2: 58,
  step3: 82,
  hold: 88,
  finish: 100,
};

const AO_TIMINGS = {
  step1At: 300,
  step1End: 2400,
  step2End: 4600,
  minTotal: 5200,
};

let aoTimers = [];
let aoStartedAt = 0;
let aoCancelled = false;

function aoClearTimers() {
  aoTimers.forEach(clearTimeout);
  aoTimers = [];
}
function aoPushTimer(id) {
  aoTimers.push(id);
}

function aoSetProgress(value) {
  aoProgress.style.width = value + "%";
}

function aoActivateStep(index) {
  const step = aoSteps[index];
  if (!step) return;
  step.classList.remove("done");
  step.classList.add("active");
}

function aoCompleteStep(index) {
  const step = aoSteps[index];
  if (!step) return;
  step.classList.remove("active");
  step.classList.add("done");
}

function aoResetSteps() {
  aoSteps.forEach((s) => {
    if (!s) return;
    s.classList.remove("active", "done");
  });
}

function showAnalyzeOverlay() {
  aoCancelled = false;
  aoClearTimers();
  aoResetSteps();

  aoProgress.style.transition = "none";
  aoProgress.style.width = "0%";

  aoEl.classList.add("show");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    aoEl.classList.add("visible");

    requestAnimationFrame(() => {
      aoProgress.style.transition = "";
      aoSetProgress(AO_PROGRESS.start);
    });

    aoPushTimer(
      setTimeout(() => {
        if (aoCancelled) return;
        aoActivateStep(0);
        aoSetProgress(AO_PROGRESS.step1);
      }, AO_TIMINGS.step1At),
    );

    aoPushTimer(
      setTimeout(() => {
        if (aoCancelled) return;
        aoCompleteStep(0);
        aoActivateStep(1);
        aoSetProgress(AO_PROGRESS.step2);
      }, AO_TIMINGS.step1End),
    );

    aoPushTimer(
      setTimeout(() => {
        if (aoCancelled) return;
        aoCompleteStep(1);
        aoActivateStep(2);
        aoSetProgress(AO_PROGRESS.step3);
      }, AO_TIMINGS.step2End),
    );

    aoPushTimer(
      setTimeout(() => {
        if (aoCancelled) return;
        aoSetProgress(AO_PROGRESS.hold);
      }, AO_TIMINGS.step2End + 800),
    );

    aoStartedAt = Date.now();
  });
}

function hideAnalyzeOverlay() {
  aoCancelled = true;
  aoClearTimers();

  const elapsed = Date.now() - aoStartedAt;
  const remaining = Math.max(0, AO_TIMINGS.minTotal - elapsed);

  aoPushTimer(
    setTimeout(() => {
      aoCompleteStep(2);
      aoSteps.forEach((s) => s && s.classList.remove("active"));
      aoSetProgress(AO_PROGRESS.finish);

      aoPushTimer(
        setTimeout(() => {
          aoEl.classList.remove("visible");

          aoPushTimer(
            setTimeout(() => {
              aoEl.classList.remove("show");
              document.body.style.overflow = "";
              aoResetSteps();
              aoProgress.style.transition = "none";
              aoProgress.style.width = "0%";
            }, 400),
          );
        }, 350),
      );
    }, remaining),
  );
}

/* ---------------- Step 2 → 3 ---------------- */
$("analyzeBtn").addEventListener("click", async () => {
  hideAlert();

  const from = $("fromEmail").value.trim();
  const subject = $("subject").value.trim();
  const text = $("body").value.trim();

  if (!from || !subject || !text) {
    showError(t("errFillAll"));
    return;
  }

  showAnalyzeOverlay();

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        subject,
        text,
        userName: state.user.name,
        userEmail: state.user.email,
        lang: state.lang,
      }),
    });

    const raw = await res.text();
    let data = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      /* not json */
    }

    // Debug — يظهر في F12 → Console
    console.log("📥 n8n response:", data || raw);

    if (!res.ok) {
      const detail =
        (data && (data.message || data.error || data.description)) ||
        raw ||
        "HTTP " + res.status + " " + res.statusText;
      hideAnalyzeOverlay();
      showError(`${t("errServer")} ${res.status}`, detail);
      return;
    }

    if (!data || !data.success) {
      const detail = (data && (data.message || data.error)) || raw || "";
      hideAnalyzeOverlay();
      showError(t("errFlow"), detail);
      return;
    }

    await new Promise((r) => setTimeout(r, 600));
    hideAnalyzeOverlay();

    // ⚡ احفظ النتيجة في الحالة + sessionStorage
    saveLastResult(data);

    // حدّد إذا الردود فاضية، وحذّر المستخدم
    const anyReply =
      extractReply(data, "official") ||
      extractReply(data, "semi") ||
      extractReply(data, "casual");

    if (!anyReply) {
      showError(t("emptyRepliesWarning"));
    } else {
      showSuccess(t("successTitle"));
    }

    renderResults(data);
    goTo(3);
  } catch (err) {
    console.error(err);
    hideAnalyzeOverlay();
    showError(t("errNetwork"), err.message || String(err));
  }
});

/* ---------------- Back ---------------- */
$("backBtn").addEventListener("click", () => {
  $("fromEmail").value = "";
  $("subject").value = "";
  $("body").value = "";
  clearLastResult();
  goTo(2);
});

/* ---------------- Sticky Topbar ---------------- */
(function initStickyTopbar() {
  const topbar = $("topbar");
  if (!topbar) return;

  const onScroll = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------------- Init ---------------- */
applyTheme(state.theme);

// استرجع النتيجة المحفوظة (لو فيه refresh)
const restored = restoreLastResult();
applyLang(state.lang);
if (restored) {
  renderResults(state.lastResult);
  goTo(3);
}