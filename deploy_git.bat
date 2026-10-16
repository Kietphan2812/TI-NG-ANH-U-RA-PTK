@echo off
chcp 65001 >nul
echo ========================================================
echo   ĐANG ĐẨY CẬP NHẬT 15 CÂU & INTRODUCE MYSELF LÊN GITHUB
echo ========================================================

git add .
git commit -m "feat: cap nhat 15 cau hoi dap va 7 cau gioi thieu ban than Phan Tan Kiet"
git push origin main

echo.
echo ========================================================
echo   CẬP NHẬT THÀNH CÔNG!
echo   Render sẽ tự động đồng bộ lên: https://tieng-anh-dau-ra-ptk.onrender.com
echo ========================================================
pause
