"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[720],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return u}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(o),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return o?a.createElement(m,s(s({ref:t},c),{},{components:o})):a.createElement(m,s({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7376:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),s=["components"],i={},l="Deployment",p={unversionedId:"deployment",id:"deployment",isDocsHomePage:!1,title:"Deployment",description:"Welcome to Dashy, so glad you're here :) Deployment is super easy, and there are several methods available depending on what type of system you're using. If you're self-hosting, then deploying with Docker (or similar container engine) is the recommended approach.",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/deployment.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Configuring",permalink:"/docs/configuring"}},c=[{value:"Deployment Methods",id:"deployment-methods",children:[{value:"Deploy with Docker",id:"deploy-with-docker",children:[]},{value:"Using Docker Compose",id:"using-docker-compose",children:[]},{value:"Build from Source",id:"build-from-source",children:[]},{value:"Deploy to cloud service",id:"deploy-to-cloud-service",children:[]},{value:"Hosting with CDN",id:"hosting-with-cdn",children:[]}]}],d={toc:c};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Welcome to Dashy, so glad you're here :) Deployment is super easy, and there are several methods available depending on what type of system you're using. If you're self-hosting, then deploying with Docker (or similar container engine) is the recommended approach."),(0,r.kt)("h4",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"If you want to skip the fuss, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start"},"get straight down to it"),", then you can spin up a new instance of Dashy by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -p 8080:80 lissy93/dashy\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/management"},"Management Docs")," for info about securing, monitoring, updating, health checks, auto starting, web server configuration, etc"),(0,r.kt)("p",null,"Once you've got Dashy up and running, you'll want to configure it with your own content, for this you can reference the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuring"},"configuring docs"),"."),(0,r.kt)("h2",{id:"deployment-methods"},"Deployment Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-with-docker"},"Deploy with Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-docker-compose"},"Using Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#build-from-source"},"Build from Source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hosting-with-cdn"},"Hosting with CDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-as-executable"},"Run as executable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-with-npm"},"Install with NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-to-cloud-service"},"Deploy to cloud service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-managed-instance"},"Use managed instance"))),(0,r.kt)("h3",{id:"deploy-with-docker"},"Deploy with Docker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Container Info"),": ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Architectures-amd64%20%7C%20arm32v7%20%7C%20arm64v8-6ba6e5",alt:"Docker Supported Architecture"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Base_Image-Alpine_3.14-6ba6e5",alt:"Docker Base Image"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Hosted_on-DockerHub-6ba6e5",alt:"Docker Hosted on"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status"),": ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/cloud/build/lissy93/dashy?label=Docker%20Build",alt:"Docker Build Status"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/lissy93/dashy?color=ecb2f7",alt:"Docker Pulls"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/lissy93/dashy?color=f7f754&label=Docker%20Stars",alt:"Docker Stars"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/image-size/lissy93/dashy/latest?color=1eea76",alt:"Docker Image Size"}),(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/cloud/automated/lissy93/dashy?color=f4a966&label=Docker%20Build",alt:"Docker Cloud Build"}))),(0,r.kt)("p",null,"Dashy has a built container image hosted on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},"Docker Hub"),". You will need ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -p 8080:80 \\\n  -v /root/my-local-conf.yml:/app/public/conf.yml \\\n  --name my-dashboard \\\n  --restart=always \\\n  lissy93/dashy:latest\n")),(0,r.kt)("p",null,"Explanation of the above options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d")," Detached mode (not running in the foreground of your terminal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," The port that should be exposed, and the port it should be mapped to in your host system ",(0,r.kt)("inlineCode",{parentName:"li"},"[host-port][container-port]"),", leave the container port as is"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v")," Specify volumes, to pass data from your host system to the container, in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"[host-path]:[container-path]"),", you can use this to pass your config file, directory of assets (like icons), custom CSS or web assets (like favicon.ico, manifest.json etc)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name")," Give your container a human-readable name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--restart=always")," Spin up the container when the daemon starts, or after it has been stopped"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lissy93/dashy:latest")," This last option is the image the container should be built from, you can also use a specific version or architecture type, by replacing ",(0,r.kt)("inlineCode",{parentName:"li"},":latest")," with one of the ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/lissy93/dashy/tags"},"tags"))),(0,r.kt)("p",null,"For all available options, and to learn more, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/"},"Docker Run Docs")),(0,r.kt)("p",null,"Dashy is also available through GHCR: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull ghcr.io/lissy93/dashy:latest")),(0,r.kt)("p",null,"If you're deploying Dashy on a modern ARM-based board, such as a Raspberry Pi (2+), then you'll need to use one of Dashy's ARM images. Set the base image + tag to either ",(0,r.kt)("inlineCode",{parentName:"p"},"lissy93/dashy:arm64v8")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"lissy93/dashy:arm32v7"),", depending on your system architecture. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"multi-arch")," image, which should work on all system architectures. "),(0,r.kt)("p",null,"The image defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},":latest"),", but you can instead specify a specific version, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull lissy93/dashy:release-1.5.0")),(0,r.kt)("h3",{id:"using-docker-compose"},"Using Docker Compose"),(0,r.kt)("p",null,"Using Docker Compose can be useful for saving your specific config in files, without having to type out a long run command each time. Save compose config as a YAML file, and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up")," (optionally use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify file location, if it isn't located at ",(0,r.kt)("inlineCode",{parentName:"p"},"./docker-compose.yml"),"). Compose is also useful if you are using clusters, as the format is very similar to stack files, used with Docker Swarm."),(0,r.kt)("p",null,"The following is a complete example of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docker-compose.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose.yml"))," for Dashy. Run it as is, or uncomment the additional options you need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nversion: \"3.8\"\nservices:\n  dashy:\n    # To build from source, replace 'image: lissy93/dashy' with 'build: .'\n    # build: .\n    image: lissy93/dashy\n    container_name: Dashy\n    # Pass in your config file below, by specifying the path on your host machine\n    # volumes:\n      # - /root/my-config.yml:/app/public/conf.yml\n    ports:\n      - 4000:80\n    # Set any environmental variables\n    environment:\n      - NODE_ENV=production\n    # Specify your user ID and group ID. You can find this by running `id -u` and `id -g`\n    #  - UID=1000\n    #  - GID=1000\n    # Specify restart policy\n    restart: unless-stopped\n    # Configure healthchecks\n    healthcheck:\n      test: ['CMD', 'node', '/app/services/healthcheck']\n      interval: 1m30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n")),(0,r.kt)("p",null,"You can use a different tag, by for example setting ",(0,r.kt)("inlineCode",{parentName:"p"},"image: lissy93/dashy:arm64v8"),", or pull from GHCR instead by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"image: ghcr.io/lissy93/dashy"),"."),(0,r.kt)("p",null,"If you are building from source, and would like to use one of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/docker"},"other Dockerfiles"),", then under ",(0,r.kt)("inlineCode",{parentName:"p"},"services.dashy")," first set ",(0,r.kt)("inlineCode",{parentName:"p"},"context: ."),", then specify the the path to the dockerfile, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerfile: ./docker/Dockerfile-arm32v7")),(0,r.kt)("h3",{id:"build-from-source"},"Build from Source"),(0,r.kt)("p",null,"If you do not want to use Docker, you can run Dashy directly on your host system. For this, you will need both ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git")," and the latest or LTS version of ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," installed, and optionally ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/Lissy93/dashy.git")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cd dashy")),(0,r.kt)("li",{parentName:"ol"},"Configuration: Fill in you're settings in ",(0,r.kt)("inlineCode",{parentName:"li"},"./public/conf.yml")),(0,r.kt)("li",{parentName:"ol"},"Install dependencies: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")),(0,r.kt)("li",{parentName:"ol"},"Build: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn build")),(0,r.kt)("li",{parentName:"ol"},"Run: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,r.kt)("h3",{id:"deploy-to-cloud-service"},"Deploy to cloud service"),(0,r.kt)("p",null,"If you don't have a home server, then fear not - Dashy can be deployed to pretty much any cloud provider. The above Docker and NPM guides will work exactly the same on a VPS, but I've also setup some 1-Click deploy links for 10+ of the most common cloud providers, to make things easier. Note that if your instance is exposed to the internet, it will be your responsibility to adequately secure it."),(0,r.kt)("p",null,"Some hosting providers required a bit of extra configuration, which was why I've made separate branches for deploying to those services (named: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_cloudflare"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy_cloudflare")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_digital-ocean"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy_digital-ocean")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_platform-sh"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy_platform-sh"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_render"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy_render")),"). If there's another cloud service which you'd like 1-click deployment to be supported for, feel free to raise an issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," If you use a static hosting provider, then status checks, writing new config changes to disk from the UI, and triggering a rebuild through the UI will not be availible. This is because these features need endpoints provided by Dashy's local Node server. Everything else should work just the same though."),(0,r.kt)("h4",{id:"netlify"},"Netlify"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/GtKMysT/deploy-netlify-button.png",alt:"Deploy to Netlify"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify")," offers Git-based serverless cloud hosting for web applications. Their services are free to use for personal use, and they support deployment from both public and private repos, as well as direct file upload. The free plan also allows you to use your own custom domain or sub-domain, and is easy to setup."),(0,r.kt)("p",null,"To deploy Dashy to Netlify, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/dashy\n")),(0,r.kt)("h4",{id:"heroku"},"Heroku"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/Lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/GdMFzBP/deploy-heroku-button.png",alt:"Deploy to Heroku"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.heroku.com/"},"Heroku")," is a fully managed cloud platform as a service. You define app settings in a Procfile and app.json, which specifying how the app should be build and how the server should be started. Heroku is free to use for unlimited, non-commercial, single dyno apps, and supports custom domains. Heroku's single-dyno service is not as quite performant as some other providers, and the app will have a short wake-up time when not visited for a while"),(0,r.kt)("p",null,"To deploy Dashy to Heroku, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://heroku.com/deploy?template=https://github.com/Lissy93/dashy\n")),(0,r.kt)("h4",{id:"cloudflare-workers"},"Cloudflare Workers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://deploy.workers.cloudflare.com/?url=https://github.com/lissy93/dashy/tree/deploy_cloudflare"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/jf9xVdm/deploy-cloudflare-button.png",alt:"Deploy to Cloudflare Workers"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers")," is a simple yet powerful service for running cloud functions and hosting web content. It requires a Cloudflare account, but is completely free for smaller projects, and very reasonably priced ($0.15/million requests per month) for large applications. You can use your own domain, and applications are protected with Cloudflare's state of the art DDoS protection. For more info, see the docs on ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/platform/sites"},"Worker Sites")),(0,r.kt)("p",null,"To deploy Dashy to Cloudflare, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://deploy.workers.cloudflare.com/?url=https://github.com/lissy93/dashy/tree/deploy_cloudflare\n")),(0,r.kt)("h4",{id:"vercel"},"Vercel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/new/project?template=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/mJF3R7m/deploy-vercel-button.png",alt:"Deploy with Vercel"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel")," is a performance-focused platform for hosting static frontend apps. It comes bundled with some useful tools for monitoring and anaylzing application performance and other metrics. Vercel is free for personal use, allows for custom domains and has very reasonable limits."),(0,r.kt)("p",null,"To deploy Dashy to Vercel, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://vercel.com/new/project?template=https://github.com/lissy93/dashy\n")),(0,r.kt)("h4",{id:"digitalocean"},"DigitalOcean"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/apps/new?repo=https://github.com/lissy93/dashy/tree/deploy_digital-ocean&refcode=3838338e7f79"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/PFt0PkB/deploy-digital-ocean-button.png",alt:"Deploy to DO"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcan")," is a cloud service providing affordable developer-friendly virtual machines from $5/month. But they also have an app platform, where you can run web apps, static sites, APIs and background workers. CDN-backed static sites are free for personal use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://cloud.digitalocean.com/apps/new?repo=https://github.com/lissy93/dashy/tree/deploy_digital-ocean\n")),(0,r.kt)("h4",{id:"google-cloud-platform"},"Google Cloud Platform"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://deploy.cloud.run/?git_repo=https://github.com/lissy93/dashy.git"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/LkvHttd/deploy-google-cloud-button.png",alt:"Run on Google Cloud"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/"},"Cloud Run")," is a service offered by ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud"),". It's a fully managed serverless platform, for developing and deploying highly scalable containerized applications. Similar to AWS and Azure, GCP offers a wide range of cloud services, which are billed on a pay\u2010per\u2010use basis, but Cloud Run has a ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/pricing"},"free tier")," offering 180,000 vCPU-seconds, 360,000 GiB-seconds, and 2 million requests per month."),(0,r.kt)("p",null,"To deploy Dashy to GCP, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://deploy.cloud.run/?git_repo=https://github.com/lissy93/dashy.git\n")),(0,r.kt)("h4",{id:"platformsh"},"Platform.sh"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.platform.sh/projects/create-project/?template=https://github.com/lissy93/dashy&utm_campaign=deploy_on_platform?utm_medium=button&utm_source=affiliate_links&utm_content=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/nPnJgJP/deploy-platform-sh-button.png",alt:"Deploy to Platform.sh"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://platform.sh"},"Platform.sh")," is an end-to-end solution for developing and deploying applications. It is geared towards enterprise users with large teams, and focuses on allowing applications to scale up and down. Unlike the above providers, Platform.sh is not free, although you can deploy a test app to it without needing a payment method"),(0,r.kt)("p",null,"To deploy Dashy to Platform.sh, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://console.platform.sh/projects/create-project/?template=https://github.com/lissy93/dashy\n")),(0,r.kt)("h4",{id:"render"},"Render"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/lissy93/dashy/tree/deploy_render"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/QXNCbxT/deploy-render-button.png",alt:"Deploy to Render"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://render.com"},"Render")," is cloud provider that provides easy deployments for static sites, Docker apps, web services, databases and background workers. Render is great for developing applications, and very easy to use. Static sites are free, and services start at $7/month. Currently there are only 2 server locations - Oregon, USA and Frankfurt, Germany. For more info, see the ",(0,r.kt)("a",{parentName:"p",href:"https://render.com/docs"},"Render Docs")),(0,r.kt)("p",null,"To deploy Dashy to Render, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://render.com/deploy?repo=https://github.com/lissy93/dashy/tree/deploy_render\n")),(0,r.kt)("h4",{id:"scalingo"},"Scalingo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://my.scalingo.com/deploy?source=https://github.com/lissy93/dashy#master"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/nj0KxyH/deploy-scalingo-button.png",alt:"Deploy on Scalingo"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://scalingo.com/"},"Scalingo")," is a scalable container-based cloud platform as a service. It's focus is on compliance and uptime, and is geared towards enterprise users. Scalingo is also not free, although they do have a 3-day free trial that does not require a payment method "),(0,r.kt)("p",null,"To deploy Dashy to Scalingo, use the following link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://my.scalingo.com/deploy?source=https://github.com/lissy93/dashy#master\n")),(0,r.kt)("h4",{id:"play-with-docker"},"Play-with-Docker"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/Lissy93/dashy/master/docker-compose.yml"},(0,r.kt)("img",{parentName:"a",src:"https://i.ibb.co/SfbH7Zy/deploy-pwd-button.png",alt:"Try in PWD"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://labs.play-with-docker.com/"},"Play with Docker")," is a community project by Marcos Liljedhal and Jonathan Leibiusky and sponsored by Docker, intended to provide a hands-on learning environment. Their labs let you quickly spin up a Docker container or stack, and test out the image in a temporary, sandboxed environment. There's no need to sign up, and it's completely free."),(0,r.kt)("p",null,"To run Dashy in PWD, use the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/Lissy93/dashy/master/docker-compose.yml\n")),(0,r.kt)("h4",{id:"surgesh"},"Surge.sh"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.ibb.co/XkcKzKz/deploy-surge-button.png",alt:"Follow instructions below"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://surge.sh/"},"Surge.sh")," is quick and easy static web publishing platform for frontend-apps.\nSurge supports ",(0,r.kt)("a",{parentName:"p",href:"https://surge.sh/help/adding-password-protection-to-a-project"},"password-protected projects"),". You can also ",(0,r.kt)("a",{parentName:"p",href:"https://surge.sh/help/adding-a-custom-domain"},"add a custom domain")," and then ",(0,r.kt)("a",{parentName:"p",href:"https://surge.sh/help/using-https-by-default"},"force HTTPS by default")," and optionally ",(0,r.kt)("a",{parentName:"p",href:"https://surge.sh/help/securing-your-custom-domain-with-ssl"},"set a custom SSL certificate")),(0,r.kt)("p",null,"To deploy Dashy to Surge.sh, first clone and cd into Dashy, install dependencies, and then use the following commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add -g surge\nyarn build\nsurge ./dist\n")),(0,r.kt)("h3",{id:"hosting-with-cdn"},"Hosting with CDN"),(0,r.kt)("p",null,"Once Dashy has been built, it is effectivley just a static web app. This means that it can be served up with pretty much any static host, CDN or web server. To host Dashy through a CDN, the steps are very similar to building from source: clone the project, cd into it, install dependencies, write your config file and build the app. Once build is complete you will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"./dist")," directory within Dashy's root, and this is the build application which is ready to be served up."),(0,r.kt)("p",null,"However without Dashy's node server, there are a couple of features that will be unavailible to you, including: Writing config changes to disk through the UI, triggering a rebuild through the UI and application status checks. Everything else will work fine."))}h.isMDXComponent=!0}}]);