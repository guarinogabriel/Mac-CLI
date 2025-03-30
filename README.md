# Mac CLI

 macOS command line tools for developers


---

### Sponsors

>[![Sponsor logo](images/sponsor-icon.png)](https://apps.apple.com/us/app/superplanner/id6443725564)
>
>Mac CLI is sponsored by 📒 [SuperPlanner](https://superplanner.app/), an innovative daily planner and task manager for iPhone, iPad and Mac.
>
>SuperPlanner combines the calendar with task management features to keep everything organized in one place.
>
>There is no login or user registration required. All data is stored locally and syncs between your devices using private and secure iCloud sync.
>
>[![Sponsor download badge](images/sponsor-download-badge.png)](https://apps.apple.com/us/app/superplanner/id6443725564)

---

### Introduction

Mac CLI is the ultimate tool for developers to manage their Mac. It provides a huge set of command line commands that automate the usage of your macOS system.
When you run a function, the executed command is displayed and that helps you memorize each of the Utilities for future usage.

The tool is designed to be easily extendable with additional commands through the use of plugins. To view the currently available commands, you can navigate to the plugins folder and explore the different categories: [/mac-cli/plugins](https://github.com/guarinogabriel/mac-cli/tree/master/mac-cli/plugins)

_Contributions to add new plugins and keep improving the existing ones are welcome and very much appreciated!_

![image](images/demo.gif)

---

### Installation in 1 Simple Step - Including Configuration Wizard!

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

### Help / Commands List

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac help`  | List all available commands in mac script  | |

### General Commands

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac update`  | Install macOS software updates, update installed Ruby gems, Homebrew, npm and their installed packages | |
| `mac lock`  | Lock  | |
| `mac restart`  | Restart macOS  | |
| `mac sleep`  | Sleep mode  | |
| `mac shutdown`  | Shutdown  | |
| `mac time`  | Show clock at top right position in Terminal/iTerm | |
| `mac screensaver`  | Start screensaver  | |
| `mac folders:list`  | List folders in current directory with their current size | |
| `mac folder:size`  | Calculate current folder size  | |
| `mac bluetooth:status`  | Get the bluetooth status  | |
| `mac bluetooth:enable`  | Enable bluetooth  | |
| `mac bluetooth:disable`  | Disable bluetooth  | |
| `mac wifi:status`  | Get the wifi status  | |
| `mac wifi:scan`  | Scan available wifi networks  | |
| `mac wifi:enable`  | Enable wifi  | |
| `mac wifi:disable`  | Disable wifi  | |
| `mac dock:add-space N`  | Add blank space to dock  | N = number of spaces |
| `mac eject-all`  | Eject all mounted volumes and disks  | |
| `mac battery`  | Get battery status  | |
| `mac info`  | Get macOS version information  | |
| `mac hidden:show`  | Show hidden files  | |
| `mac hidden:hide`  | Hide hidden files  | |
| `mac find:text X`  | Find exact phrase recursively inside directory | X = Text string |
| `mac find:biggest-files`  | Find biggest files inside directory  | |
| `mac find:biggest-directories`  | Find biggest directories inside directory | |
| `mac zip:extract X` | Extract Zip file to current folder | X = Zip file to extract |
| `mac gzip:compress X` | Compress current file using Gzip | X = File to compress |
| `mac gzip:extract X` | Extract Gzip file to current folder | X = Gzip file to extract |
| `mac tar:compress X`  | Compress X file/directory using tar with progress indicator | X = File or directory |
| `mac tar:extract X` | Extract tar file to current folder | X = Tar file to extract |


### Search Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac find:recent N`  | Find files modified in the last N minutes  |  N = number of minutes  |
| `mac search:replace X` | Search and replace string in file | X = File to perform the search and replace operation |


### Network Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac speedtest`  | Internet connection speed test  |
| `mac ports`  | List of used ports  |
| `mac ip:local`  | Get local IP address  |
| `mac ip:public`  | Get public IP address  |


### DNS Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac dns:list`  | List DNS server(s)  |
| `mac dns:add`  | Add DNS server  |
| `mac dns:remove`  | Remove DNS server  |
| `mac dns:flush`  | Flush DNS cache  |


### SSH Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac ssh:download-file X`  | Download file from remote server through SSH  |  X = Path of the remote file to download  |
| `mac ssh:download-folder X`  | Download entire folder from remote server through SSH  |  X = Path of the remote folder to download  |
| `mac ssh:sync:local X`  | Sync local folder with remote folder using rsync through SSH (download remote folder to local folder)  |  X = Path of the remote folder to sync to local folder  |
| `mac ssh:sync:remote X`  | Sync remote folder with local folder using rsync through SSH (upload local folder to remote folder)  |  X = Path of the remote folder to sync from local folder  |
| `mac ssh:upload X`  | Upload file to remote server through SSH  |  X = Path of the file to upload to the remote server  |
| `mac ssh:public-key`  | Copy SSH Public Key  |  |
| `mac ssh:list`  | List all the saved SSH credentials  |  |


### Performance and maintenance Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac system`  | Show system information to review mac performance  |
| `mac temp`  | Show temperature, fan and battery statistics  |
| `mac memory`  | See memory usage sorted by memory consumption  |
| `mac trash:empty`  | Empty trash |
| `mac trash:size`  | Calculate trash size |


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
| `mac git:settings`  | Check Git settings  |
| `mac git:add-removed`  | Add removed files to staged files  |
| `mac git:size`  | Get size for current Git directory  |

### Homebrew Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac brew`  | Get a list of installed Homebrew packages  |
