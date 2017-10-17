<?php

return [
  '*' => [
    'primaryDomain'   => '*',
  ],

  'dev' => [
    'primaryDomain' => 'craftcms-project-scaffolding.localhost',
    'sslRoutingEnabled' => false,
  ],

  'production' => [
    'primaryDomain' => 'craftcms-project-scaffolding.com',
    'sslRoutingEnabled' => true,
  ],
];
