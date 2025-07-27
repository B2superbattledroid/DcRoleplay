#!/bin/bash

# Update dependencies and generate package-lock.json
echo "Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

echo "Package-lock.json has been generated/updated."
echo "Please commit the changes:"
echo "git add package-lock.json"
echo "git commit -m 'Update package-lock.json with serve dependency'"
echo "git push" 