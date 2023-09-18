# Azure Devops Blazor Extension

## TODO 📝
- [x] Enable debuging 
- [ ] Fix wasm warning in browser console
- [ ] Add custom template
- [ ] Mudblazor?

## Prerequisites 📝
- [.NET](https://dotnet.microsoft.com/en-us/)
- [tfs-cli](https://github.com/Microsoft/tfs-cli)
- [Powershell (optional)](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3)

## Get started 🚀
To begin with, you need to clone the repository on your local machine. To do so, run the following command in your terminal:
```
git clone https://github.com/MaciekWin3/azure-devops-blazor-extension
```

Next, you need to install all dependencies. To do so, run the following command in your terminal:
```
npm install
```

## Development 🛠


## Debug 🐞
You can debug and develop your extension locally. You just need to run project with dotnet. If you want to run project in Azure DevOps environment, you need to run AzDevOpsBlazorExtension.DevServer. To do so, run the following command in your terminal in DevServer folder:
```
dotnet watch run --pathbase=/dist
```
This command will run project in watch mode. It means that every time you change something in your code, project will be recompiled. If you uploded dev version of your extension to Azure Devops it will listen to port 7251 on your localhost. Then every time you refresr page, you can see your change live on Azure DevOps.

## Build 🏗
Finally, you can build the extension. To do so you can run build.ps1 script located in root folder of this project:
```
./build.ps1
```

Script will build project in release mode and create .vsix file from dist folder (where builded project is located).

## Usefull resources 📚
For more information about Azure DevOps extensions, see:
- [Develop a web extension](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops)
- [Azure DevOps Extension Hot Reload and Debug](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug)
- [Extension manifest reference](https://learn.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops)
- [Extension samples](https://learn.microsoft.com/en-us/azure/devops/extend/develop/samples-overview?view=azure-devops&source=recommendations)
- [azure-devops-extension-sdk](https://github.com/microsoft/azure-devops-extension-sdk)
- [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample)
- [tfs-cli](https://github.com/Microsoft/tfs-cli)


## Contriburtion 🤝

This project welcomes contributions and suggestions.


