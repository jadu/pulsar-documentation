# Pulsar documentation

<https://pulsar.docs.jadu.net>

## Running locally

Documentation can run locally within a Docker container, all documentation authoring should take place locally, and be peer-reviewed before publishing to the live server.

You will need:
* A local checkout of the pulsar-documentation GitHub project
* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed
* To run `composer install` if this is your first time

From your local checkout, run the following command:

```
npm start
```

The local documentation should then be accessible by visiting http://localhost:5000 in your browser. Any changes you make to your local checkout will be reflected there without the need to clear cache, however some assets (like JavaScript and Sass/CSS may take a few seconds to rebuild).

The docker container can also be stopped using the `npm stop` command.

## Publishing to live

Documentation for this process is interal-only, and available on request from Paul Stanton or James Jacobs.
