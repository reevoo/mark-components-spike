# Mark components spike

- this repository suppose to store results of our experiments with different JS frameworks

- At this moment we can access RW API only through proxy as we do not allow CORS.
- please use `proxy.js` included in this project.

```bash
yarn install
node proxy.js
```

# Experiment 1
- Are we able to query RW API and render list of reviews?

```bash
cd experiment_1/nwb-preact-example/
yarn install
DEBUG=nwb nwb preact run src/index.js --no-clear
```

As a result you should see list of reviews
