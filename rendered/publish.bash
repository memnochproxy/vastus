#!/bin/bash

# push subdirectories of this directory to web.bitratchet.com
dest_user=$USER

# dest host should be the ssh/config alias with keys preconfigured
ssh_dest_host="web"
dest_dir="/var/www/html/vastus"
dirlist=( $(find -mindepth 1 -maxdepth 1 -type d ))
printf "...found dir %s\n" "${dirlist[@]}"

for book in "${dirlist[@]}"; do
    book_dir=${book#./}
    cmd="rsync -avP $book ${dest_user}@${ssh_dest_host}:${dest_dir}/"
    echo "... $cmd"
    $cmd
done
