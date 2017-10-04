<?php

return [
  '*' => [
    'uploads' => [
      'path' => getenv('CRAFT_BASE_PATH').'uploads',
      'url' => getenv('CRAFT_BASE_URL').'uploads',
    ],
  ],
];
