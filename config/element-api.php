<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;

return [
  'endpoints' => [
    'api/v1/blog/<entryId:\d+>.json' => function($entryId) {
      return [
        'elementType' => Entry::class,
        'criteria' => ['id' => $entryId],
        'one' => true,
        'transformer' => function(Entry $entry) {
          return [
            'title' => $entry->title,
            'uri' => $entry->uri,
          ];
        },
        'pretty' => true,
      ];
    },
  ]
];
