export default {
    id: 2,
    tags: ["Containers", " Kubernetes", " Jenkins", " DevOps tools", " CI/CD"],
    oneline:
        "The aim of this project is to automate the software development process. This process includes building the code, running tests on it and safely deploying the successful version of the code. CI stands for Continuous Integration. Continuous Integration continuously builds new versions of the code if there are no errors. CD expands to Continuous Deployment. Continuous Deployment deploys a finished code to the environment. ",
    logo: "https://miro.medium.com/max/2800/0*TH1nBsXNDB5Njynk.PNG",
    name: "CI/CD pipeline using K8",
    imgUrl: [
        "https://drive.google.com/file/d/1tI00UvFcBjgXxrTZyq00PaabrlI6lCmn/preview",
    ],
    members: [
        "Animesh Kumar",
        "Chinmayi Ramakrishna",
        "Annette Manoj Elsa",
        "Neha Pai",
        "K Keerthana",
        "Ayush Dineshbhai Mangukia",
        "Balajinaidu V",
        "Nikhil Sahu",
    ],
    description: {
        aim: (
            <div>
                The aim of this project is to automate the software development
                process. This process includes building the code, running tests
                on it and safely deploying the successful version of the code.
                CI stands for Continuous Integration. Continuous Integration
                continuously builds new versions of the code if there are no
                errors. CD expands to Continuous Deployment. Continuous
                Deployment deploys a finished code to the environment. The
                continuous integration part makes sure that there are no errors
                before deploying to the production environment. <br />
                <br />
                Additionally, the project also ensures that a particular
                application runs in any environment. It automatically provides
                the libraries or dependencies required to run a particular
                application. This is achieved in the form of docker images. The
                images are updated on docker Hub as new commits are made to
                GitHub repository.
            </div>
        ),
        meth: (
            <div>
                Technologies Used <br />
                <ol style={{ fontWeight: "lighter" }}>
                    <li>
                        Docker has been used to containerize the applications.
                    </li>
                    <li>
                        Kubernetes services have been used for pod creation.{" "}
                    </li>
                    <li>
                        Kubelet service used for communication between the
                        master and worker nodes.
                    </li>
                    <li>
                        Kubectl provides a command line tool for interaction
                        within the cluster.
                    </li>
                    <li>
                        Kubeadm has been used to set up a working kubernetes
                        cluster.
                    </li>
                </ol>
                Set up a local cluster using Docker and Kubernetes.
                <br />
                <div style={{ fontWeight: "lighter" }}>
                    Our local cluster consists of a master node and two worker
                    nodes. After successfully setting up the docker and
                    kubernetes environment in all the three nodes, the worker
                    nodes can be connected to the master node.This acts as the
                    base of the whole project.
                </div>
                <br />
                Create docker images of the applications and push to docker hub.
                <br />
                <div style={{ fontWeight: "lighter" }}>
                    Docker images are created using the Dockerfile. Running a
                    docker image creates a container that further contains the
                    application along with the libraries. The updated,
                    error-free docker image continuously gets built in Docker
                    Hub. At any instance, this docker image can be pulled from
                    the respective repository.
                </div>
                <br />
                Create deployment and service files for facilitating continuous
                deployment.
                <div style={{ fontWeight: "lighter" }}>
                    and service part of pod creation is wrapped into a single
                    yaml file named web-app. The deployment part of the file
                    consists of the template of the pod. This includes the name
                    of the container, image to be used and its port number. The
                    service part of the file manages the networking of the pods.{" "}
                </div>
                <br />
                Use of a bash script as an API to enable continuous integration
                and continuous deployment of the application.
                <div style={{ fontWeight: "lighter" }}>
                    Finally a simple build command along with git commit command
                    can be used to automate the whole development process. In
                    case of any errors, the process will not complete. This
                    means the whole process will be started only after the code
                    is error-free.{" "}
                </div>
                <br />
                Set up a platform in the form of a website to view details of
                Continuous Integration and Continuous Deployment.
                <div style={{ fontWeight: "lighter" }}>
                    A CI/CDPipeline dashboard consists of the pod details, list
                    of pods, list of nodes and list of deployments.
                </div>
            </div>
        ),
        res: (
            <div>
                <iframe
                    src="https://drive.google.com/file/d/1PlZggYorOSqvFWUEDhbPm0A_9qj5Ptm_/preview"
                    width="600"
                    height="300"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1MP9uT40jOp6Kap8mIYV0YPbY4YRFX7Wn/preview"
                    width="600"
                    height="300"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1w1ejcamo3DPj0MXb4kSmBM1FKr-9vlWy/preview"
                    width="600"
                    height="200"
                ></iframe>
                <br />
                Fig 1. Command to automate the process <br />
                <br />
                <div style={{ fontStyle: "italic" }}>
                    ./build git commit -m “Some message”
                </div>{" "}
                <br />
                The above command does the following things:
                <br />
                <div style={{ textDecoration: "underline" }}>
                    Continuous Integration:
                </div>
                <div style={{ fontWeight: "lighter" }}>
                    If there are no errors, pushes changed code to GitHub
                    repository A docker build command is initiated that consists
                    of 7 steps.
                </div>
                <div style={{ textDecoration: "underline" }}>
                    Continuous Deployment:
                </div>
                <div style={{ fontWeight: "lighter" }}>
                    It then deploys the application to the server. In this
                    project, the master node acts as the server.
                </div>
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1KQdBvJy5wxUUOWtlA0xwjEpOiux5qmlg/preview"
                    width="600"
                    height="300"
                ></iframe>
                <br />
                Fig 2. CI/CD Pipeline Dashboard
                <br />
                <br />
                <div style={{ fontWeight: "lighter" }}>
                    The dashboard will load the pod details under pod logs. Pod
                    details include pod id, timestamp, dockerId, status of the
                    pod etc. <br />
                    Also, the list of active nodes, pods and deployments are
                    displayed in the dashboard.
                </div>
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1W7fIYeyUmSVaTnb6P5wAbPCVr9vwfaAS/preview"
                    width="600"
                    height="300"
                ></iframe>
                <br />
                Fig 3. Docker Hub success build <br />
                <br />
                <div style={{ fontWeight: "lighter" }}>
                    The above repository contains the image of the application.
                </div>
            </div>
        ),
        con: (
            <div>
                This pipeline was customised for a simple html page. Html pages
                do not give much scope for error handling. This project built a
                go application of the web page. So any possible errors would be
                in the go app building phase. In the future, the pipeline can be
                customised to support other languages and thus test files. The
                project was done on a local machine due to lack of credentials.
                The project can be extended to achieve greater features by
                obtaining Azure/Aws/Google cloud services. These cloud services
                will help set up a server and thus mimic a production
                environment. This will give a more real life experience of the
                pipeline.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
