Write-Host "Building project..."
$projectPath = [System.IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Path)
$destinationFolder = Join-Path $projectPath "dist"
$publishFolder = Join-Path $projectPath "bin\Debug\net7.0\publish\wwwroot"
dotnet publish $projectPath -o $publishFolder  | Out-Null
Write-Host "Build done..."
Write-Host "Coping project files to dist folder..."
if (-not (Test-Path -Path $destinationFolder -PathType Container)) {
    New-Item -Path $destinationFolder -ItemType Directory -Force
}
Copy-Item -Path "$publishFolder\*" -Destination $destinationFolder -Recurse -Force | Out-Null
Write-Host "Coping project files done..."
Write-Host "Creating extension..."
tfx extension create
Write-Host "Creating extension done."

