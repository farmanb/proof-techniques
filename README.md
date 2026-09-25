# Skeleton Proofs

Skeleton proofs for the standard proof techniques used in an introduction to
proofs course, with worked examples. This is a [PreTeXt](https://pretextbook.org)
article by Blake Farman (Louisiana Tech University).

The article is adapted, with modifications, from Dana C. Ernst's
[*An Introduction to Proof via Inquiry-Based Learning*](https://github.com/dcernst/IBL-IntroToProof)
(Skeleton Proofs 2.48, 2.49, 2.53, 2.54, 2.81–2.85, 4.3, 4.10, 4.26). The wording and section
structure have been modified from the original.

## Building

The main source file is `source/main.ptx`; it includes any other sections of
the article.

- Compile as an accessible website: `pretext build web`
- Preview the built website: `pretext view web`
- Compile a PDF: `pretext build print`
- Deploy the built output to GitHub Pages: `pretext deploy`

See the [PreTeXt documentation](https://pretextbook.org/documentation.html)
for more on authoring and building PreTeXt projects.

### Using GitHub Codespaces

You can author this project entirely in the browser using [GitHub
Codespaces](https://github.com/PreTeXtBook/pretext-codespace). If you are
working in a codespace, remember that your edits live on a remote virtual
machine until you commit and push (sync) them to GitHub.

If the LaTeX build reports a missing package (e.g. it cannot find
`mypackage.sty`), you can install it directly:

```bash
tlmgr install mypackage
tlmgr path add
```

or search for the package name first:

```bash
tlmgr search --global --all "mypackage.sty"
```

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0
International License](https://creativecommons.org/licenses/by-sa/4.0/),
matching the license of the source material it adapts (Dana C. Ernst's
*An Introduction to Proof via Inquiry-Based Learning*). See
[`LICENSE`](LICENSE) for the full text.

You are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

for any purpose, even commercially, under the following terms:

- **Attribution** — You must give appropriate credit to Blake Farman and to
  Dana C. Ernst (for the underlying material), provide a link to the
  license, and indicate if changes were made.
- **ShareAlike** — If you remix, transform, or build upon the material, you
  must distribute your contributions under the same license as the
  original.
