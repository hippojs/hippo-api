#!/bin/sh
# Lints changes using ESLint.
echo "[hippojs]--------------------------------------------------------------------------------"
echo "[hippojs] Starting ES Lint"

# Get a list of staged changes to javascript files.
LIST=`git diff --cached --name-only --diff-filter=ACM | grep -e "\.js$"`

if [ -n "$LIST" ]
then
echo "[hippojs] Files we're checking with eslint: "$LIST

# Lint the changed files
node_modules/eslint/bin/eslint.js $LIST
# Exit with the linter's exit code.
exit $?

else
echo "[hippojs] No Javascript changes detected, not linting!"
echo "[hippojs] ES Lint complete"
echo "[hippojs]--------------------------------------------------------------------------------"
exit 0
fi