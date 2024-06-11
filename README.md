# sym_differ_vue

This is a user interface for the SymDiffer project.

## Demo
User interface as of this commit:

[Demo](https://github.com/enrique-guillen/sym_differ_vue/assets/31013835/583780e6-d88c-48f5-a82f-b9a3930f6f10)

## Purpose and current state
See [sym_differ](https://github.com/enrique-guillen/sym_differ).

## Development instructions && commands
- Run `npm i` to install all dependencies.
- Run `npm run test:unit` to run all unit tests.
- Run `npm run lint` to perform a lint analysis and auto-correct code.
- Make an `.env.development.local` file and define `VITE_BASE_API_URL` (set the value to the address of the
  local [sym_differ_rails](https://github.com/enrique-guillen/sym_differ_rails) server), as well as
  `VITE_APP_FEATURE_FILE` (you should be able to set this to have a URL link to the feature files).
- Run `npm run dev`.

## See also
- [sym_differ_rails](https://github.com/enrique-guillen/sym_differ_rails) which is the API that the interface is based on.
- [sym_differ](https://github.com/enrique-guillen/sym_differ) for the application code that carries out all the relevant mathematical operations
- [sym_differ_cli](https://github.com/enrique-guillen/sym_differ_cli/) for a CLI alternative to this interface.
