# mac-clit

macOS command line tools

---

**Version 1.0.0 – November 24, 2025**  
Forked and cleaned up from Gabriel Guarino's original `mac-cli`.

### ~ What's new in 2025? ~

I forked this and tried to unbork it, this is my first ever project so go easy on me.

---

### Introduction

mac-clit is a terminal-first toolkit for macOS. Automate updates, tweak settings, and run your Mac entirely from the command line.

When you run a function, the executed command is displayed and that helps you memorize each of the Utilities for future usage.

The tool is designed to be easily extendable with additional commands through the use of plugins. To view the currently available commands, you can navigate to the plugins folder and explore the different categories: [/mac-clit/plugins](https://github.com/gospelranger/mac-clit/tree/main/mac-clit/plugins)

_Contributions to add new plugins and keep improving the existing ones are welcome and very much appreciated!_

![image](images/demo.gif)

---

### Installation in 1 Simple Step - Including Configuration Wizard!

Via curl
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/gospelranger/mac-clit/main/mac-clit/tools/install)"`

Via wget
> `sh -c "$(wget https://raw.githubusercontent.com/gospelranger/mac-clit/main/mac-clit/tools/install -O -)"`

Then, re-open your terminal client. You will be able to run all the commands listed below, for example:
> `mac help`

---

### Configuration

The configuration is done when you install mac-clit for the first time though the installer configuration wizard.
After that, you can update your mac-clit configuration by editing the following file: `/usr/local/bin/mac`

---

### Requirements

These are the requirements to be able to run all the commands (the dependencies/requirements are installed when you install mac-clit for the first time):

* Homebrew
* Git
* Pipe Viewer (pv)

---

### Update

You can update mac-clit to the latest version by running:
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/gospelranger/mac-clit/main/mac-clit/tools/update)"`

---

### Uninstallation

You can uninstall mac-clit by running:
> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/gospelranger/mac-clit/main/mac-clit/tools/uninstall)"`

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
| `mac screensaver`  | Start screensaver  | |
| `mac bluetooth:status`  | Get the bluetooth status  | |
| `mac bluetooth:enable`  | Enable bluetooth  | |
| `mac bluetooth:disable`  | Disable bluetooth  | |
| `mac dock:add-space N`  | Add blank space to dock  | N = number of spaces |
| `mac eject-all`  | Eject all mounted volumes and disks  | |
| `mac battery`  | Get battery status  | |
| `mac info`  | Get macOS version information  | |
| `mac hidden:show`  | Show hidden files  | |
| `mac hidden:hide`  | Hide hidden files  | |

### Network Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac speedtest`  | Internet connection speed test  |
| `mac ports`  | List of used ports  |
| `mac ip:local`  | Get local IP address  |
| `mac ip:public`  | Get public IP address  |
| `mac dns:list`  | List DNS server(s)  |
| `mac dns:add`  | Add DNS server  |
| `mac dns:remove`  | Remove DNS server  |
| `mac dns:flush`  | Flush DNS cache  |
| `mac wifi:status`  | Get the wifi status  | |
| `mac wifi:scan`  | Scan available wifi networks  | |
| `mac wifi:enable`  | Enable wifi  | |
| `mac wifi:disable`  | Disable wifi  | |

### Performance and maintenance Utilities

| Command  | Description |
| ------------- | ------------- |
| `mac memory`  | See memory usage sorted by memory consumption  |
| `mac trash:empty`  | Empty trash |
| `mac trash:size`  | Calculate trash size |

