This is my personal website containing my portfolio, blog, and a few other miscellaneous things. There is probably no reason for anyone to read this unless they are interested in how it was made. In that case (and for personal reference) there are details below on how it was set up.

## Development Environment
The initial repository is setup according to the GitHub guide which can be found linked in the references below. The complexity really comes from the use of Jekyll.

Ruby was installed according to their documentation -- for Ubuntu/Debian in this case. A gem install directory was created and added to my path in /.bashrc according to Jekylls documentation. Jekyll was then initialized in my web repo and the Gemfile was edited appropriately for GitHub pages as it explains.

`bundle update` should be run often to update any gem dependencies (I think), and `bundle exec jekyll serve` can be used to test everything locally.

There were a few differences between the Jekyll and GitHub guides specifically regarding initializing the repository with Jekyll. In the end it seemed like following the Jekyll instructions worked best noting that the `github-pages` gem is installed when bundle update is run.

### References
* [Github Guide](https://help.github.com/en/github/working-with-github-pages)

* [Jekyll Quickstart](https://jekyllrb.com/docs/)

* [Jekyll GitHub Pages](https://jekyllrb.com/docs/github-pages/)

* [Beginner Guide Blog Post](http://jmcglone.com/guides/github-pages/)
