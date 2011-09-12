<?php

class ClientsideDrafts {
  /**
   * AjaxAddScript hook
   * Add AJAX support script
   */
  public static function addJS($out) {
    global $wgScriptPath, $wgJsMimeType, $wgClientsideDraftsVersion;
    // FIXME: assumes standard dir structure
    // Add JavaScript to support AJAX draft saving
    $out->addScript(Xml::element(
      'script', array(
        'type' => $wgJsMimeType,
        'src' => $wgScriptPath. '/extensions/ClientsideDrafts/ClientsideDrafts.js?'. $wgClientsideDraftsVersion
      ), '', false
    ));
    // Continue
    return true;
  }

  /**
   * BeforePageDisplay hook
   * Add CSS style sheet
   */
  public static function addCSS($out) {
    global $wgScriptPath, $wgClientsideDraftsVersion;
    // FIXME: assumes standard dir structure
    // Add CSS for various styles
    $out->addLink(array(
      'rel'  => 'stylesheet',
      'type' => 'text/css',
      'href' => $wgScriptPath. '/extensions/ClientsideDrafts/ClientsideDrafts.css?'. $wgClientsideDraftsVersion
    ));
    // Continue
    return true;
  }

  public static function loadForm( $editpage ) {
    global $wgUser, $wgRequest, $wgOut, $wgTitle, $wgLang;
    // Internationalization
    wfLoadExtensionMessages('ClientsideDrafts');
    $wgOut->addHTML(Xml::openElement(
        'div', array('id' => 'drafts-pane')
    ));
    $wgOut->addHTML(Xml::closeElement('div'));
    // Continue
    return true;
  }
}
