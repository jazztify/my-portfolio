Write-Host "Putting XAMPP htdocs online via Pinggy..."
Write-Host "This will provide you with a temporary online, public URL (valid for 60 minutes)."
Write-Host "You can give this URL to employers or friends so they can view the Kingsman project."
Write-Host "(Please note: XAMPP must be running, specifically the Apache and MySQL modules)"
Write-Host ""
ssh -p 443 -R0:localhost:80 a.pinggy.io
pause
