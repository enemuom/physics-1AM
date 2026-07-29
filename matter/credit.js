/* ============================================
   ملف credit.js
   شريط هوية الأستاذ لبيب - يُحقن تلقائياً في أعلى كل درس
   لتعديل الاسم أو الروابط: غيّر القيم في كائن CONFIG فقط
   ============================================ */

const CREDIT_CONFIG = {
  name: "الأستاذ بوبندير عبد المومن",
  pageName: "فيزياء داري الواسيني",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063551067269",
  whatsappUrl: "https://wa.me/213771129556"
};

(function () {
  // 1) إضافة الأنماط (CSS) مرة واحدة فقط
  const style = document.createElement("style");
  style.textContent = `
    .teacher-credit-header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      background: #0a0a0a;
      border-bottom: 1px solid #d4a017;
      padding: 10px 16px;
      font-family: 'Cairo', sans-serif;
      direction: rtl;
    }
    .teacher-credit-header .logo-mark {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: radial-gradient(circle, #d4a017, #8a6a0f);
      box-shadow: 0 0 10px #d4a017, 0 0 4px #00ffff inset;
      flex-shrink: 0;
    }
    .teacher-credit-header .name {
      color: #d4a017;
      font-weight: 700;
      font-size: 16px;
      text-shadow: 0 0 6px rgba(212, 160, 23, 0.6);
    }
    .teacher-credit-header .page-name {
      color: #00e5ff;
      font-size: 12px;
      font-weight: 400;
      opacity: 0.85;
    }
    .teacher-credit-header .social-links {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: auto;
    }
    .teacher-credit-header .social-link {
      display: flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      transition: 0.3s;
    }
    .teacher-credit-header .social-link svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    .teacher-credit-header .whatsapp-link {
      color: #25D366;
      border: 1px solid #25D366;
    }
    .teacher-credit-header .whatsapp-link:hover {
      background: #25D366;
      color: #0a0a0a;
      box-shadow: 0 0 10px #25D366;
    }
    .teacher-credit-header .facebook-link {
      color: #1877F2;
      border: 1px solid #1877F2;
    }
    .teacher-credit-header .facebook-link:hover {
      background: #1877F2;
      color: #ffffff;
      box-shadow: 0 0 10px #1877F2;
    }
    @media (max-width: 480px) {
      .teacher-credit-header .page-name { display: none; }
      .teacher-credit-header .social-link span.label { display: none; }
    }
  `;
  document.head.appendChild(style);

  // 2) بناء عنصر الـ header
  const header = document.createElement("header");
  header.className = "teacher-credit-header";
  header.innerHTML = `
    <span class="logo-mark"></span>
    <span class="name">${CREDIT_CONFIG.name}</span>
    <span class="page-name">| ${CREDIT_CONFIG.pageName}</span>
    <span class="social-links">
      <a href="${CREDIT_CONFIG.facebookUrl}" target="_blank" class="social-link facebook-link">
        <svg viewBox="0 0 24 24"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
        <span class="label">فيسبوك</span>
      </a>
      <a href="${CREDIT_CONFIG.whatsappUrl}" target="_blank" class="social-link whatsapp-link">
        <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.45 1.29 4.9L2 22l5.31-1.39c1.39.76 2.96 1.19 4.63 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7C16.96 3.03 14.49 2 12.04 2zm5.86 14.1c-.25.7-1.25 1.28-2.05 1.45-.55.12-1.27.21-3.7-.79-2.81-1.16-4.62-3.99-4.76-4.18-.14-.19-1.14-1.51-1.14-2.88s.71-2.04.97-2.32c.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.25.6.84 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.75-.18 1.45z"/></svg>
        <span class="label">واتساب</span>
      </a>
    </span>
  `;

  // 3) إدراجه كأول عنصر داخل body فور تحميل الصفحة
  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertBefore(header, document.body.firstChild);
  });

  // احتياط: إذا تم تحميل السكريبت بعد DOMContentLoaded أصلاً
  if (document.readyState === "interactive" || document.readyState === "complete") {
    document.body.insertBefore(header, document.body.firstChild);
  }
})();
