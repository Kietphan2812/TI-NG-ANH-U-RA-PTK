@echo off
chcp 65001 >nul
echo ========================================================
echo   ĐANG ĐẨY CẬP NHẬT TÍNH NĂNG MỚI LÊN GITHUB & RENDER
echo   (Tính năng đọc Tiếng Anh, Dịch Tiếng Việt & Đọc Tiếng Việt)
echo ========================================================

git add .
git commit -m "feat: add English audio speech, Vietnamese translation toggle and Vietnamese voice reader"
git push origin main

echo.
echo ========================================================
echo   CẬP NHẬT THÀNH CÔNG!
echo   Render sẽ tự động đồng bộ lên: https://tieng-anh-dau-ra-ptk.onrender.com
echo ========================================================
pause
