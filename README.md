## Micro Frontend

Microservices are backend services that run in their own operating system process, control their own databases, and communicate with each other over the network. Why can't we have the same concept on the front end?

Micro frontend has the following benefits:

1. Support code and style isolation, an individual development team can choose their own technology. The development and deployment speed is very fast.
1. It helps in Continuous Deployment.
1. The testing becomes very simple, and for every small change, you don’t have to go and touch the entire application.
1. Front-end renovation - Improving new things becomes easier.
1. High Resilience and Better Maintenance.
1. Support code and style isolation.

In this repo we have three apps

1. Dogs-and-Cats: Randomly show a picture of cat or dog
1. Emoji-Searcher: Contains a collection of emojis that can be filtered
1. Tic-Tac-Toe: The famous React starter project!

These three apps can be bootstrapped by running the `container` project. There are many ways to implement micro frontend services. The approach that I am using is quite primitive by injecting the respective main.js as specified in the .env.

### To Run

1. Run the three apps
1. Start the container
