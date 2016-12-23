## Instruções:

1. Instalar Brew

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Remover versões antigas do node/npm:

    sudo rm -rf /usr/local/lib/node_modules
    sudo rm -rf ~/.npm
    brew uninstall node

3. Instalar versão 0.10 do node:

    brew tap homebrew/versions
    brew search node (talvez desnecessário?)
    brew install homebrew/versions/node010 --without-npm

4. Apontar o PATH do node para não precisar de sudo (módulos globais serão instalados em ~/.npm-packages):

    mkdir "${HOME}/.npm-packages"
    echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.bashrc
    echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc

5. Instalar NPM:

    curl -L https://www.npmjs.org/install.sh | sh

6. Configurar NPM:

    echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules\:\$NODE_PATH\" >> ${HOME}/.bashrc
    echo PATH=\"\$NPM_PACKAGES/bin\:\$PATH\" >> ${HOME}/.bashrc
    echo source "~/.bashrc" >> ${HOME}/.bash_profile
    source ~/.bashrc

7. Instalar as dependências com os comandos:

    npm install -g bower
    npm install -g gulp
    npm install -g eslint
    npm install -g phonegap@5.3.6
    npm install -g ios-sim
    npm install -g ios-deploy

8. Abra o console na pasta do projeto.

9. Instalar dependências:

    npm install

10. Instalar dependências bower:

    bower install

11. Para dar build:

    gulp build

12. Para debugar no navegador:

    gulp serve

13. Caso não exista a pasta platforms/ios:

    phonegap platform add ios

14. Para dar build para a plataforma:

    phonegap build ios

15. Para executar em uma plataforma:

    phonegap run ios

16. Para simular no iOS 5:

    phonegap emulate ios --target="iPhone-5s"

17. Para instalar no dispositivo:

    phonegap run ios --device


Configuração para o Android no Windows

1.0. Instalar JDK versão: 1.7.0_79
    
    http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk7-downloads-1880260.html

1.1 Instalar o Git versão 2.8.3, mantendo as opções padrão selecionadas

    https://git-for-windows.github.io/

1.2. Instalar NODE versão: 0.10.44
    
    https://nodejs.org/dist/v0.10.44/

1.3. Instalar o Android Studio versão: 2.1(verificar a instalação da API 22) ou apenas obter o SDK relativo a API 22

    https://developer.android.com/studio/index.html

1.4. Instalar o Phonegap versão: 0.2.3

    https://github.com/phonegap/phonegap-app-desktop/releases/download/0.2.3/PhoneGapSetup-win32.exe

1.5. Instalar o Ant versão: 1.9.7
    
    http://ant.apache.org/bindownload.cgi

2. Configurar variáveis de ambiente

    ANDROID_HOME
    C:\Users\<Nome do Usuario>\AppData\Local\Android\sdk

    ANT_HOME
    C:\ant (diretório onde o ANT foi extraído)

    ANT_OPTS
    -Xmx256M

    JAVA_HOME
    C:\Program Files\Java\jdk1.7.0_79

    PATH
    C:\Users\<Nome do Usuario>\AppData\Roaming\npm;%ANDROID_HOME%\tools;%PROGRAMFILES(x86)%\Git\bin;%PROGRAMFILES(x86)%\Git\cmd;%ANT_HOME%\bin;%ANDROID_HOME%\platform-tools

3. Instalar as dependências com os comandos:

    npm install -g bower
    npm install -g gulp
    npm install -g eslint
    npm install -g phonegap@5.3.6

4. Abra o console na pasta do projeto.

5. Instalar dependências:

    npm install

6. Instalar dependências bower:

    bower install

7. Para dar build:

    gulp build

8. Para debugar no navegador:

    gulp serve

9. Para instalar no dispositivo:

    phonegap run android
