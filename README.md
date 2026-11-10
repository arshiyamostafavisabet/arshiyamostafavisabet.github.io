# arshiyamostafavisabet.github.io

Personal portfolio site, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
GitHub builds the site automatically on every push to `main`. There's no build step to run.

## Where things live

| What | Where |
|---|---|
| Name, tagline, about, contact links | `_data/profile.yml` |
| Work experience | `_data/experience.yml` |
| Design teams / clubs | `_data/extracurriculars.yml` |
| Education + courses | `_data/education.yml` |
| Skills | `_data/skills.yml` |
| Nav bar links | `_data/navigation.yml` |
| **Projects (one file each)** | `_projects/*.md` |
| Project template | `_templates/project-template.md` |
| Styles (design tokens at the top) | `assets/css/main.css` |
| Scripts (mobile nav, project filters) | `assets/js/main.js` |
| Page layouts / reusable components | `_layouts/`, `_includes/` |

## Adding a project

1. Copy `_templates/project-template.md` to `_projects/<slug>.md`. The slug becomes the URL `/projects/<slug>/`.
2. Create `assets/images/projects/<slug>/` and drop images in it (`thumbnail.jpg`, `cover.jpg`, etc.).
3. Fill in the front matter and write the body in Markdown.
   - `featured: true` also shows it on the home page.
   - `areas: [...]` sets the filter categories on `/projects/`. New categories show up automatically.
   - Projects are sorted by `date` (start date), newest first.

**Removing:** delete the file. **Hiding temporarily:** add `published: false` to its front matter.

## Dropping in files

| Folder | Put here |
|---|---|
| `assets/images/profile/` | Headshot, then set `photo:` in `_data/profile.yml` |
| `assets/images/projects/<slug>/` | Project thumbnails, covers, gallery images |
| `assets/images/logos/` | Company / school logos, then set `logo:` in the `_data/*.yml` files |
| `assets/images/og/` | Social share image (1200×630), then set `image:` in `_config.yml` |
| `assets/files/resume.pdf` | Public resume shown on `/resume/` |
| `assets/files/projects/<slug>/` | Reports, schematics (PDF), datasheets per project |

## Previewing locally (optional)

With Ruby installed:

```sh
bundle install
bundle exec jekyll serve
```

Or with Docker:

```sh
docker run --rm -it -p 4000:4000 -v "$PWD:/srv/jekyll" jekyll/jekyll:pages jekyll serve --host 0.0.0.0
```

Then open http://localhost:4000.
