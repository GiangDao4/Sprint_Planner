#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name hook"
  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode=$?
  debug "finished $hook_name hook"
  exit $exitCode
fi
