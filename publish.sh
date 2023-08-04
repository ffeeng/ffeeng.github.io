#!/bin/bash

# 在根目录bash窗口下运行  bash publish.sh

# npm run build
cd dist
git init
git add ./
git commit -m 'add feat'
git remote add origin https://github.com/ffeeng/ffeeng.github.io.git
git push --set-upstream origin master

echo -e "\n push success"
