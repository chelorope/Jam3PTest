#!/bin/sh
cd "$(dirname "$0")"
npm run release
wait
git commit -am "updating release"
git subtree push --prefix release origin gh-pages
read -p "Press [Enter] key to start backup..."
