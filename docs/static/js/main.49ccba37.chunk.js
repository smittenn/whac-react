(this["webpackJsonpwhack-react"]=this["webpackJsonpwhack-react"]||[]).push([[0],{42:function(e,t,n){e.exports=n(56)},47:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(38),i=n.n(o),c=(n(47),n(16)),s=n(41),l=n(59),m=n(20),u=Object(m.proxy)({score:0,isSwingingForward:!1,isSwingingBackward:!1,api:{whac:function(e){u.isSwingingForward=!0,setTimeout((function(){u.isSwingingForward=!1,u.isSwingingBackward=!0}),250),setTimeout((function(){return u.isSwingingBackward=!1}),500),e.y>1.25&&++u.score}}});function g(){var e=Object(m.useSnapshot)(u).score;return r.a.createElement("group",null,r.a.createElement(l.a,{anchorX:"center",anchorY:"middle",position:[0,5,-2],fontSize:.25},"SCORE"),r.a.createElement(l.a,{anchorX:"center",anchorY:"middle",position:[0,4,-2],fontSize:2},e))}var h=n(1),p=n(60);function f(){var e=Object(m.useSnapshot)(u),t=e.isSwingingForward,n=e.isSwingingBackward,o=Object(p.a)("./mallet.glb"),i=o.nodes,s=o.materials,l=Object(a.useRef)(),g=Object(a.useRef)();return Object(c.b)((function(e){g.current.rotation.x=h.MathUtils.lerp(g.current.rotation.x,0,.2),g.current.rotation.y=h.MathUtils.lerp(g.current.rotation.y,e.mouse.x*Math.PI/10,.2),t?(l.current.rotation.x+=.15,l.current.rotation.y+=.25,l.current.rotation.z+=.45):n?(l.current.rotation.x-=.15,l.current.rotation.y-=.25,l.current.rotation.z-=.45):l.current.rotation.set(0,0,g.current.rotation.y),l.current.position.set(10*e.mouse.x,2.75,e.mouse.y*(e.mouse.y<.25?-30:-5))})),r.a.createElement("group",{ref:l},r.a.createElement("group",{ref:g,position:[-.05,.35,.3],scale:.15},r.a.createElement("group",{rotation:[1.85,-.35,2.35],scale:[2.95,2.95,2.95]},r.a.createElement("primitive",{object:i.Bone}),r.a.createElement("primitive",{object:i.Bone003}),r.a.createElement("primitive",{object:i.Bone006}),r.a.createElement("primitive",{object:i.Bone010}),r.a.createElement("skinnedMesh",{castShadow:!0,receiveShadow:!0,material:s.glove,"material-roughness":1,geometry:i.arm.geometry,skeleton:i.arm.skeleton})),r.a.createElement("group",{rotation:[0,-.05,0],scale:141.95},r.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:s.wood,geometry:i.hand.geometry}))))}function d(e){var t=Object(a.useRef)(),n=Object(p.a)("./field.glb"),o=n.nodes,i=n.materials;return r.a.createElement("mesh",{ref:t,dispose:null,receiveShadow:!0,material:i.Field,geometry:o.Field001.geometry,scale:[5,1.5,5],position:[0,0,1]})}var E=n(12),w=n(9),b=n(58),y=["args","offset","position"];function v(e){var t=e.args,n=void 0===t?[1,1,.5,32]:t,o=e.offset,i=void 0===o?0:o,s=Object(w.a)(e.position,3),l=s[0],m=s[1],g=s[2],h=(Object(E.a)(e,y),Object(a.useRef)()),p=Object(a.useState)(!1),f=Object(w.a)(p,2),d=f[0],v=f[1],S=Object(a.useState)(!1),j=Object(w.a)(S,2),k=j[0],O=j[1];Object(c.b)((function(e){h.current.position.set(l,m+.5*Math.sin(i+e.clock.elapsedTime),g),h.current.position.y>1.25?O(!0):O(!1)}));var B=Object(a.useCallback)((function(e){e.stopPropagation(),u.api.whac(h.current.position)}),[]);return r.a.createElement("group",{ref:h,onClick:B,onPointerOver:function(){return v(!0)},onPointerOut:function(){return v(!1)}},r.a.createElement(b.a,{args:n,castShadow:!0},r.a.createElement("meshStandardMaterial",{color:d&&k?"redorange":"orange"})))}function S(){return r.a.createElement("group",null,r.a.createElement("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0]},r.a.createElement("planeGeometry",{args:[1e3,1e3]}),r.a.createElement("meshPhongMaterial",{color:"hotpink"})),r.a.createElement("mesh",{position:[0,0,-10],rotation:[0,0,Math.PI/2]},r.a.createElement("planeGeometry",{args:[1e3,1e3]}),r.a.createElement("meshPhongMaterial",{color:"hotpink"})))}function j(){return r.a.createElement(c.a,{shadows:!0,camera:{position:[0,5,12],fov:50}},r.a.createElement("color",{attach:"background",args:["#232021"]}),r.a.createElement("ambientLight",{intensity:.5}),r.a.createElement("pointLight",{position:[-10,-10,-10]}),r.a.createElement("spotLight",{position:[10,10,10],angle:.5,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-1e-4}),r.a.createElement(s.a,{iterations:6,tolerance:1e-4,gravity:[0,-40,0]},r.a.createElement(S,null),r.a.createElement(d,null),Array.from({length:3},(function(e,t){return r.a.createElement(v,{key:t,position:[2.8*t-2.8,1,-2],offset:1e4*t})})),Array.from({length:3},(function(e,t){return r.a.createElement(v,{key:t,position:[2.8*t-2.8,1,1],offset:1e4*t+1})})),Array.from({length:3},(function(e,t){return r.a.createElement(v,{key:t,position:[2.8*t-2.8,1,4],offset:1e4*t+2})})),r.a.createElement(f,null),r.a.createElement(g,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.49ccba37.chunk.js.map