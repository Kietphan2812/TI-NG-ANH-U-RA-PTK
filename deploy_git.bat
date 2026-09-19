@echo off
chcp 65001 >nul
echo ==============================================
echo   ĐANG ĐẨY CODE LÊN GITHUB REPOSITORY
echo   Repo: https://github.com/Kietphan2812/TI-NG-ANH-U-RA-PTK.git
echo ==============================================

git init
git config --local core.autocrlf true
git remote remove origin 2>nul
git remote add origin https://github.com/Kietphan2812/TI-NG-ANH-U-RA-PTK.git
git branch -M main
git add .
git commit -m "Deploy Tieng Anh Dau Ra web app with Neon PostgreSQL integration"
git push -u origin main --force

echo.
echo ==============================================
echo   HOÀN TẤT ĐẨY CODE!
echo ==============================================
pause
