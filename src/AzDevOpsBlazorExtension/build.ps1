Write-Host "Building project..."
$projectPath = [System.IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Path)
$destinationFolder = Join-Path $projectPath "dist"
if ($args -contains "--dev") {
	$publishFolder = Join-Path $projectPath "bin\Debug\net8.0\publish\wwwroot"
	dotnet publish --configuration Debug | Out-Null
}
else {
	$publishFolder = Join-Path $projectPath "bin\Release\net8.0\publish\wwwroot"
	dotnet publish --configuration Release | Out-Null
}
Write-Host "Build done..."
Write-Host "Copying project files to dist folder..."
if (-not (Test-Path -Path $destinationFolder -PathType Container)) {
    New-Item -Path $destinationFolder -ItemType Directory -Force | Out-Null
}
Copy-Item -Path "$publishFolder\*" -Destination $destinationFolder -Recurse -Force | Out-Null
Write-Host "Copying project files done..."

Write-Host "Creating extension..."
$extensionCommand = "tfx extension create"
if ($args -contains "--dev") {
    $extensionCommand += " --manifest-globs vss-extension.dev.json"
}
Invoke-Expression $extensionCommand
Write-Host "Creating extension done."

