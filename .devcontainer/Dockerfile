FROM mcr.microsoft.com/devcontainers/javascript-node:20-bookworm

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=1000

# RUN groupadd --gid $USER_GID $USERNAME \
#     && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
RUN apt-get update \
    && apt-get install -y sudo git gnupg2 \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
RUN mkdir -p /workspaces && chown -R $USER_UID:$USER_GID /workspaces

WORKDIR /workspaces
