#!/usr/bin/env bash

echo 'ci@1.0.3'

pushd "/root/ci" 1>/dev/null

echo "DEBUG: pulling git..."
git pull

echo "DEBUG: running node index.js"
/usr/bin/env node index.js $@

popd 1>/dev/null

exit
