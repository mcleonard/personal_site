import json
import os
from datetime import datetime

meta_files = [file for file in os.listdir('.') if file.endswith('.meta')]

metadata = []
for file in meta_files:
    with open(file, 'r') as f:
        metadata.append(json.load(f))

def meta_date(meta):
    return datetime.strptime(meta["publish_date"], "%Y-%m-%d")

slugs = {data["slug"]: data["notebook"] for data in metadata}
posts = [file for file, _ in sorted(zip(meta_files, metadata), 
                                    key=lambda each: meta_date(each[1]),
                                    reverse=True)]

out = {"slugs": slugs,
       "posts": posts}

with open('metadata.json', 'w') as f:
    json.dump(out, f)