"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67726],{55599:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>c});var o=i(6254);const a={},n=(0,i(32991).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"schneider-electric-cctfr6400",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#schneider-electric-cctfr6400"},[(0,o.Lk)("span",null,"Schneider Electric CCTFR6400")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"CCTFR6400")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Temperature/Humidity measurement with thermostat interface")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"keypad_lockout, humidity, battery, voltage, action, climate (occupied_heating_setpoint, local_temperature, pi_heating_demand), linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CCTFR6400.png",alt:"Schneider Electric CCTFR6400"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="device-info" tabindex="-1"><a class="header-anchor" href="#device-info"><span>Device info</span></a></h3><p>This device is a</p><ul><li>thermostat UI for displaying/adjusting target set point.</li><li>temperature sensor</li><li>hygrometry sensor</li></ul><p>It can display the heating status of associated climate by setting <code>pi_heating_demand</code></p><p>It requires a Z-Stack controller (Firmware version &gt; TBD). It is currently not working with zigate and conbee II (maybe supported in further firmware).</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>screen_sleep</code>, <code>screen_wake</code>, <code>button_press_plus_down</code>, <code>button_press_center_down</code>, <code>button_press_minus_down</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),c=JSON.parse('{"path":"/devices/CCTFR6400.html","title":"Schneider Electric CCTFR6400 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric CCTFR6400 control via MQTT","description":"Integrate your Schneider Electric CCTFR6400 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-25T17:59:46.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Device info","slug":"device-info","link":"#device-info","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737572128000},"filePathRelative":"devices/CCTFR6400.md"}')}}]);