@echo off
setlocal enabledelayedexpansion

echo =======================================================
echo  Generating Self-Signed SSL Certificates for Local Nginx
echo =======================================================

set CERTS_DIR=%~dp0certs
if not exist "%CERTS_DIR%" mkdir "%CERTS_DIR%"

echo [INFO] Writing OpenSSL config to %CERTS_DIR%\openssl.cnf ...

(
echo [req]
echo default_bits = 2048
echo prompt = no
echo default_md = sha256
echo distinguished_name = dn
echo x509_extensions = v3_req
echo.
echo [dn]
echo C = CN
echo ST = Beijing
echo L = Beijing
echo O = LocalDev
echo OU = OfflineIDPhoto
echo CN = localhost
echo.
echo [v3_req]
echo subjectAltName = @alt_names
echo.
echo [alt_names]
echo DNS.1 = localhost
echo IP.1 = 127.0.0.1
) > "%CERTS_DIR%\openssl.cnf"

echo [INFO] Running openssl command...
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout "%CERTS_DIR%\key.pem" -out "%CERTS_DIR%\cert.pem" -config "%CERTS_DIR%\openssl.cnf"

if %ERRORLEVEL% equ 0 (
    del "%CERTS_DIR%\openssl.cnf" >nul 2>&1
    echo [SUCCESS] SSL Certificates generated successfully:
    echo   - Cert: %CERTS_DIR%\cert.pem
    echo   - Key:  %CERTS_DIR%\key.pem
) else (
    echo [ERROR] Failed to run openssl. Please ensure OpenSSL is installed and in PATH.
)

pause
