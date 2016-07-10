#!/bin/sh

GREEN='\033[0;32m'
NC='\033[0m' # No Color

main() {

    echo "Upgrading Mac CLI..."
	rm /usr/local/bin/mac
	rm -rf /usr/local/bin/mac-cli
	if [ -d ~/Downloads/mac-cli-upgrade/ ]; then
	    rm -rf ~/Downloads/mac-cli-upgrade/
	fi
	mkdir ~/Downloads/mac-cli-upgrade/ && cd ~/Downloads/mac-cli-upgrade/
	sh -c "$(curl -fsSL https://raw.githubusercontent.com/guarinogabriel/mac-cli/master/mac-cli/tools/install)" && cd -
	echo "${GREEN}Mac CLI has been upgraded to the latest version\n${NC}"

}

main