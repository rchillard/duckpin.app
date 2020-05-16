# generalorder.app
Web application for more efficient, systematic tracking of to do items.  This application uses the method of task prioritization used by General Dwight D. Eisenhower and his Eisenhower Matrix, classifying tasks in two dimensions:
- Urgency
- Importance

You can read more about the [Eisenhower Matrix](https://jamesclear.com/eisenhower-box) or use the app to learn how it works.

## Exercise
This application is an exercise in learning different technologies with a practical, real world (yet basic) CRUD app.  

Frontend technology in the client folder:
- React
- Svelte
- Vue

Multiple cloud infrastructure providers:
- Amazon Web Services
- Cloudflare Workers

## Setup
Prerequisites for development:
- Ubuntu 16.04+ (most Linux variants should work)
- Docker 17.05+
- Docker-Compose 1.24+

### Development
This setup should work for most Linux variants, but has been primarily tested on Ubuntu:
1. Clone the repository locally.
```
git clone git@github.com:rchillard/generalorder.app.git
```
2. Test if you have Docker and Docker Compose.  You should have the following results:
```
docker -v
Docker version 17.05.0-ce, build 89658be
docker-compose -v
docker-compose version 1.24.0-rc1, build 0f3d4dda
```
3. If no result for Docker, then you must [install Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/).
3. You will need to [install Docker Compose](https://github.com/docker/compose/releases) as well.
4. Run the following command to initialize a local set of services:
```
docker-compose up
```

You will see output in your terminal documenting the result, but you can also test using 'docker ps'.
