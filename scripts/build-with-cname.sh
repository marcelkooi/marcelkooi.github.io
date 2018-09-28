#!/bin/bash
set -ev

gatsby build
echo "marcelkooi.com" > public/CNAME
