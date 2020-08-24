(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{389:function(e,t,s){"use strict";s.r(t);var a=s(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"install-helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-helm"}},[e._v("#")]),e._v(" Install Helm")]),e._v(" "),s("p",[e._v("Helm Architecture:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/5a29c3c1-7c6b-41fa-8082-bdc8a36177c9/Image/c64c01d08df64f4420e81f962fd13a23/screen_shot_2018_09_11_at_4_48_19_pm.png",alt:"Helm Architecture",title:"Helm Architecture"}}),e._v("\n(blogs.oracle.com/cloudnative/helm-kubernetes-package-management)")]),e._v(" "),s("p",[e._v("Install "),s("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),s("OutboundLink")],1),e._v(" binary:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -s https://raw.githubusercontent.com/helm/helm/master/scripts/get "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),s("p",[e._v("Output:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("Downloading https://kubernetes-helm.storage.googleapis.com/helm-v2.13.1-linux-amd64.tar.gz\nPreparing to "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" helm and tiller into /usr/local/bin\nhelm installed into /usr/local/bin/helm\ntiller installed into /usr/local/bin/tiller\nRun "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'helm init'")]),e._v(" to configure helm.\n")])])]),s("p",[e._v("Install Tiller (the Helm server-side component) into the Kubernetes cluster:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("kubectl create serviceaccount tiller --namespace kube-system\nkubectl create clusterrolebinding tiller-cluster-rule --clusterrole"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system:tiller\nhelm init --wait --service-account tiller\nhelm repo update\n")])])]),s("p",[e._v("Output:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("serviceaccount/tiller created\nclusterrolebinding.rbac.authorization.k8s.io/tiller-cluster-rule created\nCreating /root/.helm\nCreating /root/.helm/repository\nCreating /root/.helm/repository/cache\nCreating /root/.helm/repository/local\nCreating /root/.helm/plugins\nCreating /root/.helm/starters\nCreating /root/.helm/cache/archive\nCreating /root/.helm/repository/repositories.yaml\nAdding stable repo with URL: https://kubernetes-charts.storage.googleapis.com\nAdding "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" repo with URL: http://127.0.0.1:8879/charts\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$HELM_HOME")]),e._v(" has been configured at /root/.helm.\n\nTiller "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("the Helm server-side component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" has been installed into your Kubernetes Cluster.\n\nPlease note: by default, Tiller is deployed with an insecure "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'allow unauthenticated users'")]),e._v(" policy.\nTo prevent this, run "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("helm init"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" with the --tiller-tls-verify flag.\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" information on securing your installation see: https://docs.helm.sh/using_helm/"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#securing-your-helm-installation")]),e._v("\nHappy Helming"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nHang tight "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" we grab the latest from your chart repositories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".Skip "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" chart repository\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".Successfully got an update from the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stable"')]),e._v(" chart repository\nUpdate Complete. ⎈ Happy Helming"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("⎈\n")])])]),s("p",[e._v("Check if the tiller was installed properly:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("kubectl get pods -l "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("helm -n kube-system\n")])])]),s("p",[e._v("Output:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE\nkube-system   tiller-deploy-54fc6d9ccc-48n4w   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          19s\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);