<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

// return array(

// 	'*' => array(
// 	),



// 	 'localhost' => array(

//     'server' => 'localhost',
// 	  'database' => 'mamnoon_street',
// 	  'user' => 'root',
// 	  'password' => 'root',
// 	  'tablePrefix' => 'craft',
//       ),

// );


return array(

        '*' => array(
        ),
        'testsite.mamnoon.webfactional.com' => array(

       // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
        'server' => 'localhost',
        // The name of the database to select.
        'database' => 'mamnoon_street_2017_install',
        // The database username to connect with.
        'user' => 'mbar_webmaster',
        // The database password to connect with.
        'password' => 'Seattle98109Mbar',
        // The prefix to use when naming tables. This can be no more than 5 characters.
        'tablePrefix' => 'craft'
        ),
        'mamnoonstreet.com' => array(

       // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
        'server' => 'localhost',
        // The name of the database to select.
        'database' => 'mamnoon_street_2017_install',
        // The database username to connect with.
        'user' => 'mbar_webmaster',
        // The database password to connect with.
        'password' => 'Seattle98109Mbar',
        // The prefix to use when naming tables. This can be no more than 5 characters.
        'tablePrefix' => 'craft'
      ),
       'localhost' => array(
          'server' => 'localhost',
          'database' => 'mamnoon_street',
          'user' => 'root',
          'password' => 'root',
          'tablePrefix' => 'craft',
      ),

);
