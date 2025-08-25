# Vastus / mkdocs

This directory is for mkdocs specific scripts, configuration, and metadata.
Store common site metadata and configuration files here.

## Setting up a new book

1. Make sure mkdocs is installed.
1. Create a subdirectory in books
1. Use `mkdocs _bookname_` to create a basic mkdocs template
1. create the _bookname_/docs/css folder
1. Copy in the vastus css files and woff fonts from the mkdocs folder to your docs/css folder
1. In a separate terminal, cd to the mkdocs directory (the one with the mkdocs.yml file) and 
   start the mkdocs page server. Use the command `mkdocs serve` and then point your browser at the suggested URL.
1. Edit your _bookname_/mkdocs.yml file, adding what's appropriate from the `mkdocs-template.yml`.
1. You should see page in your browser change every time you change any file in your `docs` folder changes.
1. When you are done editing, make sure to check in your changes:
    1. If you have been added as a member to the *vastus* repository:
        1. _git add_ the _bookname_ folder
        1. _git add_ any files you added that do no show up in `git status -suno`
        1. `git commit`
        1. `git pull --rebase`
        1. `git push`
    1. If not, please create a pull request

## Notes on _Material for MkDocs_

The addon emoji package for _Material for MkDocs_ package seems wonderful, but it absolutely
requires most users to **create a virtual environment** for running their `mkdocs serve` and
`mkdocs build` commands. Right now, that seems like too much effort to get started.

----
