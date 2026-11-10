# Only needed to preview the site locally (`bundle exec jekyll serve`).
# GitHub Pages builds the live site on its own.
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "webrick"   # required for `jekyll serve` on Ruby 3+

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
