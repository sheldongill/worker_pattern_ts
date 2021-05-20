# Async Workers Demo

Demonstration of the asynchronous worker pattern using a message queue and callback notifications.

# Requirements

* NodeJS 12+
* yarn
* Redis

# Install

Just clone this repo and when inside the repo install the dependencies:

```sh
> yarn
```

Build it
```
> yarn build
```

In order to test this code you need to run 3 different services, a main server
that accepts posting tasks, a client server that will be called by a webhook from a worker,
and a service to start the workers.

Main service:

```sh
> yarn start
```

Client test server:

```sh
 > yarn start:test
```

Workers:

```sh
> yarn start:workers
```

Send it jobs:
```
 > ./bin/add_job <job type>
```

# UI
See the status of the jobs in your browser at http://localhost:9000/admin
