@echo off
REM Knowledge World VIP - Automated Build Script for Windows
echo ================================
echo 🚀 بدء عملية البناء لمشروع "عالم المعرفة VIP"
echo ================================

REM Check for Node.js
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ لم يتم العثور على Node.js
    echo 🔗 يرجى تثبيته من https://nodejs.org/en/download/
    echo.
    pause
    exit /b
)

REM Move to script directory (in case double-clicked)
cd /d %~dp0

REM Install dependencies
echo.
echo 🧩 جاري تثبيت المكتبات (npm install)...
npm install
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️ فشل تثبيت الحزم بواسطة npm. راجع الأخطاء أعلاه.
    pause
    exit /b
)

REM Build project
echo.
echo 🏗️ جاري بناء المشروع (npm run build)...
npm run build
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️ حدث خطأ أثناء عملية البناء. راجع الأخطاء أعلاه.
    pause
    exit /b
)

REM Confirm dist exists
IF EXIST dist (
    echo.
    echo ✅ تم إنشاء مجلد dist بنجاح!
    echo 🌍 يمكنك الآن رفع محتوى مجلد dist إلى GitHub Pages.
) ELSE (
    echo.
    echo ⚠️ لم يتم العثور على مجلد dist. قد يكون البناء فشل.
)
echo.
pause
