### manifest.json

- containes the comfiguration for the extension
  like version, name, permission etc...

  ```
  {
  "manifest_version": 3,
  "name": "Demo Extension",
  "version": "1.0.0",
  "author": "Raju",
  "description": "A basic demo Chrome Extension",

  "action": {
    "default_popup": "popup.html",
    "default_icon": "logo.png",
    "default_title": "Demo Extension"
  },

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["contentScript.js"]
    }
  ],

  "icons": {
    "16": "logo16.png",
    "48": "logo48.png",
    "128": "logo128.png"
  },

  "background": {
    "service_worker": "background.js"
  },

  "permissions": ["tabs", "activeTab"],

  "host_permissions": ["https://*/*", "http://*/*"]
  }
  ```

### background.js

- it's a javascript file, it will listion the all events, like open a new tab, new window etc...

- it uses the chrome api's

### contentscript.js

-it will run the current tab functionalities, it can use the chrome apis and it can controle the DOM elements

### popup.html

- when we click the any extension it will show one pop up to display the content

### popup.css

- do styling the html

### popup.js

- write functionalities for the html

```

```
