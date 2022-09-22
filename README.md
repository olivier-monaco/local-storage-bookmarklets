# LocalStorage Bookmarklets

## Bookmarklets

Each .js file contains one bookmarklet.

### Export LocalStorage

File: export-localStorage.js

Generate a JSON object containing all items of localStorage and show a prompt allowing user to copy the JSON. The user can them save this data in a file, an email...

### Import LocalStorage

File: import-localStorage.js

Show a prompt to the user allowing him to paste JSON data previously saved using the export-localStorage.js bookmarklet. The date must be a JSON object. Each property will be added to the localStorage, overwritting any existing item with the same name. Other existing items in localStorage are kept.

## Installation

Open the desired bookmarklet file and copy the JavaScript code. In your browser create a new bookmark and paste the JavaScript code as the URL.

Now, you just have to use this bookmarklet on the page you want to export/import the localStorage.

