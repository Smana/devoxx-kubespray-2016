# Test

* Within your own namespace create a **deployment** named web composed of an nginx container with the following specs:
    - limit : 1cpu
    - limit memory : 100M
    - image name : nginx:1.8
    - environment variable: foo=bar

* Use the kubernetes dashboard in order to **upscale** to 4 replicas
Get the dashboard address using the folling command :
```
kubectl cluster-info 
Kubernetes master is running at https://146.148.x.x
```
The credentials will be provided during the training

* Identify where (on which nodes) your pods are running

* **Downscale** to 1 replica using the commmand line (`kubectl scale -h`)

* Expose the **service** using a Cloud LoadBalancer

* Request the service using `curl` and display the log from the container

* Run a shell within the container and print the environment variable
