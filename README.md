# mac
The ultimate tool to manage your Mac. It provides a huge set of command line commands that automatize the usage of your OS X system.

# Configuration
Update the shell script to match your local environment configuration. Global variables are defined at the beginning of the file.

# Requirements
These are the requirements to be able to run all the commands:

* Git
* Pipe Viewer (pv)

### General Commands

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac update`  | Install OS X software updates, update installed Ruby gems, Homebrew, npm and their installed packages  | |
| `mac restart`  | Restart OS X  | |
| `mac sleep`  | Sleep mode  | |
| `mac shutdown`  | Shutdown  | |
| `mac screensaver`  | Start screensaver  | |
| `mac folders`  | List folders in current directory  | |
| `mac folder:size`  | Calculate current folder size  | |
| `mac folders:remove-empty`  | Remove empty subdirectories  | |
| `mac apps:close-all`  | Close all opened apps  | |
| `mac apps:appstore`  | Get list of installed apps from App Store  | |
| `mac eject-all`  | Eject all mounted volumes and disks  | |
| `mac battery:info`  | Get battery information  | |
| `mac info`  | Get OS X version information  | |
| `mac tar:compress X`  | Compress X file/directory using tar with progress indicator  | X = File or directory |
| `mac search:text X`  | Find exact phrase recursively inside directory  | X = Text string |


### Search Utilities

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac find:recent N`  | Find files modified in the last N minutes  |  N = number of minutes  |


### Network Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac speedtest`  | Internet connection speed test  |
| `mac speedtest:infinite`  | Run internet speed test each 5 minutes  |
| `mac ports`  | List of used ports  |
| `mac ip`  | Get local IP address  |


### LAMP (Linux, Apache, MySQL, PHP)

| Command  | Description | Arguments |
| ------------- | ------------- | ------------- |
| `mac mysql`  | Open MySQL app (Rename SequelPRO.app to MySQL.app)  |  |
| `mac mysql-cli`  | Start MAMP MySQL CLI  |  |
| `mac mysql:export X`  | Export MySQL database to current directory  |  X = database name  |
| `mac php:syntax`  | Check PHP Syntax for all PHP files in current location  |  |
| `mac hosts`  | Edit hosts file  |  |
| `mac ssh-key:copy`  | Copy SSH Public Key  |  |


### Performance and maintenance utilities

| Command  | Description |
| ------------- | ------------- |
| `mac memory`  | See memory usage sorted by memory consumption  |
| `mac trash:empty`  | Empty trash |
| `mac trash:size`  | Calculate trash size |


### iTerm / Terminal utilities

| Command  | Description |
| ------------- | ------------- |
| `mac iterm:tab-title`  | Set title to current iTerm tab  |


### GIT utilities

| Command  | Description |
| ------------- | ------------- |
| `mac git:fresh`  | Get last update date for all branches in current project  |
| `mac git:undo-commit`  | Undo latest commit  |
| `mac git:log`  | See latest commits IDs and titles for current branch  |
| `mac git:branch`  | See all branches  |
| `mac git:remove`  | Remove GIT from current project  |
| `mac git:settings`  | Check GIT settings  |
| `mac git:open`  | Open current GIT repository URL  |


### Homebrew utilities

| Command  | Description |
| ------------- | ------------- |
| `mac brew:list`  | Get list of installed Homebrew packages  |


### XCode utilities

| Command  | Description |
| ------------- | ------------- |
| `mac xcode:cleanup`  | Cleanup XCode files to free up hard disk space  |


### Executable Apps

| Command  | Description |
| ------------- | ------------- |
| `mac firefox`  | Open Firefox  |
| `mac chrome`  | Open Chrome  |
| `mac safari`  | Open Safari  |
| `mac phpstorm`  | Open PHPStorm  |
| `mac mamp`  | Open MAMP  |
| `mac filezilla`  | Open Filezilla  |
| `mac gotomeeting`  | Open GoToMeeting  |
| `mac xcode`  | Open Xcode  |
| `mac snippetslab`  | Open SnippetsLab  |
| `mac preview`  | Open Preview  |
| `mac photoshop`  | Open Photoshop  |
| `mac skype`  | Open Skype  |
| `mac textedit`  | Open TextEdit  |
| `mac sourcetree`  | Open SourceTree  |
| `mac stree`  | Open current directory in SourceTree  |
| `mac quiver`  | Open Quiver  |
| `mac virtualbox`  | Open VirtualBox  |
| `mac pixelmator`  | Open Pixelmator  |
| `mac vlc`  | Open VLC  |
| `mac kaleidoscope`  | Open Kaleidoscope  |
| `mac mindnode`  | Open MindNode  |
| `mac paw`  | Open Paw  |
| `mac appstore`  | Open App Store  |
| `mac goodtask`  | Open GoodTask  |
| `mac notes`  | Open Notes  |