# Logy-CMS
### Client-Side: [repo](https://github.com/Lucas256w/Logy)
### API: [repo](https://github.com/Lucas256w/Logy-Backend)

## Run It Locally

### Prerequisites

- You'll need to install the Client-side repository and API repository along with this one to have access to all features

### Cloning the repository

Make a appropriate directory and cd to it using the terminal

```bash
# Clone this repository
$ git clone git@github.com:Lucas256w/Logy-CMS.git

# Go into the repository
$ cd Logy-CMS
```

### Install dependencies

```bash
# Install dependencies
$ npm install
```

### Setting up environment variables

- Make a file at the root directory called `.env`.
- Populate `.env` located in server with the following environment variables:
  - `VITE_MODE`: Set to prod or dev to change the server it will connect to
  - `VITE_PROD_API`: The API that it will connect to if VITE_MODE is set to prod
  - `VITE_DEV_API`: The API that it will connect to if VITE_MODE is set to dev


### Starting the application

From root directory run the following commands:

```bash
# Start the server
$ npm run dev

```
