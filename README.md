# Mac CLI

 OS X command line tools for developers

:star: Now with modularity and plugins! You can check the plugins folder: [/mac-cli/plugins](https://github.com/guarinogabriel/mac-cli/tree/master/mac-cli/plugins)

_Contributions to add new plugins and keep improving the existing ones are welcome and very much appreciated!_

![image](https://github.com/guarinogabriel/mac-cli/raw/master/demo/demo.gif)

The ultimate tool for developers to manage their Mac. It provides a huge set of command line commands that automate the usage of your OS X system.
When you run a function, the executed command is displayed and that helps you memorize each of the Utilities for future usage.

---

### Installation in 1 Simple Step - Including configuration wizard!

Via curl
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/guarinogabriel/mac-cli/master/mac-cli/tools/install)"`

Via wget
> `sh -c "$(wget https://raw.githubusercontent.com/guarinogabriel/mac-cli/master/mac-cli/tools/install -O -)"`

Then, re-open your terminal client. You will be able to run all the commands listed below, for example:
> `mac help`

---

### Configuration

The configuration is done when you install Mac CLI for the first time though the installer configuration wizard.
After that, you can update your Mac CLI configuration by editing the following file: `/usr/local/bin/mac`

---

### Requirements

These are the requirements to be able to run all the commands (the dependencies/requirements are installed when you install Mac CLI for the first time):

* Homebrew
* Git
* Python
* Pipe Viewer (pv)

---

### Update

You can update Mac CLI to the latest version by running:
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/guarinogabriel/mac-cli/master/mac-cli/tools/update)"`

---

### Uninstallation

You can uninstall Mac CLI by running:
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/guarinogabriel/mac-cli/master/mac-cli/tools/uninstall)"`

---

### Integrated Projects

