"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51640],{85161:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>t});var e=a(6254);const i={},l=(0,a(32991).A)(i,[["render",function(n,s){const a=(0,e.g2)("RouteLink");return(0,e.uX)(),(0,e.CE)("div",null,[s[3]||(s[3]=(0,e.Lk)("h1",{id:"python-virtual-environment",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#python-virtual-environment"},[(0,e.Lk)("span",null,"Python Virtual Environment")])],-1)),s[4]||(s[4]=(0,e.Lk)("p",null,"It is possible to run Zigbee2MQTT in a virtual environment, this has been tested with a Raspberry Pi 3B+.",-1)),(0,e.Lk)("p",null,[s[1]||(s[1]=(0,e.eW)("This guide is similar to the ")),(0,e.bF)(a,{to:"/guide/installation/01_linux.html"},{default:(0,e.k6)((()=>s[0]||(s[0]=[(0,e.eW)("Running Zigbee2MQTT on Linux guide")]))),_:1}),s[2]||(s[2]=(0,e.eW)(", follow the steps from there by replacing the steps with the ones from below."))]),s[5]||(s[5]=(0,e.Fv)('<h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing"><span>Installing</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Clone Zigbee2MQTT repository</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> pi:pi /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Enter folder</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install python env</span></span>\n<span class="line">python3 <span class="token parameter variable">-m</span> venv <span class="token builtin class-name">.</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Activate environment</span></span>\n<span class="line"><span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Upgrade pip, wheel and setuptools</span></span>\n<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip wheel setuptools</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install node environment</span></span>\n<span class="line">pip <span class="token function">install</span> nodeenv</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Init node environment</span></span>\n<span class="line">nodeenv <span class="token parameter variable">-p</span> <span class="token parameter variable">-n</span> <span class="token number">20.14</span>.0</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install pnpm</span></span>\n<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Deactivate and activate environment to be sure</span></span>\n<span class="line">deactivate</span>\n<span class="line"><span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install dependencies</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">pnpm</span> i --frozen-lockfile</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Deactivate environment</span></span>\n<span class="line">deactivate</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt"><span>Starting Zigbee2MQTT</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Enter folder</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Activate environment</span></span>\n<span class="line"><span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Start</span></span>\n<span class="line"><span class="token function">pnpm</span> start</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># ctrl + c to quit</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Deactivate environment</span></span>\n<span class="line">deactivate</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-running-as-a-daemon-with-systemctl" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-systemctl"><span>(Optional) Running as a daemon with systemctl</span></a></h2><p>To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Create a systemctl configuration file for Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/zigbee2mqtt.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following to this file:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>zigbee2mqtt</span>\n<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>\n<span class="line"></span>\n<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>notify</span>\n<span class="line"><span class="token assign-left variable">Environment</span><span class="token operator">=</span>NODE_PATH<span class="token operator">=</span>/opt/zigbee2mqtt/lib/node_modules</span>\n<span class="line"><span class="token assign-left variable">Environment</span><span class="token operator">=</span>NPM_CONFIG_PREFIX<span class="token operator">=</span>/opt/zigbee2mqtt</span>\n<span class="line"><span class="token assign-left variable">Environment</span><span class="token operator">=</span>npm_config_prefix<span class="token operator">=</span>/opt/zigbee2mqtt</span>\n<span class="line"><span class="token assign-left variable">Environment</span><span class="token operator">=</span>NODE_ENV<span class="token operator">=</span>production</span>\n<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/opt/zigbee2mqtt/bin/node index.js</span>\n<span class="line"><span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/opt/zigbee2mqtt</span>\n<span class="line"><span class="token assign-left variable">StandardOutput</span><span class="token operator">=</span>inherit</span>\n<span class="line"><span class="token assign-left variable">StandardError</span><span class="token operator">=</span>inherit</span>\n<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>always</span>\n<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span>pi</span>\n<span class="line"></span>\n<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now continue with <em>Verify that the configuration works:</em> from the <em>Running Zigbee2MQTT guide</em>.</p><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version"><span>(For later) Update Zigbee2MQTT to the latest version</span></a></h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Run the update script from the Zigbee2MQTT directory</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line">./update.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13))])}]]),t=JSON.parse('{"path":"/guide/installation/07_python_virtual_environment.html","title":"Python Virtual Environment","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"headers":[{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"(Optional) Running as a daemon with systemctl","slug":"optional-running-as-a-daemon-with-systemctl","link":"#optional-running-as-a-daemon-with-systemctl","children":[]},{"level":2,"title":"(For later) Update Zigbee2MQTT to the latest version","slug":"for-later-update-zigbee2mqtt-to-the-latest-version","link":"#for-later-update-zigbee2mqtt-to-the-latest-version","children":[]}],"git":{"updatedTime":1737572128000},"filePathRelative":"guide/installation/07_python_virtual_environment.md"}')}}]);