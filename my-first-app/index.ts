import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

const stack = pulumi.getStack();

const imageName = "my-first-app"

const image = new docker.Image('local-image', {
    build: '../app/typescript',
    imageName: `${imageName}:${stack}`,
    skipPush: true,
})