#!/bin/sh
cd "$(dirname "$0")"
wait npm run release
git commit -am "updating release"
git subtree push --prefix release origin gh-pages
user@host:~$ read -n1 -r -p "Press any key to continue..." key
[...]
user@host:~$
