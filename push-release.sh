#!/bin/sh
cd "$(dirname "$0")"
npm run release
wait
git commit -am "updating release"
git subtree push --prefix release origin gh-pages
user@host:~$ read -n1 -r -p "Press any key to continue..." key
[...]
user@host:~$
