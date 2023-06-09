# CMS Scaffolding
---------------------------

## Globals
-------------
- [x] Menu
  - [ ] menu items
    - [ ] label
    - [ ] destination *(i.e. page, external link)*
    - [ ] min/max attributes
- [ ] Footer
  - [ ] disclaimer
    - [ ] heading *(Rich Text)*
    - [ ] body *(Rich Text)*
  - [ ] footer items
    - [ ] label
    - [ ] destination *(i.e. page, external link)*
- [ ] Site Logo
- [ ] Site Color Palette

## Collections
-------------
- [ ] Pages
  - [ ] Home
  - [ ] Issues
  - [ ] About
  - [ ] Endorsements


Figure out what's going on with the Media and preferred sizes, etc.

# Adding Custom Blocks
---------------------------
- Create the block itself, including:
  - Block config
  - Component to be rendered
  - Stylesheet
  - Bring block into collection (i.e. Page collection)
  - Add block to RenderBlocks index component

# Adding New Globals
---------------------------
## File Path:
```
_app.tsx > [...slug].tsx > Template > Footer
```


# Rich Text Editor Customization
---------------------------
- Button is in regards to the button in the toolbar of the editor
- Component is what gets rendered on the frontend
- Leaf is what gets rendered in the RTE's space

# ToDo List
- [x] Update H1 to be smaller on mobile
- [ ] Make sure width on homepage is correct
- [ ] Add custom bullet points
- [ ] Set up broswer API for elements that are currently within the viewport
- [ ] Deal with image sizing with props, etc.
- [x] Figure out why the spacer block isn't working/saving correctly
- [ ] Figure out why the legal globals are showing up in ...slug props