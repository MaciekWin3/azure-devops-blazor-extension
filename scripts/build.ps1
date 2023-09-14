# Set the path to the directory where the script is located
$scriptDir = [System.IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Path)

# Go back one directory to reach the parent directory of the 'scripts' folder
$parentDir = [System.IO.Path]::GetFullPath("$scriptDir\..")

# Set the path to the .csproj or .sln file (assuming it's in the parent directory)
$projectPath = Join-Path $parentDir "YourProject.csproj"

# Set the path to the destination folder (assuming it's in the parent directory)
$destinationFolder = Join-Path $parentDir "dist"

# Set the path to the 'publish' directory (assuming it's in the parent directory)
$publishFolder = Join-Path $parentDir "bin\Debug\net7.0\publish"

# Build and publish the project
dotnet publish $projectPath -o $publishFolder

# Copy the published contents to the destination folder
Copy-Item -Path (Join-Path $publishFolder "*") -Destination $destinationFolder -Recurse -Force

Write-Host "Publishing and copying complete."

