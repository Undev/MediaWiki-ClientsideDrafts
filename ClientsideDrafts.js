(function(window, $, undefined) {
  var document = window.document, storage = window.localStorage,
    JSON = window.JSON, keyPrefix = 'ClientsideDrafts::drafts',
    mediaWiki = window.mediaWiki, textareaSelector = '#wpTextbox1',
    showMessage = function(msg) {
      if (window.jsMsg) {
        window.jsMsg(msg, 'warning');
      }
    },
    AUTOSAVE_INTERVAL = 2 * 60;

  if (mediaWiki === undefined || mediaWiki.config.values.wgAction !== 'edit') {
    return; // Not editing
  }
  if ($ === undefined || storage === undefined || JSON === undefined) {
    showMessage(mediaWiki.message('clientsidedrafts:required'));
    return; // No jQuery, HTML5 storage or JSON support, exiting.
  }

  // State saved as pair { original, draft }

  (function(title, userName) {
    var key = [keyPrefix, userName, title].join('-'), loadKey = function(key) {
      var s = storage.getItem(key);
      if (s !== null) {
        s = JSON.parse(s);
      }
      return s;
    }, saveKey = function(key, data) {
      if (data !== null) {
        data = JSON.stringify(data);
      }
      storage.setItem(key, data);
    }, $textarea = $(textareaSelector), loadDraft, saveDraft, original;

    original = $textarea.val();

    loadDraft = function() {
      var state = loadKey(key);
      if ($.isPlainObject(state) && state.draft) {
        // check draftee
        if (state.original === original) {
          // can apply our draft immediately, original is not changed
          $textarea.val(state.draft);
          showMessage('Yep');
        } else {
          // original changed. we need thinking hard
          showMessage('We are in trouble');
        }
      }
    };

    saveDraft = function() {
      var draft = $textarea.val(), state;
      state = { original: original, draft: draft };
      saveKey(key, state);
      showMessage('draft autosaved at ' + new Date());
    };

    setInterval(saveDraft, AUTOSAVE_INTERVAL);
    loadDraft();

  })(mediaWiki.config.values.wgTitle, mediaWiki.config.values.wgUserName);

})(window, jQuery);

