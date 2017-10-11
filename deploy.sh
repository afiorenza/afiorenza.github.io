rm -rf static
npm run build
git add .
git commit -m "deploy"
git push origin master
