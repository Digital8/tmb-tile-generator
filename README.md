# TMB Tile Generator

This generator is inteded to be deployed to and utilised via the [Make.cm](https://make.cm) "media generation API".

It is based on the [Make Hello World Starter Template (React)](https://github.com/makecm/hello-world-react-template)

# Usage

A [reference deployment](https://app.make.cm/templates/ba4c9684-a7af-4ca3-b929-291d6c196be3) is available at https://app.make.cm/templates/ba4c9684-a7af-4ca3-b929-291d6c196be3 . If you don't have access, request it from a current member such as dancer@digital8.com.au

## Parameters

This generator supports the following [parameters](https://docs.make.cm/api-reference/make-api#parameters):

- `text`: string (word[s] to appear on tile)
- `font`: string (absolute, public URL to .woff2/.woff/.ttf/.otf) (preferably .woff2)
- `background`: string ([hex-formatted](https://drafts.csswg.org/css-color/#typedef-hex-color) background color) (e.g. #C0FFEE)
- `colors`: string[] (foreground colors of word[s] to appear on tile) (e.g. ["#ACAC1A", "#FACADE"])

n.b. [Make.cm](https://make.cm) [parameters](https://docs.make.cm/api-reference/make-api#parameters) are url-encoded and must be [nested under the root key of `data`](https://docs.make.cm/api-reference/make-api#data).

Advanced options are available and can be discovered by referring to the source-code itself. [qs](https://www.npmjs.com/package/qs) (or similar) can be utilised for encoding.

## GET (synchronous)

In the reference deployment, synchronous GET requests can be performed against the [endpoint](https://cdn.make.cm/make/t/ba4c9684-a7af-4ca3-b929-291d6c196be3/k/639f5a8a-3056-48ff-bc67-c7613b9ecdca.b6d6a70ce98c5defcbc0282c9660dbc9/sync) available at https://cdn.make.cm/make/t/ba4c9684-a7af-4ca3-b929-291d6c196be3/k/639f5a8a-3056-48ff-bc67-c7613b9ecdca.b6d6a70ce98c5defcbc0282c9660dbc9/sync

## Short URLs

Whilst [Make.cm](https://make.cm) can be utilised to generate any supported format, two "short URLs" are available in the reference deployment.

In the reference deployment, both "short URLs" lock the "size" of the generated asset to 512x512px.

### SVG (MeJxBCL1tTQQ)

This is the primary mode of generation. SVGs can be embedded directly in the web-facing application via <img src="https://cdn.make.cm/make/s/MeJxBCL1tTQQ?...">.

### PDF (LAs9Ky5L4Y98)

This is the secondary mode of generation as is intended only for generating a production-ready asset for printing.

Due to technicalities on how [Make.cm](https://make.cm) renders text within PDFs, this mode utilises two passes.

The passes are performed in serial, to perform the appropriate generation to PDF.

That is, PDF generation consumes two credits per generation.

# Development

## Development server

Install all necessary dependencies `yarn install`

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

# Deployment

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.
