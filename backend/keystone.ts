/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config, list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';


// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// export default config({
//   server: {
//     cors: {
//         origin: [process.env.FRONTEND_URL]
//     }
//   }
// })

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

import { createAuth } from '@keystone-6/auth';



export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    server: {
      cors: { origin: ['http://localhost:7777'], credentials: true },
      port: 3000,
      maxFileSize: 50 * 1024 * 1024,
      healthCheck: true,
      extendExpressApp: (app, createContext) => { },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },

    },
    lists,

    session,
  })
);


