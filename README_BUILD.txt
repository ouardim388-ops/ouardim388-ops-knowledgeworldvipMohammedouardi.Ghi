📘 تعليمات بناء مشروع "عالم المعرفة VIP"

هذا المشروع مكتوب باستخدام React + TypeScript + Vite + TailwindCSS.

⚙️ المتطلبات:
1️⃣ تثبيت Node.js (نسخة LTS) من: https://nodejs.org/en/download/

🪜 خطوات البناء على Windows:
-----------------
1. فك ضغط الملف KnowledgeWorld_VIP_Build_Auto.zip إلى مجلد على جهازك.
2. افتح المجلد الناتج ثم دبل-كليك على الملف: build.bat
   (أو افتح PowerShell/Command Prompt داخل المجلد وشغل build.bat)
3. السكربت سيقوم تلقائياً بـ:
   - npm install
   - npm run build
4. بعد نجاح العملية ستجد مجلد جديد باسم: dist/
   هذا المجلد يحتوي الموقع الجاهز للنشر (index.html و assets/).

🌍 نشر على GitHub Pages:
-----------------
1. أنشئ Repository جديدة على GitHub.
2. ارفع محتويات مجلد dist (وليس المجلد نفسه) إلى الفرع main.
3. من Settings → Pages: اختار Branch = main و Folder = / (root)
4. اضغط Save وانتظر 1-2 دقيقة.

🚀 انتهينا — موقعك سيكون متاح على https://username.github.io/your-repo-name
