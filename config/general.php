<?php

return [
  '*' => [
    'defaultWeekStartDay' => 1,
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => true,
    'preserveImageColorProfiles' => true,
    'defaultSearchTermOptions' => [
      // Enables fuzzy search
      'subLeft' => true,
      'subRight' => true,
    ],
    'imageDriver' => 'imagick',
    'generateTransformsBeforePageLoad' => true,
  ],

  'dev' => [
    'devMode' => true,
  ],

  'frb' => [
    'cooldownDuration' => 0,
  ],
];
