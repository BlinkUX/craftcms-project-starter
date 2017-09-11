<?php

return [
  '*' => array(
    'defaultWeekStartDay' => 1,
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => true,
    'preserveImageColorProfiles' => true,
    'defaultSearchTermOptions' => array(
      // Enables fuzzy search
      'subLeft' => true,
      'subRight' => true,
    ),
    'imageDriver' => 'imagick',
    'generateTransformsBeforePageLoad' => true,
  ),

  'dev' => array(
    'devMode' => true,
  ),

  'frb' => array(
    'cooldownDuration' => 0,
  ),
];
