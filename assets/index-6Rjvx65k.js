(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="186",th=0,yl=1,nh=2,As=1,ih=2,Es=3,pi=0,Vt=1,xn=2,Mn=0,ws=1,Wa=2,El=3,bl=4,sh=5,zi=100,rh=101,ah=102,oh=103,lh=104,ch=200,uh=201,hh=202,dh=203,jc=204,eu=205,fh=206,ph=207,mh=208,gh=209,_h=210,xh=211,vh=212,Mh=213,Sh=214,Xa=0,qa=1,Ya=2,Is=3,Ka=4,Ja=5,Za=6,$a=7,tu=0,yh=1,Eh=2,Sn=0,Vo=1,ko=2,Wo=3,zr=4,Xo=5,qo=6,Yo=7,nu=300,mi=301,Qi=302,Sr=303,ea=304,Gr=306,gi=1e3,Pn=1001,Qa=1002,Rt=1003,bh=1004,Xs=1005,Nt=1006,ta=1007,ci=1008,Zt=1009,iu=1010,su=1011,Us=1012,Ko=1013,En=1014,un=1015,qt=1016,Jo=1017,Zo=1018,Ns=1020,ru=35902,au=35899,ou=1021,lu=1022,hn=1023,Un=1026,ui=1027,$o=1028,Qo=1029,_i=1030,jo=1031,el=1033,yr=33776,Er=33777,br=33778,Tr=33779,ja=35840,eo=35841,to=35842,no=35843,io=36196,so=37492,ro=37496,ao=37488,oo=37489,Pr=37490,lo=37491,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,Mo=37818,So=37819,yo=37820,Eo=37821,bo=36492,To=36494,Ao=36495,wo=36283,Ro=36284,Lr=36285,Co=36286,Th=3200,Po=0,Ah=1,Cn="",Ht="srgb",Dr="srgb-linear",Ir="linear",Qe="srgb",na=7680,wh=519,Rh=512,Ch=513,Ph=514,tl=515,Lh=516,Dh=517,nl=518,Ih=519,Uh=35044,Tl="300 es",vn=2e3,Fs=2001;function Nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){const i=Ur("canvas");return i.style.display="block",i}const Al={};function wl(...i){const e="THREE."+i.shift();console.log(e,...i)}function cu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=cu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=cu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){const e=i.join(" ");e in Al||(Al[e]=!0,Le(...i))}function Oh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Bh={[Xa]:qa,[Ya]:Za,[Ka]:$a,[Is]:Ja,[qa]:Xa,[Za]:Ya,[$a]:Ka,[Ja]:Is};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Lo=180/Math.PI;function Vs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function sa(i,e,t){return(1-t)*i+t*e}function ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class ve{static{ve.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==x){let m=c*u+l*f+h*x+d*v;m<0&&(u=-u,f=-f,x=-x,v=-v,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),C=Math.sin(T);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C,c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+v*o;const T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*d+c*f-l*u,e[t+1]=c*x+h*u+l*d-o*f,e[t+2]=l*x+h*f+o*u-c*d,e[t+3]=h*x-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new R,Rl=new ns;class Ie{static{Ie.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],v=s[0],m=s[3],p=s[6],T=s[1],C=s[4],S=s[7],b=s[2],E=s[5],w=s[8];return r[0]=a*v+o*T+c*b,r[3]=a*m+o*C+c*E,r[6]=a*p+o*S+c*w,r[1]=l*v+h*T+d*b,r[4]=l*m+h*C+d*E,r[7]=l*p+h*S+d*w,r[2]=u*v+f*T+x*b,r[5]=u*m+f*C+x*E,r[8]=u*p+f*S+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,x=t*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ie,Cl=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){const i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const We=Gh();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Ur("canvas")),Ti.width=e.width,Ti.height=e.height;const s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vh=0;class il{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let kh=0;const la=new R;class Ot extends Si{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Pn,s=Pn,r=Nt,a=ci,o=hn,c=Zt,l=Ot.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Vs(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=nu;Ot.DEFAULT_ANISOTROPY=1;class dt{static{dt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,S=(f+1)/2,b=(p+1)/2,E=(h+u)/4,w=(d+v)/4,_=(x+m)/4;return C>S&&C>b?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=w/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ot(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new il(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends Wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uu extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class tt{static{tt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,x,v,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,x,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,x=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+x*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,x=l*h,v=l*d;t[0]=u+v*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,x=l*h,v=l*d;t[0]=u-v*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,x=o*h,v=o*d;t[0]=c*h,t[4]=x*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=x*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+x,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*c,f=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,Yh)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Gn.crossVectors(n,Yt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Gn.crossVectors(n,Yt)),Gn.normalize(),qs.crossVectors(Yt,Gn),s[0]=Gn.x,s[4]=qs.x,s[8]=Yt.x,s[1]=Gn.y,s[5]=qs.y,s[9]=Yt.y,s[2]=Gn.z,s[6]=qs.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],v=n[6],m=n[10],p=n[14],T=n[3],C=n[7],S=n[11],b=n[15],E=s[0],w=s[4],_=s[8],y=s[12],P=s[1],I=s[5],F=s[9],H=s[13],N=s[2],B=s[6],Z=s[10],k=s[14],ne=s[3],q=s[7],X=s[11],J=s[15];return r[0]=a*E+o*P+c*N+l*ne,r[4]=a*w+o*I+c*B+l*q,r[8]=a*_+o*F+c*Z+l*X,r[12]=a*y+o*H+c*k+l*J,r[1]=h*E+d*P+u*N+f*ne,r[5]=h*w+d*I+u*B+f*q,r[9]=h*_+d*F+u*Z+f*X,r[13]=h*y+d*H+u*k+f*J,r[2]=x*E+v*P+m*N+p*ne,r[6]=x*w+v*I+m*B+p*q,r[10]=x*_+v*F+m*Z+p*X,r[14]=x*y+v*H+m*k+p*J,r[3]=T*E+C*P+S*N+b*ne,r[7]=T*w+C*I+S*B+b*q,r[11]=T*_+C*F+S*Z+b*X,r[15]=T*y+C*H+S*k+b*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],v=e[7],m=e[11],p=e[15],T=c*f-l*u,C=o*f-l*d,S=o*u-c*d,b=a*f-l*h,E=a*u-c*h,w=a*d-o*h;return t*(v*T-m*C+p*S)-n*(x*T-m*b+p*E)+s*(x*C-v*b+p*w)-r*(x*S-v*E+m*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],v=e[13],m=e[14],p=e[15],T=t*o-n*a,C=t*c-s*a,S=t*l-r*a,b=n*c-s*o,E=n*l-r*o,w=s*l-r*c,_=h*v-d*x,y=h*m-u*x,P=h*p-f*x,I=d*m-u*v,F=d*p-f*v,H=u*p-f*m,N=T*H-C*F+S*I+b*P-E*y+w*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=(o*H-c*F+l*I)*B,e[1]=(s*F-n*H-r*I)*B,e[2]=(v*w-m*E+p*b)*B,e[3]=(u*E-d*w-f*b)*B,e[4]=(c*P-a*H-l*y)*B,e[5]=(t*H-s*P+r*y)*B,e[6]=(m*S-x*w-p*C)*B,e[7]=(h*w-u*S+f*C)*B,e[8]=(a*F-o*P+l*_)*B,e[9]=(n*P-t*F-r*_)*B,e[10]=(x*E-v*S+p*T)*B,e[11]=(d*S-h*E-f*T)*B,e[12]=(o*y-a*I-c*_)*B,e[13]=(t*I-n*y+s*_)*B,e[14]=(v*C-x*b-m*T)*B,e[15]=(h*b-d*C+u*T)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,x=r*d,v=a*h,m=a*d,p=o*d,T=c*l,C=c*h,S=c*d,b=n.x,E=n.y,w=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+S)*b,s[2]=(x-C)*b,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(u+p))*E,s[6]=(m+T)*E,s[7]=0,s[8]=(x+C)*w,s[9]=(m-T)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),c=Ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);const l=1/a,h=1/o,d=1/c;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=vn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Fs)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===vn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Fs)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new R,an=new tt,qh=new R(0,0,0),Yh=new R(1,1,1),Gn=new R,qs=new R,Yt=new R,Ll=new tt,Dl=new ns;class jn{constructor(e=0,t=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kh=0;const Il=new R,wi=new ns,bn=new tt,Ys=new R,cs=new R,Jh=new R,Zh=new ns,Ul=new R(1,0,0),Nl=new R(0,1,0),Fl=new R(0,0,1),Ol={type:"added"},$h={type:"removed"},Ri={type:"childadded",child:null},ca={type:"childremoved",child:null};class ft extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new R,t=new jn,n=new ns,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ie}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(cs,Ys,this.up):bn.lookAt(Ys,cs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($h),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ln extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qh={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=zh(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return We.workingToColorSpace(It.copy(this),e),Math.round(ze(It.r*255,0,255))*65536+Math.round(ze(It.g*255,0,255))*256+Math.round(ze(It.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ht){We.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Ks);const n=sa(Hn.h,Ks.h,t),s=sa(Hn.s,Ks.s,t),r=sa(Hn.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ce;Ce.NAMES=du;class sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jh extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new R,Tn=new R,da=new R,An=new R,Ci=new R,Pi=new R,Bl=new R,fa=new R,pa=new R,ma=new R,ga=new dt,_a=new dt,xa=new dt;class cn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Tn.subVectors(n,t),da.subVectors(e,t);const a=on.dot(on),o=on.dot(Tn),c=on.dot(da),l=Tn.dot(Tn),h=Tn.dot(da),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(xa,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Tn.subVectors(e,t),on.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ci.subVectors(s,n),Pi.subVectors(r,n),fa.subVectors(e,n);const c=Ci.dot(fa),l=Pi.dot(fa);if(c<=0&&l<=0)return t.copy(n);pa.subVectors(e,s);const h=Ci.dot(pa),d=Pi.dot(pa);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ci,a);ma.subVectors(e,r);const f=Ci.dot(ma),x=Pi.dot(ma);if(x>=0&&f<=x)return t.copy(r);const v=f*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Pi,o);const m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Bl.subVectors(r,s),o=(d-h)/(d-h+(f-x)),t.copy(s).addScaledVector(Bl,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Zs.subVectors(this.max,us),Li.subVectors(e.a,us),Di.subVectors(e.b,us),Ii.subVectors(e.c,us),Vn.subVectors(Di,Li),kn.subVectors(Ii,Di),ii.subVectors(Li,Ii);let t=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!va(t,Li,Di,Ii,Zs)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Li,Di,Ii,Zs))?!1:($s.crossVectors(Vn,kn),t=[$s.x,$s.y,$s.z],va(t,Li,Di,Ii,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new R,new R,new R,new R,new R,new R,new R,new R],ln=new R,Js=new yi,Li=new R,Di=new R,Ii=new R,Vn=new R,kn=new R,ii=new R,us=new R,Zs=new R,$s=new R,si=new R;function va(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vt=new R,Qs=new ve;let ed=0;class yn extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fu extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const td=new yi,hs=new R,Ma=new R;class is{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Ma)),this.expandByPoint(hs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nd=0;const jt=new tt,Sa=new ft,Ui=new R,Kt=new yi,ds=new yi,Tt=new R;class pt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nh(e)?pu:fu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Kt.min,ds.min),Kt.expandByPoint(Tt),Tt.addVectors(Kt.max,ds.max),Kt.expandByPoint(Tt)):(Kt.expandByPoint(ds.min),Kt.expandByPoint(ds.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Tt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),Tt.add(Ui)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new R,c[_]=new R;const l=new R,h=new R,d=new R,u=new ve,f=new ve,x=new ve,v=new R,m=new R;function p(_,y,P){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,y),x.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),x.sub(u);const I=1/(f.x*x.y-x.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(I),o[_].add(v),o[y].add(v),o[P].add(v),c[_].add(m),c[y].add(m),c[P].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,y=T.length;_<y;++_){const P=T[_],I=P.start,F=P.count;for(let H=I,N=I+F;H<N;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const C=new R,S=new R,b=new R,E=new R;function w(_){b.fromBufferAttribute(s,_),E.copy(b);const y=o[_];C.copy(y),C.sub(b.multiplyScalar(b.dot(y))).normalize(),S.crossVectors(E,y);const I=S.dot(c[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,I)}for(let _=0,y=T.length;_<y;++_){const P=T[_],I=P.start,F=P.count;for(let H=I,N=I+F;H<N;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const x=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[x++]=l[f++]}return new yn(u,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new R,id=new R,sd=new Ie;class Xn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ya.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ya),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sd.getNormalMatrix(e),s=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rd=0;class ss extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=ws,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=eu,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rn=new R,Ea=new R,js=new R,er=new R;class mu{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ea.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=er.dot(this.direction),c=-er.dot(js),l=er.lengthSq(),h=Math.abs(1-a*a);let d,u,f,x;if(h>0)if(d=a*c-o,u=a*o-c,x=r*h,d>=0)if(u>=-x)if(u<=x){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ea).addScaledVector(js,u),f}intersectSphere(e,t){if(e.radius<0)return null;Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,x=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,T=n.y-a.y,C=n.z-a.z,S=Math.abs(c),b=Math.abs(l),E=Math.abs(h);let w,_,y,P,I,F,H,N,B,Z,k,ne;if(S>=b&&S>=E?(y=c,F=d,B=x,ne=p,c>=0?(w=l,_=h,P=u,I=f,H=v,N=m,Z=T,k=C):(w=h,_=l,P=f,I=u,H=m,N=v,Z=C,k=T)):b>=E?(y=l,F=u,B=v,ne=T,l>=0?(w=h,_=c,P=f,I=d,H=m,N=x,Z=C,k=p):(w=c,_=h,P=d,I=f,H=x,N=m,Z=p,k=C)):(y=h,F=f,B=m,ne=C,h>=0?(w=c,_=l,P=d,I=u,H=x,N=v,Z=p,k=T):(w=l,_=c,P=u,I=d,H=v,N=x,Z=T,k=p)),y===0)return null;const q=w/y,X=_/y,J=1/y,Me=P-q*F,me=I-X*F,Xe=H-q*B,Ge=N-X*B,qe=Z-q*ne,Y=k-X*ne,ee=qe*Ge-Y*Xe,Se=Me*Y-me*qe,De=Xe*me-Ge*Me;if(s){if(ee<0||Se<0||De<0)return null}else if((ee<0||Se<0||De<0)&&(ee>0||Se>0||De>0))return null;const _e=ee+Se+De;if(_e===0)return null;const Oe=J*(ee*F+Se*B+De*ne);return(_e>0?Oe<0:Oe>0)?null:this.at(Oe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zl=new tt,ri=new mu,tr=new is,Gl=new R,nr=new R,ir=new R,sr=new R,ba=new R,rr=new R,Hl=new R,ar=new R;class Be extends ft{constructor(e=new pt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(ba.fromBufferAttribute(d,e),a?rr.addScaledVector(ba,h):rr.addScaledVector(ba.sub(t),h))}t.add(rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(tr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(tr,Gl)===null||ri.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(zl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],p=a[m.materialIndex],T=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,b=C;S<b;S+=3){const E=o.getX(S),w=o.getX(S+1),_=o.getX(S+2);s=or(this,p,e,n,l,h,d,E,w,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const T=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);s=or(this,a,e,n,l,h,d,T,C,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],p=a[m.materialIndex],T=Math.max(m.start,f.start),C=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,b=C;S<b;S+=3){const E=S,w=S+1,_=S+2;s=or(this,p,e,n,l,h,d,E,w,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const T=m,C=m+1,S=m+2;s=or(this,a,e,n,l,h,d,T,C,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ad(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===pi,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);const h=ad(i,e,t,n,nr,ir,sr,Hl);if(h){const d=new R;cn.getBarycoord(Hl,nr,ir,sr,d),s&&(h.uv=cn.getInterpolatedAttribute(s,o,c,l,d,new ve)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,d,new ve)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};cn.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}class gu extends Ot{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Rt,h=Rt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr extends yn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new tt,Vl=new tt,lr=[],kl=new yi,od=new tt,fs=new Be,ps=new is;class Wl extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,od)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),kl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),ps.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),Vl.multiplyMatrices(n,Ni),fs.matrixWorld=Vl,fs.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){const c=lr[a];c.instanceId=r,c.object=this,t.push(c)}lr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gu(new Float32Array(s*this.count),s,this.count,$o,un));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ai=new is,ld=new ve(.5,.5),cr=new R;class rl{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],v=r[9],m=r[10],p=r[11],T=r[12],C=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,p-x,b-T).normalize(),s[1].setComponents(l+a,f+h,p+x,b+T).normalize(),s[2].setComponents(l+o,f+d,p+v,b+C).normalize(),s[3].setComponents(l-o,f-d,p-v,b-C).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,f-u,p-m,b-S).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-S).normalize(),t===vn)s[5].setComponents(l+c,f+u,p+m,b+S).normalize();else if(t===Fs)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=ld.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(cr.x=s.normal.x>0?e.max.x:e.min.x,cr.y=s.normal.y>0?e.max.y:e.min.y,cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hr extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fr=new R,Or=new R,Xl=new tt,ms=new mu,ur=new is,Ta=new R,ql=new R;class Do extends ft{constructor(e=new pt,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fr.fromBufferAttribute(t,s-1),Or.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fr.distanceTo(Or);e.setAttribute("lineDistance",new nt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;Xl.copy(s).invert(),ms.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=l){const p=h.getX(v),T=h.getX(v+1),C=hr(this,e,ms,c,p,T,v);C&&t.push(C)}if(this.isLineLoop){const v=h.getX(x-1),m=h.getX(f),p=hr(this,e,ms,c,v,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=l){const p=hr(this,e,ms,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=hr(this,e,ms,c,x-1,f,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Fr.fromBufferAttribute(o,s),Or.fromBufferAttribute(o,r),t.distanceSqToSegment(Fr,Or,Ta,ql)>n)return;Ta.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ta);if(!(l<e.near||l>e.far))return{distance:l,point:ql.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class _u extends Ot{constructor(e=[],t=mi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vr extends Ot{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Os extends Ot{constructor(e,t,n=En,s,r,a,o=Rt,c=Rt,l,h=Un,d=1){if(h!==Un&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cd extends Os{constructor(e,t=En,n=mi,s,r,a=Rt,o=Rt,c,l=Un){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xu extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function x(v,m,p,T,C,S,b,E,w,_,y){const P=S/w,I=b/_,F=S/2,H=b/2,N=E/2,B=w+1,Z=_+1;let k=0,ne=0;const q=new R;for(let X=0;X<Z;X++){const J=X*I-H;for(let Me=0;Me<B;Me++){const me=Me*P-F;q[v]=me*T,q[m]=J*C,q[p]=N,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(Me/w),d.push(1-X/_),k+=1}}for(let X=0;X<_;X++)for(let J=0;J<w;J++){const Me=u+J+B*X,me=u+J+B*(X+1),Xe=u+(J+1)+B*(X+1),Ge=u+(J+1)+B*X;c.push(Me,me,Ge),c.push(me,Xe,Ge),ne+=6}o.addGroup(f,ne,y),f+=ne,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Br extends pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new R,h=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kn extends pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let x=0;const v=[],m=n/2;let p=0;T(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function T(){const S=new R,b=new R;let E=0;const w=(t-e)/n;for(let _=0;_<=r;_++){const y=[],P=_/r,I=P*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,N=H*c+o,B=Math.sin(N),Z=Math.cos(N);b.x=I*B,b.y=-P*n+m,b.z=I*Z,d.push(b.x,b.y,b.z),S.set(B,w,Z).normalize(),u.push(S.x,S.y,S.z),f.push(H,1-P),y.push(x++)}v.push(y)}for(let _=0;_<s;_++)for(let y=0;y<r;y++){const P=v[y][_],I=v[y+1][_],F=v[y+1][_+1],H=v[y][_+1];(e>0||y!==0)&&(h.push(P,I,H),E+=3),(t>0||y!==r-1)&&(h.push(I,F,H),E+=3)}l.addGroup(p,E,0),p+=E}function C(S){const b=x,E=new ve,w=new R;let _=0;const y=S===!0?e:t,P=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),x++;const I=x;for(let F=0;F<=s;F++){const N=F/s*c+o,B=Math.cos(N),Z=Math.sin(N);w.x=y*Z,w.y=m*P,w.z=y*B,d.push(w.x,w.y,w.z),u.push(0,P,0),E.x=B*.5+.5,E.y=Z*.5*P+.5,f.push(E.x,E.y),x++}for(let F=0;F<s;F++){const H=b+F,N=I+F;S===!0?h.push(N,N+1,H):h.push(N+1,N,H),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class al extends Kn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],a=[],o=new R,c=new tt;for(let f=0;f<=e;f++){const x=f/e;s[f]=this.getTangentAt(x,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vu extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ud extends vu{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Yl=new R,Kl=new R,Aa=new ol,wa=new ol,Ra=new ol;class Mu extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Kl.subVectors(s[0],s[1]).add(s[0]),l=Kl);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Aa.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,x,v,m),wa.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,x,v,m),Ra.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),wa.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Ra.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Aa.calc(c),wa.calc(c),Ra.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function hd(i,e){const t=1-i;return t*t*e}function dd(i,e){return 2*(1-i)*i*e}function fd(i,e){return i*i*e}function Rs(i,e,t,n){return hd(i,e)+dd(i,t)+fd(i,n)}function pd(i,e){const t=1-i;return t*t*t*e}function md(i,e){const t=1-i;return 3*t*t*i*e}function gd(i,e){return 3*(1-i)*i*i*e}function _d(i,e){return i*i*i*e}function Cs(i,e,t,n,s){return pd(i,e)+md(i,t)+gd(i,n)+_d(i,s)}class xd extends Fn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(e,s.x,r.x,a.x,o.x),Cs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vd extends Fn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(e,s.x,r.x,a.x,o.x),Cs(e,s.y,r.y,a.y,o.y),Cs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Md extends Fn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sd extends Fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Fn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Su extends Fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y),Rs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Jl(o,c.x,l.x,h.x,d.x),Jl(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var bd=Object.freeze({__proto__:null,ArcCurve:ud,CatmullRomCurve3:Mu,CubicBezierCurve:xd,CubicBezierCurve3:vd,EllipseCurve:vu,LineCurve:Md,LineCurve3:Sd,QuadraticBezierCurve:yd,QuadraticBezierCurve3:Su,SplineCurve:Ed});class kr extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],x=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*u-a;for(let C=0;C<l;C++){const S=C*d-r;x.push(S,-T,0),v.push(0,0,1),m.push(C/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const C=T+l*p,S=T+l*(p+1),b=T+1+l*(p+1),E=T+1+l*p;f.push(C,S,E),f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class di extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],C=p/n,S=a+C*o,b=e*Math.cos(S),E=Math.sqrt(e*e-b*b);let w=0;p===0&&a===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const y=_/t,P=s+y*r;d.x=-E*Math.cos(P),d.y=b,d.z=E*Math.sin(P),x.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(y+w,1-C),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const C=h[p][T+1],S=h[p][T],b=h[p+1][T],E=h[p+1][T+1];(p!==0||a>0)&&f.push(C,S,E),(p!==n-1||c<Math.PI)&&f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new R,f=new R,x=new R;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let p=0;p<=s;p++){const T=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(T),f.y=(e+t*Math.cos(m))*Math.sin(T),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(T),u.y=e*Math.sin(T),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,T=(s+1)*(v-1)+m-1,C=(s+1)*(v-1)+m,S=(s+1)*v+m;c.push(p,T,S),c.push(T,C,S)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ll extends pt{constructor(e=new Su(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,l=new ve;let h=new R;const d=[],u=[],f=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function v(){for(let C=0;C<t;C++)m(C);m(r===!1?t:0),T(),p()}function m(C){h=e.getPointAt(C/t,h);const S=a.normals[C],b=a.binormals[C];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,_=Math.sin(w),y=-Math.cos(w);c.x=y*S.x+_*b.x,c.y=y*S.y+_*b.y,c.z=y*S.z+_*b.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let C=1;C<=t;C++)for(let S=1;S<=s;S++){const b=(s+1)*(C-1)+(S-1),E=(s+1)*C+(S-1),w=(s+1)*C+S,_=(s+1)*(C-1)+S;x.push(b,E,_),x.push(E,w,_)}}function T(){for(let C=0;C<=t;C++)for(let S=0;S<=s;S++)l.x=C/t,l.y=S/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new bd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Zl(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const s in n)e[s]=n[s]}return e}function Zl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Bs={clone:es,merge:Gt};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eu extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $l extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rd extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cd extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pd extends Hr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class bu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ld extends bu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ca=new tt,Ql=new R,jl=new R;class Dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ca,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dr=new R,fr=new ns,pn=new R;class Tu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dr,fr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dr,fr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new R,ec=new ve,tc=new ve;class nn extends Tu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wr extends Tu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Id extends Dd{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pr extends bu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Id}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Fi=-90,Oi=1;class Ud extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const r=new nn(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new nn(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new nn(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const c=new nn(Fi,Oi,e,t);c.layers=this.layers,this.add(c);const l=new nn(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Nd extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Od.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Od(){this._document.hidden===!1&&this.reset()}class Au{static{Au.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}const nc=new R;let mr,Pa;class Bd extends ft{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",mr===void 0&&(mr=new pt,mr.setAttribute("position",new nt([0,0,0,0,1,0],3)),Pa=new al(.5,1,5,1),Pa.translate(0,-.5,0)),this.position.copy(t),this.line=new Do(mr,new Hr({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(Pa,new ei({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{nc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(nc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function ic(i,e,t,n){const s=zd(n);switch(t){case ou:return i*e;case $o:return i*e/s.components*s.byteLength;case Qo:return i*e/s.components*s.byteLength;case _i:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case lu:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case yr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:case no:return Math.max(i,16)*Math.max(e,8)/4;case ja:case to:return Math.max(i,8)*Math.max(e,8)/2;case io:case so:case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:case Pr:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bo:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wo:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lr:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zd(i){switch(i){case Zt:case iu:return{byteLength:1,components:1};case Us:case su:case qt:return{byteLength:2,components:1};case Jo:case Zo:return{byteLength:2,components:4};case En:case Ko:case un:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){const x=d[u],v=d[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:kd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Kd,batching_pars_vertex:Jd,batching_vertex:Zd,begin_vertex:$d,beginnormal_vertex:Qd,bsdfs:jd,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:af,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:xf,colorspace_pars_fragment:vf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:yf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:bf,fog_vertex:Tf,fog_pars_vertex:Af,fog_fragment:wf,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Hf,lights_fragment_maps:Vf,lights_fragment_end:kf,lightprobes_pars_fragment:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Qf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:up,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:wp,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Ip,tonemapping_fragment:Up,tonemapping_pars_fragment:Np,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:Gp,worldpos_vertex:Hp,background_vert:Vp,background_frag:kp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:qp,cube_frag:Yp,depth_vert:Kp,depth_frag:Jp,distance_vert:Zp,distance_frag:$p,equirect_vert:Qp,equirect_frag:jp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:um,meshphong_frag:hm,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:xm,shadow_frag:vm,sprite_vert:Mm,sprite_frag:Sm},ue={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},_n={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_n.physical={uniforms:Gt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const gr={r:0,b:0,g:0},ym=new tt,Ru=new Ie;Ru.set(-1,0,0,0,1,0,0,0,1);function Em(i,e,t,n,s,r){const a=new Ce(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const S=T.backgroundBlurriness>0;C=e.get(C,S)}return C}function x(T){let C=!1;const S=f(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),C=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,C){const S=f(C);S&&(S.isCubeTexture||S.mapping===Gr)?(l===void 0&&(l=new Be(new Nn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:es(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ru),l.material.toneMapped=We.getTransfer(S.colorSpace)!==Qe,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Be(new kr(2,2),new Ft({name:"BackgroundMaterial",uniforms:es(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=We.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,C){T.getRGB(gr,yu(i)),t.buffers.color.setClear(gr.r,gr.g,gr.b,C,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:v,dispose:p}}function bm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,F,H,N,B){let Z=!1;const k=d(I,N,H,F);r!==k&&(r=k,l(r.object)),Z=f(I,N,H,B),Z&&x(I,N,H,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(I,F,H,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,F,H,N){const B=N.wireframe===!0;let Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);const k=I.isInstancedMesh===!0?I.id:0;let ne=Z[k];ne===void 0&&(ne={},Z[k]=ne);let q=ne[H.id];q===void 0&&(q={},ne[H.id]=q);let X=q[B];return X===void 0&&(X=u(c()),q[B]=X),X}function u(I){const F=[],H=[],N=[];for(let B=0;B<t;B++)F[B]=0,H[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,F,H,N){const B=r.attributes,Z=F.attributes;let k=0;const ne=H.getAttributes();for(const q in ne)if(ne[q].location>=0){const J=B[q];let Me=Z[q];if(Me===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),J===void 0||J.attribute!==Me||Me&&J.data!==Me.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function x(I,F,H,N){const B={},Z=F.attributes;let k=0;const ne=H.getAttributes();for(const q in ne)if(ne[q].location>=0){let J=Z[q];J===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const Me={};Me.attribute=J,J&&J.data&&(Me.data=J.data),B[q]=Me,k++}r.attributes=B,r.attributesNum=k,r.index=N}function v(){const I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const H=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;H[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),B[I]!==F&&(i.vertexAttribDivisor(I,F),B[I]=F)}function T(){const I=r.newAttributes,F=r.enabledAttributes;for(let H=0,N=F.length;H<N;H++)F[H]!==I[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function C(I,F,H,N,B,Z,k){k===!0?i.vertexAttribIPointer(I,F,H,B,Z):i.vertexAttribPointer(I,F,H,N,B,Z)}function S(I,F,H,N){v();const B=N.attributes,Z=H.getAttributes(),k=F.defaultAttributeValues;for(const ne in Z){const q=Z[ne];if(q.location>=0){let X=B[ne];if(X===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const J=X.normalized,Me=X.itemSize,me=e.get(X);if(me===void 0)continue;const Xe=me.buffer,Ge=me.type,qe=me.bytesPerElement,Y=Ge===i.INT||Ge===i.UNSIGNED_INT||X.gpuType===Ko;if(X.isInterleavedBufferAttribute){const ee=X.data,Se=ee.stride,De=X.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,ee.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let _e=0;_e<q.locationSize;_e++)C(q.location+_e,Me/q.locationSize,Ge,J,Se*qe,(De+Me/q.locationSize*_e)*qe,Y)}else{if(X.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee,X.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ee=0;ee<q.locationSize;ee++)C(q.location+ee,Me/q.locationSize,Ge,J,Me*qe,Me/q.locationSize*ee*qe,Y)}}else if(k!==void 0){const J=k[ne];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}T()}function b(){y();for(const I in n){const F=n[I];for(const H in F){const N=F[H];for(const B in N){const Z=N[B];for(const k in Z)h(Z[k].object),delete Z[k];delete N[B]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const H in F){const N=F[H];for(const B in N){const Z=N[B];for(const k in Z)h(Z[k].object),delete Z[k];delete N[B]}}delete n[I.id]}function w(I){for(const F in n){const H=n[F];for(const N in H){const B=H[N];if(B[I.id]===void 0)continue;const Z=B[I.id];for(const k in Z)h(Z[k].object),delete Z[k];delete B[I.id]}}}function _(I){for(const F in n){const H=n[F],N=I.isInstancedMesh===!0?I.id:0,B=H[N];if(B!==void 0){for(const Z in B){const k=B[Z];for(const ne in k)h(k[ne].object),delete k[ne];delete B[Z]}delete H[N],Object.keys(H).length===0&&delete n[F]}}}function y(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Tm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Am(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zt&&w!==un&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:S,maxSamples:b,samples:E}}function wm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Xn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,C=T*4;let S=p.clippingState||null;c.value=S,S=h(x,u,C,f);for(let b=0;b!==C;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const p=f+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,S=f;C!==v;++C,S+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Gi=4,Rm=6,Cm=20,Pm=256,gs=new Wr,sc=new Ce;let La=null,Da=0,Ia=0,Ua=!1;const Lm=new R,oi=new R;class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lm}=r;La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:qt,format:hn,colorSpace:Dr,depthBuffer:!1},s=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dm(r)),this._blurMaterial=Um(r,e,t),this._ggxMaterial=Im(r,e,t)}return s}_compileMaterial(e){const t=new Be(new pt,e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,n,s,r){const c=new nn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sc),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new Nn,new ei({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(sc),p=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[C],r.y,r.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[C]));const b=this._cubeSize;Bi(s,S*b,C>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mi||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Bi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Gi?n-x+Gi:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,Bi(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,gs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Bi(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,gs)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Gi?s-this._lodMax+Gi:0),u=4*(this._cubeSize-h);Bi(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,gs)}}function Dm(i){const e=[],t=[];let n=i;const s=i-Gi+1+Rm;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,x=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const T=p%3*2/3-1,C=p>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(S,f*u*p);for(let b=0;b<u;b++){const E=h[b*2]*2-1,w=h[b*2+1]*2-1;p===0?oi.set(1,w,E):p===1?oi.set(-E,1,-w):p===2?oi.set(-E,w,1):p===3?oi.set(-1,w,-E):p===4?oi.set(-E,-1,w):oi.set(E,w,-1),oi.toArray(v,(p*u+b)*f)}}const m=new pt;m.setAttribute("position",new yn(x,f)),m.setAttribute("outputDirection",new yn(v,f)),t.push(new Be(m,null)),n>Gi&&n--}return{lodMeshes:t,sizeLods:e}}function rc(i,e,t){const n=new kt(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Im(i,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Um(i,e,t){return new Ft({name:"SphericalGaussianBlur",defines:{SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ac(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function oc(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cu extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _u(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Mn});r.uniforms.tEquirect.value=t;const a=new Be(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=Nt),new Ud(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Nm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Sr||f===ea)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const v=new Cu(x.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,x=f===Sr||f===ea,v=f===mi||f===Qi;if(x||v){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Io(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const T=u.image;return x&&T&&T.height>0||v&&T&&c(T)?(n===null&&(n=new Io(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Sr?u.mapping=mi:f===ea&&(u.mapping=Qi),u}function c(u){let f=0;const x=6;for(let v=0;v<x;v++)u[v]!==void 0&&f++;return f===x}function l(u){const f=u.target;f.removeEventListener("dispose",l);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&qi("WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,x=d.attributes.position;let v=0;if(x===void 0)return;if(f!==null){const T=f.array;v=f.version;for(let C=0,S=T.length;C<S;C+=3){const b=T[C+0],E=T[C+1],w=T[C+2];u.push(b,E,E,w,w,b)}}else{const T=x.array;v=x.version;for(let C=0,S=T.length/3-1;C<S;C+=3){const b=C+0,E=C+1,w=C+2;u.push(b,E,E,w,w,b)}}const m=new(x.count>=65535?pu:fu)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Bm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function zm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*E*4*d),_=new uu(w,b,E,d);_.type=un,_.needsUpdate=!0;const y=S*4;for(let I=0;I<d;I++){const F=p[I],H=T[I],N=C[I],B=b*E*4*I;for(let Z=0;Z<F.count;Z++){const k=Z*y;x===!0&&(s.fromBufferAttribute(F,Z),w[B+k+0]=s.x,w[B+k+1]=s.y,w[B+k+2]=s.z,w[B+k+3]=0),v===!0&&(s.fromBufferAttribute(H,Z),w[B+k+4]=s.x,w[B+k+5]=s.y,w[B+k+6]=s.z,w[B+k+7]=0),m===!0&&(s.fromBufferAttribute(N,Z),w[B+k+8]=s.x,w[B+k+9]=s.y,w[B+k+10]=s.z,w[B+k+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new ve(b,E)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const v=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hm(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Vm={[Vo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[zr]:"ACES_FILMIC_TONE_MAPPING",[qo]:"AGX_TONE_MAPPING",[Yo]:"NEUTRAL_TONE_MAPPING",[Xo]:"CUSTOM_TONE_MAPPING"};function km(i,e,t,n,s,r){const a=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new pt;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));const h=new Eu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Be(l,h),u=new Wr(-1,1,1,-1,0,1);let f=null,x=null,v=!1,m,p=null,T=[],C=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let E=0;E<T.length;E++){const w=T[E];w.setSize&&w.setSize(S,b)}},this.setEffects=function(S){T=S,C=T.length>0&&T[0].isRenderPass===!0;const b=a.width,E=a.height;T.length>0&&o===null&&(o=new kt(b,E,{type:qt,depthBuffer:!1,stencilBuffer:!1}),c=new kt(b,E,{type:qt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<T.length;w++){const _=T[w];_.setSize&&_.setSize(b,E)}},this.begin=function(S,b){if(v||S.toneMapping===Sn&&T.length===0)return!1;if(p=b,b!==null){const E=b.width,w=b.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return C===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Sn,!0},this.hasRenderPass=function(){return C},this.end=function(S,b){S.toneMapping=m,v=!0;let E=a,w=o;for(let _=0;_<T.length;_++){const y=T[_];y.enabled!==!1&&(y.render(S,w,E,b),y.needsSwap!==!1&&(E=w,w=w===o?c:o))}if(f!==S.outputColorSpace||x!==S.toneMapping){f=S.outputColorSpace,x=S.toneMapping,h.defines={},We.getTransfer(f)===Qe&&(h.defines.SRGB_TRANSFER="");const _=Vm[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Pu=new Ot,Uo=new Os(1,1),Lu=new uu,Du=new Xh,Iu=new _u,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),Et(t,n)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),Et(t,n)}}function Zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),Et(t,n)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function t0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function r0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?nl:tl,r=Uo):r=Pu,t.setTexture2D(e||r,s)}function a0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Du,s)}function o0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Iu,s)}function l0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lu,s)}function c0(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return Jm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Qm;case 35668:case 35672:return jm;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(i,e){i.uniform1fv(this.addr,e)}function h0(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function d0(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function f0(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function p0(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function m0(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function g0(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function M0(i,e){i.uniform4iv(this.addr,e)}function S0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function E0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function T0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uo:a=Pu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function A0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Du,r[a])}function w0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Iu,r[a])}function R0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lu,r[a])}function C0(i){switch(i){case 5126:return u0;case 35664:return h0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return y0;case 36295:return E0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return R0}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c0(t.type)}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function I0(i,e,t){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),a=Na.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fc(t,l===void 0?new P0(o,i,e):new L0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new D0(o),fc(t,d)),t=d}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);I0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U0=37297;let N0=0;function F0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const mc=new Ie;function O0(i){We._getMatrix(mc,We.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F0(i.getShaderSource(e),o)}else return r}function B0(i,e){const t=O0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z0={[Vo]:"Linear",[ko]:"Reinhard",[Wo]:"Cineon",[zr]:"ACESFilmic",[qo]:"AgX",[Yo]:"Neutral",[Xo]:"Custom"};function G0(i,e){const t=z0[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new R;function H0(){We.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function k0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bs(i){return i!==""}function _c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(X0,Y0)}const q0=new Map;function Y0(i,e){let t=Fe[e];if(t===void 0){const n=q0.get(e);if(n!==void 0)t=Fe[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return No(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(K0,J0)}function J0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z0={[As]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function $0(i){return Z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q0={[mi]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function j0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eg={[Qi]:"ENVMAP_MODE_REFRACTION"};function tg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ng={[tu]:"ENVMAP_BLENDING_MULTIPLY",[yh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function ig(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ng[i.combine]||"ENVMAP_BLENDING_NONE"}function sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$0(t),l=j0(t),h=tg(t),d=ig(t),u=sg(t),f=V0(t),x=k0(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=No(a),a=_c(a,t),a=xc(a,t),o=No(o),o=_c(o,t),o=xc(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=T+m+a,S=T+p+o,b=pc(s,s.VERTEX_SHADER,C),E=pc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,b),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(E)||"",B=F.trim(),Z=H.trim(),k=N.trim();let ne=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{const X=gc(s,b,"vertex"),J=gc(s,E,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+X+`
`+J)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(Z===""||k==="")&&(q=!1);q&&(I.diagnostics={runnable:ne,programLog:B,vertexShader:{log:Z,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(b),s.deleteShader(E),_=new Ar(s,v),y=W0(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,U0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function cg(i){return i===_i||i===Pr||i===Lr}function ug(i,e,t,n,s,r){const a=new hu,o=new og,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,y,P,I,F,H){const N=I.fog,B=F.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||Z,k),q=ne&&ne.mapping===Gr?ne.image.height:null,X=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Me=J!==void 0?J.length:0;let me=0;B.morphAttributes.position!==void 0&&(me=1),B.morphAttributes.normal!==void 0&&(me=2),B.morphAttributes.color!==void 0&&(me=3);let Xe,Ge,qe,Y;if(X){const rt=_n[X];Xe=rt.vertexShader,Ge=rt.fragmentShader}else{Xe=_.vertexShader,Ge=_.fragmentShader;const rt=o.getVertexShaderStage(_),Ze=o.getFragmentShaderStage(_);o.update(_,rt,Ze),qe=rt.id,Y=Ze.id}const ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Oe=!!_.map,St=!!_.matcap,He=!!ne,Ke=!!_.aoMap,st=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,bt=!!_.displacementMap,Wt=!!_.emissiveMap,ht=!!_.metalnessMap,_t=!!_.roughnessMap,U=_.anisotropy>0,Pt=_.clearcoat>0,je=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,V=_.transmission>0,K=U&&!!_.anisotropyMap,ie=Pt&&!!_.clearcoatMap,se=Pt&&!!_.clearcoatNormalMap,$=Pt&&!!_.clearcoatRoughnessMap,j=g&&!!_.iridescenceMap,re=g&&!!_.iridescenceThicknessMap,Ae=O&&!!_.sheenColorMap,ce=O&&!!_.sheenRoughnessMap,ae=!!_.specularMap,we=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Ue=V&&!!_.transmissionMap,D=V&&!!_.thicknessMap,oe=!!_.gradientMap,Q=!!_.alphaMap,le=_.alphaTest>0,pe=!!_.alphaHash,te=!!_.extensions;let Re=Sn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Re=i.toneMapping);const be={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:Ge,defines:_.defines,customVertexShaderID:qe,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:St,envMap:He,envMapMode:He&&ne.mapping,envMapCubeUVHeight:q,aoMap:Ke,lightMap:st,bumpMap:ke,normalMap:ct,displacementMap:bt,emissiveMap:Wt,normalMapObjectSpace:ct&&_.normalMapType===Ah,normalMapTangentSpace:ct&&_.normalMapType===Po,packedNormalMap:ct&&_.normalMapType===Po&&cg(_.normalMap.format),metalnessMap:ht,roughnessMap:_t,anisotropy:U,anisotropyMap:K,clearcoat:Pt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:$,dispersion:je,retroreflection:A,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:re,sheen:O,sheenColorMap:Ae,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:we,specularIntensityMap:Pe,transmission:V,transmissionMap:Ue,thicknessMap:D,gradientMap:oe,opaque:_.transparent===!1&&_.blending===ws&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:le,alphaHash:pe,combine:_.combine,mapUv:Oe&&x(_.map.channel),aoMapUv:Ke&&x(_.aoMap.channel),lightMapUv:st&&x(_.lightMap.channel),bumpMapUv:ke&&x(_.bumpMap.channel),normalMapUv:ct&&x(_.normalMap.channel),displacementMapUv:bt&&x(_.displacementMap.channel),emissiveMapUv:Wt&&x(_.emissiveMap.channel),metalnessMapUv:ht&&x(_.metalnessMap.channel),roughnessMapUv:_t&&x(_.roughnessMap.channel),anisotropyMapUv:K&&x(_.anisotropyMap.channel),clearcoatMapUv:ie&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(_.sheenRoughnessMap.channel),specularMapUv:ae&&x(_.specularMap.channel),specularColorMapUv:we&&x(_.specularColorMap.channel),specularIntensityMapUv:Pe&&x(_.specularIntensityMap.channel),transmissionMapUv:Ue&&x(_.transmissionMap.channel),thicknessMapUv:D&&x(_.thicknessMap.channel),alphaMapUv:Q&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ct||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Oe||Q),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:me,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function m(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)y.push(P),y.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(y,_),T(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function T(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){const y=f[_.type];let P;if(y){const I=_n[y];P=Bs.clone(I.uniforms)}else P=_.uniforms;return P}function S(_,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new rg(i,y,_,s),l.push(P),h.set(y,P)),P}function b(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:w}}function hg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,v,m,p){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[e]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=x,T.materialVariant=a(u),T.groupOrder=v,T.renderOrder=u.renderOrder,T.z=m,T.group=p),e++,T}function c(u,f,x,v,m,p,T){T.reversedDepth===!0&&(m=-m);const C=o(u,f,x,v,m,p);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):t.push(C)}function l(u,f,x,v,m,p){const T=o(u,f,x,v,m,p);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function h(u,f){t.length>1&&t.sort(u||dg),n.length>1&&n.sort(f||Sc),s.length>1&&s.sort(f||Sc)}function d(){for(let u=e,f=i.length;u<f;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function fg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new yc,i.set(n,[a])):s>=r.length?(a=new yc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ce};break;case"SpotLight":t={position:new R,direction:new R,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xg(i){const e=new pg,t=mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new tt,a=new tt;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,x=0,v=0,m=0,p=0,T=0,C=0,S=0,b=0,E=0,w=0,_=0,y=0,P=0;l.sort(_g);for(let F=0,H=l.length;F<H;F++){const N=l[F],B=N.color,Z=N.intensity,k=N.distance;let ne=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_i?ne=N.shadow.map.texture:ne=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*Z,d+=B.g*Z,u+=B.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Z);P++}else if(N.isSunLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const X=N.shadow,J=t.get(N);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[x]=J,n.sunShadowMap[x]=ne;const Me=X.getViewportCount();for(let me=0;me<Me;me++)n.sunShadowMatrix[v+me]=X.getMatrix(me),n.sunShadowCascade[v+me]=X._cascadeData[me];v+=Me,x++}n.sun[f]=q,f++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const X=N.shadow,J=t.get(N);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=q,m++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(Z),q.distance=k,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[T]=q;const X=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,X.updateMatrices(N),N.castShadow&&y++),n.spotLightMatrix[T]=X.matrix,N.castShadow){const J=t.get(N);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.spotShadow[T]=J,n.spotShadowMap[T]=ne,w++}T++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(B).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[C]=q,C++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const X=N.shadow,J=t.get(N);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=q,p++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[S]=q,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==T||I.rectAreaLength!==C||I.hemiLength!==S||I.numSunShadows!==x||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==w||I.numSpotMaps!==_||I.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=C,n.point.length=p,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=T,I.rectAreaLength=C,I.hemiLength=S,I.numSunShadows=x,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=w,I.numSpotMaps=_,I.numLightProbes=P,n.version=gg++)}function c(l,h){let d=0,u=0,f=0,x=0,v=0,m=0;const p=h.matrixWorldInverse;for(let T=0,C=l.length;T<C;T++){const S=l[T];if(S.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isSpotLight){const b=n.spot[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Ec(i){const e=new xg(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function vg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ec(i),e.set(s,[o])):r>=a.length?(o=new Ec(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Eg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],bc=new tt,_s=new R,Fa=new R;function bg(i,e,t){let n=new rl;const s=new ve,r=new ve,a=new dt,o=new Rd,c=new Cd,l={},h=t.maxTextureSize,d={[pi]:Vt,[Vt]:pi,[xn]:xn},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new pt;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Be(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let p=this.type;this.render=function(E,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ih&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);const y=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Mn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=E.length;N<B;N++){const Z=E[N],k=Z.shadow;if(k===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Es){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new kt(s.x,s.y,{format:_i,type:qt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new Os(s.x,s.y,un),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Un,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt}else Z.isPointLight?(k.map=new Cu(s.x),k.map.depthTexture=new cd(s.x,En)):(k.map=new kt(s.x,s.y),k.map.depthTexture=new Os(s.x,s.y,En)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Un,this.type===As?(k.map.depthTexture.compareFunction=q?nl:tl,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const X=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,_);for(let J=0;J<X;J++){const Me=k.getCamera(J);if(Z.isPointLight){const me=k.camera,Xe=k.matrix,Ge=Z.distance||me.far;Ge!==me.far&&(me.far=Ge,me.updateProjectionMatrix()),_s.setFromMatrixPosition(Z.matrixWorld),me.position.copy(_s),Fa.copy(me.position),Fa.add(yg[J]),me.up.copy(Eg[J]),me.lookAt(Fa),me.updateMatrixWorld(),Xe.makeTranslation(-_s.x,-_s.y,-_s.z),bc.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(bc,me.coordinateSystem,me.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,J),i.clear();else{J===0&&(i.setRenderTarget(k.map),i.clear());const me=k.getViewport(J);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),F.viewport(a)}n=k.getFrustum(J),S(w,_,Me,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Es&&T(k,_),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,P,I)};function T(E,w){const _=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new kt(s.x,s.y,{format:_i,type:qt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,_,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,_,f,v,null)}function C(E,w,_,y){let P=null;const I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=P.uuid,H=w.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let B=N[H];B===void 0&&(B=P.clone(),N[H]=B,w.addEventListener("dispose",b)),P=B}if(P.visible=w.visible,P.wireframe=w.wireframe,y===Es?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=i.properties.get(P);F.light=_}return P}function S(E,w,_,y,P){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const H=e.update(E),N=E.material;if(Array.isArray(N)){const B=H.groups;for(let Z=0,k=B.length;Z<k;Z++){const ne=B[Z],q=N[ne.materialIndex];if(q&&q.visible){const X=C(E,q,y,P);E.onBeforeShadow(i,E,w,_,H,X,ne),i.renderBufferDirect(_,null,H,X,E,ne),E.onAfterShadow(i,E,w,_,H,X,ne)}}}else if(N.visible){const B=C(E,N,y,P);E.onBeforeShadow(i,E,w,_,H,B,null),i.renderBufferDirect(_,null,H,B,E,null),E.onAfterShadow(i,E,w,_,H,B,null)}}const F=E.children;for(let H=0,N=F.length;H<N;H++)S(F[H],w,_,y,P)}function b(E){E.target.removeEventListener("dispose",b);for(const _ in l){const y=l[_],P=E.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}function Tg(i,e){function t(){let D=!1;const oe=new dt;let Q=null;const le=new dt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){D=pe},setClear:function(pe,te,Re,be,rt){rt===!0&&(pe*=be,te*=be,Re*=be),oe.set(pe,te,Re,be),le.equals(oe)===!1&&(i.clearColor(pe,te,Re,be),le.copy(oe))},reset:function(){D=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,Q=null,le=null,pe=null;return{setReversed:function(te){if(oe!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const be=pe;pe=null,this.setClear(be)}},getReversed:function(){return oe},setTest:function(te){te?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(te){Q!==te&&!D&&(i.depthMask(te),Q=te)},setFunc:function(te){if(oe&&(te=Bh[te]),le!==te){switch(te){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=te}},setLocked:function(te){D=te},setClear:function(te){pe!==te&&(pe=te,oe&&(te=1-te),i.clearDepth(te))},reset:function(){D=!1,Q=null,le=null,pe=null,oe=!1}}}function s(){let D=!1,oe=null,Q=null,le=null,pe=null,te=null,Re=null,be=null,rt=null;return{setTest:function(Ze){D||(Ze?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!D&&(i.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,rn,dn){(Q!==Ze||le!==rn||pe!==dn)&&(i.stencilFunc(Ze,rn,dn),Q=Ze,le=rn,pe=dn)},setOp:function(Ze,rn,dn){(te!==Ze||Re!==rn||be!==dn)&&(i.stencilOp(Ze,rn,dn),te=Ze,Re=rn,be=dn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){rt!==Ze&&(i.clearStencil(Ze),rt=Ze)},reset:function(){D=!1,oe=null,Q=null,le=null,pe=null,te=null,Re=null,be=null,rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,x=[],v=null,m=!1,p=null,T=null,C=null,S=null,b=null,E=null,w=null,_=new Ce(0,0,0),y=0,P=!1,I=null,F=null,H=null,N=null,B=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ne>=2);let X=null,J={};const Me=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Xe=new dt().fromArray(Me),Ge=new dt().fromArray(me);function qe(D,oe,Q,le){const pe=new Uint8Array(4),te=i.createTexture();i.bindTexture(D,te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Q;Re++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(oe+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return te}const Y={};Y[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Is),ke(!1),ct(yl),ee(i.CULL_FACE),Ke(Mn);function ee(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function De(D,oe){return u[D]!==oe?(i.bindFramebuffer(D,oe),u[D]=oe,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(D,oe){let Q=x,le=!1;if(D){Q=f.get(oe),Q===void 0&&(Q=[],f.set(oe,Q));const pe=D.textures;if(Q.length!==pe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Re=pe.length;te<Re;te++)Q[te]=i.COLOR_ATTACHMENT0+te;Q.length=pe.length,le=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,le=!0);le&&i.drawBuffers(Q)}function Oe(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const St={[zi]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};St[oh]=i.MIN,St[lh]=i.MAX;const He={[ch]:i.ZERO,[uh]:i.ONE,[hh]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[fh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[eu]:i.ONE_MINUS_SRC_ALPHA,[gh]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[vh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,oe,Q,le,pe,te,Re,be,rt,Ze){if(D===Mn){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),D!==sh){if(D!==p||Ze!==P){if((T!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),T=zi,b=zi),Ze)switch(D){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",D);break}else switch(D){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",D);break}C=null,S=null,E=null,w=null,_.set(0,0,0),y=0,p=D,P=Ze}return}pe=pe||oe,te=te||Q,Re=Re||le,(oe!==T||pe!==b)&&(i.blendEquationSeparate(St[oe],St[pe]),T=oe,b=pe),(Q!==C||le!==S||te!==E||Re!==w)&&(i.blendFuncSeparate(He[Q],He[le],He[te],He[Re]),C=Q,S=le,E=te,w=Re),(be.equals(_)===!1||rt!==y)&&(i.blendColor(be.r,be.g,be.b,rt),_.copy(be),y=rt),p=D,P=!1}function st(D,oe){D.side===xn?Se(i.CULL_FACE):ee(i.CULL_FACE);let Q=D.side===Vt;oe&&(Q=!Q),ke(Q),D.blending===ws&&D.transparent===!1?Ke(Mn):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const le=D.stencilWrite;o.setTest(le),le&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function ct(D){D!==th?(ee(i.CULL_FACE),D!==F&&(D===yl?i.cullFace(i.BACK):D===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),F=D}function bt(D){D!==H&&(k&&i.lineWidth(D),H=D)}function Wt(D,oe,Q){D?(ee(i.POLYGON_OFFSET_FILL),(N!==oe||B!==Q)&&(N=oe,B=Q,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Q))):Se(i.POLYGON_OFFSET_FILL)}function ht(D){D?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function _t(D){D===void 0&&(D=i.TEXTURE0+Z-1),X!==D&&(i.activeTexture(D),X=D)}function U(D,oe,Q){Q===void 0&&(X===null?Q=i.TEXTURE0+Z-1:Q=X);let le=J[Q];le===void 0&&(le={type:void 0,texture:void 0},J[Q]=le),(le.type!==D||le.texture!==oe)&&(X!==Q&&(i.activeTexture(Q),X=Q),i.bindTexture(D,oe||Y[D]),le.type=D,le.texture=oe)}function Pt(){const D=J[X];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function se(){try{i.texStorage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function $(){try{i.texImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function re(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Ae(D,oe){d[D]!==oe&&(i.pixelStorei(D,oe),d[D]=oe)}function ce(D){Xe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function ae(D){Ge.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function we(D,oe){let Q=l.get(oe);Q===void 0&&(Q=new WeakMap,l.set(oe,Q));let le=Q.get(D);le===void 0&&(le=i.getUniformBlockIndex(oe,D.name),Q.set(D,le))}function Pe(D,oe){const le=l.get(oe).get(D);c.get(oe)!==le&&(i.uniformBlockBinding(oe,le,D.__bindingPointIndex),c.set(oe,le))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,J={},u={},f=new WeakMap,x=[],v=null,m=!1,p=null,T=null,C=null,S=null,b=null,E=null,w=null,_=new Ce(0,0,0),y=0,P=!1,I=null,F=null,H=null,N=null,B=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Se,bindFramebuffer:De,drawBuffers:_e,useProgram:Oe,setBlending:Ke,setMaterial:st,setFlipSided:ke,setCullFace:ct,setLineWidth:bt,setPolygonOffset:Wt,setScissorTest:ht,activeTexture:_t,bindTexture:U,unbindTexture:Pt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:$,texImage3D:j,pixelStorei:Ae,getParameter:re,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:se,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ce,viewport:ae,reset:Ue}}function Ag(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,g){return x?new OffscreenCanvas(A,g):Ur("canvas")}function m(A,g,O){let V=1;const K=je(A);if((K.width>O||K.height>O)&&(V=O/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(V*K.width),se=Math.floor(V*K.height);u===void 0&&(u=v(ie,se));const $=g?v(ie,se):u;return $.width=ie,$.height=se,$.getContext("2d").drawImage(A,0,0,ie,se),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+se+")."),$}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,g,O,V,K,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;V&&(se=e.get("EXT_texture_norm16"),se||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&se&&($=se.R16_EXT),O===i.SHORT&&se&&($=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),g===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),O===i.SHORT&&se&&($=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),O===i.SHORT&&se&&($=se.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const j=ie?Ir:We.getTransfer(K);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=j===Qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),O===i.SHORT&&se&&($=se.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(A,g){let O;return A?g===null||g===En||g===Ns?O=i.DEPTH24_STENCIL8:g===un?O=i.DEPTH32F_STENCIL8:g===Us&&(O=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===En||g===Ns?O=i.DEPTH_COMPONENT24:g===un?O=i.DEPTH_COMPONENT32F:g===Us&&(O=i.DEPTH_COMPONENT16),O}function E(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function w(A){const g=A.target;g.removeEventListener("dispose",w),y(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),I(g)}function y(A){const g=n.get(A);if(g.__webglInit===void 0)return;const O=A.source,V=f.get(O);if(V){const K=V[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(A),Object.keys(V).length===0&&f.delete(O)}n.remove(A)}function P(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const O=A.source,V=f.get(O);delete V[g.__cacheKey],a.memory.textures--}function I(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let K=0;K<g.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[V][K]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let V=0,K=O.length;V<K;V++){const ie=n.get(O[V]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(A)}let F=0;function H(){F=0}function N(){return F}function B(A){F=A}function Z(){const A=F;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function k(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ne(A,g){const O=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const V=A.image;if(V===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function q(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Se(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function X(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Se(O,A,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function J(A,g){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){De(O,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Me={[gi]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},me={[Rt]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Xe={[Rh]:i.NEVER,[Ih]:i.ALWAYS,[Ch]:i.LESS,[tl]:i.LEQUAL,[Ph]:i.EQUAL,[nl]:i.GEQUAL,[Lh]:i.GREATER,[Dh]:i.NOTEQUAL};function Ge(A,g){if(g.type===un&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===ta||g.magFilter===Xs||g.magFilter===ci||g.minFilter===Nt||g.minFilter===ta||g.minFilter===Xs||g.minFilter===ci)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Me[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Me[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Me[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,me[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==Xs&&g.minFilter!==ci||g.type===un&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qe(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",w));const V=g.source;let K=f.get(V);K===void 0&&(K={},f.set(V,K));const ie=k(g);if(ie!==A.__cacheKey){K[ie]===void 0&&(K[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[ie].usedTimes++;const se=K[A.__cacheKey];se!==void 0&&(K[A.__cacheKey].usedTimes--,se.usedTimes===0&&P(g)),A.__cacheKey=ie,A.__webglTexture=K[ie].texture}return O}function Y(A,g,O){return Math.floor(Math.floor(A/O)/g)}function ee(A,g,O,V){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{ie.sort((Ae,ce)=>Ae.start-ce.start);let se=0;for(let Ae=1;Ae<ie.length;Ae++){const ce=ie[se],ae=ie[Ae],we=ce.start+ce.count,Pe=Y(ae.start,g.width,4),Ue=Y(ce.start,g.width,4);ae.start<=we+1&&Pe===Ue&&Y(ae.start+ae.count-1,g.width,4)===Pe?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ae=0,ce=ie.length;Ae<ce;Ae++){const ae=ie[Ae],we=Math.floor(ae.start/4),Pe=Math.ceil(ae.count/4),Ue=we%g.width,D=Math.floor(we/g.width),oe=Pe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ue,D,oe,Q,O,V,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function Se(A,g,O){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const K=qe(A,g),ie=g.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+O);const se=n.get(ie);if(ie.version!==se.__version||K===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=We.getPrimaries(We.workingColorSpace),le=g.colorSpace===Cn?null:We.getPrimaries(g.colorSpace),pe=g.colorSpace===Cn||Q===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=m(g.image,!1,s.maxTextureSize);j=Pt(g,j);const re=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type);let ce=S(g.internalFormat,re,Ae,g.normalized,g.colorSpace,g.isVideoTexture);Ge(V,g);let ae;const we=g.mipmaps,Pe=g.isVideoTexture!==!0,Ue=se.__version===void 0||K===!0,D=ie.dataReady,oe=E(g,j);if(g.isDepthTexture)ce=b(g.format===ui,g.type),Ue&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,ce,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,re,Ae,null));else if(g.isDataTexture)if(we.length>0){Pe&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,we[0].width,we[0].height);for(let Q=0,le=we.length;Q<le;Q++)ae=we[Q],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,Q,ce,ae.width,ae.height,0,re,Ae,ae.data);g.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,j.width,j.height),D&&ee(g,j,re,Ae)):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,re,Ae,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,we[0].width,we[0].height,j.depth);for(let Q=0,le=we.length;Q<le;Q++)if(ae=we[Q],g.format!==hn)if(re!==null)if(Pe){if(D)if(g.layerUpdates.size>0){const pe=ic(ae.width,ae.height,g.format,g.type);for(const te of g.layerUpdates){const Re=ae.data.subarray(te*pe/ae.data.BYTES_PER_ELEMENT,(te+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,te,ae.width,ae.height,1,re,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,j.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ce,ae.width,ae.height,j.depth,0,ae.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,j.depth,re,Ae,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ce,ae.width,ae.height,j.depth,0,re,Ae,ae.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,we[0].width,we[0].height);for(let Q=0,le=we.length;Q<le;Q++)ae=we[Q],g.format!==hn?re!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ce,ae.width,ae.height,0,ae.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,Q,ce,ae.width,ae.height,0,re,Ae,ae.data)}else if(g.isDataArrayTexture)if(Pe){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,j.width,j.height,j.depth),D)if(g.layerUpdates.size>0){const Q=ic(j.width,j.height,g.format,g.type);for(const le of g.layerUpdates){const pe=j.data.subarray(le*Q/j.data.BYTES_PER_ELEMENT,(le+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,j.width,j.height,1,re,Ae,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,re,Ae,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,re,Ae,j.data);else if(g.isData3DTexture)Pe?(Ue&&t.texStorage3D(i.TEXTURE_3D,oe,ce,j.width,j.height,j.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,re,Ae,j.data)):t.texImage3D(i.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,re,Ae,j.data);else if(g.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(i.TEXTURE_2D,oe,ce,j.width,j.height);else{let Q=j.width,le=j.height;for(let pe=0;pe<oe;pe++)t.texImage2D(i.TEXTURE_2D,pe,ce,Q,le,0,re,Ae,null),Q>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(g),Q.onpaint=le=>{const pe=le.changedElements;for(const te of d)pe.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const pe=i.RGBA,te=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,te,Re,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&Ue){const Q=je(we[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,Q.width,Q.height)}for(let Q=0,le=we.length;Q<le;Q++)ae=we[Q],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re,Ae,ae):t.texImage2D(i.TEXTURE_2D,Q,ce,re,Ae,ae);g.generateMipmaps=!1}else if(Pe){if(Ue){const Q=je(j);t.texStorage2D(i.TEXTURE_2D,oe,ce,Q.width,Q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Ae,j)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,Ae,j);p(g)&&T(V),se.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function De(A,g,O){if(g.image.length!==6)return;const V=qe(A,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const ie=n.get(K);if(K.version!==ie.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const se=We.getPrimaries(We.workingColorSpace),$=g.colorSpace===Cn?null:We.getPrimaries(g.colorSpace),j=g.colorSpace===Cn||se===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,Ae=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!re&&!Ae?ce[te]=m(g.image[te],!0,s.maxCubemapSize):ce[te]=Ae?g.image[te].image:g.image[te],ce[te]=Pt(g,ce[te]);const ae=ce[0],we=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),Ue=S(g.internalFormat,we,Pe,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,oe=ie.__version===void 0||V===!0,Q=K.dataReady;let le=E(g,ae);Ge(i.TEXTURE_CUBE_MAP,g);let pe;if(re){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ue,ae.width,ae.height);for(let te=0;te<6;te++){pe=ce[te].mipmaps;for(let Re=0;Re<pe.length;Re++){const be=pe[Re];g.format!==hn?we!==null?D?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,be.width,be.height,0,be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,be.width,be.height,we,Pe,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,be.width,be.height,0,we,Pe,be.data)}}}else{if(pe=g.mipmaps,D&&oe){pe.length>0&&le++;const te=je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,we,Pe,ce[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ce[te].width,ce[te].height,0,we,Pe,ce[te].data);for(let Re=0;Re<pe.length;Re++){const rt=pe[Re].image[te].image;D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,rt.width,rt.height,we,Pe,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,rt.width,rt.height,0,we,Pe,rt.data)}}else{D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,Pe,ce[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,we,Pe,ce[te]);for(let Re=0;Re<pe.length;Re++){const be=pe[Re];D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,we,Pe,be.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,we,Pe,be.image[te])}}}p(g)&&T(i.TEXTURE_CUBE_MAP),ie.__version=K.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _e(A,g,O,V,K,ie){const se=r.convert(O.format,O.colorSpace),$=r.convert(O.type),j=S(O.internalFormat,se,$,O.normalized,O.colorSpace),re=n.get(g),Ae=n.get(O);if(Ae.__renderTarget=g,!re.__hasExternalTextures){const ce=Math.max(1,g.width>>ie),ae=Math.max(1,g.height>>ie);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,j,ce,ae,g.depth,0,se,$,null):t.texImage2D(K,ie,j,ce,ae,0,se,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Ae.__webglTexture,0,ht(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Ae.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const V=g.depthTexture,K=V&&V.isDepthTexture?V.type:null,ie=b(g.stencilBuffer,K),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),ie,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,A)}else{const V=g.textures;for(let K=0;K<V.length;K++){const ie=V[K],se=r.convert(ie.format,ie.colorSpace),$=r.convert(ie.type),j=S(ie.internalFormat,se,$,ie.normalized,ie.colorSpace);_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),j,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(A,g,O){const V=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,g.depthTexture);const re=r.convert(g.depthTexture.format),Ae=r.convert(g.depthTexture.type);let ce;g.depthTexture.format===Un?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===ui&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,g.width,g.height,0,re,Ae,null)}}else ne(g.depthTexture,0);const ie=K.__webglTexture,se=ht(g),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=g.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Un)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ie,0);else if(g.depthTexture.format===ui)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(A){const g=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=V}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)St(g.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?St(g.__webglFramebuffer[0],A,0):St(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[V],A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(A,g,O){const V=n.get(A);g!==void 0&&_e(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&He(A)}function st(A){const g=A.texture,O=n.get(A),V=n.get(g);A.addEventListener("dispose",_);const K=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=K.length>1;if(se||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),ie){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<g.mipmaps.length;j++)O.__webglFramebuffer[$][j]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(se)for(let $=0,j=K.length;$<j;$++){const re=n.get(K[$]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_t(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const j=K[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const re=r.convert(j.format,j.colorSpace),Ae=r.convert(j.type),ce=S(j.internalFormat,re,Ae,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),ae=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)_e(O.__webglFramebuffer[$][j],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else _e(O.__webglFramebuffer[$],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,j=K.length;$<j;$++){const re=K[$],Ae=n.get(re);let ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Ae.__webglTexture),Ge(ce,re),_e(O.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+$,ce,0),p(re)&&T(ce)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),Ge($,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)_e(O.__webglFramebuffer[j],A,g,i.COLOR_ATTACHMENT0,$,j);else _e(O.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,$,0);p(g)&&T($),t.unbindTexture()}A.depthBuffer&&He(A)}function ke(A){const g=A.textures;for(let O=0,V=g.length;O<V;O++){const K=g[O];if(p(K)){const ie=C(A),se=n.get(K).__webglTexture;t.bindTexture(ie,se),T(ie),t.unbindTexture()}}}const ct=[],bt=[];function Wt(A){if(A.samples>0){if(_t(A)===!1){const g=A.textures,O=A.width,V=A.height;let K=i.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),$=g.length>1;if($)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const j=A.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ae=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,K,i.NEAREST),c===!0&&(ct.length=0,bt.length=0,ct.push(i.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ct.push(ie),bt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ae=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function _t(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){const g=a.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Pt(A,g){const O=A.colorSpace,V=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Dr&&O!==Cn&&(We.getTransfer(O)===Qe?(V!==hn||K!==Zt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",O)),g}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=Ke,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wg(i,e){function t(n,s=Cn){let r;const a=We.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===qt)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===lu)return i.RGB;if(n===hn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===yr||n===Er||n===br||n===Tr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===Pr||n===lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ao)return r.COMPRESSED_R11_EAC;if(n===oo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pr)return r.COMPRESSED_RG11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===To||n===Ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===Ro||n===Lr||n===Co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ft({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends Si{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null;const v=typeof XRWebGLBinding<"u",m=new Pg,p={},T=t.getContextAttributes();let C=null,S=null;const b=[],E=[],w=new ve;let _=null,y=null;const P=new nn;P.viewport=new dt;const I=new nn;I.viewport=new dt;const F=[P,I],H=new Nd;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ua,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ua,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ua,b[Y]=ee),ee.getHandSpace()};function Z(Y){const ee=E.indexOf(Y.inputSource);if(ee===-1)return;const Se=b[ee];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<b.length;Y++){const ee=E[Y];ee!==null&&(E[Y]=null,b[Y].disconnect(ee))}N=null,B=null,m.reset();for(const Y in p)delete p[Y];if(e.setRenderTarget(C),f=null,u=null,d=null,s=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),y!==null){const Y=y.camera;Y.fov=y.fov,Y.zoom=y.zoom,Y.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,De=null,_e=null;T.depth&&(_e=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=T.stencil?ui:Un,De=T.stencil?Ns:En);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new kt(u.textureWidth,u.textureHeight,{format:hn,type:Zt,depthTexture:new Os(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new kt(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let ee=0;ee<Y.removed.length;ee++){const Se=Y.removed[ee],De=E.indexOf(Se);De>=0&&(E[De]=null,b[De].disconnect(Se))}for(let ee=0;ee<Y.added.length;ee++){const Se=Y.added[ee];let De=E.indexOf(Se);if(De===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=E.length){E.push(Se),De=Oe;break}else if(E[Oe]===null){E[Oe]=Se,De=Oe;break}if(De===-1)break}const _e=b[De];_e&&_e.connect(Se)}}const q=new R,X=new R;function J(Y,ee,Se){q.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);const De=q.distanceTo(X),_e=ee.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,St=_e[14]/(_e[10]-1),He=_e[14]/(_e[10]+1),Ke=(_e[9]+1)/_e[5],st=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],ct=(Oe[8]+1)/Oe[0],bt=St*ke,Wt=St*ct,ht=De/(-ke+ct),_t=ht*-ke;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_t),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const U=St+ht,Pt=He+ht,je=bt-_t,A=Wt+(De-_t),g=Ke*He/Pt*U,O=st*He/Pt*U;Y.projectionMatrix.makePerspective(je,A,g,O,U,Pt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,Se=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),H.near=I.near=P.near=ee,H.far=I.far=P.far=Se,(N!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,B=H.far),H.layers.mask=Y.layers.mask|6,P.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;const De=Y.parent,_e=H.cameras;Me(H,De);for(let Oe=0;Oe<_e.length;Oe++)Me(_e[Oe],De);_e.length===2?J(H,P,I):H.projectionMatrix.copy(P.projectionMatrix),y===null&&Y.isPerspectiveCamera&&(y={camera:Y,fov:Y.fov,zoom:Y.zoom}),me(Y,H,De)};function me(Y,ee,Se){Se===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Lo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Xe=null;function Ge(Y,ee){if(h=ee.getViewerPose(l||a),x=ee,h!==null){const Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let De=!1;Se.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let He=0;He<Se.length;He++){const Ke=Se[He];let st=null;if(f!==null)st=f.getViewport(Ke);else{const ct=d.getViewSubImage(u,Ke);st=ct.viewport,He===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let ke=F[He];ke===void 0&&(ke=new nn,ke.layers.enable(He),ke.viewport=new dt,F[He]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),He===0&&(H.matrix.copy(ke.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(ke)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const He=d.getDepthInformation(Se[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<Se.length;He++){const Ke=Se[He].camera;if(Ke){let st=p[Ke];st||(st=new xu,p[Ke]=st);const ke=d.getCameraImage(Ke);st.sourceTexture=ke}}}}for(let Se=0;Se<b.length;Se++){const De=E[Se],_e=b[Se];De!==null&&_e!==void 0&&_e.update(De,ee,l||a)}Xe&&Xe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}const qe=new wu;qe.setAnimationLoop(Ge),this.setAnimationLoop=function(Y){Xe=Y},this.dispose=function(){}}}const Dg=new tt,Uu=new Ie;Uu.set(-1,0,0,0,1,0,0,0,1);function Ig(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,C,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,C):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),C=T.envMap,S=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=s[S.id];E===void 0&&(m(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",T));const w=b.program;n.updateUBOMapping(S,w);const _=e.render.frame;r[S.id]!==_&&(u(S),r[S.id]=_)}function h(S){const b=d();S.__bindingPointIndex=b;const E=i.createBuffer(),w=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],E=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,y=E.length;_<y;_++){const P=E[_];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)f(P[I],_,I,w);else f(P,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,E,w){if(v(S,b,E,w)===!0){const _=S.__offset,y=S.value;if(Array.isArray(y)){let P=0;for(let I=0;I<y.length;I++){const F=y[I],H=p(F);x(F,S.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(y,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function x(S,b,E){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,E)}function v(S,b,E,w){const _=S.value,y=b+"_"+E;if(w[y]===void 0)return typeof _=="number"||typeof _=="boolean"?w[y]=_:ArrayBuffer.isView(_)?w[y]=_.slice():w[y]=_.clone(),!0;{const P=w[y];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(S){const b=S.uniforms;let E=0;const w=16;for(let y=0,P=b.length;y<P;y++){const I=Array.isArray(b[y])?b[y]:[b[y]];for(let F=0,H=I.length;F<H;F++){const N=I[F],B=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,k=B.length;Z<k;Z++){const ne=B[Z],q=p(ne),X=E%w,J=X%q.boundary,Me=X+J;E+=J,Me!==0&&w-Me<q.storage&&(E+=w-Me),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}const _=E%w;return _>0&&(E+=w-_),S.__size=E,S.__cache={},this}function p(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),b}function T(S){const b=S.target;b.removeEventListener("dispose",T);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function C(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}const Ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Fg(){return mn===null&&(mn=new gu(Ng,16,16,_i,qt),mn.name="DFG_LUT",mn.minFilter=Nt,mn.magFilter=Nt,mn.wrapS=Pn,mn.wrapT=Pn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class Og{constructor(e={}){const{canvas:t=Fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=f,m=new Set([el,jo,Qo]),p=new Set([Zt,En,Us,Ns,Jo,Zo]),T=new Uint32Array(4),C=new Int32Array(4),S=new R;let b=null,E=null;const w=[],_=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,F=null,H=null,N=null,B=null;this._outputColorSpace=Ht;let Z=0,k=0,ne=null,q=-1,X=null;const J=new dt,Me=new dt;let me=null;const Xe=new Ce(0);let Ge=0,qe=t.width,Y=t.height,ee=1,Se=null,De=null;const _e=new dt(0,0,qe,Y),Oe=new dt(0,0,qe,Y);let St=!1;const He=new rl;let Ke=!1,st=!1;const ke=new tt,ct=new R,bt=new dt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function _t(){return ne===null?ee:1}let U=n;function Pt(M,L){return t.getContext(M,L)}let je,A,g,O,V,K,ie,se,$,j,re,Ae,ce,ae,we,Pe,Ue,D,oe,Q,le,pe,te;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",rn,!1),U===null){const L="webgl2";if(U=Pt(L,M),U===null)throw Pt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(M){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Je("WebGLRenderer: "+M.message),M}function Re(){je=new Fm(U),je.init(),le=new wg(U,je),A=new Am(U,je,e,le),g=new Tg(U,je),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),B=U.createFramebuffer(),O=new zm(U),V=new hg,K=new Ag(U,je,g,V,A,le,O),ie=new Nm(P),se=new Gd(U),pe=new bm(U,se),$=new Om(U,se,O,pe),j=new Hm(U,$,se,pe,O),D=new Gm(U,A,K),we=new wm(V),re=new ug(P,ie,je,A,pe,we),Ae=new Ig(P,V),ce=new fg,ae=new vg(je),Ue=new Em(P,ie,g,j,x,c),Pe=new bg(P,j,A),te=new Ug(U,O,A,g),oe=new Tm(U,je,O),Q=new Bm(U,je,O),O.programs=re.programs,P.capabilities=A,P.extensions=je,P.properties=V,P.renderLists=ce,P.shadowMap=Pe,P.state=g,P.info=O}v!==Zt&&(y=new km(v,t.width,t.height,o,s,r));const be=new Lg(P,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(qe,Y,!1))},this.getSize=function(M){return M.set(qe,Y)},this.setSize=function(M,L,W=!0){if(be.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=M,Y=L,t.width=Math.floor(M*ee),t.height=Math.floor(L*ee),W===!0&&(t.style.width=M+"px",t.style.height=L+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(qe*ee,Y*ee).floor()},this.setDrawingBufferSize=function(M,L,W){qe=M,Y=L,ee=W,t.width=Math.floor(M*W),t.height=Math.floor(L*W),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(v===Zt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,L,W,z){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,L,W,z),g.viewport(J.copy(_e).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,L,W,z){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,L,W,z),g.scissor(Me.copy(Oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(M){g.setScissorTest(St=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){De=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,W=!0){let z=0;if(M){let G=!1;if(ne!==null){const fe=ne.texture.format;G=m.has(fe)}if(G){const fe=ne.texture.type,xe=p.has(fe),de=Ue.getClearColor(),ye=Ue.getClearAlpha(),Te=de.r,Ne=de.g,Ve=de.b;xe?(T[0]=Te,T[1]=Ne,T[2]=Ve,T[3]=ye,U.clearBufferuiv(U.COLOR,0,T)):(C[0]=Te,C[1]=Ne,C[2]=Ve,C[3]=ye,U.clearBufferiv(U.COLOR,0,C))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ue.dispose(),ce.dispose(),ae.dispose(),V.dispose(),ie.dispose(),j.dispose(),pe.dispose(),te.dispose(),re.dispose(),be.dispose(),be.removeEventListener("sessionstart",fl),be.removeEventListener("sessionend",pl),ni.stop()};function rt(M){M.preventDefault(),wl("WebGLRenderer: Context Lost."),I=!0}function Ze(){wl("WebGLRenderer: Context Restored."),I=!1;const M=O.autoReset,L=Pe.enabled,W=Pe.autoUpdate,z=Pe.needsUpdate,G=Pe.type;Re(),O.autoReset=M,Pe.enabled=L,Pe.autoUpdate=W,Pe.needsUpdate=z,Pe.type=G}function rn(M){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function dn(M){const L=M.target;L.removeEventListener("dispose",dn),Ku(L)}function Ku(M){Ju(M),V.remove(M)}function Ju(M){const L=V.get(M).programs;L!==void 0&&(L.forEach(function(W){re.releaseProgram(W)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,W,z,G,fe){L===null&&(L=Wt);const xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=Qu(M,L,W,z,G);g.setMaterial(z,xe);let ye=W.index,Te=1;if(z.wireframe===!0){if(ye=$.getWireframeAttribute(W),ye===void 0)return;Te=2}const Ne=W.drawRange,Ve=W.attributes.position;let Ee=Ne.start*Te,$e=(Ne.start+Ne.count)*Te;fe!==null&&(Ee=Math.max(Ee,fe.start*Te),$e=Math.min($e,(fe.start+fe.count)*Te)),ye!==null?(Ee=Math.max(Ee,0),$e=Math.min($e,ye.count)):Ve!=null&&(Ee=Math.max(Ee,0),$e=Math.min($e,Ve.count));const xt=$e-Ee;if(xt<0||xt===1/0)return;pe.setup(G,z,de,W,ye);let ot,it=oe;if(ye!==null&&(ot=se.get(ye),it=Q,it.setIndex(ot)),G.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*_t()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(G.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),g.setLineWidth(Lt*_t()),G.isLineSegments?it.setMode(U.LINES):G.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else G.isPoints?it.setMode(U.POINTS):G.isSprite&&it.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,ge=G._multiDrawCounts,Bt=G._multiDrawCount,Ye=ye?se.get(ye).bytesPerElement:1,Qt=V.get(z).currentProgram.getUniforms();for(let fn=0;fn<Bt;fn++)Qt.setValue(U,"_gl_DrawID",fn),it.render(Lt[fn]/Ye,ge[fn])}else if(G.isInstancedMesh)it.renderInstances(Ee,xt,G.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Lt);it.renderInstances(Ee,xt,ge)}else it.render(Ee,xt)};function dl(M,L,W,z){F!==null&&M.isNodeMaterial&&F.setObject(z,M),Ke===!0&&we.setState(M,W,!1),M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,Ws(M,L,z),M.side=pi,M.needsUpdate=!0,Ws(M,L,z),M.side=xn):Ws(M,L,z)}this.compile=function(M,L,W=null){W===null&&(W=M),F!==null&&F.renderStart(M,L,W),E=ae.get(W),E.init(L),_.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),st=this.localClippingEnabled,Ke=we.init(this.clippingPlanes,st),Ke===!0&&we.setGlobalState(this.clippingPlanes,L),F!==null&&Pe.render(E.state.shadowsArray,W,L);const z=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const de=fe[xe];dl(de,W,L,G),z.add(de)}else dl(fe,W,L,G),z.add(fe)}),E=_.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(M,L,W=null){const z=this.compile(M,L,W);return new Promise(G=>{function fe(){if(z.forEach(function(xe){const ye=V.get(xe).currentProgram;(ye===void 0||ye.isReady())&&z.delete(xe)}),z.size===0){G(M);return}setTimeout(fe,10)}je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Qr=null;function Zu(M){Qr&&Qr(M)}function fl(){ni.stop()}function pl(){ni.start()}const ni=new wu;ni.setAnimationLoop(Zu),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(M){Qr=M,be.setAnimationLoop(M),M===null?ni.stop():ni.start()},be.addEventListener("sessionstart",fl),be.addEventListener("sessionend",pl),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(M,L);const W=be.enabled===!0&&be.isPresenting===!0,z=y!==null&&(ne===null||W)&&y.begin(P,ne);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(L),L=be.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,L,ne),E=ae.get(M,_.length),E.init(L),E.state.textureUnits=K.getTextureUnits(),_.push(E),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),He.setFromProjectionMatrix(ke,vn,L.reversedDepth),st=this.localClippingEnabled,Ke=we.init(this.clippingPlanes,st),b=ce.get(M,w.length),b.init(),w.push(b),be.enabled===!0&&be.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&jr(xe,L,-1/0,P.sortObjects)}jr(M,L,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&b.sort(Se,De),ht=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ht&&Ue.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&we.beginShadows();const G=E.state.shadowsArray;if(Pe.render(G,M,L),Ke===!0&&we.endShadows(),(z&&y.hasRenderPass())===!1){const xe=b.opaque,de=b.transmissive;if(E.setupLights(),L.isArrayCamera){const ye=L.cameras;if(de.length>0)for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ve=ye[Te];gl(xe,de,M,Ve)}ht&&Ue.render(M);for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ve=ye[Te];ml(b,M,Ve,Ve.viewport)}}else de.length>0&&gl(xe,de,M,L),ht&&Ue.render(M),ml(b,M,L)}ne!==null&&k===0&&(K.updateMultisampleRenderTarget(ne),K.updateRenderTargetMipmap(ne)),z&&y.end(P),M.isScene===!0&&M.onAfterRender(P,M,L),pe.resetDefaultState(),q=-1,X=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),Ke===!0&&we.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,F!==null&&F.renderEnd()};function jr(M,L,W,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(He)){z&&bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ke);const xe=j.update(M),de=M.material;de.visible&&b.push(M,xe,de,W,bt.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(He))){const xe=j.update(M),de=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),bt.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),bt.copy(xe.boundingSphere.center)),bt.applyMatrix4(M.matrixWorld).applyMatrix4(ke)),Array.isArray(de)){const ye=xe.groups;for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ve=ye[Te],Ee=de[Ve.materialIndex];Ee&&Ee.visible&&b.push(M,xe,Ee,W,bt.z,Ve,L)}}else de.visible&&b.push(M,xe,de,W,bt.z,null,L)}}const fe=M.children;for(let xe=0,de=fe.length;xe<de;xe++)jr(fe[xe],L,W,z)}function ml(M,L,W,z){const{opaque:G,transmissive:fe,transparent:xe}=M;E.setupLightsView(W),Ke===!0&&we.setGlobalState(P.clippingPlanes,W),z&&g.viewport(J.copy(z)),G.length>0&&ks(G,L,W),fe.length>0&&ks(fe,L,W),xe.length>0&&ks(xe,L,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function gl(M,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Ee=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new kt(1,1,{generateMipmaps:!0,type:Ee?qt:Zt,minFilter:ci,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const fe=E.state.transmissionRenderTarget[z.id],xe=z.viewport||J;fe.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const de=P.getRenderTarget(),ye=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(Xe),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),ht&&Ue.render(W);const Ne=P.toneMapping;P.toneMapping=Sn;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Ke===!0&&we.setGlobalState(P.clippingPlanes,z),ks(M,W,z),K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let $e=0,xt=L.length;$e<xt;$e++){const ot=L[$e],{object:it,geometry:Lt,material:ge,group:Bt}=ot;if(ge.side===xn&&it.layers.test(z.layers)){const Ye=ge.side;ge.side=Vt,ge.needsUpdate=!0,_l(it,W,z,Lt,ge,Bt),ge.side=Ye,ge.needsUpdate=!0,Ee=!0}}Ee===!0&&(K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe))}P.setRenderTarget(de,ye,Te),P.setClearColor(Xe,Ge),Ve!==void 0&&(z.viewport=Ve),P.toneMapping=Ne}function ks(M,L,W){const z=L.isScene===!0?L.overrideMaterial:null;for(let G=0,fe=M.length;G<fe;G++){const xe=M[G],{object:de,geometry:ye,group:Te}=xe;let Ne=xe.material;Ne.allowOverride===!0&&z!==null&&(Ne=z),de.layers.test(W.layers)&&_l(de,L,W,ye,Ne,Te)}}function _l(M,L,W,z,G,fe){F!==null&&G.isNodeMaterial&&F.setObject(M,G),M.onBeforeRender(P,L,W,z,G,fe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(P,L,W,z,M,fe),G.transparent===!0&&G.side===xn&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,P.renderBufferDirect(W,L,z,G,M,fe),G.side=pi,G.needsUpdate=!0,P.renderBufferDirect(W,L,z,G,M,fe),G.side=xn):P.renderBufferDirect(W,L,z,G,M,fe),M.onAfterRender(P,L,W,z,G,fe)}function Ws(M,L,W){L.isScene!==!0&&(L=Wt);const z=V.get(M),G=E.state.lights,fe=E.state.shadowsArray,xe=G.state.version,de=re.getParameters(M,G.state,fe,L,W,E.state.lightProbeGridArray),ye=re.getProgramCacheKey(de);let Te=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;const Ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=ie.get(M.envMap||z.environment,Ne),z.envMapRotation=z.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",dn),Te=new Map,z.programs=Te);let Ve=Te.get(ye);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===xe)return vl(M,de),Ve}else de.uniforms=re.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,de),M.onBeforeCompile(de,P),Ve=re.acquireProgram(de,ye),Te.set(ye,Ve),z.uniforms=de.uniforms;const Ee=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=we.uniform),vl(M,de),z.needsLights=eh(M),z.lightsStateVersion=xe,z.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.sunLights.value=G.state.sun,Ee.sunLightShadows.value=G.state.sunShadow,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.sunShadowMatrix.value=G.state.sunShadowMatrix,Ee.sunShadowCascade.value=G.state.sunShadowCascade,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function xl(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ar.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function vl(M,L){const W=V.get(M);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function $u(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=M.length;W<z;W++){const G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Qu(M,L,W,z,G){L.isScene!==!0&&(L=Wt),K.resetTextureUnits();const fe=L.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,de=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:We.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=ie.get(z.envMap||xe,ye),Ne=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let ot=Sn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ot=P.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=it!==void 0?it.length:0,ge=V.get(z),Bt=E.state.lights;if(Ke===!0&&(st===!0||M!==X)){const at=M===X&&z.id===q;we.setState(z,M,at)}let Ye=!1;z.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Bt.state.version||ge.outputColorSpace!==de||G.isBatchedMesh&&ge.batching===!1||!G.isBatchedMesh&&ge.batching===!0||G.isBatchedMesh&&ge.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ge.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ge.instancing===!1||!G.isInstancedMesh&&ge.instancing===!0||G.isSkinnedMesh&&ge.skinning===!1||!G.isSkinnedMesh&&ge.skinning===!0||G.isInstancedMesh&&ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ge.instancingMorph===!1&&G.morphTexture!==null||ge.envMap!==Te||z.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==we.numPlanes||ge.numIntersection!==we.numIntersection)||ge.vertexAlphas!==Ne||ge.vertexTangents!==Ve||ge.morphTargets!==Ee||ge.morphNormals!==$e||ge.morphColors!==xt||ge.toneMapping!==ot||ge.morphTargetsCount!==Lt||!!ge.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,ge.__version=z.version);let Qt=ge.currentProgram;Ye===!0&&(Qt=Ws(z,L,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Qt,ge));let fn=!1,On=!1,Ei=!1;const et=Qt.getUniforms(),gt=ge.uniforms;if(g.useProgram(Qt.program)&&(fn=!0,On=!0,Ei=!0),z.id!==q&&(q=z.id,On=!0),ge.needsLights){const at=$u(E.state.lightProbeGridArray,G);ge.lightProbeGrid!==at&&(ge.lightProbeGrid=at,On=!0)}if(fn||X!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),et.setValue(U,"projectionMatrix",M.projectionMatrix),et.setValue(U,"viewMatrix",M.matrixWorldInverse);const zn=et.map.cameraPosition;zn!==void 0&&zn.setValue(U,ct.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,On=!0,Ei=!0)}if(ge.needsLights&&(Bt.state.sunShadowMap.length>0&&et.setValue(U,"sunShadowMap",Bt.state.sunShadowMap,K),Bt.state.directionalShadowMap.length>0&&et.setValue(U,"directionalShadowMap",Bt.state.directionalShadowMap,K),Bt.state.spotShadowMap.length>0&&et.setValue(U,"spotShadowMap",Bt.state.spotShadowMap,K),Bt.state.pointShadowMap.length>0&&et.setValue(U,"pointShadowMap",Bt.state.pointShadowMap,K)),G.isSkinnedMesh){et.setOptional(U,G,"bindMatrix"),et.setOptional(U,G,"bindMatrixInverse");const at=G.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),et.setValue(U,"boneTexture",at.boneTexture,K))}G.isBatchedMesh&&(et.setOptional(U,G,"batchingTexture"),et.setValue(U,"batchingTexture",G._matricesTexture,K),et.setOptional(U,G,"batchingIdTexture"),et.setValue(U,"batchingIdTexture",G._indirectTexture,K),et.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&et.setValue(U,"batchingColorTexture",G._colorsTexture,K));const Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&D.update(G,W,Qt),(On||ge.receiveShadow!==G.receiveShadow)&&(ge.receiveShadow=G.receiveShadow,et.setValue(U,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(gt.envMapIntensity.value=L.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=Fg()),On){if(et.setValue(U,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&ju(gt,Ei),fe&&z.fog===!0&&Ae.refreshFogUniforms(gt,fe),Ae.refreshMaterialUniforms(gt,z,ee,Y,E.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const at=ge.lightProbeGrid;gt.probesSH.value=at.texture,gt.probesMin.value.copy(at.boundingBox.min),gt.probesMax.value.copy(at.boundingBox.max),gt.probesResolution.value.copy(at.resolution)}Ar.upload(U,xl(ge),gt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ar.upload(U,xl(ge),gt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(U,"center",G.center),et.setValue(U,"modelViewMatrix",G.modelViewMatrix),et.setValue(U,"normalMatrix",G.normalMatrix),et.setValue(U,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const at=z.uniformsGroups;for(let zn=0,bi=at.length;zn<bi;zn++){const Sl=at[zn];te.update(Sl,Qt),te.bind(Sl,Qt)}}return Qt}function ju(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function eh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(M,L,W){const z=V.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=L,V.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const W=V.get(M);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,W=0){ne=M,Z=L,k=W;let z=null,G=!1,fe=!1;if(M){const de=V.get(M);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),J.copy(M.viewport),Me.copy(M.scissor),me=M.scissorTest,g.viewport(J),g.scissor(Me),g.setScissorTest(me),q=-1;return}else if(de.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(de.__hasExternalTextures)K.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&V.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);const Te=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?z=Te[L][W]:z=Te[L],G=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?z=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[W]:z=Te,J.copy(M.viewport),Me.copy(M.scissor),me=M.scissorTest}else J.copy(_e).multiplyScalar(ee).floor(),Me.copy(Oe).multiplyScalar(ee).floor(),me=St;if(W!==0&&(z=H),g.bindFramebuffer(U.FRAMEBUFFER,z)&&g.drawBuffers(M,z),g.viewport(J),g.scissor(Me),g.setScissorTest(me),G){const de=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,W)}else if(fe){const de=L;for(let ye=0;ye<M.textures.length;ye++){const Te=V.get(M.textures[ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ye,Te.__webglTexture,W,de)}}else if(M!==null&&W!==0){const de=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,W)}q=-1};function Ml(M){const L=V.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=A.textureFormatReadable(M.format),L.__typeReadable=A.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,W,z,G,fe,xe,de=0){if(!(M&&M.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){g.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Te=M.textures[de],Ne=Te.format,Ve=Te.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const Ee=Ml(Te);if(Ee.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&W>=0&&W<=M.height-G&&U.readPixels(L,W,z,G,le.convert(Ne),le.convert(Ve),fe)}finally{const Te=ne!==null?V.get(ne).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,L,W,z,G,fe,xe,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(L>=0&&L<=M.width-z&&W>=0&&W<=M.height-G){g.bindFramebuffer(U.FRAMEBUFFER,ye);const Te=M.textures[de],Ne=Te.format,Ve=Te.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const Ee=Ml(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(L,W,z,G,le.convert(Ne),le.convert(Ve),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const xt=ne!==null?V.get(ne).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,xt);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Oh(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($e),U.deleteSync(ot),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,W=0){const z=Math.pow(2,-W),G=Math.floor(M.image.width*z),fe=Math.floor(M.image.height*z),xe=L!==null?L.x:0,de=L!==null?L.y:0;K.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,xe,de,G,fe),g.unbindTexture()},this.copyTextureToTexture=function(M,L,W=null,z=null,G=0,fe=0){let xe,de,ye,Te,Ne,Ve,Ee,$e,xt;const ot=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(W!==null)xe=W.max.x-W.min.x,de=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Ne=W.min.y,Ve=W.isBox3?W.min.z:0;else{const gt=Math.pow(2,-G);xe=Math.floor(ot.width*gt),de=Math.floor(ot.height*gt),M.isDataArrayTexture?ye=ot.depth:M.isData3DTexture?ye=Math.floor(ot.depth*gt):ye=1,Te=0,Ne=0,Ve=0}z!==null?(Ee=z.x,$e=z.y,xt=z.z):(Ee=0,$e=0,xt=0);const it=le.convert(L.format),Lt=le.convert(L.type);let ge;L.isData3DTexture?(K.setTexture3D(L,0),ge=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),ge=U.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),ge=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Bt=g.getParameter(U.UNPACK_ROW_LENGTH),Ye=g.getParameter(U.UNPACK_IMAGE_HEIGHT),Qt=g.getParameter(U.UNPACK_SKIP_PIXELS),fn=g.getParameter(U.UNPACK_SKIP_ROWS),On=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const Ei=M.isDataArrayTexture||M.isData3DTexture,et=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const gt=V.get(M),Bn=V.get(L),at=V.get(gt.__renderTarget),zn=V.get(Bn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,at.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let bi=0;bi<ye;bi++)Ei&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(M).__webglTexture,G,Ve+bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(L).__webglTexture,fe,xt+bi)),U.blitFramebuffer(Te,Ne,xe,de,Ee,$e,xe,de,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||V.has(M)){const gt=V.get(M),Bn=V.get(L);g.bindFramebuffer(U.READ_FRAMEBUFFER,N),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let at=0;at<ye;at++)Ei?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.__webglTexture,G,Ve+at):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,G),et?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bn.__webglTexture,fe,xt+at):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bn.__webglTexture,fe),G!==0?U.blitFramebuffer(Te,Ne,xe,de,Ee,$e,xe,de,U.COLOR_BUFFER_BIT,U.NEAREST):et?U.copyTexSubImage3D(ge,fe,Ee,$e,xt+at,Te,Ne,xe,de):U.copyTexSubImage2D(ge,fe,Ee,$e,Te,Ne,xe,de);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else et?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ge,fe,Ee,$e,xt,xe,de,ye,it,Lt,ot.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,fe,Ee,$e,xt,xe,de,ye,it,ot.data):U.texSubImage3D(ge,fe,Ee,$e,xt,xe,de,ye,it,Lt,ot):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Ee,$e,xe,de,it,Lt,ot.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Ee,$e,ot.width,ot.height,it,ot.data):U.texSubImage2D(U.TEXTURE_2D,fe,Ee,$e,xe,de,it,Lt,ot);g.pixelStorei(U.UNPACK_ROW_LENGTH,Bt),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ye),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Qt),g.pixelStorei(U.UNPACK_SKIP_ROWS,fn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,On),fe===0&&L.generateMipmaps&&U.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){Z=0,k=0,ne=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}function he(i=0,e=0,t=0){return{x:i,y:e,z:t}}function Ct(i,e){return{x:i.x+e.x,y:i.y+e.y,z:i.z+e.z}}function sn(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function mt(i,e){return{x:i.x*e,y:i.y*e,z:i.z*e}}function Bg(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function Jn(i,e){return{x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x}}function Nu(i){return Math.hypot(i.x,i.y,i.z)}function wt(i){const e=Nu(i);return e<1e-8?he(0,1,0):mt(i,1/e)}function hi(i,e,t){return Ct(i,mt(sn(e,i),t))}function Ki(i,e,t){return i+(e-i)*t}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Yr(i,e){return Nu(sn(i,e))}function ut(i,e,t){if(e===i)return t>=e?1:0;const n=At((t-i)/(e-i),0,1);return n*n*n*(n*(n*6-15)+10)}function $n(i,e,t){const n=wt(e),s=Math.cos(t),r=Math.sin(t);return Ct(Ct(mt(i,s),mt(Jn(n,i),r)),mt(n,Bg(n,i)*(1-s)))}function zg(i=he()){return{origin:i,x:he(1,0,0),y:he(0,1,0),z:he(0,0,1)}}function Hi(i,e,t){return{origin:i.origin,x:$n(i.x,e,t),y:$n(i.y,e,t),z:$n(i.z,e,t)}}function Ji(i,e){return{origin:Mt(i,e),x:i.x,y:i.y,z:i.z}}function Mt(i,e){return Ct(i.origin,Ct(Ct(mt(i.x,e.x),mt(i.y,e.y)),mt(i.z,e.z)))}const Gg=.68,Hg=.62,Vi=.01,Fu=.104,Fo=.031,Ou=["index","middle","ring","pinky"],Qn={index:{id:"index",x:-.15,baseY:.8,L:[.4,.25,.18],thick:[.086,.076,.068],abdRest:.06},middle:{id:"middle",x:.03,baseY:.82,L:[.44,.28,.19],thick:[.092,.08,.07],abdRest:-.01},ring:{id:"ring",x:.2,baseY:.79,L:[.4,.25,.18],thick:[.084,.074,.066],abdRest:-.07},pinky:{id:"pinky",x:.34,baseY:.75,L:[.37,.23,.17],thick:[.072,.064,.058],abdRest:-.12}},Ps={base:he(-.28,.48,.05),L:[.36,.3,.24],thick:[.098,.084,.072]};function ki(i){return{...i,dip:i.pip*Gg}}function Wi(i){return{...i,ip:i.mcp*Hg}}function cl(i,e){return he(0,i*.56,e/2+Fo*.82)}function Ut(i,e){const t=Qn[i],n=ki(e);let s=zg(he(t.x,t.baseY,0));s=Hi(s,s.z,n.abd),s=Hi(s,s.x,n.mcp);const r=s,a=Hi(Ji(r,he(0,t.L[0],0)),r.x,n.pip),o=Hi(Ji(a,he(0,t.L[1],0)),a.x,n.dip),c=cl(t.L[2],t.thick[2]),l=Ji(o,c);return{id:i,pose:n,frames:[r,a,o],lengths:[t.L[0],t.L[1],t.L[2]],thick:[t.thick[0],t.thick[1],t.thick[2]],pad:l.origin,padNormal:l.z,joints:[r.origin,a.origin,o.origin],axes:[r.x,a.x,o.x]}}function Vg(i,e,t){const n=wt(e);let s=wt(Jn(n,t));Math.hypot(s.x,s.y,s.z)<1e-5&&(s=wt(Jn(n,he(0,1,0))));let r=wt(Jn(s,n));return r.z<0&&(s=mt(s,-1),r=wt(Jn(s,n))),{origin:i,x:s,y:n,z:r}}function fi(i){const e=Wi(i),t=Ps.L,n=Ps.thick,s=he(.24,.48,.4),r=$n(s,he(0,1,0),(e.opp-.7)*.65),a=$n(r,he(1,0,0),e.abd*.85),o=Vg(Ps.base,a,he(0,-.15,1)),c=Hi(Ji(o,he(0,t[0],0)),o.x,e.mcp),l=Hi(Ji(c,he(0,t[1],0)),c.x,e.ip),h=cl(t[2],n[2]),d=Ji(l,h);return{pose:e,frames:[o,c,l],lengths:[t[0],t[1],t[2]],thick:[n[0],n[1],n[2]],pad:d.origin,padNormal:d.z,joints:[o.origin,c.origin,l.origin],axes:[o.x,c.x,l.x]}}function kg(i,e){const t=i.slice(),n=e.slice();for(let s=0;s<3;s+=1){let r=s;for(let o=s+1;o<3;o+=1)Math.abs(t[o*3+s])>Math.abs(t[r*3+s])&&(r=o);if(Math.abs(t[r*3+s])<1e-10)return null;if(r!==s){for(let c=s;c<3;c+=1){const l=t[s*3+c];t[s*3+c]=t[r*3+c],t[r*3+c]=l}const o=n[s];n[s]=n[r],n[r]=o}const a=t[s*3+s];for(let o=s;o<3;o+=1)t[s*3+o]/=a;n[s]/=a;for(let o=0;o<3;o+=1){if(o===s)continue;const c=t[o*3+s];for(let l=s;l<3;l+=1)t[o*3+l]-=c*t[s*3+l];n[o]-=c*n[s]}}return n}function Bu(i,e){const t=i,n=[0,0,0,0,0,0,0,0,0],s=[0,0,0],r=8e-4;for(let a=0;a<3;a+=1){for(let o=0;o<3;o+=1)n[a*3+o]=Wg(t[a],t[o])+(a===o?r:0);s[a]=Xg(t[a],e)}return kg(n,s)}function Wg(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function Xg(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function qg(i,e){return sn(i,e)}const qn={abd:[-.95,.75],mcp:[-.2,1.45],pip:[0,1.65]};function Tc(i,e,t){let n=ki(t);const s=.001;for(let r=0;r<12;r+=1){const a=Ut(i,n).pad,o=qg(e,a),c=Math.hypot(o.x,o.y,o.z);if(c<8e-4)return{pose:ki(n),error:c};const l=n,h=["abd","mcp","pip"].map(f=>{const x={...l,[f]:l[f]+s},v=Ut(i,x).pad;return mt(sn(v,a),1/s)}),d=Bu(h,o);if(!d)break;const u=.28;n=ki({abd:At(l.abd+At(d[0],-u,u),qn.abd[0],qn.abd[1]),mcp:At(l.mcp+At(d[1],-u,u),qn.mcp[0],qn.mcp[1]),pip:At(l.pip+At(d[2],-u,u),qn.pip[0],qn.pip[1]),dip:0})}return{pose:ki(n),error:Yr(Ut(i,n).pad,e)}}function Yg(i,e,t){const n=Qn[i],s=sn(e,he(n.x,n.baseY,0)),r=At(Math.atan2(-s.x,Math.max(.05,s.y)),qn.abd[0],qn.abd[1]),a={...t,abd:r},o=[a,{...a,mcp:.85,pip:1.05},{...a,mcp:.35,pip:.4}];let c=Tc(i,e,o[0]);for(const l of o.slice(1)){const h=Tc(i,e,l);h.error<c.error&&(c=h)}return c}function Ac(i,e){let t=Wi(e);const n=.001;for(let s=0;s<12;s+=1){const r=fi(t).pad,a=sn(i,r),o=Math.hypot(a.x,a.y,a.z);if(o<8e-4)return{pose:Wi(t),error:o};const c=t,l=["opp","abd","mcp"].map(u=>{const f={...c,[u]:c[u]+n};return mt(sn(fi(f).pad,r),1/n)}),h=Bu(l,a);if(!h)break;const d=.3;t=Wi({opp:At(c.opp+At(h[0],-d,d),.05,1.55),abd:At(c.abd+At(h[1],-d,d),-.45,.65),mcp:At(c.mcp+At(h[2],-d,d),-.15,1.4),ip:0})}return{pose:Wi(t),error:Yr(fi(t).pad,i)}}function Kg(i,e){const t=[e,{...e,opp:.7,mcp:.45},{...e,opp:1.15,mcp:.85}];let n=Ac(i,t[0]);for(const s of t.slice(1)){const r=Ac(i,s);r.error<n.error&&(n=r)}return n}const xi=[{id:"index-flex",digit:"index",kind:"flexor",position:he(-.15,.62,.055)},{id:"index-ext",digit:"index",kind:"extensor",position:he(-.15,.46,.055)},{id:"middle-flex",digit:"middle",kind:"flexor",position:he(.03,.64,.055)},{id:"middle-ext",digit:"middle",kind:"extensor",position:he(.03,.48,.055)},{id:"ring-flex",digit:"ring",kind:"flexor",position:he(.2,.62,.055)},{id:"ring-ext",digit:"ring",kind:"extensor",position:he(.2,.46,.055)},{id:"pinky-flex",digit:"pinky",kind:"flexor",position:he(.35,.58,.055)},{id:"pinky-ext",digit:"pinky",kind:"extensor",position:he(.35,.42,.055)},{id:"thumb-flex",digit:"thumb",kind:"flexor",position:he(-.28,.34,.06)},{id:"thumb-ext",digit:"thumb",kind:"extensor",position:he(-.28,.18,.06)},{id:"thumb-opp",digit:"thumb",kind:"opposition",position:he(-.14,.24,.06)}];function Zi(i,e){return(e?-1:1)*(i/2+.015)}function zs(i){const e=[];for(const t of i){const n=e[e.length-1];(!n||Yr(n,t)>1e-4)&&e.push(t)}return e}function Jg(i,e){const t=Vi+.006;return Ct(i,he(Math.cos(e)*t,Math.sin(e)*t,0))}function zu(i,e,t){const n=Math.atan2(e.y-i.y,e.x-i.x),s=At(t,-Math.PI*1.15,Math.PI*1.15),r=Math.max(2,Math.ceil(Math.abs(s)/.32)),a=[];for(let o=0;o<=r;o+=1){const c=n+s*(1-o/r);a.push(Jg(i,c))}return a}function Gu(i,e){const t=e==="extensor",[n,s,r]=i.frames,a=Zi(i.thick[0],t),o=Zi(i.thick[1],t),c=Zi(i.thick[2],t),l=i.id==="pinky"?.045:i.id==="index"?-.04:.035,h=Mt(n,he(0,.08,a)),d=he(Qn[i.id].x+l,Qn[i.id].baseY-.04,t?-.02:.09),u=Mt(r,he(0,i.lengths[2]*.42,c));return zs([d,h,Mt(n,he(0,i.lengths[0]*.38,a)),Mt(n,he(0,i.lengths[0]*.78,a)),Mt(s,he(0,.02,o)),Mt(s,he(0,i.lengths[1]*.45,o)),Mt(s,he(0,i.lengths[1]*.82,o)),Mt(r,he(0,.02,c)),Mt(r,he(0,i.lengths[2]*.28,c)),u])}function Zg(i,e,t){const n=xi.find(r=>r.digit===i.id&&r.kind===e);if(!n)return[];const s=Gu(i,e);return zs([...zu(n.position,s[0],t),...s])}function Hu(i,e){const[t,n,s]=i.frames;if(e==="opposition"){const d=Mt(t,he(0,i.lengths[0]*.72,i.thick[0]/2+.012));return zs([he(-.2,.3,.09),he(-.26,.36,.1),Mt(t,he(0,i.lengths[0]*.28,i.thick[0]/2+.012)),d])}const r=e==="extensor",a=Zi(i.thick[0],r),o=Zi(i.thick[1],r),c=Zi(i.thick[2],r),l=Mt(t,he(0,.08,a)),h=Mt(s,he(0,i.lengths[2]*.4,c));return zs([he(-.34,.3,r?0:.1),l,Mt(t,he(0,i.lengths[0]*.55,a)),Mt(n,he(0,.04,o)),Mt(n,he(0,i.lengths[1]*.62,o)),Mt(s,he(0,.03,c)),h])}function $g(i,e,t){const n=xi.find(r=>r.digit==="thumb"&&r.kind===e);if(!n)return[];const s=Hu(i,e);return zs([...zu(n.position,s[0],t),...s])}function Vu(i){if(i.length<2)return 0;let e=0;for(let t=1;t<i.length;t+=1)e+=Yr(i[t-1],i[t]);return e}function wc(i,e){return(e-i)/Vi}function Rc(i,e){return Vu(Gu(i,e))}function Oa(i,e){return Vu(Hu(i,e))}function Cc(i){const e={index:Ut("index",i.digits.index),middle:Ut("middle",i.digits.middle),ring:Ut("ring",i.digits.ring),pinky:Ut("pinky",i.digits.pinky)},t=fi(i.thumb),n={index:Ut("index",{...i.digits.index,mcp:0,pip:0,dip:0}),middle:Ut("middle",{...i.digits.middle,mcp:0,pip:0,dip:0}),ring:Ut("ring",{...i.digits.ring,mcp:0,pip:0,dip:0}),pinky:Ut("pinky",{...i.digits.pinky,mcp:0,pip:0,dip:0})},s=fi({...i.thumb,mcp:0,ip:0}),r=fi({...i.thumb,opp:.34}),a=[];for(const o of Ou)for(const c of["flexor","extensor"]){const l=Rc(e[o],c),h=Rc(n[o],c),d=wc(l,h),u=Zg(e[o],c,d);a.push({id:`${o}-${c==="flexor"?"flex":"ext"}`,digit:o,kind:c,points:u,freeLength:l,spool:d})}for(const o of["flexor","extensor","opposition"]){const c=Oa(t,o),l=Oa(o==="opposition"?r:s,o),h=(o==="opposition"?-1:1)*wc(c,l);a.push({id:o==="opposition"?"thumb-opp":`thumb-${o==="flexor"?"flex":"ext"}`,digit:"thumb",kind:o,points:$g(t,o,h),freeLength:c,spool:h})}return a}function Qg(i,e,t){return ki({abd:Ki(i.abd,e.abd,t),mcp:Ki(i.mcp,e.mcp,t),pip:Ki(i.pip,e.pip,t),dip:0})}function jg(i,e,t){return Wi({opp:Ki(i.opp,e.opp,t),abd:Ki(i.abd,e.abd,t),mcp:Ki(i.mcp,e.mcp,t),ip:0})}const ti=34,Oo=30,Pc=1020,Bo=[{id:1,name:"Exterior reveal",caption:"Palmar view. Covers lift off the chassis.",start:0,end:5},{id:2,name:"Palm actuation",caption:"Antagonistic capstans. A tendon only pulls.",start:5,end:10},{id:3,name:"Routing and sensing",caption:"Guides, pulleys, and magnetic encoders.",start:10,end:17},{id:4,name:"Tactile contact",caption:"Normal contact across the index pad.",start:17,end:25},{id:5,name:"Coordinated manipulation",caption:"In-hand reorientation. Covers return.",start:25,end:34}];function en(i,e){if(e<=i[0][0])return i[0][1];for(let t=0;t<i.length-1;t+=1){const[n,s]=i[t],[r,a]=i[t+1];if(e<=r)return s+(a-s)*ut(n,r,e)}return i[i.length-1][1]}function e_(i){return i<=0?0:i>=ti?Pc-1:Math.min(Pc-1,Math.floor(i*Oo+1e-8))}function Ls(i){const e=At(i,0,33.999999);return Bo.find(t=>e>=t.start&&e<t.end)??Bo[4]}function Ba(i,e){return i<.4?0:i<3.7?ut(.4,3.7,i):i<25?1:i<28?1+(e-1)*ut(25,28,i):e}function gn(i,e,t,n,s){return ut(e,t,i)*(1-ut(n,s,i))}const t_=[[0,.16],[4.6,.16],[6.4,1.12],[7.9,.18],[9.5,.9],[10.4,.22],[13.2,.58],[16.4,1.02],[18.6,.48],[34,.48]],n_=[[0,.14],[4.6,.14],[6.4,1.28],[7.9,.16],[9.5,1.05],[10.4,.18],[13.2,.7],[16.4,1.15],[18.6,.55],[34,.55]],i_=[[0,.06],[17,.05],[22,.02],[30,.08],[34,.04]],s_=[[0,.14],[5.4,.14],[7.1,1.02],[8.6,.2],[10.2,.72],[16.5,.62],[18.6,.42],[34,.42]],r_=[[0,.12],[5.4,.12],[7.1,1.16],[8.6,.18],[10.2,.84],[16.5,.7],[18.6,.5],[34,.5]],a_=[[0,.12],[6.2,.12],[7.6,.84],[9.2,.24],[11,.78],[18,.55],[24,.4],[34,.4]],o_=[[0,.1],[6.2,.1],[7.6,.95],[9.2,.2],[11,.9],[18,.62],[24,.42],[34,.42]],l_=[[0,.1],[6.6,.1],[8.1,.7],[9.6,.22],[12,.85],[20,.48],[32.4,.36],[34,.36]],c_=[[0,.08],[6.6,.08],[8.1,.82],[9.6,.18],[12,.95],[20,.5],[32.4,.32],[34,.32]],u_=[[0,.34],[5,.34],[6.7,1.05],[8.4,.4],[12,.3],[16.5,.32],[18.8,.72],[34,.72]],h_=[[0,.12],[5,.12],[6.7,.72],[8.4,.16],[16.5,.18],[18.8,.42],[34,.42]],d_=[[0,.08],[16,.08],[22,.02],[32.4,.04],[34,.04]];function f_(i){const e={abd:en(i_,i),mcp:en(t_,i),pip:en(n_,i),dip:0},t={abd:Qn.middle.abdRest,mcp:en(s_,i),pip:en(r_,i),dip:0},n={abd:Qn.ring.abdRest,mcp:en(a_,i),pip:en(o_,i),dip:0},s={abd:Qn.pinky.abdRest-.04*ut(10,16,i)*(1-ut(18,22,i)),mcp:en(l_,i),pip:en(c_,i),dip:0},r={opp:en(u_,i),abd:en(d_,i),mcp:en(h_,i),ip:0};return{digits:{index:{...e,dip:e.pip*.68},middle:{...t,dip:t.pip*.68},ring:{...n,dip:n.pip*.68},pinky:{...s,dip:s.pip*.68}},thumb:{...r,ip:r.mcp*.62}}}const p_={thumb:wt(he(-.2,-.78,.48)),index:wt(he(-.7,.22,.62)),middle:wt(he(-.02,.48,.8)),ring:wt(he(.58,.16,.7)),pinky:wt(he(.9,-.02,.32))};function Lc(i){const e=ut(28,32.2,i);return he(-.02+.045*e,1-.03*e,.48)}function zo(i){const e=Lc(Math.max(i,19.7)),t=ut(17,19.65,i),n=Ct(Lc(19.7),he(.03,.24,.26)),s=.14*ut(21.2,23.1,i)*(1-ut(24.2,25.4,i))+.58*ut(28.1,32.2,i);return{center:hi(n,e,t),opacity:ut(17.05,18.35,i),spin:s,axis:wt(he(.15,1,.2))}}function Dc(i,e){return e<19.2||e>34?0:i==="thumb"?gn(e,19.35,20.15,40,41):i==="index"?Math.min(1,gn(e,19.4,20.2,29.9,30.55)+gn(e,31.05,31.55,40,41)):i==="middle"?Math.min(1,gn(e,19.4,20.2,28.15,28.9)+gn(e,30.35,31.05,40,41)):i==="ring"?gn(e,27.95,28.75,40,41):gn(e,29.35,30.15,31.45,32.15)}function Ic(i,e,t,n){const s=$n(p_[i],n,t);return Ct(e,mt(s,Fu+.004))}const m_={index:{abd:.02,mcp:.62,pip:.78,dip:.53},middle:{abd:-.02,mcp:.58,pip:.72,dip:.49},ring:{abd:-.08,mcp:.64,pip:.7,dip:.48},pinky:{abd:-.16,mcp:.7,pip:.62,dip:.42}},g_={opp:.95,abd:.05,mcp:.55,ip:.34};function Uc(i){const e=f_(i),t=zo(i),n={digits:{index:e.digits.index,middle:e.digits.middle,ring:e.digits.ring,pinky:e.digits.pinky},thumb:e.thumb},s=[],r=__(i),a=Math.abs(r)>.12&&i>=21&&i<=32.7;for(const d of Ou){const u=Dc(d,i),f=Ic(d,t.center,t.spin,t.axis),x=Yg(d,f,{...m_[d],abd:e.digits[d].abd});n.digits[d]=Qg(e.digits[d],x.pose,Nc(d,i,u));const v=wt(sn(f,t.center)),m=a&&u>.45?mt(wt(Jn(t.axis,v)),.045):he();s.push({digit:d,point:f,outward:v,weight:u,depth:u*(.62+.38*Fc(i)),shear:m,showShear:a&&u>.45,error:x.error})}const o=Dc("thumb",i),c=Ic("thumb",t.center,t.spin,t.axis),l=Kg(c,{...g_,abd:e.thumb.abd});n.thumb=jg(e.thumb,l.pose,Nc("thumb",i,o));const h=wt(sn(c,t.center));return s.push({digit:"thumb",point:c,outward:h,weight:o,depth:o*(.62+.38*Fc(i)),shear:a&&o>.45?mt(wt(Jn(t.axis,h)),.045):he(),showShear:a&&o>.45,error:l.error}),{pose:n,contacts:s,sphere:t}}function Nc(i,e,t){return i==="thumb"||i==="index"||i==="middle"?e<20.25?Math.max(t,ut(17.6,19.35,e)):t:i==="ring"?e<28.8?Math.max(t,ut(26.4,27.9,e)):t:e<30.2?Math.max(t,ut(28.2,29.35,e)):t}function Fc(i){return ut(20.6,21.5,i)*(1-ut(22.6,23.4,i))}function __(i){const e=.03333333333333333;return(zo(i).spin-zo(Math.max(0,i-e)).spin)/e}function xs(i,e,t){return{position:Ct(i,e),target:i,fov:t}}function xr(i,e,t){return{position:hi(i.position,e.position,t),target:hi(i.target,e.target,t),fov:i.fov+(e.fov-i.fov)*t}}function x_(i,e,t){const n=Ut("index",e.digits.index),s=xs(he(.02,.72,.08),he(1.35,.42,2.85),34),r=xs(he(.02,.56,.06),he(.28,.42,1.42),32),a=ut(10.8,16.5,i),o=hi(hi(n.joints[0],n.joints[1],Math.min(1,a*1.35)),n.joints[2],ut(14.2,16.6,i)),c=xs(o,he(-.42,.26,1.22),30),l=wt(sn(n.pad,t));let h=wt(Jn(he(0,1,0),l));h.z<0&&(h=mt(h,-1));const d=xs(hi(n.pad,t,.42),Ct(Ct(mt(h,.78),mt(l,.22)),he(0,.34,.12)),32),u=xs(hi(he(0,.55,.1),t,.22),he(1.32,.38,3.05),34);let f=xr(s,r,ut(4.35,5.45,i));return f=xr(f,c,ut(9.35,10.7,i)),f=xr(f,d,ut(16.15,17.55,i)),f=xr(f,u,ut(24.15,25.9,i)),i>=33?u:f}let Oc=Number.NaN,za=null;function v_(i){const e=At(i,0,ti);if(za&&Oc===e)return za;const t=M_(e);return Oc=e,za=t,t}function M_(i){const e=Ls(i),t=Uc(i),n=Uc(Math.max(0,i-1/Oo)),s={index:Ut("index",t.pose.digits.index),middle:Ut("middle",t.pose.digits.middle),ring:Ut("ring",t.pose.digits.ring),pinky:Ut("pinky",t.pose.digits.pinky)},r=fi(t.pose.thumb),a=Cc(t.pose),o=Cc(n.pose),c=a.map(u=>{const f=o.find(m=>m.id===u.id),x=u.spool-(f?.spool??u.spool),v=Math.abs(x)*Oo;return{id:u.id,digit:u.digit,kind:u.kind,points:u.points,spool:u.spool,active:At(v/2.4,0,1),direction:Math.abs(x)<1e-4?0:Math.sign(x)}}),l=xi.map(u=>{const f=c.find(x=>x.id===u.id);return{id:u.id,digit:u.digit,kind:u.kind,position:u.position,spool:f?.spool??0,active:f?.active??0}}),h=t.contacts.filter(u=>u.weight>.55).length,d=c.reduce((u,f)=>u+f.active,0)/c.length;return{t:i,frame:e_(i),shot:{id:e.id,name:e.name,caption:e.caption},explode:{shells:Ba(i,0),palm:Ba(i,.42),indexShell:Ba(i,.3)},camera:x_(i,t.pose,t.sphere.center),sphere:{...t.sphere,radius:Fu},contacts:t.contacts,pose:t.pose,digits:s,thumb:r,tendons:c,actuators:l,encoderGlow:.22+.7*gn(i,10.2,11,16.4,17),indexEncoderGlow:.28+.72*gn(i,10.1,10.8,16.5,17),padReveal:gn(i,17.3,18.5,24.2,25.15),supportCount:h,motionEnergy:d}}function S_(){const i=[{t:.62,type:"shell",freq:150},{t:1.18,type:"shell",freq:132},{t:1.82,type:"shell",freq:118},{t:2.46,type:"shell",freq:140},{t:3.15,type:"shell",freq:124},{t:5.12,type:"motor",freq:86},{t:19.85,type:"contact",freq:360},{t:25.35,type:"shell",freq:136},{t:26.15,type:"shell",freq:128},{t:27.05,type:"shell",freq:142},{t:28.55,type:"tick",freq:240},{t:30.25,type:"tick",freq:220},{t:31.35,type:"tick",freq:260},{t:33.08,type:"resolve",freq:220}];for(let e=5.25;e<32.8;e+=.75)i.push({t:Number(e.toFixed(4)),type:"tick",freq:180});return i.sort((e,t)=>e.t-t.t)}class y_{ctx=null;master=null;music=null;effects=null;droneGains=[];motorGain=null;noise=null;live=[];tones=[];lastT=0;mix={music:.72,effects:.78,muted:!1};get ready(){return this.ctx!==null}currentTime(){return!this.ctx||this.ctx.state==="suspended"?null:this.ctx.currentTime}ensure(){if(this.ctx)return;const e=new AudioContext,t=e.createGain(),n=e.createGain(),s=e.createGain();n.connect(t),s.connect(t),t.connect(e.destination),this.ctx=e,this.master=t,this.music=n,this.effects=s,this.noise=b_(e);const r=[[73.42,"sine",.055],[110,"sine",.032],[146.83,"triangle",.02],[220,"sine",.014]];for(const[l,h,d]of r){const u=e.createOscillator(),f=e.createGain();u.type=h,u.frequency.value=l,f.gain.value=0,u.connect(f),f.connect(n),u.start(),this.tones.push(u),this.droneGains.push(f),f.gain.value=d}const a=e.createOscillator();a.type="sawtooth",a.frequency.value=58;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=220;const c=e.createGain();c.gain.value=0,a.connect(o),o.connect(c),c.connect(s),a.start(),this.tones.push(a),this.motorGain=c,this.applyMix()}async resume(){this.ctx&&this.ctx.state!=="running"&&await this.ctx.resume()}setMix(e){this.mix=e,this.applyMix()}update(e,t,n,s){if(!(!this.ctx||!this.master||!this.music||!this.effects)){if(!t||n||e<this.lastT||e-this.lastT>.25){this.stopLive(),this.lastT=e,this.writeBed(e,t,s);return}for(const r of S_())r.t>this.lastT&&r.t<=e&&this.trigger(r.type,r.freq);this.lastT=e,this.writeBed(e,!0,s)}}stop(){this.stopLive(),this.writeBed(0,!1,0)}applyMix(){if(!this.master||!this.music||!this.effects||!this.ctx)return;const e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.mix.muted?0:1,e,.02),this.music.gain.setTargetAtTime(this.mix.music,e,.03),this.effects.gain.setTargetAtTime(this.mix.effects,e,.03)}writeBed(e,t,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=t?E_(e):0,a=[1,.85,r>.4?.7:.15,e>24&&e<33.2?.55:.05];this.droneGains.forEach((c,l)=>{const h=[.055,.032,.02,.014][l]??.01;c.gain.setTargetAtTime(h*a[l]*r,s,.05)});const o=t&&e>=4.8&&e<32.9?Math.min(.045,.008+n*.03):0;this.motorGain?.gain.setTargetAtTime(o,s,.04)}trigger(e,t){!this.ctx||!this.effects||!this.noise||(e==="shell"?this.noiseHit(t*6,.18,.09,480):e==="motor"?this.tone(t,.22,.035,"triangle"):e==="contact"?(this.tone(t,.12,.05,"sine"),this.noiseHit(900,.08,.04,1400)):e==="resolve"?(this.tone(t,.9,.04,"sine"),this.tone(t*1.5,.9,.028,"sine")):this.tone(t,.045,.018,"sine"))}tone(e,t,n,s){if(!this.ctx||!this.effects)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=s,r.frequency.value=e;const o=this.ctx.currentTime;a.gain.setValueAtTime(n,o),a.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a),a.connect(this.effects),r.start(o),r.stop(o+t+.02)}noiseHit(e,t,n,s){if(!this.ctx||!this.effects||!this.noise)return;const r=this.ctx.createBufferSource();r.buffer=this.noise;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=e,a.Q.value=Math.max(.7,s/200);const o=this.ctx.createGain(),c=this.ctx.currentTime;o.gain.setValueAtTime(n,c),o.gain.exponentialRampToValueAtTime(1e-4,c+t),r.connect(a),a.connect(o),o.connect(this.effects),r.start(c),r.stop(c+t),this.live.push(r),r.onended=()=>{this.live=this.live.filter(l=>l!==r)}}stopLive(){for(const e of this.live)try{e.stop()}catch{}this.live=[]}}function E_(i){const e=Ga(0,.6,i),t=1-Ga(33.05,34,i),n=.72+.28*Ga(9.5,16,i);return e*t*n}function Ga(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*n*(n*(n*6-15)+10)}function b_(i){const e=Math.floor(i.sampleRate*.35),t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);let s=1592594996;for(let r=0;r<e;r+=1)s=Math.imul(1664525,s)+1013904223>>>0,n[r]=((s&65535)/32768-1)*(1-r/e);return t}const vs=new R;function tn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;vs.copy(e),vs[n]=0,vs.normalize();const l=.5*a/(a+o),h=1-vs.angleTo(i)/c;return Math.sign(vs[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Zn extends Nn{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,v=new R,m=.5/a;for(let p=0,T=0;p<d.length;p+=3,T+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/x)){case 0:v.set(1,0,0),f[T+0]=tn(v,l,"z","y",r,n),f[T+1]=1-tn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[T+0]=1-tn(v,l,"z","y",r,n),f[T+1]=1-tn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[T+0]=1-tn(v,l,"x","z",r,e),f[T+1]=tn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[T+0]=1-tn(v,l,"x","z",r,e),f[T+1]=1-tn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[T+0]=1-tn(v,l,"x","y",r,e),f[T+1]=1-tn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[T+0]=tn(v,l,"x","y",r,e),f[T+1]=1-tn(v,l,"y","x",r,t);break}}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.segments,e.radius)}}const wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T_=new Wr(-1,1,1,-1,0,1);class A_ extends pt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const w_=new A_;class ul{constructor(e){this._mesh=new Be(w_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,T_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class R_ extends as{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ul(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bc extends as{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class C_ extends as{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class P_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new R_(wr),this.copyPass.material.blending=Mn,this.timer=new Fd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(a instanceof Bc?n=!0:a instanceof C_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class L_ extends as{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bs.clone(vr.uniforms),this.material=new Eu({name:vr.name,uniforms:this.uniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this._fsQuad=new ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class D_ extends as{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const I_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends as{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new kt(r,a,{type:qt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new kt(r,a,{type:qt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=I_;this.highPassUniforms=Bs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bs.clone(wr.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,premultipliedAlpha:!0,blending:Wa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new ei,this._fsQuad=new ul(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ts.BlurDirectionX=new ve(1,0);ts.BlurDirectionY=new ve(0,1);const U_=3817808,Gs=1974826,Ds=62932,Hs=16711765,Rr=16758531;function N_(i){const e=new Og({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.outputColorSpace=Ht,e.toneMapping=zr,e.toneMappingExposure=1.2,e.setClearColor(592656,1);const t=window.matchMedia("(pointer: coarse)").matches,n=window.innerWidth<860||t,s=!n;e.shadowMap.enabled=s,e.shadowMap.type=As,e.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.25:1.6));const r=new jh;r.background=new Ce(592656),r.fog=new sl(592656,9.5,18),r.environment=tx(e);const a=new nn(32,1,.05,40),o=F_(r,s),c=n?null:nx(e,r,a),l=[],h=new R,d=new Ce(Gs),u=new Ce(Hs);function f(){const v=i.clientWidth||window.innerWidth,m=i.clientHeight||window.innerHeight;e.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.25:1.6)),e.setSize(v,m,!1),a.aspect=v/Math.max(1,m),a.updateProjectionMatrix(),c?.setSize(v,m)}function x(v){a.position.set(v.camera.position.x,v.camera.position.y,v.camera.position.z),a.up.set(0,1,0),a.lookAt(v.camera.target.x,v.camera.target.y,v.camera.target.z),a.fov=v.camera.fov,a.updateProjectionMatrix(),ys(o.index,v.digits.index,v.explode.indexShell,v,!0),ys(o.middle,v.digits.middle,v.explode.shells,v,!1),ys(o.ring,v.digits.ring,v.explode.shells,v,!1),ys(o.pinky,v.digits.pinky,v.explode.shells,v,!1),ys(o.thumb,v.thumb,v.explode.shells,v,!1),G_(o,v),H_(o,v),V_(o,v),k_(o,v),W_(o,v),X_(o,v),q_(o,v),r.updateMatrixWorld(!0),K_(l,o,v),c?c.render():e.render(r,a)}return f(),{update:x,resize:f,labels:()=>l,camera:a,dispose(){c?.dispose(),e.dispose(),h.set(0,0,0),d.set(Gs),u.set(Hs)}}}function F_(i,e){const t=new Ld(14016232,1711396,.85);i.add(t);const n=new pr(16774116,2.15);n.position.set(2.4,3.6,2.8),n.castShadow=e,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.5,n.shadow.camera.far=12,n.shadow.camera.left=-2,n.shadow.camera.right=2,n.shadow.camera.top=2,n.shadow.camera.bottom=-2,n.shadow.bias=-35e-5,n.shadow.normalBias=.025,i.add(n);const s=new pr(12043988,.8);s.position.set(-2.6,1.4,2.2),i.add(s);const r=new pr(14019839,1.05);r.position.set(-1.4,2.2,-2.8),i.add(r);const a=new pr(16762798,.28);a.position.set(2.2,.4,-1.6),i.add(a);const o=new Be(new Br(4.2,64),new Jt({color:1184794,metalness:.18,roughness:.72,envMapIntensity:.6}));o.rotation.x=-Math.PI/2,o.position.y=-.7,o.receiveShadow=e,i.add(o);const c=new Be(new di(13,32,20),new ei({map:ex(),side:Vt}));i.add(c);const l=new Jt({color:U_,metalness:.86,roughness:.36,envMapIntensity:1.05,roughnessMap:j_()}),h=l.clone();h.color=new Ce(3225670),h.roughness=.42;const d=new $l({color:Gs,metalness:.04,roughness:.58,clearcoat:.18,clearcoatRoughness:.55,sheen:.35,sheenColor:new Ce(3818066)}),u=d.clone();u.transparent=!0,u.opacity=1;const f=new Be(new Kn(.125,.155,.42,28),l);f.position.set(.02,-.17,-.02),f.castShadow=e,i.add(f);const x=new Be(new ji(.142,.014,8,28),l);x.rotation.x=Math.PI/2,x.position.set(.02,-.01,-.02),i.add(x);const v=new Be(new Zn(.96,.8,.05,3,.015),l);v.position.set(.04,.46,-.075),v.castShadow=e,v.receiveShadow=e,i.add(v);for(const X of[-.44,.5]){const J=new Be(new Zn(.035,.72,.16,2,.008),l);J.position.set(X,.44,.01),J.castShadow=e,i.add(J)}const m=new Be(new Zn(.86,.06,.1,2,.008),l);m.position.set(.08,.8,.01),i.add(m);const p=new Ln,T=new Be(new Zn(.9,.7,.028,3,.01),h);T.castShadow=e,p.add(T),i.add(p);const C=new Map;for(const X of xi){const J=new Ln;J.position.set(X.position.x,X.position.y,X.position.z);const Me=new Be(new Kn(.022,.022,.048,18),new Jt({color:2765120,metalness:.7,roughness:.4}));Me.rotation.x=Math.PI/2,Me.position.z=-.038;const me=new Ln;me.name="drum";const Xe=new Be(new Kn(Vi,Vi,.016,20),new Jt({color:4871012,metalness:.8,roughness:.32}));Xe.rotation.x=Math.PI/2;const Ge=new Be(new Nn(.004,.012,.004),new Jt({color:Rr,emissive:Rr,emissiveIntensity:.35,roughness:.4}));Ge.position.set(Vi*.92,0,0),Xe.add(Ge);for(let qe=0;qe<4;qe+=1){const Y=new Be(new ji(Vi+.001,.0014,6,16),new Jt({color:1843499,metalness:.6,roughness:.45}));Y.position.y=-.006+qe*.004,Xe.add(Y)}me.add(Xe),J.add(Me,me),i.add(J),C.set(X.id,J)}const S=Ms("index",l,h,u,e,!0),b=Ms("middle",l,h,d,e,!1),E=Ms("ring",l,h,d,e,!1),w=Ms("pinky",l,h,d,e,!1),_=Ms("thumb",l,h,d,e,!1);for(const X of[S,b,E,w,_])for(const J of X.joints)i.add(J);const y=[],P=[];Ss(S,P),Ss(b,y),Ss(E,y),Ss(w,y),Ss(_,y);const I=new Jt({color:10134447,metalness:.72,roughness:.28,emissive:Ds,emissiveIntensity:.05}),F=new Map;for(const X of xi){const J=new Be(new pt,X.kind==="extensor"?Q_():I.clone());J.castShadow=!1,J.frustumCulled=!1;const Me=[];for(let me=0;me<3;me+=1){const Xe=new Be(new di(.007,8,8),new Jt({color:Ds,emissive:Ds,emissiveIntensity:.35,roughness:.45}));Xe.visible=!1,Me.push(Xe),i.add(Xe)}i.add(J),F.set(X.id,{mesh:J,beads:Me})}const H=new Be(new di(1,48,32),new $l({color:14147304,roughness:.12,metalness:0,transmission:.72,thickness:.45,ior:1.45,transparent:!0,opacity:0,envMapIntensity:1.2}));H.castShadow=e,H.visible=!1,i.add(H);const N=[],B=[],Z=[];for(let X=0;X<5;X+=1){const J=new Be(new Br(.03,20),new ei({color:Hs,transparent:!0,opacity:0,depthWrite:!1,side:xn}));J.visible=!1,i.add(J),N.push(J);const Me=new Bd(new R(0,0,-1),new R,.08,Hs,.02,.012);Me.visible=!1,i.add(Me),B.push(Me);const me=new Do(new pt().setFromPoints([new R,new R(0,.04,0)]),new Pd({color:16052714,dashSize:.012,gapSize:.008,transparent:!0,opacity:.9}));me.visible=!1,i.add(me),Z.push(me)}const k=[];for(let X=0;X<3;X+=1){const J=new Do(new pt,new Hr({color:Rr,transparent:!0,opacity:.95}));J.visible=!1,J.frustumCulled=!1,i.add(J),k.push(J)}const ne=new Jt({color:Gs,roughness:.7,metalness:.02,transparent:!0,opacity:.78}),q=[0,1,2].map(()=>{const X=new Be(new Kn(.008,.008,1,8),ne);return X.castShadow=!1,i.add(X),X});return{cover:p,index:S,middle:b,ring:E,pinky:w,thumb:_,actuators:C,tendons:F,sphere:H,discs:N,arrows:B,shears:Z,arcs:k,ligaments:q,encoderMats:y,indexEncoderMats:P}}function O_(i){if(i==="thumb")return{lengths:[...Ps.L],thicks:[...Ps.thick]};const e=Qn[i];return{lengths:[...e.L],thicks:[...e.thick]}}function Ms(i,e,t,n,s,r){const a=[],o=[],{lengths:c,thicks:l}=O_(i);for(let w=0;w<3;w+=1){const _=new Ln;_.matrixAutoUpdate=!1;const y=new Be(new Zn(l[w]*.92,c[w]*.9,l[w]*.78,3,.01),e);y.position.y=c[w]/2,y.castShadow=s,y.receiveShadow=s,_.add(y);const P=new Ln,I=new Be(new Zn(l[w]*1.04,c[w]*.78,.02,2,.005),t);I.castShadow=s,P.add(I),_.add(P),o.push(P);const F=new Jt({color:2893336,emissive:Rr,emissiveIntensity:.25,metalness:.45,roughness:.38}),H=new Be(new ji(Math.max(.016,l[w]*.34),.0028,8,22),F);H.rotation.y=Math.PI/2,H.name="encoder";const N=new Be(new Nn(.01,.008,.008),F);N.position.set(0,l[w]*.36,0),_.add(H,N);const B=new Be(new Kn(.011,.011,l[w]*.7,12),e);B.rotation.z=Math.PI/2,B.position.z=l[w]/2+.008,_.add(B);const Z=new Be(new ji(.012,.0022,6,14),e);Z.position.set(0,c[w]*.48,l[w]/2+.016),_.add(Z);const k=Z.clone();k.position.z=-(l[w]/2+.016),_.add(k),a.push(_)}const h=a[2],d=cl(c[2],l[2]),u=new Be(new di(Fo,r?28:16,r?20:12),n);u.position.set(d.x,d.y,d.z-Fo),u.castShadow=s,h.add(u);const f=new Float32Array(u.geometry.attributes.position.array),x=[];let v=null;if(r){const w=new ft;v=new Wl(new Nn(.008,.008,.004),new ei({color:16777215}),20),v.instanceColor=new Nr(new Float32Array(60),3);let _=0;for(let y=0;y<5;y+=1)for(let P=0;P<4;P+=1){const I=he((P-1.5)*.011,d.y+(y-2)*.011,d.z-.014);x.push(I),w.position.set(I.x,I.y,I.z),w.scale.setScalar(1),w.updateMatrix(),v.setMatrixAt(_,w.matrix),v.setColorAt(_,new Ce(Gs)),_+=1}h.add(v)}const m=r?12:9,p=new Wl(new di(.0032,6,6),new ei({color:16777215}),m);p.instanceColor=new Nr(new Float32Array(m*3),3);const T=[],C=new ft,S=r?4:3,b=3;let E=0;for(let w=0;w<b;w+=1)for(let _=0;_<S;_+=1){const y=he((_-(S-1)/2)*.012,d.y+(w-1)*.012,d.z+.001);T.push(y),C.position.set(y.x,y.y,y.z),C.updateMatrix(),p.setMatrixAt(E,C.matrix),p.setColorAt(E,new Ce(2765120)),E+=1}return h.add(p),{id:i,joints:a,shells:o,pad:u,padPositions:f,innerTaxels:v,pips:p,pipLocals:T,taxelLocals:x}}function Ss(i,e){for(const t of i.joints)t.traverse(n=>{n.name==="encoder"&&n instanceof Be&&e.push(n.material)})}function ys(i,e,t,n,s){for(let c=0;c<3;c+=1){Z_(i.joints[c],e.frames[c]);const l=i.id==="index"?-.08:i.id==="pinky"?.1:i.id==="thumb"?-.12:.05,h=i.shells[c];h.position.set(t*l,e.lengths[c]*.5,-(e.thick[c]/2+.034+t*(.34+c*.18))),h.rotation.x=t*(.25+c*.12)}const r=n.contacts.find(c=>c.digit===i.id),a=!!(r&&r.weight>.45);B_(i,r?.depth??0,a&&r?r.point:null,e);const o=a&&r?ku(e.frames[2],r.point):null;z_(i,n,s,(r?.depth??0)*(r?.weight??0),o)}function B_(i,e,t,n){const s=i.pad.geometry.attributes.position,r=i.padPositions;if(!t||e<.05){s.array.set(r),s.needsUpdate=!0,i.pad.geometry.computeVertexNormals();return}const a=n.frames[2],o=ku(a,t),c=i.pad.position;for(let l=0;l<s.count;l+=1){const h=r[l*3]+c.x,d=r[l*3+1]+c.y,u=h-o.x,f=d-o.y,x=Math.exp(-(u*u+f*f)/(2*.018*.018))*e;s.setXYZ(l,r[l*3],r[l*3+1],r[l*3+2]-x*.014)}s.needsUpdate=!0,i.pad.geometry.computeVertexNormals()}function z_(i,e,t,n,s){const r=new ft,a=new Ce(2765120),o=new Ce(Hs);if(i.pipLocals.forEach((l,h)=>{const d=zc(l,s,n);r.position.set(l.x,l.y,l.z),r.scale.setScalar(.85+d*.9),r.updateMatrix(),i.pips.setMatrixAt(h,r.matrix),i.pips.setColorAt(h,a.clone().lerp(o,Vc(d)))}),i.pips.instanceMatrix.needsUpdate=!0,i.pips.instanceColor&&(i.pips.instanceColor.needsUpdate=!0),!i.innerTaxels)return;i.innerTaxels.visible=e.padReveal>.04,i.taxelLocals.forEach((l,h)=>{const d=zc(l,s,n);r.position.set(l.x,l.y,l.z),r.scale.setScalar(.75+d*1.15),r.rotation.set(0,0,0),r.updateMatrix(),i.innerTaxels?.setMatrixAt(h,r.matrix),i.innerTaxels?.setColorAt(h,a.clone().lerp(o,Vc(d)))}),i.innerTaxels.instanceMatrix.needsUpdate=!0,i.innerTaxels.instanceColor&&(i.innerTaxels.instanceColor.needsUpdate=!0);const c=i.pad.material;t&&(c.opacity=1-e.padReveal*.72,c.depthWrite=c.opacity>.85)}function zc(i,e,t){if(!e||t<=0)return 0;const n=i.x-e.x,s=i.y-e.y;return t*Math.exp(-(n*n+s*s)/42e-5)}function G_(i,e){const t=e.explode.palm,n=t>.72?t:t*.42;i.cover.position.set(-1.72*n,.48+.95*n,.155-.72*n),i.cover.rotation.set(-.35*n,.25*n,.4*n);const s=e.encoderGlow;for(const r of i.encoderMats)r.emissiveIntensity=.12+s;for(const r of i.indexEncoderMats)r.emissiveIntensity=.16+e.indexEncoderGlow*1.35}function H_(i,e){for(const t of e.actuators){const s=i.actuators.get(t.id)?.getObjectByName("drum");s&&(s.rotation.z=t.spool)}}function V_(i,e){for(const t of e.tendons){const n=i.tendons.get(t.id);if(!n||t.points.length<2)continue;const s=t.points.map(a=>new R(a.x,a.y,a.z));try{const a=new Mu(s,!1,"centripetal",.35),o=new ll(a,Math.min(72,s.length*6),t.kind==="extensor"?.0044:.0054,5,!1);n.mesh.geometry.dispose(),n.mesh.geometry=o;const c=t.active>.18&&e.t<32.85;n.beads.forEach((l,h)=>{if(l.visible=c,!c)return;const d=$_(.17+h*.29-t.direction*Math.min(e.t,32.8)*.25);l.position.copy(a.getPoint(Math.max(0,Math.min(1,d))))})}catch{n.beads.forEach(a=>{a.visible=!1})}const r=n.mesh.material;r.emissiveIntensity=.03+t.active*(t.kind==="flexor"?.32:.16)}}function k_(i,e){const t=i.sphere.material;i.sphere.visible=e.sphere.opacity>.02,i.sphere.position.set(e.sphere.center.x,e.sphere.center.y,e.sphere.center.z),i.sphere.scale.setScalar(e.sphere.radius),i.sphere.quaternion.setFromAxisAngle(new R(e.sphere.axis.x,e.sphere.axis.y,e.sphere.axis.z),e.sphere.spin),t.opacity=e.sphere.opacity}function W_(i,e){e.contacts.forEach((t,n)=>{const s=t.weight>.62&&e.sphere.opacity>.85,r=i.discs[n],a=i.arrows[n],o=i.shears[n];if(r.visible=s,a.visible=s,o.visible=s&&t.showShear,!s)return;const c=t.outward,l=Ct(t.point,mt(c,.003)),h=.03+t.depth*.02,d=Ct(l,mt(c,h));if(a.position.set(d.x,d.y,d.z),a.setDirection(new R(-c.x,-c.y,-c.z)),a.setLength(h,.01,.006),r.position.set(l.x,l.y,l.z),r.lookAt(l.x+c.x,l.y+c.y,l.z+c.z),r.scale.setScalar(.7+t.depth),r.material.opacity=.15+t.depth*.45,t.showShear){const u=Ct(l,t.shear);o.geometry.dispose(),o.geometry=new pt().setFromPoints([new R(l.x,l.y,l.z),new R(u.x,u.y,u.z)]),o.computeLineDistances()}})}function X_(i,e){const t=e.shot.id===3,n=[e.digits.index.pose.mcp,e.digits.index.pose.pip,e.digits.index.pose.dip];i.arcs.forEach((s,r)=>{if(s.visible=t,!t)return;const a=e.digits.index.frames[r],o=n[r],c=a.x,l=$n(a.y,c,-o),h=$n(a.z,c,-o),d=[],u=18;for(let f=0;f<=u;f+=1){const x=o*f/u,v=Ct(mt(l,Math.cos(x)),mt(h,Math.sin(x))),m=Ct(a.origin,mt(v,.045+r*.004));d.push(new R(m.x,m.y,m.z))}s.geometry.dispose(),s.geometry=new pt().setFromPoints(d)})}function q_(i,e){[[i.index,i.middle],[i.middle,i.ring],[i.ring,i.pinky]].forEach(([n,s],r)=>{const a=Hc(Gc(e,n.id).frames[0],.42),o=Hc(Gc(e,s.id).frames[0],.42);Y_(i.ligaments[r],a,o)})}function Gc(i,e){return e==="thumb"?i.thumb:i.digits[e]}function Hc(i,e){return Mt(i,he(0,e,0))}function Y_(i,e,t){const n=sn(t,e),s=Math.hypot(n.x,n.y,n.z)||.001;i.position.set((e.x+t.x)/2,(e.y+t.y)/2,(e.z+t.z)/2),i.scale.set(1,s,1),i.quaternion.setFromUnitVectors(new R(0,1,0),new R(n.x/s,n.y/s,n.z/s))}function K_(i,e,t){i.length=0;const n=t.digits.index.pad,s=r=>`${(r*180/Math.PI).toFixed(1)}°`;if(t.shot.id===1)zt(i,"cover","Palm cover","Lifts clear of the cavity",e.cover.position,1,28,-36),zt(i,"shell","Dorsal shell","Fingertip pad stays seated",J_(t),1,-40,-28),zt(i,"pad","Silicone pad","Contact surface",n,1,34,18);else if(t.shot.id===2){const r=xi.find(o=>o.id==="index-flex"),a=xi.find(o=>o.id==="index-ext");zt(i,"flex","Flexor capstan","Winds as the finger curls",r.position,1,30,-26),zt(i,"ext","Extensor capstan","Pays out the return tendon",a.position,1,-36,24),zt(i,"pull","Tendon only pulls","The antagonist provides return",t.digits.index.joints[1],2,26,-20)}else if(t.shot.id===3){const r=t.digits.index.pose;zt(i,"mcp","Index MCP",s(r.mcp),t.digits.index.joints[0],1,-46,-18),zt(i,"pip","Index PIP",s(r.pip),t.digits.index.joints[1],1,36,-16),zt(i,"dip","Index DIP",`${s(r.dip)} coupled`,t.digits.index.joints[2],1,32,20),zt(i,"encoder","Magnetic encoder","Angle follows the joint",t.digits.index.joints[1],2,-30,26)}else if(t.shot.id===4){const r=t.contacts.find(a=>a.digit==="index");zt(i,"taxel","Taxel matrix","Normal-contact sensing",n,1,34,-24),r&&r.weight>.5&&(zt(i,"force","Force on object","Arrow points into the sphere",r.point,1,-48,-20),r.showShear&&zt(i,"shear","Illustrative shear estimate","Tangent to the surface",r.point,1,40,26))}else{const r=t.contacts.find(a=>a.weight>.2&&a.weight<.85);zt(i,"handoff",r?"Contact handoff":"Stable cradle","Each digit takes a turn",t.sphere.center,1,36,-32),zt(i,"window","Palm window","Retained cutaway",{x:e.cover.position.x,y:e.cover.position.y,z:e.cover.position.z},2,-20,-28)}}function J_(i){return Mt(i.digits.index.frames[0],he(-.08,.16,-.2-i.explode.indexShell*.3))}function zt(i,e,t,n,s,r,a,o){i.push({id:e,title:t,detail:n,position:{x:s.x,y:s.y,z:s.z},priority:r,offsetX:a,offsetY:o})}function Z_(i,e){i.matrix.makeBasis(new R(e.x.x,e.x.y,e.x.z),new R(e.y.x,e.y.y,e.y.z),new R(e.z.x,e.z.y,e.z.z)),i.matrix.setPosition(e.origin.x,e.origin.y,e.origin.z),i.matrixWorldNeedsUpdate=!0}function ku(i,e){const t=sn(e,i.origin);return he(t.x*i.x.x+t.y*i.x.y+t.z*i.x.z,t.x*i.y.x+t.y*i.y.y+t.z*i.y.z,t.x*i.z.x+t.y*i.z.y+t.z*i.z.z)}function Vc(i){return Math.max(0,Math.min(1,i))}function $_(i){return i-Math.floor(i)}function Q_(){const i=document.createElement("canvas");i.width=32,i.height=128;const e=i.getContext("2d");if(!e)return new Jt({color:10134447,emissive:Ds});e.fillStyle="#9aa3af",e.fillRect(0,0,32,128),e.fillStyle="#1b212b";for(let n=0;n<128;n+=16)e.fillRect(0,n,32,6);const t=new Vr(i);return t.wrapS=gi,t.wrapT=gi,t.repeat.set(1,8),new Jt({color:12042444,map:t,metalness:.64,roughness:.34,emissive:Ds,emissiveIntensity:.04})}function j_(){const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d"),t=new Vr(i);if(!e)return t;const n=e.createImageData(128,128);let s=42;for(let r=0;r<n.data.length;r+=4){s=s*1664525+1013904223>>>0;const a=150+s%70;n.data[r]=a,n.data[r+1]=a,n.data[r+2]=a,n.data[r+3]=255}return e.putImageData(n,0,0),t.wrapS=gi,t.wrapT=gi,t.repeat.set(3,3),t.colorSpace=Cn,t}function ex(){const i=document.createElement("canvas");i.width=16,i.height=128;const e=i.getContext("2d"),t=new Vr(i);if(!e)return t;const n=e.createLinearGradient(0,0,0,128);return n.addColorStop(0,"#12151c"),n.addColorStop(.55,"#232a36"),n.addColorStop(1,"#0b0d12"),e.fillStyle=n,e.fillRect(0,0,16,128),t.colorSpace=Ht,t}function tx(i){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d"),n=new Vr(e);if(n.mapping=Sr,n.colorSpace=Ht,t){const a=t.createLinearGradient(0,0,0,256);a.addColorStop(0,"#10141b"),a.addColorStop(.5,"#2c3442"),a.addColorStop(1,"#0c0e13"),t.fillStyle=a,t.fillRect(0,0,512,256),t.fillStyle="rgba(255,246,232,0.9)",t.beginPath(),t.ellipse(370,64,78,34,-.4,0,Math.PI*2),t.fill(),t.fillStyle="rgba(150, 205, 214, 0.35)",t.beginPath(),t.ellipse(78,120,36,80,.3,0,Math.PI*2),t.fill()}const s=new Io(i),r=s.fromEquirectangular(n).texture;return s.dispose(),n.dispose(),r}function nx(i,e,t){const n=new P_(i);n.addPass(new D_(e,t));const s=new ts(new ve(1,1),.08,.28,.94);return n.addPass(s),n.addPass(new L_),n}const Wu=document.querySelector("#loader"),Ha=document.querySelector("#fallback"),ix=document.querySelector("#app"),$i=document.querySelector("#view"),Va=document.querySelector("#labels"),Mr=document.querySelector("#leaders"),kc=document.querySelector("#caption"),Wc=document.querySelector("#summary"),Xc=document.querySelector("#time-readout"),qc=document.querySelector("#shot-readout"),Xi=document.querySelector("#timeline"),Ts=document.querySelector("#play"),Yc=document.querySelector("#banner"),Xu=document.querySelector("#reduced"),vi=new y_,qu=window.matchMedia("(prefers-reduced-motion: reduce)");let In=null,lt=0,$t=!1,li=qu.matches,Kr=0,Jr=0,Kc=0,Mi=!1;const sx=new URLSearchParams(window.location.search),Jc=Number(sx.get("t"));Number.isFinite(Jc)&&(lt=Math.min(ti,Math.max(0,Jc)));function ka(i){if(Wu?.setAttribute("hidden",""),ix?.setAttribute("hidden",""),!Ha)return;Ha.hidden=!1;const e=Ha.querySelector("#fallback-note");e&&(e.textContent=i)}function rx(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function Zr(){return performance.now()/1e3}function os(){if(!In)return;const i=v_(lt);In.update(i),ax(In.labels()),kc&&(kc.textContent=`${i.shot.name}. ${i.shot.caption}`),Xc&&(Xc.textContent=`${lt.toFixed(3)} s · frame ${String(i.frame).padStart(4,"0")}`),qc&&(qc.textContent=`Shot ${i.shot.id} of 5`),Xi&&(Xi.value=String(lt),Xi.setAttribute("aria-valuenow",lt.toFixed(3)),Xi.setAttribute("aria-valuetext",`${lt.toFixed(1)} seconds, shot ${i.shot.id}, ${i.shot.name}`)),Ts&&(Ts.textContent=$t?"Pause":"Play",Ts.setAttribute("aria-pressed",$t?"true":"false"),Ts.setAttribute("aria-label",$t?"Pause animation":"Play animation")),vi.update(lt,$t,Mi,i.motionEnergy),Mi=!1,i.shot.id!==Kc&&(Kc=i.shot.id,$r(i.shot.id,i.shot.name,i.shot.caption))}function $r(i,e,t){Wc&&(Wc.textContent=`Shot ${i}, ${e}. ${t}`)}function ax(i){if(!In||!Va||!Mr||!$i)return;const e=$i.clientWidth,t=$i.clientHeight;Mr.setAttribute("viewBox",`0 0 ${e} ${t}`);const n=e<760,s=i.filter(a=>n?a.priority===1:!0).slice(0,n?3:5);Va.replaceChildren(),Mr.replaceChildren();const r=[];for(const a of s){const o=ox(a.position,e,t);if(!o)continue;let c=o.x+a.offsetX,l=o.y+a.offsetY;for(const x of r)Math.abs(x.x-c)<120&&Math.abs(x.y-l)<36&&(l+=34);c=Math.max(8,Math.min(e-160,c)),l=Math.max(8,Math.min(t-72,l)),r.push({x:c,y:l});const h=document.createElement("div");h.className="tag";const d=document.createElement("strong");d.textContent=a.title;const u=document.createElement("span");u.textContent=a.detail,h.append(d,u),h.style.left=`${c}px`,h.style.top=`${l}px`,Va.append(h);const f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("x1",String(o.x)),f.setAttribute("y1",String(o.y)),f.setAttribute("x2",String(c)),f.setAttribute("y2",String(l+8)),Mr.append(f)}}function ox(i,e,t){if(!In)return null;const n=new R(i.x,i.y,i.z);if(n.project(In.camera),n.z>1)return null;const s=(n.x*.5+.5)*e,r=(-n.y*.5+.5)*t;return s<-40||r<-40||s>e+40||r>t+40?null:{x:s,y:r}}function Yn(i,e=!1){lt=Math.min(ti,Math.max(0,i)),$t&&(Kr=lt,Jr=Zr()),Mi=!0,e&&$r(Ls(lt).id,Ls(lt).name,Ls(lt).caption),os()}function lx(){vi.ensure(),vi.resume(),lt>=ti&&(lt=0),Kr=lt,Jr=Zr(),$t=!0,Mi=!0,os()}function hl(){$t=!1,Mi=!0,vi.update(lt,!1,!0,0);const i=Ls(lt);$r(i.id,i.name,`${i.caption} Paused at ${lt.toFixed(1)} seconds.`),os()}function Zc(){$t?hl():lx()}function $c(){vi.ensure(),vi.resume(),lt=0,$t=!0,Kr=0,Jr=Zr(),Mi=!0,os()}function Qc(i){const e=Bo.map(n=>n.start);let t=0;for(let n=0;n<e.length;n+=1)lt>=e[n]-.02&&(t=n);i>0?Yn(e[Math.min(e.length-1,t+1)],!0):lt-e[t]>.4?Yn(e[t],!0):Yn(e[Math.max(0,t-1)],!0),$t&&hl()}function Cr(){const i=Number(document.querySelector("#music")?.value??.72),e=Number(document.querySelector("#effects")?.value??.78),t=document.querySelector("#mute")?.getAttribute("aria-pressed")==="true";vi.setMix({music:i,effects:e,muted:t})}function Go(i){li=i,document.body.classList.toggle("is-reduced",li),Xu?.setAttribute("aria-pressed",li?"true":"false"),Yc&&(Yc.hidden=!li),li&&$t&&hl()}function Yu(){if($t){const i=Kr+(Zr()-Jr);i>=ti?(lt=ti,$t=!1,Mi=!0,$r(5,"Coordinated manipulation","Final frame held.")):lt=i}os(),requestAnimationFrame(Yu)}function cx(){Ts?.addEventListener("click",Zc),document.querySelector("#replay")?.addEventListener("click",$c),document.querySelector("#prev-shot")?.addEventListener("click",()=>Qc(-1)),document.querySelector("#next-shot")?.addEventListener("click",()=>Qc(1)),Xi?.addEventListener("input",()=>Yn(Number(Xi.value),!0)),document.querySelector("#music")?.addEventListener("input",Cr),document.querySelector("#effects")?.addEventListener("input",Cr),document.querySelector("#mute")?.addEventListener("click",e=>{const t=e.currentTarget,n=t.getAttribute("aria-pressed")==="true";t.setAttribute("aria-pressed",n?"false":"true"),t.textContent=n?"Mute":"Unmute",t.setAttribute("aria-label",n?"Mute audio":"Unmute audio"),Cr()}),document.querySelector("#fullscreen")?.addEventListener("click",async()=>{const e=document.documentElement;document.fullscreenEnabled&&(document.fullscreenElement?await document.exitFullscreen():await e.requestFullscreen())}),Xu?.addEventListener("click",()=>Go(!li)),window.addEventListener("keydown",e=>{const t=e.target?.tagName;t==="INPUT"||t==="BUTTON"||t==="SUMMARY"||t==="TEXTAREA"||(e.code==="Space"?(e.preventDefault(),Zc()):e.code==="KeyR"?$c():e.code==="KeyM"?document.querySelector("#mute")?.click():e.code==="KeyF"?document.querySelector("#fullscreen")?.click():e.code==="ArrowRight"?Yn(lt+(e.shiftKey?.1:1),!0):e.code==="ArrowLeft"?Yn(lt-(e.shiftKey?.1:1),!0):e.code==="Home"?Yn(0,!0):e.code==="End"&&Yn(ti,!0))}),window.addEventListener("resize",()=>In?.resize()),qu.addEventListener?.("change",e=>Go(e.matches));const i=document.querySelector("#fullscreen");i&&!document.fullscreenEnabled&&(i.disabled=!0,i.textContent="Fullscreen unavailable")}function ux(){if(!$i||!rx()){ka("WebGL is unavailable in this browser. The schematic below describes the same illustrative mechanism.");return}try{In=N_($i),$i.addEventListener("webglcontextlost",i=>{i.preventDefault(),ka("The graphics context was lost before the specimen could keep drawing.")})}catch(i){const e=i instanceof Error?i.message:"The 3D viewer could not start.";ka(e);return}cx(),Go(li),Cr(),In.resize(),os(),Wu?.setAttribute("hidden",""),requestAnimationFrame(Yu)}ux();
//# sourceMappingURL=index-6Rjvx65k.js.map
