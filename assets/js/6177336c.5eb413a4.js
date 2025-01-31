"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4453],{6647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/developer-resources/operation","title":"Operation","description":"This section covers how Talawa API operates","source":"@site/docs/docs/developer-resources/operation.md","sourceDirName":"docs/developer-resources","slug":"/developer-resources/operation","permalink":"/docs/developer-resources/operation","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/developer-resources/operation.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"operation","title":"Operation","slug":"/developer-resources/operation","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"PNPM Scripts","permalink":"/docs/developer-resources/pnpm-scripts"},"next":{"title":"Testing & Validation","permalink":"/docs/developer-resources/testing"}}');var i=t(86070),o=t(60385);const r={id:"operation",title:"Operation",slug:"/developer-resources/operation",sidebar_position:3},a=void 0,c={},l=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"API Administrators",id:"api-administrators",level:3},{value:"Docker Development Containers (devcontainers)",id:"docker-development-containers-devcontainers",level:3},{value:"Talawa API Dev Containers",id:"talawa-api-dev-containers",level:4},{value:"Startup Sequence",id:"startup-sequence",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This section covers how Talawa API operates"}),"\n",(0,i.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin, here are some important summaries of the technologies used."}),"\n",(0,i.jsx)(n.h3,{id:"api-administrators",children:"API Administrators"}),"\n",(0,i.jsxs)(n.p,{children:["The role of API Administrators is defined in the ",(0,i.jsx)(n.a,{href:"https://docs.talawa.io/docs/introduction/core-concepts",children:"Talawa Core Concepts page"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This section explains how they are managed in the database."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["When the API starts, it checks fo the existence of an account with the email address that matches the ",(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS"})," parameter in the API's ",(0,i.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,i.jsxs)(n.li,{children:["If an account with this email address does not exist:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["An account is automatically created using the configured ",(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS"})," as the username and ",(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_PASSWORD"})," as the password"]}),"\n",(0,i.jsxs)(n.li,{children:["The account with the matching ",(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS"})," becomes the API Administrtor"]}),"\n",(0,i.jsxs)(n.li,{children:["The account automatically has ",(0,i.jsx)(n.code,{children:"adminstrator"})," rights."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If an account with this email address exists:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The account with the matching ",(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS"})," becomes the API Administrtor"]}),"\n",(0,i.jsxs)(n.li,{children:["The account automatically has ",(0,i.jsx)(n.code,{children:"adminstrator"})," rights."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Therefore. Make sure to configure the API's ",(0,i.jsx)(n.code,{children:".env"})," file with these parameters."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS\nAPI_ADMINISTRATOR_USER_PASSWORD\n"})}),"\n",(0,i.jsx)(n.h3,{id:"docker-development-containers-devcontainers",children:"Docker Development Containers (devcontainers)"}),"\n",(0,i.jsx)(n.p,{children:"Talawa API uses devcontainers for many features"}),"\n",(0,i.jsx)(n.p,{children:"Development containers, or devcontainers, are Docker containers that are specifically configured to provide a fully featured development environment. They can be used to run an application, to separate tools, libraries, or runtimes needed for working with a codebase, and to aid in continuous integration and testing. Dev containers can be run locally or remotely, in a private or public cloud, in a variety of supporting tools and editors."}),"\n",(0,i.jsx)(n.p,{children:"The Development Container Specification seeks to find ways to enrich existing formats with common development specific settings, tools, and configuration while still providing a simplified, un-orchestrated single container option \u2013 so that they can be used as coding environments or for continuous integration and testing. Beyond the specification's core metadata, the spec also enables developers to quickly share and reuse container setup steps through Features and Templates."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For more information visit ",(0,i.jsx)(n.a,{href:"https://containers.dev/",children:"containers.dev"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Regular Docker's core features are contrary to using it as a developer environment."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Each container has an isolated filesystem, so the container can't normally see code on the host system, and the host system can't see tools that are only installed in the container."}),"\n",(0,i.jsx)(n.li,{children:"A container is based on an immutable image: you can't normally change the code a container is running without rebuilding the image and recreating the container. This is a familiar workflow for developers using compiled languages (C++, Java, Go, Rust), where even without Docker you still need to recompile and restart the application after every change."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/75652065/whats-the-difference-between-docker-compose-and-dev-containers",children:"this link"})," for further information on the differences between Containers and Dev Containers."]}),"\n",(0,i.jsx)(n.h4,{id:"talawa-api-dev-containers",children:"Talawa API Dev Containers"}),"\n",(0,i.jsx)(n.p,{children:"In Talawa API, the API devcontainer operates like a lightweight virtual machine which has network access available to the external containers services including:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postgres"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postgres-test"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"minio"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"minio-test"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cloudbeaver"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"caddy"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The Talawa API git repository is mounted on it. After the Dev Container starts, the ",(0,i.jsx)(n.code,{children:"node.js"})," development server runs on a port mapped to a port on your host system."]}),"\n",(0,i.jsx)(n.p,{children:"The API runs by default when the devcontainer starts, but only after the these compose services have already started."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"IMPORTANT NOTES"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Always keep your code up to date in your local branch because there may be changes not just to the code, but to the devcontainer configuration.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure your ",(0,i.jsx)(n.code,{children:".env"})," file is up to date with the latest changes in ",(0,i.jsx)(n.code,{children:".env.devcontainer"})," and restart the containers when there are changes."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:".env"})," file will be automatically created when the devcontainer starts, if doesn't previously exist."]}),"\n",(0,i.jsxs)(n.li,{children:["Preexisting ",(0,i.jsx)(n.code,{children:".env"})," files are not automatically updated with remote changes, you have to do that yourself."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Healthchecks are skipped in the devcontainer, because if the healthcheck for it was running then the api devcontainer would never start."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"startup-sequence",children:"Startup Sequence"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},60385:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(30758);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);