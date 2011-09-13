# Clientside Drafts

This MediaWiki extension automatically saves and restores article drafts
using local computer HTML5 storage.

## Requirements

* MediaWiki 1.17 or above.
* Modern browser that supports HTML5 Storage API and JSON API:
  * Internet Explorer 8 or above.
  * Firefox 3.5 or above.
  * Safari 4 or above.
  * Chrome 4 or above.
  * Opera 10.5 or above.
  * iPhone 2 or above.
  * Android 2 or above.

This extension is not compatible with WYSIWYG editors.

## Installation

Copy files of extension into <tt>extensions/ClientsideDrafts</tt> directory.

Add to <tt>LocalSettings.php</tt> before trailing <tt>?&gt;</tt> this code:

```perl
require_once( "$IP/extensions/ClientsideDrafts/ClientsideDrafts.php" );
```

That's all.

## License

Licensed under MIT License.

## Links

* [Home page](http://www.mediawiki.org/wiki/Extension:ClientsideDrafts)
* [GitHub Repository](https://github.com/Undev/MediaWiki-ClientsideDrafts)