The following amazing projects have been integrated on the mac script (all the integrated projects are optional and can be installed through the installation wizard):
* Glances (https://github.com/nicolargo/glances)
* MySQL CLI (https://github.com/dbcli/mycli)
* speedtest-cli (https://github.com/sivel/speedtest-cli)
* n98-magerun (https://github.com/netz98/n98-magerun)
* n98-magerun2 (https://github.com/netz98/n98-magerun2)
* imageOptim
* iStats

---

### Help / Commands List

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac help`  | List all available commands in mac script  | |

### General Commands

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac update`  | Install OS X software updates, update installed Ruby gems, Homebrew, npm and their installed packages  | |
| `mac lock`  | Lock  | |
| `mac restart`  | Restart OS X  | |
| `mac sleep`  | Sleep mode  | |
| `mac shutdown`  | Shutdown  | |
| `mac time`  | Show clock at top right position in Terminal/iTerm  | |
| `mac screensaver`  | Start screensaver  | |
| `mac folders:list`  | List folders in current directory with their current size  | |
| `mac folder:size`  | Calculate current folder size  | |
| `mac folders:remove-empty`  | Remove empty subdirectories  | |
| `mac apps:close-all`  | Close all opened apps  | |
| `mac apps:app-store`  | Get list of installed apps from App Store  | |
| `mac eject-all`  | Eject all mounted volumes and disks  | |
| `mac battery`  | Get battery status  | |
| `mac info`  | Get OS X version information  | |
| `mac hidden:show`  | Show hidden files  | |
| `mac hidden:hide`  | Hide hidden files  | |
| `mac find:text X`  | Find exact phrase recursively inside directory  | X = Text string |
| `mac find:biggest-files`  | Find biggest files inside directory  | |
| `mac find:biggest-directories`  | Find biggest directories inside directory  | |
| `mac zip:extract X` | Extract Zip file to current folder | X = Zip file to extract |
| `mac gzip:compress X` | Compress current file using Gzip | X = File to compress |
| `mac gzip:extract X` | Extract Gzip file to current folder | X = Gzip file to extract |
| `mac tar:compress X`  | Compress X file/directory using tar with progress indicator  | X = File or directory |
| `mac tar:extract X` | Extract tar file to current folder | X = Tar file to extract |


### Search Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac find:recent N`  | Find files modified in the last N minutes  |  N = number of minutes  |
| `mac find:duplicated`  | Find duplicated files  |  |
| `mac search:replace X` | Search and replace string in file | X = File to perform the search and replace operation |


### Network Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac speedtest`  | Internet connection speed test  |
| `mac speedtest:infinite`  | Run internet speed test each 5 minutes  |
| `mac ports`  | List of used ports  |
| `mac ip:local`  | Get local IP address  |
| `mac ip:public`  | Get public IP address  |


### LAMP (Linux, Apache, MySQL, PHP) Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac mysql`  | Open Sequel PRO app)  |  |
| `mac mysql:cli`  | Start MySQL CLI with autocompletion and syntax higlighting  |  |
| `mac mysql:list`  | List all MySQL databases  | |
| `mac mysql:dump-all`  | Export all MySQL databases to individual files  | |
| `mac mysql:dump X`  | Export MySQL database to current directory  |  X = database name  |
| `mac mysql:import X`  | Import MySQL database  |  X = SQL file  |
| `mac mysql:import-table X`  | Import single MySQL database table |  X = SQL file containing database table  |
| `mac mysql:create X`  | Create MySQL database  |  X = Database name |
| `mac mysql:drop X`  | Remove MySQL database  |  X = Database name |
| `mac mysql:duplicate X`  | Duplicate MySQL database  |  X = Database name |
| `mac mamp:start`  | Start MAMP Server (Apache and MySQL)  | |
| `mac mamp:stop`  | Stop MAMP Server (Apache and MySQL)  | |
| `mac mamp:restart`  | Restart MAMP Server (Apache and MySQL)  | |
| `mac php:syntax`  | Check PHP Syntax for all PHP files in current location  |  |
| `mac php:info`  | Get PHP info on command line  |  |
| `mac hosts:edit`  | Edit hosts file  |  |


### SSH Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac ssh:download-file X`  | Download file from remote server through SSH  |  X = Path of the remote file to download  |
| `mac ssh:download-folder X`  | Download entire folder from remote server through SSH  |  X = Path of the remote folder to download  |
| `mac ssh:download-database X`  | Download MySQL from remote server through SSH  |  X = Name of the database to download  |
| `mac ssh:sync:local X`  | Sync local folder with remote folder using rsync through SSH (download remote folder to local folder)  |  X = Path of the remote folder to sync to local folder  |
| `mac ssh:sync:remote X`  | Sync remote folder with local folder using rsync through SSH (upload local folder to remote folder)  |  X = Path of the remote folder to sync from local folder  |
| `mac ssh:upload X`  | Upload file to remote server through SSH  |  X = Path of the file to upload to the remote server  |
| `mac ssh:public-key`  | Copy SSH Public Key  |  |
| `mac ssh:list`  | List all the saved SSH credentials  |  |


### LAMP Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac mysql:gui`  | Open Sequel PRO app)  |  |
| `mac mysql:cli`  | Start MySQL CLI with autocompletion and syntax higlighting  |  |
| `mac mysql:list`  | List all MySQL databases  | |
| `mac mysql:dump-all`  | Export all MySQL databases to individual files  | |
| `mac mysql:dump X`  | Export MySQL database to current directory  |  X = database name  |
| `mac mysql:import X`  | Import MySQL database  |  X = SQL file  |
| `mac mysql:import-table X`  | Import single MySQL database table |  X = SQL file containing database table  |
| `mac mysql:create X`  | Create MySQL database  |  X = Database name |
| `mac mysql:drop X`  | Remove MySQL database  |  X = Database name |
| `mac mysql:duplicate X`  | Duplicate MySQL database  |  X = Database name |
| `mac mamp:start`  | Start MAMP Server (Apache and MySQL)  | |
| `mac mamp:stop`  | Stop MAMP Server (Apache and MySQL)  | |
| `mac mamp:restart`  | Restart MAMP Server (Apache and MySQL)  | |
| `mac php:syntax`  | Check PHP Syntax for all PHP files in current location  |  |
| `mac php:info`  | Get PHP info on command line  |  |
| `mac hosts:edit`  | Edit hosts file  |  |


### Web Development Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac dev:monitor X`  | Monitor file changes (for example: log files)  |  X = File to monitor  |
| `mac dev:compass:compile`  | Compile current folder using compass  | |
| `mac dev:optimize-images`  | Optimize all images in current directory and subdirectories |
| `mac dev:css:convert-to-scss`  | Convert CSS file to SCSS |


### Performance and maintenance Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac system`  | Show system information to review mac performance  |
| `mac temp`  | Show temperature, fan and battery statistics  |
| `mac memory`  | See memory usage sorted by memory consumption  |
| `mac trash:empty`  | Empty trash |
| `mac trash:size`  | Calculate trash size |
| `mac desktop:cleanup`  | Remove all files and directories from Desktop directory |
| `mac downloads:cleanup`  | Remove all files and directories from Downloads directory |


### iTerm / Terminal Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac iterm:tab-title`  | Set title of current iTerm tab  |


### Git Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac git:config`  | Display local Git configuration  |
| `mac git:open`  | Open current repository on Github  |
| `mac git:create:branch`  | Create branch based on current branch  |
| `mac git:branches:date`  | Get last update date for all branches in current project  |
| `mac git:undo-commit`  | Undo latest commit  |
| `mac git:log`  | See latest commits IDs and titles for current branch  |
| `mac git:branch`  | See all branches  |
| `mac git:branch:rename`  | Rename Git branch |
| `mac git:branch:remove-local`  | Remove local Git branch |
| `mac git:branch:remove-remote`  | Remove local and remote Git branch |
| `mac git:remove`  | Remove Git from current project  |
| `mac git:settings`  | Check Git settings  |
| `mac git:add-removed`  | Add removed files to staged files  |
| `mac git:size`  | Get size for current Git directory  |

### Web Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac web:download-images`  | Download all images from website to current directory  |

### Homebrew Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac brew`  | Get a list of installed Homebrew packages  |


### Xcode Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac xcode:cleanup`  | Cleanup Xcode files to free up hard disk space  |


### Image Utilities

| Command  | Description | Arguments
| ------------- | ------------- | ------------- |
| `mac image:generate:mobile-app-icons X Y`  | Generate mobile app icons  | X = Original image file, Y = Output path |


### Magento Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac magento:version`  | Get Magento version from current project on command line  |
| `mac magento:customer:create`  | Create Magento customer with sample address and sample credit card information  |
| `mac magento:fix-permissions`  | Fix Magento permissions for files and directories  |
| `mac magento:order:create`  | Create sample order in Magento  |
| `mac magento:shell-script:create`  | Create script in Magento shell folder to be run from command line  |
| `mac magento:gitignore:create`  | Create gitignore file for Magento project |
| `mac magento:url-rewrites:enable`  | Enable Magento URL rewrites  |
| `mac magento:url-rewrites:disable`  | Disable Magento URL rewrites  |
| `mac magento2:install`  | Install Magento 2 in current folder  |
