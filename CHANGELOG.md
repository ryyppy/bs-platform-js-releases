## v8.3.0-dev.2

- Remove `version_git_commit` value again (doesn't feel useful)
- Preserve comments on RE <-> RES convertions
- Make sure RE -> RES convertion removes unnecessary Reason decorators

## v8.2.0-dev.5

- Fix an issue where Reason runs into an infinite loop on a missing \n when the last line is a comment
- Add version_git_commit value

## v8.2.0-dev.4

- Updated to BuckleScript commit [2c44b7](https://github.com/BuckleScript/bucklescript/commit/2c44b732f4a5ff573a123cf8796bab77edeaed76)

## v8.2.0-dev.3

- Fixes an issue where each compile erased the whole cmi cache, causing dependencies such as Reason-React to reload every time

## v8.2.0-dev.1

- Fixes an issue where warnings disappear after compiling the same code twice

## v8.2.0-dev.0

- First release of the bundle api version 1.0
