#!/bin/bash
echo "BEGIN BETTY BOYS BUILD"
TODAY=$(date)
if [ -d ./_site ] 
    then
       rm -rf ./_site
fi
git add .
git commit -m "website updated on $TODAY"
git push
jekyll build
cd _site
git init
git add .
git commit -m "commit on $TODAY"
git remote add origin https://github.com/bettyboys/bettyboys.github.io.git
git push origin +master
echo "BUILD DONE"
