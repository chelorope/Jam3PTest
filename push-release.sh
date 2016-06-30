#!/bin/sh
npm run release
git commit -am "updating release"
git subtree push --prefix release origin gh-pages
pause
