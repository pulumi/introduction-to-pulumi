FROM gitpod/workspace-full:latest

RUN curl -fsSL https://get.pulumi.com | sh -s -- --version 2.18.2

ENV PIP_USER=false
ENV PATH="${PATH}:/home/gitpod/.pulumi/bin"
