#!/usr/bin/env bash

echo 'ci@1.0.1'

pushd "/root/ci"
git pull
/usr/bin/env node index.js
popd

exit
