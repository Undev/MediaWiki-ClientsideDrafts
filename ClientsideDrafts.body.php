<?php

class ClientsideDrafts {
  public static function loadForm( $editpage ) {
    global $wgOut;
    // Internationalization
    if (function_exists('wfLoadExtensionMessages')) {
      wfLoadExtensionMessages('ClientsideDrafts');
    }
    $wgOut->addModules('ext.ClientsideDrafts');

    // Continue
    return true;
  }
}
