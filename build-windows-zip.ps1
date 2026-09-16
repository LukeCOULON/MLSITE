$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$windowsDir = Join-Path $root "windows"
$setup = Join-Path $root "MultiLaunch-Setup.exe"
$exe = Join-Path $windowsDir "multilaunch.exe"
$downloads = Join-Path $root "downloads"
$zip = Join-Path $downloads "MultiLaunch-Windows.zip"

if (!(Test-Path $setup)) { throw "Fichier manquant : $setup" }
if (!(Test-Path $exe)) { throw "Fichier manquant : $exe" }

New-Item -ItemType Directory -Force -Path $downloads | Out-Null
if (Test-Path $zip) { Remove-Item $zip -Force }

$tmp = Join-Path $env:TEMP ("MultiLaunch-Windows-" + [guid]::NewGuid())
New-Item -ItemType Directory -Force -Path (Join-Path $tmp "windows") | Out-Null

Copy-Item $setup (Join-Path $tmp "MultiLaunch-Setup.exe")
Copy-Item $exe (Join-Path $tmp "windows/multilaunch.exe")

Compress-Archive -Path (Join-Path $tmp "*") -DestinationPath $zip -CompressionLevel Optimal
Remove-Item $tmp -Recurse -Force

Write-Host "ZIP créé : $zip"
