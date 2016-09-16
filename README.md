# Accusoft PrizmDoc Viewer Example for Node JS

This is a full, end-to-end example for integrating Accusoft's PrizmCloud Hosted HTML5 Viewer into your own, private application. This sample provides users the ability to view, annotate, redact, search, and sign dozens of document types directly in the browser, including Microsoft Word, Microsoft PowerPoint, Microsoft Excel, PDF, CAD, DICOM medical images, JPG, PNG, TIFF, GIF, and more. Six example documents are provided.

## How It Works

This example will present the user with a variety of documents. When the user navigates to a document, this code creates a Viewing Session for the document via PrizmDoc Hosted API. The code then acts as a proxy between PrizmDoc Hosted and the end user's, serving the document's Viewing Session assets to the HTML5 viewer. This hides all interaction with PrizmDoc from the client.

## Usage

Requires Node v4+ and Gulp. Install Gulp via `npm install gulp -g`.

1. Edit `/config.json` and insert your PrizmDoc Hosted (ACS) API Key, as well as the API base URL. The latter depends on your region; use `api.accusoft.com` for North America and `api.accusoft.com.br` for Brazil.
2. Run `npm install`
3. Run `node index.js`
