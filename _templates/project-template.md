---
# ============================================================================
# PROJECT TEMPLATE
# 1. Copy this file into /_projects/ and rename it, e.g. _projects/my-robot.md
#    (the file name becomes the URL: /projects/my-robot/)
# 2. Create an image folder: /assets/images/projects/my-robot/
# 3. Fill in the fields below. Only `title`, `summary` and `date` are required;
#    leave anything else empty or delete it.
# To HIDE a project without deleting it, add:  published: false
# ============================================================================

title: Project Name
summary: One or two sentences shown on the project card.
date: 2026-01-01          # start date (YYYY-MM-DD). Projects are sorted newest first.
end_date:                 # leave empty for ongoing ("Present")
status:                   # optional badge, e.g. "In progress", "Award winner"
featured: false           # true = also shown on the home page
context:                  # e.g. "Personal project", "ECE243 course project", "Hackathon"
role:                     # e.g. "Hardware lead"
team:                     # e.g. "3"
areas: [Hardware]         # filter categories on /projects/, e.g. Hardware, Embedded, Software, Digital Design
skills: [KiCad, C]        # tech stack chips

thumbnail:                # /assets/images/projects/my-robot/thumbnail.jpg (card image, ~16:10)
cover:                    # /assets/images/projects/my-robot/cover.jpg (top of project page)

links:                    # buttons on the project page (empty url = hidden)
  - label: GitHub
    url:
  - label: Report (PDF)
    url:                  # e.g. /assets/files/projects/my-robot/report.pdf
  - label: Demo video
    url:

metrics:                  # optional headline numbers
  - value: "58%"
    label: cost reduction

gallery:                  # optional images below the write-up
  - src: /assets/images/projects/my-robot/photo-1.jpg
    caption: Assembled prototype
---

## Overview

What is it, and what problem does it solve?

## Design

System block diagram, key component choices and why.

## Implementation

Hardware, firmware, software. Embed images inline with:

![Schematic](/assets/images/projects/my-robot/schematic.png)

## Testing & Results

Measurements, scope captures, before/after numbers.

## Lessons Learned

What would you do differently in rev 2?
