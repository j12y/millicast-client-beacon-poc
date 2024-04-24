


# OVERVIEW



# REST Endpoints

REST endpoints of the form `/api/millicast/api/{path}` are provided where **path** matches the path that appears after `https://api.millicast.com/api/{path}` with the same request/response schema. The authorization headers are inserted.

Additionally, endpoints of the form `/api/v1/{path}` are provided as transformations or utilities.

# RUNBOOK

## Initialization

Clone this repository and then install dependencies:
`npm install`

Copy `.env.sample` and set up the appropriate values for your account. 

## Development

Run the development server locally:
`npm run dev -- --open`

## Building

To create a production version run:
`npm run build`

This can be previewed before deployment with:
`npm run preview`

