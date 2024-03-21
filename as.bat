@echo off

:loop

taskkill /F /IM node.exe /T >nul 2>&1
npm test

timeout /t 60 >nul

goto loop