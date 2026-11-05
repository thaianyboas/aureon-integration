var om=0,cf=1,am=2;var ga=1,Dc=2,Gs=3,Rn=0,Je=1,te=2,qe=0,vn=1,Me=2,uf=3,ba=4,vi=5;var yn=100,lm=101,cm=102,um=103,hm=104,Jn=200,yi=201,fm=202,dm=203,hr=204,hf=205,xa=206,pm=207,va=208,mm=209,gm=210,bm=211,xm=212,vm=213,ym=214,ic=0,rc=1,sc=2,Ps=3,oc=4,ac=5,lc=6,cc=7,Nc=0,Mm=1,_m=2,Hn=0,ya=1,Ma=2,_a=3,ki=4,wa=5,Sa=6,Ta=7,$h="attached",wm="detached",ff=300,fr=301,Hr=302,Hs=303,Oc=304,Aa=306,je=1e3,bn=1001,Cs=1002,Xe=1003,Sm=1004;var Ea=1005;var Ye=1006,Uc=1007;var dr=1008,df=1008,sn=1009,Ra=1010,Pa=1011,pr=1012,Ws=1013,Wn=1014,Fn=1015,an=1016,Bc=1017,kc=1018,mr=1020,pf=35902,mf=35899,gf=1021,bf=1022,ln=1023,mi=1026,Mi=1027,Xs=1028,qs=1029,_i=1030,Ys=1031;var $s=1033,Ca=33776,Ia=33777,La=33778,Fa=33779,zc=35840,Vc=35841,Gc=35842,Hc=35843,Wc=36196,Xc=37492,qc=37496,Yc=37488,$c=37489,Da=37490,Zc=37491,Kc=37808,jc=37809,Jc=37810,Qc=37811,tu=37812,eu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,lu=37820,cu=37821,uu=36492,hu=36494,fu=36495,du=36283,pu=36284,Na=36285,mu=36286;var ko=2300,uc=2301,tc=2302,Zh=2303,Kh=2400,jh=2401,Jh=2402;var Tm=3200,xf=3201;var Zs=0,Am=1,Xn="",we="srgb",zo="srgb-linear",Vo="linear",_e="srgb";var ec=7680;var Em=519,Rm=512,Pm=513,Cm=514,gu=515,Im=516,Lm=517,bu=518,Fm=519,vf=35044,yf=35048;var Mf="300 es",oi=2e3,Is=2001;function Vx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dm(){let i=Ls("canvas");return i.style.display="block",i}var bp={},Fs=null;function Go(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function Nm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Nm(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Nm(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function er(...i){let t=i.join(" ");t in bp||(bp[t]=!0,Zt(...i))}function Om(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Um={[ic]:rc,[sc]:lc,[oc]:cc,[Ps]:ac,[rc]:ic,[lc]:sc,[cc]:oc,[ac]:Ps},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yh=Math.PI/180,hc=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function Hx(i,t){return(i%t+t)%t}function Mh(i,t,e){return(1-e)*i+e*t}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Af=class Af{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Af.prototype.isVector2=!0;var zt=Af,Dn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],b=s[o+3];if(u!==b||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*b;m<0&&(f=-f,d=-d,p=-p,b=-b,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);g=Math.sin(g*x)/y,a=Math.sin(a*x)/y,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ef=class Ef{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;var W=Ef,_h=new W,xp=new Dn,Rf=class Rf{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],m=r[3],g=r[6],x=r[1],y=r[4],v=r[7],M=r[2],S=r[5],A=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*m+a*y+l*S,s[6]=o*g+a*v+l*A,s[1]=c*b+h*x+u*M,s[4]=c*m+h*y+u*S,s[7]=c*g+h*v+u*A,s[2]=f*b+d*x+p*M,s[5]=f*m+d*y+p*S,s[8]=f*g+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(t,e)),this}rotate(t){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-t)),this}translate(t,e){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rf.prototype.isMatrix3=!0;var Qt=Rf,wh=new Qt,vp=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yp=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wx(){let i={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zo]:{primaries:t,whitePoint:n,transfer:Vo,toXYZ:vp,fromXYZ:yp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:vp,fromXYZ:yp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var pe=Wx();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Ls("canvas")),as.width=t.width,as.height=t.height;let r=as.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xx=0,Dr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sh(r[o].image)):s.push(Sh(r[o]))}else s=Sh(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Ho=class extends Dr{constructor(t=null){er('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},qx=0,Th=new W,dn=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,r=bn,s=Ye,o=dr,a=ln,l=sn,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Oi(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case je:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Cs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case je:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Cs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ff;dn.DEFAULT_ANISOTROPY=1;var Pf=class Pf{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(g+1)/2,S=(h+f)/4,A=(u+b)/4,_=(p+m)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=S/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=_/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=_/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pf.prototype.isVector4=!0;var Se=Pf,dc=class extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new dn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Dr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pe=class extends dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Wo=class extends Pe{constructor(t=1,e=1,n=1,r={}){super(t,e,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new nr(null,t,e,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},pc=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fc=class Fc{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,m)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yx,t,$x)}lookAt(t,e,n){let r=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ki.crossVectors(n,Bn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ki.crossVectors(n,Bn)),Ki.normalize(),wl.crossVectors(Bn,Ki),r[0]=Ki.x,r[4]=wl.x,r[8]=Bn.x,r[1]=Ki.y,r[5]=wl.y,r[9]=Bn.y,r[2]=Ki.z,r[6]=wl.z,r[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],m=n[10],g=n[14],x=n[3],y=n[7],v=n[11],M=n[15],S=r[0],A=r[4],_=r[8],E=r[12],w=r[1],T=r[5],I=r[9],D=r[13],C=r[2],P=r[6],R=r[10],N=r[14],F=r[3],O=r[7],k=r[11],V=r[15];return s[0]=o*S+a*w+l*C+c*F,s[4]=o*A+a*T+l*P+c*O,s[8]=o*_+a*I+l*R+c*k,s[12]=o*E+a*D+l*N+c*V,s[1]=h*S+u*w+f*C+d*F,s[5]=h*A+u*T+f*P+d*O,s[9]=h*_+u*I+f*R+d*k,s[13]=h*E+u*D+f*N+d*V,s[2]=p*S+b*w+m*C+g*F,s[6]=p*A+b*T+m*P+g*O,s[10]=p*_+b*I+m*R+g*k,s[14]=p*E+b*D+m*N+g*V,s[3]=x*S+y*w+v*C+M*F,s[7]=x*A+y*T+v*P+M*O,s[11]=x*_+y*I+v*R+M*k,s[15]=x*E+y*D+v*N+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],m=t[11],g=t[15],x=l*d-c*f,y=a*d-c*u,v=a*f-l*u,M=o*d-c*h,S=o*f-l*h,A=o*u-a*h;return e*(b*x-m*y+g*v)-n*(p*x-m*M+g*S)+r*(p*y-b*M+g*A)-s*(p*v-b*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],m=t[14],g=t[15],x=e*a-n*o,y=e*l-r*o,v=e*c-s*o,M=n*l-r*a,S=n*c-s*a,A=r*c-s*l,_=h*b-u*p,E=h*m-f*p,w=h*g-d*p,T=u*m-f*b,I=u*g-d*b,D=f*g-d*m,C=x*D-y*I+v*T+M*w-S*E+A*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=(a*D-l*I+c*T)*P,t[1]=(r*I-n*D-s*T)*P,t[2]=(b*A-m*S+g*M)*P,t[3]=(f*S-u*A-d*M)*P,t[4]=(l*w-o*D-c*E)*P,t[5]=(e*D-r*w+s*E)*P,t[6]=(m*v-p*A-g*y)*P,t[7]=(h*A-f*v+d*y)*P,t[8]=(o*I-a*w+c*_)*P,t[9]=(n*w-e*I-s*_)*P,t[10]=(p*S-b*v+g*x)*P,t[11]=(u*v-h*S-d*x)*P,t[12]=(a*E-o*T-l*_)*P,t[13]=(e*T-n*E+r*_)*P,t[14]=(b*y-p*M-m*x)*P,t[15]=(h*M-u*y+f*x)*P,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,b=o*h,m=o*u,g=a*u,x=l*c,y=l*h,v=l*u,M=n.x,S=n.y,A=n.z;return r[0]=(1-(b+g))*M,r[1]=(d+v)*M,r[2]=(p-y)*M,r[3]=0,r[4]=(d-v)*S,r[5]=(1-(f+g))*S,r[6]=(m+x)*S,r[7]=0,r[8]=(p+y)*A,r[9]=(m-x)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=ls.set(r[0],r[1],r[2]).length(),a=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,u=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,e.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=oi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=s/(o-s),b=o*s/(o-s);else if(a===oi)p=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Is)p=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(o-s),b=o/(o-s);else if(a===oi)p=-2/(o-s),b=-(o+s)/(o-s);else if(a===Is)p=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fc.prototype.isMatrix4=!0;var jt=Fc,ls=new W,ni=new jt,Yx=new W(0,0,0),$x=new W(1,1,1),Ki=new W,wl=new W,Bn=new W,Mp=new jt,_p=new Dn,bi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _p.setFromEuler(this),this.setFromQuaternion(_p,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zx=0,wp=new W,cs=new Dn,Ci=new jt,Sl=new W,Eo=new W,Kx=new W,jx=new Dn,Sp=new W(1,0,0),Tp=new W(0,1,0),Ap=new W(0,0,1),Ep={type:"added"},Jx={type:"removed"},us={type:"childadded",child:null},Ah={type:"childremoved",child:null},$e=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new bi,n=new Dn,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Sp,t)}rotateY(t){return this.rotateOnAxis(Tp,t)}rotateZ(t){return this.rotateOnAxis(Ap,t)}translateOnAxis(t,e){return wp.copy(t).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sp,t)}translateY(t){return this.translateOnAxis(Tp,t)}translateZ(t){return this.translateOnAxis(Ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sl.copy(t):Sl.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Eo,Sl,this.up):Ci.lookAt(Sl,Eo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ci),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ep),us.child=t,this.dispatchEvent(us),us.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jx),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ep),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,Kx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new W(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qx={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),g=this._getHandJoint(c,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Z=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=pe.workingColorSpace){if(t=Hx(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Eh(o,s,t+1/3),this.g=Eh(o,s,t),this.b=Eh(o,s,t-1/3)}return pe.colorSpaceToWorking(this,r),this}setStyle(t,e=we){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Bm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return pe.workingToColorSpace(An.copy(this),t),Math.round(oe(An.r*255,0,255))*65536+Math.round(oe(An.g*255,0,255))*256+Math.round(oe(An.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(An.copy(this),e);let n=An.r,r=An.g,s=An.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=we){pe.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,r=An.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Tl);let n=Mh(ji.h,Tl.h,e),r=Mh(ji.s,Tl.s,e),s=Mh(ji.l,Tl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Z;Z.NAMES=Bm;var Xo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var En=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new W,Ii=new W,Rh=new W,Li=new W,hs=new W,fs=new W,Rp=new W,Ph=new W,Ch=new W,Ih=new W,Lh=new Se,Fh=new Se,Dh=new Se,si=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ii.subVectors(t,e),r.cross(ii);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ii.subVectors(r,e),Ii.subVectors(n,e),Rh.subVectors(t,e);let o=ii.dot(ii),a=ii.dot(Ii),l=ii.dot(Rh),c=Ii.dot(Ii),h=Ii.dot(Rh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Lh.setScalar(0),Fh.setScalar(0),Dh.setScalar(0),Lh.fromBufferAttribute(t,e),Fh.fromBufferAttribute(t,n),Dh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Lh,s.x),o.addScaledVector(Fh,s.y),o.addScaledVector(Dh,s.z),o}static isFrontFacing(t,e,n,r){return ii.subVectors(n,e),Ii.subVectors(t,e),ii.cross(Ii).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ii.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;hs.subVectors(r,n),fs.subVectors(s,n),Ph.subVectors(t,n);let l=hs.dot(Ph),c=fs.dot(Ph);if(l<=0&&c<=0)return e.copy(n);Ch.subVectors(t,r);let h=hs.dot(Ch),u=fs.dot(Ch);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hs,o);Ih.subVectors(t,s);let d=hs.dot(Ih),p=fs.dot(Ih);if(p>=0&&d<=p)return e.copy(s);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(fs,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Rp.subVectors(s,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(Rp,a);let g=1/(m+b+f);return o=b*g,a=f*g,e.copy(n).addScaledVector(hs,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ke=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Al.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(t.matrixWorld),this.union(Al)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),El.subVectors(this.max,Ro),ds.subVectors(t.a,Ro),ps.subVectors(t.b,Ro),ms.subVectors(t.c,Ro),Ji.subVectors(ps,ds),Qi.subVectors(ms,ps),Cr.subVectors(ds,ms);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Cr.z,Cr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Cr.z,0,-Cr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Cr.y,Cr.x,0];return!Nh(e,ds,ps,ms,El)||(e=[1,0,0,0,1,0,0,0,1],!Nh(e,ds,ps,ms,El))?!1:(Rl.crossVectors(Ji,Qi),e=[Rl.x,Rl.y,Rl.z],Nh(e,ds,ps,ms,El))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new W,new W,new W,new W,new W,new W,new W,new W],ri=new W,Al=new ke,ds=new W,ps=new W,ms=new W,Ji=new W,Qi=new W,Cr=new W,Ro=new W,El=new W,Rl=new W,Ir=new W;function Nh(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ir.fromArray(i,s);let a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=t.dot(Ir),c=e.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ni=tv();function tv(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function ev(i){Math.abs(i)>65504&&Zt("DataUtils.toHalfFloat(): Value out of range."),i=oe(i,-65504,65504),Ni.floatView[0]=i;let t=Ni.uint32View[0],e=t>>23&511;return Ni.baseTable[e]+((t&8388607)>>Ni.shiftTable[e])}function nv(i){let t=i>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[t]+(i&1023)]+Ni.exponentTable[t],Ni.floatView[0]}var qo=class{static toHalfFloat(t){return ev(t)}static fromHalfFloat(t){return nv(t)}},en=new W,Pl=new zt,iv=0,Ee=class extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pl.fromBufferAttribute(this,e),Pl.applyMatrix3(t),this.setXY(e,Pl.x,Pl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var It=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},rv=new ke,Po=new W,Oh=new W,jn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);let e=Po.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Po,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Oh)),this.expandByPoint(Po.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sv=0,Kn=new jt,Uh=new $e,gs=new W,kn=new ke,Co=new ke,fn=new W,Ft=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vx(t)?Or:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(kn.min,Co.min),kn.expandByPoint(fn),fn.addVectors(kn.max,Co.max),kn.expandByPoint(fn)):(kn.expandByPoint(Co.min),kn.expandByPoint(Co.max))}kn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)fn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(fn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),fn.add(gs)),r=Math.max(r,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ee(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new W,l[_]=new W;let c=new W,h=new W,u=new W,f=new zt,d=new zt,p=new zt,b=new W,m=new W;function g(_,E,w){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),f.fromBufferAttribute(s,_),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,w),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(T),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(T),a[_].add(b),a[E].add(b),a[w].add(b),l[_].add(m),l[E].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,E=x.length;_<E;++_){let w=x[_],T=w.start,I=w.count;for(let D=T,C=T+I;D<C;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new W,v=new W,M=new W,S=new W;function A(_){M.fromBufferAttribute(r,_),S.copy(M);let E=a[_];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(S,E);let T=v.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,T)}for(let _=0,E=x.length;_<E;++_){let w=x[_],T=w.start,I=w.count;for(let D=T,C=T+I;D<C;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ee(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new W,Yo=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bh=new W,ov=new W,av=new Qt,Ln=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Bh.subVectors(n,e).cross(ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Bh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||av.getNormalMatrix(t),r=this.coplanarPoint(Bh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lv=0,zn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=vn,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=hf,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ir=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bs,Io=new W,xs=new W,vs=new W,ys=new zt,Lo=new zt,km=new jt,Cl=new W,Fo=new W,Il=new W,Pp=new zt,kh=new zt,Cp=new zt,Ur=class extends $e{constructor(t=new ir){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Ft;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mc(e,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Yo(n,3,0,!1)),bs.setAttribute("uv",new Yo(n,2,3,!1))}this.geometry=bs,this.material=t,this.center=new zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),km.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Ll(Cl.set(-.5,-.5,0),vs,o,xs,r,s),Ll(Fo.set(.5,-.5,0),vs,o,xs,r,s),Ll(Il.set(.5,.5,0),vs,o,xs,r,s),Pp.set(0,0),kh.set(1,0),Cp.set(1,1);let a=t.ray.intersectTriangle(Cl,Fo,Il,!1,Io);if(a===null&&(Ll(Fo.set(-.5,.5,0),vs,o,xs,r,s),kh.set(0,1),a=t.ray.intersectTriangle(Cl,Il,Fo,!1,Io),a===null))return;let l=t.ray.origin.distanceTo(Io);l<t.near||l>t.far||e.push({distance:l,point:Io.clone(),uv:si.getInterpolation(Io,Cl,Fo,Il,Pp,kh,Cp,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ll(i,t,e,n,r,s){ys.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Lo.x=s*ys.x-r*ys.y,Lo.y=r*ys.x+s*ys.y):Lo.copy(ys),i.copy(t),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(km)}var Di=new W,zh=new W,Fl=new W,Dl=new W,xi=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zh.copy(t).add(e).multiplyScalar(.5),Fl.copy(e).sub(t).normalize(),Dl.copy(this.origin).sub(zh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Fl),a=Dl.dot(this.direction),l=-Dl.dot(Fl),c=Dl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zh).addScaledVector(Fl,f),d}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,b=e.y-o.y,m=e.z-o.z,g=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h),A,_,E,w,T,I,D,C,P,R,N,F;if(v>=M&&v>=S?(E=l,I=u,P=p,F=g,l>=0?(A=c,_=h,w=f,T=d,D=b,C=m,R=x,N=y):(A=h,_=c,w=d,T=f,D=m,C=b,R=y,N=x)):M>=S?(E=c,I=f,P=b,F=x,c>=0?(A=h,_=l,w=d,T=u,D=m,C=p,R=y,N=g):(A=l,_=h,w=u,T=d,D=p,C=m,R=g,N=y)):(E=h,I=d,P=m,F=y,h>=0?(A=l,_=c,w=u,T=f,D=p,C=b,R=g,N=x):(A=c,_=l,w=f,T=u,D=b,C=p,R=x,N=g)),E===0)return null;let O=A/E,k=_/E,V=1/E,q=w-O*I,z=T-k*I,$=D-O*P,J=C-k*P,ot=R-O*F,H=N-k*F,X=ot*J-H*$,et=q*H-z*ot,st=$*z-J*q;if(r){if(X<0||et<0||st<0)return null}else if((X<0||et<0||st<0)&&(X>0||et>0||st>0))return null;let tt=X+et+st;if(tt===0)return null;let ct=V*(X*I+et*P+st*F);return(tt>0?ct<0:ct>0)?null:this.at(ct/tt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ip=new jt,Lr=new xi,Nl=new jn,Lp=new W,Ol=new W,Ul=new W,Bl=new W,Vh=new W,kl=new W,Fp=new W,zl=new W,bt=class extends $e{constructor(t=new Ft,e=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Vh.fromBufferAttribute(u,t),o?kl.addScaledVector(Vh,h):kl.addScaledVector(Vh.sub(e),h))}e.add(kl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(Nl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Nl,Lp)===null||Lr.origin.distanceToSquared(Lp)>(t.far-t.near)**2))&&(Ip.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Ip),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let S=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);r=Vl(this,g,t,n,c,h,u,S,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Vl(this,o,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let S=v,A=v+1,_=v+2;r=Vl(this,g,t,n,c,h,u,S,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=m,y=m+1,v=m+2;r=Vl(this,o,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function cv(i,t,e,n,r,s,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Rn,a),l===null)return null;zl.copy(a),zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zl);return c<e.near||c>e.far?null:{distance:c,point:zl.clone(),object:i}}function Vl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ol),i.getVertexPosition(l,Ul),i.getVertexPosition(c,Bl);let h=cv(i,t,e,n,Ol,Ul,Bl,Fp);if(h){let u=new W;si.getBarycoord(Fp,Ol,Ul,Bl,u),r&&(h.uv=si.getInterpolatedAttribute(r,a,l,c,u,new zt)),s&&(h.uv1=si.getInterpolatedAttribute(s,a,l,c,u,new zt)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new W,materialIndex:0};si.getNormal(Ol,Ul,Bl,f.normal),h.face=f,h.barycoord=u}return h}var Do=new Se,Dp=new Se,Np=new Se,uv=new Se,Op=new jt,Gl=new W,Gh=new jn,Up=new jt,Hh=new xi,$o=class extends bt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new jt,this.bindMatrixInverse=new jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Gl),this.boundingBox.expandByPoint(Gl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Gl),this.boundingSphere.expandByPoint(Gl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gh.copy(this.boundingSphere),Gh.applyMatrix4(r),t.ray.intersectsSphere(Gh)!==!1&&(Up.copy(r).invert(),Hh.copy(t.ray).applyMatrix4(Up),!(this.boundingBox!==null&&Hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Hh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,r=this.geometry;Dp.fromBufferAttribute(r.attributes.skinIndex,t),Np.fromBufferAttribute(r.attributes.skinWeight,t),e.isVector4?(Do.copy(e),e.set(0,0,0,0)):(Do.set(...e,1),e.set(0,0,0)),Do.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Np.getComponent(s);if(o!==0){let a=Dp.getComponent(s);Op.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(uv.copy(Do).applyMatrix4(Op),o)}}return e.isVector4&&(e.w=Do.w),e.applyMatrix4(this.bindMatrixInverse)}},Os=class extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nn=class extends dn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bp=new jt,hv=new jt,Zo=class i{constructor(t=[],e=[]){this.uuid=Oi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:hv;Bp.multiplyMatrices(a,e[s]),Bp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Nn(e,t,t,ln,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){let s=t.bones[n],o=e[s];o===void 0&&(Zt("Skeleton: No bone found with UUID:",s),o=new Os),this.bones.push(o),this.boneInverses.push(new jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){let o=e[r];t.bones.push(o.uuid);let a=n[r];t.boneInverses.push(a.toArray())}return t}},Ko=class extends Ee{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new jt,kp=new jt,Hl=[],zp=new ke,fv=new jt,No=new bt,Oo=new jn,jo=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,fv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),zp.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(zp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Oo.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(Oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),t.ray.intersectsSphere(Oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ms),kp.multiplyMatrices(n,Ms),No.matrixWorld=kp,No.raycast(t,Hl);for(let o=0,a=Hl.length;o<a;o++){let l=Hl[o];l.instanceId=s,l.object=this,e.push(l)}Hl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(r*this.count),r,this.count,Xs,Fn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fr=new jn,dv=new zt(.5,.5),Wl=new W,Us=class{constructor(t=new Ln,e=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],b=s[9],m=s[10],g=s[11],x=s[12],y=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-h,g-p,M-x).normalize(),r[1].setComponents(c+o,d+h,g+p,M+x).normalize(),r[2].setComponents(c+a,d+u,g+b,M+y).normalize(),r[3].setComponents(c-a,d-u,g-b,M-y).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,d-f,g-m,M-v).normalize();else if(r[4].setComponents(c-l,d-f,g-m,M-v).normalize(),e===oi)r[5].setComponents(c+l,d+f,g+m,M+v).normalize();else if(e===Is)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){Fr.center.set(0,0,0);let e=dv.distanceTo(t.center);return Fr.radius=.7071067811865476+e,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Wl.x=r.normal.x>0?t.max.x:t.min.x,Wl.y=r.normal.y>0?t.max.y:t.min.y,Wl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var on=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gc=new W,bc=new W,Vp=new jt,Uo=new xi,Xl=new jn,Wh=new W,Gp=new W,xc=class extends $e{constructor(t=new Ft,e=new on){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)gc.fromBufferAttribute(e,r-1),bc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=gc.distanceTo(bc);t.setAttribute("lineDistance",new It(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=s,t.ray.intersectsSphere(Xl)===!1)return;Vp.copy(r).invert(),Uo.copy(t.ray).applyMatrix4(Vp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let b=d,m=p-1;b<m;b+=c){let g=h.getX(b),x=h.getX(b+1),y=ql(this,t,Uo,l,g,x,b);y&&e.push(y)}if(this.isLineLoop){let b=h.getX(p-1),m=h.getX(d),g=ql(this,t,Uo,l,b,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let b=d,m=p-1;b<m;b+=c){let g=ql(this,t,Uo,l,b,b+1,b);g&&e.push(g)}if(this.isLineLoop){let b=ql(this,t,Uo,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ql(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(gc.fromBufferAttribute(a,r),bc.fromBufferAttribute(a,s),e.distanceSqToSegment(gc,bc,Wh,Gp)>n)return;Wh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wh);if(!(c<t.near||c>t.far))return{distance:c,point:Gp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hp=new W,Wp=new W,nn=class extends xc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Hp.fromBufferAttribute(e,r),Wp.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hp.distanceTo(Wp);t.setAttribute("lineDistance",new It(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bi=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xp=new jt,Qh=new xi,Yl=new jn,$l=new W,rr=class extends $e{constructor(t=new Ft,e=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=s,t.ray.intersectsSphere(Yl)===!1)return;Xp.copy(r).invert(),Qh.copy(t.ray).applyMatrix4(Xp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,b=d;p<b;p++){let m=c.getX(p);$l.fromBufferAttribute(u,m),qp($l,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,b=d;p<b;p++)$l.fromBufferAttribute(u,p),qp($l,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function qp(i,t,e,n,r,s,o){let a=Qh.distanceSqToPoint(i);if(a<e){let l=new W;Qh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jo=class extends dn{constructor(t=[],e=fr,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rn=class extends dn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var On=class extends dn{constructor(t,e,n=Wn,r,s,o,a=Xe,l=Xe,c,h=mi,u=1){if(h!==mi&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vc=class extends On{constructor(t,e=Wn,n=fr,r,s,o=Xe,a=Xe,l,c=mi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qo=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sr=class i extends Ft{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function p(b,m,g,x,y,v,M,S,A,_,E){let w=v/A,T=M/_,I=v/2,D=M/2,C=S/2,P=A+1,R=_+1,N=0,F=0,O=new W;for(let k=0;k<R;k++){let V=k*T-D;for(let q=0;q<P;q++){let z=q*w-I;O[b]=z*x,O[m]=V*y,O[g]=C,c.push(O.x,O.y,O.z),O[b]=0,O[m]=0,O[g]=S>0?1:-1,h.push(O.x,O.y,O.z),u.push(q/A),u.push(1-k/_),N+=1}}for(let k=0;k<_;k++)for(let V=0;V<A;V++){let q=f+V+P*k,z=f+V+P*(k+1),$=f+(V+1)+P*(k+1),J=f+(V+1)+P*k;l.push(q,z,J),l.push(z,$,J),F+=6}a.addGroup(d,F,E),d+=F,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ta=class i extends Ft{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new W,h=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function pv(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=zm(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=vv(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ea(s,o,e,a,l,c,0),o}function zm(i,t,e,n,r){let s;if(r===Cv(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Yp(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Yp(o/n|0,i[o],i[o+1],s);return s&&Bs(s,s.next)&&(ia(s),s=s.next),s}function Br(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||We(e.prev,e,e.next)===0)){if(ia(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ea(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Sv(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?gv(i,n,r,s):mv(i)){t.push(l.i,i.i,c.i),ia(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bv(Br(i),t),ea(i,t,e,n,r,s,2)):o===2&&xv(i,t,e,n,r,s):ea(Br(i),t,e,n,r,s,1);break}}}function mv(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Bo(r,a,s,l,o,c,p.x,p.y)&&We(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gv(i,t,e,n){let r=i.prev,s=i,o=i.next;if(We(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),m=Math.max(h,u,f),g=tf(d,p,t,e,n),x=tf(b,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=g&&v&&v.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Bo(a,h,l,u,c,f,y.x,y.y)&&We(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&Bo(a,h,l,u,c,f,v.x,v.y)&&We(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Bo(a,h,l,u,c,f,y.x,y.y)&&We(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&Bo(a,h,l,u,c,f,v.x,v.y)&&We(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bv(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Bs(n,r)&&Gm(n,e,e.next,r)&&na(n,r)&&na(r,n)&&(t.push(n.i,e.i,r.i),ia(e),ia(e.next),e=i=r),e=e.next}while(e!==i);return Br(e)}function xv(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ev(o,a)){let l=Hm(o,a);o=Br(o,o.next),l=Br(l,l.next),ea(o,t,e,n,r,s,0),ea(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function vv(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=zm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Av(c))}r.sort(yv);for(let s=0;s<r.length;s++)e=Mv(r[s],e);return e}function yv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Mv(i,t){let e=_v(i,t);if(!e)return t;let n=Hm(e,i);return Br(n,n.next),Br(e,e.next)}function _v(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Bs(i,e))return e;do{if(Bs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vm(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);na(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&wv(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function wv(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function Sv(i,t,e,n){let r=i;do r.z===0&&(r.z=tf(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Tv(r)}function Tv(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function tf(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Av(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vm(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Bo(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Vm(i,t,e,n,r,s,o,a)}function Ev(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rv(i,t)&&(na(i,t)&&na(t,i)&&Pv(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||Bs(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bs(i,t){return i.x===t.x&&i.y===t.y}function Gm(i,t,e,n){let r=Kl(We(i,t,e)),s=Kl(We(i,t,n)),o=Kl(We(e,n,i)),a=Kl(We(e,n,t));return!!(r!==s&&o!==a||r===0&&Zl(i,e,t)||s===0&&Zl(i,n,t)||o===0&&Zl(e,i,n)||a===0&&Zl(e,t,n))}function Zl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kl(i){return i>0?1:i<0?-1:0}function Rv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function na(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Pv(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hm(i,t){let e=ef(i.i,i.x,i.y),n=ef(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yp(i,t,e,n){let r=ef(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ef(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cv(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var nf=class{static triangulate(t,e,n=2){return pv(t,e,n)}},ra=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];$p(t),Zp(n,t);let o=t.length;e.forEach($p);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Zp(n,e[l]);let a=nf.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function $p(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vn=class i extends Ft{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],m=[];for(let g=0;g<h;g++){let x=g*f-o;for(let y=0;y<c;y++){let v=y*u-s;p.push(v,-x,0),b.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let y=x+c*g,v=x+c*(g+1),M=x+1+c*(g+1),S=x+1+c*g;d.push(y,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sa=class i extends Ft{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new W,p=new zt;for(let b=0;b<=r;b++){for(let m=0;m<=n;m++){let g=s+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let m=b*(n+1);for(let g=0;g<n;g++){let x=g+m,y=x,v=x+n+1,M=x+n+2,S=x+1;a.push(y,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Wr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Kp(r))r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Kp(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Pn(i){let t={};for(let e=0;e<i.length;e++){let n=Wr(i[e]);for(let r in n)t[r]=n[r]}return t}function Kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Iv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _f(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var wi={clone:Wr,merge:Pn},Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=Iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Z().setHex(r.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ks=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Un=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},or=class extends Un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var oa=class extends zn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},aa=class extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _s(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ar=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mc=class extends ar{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:s=t,a=2*e-n;break;case Jh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=t,l=2*n-e;break;case Jh:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,m=b*p,g=-f*m+2*f*b-f*p,x=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*b+.5*p,v=d*m-d*b;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+x*o[c+M]+y*o[l+M]+v*o[u+M];return s}},_c=class extends ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},wc=class extends ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Sc=class extends ar{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*b+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=o[c+p],m=o[l+p],g=d*f+p*2,x=u[g],y=u[g+1],v=t*f+p*2,M=h[v],S=h[v+1],A=Nv(n,e,x,M,r);s[p]=Wm(A,b,y,S,m)}return s}};function Wm(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Dv(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Nv(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Wm(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Dv(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Gn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_s(e,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_s(t.times,Array),values:_s(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Xh(t.settings)&&(n.settings={inTangents:_s(t.settings.inTangents,Array),outTangents:_s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ko:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break;case Zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Xh(this.settings)&&(jp(this.settings.inTangents,t),jp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Gx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Xh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function jp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=uc;var lr=class extends Gn{constructor(t,e,n){super(t,e,n)}};lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=ko;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Gn{constructor(t,e,n,r){super(t,e,n,r)}};Tc.prototype.ValueTypeName="color";var Ac=class extends Gn{constructor(t,e,n,r){super(t,e,n,r)}};Ac.prototype.ValueTypeName="number";var Ec=class extends ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(s,0,o,c-a,o,c,l);return s}},la=class extends Gn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends Gn{constructor(t,e,n){super(t,e,n)}};cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=ko;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Gn{constructor(t,e,n,r){super(t,e,n,r)}};Rc.prototype.ValueTypeName="vector";var nc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Jp(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Jp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Jp(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Pc=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xm=new Pc,Vs=class{constructor(t){this.manager=t!==void 0?t:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=new WeakMap,Cc=class extends Vs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=nc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=ws.get(o);u===void 0&&(u=[],ws.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=Ls("img");function l(){h(),e&&e(this);let u=ws.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ws.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),nc.remove(`image:${t}`);let f=ws.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}ws.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),nc.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var kr=class extends Vs{constructor(t){super(t)}load(t,e,n,r){let s=new dn,o=new Cc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},zr=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ur=class extends zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qh=new jt,Qp=new W,tm=new W,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qp),tm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qh,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===Is||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jl=new W,Jl=new Dn,di=new W,ua=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jl,Jl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Jl,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jl,Jl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Jl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new W,em=new zt,nm=new zt,He=class extends ua{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,e){return this.getViewBounds(t,em,nm),e.subVectors(nm,em)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yh*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rf=class extends ca{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends zr{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xn=class extends ua{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sf=class extends ca{constructor(){super(new xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ha=class extends zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ss=-90,Ts=1,Ic=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new He(Ss,Ts,t,e);r.layers=this.layers,this.add(r);let s=new He(Ss,Ts,t,e);s.layers=this.layers,this.add(s);let o=new He(Ss,Ts,t,e);o.layers=this.layers,this.add(o);let a=new He(Ss,Ts,t,e);a.layers=this.layers,this.add(a);let l=new He(Ss,Ts,t,e);l.layers=this.layers,this.add(l);let c=new He(Ss,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Lc=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wf="\\[\\]\\.:\\/",Ov=new RegExp("["+wf+"]","g"),Sf="[^"+wf+"]",Uv="[^"+wf.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",Sf),kv=/(WCOD+)?/.source.replace("WCOD",Uv),zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),Gv=new RegExp("^"+Bv+kv+zv+Vv+"$"),Hv=["material","materials","bones","map"],of=class{constructor(t,e,n){let r=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(t){let e=Gv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Hv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=of;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WA=new Float32Array(1);var im=new jt,fa=class{constructor(t,e,n=0,r=1/0){this.ray=new xi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return im.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(im),this}intersectObject(t,e=!0,n=[]){return af(t,this,n,e),n.sort(rm),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)af(t[r],this,n,e);return n.sort(rm),n}};function rm(i,t){return i.distance-t.distance}function af(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)af(s[o],t,e,!0)}}var da=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},pa=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Cf=class Cf{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Cf.prototype.isMatrix2=!0;var lf=Cf;var sm=new W,Ql=new W,As=new W,Es=new W,Yh=new W,Wv=new W,Xv=new W,ma=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sm.subVectors(t,this.start),Ql.subVectors(this.end,this.start);let n=Ql.dot(Ql);if(n===0)return 0;let s=Ql.dot(sm)/n;return e&&(s=oe(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Wv,n=Xv){let r=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,h=t.end;As.subVectors(c,a),Es.subVectors(h,l),Yh.subVectors(a,l);let u=As.dot(As),f=Es.dot(Es),d=Es.dot(Yh);if(u<=r&&f<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(u<=r)s=0,o=d/f,o=oe(o,0,1);else{let p=As.dot(Yh);if(f<=r)o=0,s=oe(-p/u,0,1);else{let b=As.dot(Es),m=u*f-b*b;m!==0?s=oe((b*d-p*f)/m,0,1):s=0,o=(b*s+d)/f,o<0?(o=0,s=oe(-p/u,0,1)):o>1&&(o=1,s=oe((b-p)/u,0,1))}}return e.copy(a).addScaledVector(As,s),n.copy(l).addScaledVector(Es,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Tf(i,t,e,n){let r=qv(n);switch(e){case gf:return i*t;case Xs:return i*t/r.components*r.byteLength;case qs:return i*t/r.components*r.byteLength;case _i:return i*t*2/r.components*r.byteLength;case Ys:return i*t*2/r.components*r.byteLength;case bf:return i*t*3/r.components*r.byteLength;case ln:return i*t*4/r.components*r.byteLength;case $s:return i*t*4/r.components*r.byteLength;case Ca:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Hc:return Math.max(i,16)*Math.max(t,8)/4;case zc:case Gc:return Math.max(i,8)*Math.max(t,8)/2;case Wc:case Xc:case Yc:case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qc:case Da:case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case iu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case su:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ou:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case au:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uu:case hu:case fu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case du:case pu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case mu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qv(i){switch(i){case sn:case Ra:return{byteLength:1,components:1};case pr:case Pa:case an:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case Wn:case Ws:case Fn:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function d0(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Yv(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var $v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zv=`#ifdef USE_ALPHAHASH
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
#endif`,Kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b1=`#define PI 3.141592653589793
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
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
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
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,q1=`uniform sampler2D dfgLUT;
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
}`,Y1=`
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,dM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,bM=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,MM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,SM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,EM=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:$v,alphahash_pars_fragment:Zv,alphamap_fragment:Kv,alphamap_pars_fragment:jv,alphatest_fragment:Jv,alphatest_pars_fragment:Qv,aomap_fragment:t1,aomap_pars_fragment:e1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:a1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:b1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:v1,displacementmap_pars_vertex:y1,displacementmap_vertex:M1,emissivemap_fragment:_1,emissivemap_pars_fragment:w1,colorspace_fragment:S1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:E1,envmap_pars_fragment:R1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:z1,envmap_vertex:C1,fog_vertex:I1,fog_pars_vertex:L1,fog_fragment:F1,fog_pars_fragment:D1,gradientmap_pars_fragment:N1,lightmap_pars_fragment:O1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:B1,lights_pars_begin:k1,lights_toon_fragment:V1,lights_toon_pars_fragment:G1,lights_phong_fragment:H1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:q1,lights_fragment_begin:Y1,lights_fragment_maps:$1,lights_fragment_end:Z1,lightprobes_pars_fragment:K1,logdepthbuf_fragment:j1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:ty,map_fragment:ey,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:uy,morphtarget_vertex:hy,normal_fragment_begin:fy,normal_fragment_maps:dy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:yy,iridescence_pars_fragment:My,opaque_fragment:_y,packing:wy,premultiplied_alpha_fragment:Sy,project_vertex:Ty,dithering_fragment:Ay,dithering_pars_fragment:Ey,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Ly,shadowmask_pars_fragment:Fy,skinbase_vertex:Dy,skinning_pars_vertex:Ny,skinning_vertex:Oy,skinnormal_vertex:Uy,specularmap_fragment:By,specularmap_pars_fragment:ky,tonemapping_fragment:zy,tonemapping_pars_fragment:Vy,transmission_fragment:Gy,transmission_pars_fragment:Hy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:$y,background_frag:Zy,backgroundCube_vert:Ky,backgroundCube_frag:jy,cube_vert:Jy,cube_frag:Qy,depth_vert:tM,depth_frag:eM,distance_vert:nM,distance_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:fM,meshmatcap_frag:dM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:bM,meshphysical_vert:xM,meshphysical_frag:vM,meshtoon_vert:yM,meshtoon_frag:MM,points_vert:_M,points_frag:wM,shadow_vert:SM,shadow_frag:TM,sprite_vert:AM,sprite_frag:EM},Rt={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ti={basic:{uniforms:Pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Z(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Pn([Rt.points,Rt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Pn([Rt.common,Rt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Pn([Rt.sprite,Rt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Pn([Rt.lights,Rt.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ti.physical={uniforms:Pn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var xu={r:0,b:0,g:0},RM=new jt,p0=new Qt;p0.set(-1,0,0,0,1,0,0,0,1);function PM(i,t,e,n,r,s){let o=new Z(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function p(x){let y=!1,v=d(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===Aa)?(c===void 0&&(c=new bt(new sr(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Wr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(p0),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bt(new Vn(2,2),new ze({name:"BackgroundMaterial",uniforms:Wr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(xu,_f(i)),e.buffers.color.setClear(xu.r,xu.g,xu.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:b,dispose:g}}function CM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(T,I,D,C,P){let R=!1,N=u(T,C,D,I);s!==N&&(s=N,c(s.object)),R=d(T,C,D,P),R&&p(T,C,D,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,v(T,I,D,C),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,I,D,C){let P=C.wireframe===!0,R=n[I.id];R===void 0&&(R={},n[I.id]=R);let N=T.isInstancedMesh===!0?T.id:0,F=R[N];F===void 0&&(F={},R[N]=F);let O=F[D.id];O===void 0&&(O={},F[D.id]=O);let k=O[P];return k===void 0&&(k=f(l()),O[P]=k),k}function f(T){let I=[],D=[],C=[];for(let P=0;P<e;P++)I[P]=0,D[P]=0,C[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:C,object:T,attributes:{},index:null}}function d(T,I,D,C){let P=s.attributes,R=I.attributes,N=0,F=D.getAttributes();for(let O in F)if(F[O].location>=0){let V=P[O],q=R[O];if(q===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(q=T.instanceColor)),V===void 0||V.attribute!==q||q&&V.data!==q.data)return!0;N++}return s.attributesNum!==N||s.index!==C}function p(T,I,D,C){let P={},R=I.attributes,N=0,F=D.getAttributes();for(let O in F)if(F[O].location>=0){let V=R[O];V===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(V=T.instanceColor));let q={};q.attribute=V,V&&V.data&&(q.data=V.data),P[O]=q,N++}s.attributes=P,s.attributesNum=N,s.index=C}function b(){let T=s.newAttributes;for(let I=0,D=T.length;I<D;I++)T[I]=0}function m(T){g(T,0)}function g(T,I){let D=s.newAttributes,C=s.enabledAttributes,P=s.attributeDivisors;D[T]=1,C[T]===0&&(i.enableVertexAttribArray(T),C[T]=1),P[T]!==I&&(i.vertexAttribDivisor(T,I),P[T]=I)}function x(){let T=s.newAttributes,I=s.enabledAttributes;for(let D=0,C=I.length;D<C;D++)I[D]!==T[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function y(T,I,D,C,P,R,N){N===!0?i.vertexAttribIPointer(T,I,D,P,R):i.vertexAttribPointer(T,I,D,C,P,R)}function v(T,I,D,C){b();let P=C.attributes,R=D.getAttributes(),N=I.defaultAttributeValues;for(let F in R){let O=R[F];if(O.location>=0){let k=P[F];if(k===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){let V=k.normalized,q=k.itemSize,z=t.get(k);if(z===void 0)continue;let $=z.buffer,J=z.type,ot=z.bytesPerElement,H=J===i.INT||J===i.UNSIGNED_INT||k.gpuType===Ws;if(k.isInterleavedBufferAttribute){let X=k.data,et=X.stride,st=k.offset;if(X.isInstancedInterleavedBuffer){for(let tt=0;tt<O.locationSize;tt++)g(O.location+tt,X.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let tt=0;tt<O.locationSize;tt++)m(O.location+tt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let tt=0;tt<O.locationSize;tt++)y(O.location+tt,q/O.locationSize,J,V,et*ot,(st+q/O.locationSize*tt)*ot,H)}else{if(k.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)g(O.location+X,k.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,$);for(let X=0;X<O.locationSize;X++)y(O.location+X,q/O.locationSize,J,V,q*ot,q/O.locationSize*X*ot,H)}}else if(N!==void 0){let V=N[F];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}x()}function M(){E();for(let T in n){let I=n[T];for(let D in I){let C=I[D];for(let P in C){let R=C[P];for(let N in R)h(R[N].object),delete R[N];delete C[P]}}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let I=n[T.id];for(let D in I){let C=I[D];for(let P in C){let R=C[P];for(let N in R)h(R[N].object),delete R[N];delete C[P]}}delete n[T.id]}function A(T){for(let I in n){let D=n[I];for(let C in D){let P=D[C];if(P[T.id]===void 0)continue;let R=P[T.id];for(let N in R)h(R[N].object),delete R[N];delete P[T.id]}}}function _(T){for(let I in n){let D=n[I],C=T.isInstancedMesh===!0?T.id:0,P=D[C];if(P!==void 0){for(let R in P){let N=P[R];for(let F in N)h(N[F].object),delete N[F];delete P[R]}delete D[C],Object.keys(D).length===0&&delete n[I]}}}function E(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function IM(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function LM(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==sn&&A!==Fn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:S}}function FM(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ln,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!r||p===null||p.length===0||s&&!m)s?h(null):c();else{let x=s?0:n,y=x*4,v=g.clippingState||null;l.value=v,v=h(p,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,p!==!0||m===null){let g=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=d;y!==b;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var js=4,DM=6,NM=20,OM=256,Oa=new xn,qm=new Z,If=null,Lf=0,Ff=0,Df=!1,UM=new W,Xr=new W,Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=UM}=s;If=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(If,Lf,Ff),this._renderer.xr.enabled=Df,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),If=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:an,format:ln,colorSpace:zo,depthBuffer:!1},r=Ym(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BM(s)),this._blurMaterial=zM(s,t,e),this._ggxMaterial=kM(s,t,e)}return r}_compileMaterial(t){let e=new bt(new Ft,t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,r,s){let l=new He(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(qm),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new sr,new Wt({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,g=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(qm),g=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let M=this._cubeSize;Ks(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===fr||t.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],m=3*b*(n>p-js?n-p+js:0),g=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ks(s,m,g,3*b,2*b),r.setRenderTarget(s),r.render(a,Oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ks(t,m,g,3*b,2*b),r.setRenderTarget(t),r.render(a,Oa)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-js?r-this._lodMax+js:0),f=4*(this._cubeSize-h);Ks(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Oa)}};function BM(i){let t=[],e=[],n=i,r=i-js+1+DM;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let g=0;g<u;g++){let x=g%3*2/3-1,y=g>2?0:-1,v=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];p.set(v,d*f*g);for(let M=0;M<f;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?Xr.set(1,A,S):g===1?Xr.set(-S,1,-A):g===2?Xr.set(-S,A,1):g===3?Xr.set(-1,A,-S):g===4?Xr.set(-S,-1,A):Xr.set(S,A,-1),Xr.toArray(b,(g*f+M)*d)}}let m=new Ft;m.setAttribute("position",new Ee(p,d)),m.setAttribute("outputDirection",new Ee(b,d)),e.push(new bt(m,null)),n>js&&n--}return{lodMeshes:e,sizeLods:t}}function Ym(i,t,e){let n=new Pe(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function kM(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:qe,depthTest:!1,depthWrite:!1})}function zM(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:NM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:qe,depthTest:!1,depthWrite:!1})}function $m(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Zm(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yu=class extends Pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Jo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sr(5,5,5),s=new ze({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:qe});s.uniforms.tEquirect.value=e;let o=new bt(r,s),a=e.minFilter;return e.minFilter===dr&&(e.minFilter=Ye),new Ic(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function VM(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Hs||d===Oc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new yu(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Hs||d===Oc,b=d===fr||d===Hr;if(p||b){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Qs(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Qs(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Hs?f.mapping=fr:d===Oc&&(f.mapping=Hr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function GM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&er("WebGLRenderer: "+n+" extension not supported."),r}}}function HM(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){let M=x[y+0],S=x[y+1],A=x[y+2];f.push(M,S,S,A,A,M)}}else{let x=p.array;b=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let M=y+0,S=y+1,A=y+2;f.push(M,S,S,A,A,M)}}let m=new(p.count>=65535?Or:Nr)(f,1);m.version=b;let g=s.get(u);g&&t.remove(g),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function WM(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let b=0;for(let m=0;m<d;m++)b+=f[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function XM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qM(i,t,e){let n=new WeakMap,r=new Se;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),b===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*u),A=new nr(S,v,M,u);A.type=Fn,A.needsUpdate=!0;let _=y*4;for(let w=0;w<u;w++){let T=m[w],I=g[w],D=x[w],C=v*M*4*w;for(let P=0;P<T.count;P++){let R=P*_;d===!0&&(r.fromBufferAttribute(T,P),S[C+R+0]=r.x,S[C+R+1]=r.y,S[C+R+2]=r.z,S[C+R+3]=0),p===!0&&(r.fromBufferAttribute(I,P),S[C+R+4]=r.x,S[C+R+5]=r.y,S[C+R+6]=r.z,S[C+R+7]=0),b===!0&&(r.fromBufferAttribute(D,P),S[C+R+8]=r.x,S[C+R+9]=r.y,S[C+R+10]=r.z,S[C+R+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new zt(v,M)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function YM(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var $M={[ya]:"LINEAR_TONE_MAPPING",[Ma]:"REINHARD_TONE_MAPPING",[_a]:"CINEON_TONE_MAPPING",[ki]:"ACES_FILMIC_TONE_MAPPING",[Sa]:"AGX_TONE_MAPPING",[Ta]:"NEUTRAL_TONE_MAPPING",[wa]:"CUSTOM_TONE_MAPPING"};function ZM(i,t,e,n,r,s){let o=new Pe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ft;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bt(c,h),f=new xn(-1,1,1,-1,0,1),d=null,p=null,b=!1,m,g=null,x=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<x.length;S++){let A=x[S];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){x=v,y=x.length>0&&x[0].isRenderPass===!0;let M=o.width,S=o.height;x.length>0&&a===null&&(a=new Pe(M,S,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new Pe(M,S,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(b||v.toneMapping===Hn&&x.length===0)return!1;if(g=M,M!==null){let S=M.width,A=M.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return y===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=m,b=!0;let S=o,A=a;for(let _=0;_<x.length;_++){let E=x[_];E.enabled!==!1&&(E.render(v,A,S,M),E.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},pe.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let _=$M[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(u,f),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var m0=new dn,Uf=new On(1,1),g0=new nr,b0=new pc,x0=new Jo,Km=[],jm=[],Jm=new Float32Array(16),Qm=new Float32Array(9),t0=new Float32Array(4);function to(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _u(i,t){let e=jm[t];e===void 0&&(e=new Int32Array(t),jm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function KM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function JM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function QM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;t0.set(n),i.uniformMatrix2fv(this.addr,!1,t0),un(e,n)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;Qm.set(n),i.uniformMatrix3fv(this.addr,!1,Qm),un(e,n)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;Jm.set(n),i.uniformMatrix4fv(this.addr,!1,Jm),un(e,n)}}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function a_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function h_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uf.compareFunction=e.isReversedDepthBuffer()?bu:gu,s=Uf):s=m0,e.setTexture2D(t||s,r)}function f_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||b0,r)}function d_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||x0,r)}function p_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||g0,r)}function m_(i){switch(i){case 5126:return KM;case 35664:return jM;case 35665:return JM;case 35666:return QM;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,t){i.uniform1fv(this.addr,t)}function b_(i,t){let e=to(t,this.size,2);i.uniform2fv(this.addr,e)}function x_(i,t){let e=to(t,this.size,3);i.uniform3fv(this.addr,e)}function v_(i,t){let e=to(t,this.size,4);i.uniform4fv(this.addr,e)}function y_(i,t){let e=to(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M_(i,t){let e=to(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function __(i,t){let e=to(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w_(i,t){i.uniform1iv(this.addr,t)}function S_(i,t){i.uniform2iv(this.addr,t)}function T_(i,t){i.uniform3iv(this.addr,t)}function A_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function R_(i,t){i.uniform2uiv(this.addr,t)}function P_(i,t){i.uniform3uiv(this.addr,t)}function C_(i,t){i.uniform4uiv(this.addr,t)}function I_(i,t,e){let n=this.cache,r=t.length,s=_u(e,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Uf:o=m0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function L_(i,t,e){let n=this.cache,r=t.length,s=_u(e,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||b0,s[o])}function F_(i,t,e){let n=this.cache,r=t.length,s=_u(e,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||x0,s[o])}function D_(i,t,e){let n=this.cache,r=t.length,s=_u(e,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||g0,s[o])}function N_(i){switch(i){case 5126:return g_;case 35664:return b_;case 35665:return x_;case 35666:return v_;case 35674:return y_;case 35675:return M_;case 35676:return __;case 5124:case 35670:return w_;case 35667:case 35671:return S_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return R_;case 36295:return P_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return D_}}var Bf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m_(e.type)}},kf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N_(e.type)}},zf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Nf=/(\w+)(\])?(\[|\.)?/g;function e0(i,t){i.seq.push(t),i.map[t.id]=t}function O_(i,t,e){let n=i.name,r=n.length;for(Nf.lastIndex=0;;){let s=Nf.exec(n),o=Nf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){e0(e,c===void 0?new Bf(a,i,t):new kf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new zf(a),e0(e,u)),e=u}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);O_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function n0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U_=37297,B_=0;function k_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var i0=new Qt;function z_(i){pe._getMatrix(i0,pe.workingColorSpace,i);let t=`mat3( ${i0.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Vo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function r0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+k_(i.getShaderSource(t),a)}else return s}function V_(i,t){let e=z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G_={[ya]:"Linear",[Ma]:"Reinhard",[_a]:"Cineon",[ki]:"ACESFilmic",[Sa]:"AgX",[Ta]:"Neutral",[wa]:"Custom"};function H_(i,t){let e=G_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vu=new W;function W_(){pe.getLuminanceCoefficients(vu);let i=vu.x.toFixed(4),t=vu.y.toFixed(4),e=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function q_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ba(i){return i!==""}function s0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(i){return i.replace($_,K_)}var Z_=new Map;function K_(i,t){let e=he[t];if(e===void 0){let n=Z_.get(t);if(n!==void 0)e=he[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vf(e)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(i){return i.replace(j_,J_)}function J_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l0(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Q_={[ga]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function t2(i){return Q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e2={[fr]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function n2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":e2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var i2={[Hr]:"ENVMAP_MODE_REFRACTION"};function r2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s2={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Mm]:"ENVMAP_BLENDING_MIX",[_m]:"ENVMAP_BLENDING_ADD"};function o2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s2[i.combine]||"ENVMAP_BLENDING_NONE"}function a2(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l2(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=t2(e),c=n2(e),h=r2(e),u=o2(e),f=a2(e),d=X_(e),p=q_(s),b=r.createProgram(),m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ba).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ba).join(`
`),g.length>0&&(g+=`
`)):(m=[l0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),g=[l0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?he.tonemapping_pars_fragment:"",e.toneMapping!==Hn?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Vf(o),o=s0(o,e),o=o0(o,e),a=Vf(a),a=s0(a,e),a=o0(a,e),o=a0(o),a=a0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=x+m+o,v=x+g+a,M=n0(r,r.VERTEX_SHADER,y),S=n0(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,S),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(T){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(b)||"",D=r.getShaderInfoLog(M)||"",C=r.getShaderInfoLog(S)||"",P=I.trim(),R=D.trim(),N=C.trim(),F=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,S);else{let k=r0(r,M,"vertex"),V=r0(r,S,"fragment");Jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+k+`
`+V)}else P!==""?Zt("WebGLProgram: Program Info Log:",P):(R===""||N==="")&&(O=!1);O&&(T.diagnostics={runnable:F,programLog:P,vertexShader:{log:R,prefix:m},fragmentShader:{log:N,prefix:g}})}r.deleteShader(M),r.deleteShader(S),_=new Js(r,b),E=Y_(r,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,U_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var c2=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Hf(t),e.set(t,n)),n}},Hf=class{constructor(t){this.id=c2++,this.code=t,this.usedTimes=0}};function u2(i){return i===_i||i===Da||i===Na}function h2(i,t,e,n,r,s){let o=new Ds,a=new Gf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,E,w,T,I,D){let C=T.fog,P=I.geometry,R=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=t.get(_.envMap||R,N),O=F&&F.mapping===Aa?F.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let V=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,q=V!==void 0?V.length:0,z=0;P.morphAttributes.position!==void 0&&(z=1),P.morphAttributes.normal!==void 0&&(z=2),P.morphAttributes.color!==void 0&&(z=3);let $,J,ot,H;if(k){let Fe=Ti[k];$=Fe.vertexShader,J=Fe.fragmentShader}else{$=_.vertexShader,J=_.fragmentShader;let Fe=a.getVertexShaderStage(_),Te=a.getFragmentShaderStage(_);a.update(_,Fe,Te),ot=Fe.id,H=Te.id}let X=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),st=I.isInstancedMesh===!0,tt=I.isBatchedMesh===!0,ct=!!_.map,pt=!!_.matcap,ft=!!F,yt=!!_.aoMap,Yt=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Kt=!!_.displacementMap,le=!!_.emissiveMap,fe=!!_.metalnessMap,de=!!_.roughnessMap,Y=_.anisotropy>0,Be=_.clearcoat>0,be=_.dispersion>0,G=_.retroreflectivity>0,L=_.iridescence>0,Q=_.sheen>0,rt=_.transmission>0,lt=Y&&!!_.anisotropyMap,vt=Be&&!!_.clearcoatMap,St=Be&&!!_.clearcoatNormalMap,ut=Be&&!!_.clearcoatRoughnessMap,dt=L&&!!_.iridescenceMap,Tt=L&&!!_.iridescenceThicknessMap,Gt=Q&&!!_.sheenColorMap,_t=Q&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,Ot=!!_.specularColorMap,qt=!!_.specularIntensityMap,ee=rt&&!!_.transmissionMap,j=rt&&!!_.thicknessMap,At=!!_.gradientMap,ht=!!_.alphaMap,Et=_.alphaTest>0,Lt=!!_.alphaHash,gt=!!_.extensions,$t=Hn;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:J,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:tt,batchingColor:tt&&I._colorsTexture!==null,instancing:st,instancingColor:st&&I.instanceColor!==null,instancingMorph:st&&I.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ct,matcap:pt,envMap:ft,envMapMode:ft&&F.mapping,envMapCubeUVHeight:O,aoMap:yt,lightMap:Yt,bumpMap:wt,normalMap:xt,displacementMap:Kt,emissiveMap:le,normalMapObjectSpace:xt&&_.normalMapType===Am,normalMapTangentSpace:xt&&_.normalMapType===Zs,packedNormalMap:xt&&_.normalMapType===Zs&&u2(_.normalMap.format),metalnessMap:fe,roughnessMap:de,anisotropy:Y,anisotropyMap:lt,clearcoat:Be,clearcoatMap:vt,clearcoatNormalMap:St,clearcoatRoughnessMap:ut,dispersion:be,retroreflection:G,iridescence:L,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:_t,specularMap:Mt,specularColorMap:Ot,specularIntensityMap:qt,transmission:rt,transmissionMap:ee,thicknessMap:j,gradientMap:At,opaque:_.transparent===!1&&_.blending===vn&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:Et,alphaHash:Lt,combine:_.combine,mapUv:ct&&p(_.map.channel),aoMapUv:yt&&p(_.aoMap.channel),lightMapUv:Yt&&p(_.lightMap.channel),bumpMapUv:wt&&p(_.bumpMap.channel),normalMapUv:xt&&p(_.normalMap.channel),displacementMapUv:Kt&&p(_.displacementMap.channel),emissiveMapUv:le&&p(_.emissiveMap.channel),metalnessMapUv:fe&&p(_.metalnessMap.channel),roughnessMapUv:de&&p(_.roughnessMap.channel),anisotropyMapUv:lt&&p(_.anisotropyMap.channel),clearcoatMapUv:vt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:St&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(_.sheenRoughnessMap.channel),specularMapUv:Mt&&p(_.specularMap.channel),specularColorMapUv:Ot&&p(_.specularColorMap.channel),specularIntensityMapUv:qt&&p(_.specularIntensityMap.channel),transmissionMapUv:ee&&p(_.transmissionMap.channel),thicknessMapUv:j&&p(_.thicknessMap.channel),alphaMapUv:ht&&p(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||Y),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(ct||ht),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:et,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:z,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:ct&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:le&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===te,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&_.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)E.push(w),E.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(g(E,_),x(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let E=d[_.type],w;if(E){let T=Ti[E];w=wi.clone(T.uniforms)}else w=_.uniforms;return w}function v(_,E){let w=h.get(E);return w!==void 0?++w.usedTimes:(w=new l2(i,E,_,r),c.push(w),h.set(E,w)),w}function M(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function f2(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function d2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function c0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function u0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,m,g){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=m,x.group=g),t++,x}function l(f,d,p,b,m,g,x){x.reversedDepth===!0&&(m=-m);let y=a(f,d,p,b,m,g);p.transmission>0?n.push(y):p.transparent===!0?r.push(y):e.push(y)}function c(f,d,p,b,m,g){let x=a(f,d,p,b,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||d2),n.length>1&&n.sort(d||c0),r.length>1&&r.sort(d||c0)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function p2(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new u0,i.set(n,[o])):r>=s.length?(o=new u0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function m2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Z};break;case"SpotLight":e={position:new W,direction:new W,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Z,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":e={color:new Z,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function g2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var b2=0;function x2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v2(i){let t=new m2,e=g2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let r=new W,s=new jt,o=new jt;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,b=0,m=0,g=0,x=0,y=0,v=0,M=0,S=0,A=0,_=0,E=0,w=0;c.sort(x2);for(let I=0,D=c.length;I<D;I++){let C=c[I],P=C.color,R=C.intensity,N=C.distance,F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===_i?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=P.r*R,u+=P.g*R,f+=P.b*R;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],R);w++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=F;let q=k.getViewportCount();for(let z=0;z<q;z++)n.sunShadowMatrix[b+z]=k.getMatrix(z),n.sunShadowCascade[b+z]=k._cascadeData[z];b+=q,p++}n.sun[d]=O,d++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=O,m++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(P).multiplyScalar(R),O.distance=N,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[x]=O;let k=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,k.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=k.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=F,A++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(P).multiplyScalar(R),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=O,y++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(R),O.groundColor.copy(C.groundColor).multiplyScalar(R),n.hemi[v]=O,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==m||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==y||T.hemiLength!==v||T.numSunShadows!==p||T.numDirectionalShadows!==M||T.numPointShadows!==S||T.numSpotShadows!==A||T.numSpotMaps!==_||T.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,T.sunLength=d,T.directionalLength=m,T.pointLength=g,T.spotLength=x,T.rectAreaLength=y,T.hemiLength=v,T.numSunShadows=p,T.numDirectionalShadows=M,T.numPointShadows=S,T.numSpotShadows=A,T.numSpotMaps=_,T.numLightProbes=w,n.version=b2++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,m=0,g=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function h0(i){let t=new v2(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function y2(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new h0(i),t.set(r,[a])):s>=o.length?(a=new h0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var M2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_2=`uniform sampler2D shadow_pass;
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
}`,w2=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],S2=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],f0=new jt,Ua=new W,Of=new W;function T2(i,t,e){let n=new Us,r=new zt,s=new zt,o=new Se,a=new zs,l=new yc,c={},h=e.maxTextureSize,u={[Rn]:Je,[Je]:Rn,[te]:te},f=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:M2,fragmentShader:_2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ft;p.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new bt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let g=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Dc&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);let E=i.getRenderTarget(),w=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(qe),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=g!==this.type;D&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(P=>P.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,P=S.length;C<P;C++){let R=S[C],N=R.shadow;if(N===void 0){Zt("WebGLShadowMap:",R,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let F=N.getFrameExtents();r.multiply(F),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,N.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||D===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Gs){if(R.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Pe(r.x,r.y,{format:_i,type:an,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),N.map.texture.name=R.name+".shadowMap",N.map.depthTexture=new On(r.x,r.y,Fn),N.map.depthTexture.name=R.name+".shadowMapDepth",N.map.depthTexture.format=mi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xe,N.map.depthTexture.magFilter=Xe}else R.isPointLight?(N.map=new yu(r.x),N.map.depthTexture=new vc(r.x,Wn)):(N.map=new Pe(r.x,r.y),N.map.depthTexture=new On(r.x,r.y,Wn)),N.map.depthTexture.name=R.name+".shadowMap",N.map.depthTexture.format=mi,this.type===ga?(N.map.depthTexture.compareFunction=O?bu:gu,N.map.depthTexture.minFilter=Ye,N.map.depthTexture.magFilter=Ye):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xe,N.map.depthTexture.magFilter=Xe);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();R.isPointLight!==!0&&N.updateMatrices(R,_);for(let V=0;V<k;V++){let q=N.getCamera(V);if(R.isPointLight){let z=N.camera,$=N.matrix,J=R.distance||z.far;J!==z.far&&(z.far=J,z.updateProjectionMatrix()),Ua.setFromMatrixPosition(R.matrixWorld),z.position.copy(Ua),Of.copy(z.position),Of.add(w2[V]),z.up.copy(S2[V]),z.lookAt(Of),z.updateMatrixWorld(),$.makeTranslation(-Ua.x,-Ua.y,-Ua.z),f0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),N._frustum.setFromProjectionMatrix(f0,z.coordinateSystem,z.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let z=N.getViewport(V);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),I.viewport(o)}n=N.getFrustum(V),v(A,_,q,R,this.type)}N.isPointLightShadow!==!0&&this.type===Gs&&x(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,T)};function x(S,A){let _=t.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Pe(r.x,r.y,{format:_i,type:an}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,b,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,d,b,null)}function y(S,A,_,E){let w=null,T=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)w=T;else if(w=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=w.uuid,D=A.uuid,C=c[I];C===void 0&&(C={},c[I]=C);let P=C[D];P===void 0&&(P=w.clone(),C[D]=P,A.addEventListener("dispose",M)),w=P}if(w.visible=A.visible,w.wireframe=A.wireframe,E===Gs?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,_.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let I=i.properties.get(w);I.light=_}return w}function v(S,A,_,E,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Gs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let D=t.update(S),C=S.material;if(Array.isArray(C)){let P=D.groups;for(let R=0,N=P.length;R<N;R++){let F=P[R],O=C[F.materialIndex];if(O&&O.visible){let k=y(S,O,E,w);S.onBeforeShadow(i,S,A,_,D,k,F),i.renderBufferDirect(_,null,D,k,S,F),S.onAfterShadow(i,S,A,_,D,k,F)}}}else if(C.visible){let P=y(S,C,E,w);S.onBeforeShadow(i,S,A,_,D,P,null),i.renderBufferDirect(_,null,D,P,S,null),S.onAfterShadow(i,S,A,_,D,P,null)}}let I=S.children;for(let D=0,C=I.length;D<C;D++)v(I[D],A,_,E,w)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let E=c[_],w=S.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function A2(i,t){function e(){let j=!1,At=new Se,ht=null,Et=new Se(0,0,0,0);return{setMask:function(Lt){ht!==Lt&&!j&&(i.colorMask(Lt,Lt,Lt,Lt),ht=Lt)},setLocked:function(Lt){j=Lt},setClear:function(Lt,gt,$t,Vt,Fe){Fe===!0&&(Lt*=Vt,gt*=Vt,$t*=Vt),At.set(Lt,gt,$t,Vt),Et.equals(At)===!1&&(i.clearColor(Lt,gt,$t,Vt),Et.copy(At))},reset:function(){j=!1,ht=null,Et.set(-1,0,0,0)}}}function n(){let j=!1,At=!1,ht=null,Et=null,Lt=null;return{setReversed:function(gt){if(At!==gt){let $t=t.get("EXT_clip_control");gt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),At=gt;let Vt=Lt;Lt=null,this.setClear(Vt)}},getReversed:function(){return At},setTest:function(gt){gt?X(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(gt){ht!==gt&&!j&&(i.depthMask(gt),ht=gt)},setFunc:function(gt){if(At&&(gt=Um[gt]),Et!==gt){switch(gt){case ic:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case oc:i.depthFunc(i.EQUAL);break;case ac:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=gt}},setLocked:function(gt){j=gt},setClear:function(gt){Lt!==gt&&(Lt=gt,At&&(gt=1-gt),i.clearDepth(gt))},reset:function(){j=!1,ht=null,Et=null,Lt=null,At=!1}}}function r(){let j=!1,At=null,ht=null,Et=null,Lt=null,gt=null,$t=null,Vt=null,Fe=null;return{setTest:function(Te){j||(Te?X(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Te){At!==Te&&!j&&(i.stencilMask(Te),At=Te)},setFunc:function(Te,ei,hi){(ht!==Te||Et!==ei||Lt!==hi)&&(i.stencilFunc(Te,ei,hi),ht=Te,Et=ei,Lt=hi)},setOp:function(Te,ei,hi){(gt!==Te||$t!==ei||Vt!==hi)&&(i.stencilOp(Te,ei,hi),gt=Te,$t=ei,Vt=hi)},setLocked:function(Te){j=Te},setClear:function(Te){Fe!==Te&&(i.clearStencil(Te),Fe=Te)},reset:function(){j=!1,At=null,ht=null,Et=null,Lt=null,gt=null,$t=null,Vt=null,Fe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,y=null,v=null,M=null,S=null,A=null,_=new Z(0,0,0),E=0,w=!1,T=null,I=null,D=null,C=null,P=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,F=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=F>=2);let k=null,V={},q=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),$=new Se().fromArray(q),J=new Se().fromArray(z);function ot(j,At,ht,Et){let Lt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(j,gt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ht;$t++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(At+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return gt}let H={};H[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Ps),wt(!1),xt(cf),X(i.CULL_FACE),yt(qe);function X(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function et(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function st(j,At){return f[j]!==At?(i.bindFramebuffer(j,At),f[j]=At,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=At),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=At),!0):!1}function tt(j,At){let ht=p,Et=!1;if(j){ht=d.get(At),ht===void 0&&(ht=[],d.set(At,ht));let Lt=j.textures;if(ht.length!==Lt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,$t=Lt.length;gt<$t;gt++)ht[gt]=i.COLOR_ATTACHMENT0+gt;ht.length=Lt.length,Et=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ht)}function ct(j){return b!==j?(i.useProgram(j),b=j,!0):!1}let pt={[yn]:i.FUNC_ADD,[lm]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};pt[um]=i.MIN,pt[hm]=i.MAX;let ft={[Jn]:i.ZERO,[yi]:i.ONE,[fm]:i.SRC_COLOR,[hr]:i.SRC_ALPHA,[gm]:i.SRC_ALPHA_SATURATE,[va]:i.DST_COLOR,[xa]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[hf]:i.ONE_MINUS_SRC_ALPHA,[mm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[bm]:i.CONSTANT_COLOR,[xm]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[ym]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(j,At,ht,Et,Lt,gt,$t,Vt,Fe,Te){if(j===qe){m===!0&&(et(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),j!==vi){if(j!==g||Te!==w){if((x!==yn||M!==yn)&&(i.blendEquation(i.FUNC_ADD),x=yn,M=yn),Te)switch(j){case vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Me:i.blendFunc(i.ONE,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",j);break}else switch(j){case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Me:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uf:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ba:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",j);break}y=null,v=null,S=null,A=null,_.set(0,0,0),E=0,g=j,w=Te}return}Lt=Lt||At,gt=gt||ht,$t=$t||Et,(At!==x||Lt!==M)&&(i.blendEquationSeparate(pt[At],pt[Lt]),x=At,M=Lt),(ht!==y||Et!==v||gt!==S||$t!==A)&&(i.blendFuncSeparate(ft[ht],ft[Et],ft[gt],ft[$t]),y=ht,v=Et,S=gt,A=$t),(Vt.equals(_)===!1||Fe!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Fe),_.copy(Vt),E=Fe),g=j,w=!1}function Yt(j,At){j.side===te?et(i.CULL_FACE):X(i.CULL_FACE);let ht=j.side===Je;At&&(ht=!ht),wt(ht),j.blending===vn&&j.transparent===!1?yt(qe):yt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);let Et=j.stencilWrite;a.setTest(Et),Et&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(j){T!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),T=j)}function xt(j){j!==om?(X(i.CULL_FACE),j!==I&&(j===cf?i.cullFace(i.BACK):j===am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),I=j}function Kt(j){j!==D&&(N&&i.lineWidth(j),D=j)}function le(j,At,ht){j?(X(i.POLYGON_OFFSET_FILL),(C!==At||P!==ht)&&(C=At,P=ht,o.getReversed()&&(At=-At),i.polygonOffset(At,ht))):et(i.POLYGON_OFFSET_FILL)}function fe(j){j?X(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function de(j){j===void 0&&(j=i.TEXTURE0+R-1),k!==j&&(i.activeTexture(j),k=j)}function Y(j,At,ht){ht===void 0&&(k===null?ht=i.TEXTURE0+R-1:ht=k);let Et=V[ht];Et===void 0&&(Et={type:void 0,texture:void 0},V[ht]=Et),(Et.type!==j||Et.texture!==At)&&(k!==ht&&(i.activeTexture(ht),k=ht),i.bindTexture(j,At||H[j]),Et.type=j,Et.texture=At)}function Be(){let j=V[k];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function L(){try{i.texSubImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function Q(){try{i.texSubImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function vt(){try{i.texStorage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function St(){try{i.texStorage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function ut(){try{i.texImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function dt(){try{i.texImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function Tt(j){return u[j]!==void 0?u[j]:i.getParameter(j)}function Gt(j,At){u[j]!==At&&(i.pixelStorei(j,At),u[j]=At)}function _t(j){$.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),$.copy(j))}function Mt(j){J.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function Ot(j,At){let ht=c.get(At);ht===void 0&&(ht=new WeakMap,c.set(At,ht));let Et=ht.get(j);Et===void 0&&(Et=i.getUniformBlockIndex(At,j.name),ht.set(j,Et))}function qt(j,At){let Et=c.get(At).get(j);l.get(At)!==Et&&(i.uniformBlockBinding(At,Et,j.__bindingPointIndex),l.set(At,Et))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,V={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,y=null,v=null,M=null,S=null,A=null,_=new Z(0,0,0),E=0,w=!1,T=null,I=null,D=null,C=null,P=null,$.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:et,bindFramebuffer:st,drawBuffers:tt,useProgram:ct,setBlending:yt,setMaterial:Yt,setFlipSided:wt,setCullFace:xt,setLineWidth:Kt,setPolygonOffset:le,setScissorTest:fe,activeTexture:de,bindTexture:Y,unbindTexture:Be,compressedTexImage2D:be,compressedTexImage3D:G,texImage2D:ut,texImage3D:dt,pixelStorei:Gt,getParameter:Tt,updateUBOMapping:Ot,uniformBlockBinding:qt,texStorage2D:vt,texStorage3D:St,texSubImage2D:L,texSubImage3D:Q,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:_t,viewport:Mt,reset:ee}}function E2(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,L){return p?new OffscreenCanvas(G,L):Ls("canvas")}function m(G,L,Q){let rt=1,lt=be(G);if((lt.width>Q||lt.height>Q)&&(rt=Q/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let vt=Math.floor(rt*lt.width),St=Math.floor(rt*lt.height);f===void 0&&(f=b(vt,St));let ut=L?b(vt,St):f;return ut.width=vt,ut.height=St,ut.getContext("2d").drawImage(G,0,0,vt,St),Zt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+vt+"x"+St+")."),ut}else return"data"in G&&Zt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),G;return G}function g(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(G,L,Q,rt,lt,vt=!1){if(G!==null){if(i[G]!==void 0)return i[G];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let St;rt&&(St=t.get("EXT_texture_norm16"),St||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=L;if(L===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8),Q===i.UNSIGNED_SHORT&&St&&(ut=St.R16_EXT),Q===i.SHORT&&St&&(ut=St.R16_SNORM_EXT)),L===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),L===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8),Q===i.UNSIGNED_SHORT&&St&&(ut=St.RG16_EXT),Q===i.SHORT&&St&&(ut=St.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),L===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Q===i.UNSIGNED_INT&&(ut=i.RGB32UI),Q===i.BYTE&&(ut=i.RGB8I),Q===i.SHORT&&(ut=i.RGB16I),Q===i.INT&&(ut=i.RGB32I)),L===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Q===i.BYTE&&(ut=i.RGBA8I),Q===i.SHORT&&(ut=i.RGBA16I),Q===i.INT&&(ut=i.RGBA32I)),L===i.RGB&&(Q===i.UNSIGNED_SHORT&&St&&(ut=St.RGB16_EXT),Q===i.SHORT&&St&&(ut=St.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),L===i.RGBA){let dt=vt?Vo:pe.getTransfer(lt);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=dt===_e?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&St&&(ut=St.RGBA16_EXT),Q===i.SHORT&&St&&(ut=St.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(G,L){let Q;return G?L===null||L===Wn||L===mr?Q=i.DEPTH24_STENCIL8:L===Fn?Q=i.DEPTH32F_STENCIL8:L===pr&&(Q=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Wn||L===mr?Q=i.DEPTH_COMPONENT24:L===Fn?Q=i.DEPTH_COMPONENT32F:L===pr&&(Q=i.DEPTH_COMPONENT16),Q}function S(G,L){return g(G)===!0||G.isFramebufferTexture&&G.minFilter!==Xe&&G.minFilter!==Ye?Math.log2(Math.max(L.width,L.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?L.mipmaps.length:1}function A(G){let L=G.target;L.removeEventListener("dispose",A),E(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function _(G){let L=G.target;L.removeEventListener("dispose",_),T(L)}function E(G){let L=n.get(G);if(L.__webglInit===void 0)return;let Q=G.source,rt=d.get(Q);if(rt){let lt=rt[L.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(G),Object.keys(rt).length===0&&d.delete(Q)}n.remove(G)}function w(G){let L=n.get(G);i.deleteTexture(L.__webglTexture);let Q=G.source,rt=d.get(Q);delete rt[L.__cacheKey],o.memory.textures--}function T(G){let L=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(L.__webglFramebuffer[rt]))for(let lt=0;lt<L.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(L.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(L.__webglFramebuffer[rt]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[rt])}else{if(Array.isArray(L.__webglFramebuffer))for(let rt=0;rt<L.__webglFramebuffer.length;rt++)i.deleteFramebuffer(L.__webglFramebuffer[rt]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let rt=0;rt<L.__webglColorRenderbuffer.length;rt++)L.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[rt]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let Q=G.textures;for(let rt=0,lt=Q.length;rt<lt;rt++){let vt=n.get(Q[rt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(Q[rt])}n.remove(G)}let I=0;function D(){I=0}function C(){return I}function P(G){I=G}function R(){let G=I;return G>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,G}function N(G){let L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function F(G,L){let Q=n.get(G);if(G.isVideoTexture&&Y(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let rt=G.image;if(rt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(Q,G,L);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+L)}function O(G,L){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){et(Q,G,L);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+L)}function k(G,L){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){et(Q,G,L);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+L)}function V(G,L){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){st(Q,G,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+L)}let q={[je]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},z={[Xe]:i.NEAREST,[Sm]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Uc]:i.LINEAR_MIPMAP_NEAREST,[dr]:i.LINEAR_MIPMAP_LINEAR},$={[Rm]:i.NEVER,[Fm]:i.ALWAYS,[Pm]:i.LESS,[gu]:i.LEQUAL,[Cm]:i.EQUAL,[bu]:i.GEQUAL,[Im]:i.GREATER,[Lm]:i.NOTEQUAL};function J(G,L){if(L.type===Fn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===Ye||L.magFilter===Uc||L.magFilter===Ea||L.magFilter===dr||L.minFilter===Ye||L.minFilter===Uc||L.minFilter===Ea||L.minFilter===dr)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,q[L.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,q[L.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,q[L.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,z[L.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,z[L.minFilter]),L.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,$[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Xe||L.minFilter!==Ea&&L.minFilter!==dr||L.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function ot(G,L){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,L.addEventListener("dispose",A));let rt=L.source,lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));let vt=N(L);if(vt!==G.__cacheKey){lt[vt]===void 0&&(lt[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),lt[vt].usedTimes++;let St=lt[G.__cacheKey];St!==void 0&&(lt[G.__cacheKey].usedTimes--,St.usedTimes===0&&w(L)),G.__cacheKey=vt,G.__webglTexture=lt[vt].texture}return Q}function H(G,L,Q){return Math.floor(Math.floor(G/Q)/L)}function X(G,L,Q,rt){let vt=G.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,Q,rt,L.data);else{vt.sort((Gt,_t)=>Gt.start-_t.start);let St=0;for(let Gt=1;Gt<vt.length;Gt++){let _t=vt[St],Mt=vt[Gt],Ot=_t.start+_t.count,qt=H(Mt.start,L.width,4),ee=H(_t.start,L.width,4);Mt.start<=Ot+1&&qt===ee&&H(Mt.start+Mt.count-1,L.width,4)===qt?_t.count=Math.max(_t.count,Mt.start+Mt.count-_t.start):(++St,vt[St]=Mt)}vt.length=St+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let Gt=0,_t=vt.length;Gt<_t;Gt++){let Mt=vt[Gt],Ot=Math.floor(Mt.start/4),qt=Math.ceil(Mt.count/4),ee=Ot%L.width,j=Math.floor(Ot/L.width),At=qt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,ee,j,At,ht,Q,rt,L.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function et(G,L,Q){let rt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(rt=i.TEXTURE_3D);let lt=ot(G,L),vt=L.source;e.bindTexture(rt,G.__webglTexture,i.TEXTURE0+Q);let St=n.get(vt);if(vt.version!==St.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let ht=pe.getPrimaries(pe.workingColorSpace),Et=L.colorSpace===Xn?null:pe.getPrimaries(L.colorSpace),Lt=L.colorSpace===Xn||ht===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let dt=m(L.image,!1,r.maxTextureSize);dt=Be(L,dt);let Tt=s.convert(L.format,L.colorSpace),Gt=s.convert(L.type),_t=v(L.internalFormat,Tt,Gt,L.normalized,L.colorSpace,L.isVideoTexture);J(rt,L);let Mt,Ot=L.mipmaps,qt=L.isVideoTexture!==!0,ee=St.__version===void 0||lt===!0,j=vt.dataReady,At=S(L,dt);if(L.isDepthTexture)_t=M(L.format===Mi,L.type),ee&&(qt?e.texStorage2D(i.TEXTURE_2D,1,_t,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,_t,dt.width,dt.height,0,Tt,Gt,null));else if(L.isDataTexture)if(Ot.length>0){qt&&ee&&e.texStorage2D(i.TEXTURE_2D,At,_t,Ot[0].width,Ot[0].height);for(let ht=0,Et=Ot.length;ht<Et;ht++)Mt=Ot[ht],qt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Tt,Gt,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,_t,Mt.width,Mt.height,0,Tt,Gt,Mt.data);L.generateMipmaps=!1}else qt?(ee&&e.texStorage2D(i.TEXTURE_2D,At,_t,dt.width,dt.height),j&&X(L,dt,Tt,Gt)):e.texImage2D(i.TEXTURE_2D,0,_t,dt.width,dt.height,0,Tt,Gt,dt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){qt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,_t,Ot[0].width,Ot[0].height,dt.depth);for(let ht=0,Et=Ot.length;ht<Et;ht++)if(Mt=Ot[ht],L.format!==ln)if(Tt!==null)if(qt){if(j)if(L.layerUpdates.size>0){let Lt=Tf(Mt.width,Mt.height,L.format,L.type);for(let gt of L.layerUpdates){let $t=Mt.data.subarray(gt*Lt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*Lt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,gt,Mt.width,Mt.height,1,Tt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,dt.depth,Tt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,_t,Mt.width,Mt.height,dt.depth,0,Mt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,dt.depth,Tt,Gt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,_t,Mt.width,Mt.height,dt.depth,0,Tt,Gt,Mt.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{qt&&ee&&e.texStorage2D(i.TEXTURE_2D,At,_t,Ot[0].width,Ot[0].height);for(let ht=0,Et=Ot.length;ht<Et;ht++)Mt=Ot[ht],L.format!==ln?Tt!==null?qt?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,_t,Mt.width,Mt.height,0,Mt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Tt,Gt,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,_t,Mt.width,Mt.height,0,Tt,Gt,Mt.data)}else if(L.isDataArrayTexture)if(qt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,_t,dt.width,dt.height,dt.depth),j)if(L.layerUpdates.size>0){let ht=Tf(dt.width,dt.height,L.format,L.type);for(let Et of L.layerUpdates){let Lt=dt.data.subarray(Et*ht/dt.data.BYTES_PER_ELEMENT,(Et+1)*ht/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,dt.width,dt.height,1,Tt,Gt,Lt)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,dt.width,dt.height,dt.depth,0,Tt,Gt,dt.data);else if(L.isData3DTexture)qt?(ee&&e.texStorage3D(i.TEXTURE_3D,At,_t,dt.width,dt.height,dt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,dt.width,dt.height,dt.depth,0,Tt,Gt,dt.data);else if(L.isFramebufferTexture){if(ee)if(qt)e.texStorage2D(i.TEXTURE_2D,At,_t,dt.width,dt.height);else{let ht=dt.width,Et=dt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,_t,ht,Et,0,Tt,Gt,null),ht>>=1,Et>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),dt.parentNode!==ht){ht.appendChild(dt),u.add(L),ht.onpaint=Et=>{let Lt=Et.changedElements;for(let gt of u)Lt.includes(gt.image)&&(gt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Lt=i.RGBA,gt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,gt,$t,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(qt&&ee){let ht=be(Ot[0]);e.texStorage2D(i.TEXTURE_2D,At,_t,ht.width,ht.height)}for(let ht=0,Et=Ot.length;ht<Et;ht++)Mt=Ot[ht],qt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Tt,Gt,Mt):e.texImage2D(i.TEXTURE_2D,ht,_t,Tt,Gt,Mt);L.generateMipmaps=!1}else if(qt){if(ee){let ht=be(dt);e.texStorage2D(i.TEXTURE_2D,At,_t,ht.width,ht.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,_t,Tt,Gt,dt);g(L)&&x(rt),St.__version=vt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function st(G,L,Q){if(L.image.length!==6)return;let rt=ot(G,L),lt=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let vt=n.get(lt);if(lt.version!==vt.__version||rt===!0){e.activeTexture(i.TEXTURE0+Q);let St=pe.getPrimaries(pe.workingColorSpace),ut=L.colorSpace===Xn?null:pe.getPrimaries(L.colorSpace),dt=L.colorSpace===Xn||St===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Tt=L.isCompressedTexture||L.image[0].isCompressedTexture,Gt=L.image[0]&&L.image[0].isDataTexture,_t=[];for(let gt=0;gt<6;gt++)!Tt&&!Gt?_t[gt]=m(L.image[gt],!0,r.maxCubemapSize):_t[gt]=Gt?L.image[gt].image:L.image[gt],_t[gt]=Be(L,_t[gt]);let Mt=_t[0],Ot=s.convert(L.format,L.colorSpace),qt=s.convert(L.type),ee=v(L.internalFormat,Ot,qt,L.normalized,L.colorSpace),j=L.isVideoTexture!==!0,At=vt.__version===void 0||rt===!0,ht=lt.dataReady,Et=S(L,Mt);J(i.TEXTURE_CUBE_MAP,L);let Lt;if(Tt){j&&At&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){Lt=_t[gt].mipmaps;for(let $t=0;$t<Lt.length;$t++){let Vt=Lt[$t];L.format!==ln?Ot!==null?j?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,0,0,Vt.width,Vt.height,Ot,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,ee,Vt.width,Vt.height,0,Vt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,0,0,Vt.width,Vt.height,Ot,qt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,ee,Vt.width,Vt.height,0,Ot,qt,Vt.data)}}}else{if(Lt=L.mipmaps,j&&At){Lt.length>0&&Et++;let gt=be(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Gt){j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,_t[gt].width,_t[gt].height,Ot,qt,_t[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,_t[gt].width,_t[gt].height,0,Ot,qt,_t[gt].data);for(let $t=0;$t<Lt.length;$t++){let Fe=Lt[$t].image[gt].image;j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,0,0,Fe.width,Fe.height,Ot,qt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,ee,Fe.width,Fe.height,0,Ot,qt,Fe.data)}}else{j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot,qt,_t[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,Ot,qt,_t[gt]);for(let $t=0;$t<Lt.length;$t++){let Vt=Lt[$t];j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,0,0,Ot,qt,Vt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,ee,Ot,qt,Vt.image[gt])}}}g(L)&&x(i.TEXTURE_CUBE_MAP),vt.__version=lt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function tt(G,L,Q,rt,lt,vt){let St=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),dt=v(Q.internalFormat,St,ut,Q.normalized,Q.colorSpace),Tt=n.get(L),Gt=n.get(Q);if(Gt.__renderTarget=L,!Tt.__hasExternalTextures){let _t=Math.max(1,L.width>>vt),Mt=Math.max(1,L.height>>vt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,vt,dt,_t,Mt,L.depth,0,St,ut,null):e.texImage2D(lt,vt,dt,_t,Mt,0,St,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),de(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,Gt.__webglTexture,0,fe(L)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,Gt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(G,L,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),L.depthBuffer){let rt=L.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,vt=M(L.stencilBuffer,lt),St=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(L),vt,L.width,L.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(L),vt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,G)}else{let rt=L.textures;for(let lt=0;lt<rt.length;lt++){let vt=rt[lt],St=s.convert(vt.format,vt.colorSpace),ut=s.convert(vt.type),dt=v(vt.internalFormat,St,ut,vt.normalized,vt.colorSpace);de(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(L),dt,L.width,L.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(L),dt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,dt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(G,L,Q){let rt=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(L.depthTexture);if(lt.__renderTarget=L,(!lt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),rt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,L.depthTexture.addEventListener("dispose",A)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),J(i.TEXTURE_CUBE_MAP,L.depthTexture);let Tt=s.convert(L.depthTexture.format),Gt=s.convert(L.depthTexture.type),_t;L.depthTexture.format===mi?_t=i.DEPTH_COMPONENT24:L.depthTexture.format===Mi&&(_t=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_t,L.width,L.height,0,Tt,Gt,null)}}else F(L.depthTexture,0);let vt=lt.__webglTexture,St=fe(L),ut=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,dt=L.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===mi)de(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ut,vt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ut,vt,0);else if(L.depthTexture.format===Mi)de(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ut,vt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ut,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(G){let L=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){let rt=G.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),rt){let lt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),L.__depthDisposeCallback=lt}L.__boundDepthTexture=rt}if(G.depthTexture&&!L.__autoAllocateDepthBuffer)if(Q)for(let rt=0;rt<6;rt++)pt(L.__webglFramebuffer[rt],G,rt);else{let rt=G.texture.mipmaps;rt&&rt.length>0?pt(L.__webglFramebuffer[0],G,0):pt(L.__webglFramebuffer,G,0)}else if(Q){L.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[rt]),L.__webglDepthbuffer[rt]===void 0)L.__webglDepthbuffer[rt]=i.createRenderbuffer(),ct(L.__webglDepthbuffer[rt],G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=L.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,vt)}}else{let rt=G.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),ct(L.__webglDepthbuffer,G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(G,L,Q){let rt=n.get(G);L!==void 0&&tt(rt.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ft(G)}function Yt(G){let L=G.texture,Q=n.get(G),rt=n.get(L);G.addEventListener("dispose",_);let lt=G.textures,vt=G.isWebGLCubeRenderTarget===!0,St=lt.length>1;if(St||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=L.version,o.memory.textures++),vt){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let dt=0;dt<L.mipmaps.length;dt++)Q.__webglFramebuffer[ut][dt]=i.createFramebuffer()}else Q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<L.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(St)for(let ut=0,dt=lt.length;ut<dt;ut++){let Tt=n.get(lt[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(G.samples>0&&de(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<lt.length;ut++){let dt=lt[ut];Q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let Tt=s.convert(dt.format,dt.colorSpace),Gt=s.convert(dt.type),_t=v(dt.internalFormat,Tt,Gt,dt.normalized,dt.colorSpace,G.isXRRenderTarget===!0),Mt=fe(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,_t,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(Q.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),J(i.TEXTURE_CUBE_MAP,L);for(let ut=0;ut<6;ut++)if(L.mipmaps&&L.mipmaps.length>0)for(let dt=0;dt<L.mipmaps.length;dt++)tt(Q.__webglFramebuffer[ut][dt],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else tt(Q.__webglFramebuffer[ut],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(L)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,dt=lt.length;ut<dt;ut++){let Tt=lt[ut],Gt=n.get(Tt),_t=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(_t=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Gt.__webglTexture),J(_t,Tt),tt(Q.__webglFramebuffer,G,Tt,i.COLOR_ATTACHMENT0+ut,_t,0),g(Tt)&&x(_t)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ut=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,rt.__webglTexture),J(ut,L),L.mipmaps&&L.mipmaps.length>0)for(let dt=0;dt<L.mipmaps.length;dt++)tt(Q.__webglFramebuffer[dt],G,L,i.COLOR_ATTACHMENT0,ut,dt);else tt(Q.__webglFramebuffer,G,L,i.COLOR_ATTACHMENT0,ut,0);g(L)&&x(ut),e.unbindTexture()}G.depthBuffer&&ft(G)}function wt(G){let L=G.textures;for(let Q=0,rt=L.length;Q<rt;Q++){let lt=L[Q];if(g(lt)){let vt=y(G),St=n.get(lt).__webglTexture;e.bindTexture(vt,St),x(vt),e.unbindTexture()}}}let xt=[],Kt=[];function le(G){if(G.samples>0){if(de(G)===!1){let L=G.textures,Q=G.width,rt=G.height,lt=i.COLOR_BUFFER_BIT,vt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(G),ut=L.length>1;if(ut)for(let Tt=0;Tt<L.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let dt=G.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Tt=0;Tt<L.length;Tt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);let Gt=n.get(L[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Q,rt,0,0,Q,rt,lt,i.NEAREST),l===!0&&(xt.length=0,Kt.length=0,xt.push(i.COLOR_ATTACHMENT0+Tt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(xt.push(vt),Kt.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<L.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);let Gt=n.get(L[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let L=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function fe(G){return Math.min(r.maxSamples,G.samples)}function de(G){let L=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Y(G){let L=o.render.frame;h.get(G)!==L&&(h.set(G,L),G.update())}function Be(G,L){let Q=G.colorSpace,rt=G.format,lt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==zo&&Q!==Xn&&(pe.getTransfer(Q)===_e?(rt!==ln||lt!==sn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",Q)),L}function be(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R2(i,t){function e(n,r=Xn){let s,o=pe.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===Bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ra)return i.BYTE;if(n===Pa)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===bf)return i.RGB;if(n===ln)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Xs)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Ys)return i.RG_INTEGER;if(n===$s)return i.RGBA_INTEGER;if(n===Ca||n===Ia||n===La||n===Fa)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===Vc||n===Gc||n===Hc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Da||n===Zc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wc||n===Xc)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yc)return s.COMPRESSED_R11_EAC;if(n===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return s.COMPRESSED_RG11_EAC;if(n===Zc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kc||n===jc||n===Jc||n===Qc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===iu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===su)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ou)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===au)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uu||n===hu||n===fu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uu)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===pu||n===Na||n===mu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===du)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
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

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:P2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends gi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",m=new Wf,g={},x=e.getContextAttributes(),y=null,v=null,M=[],S=[],A=new zt,_=null,E=null,w=new He;w.viewport=new Se;let T=new He;T.viewport=new Se;let I=[w,T],D=new Lc,C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=M[H];return X===void 0&&(X=new Ns,M[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=M[H];return X===void 0&&(X=new Ns,M[H]=X),X.getGripSpace()},this.getHand=function(H){let X=M[H];return X===void 0&&(X=new Ns,M[H]=X),X.getHandSpace()};function R(H){let X=S.indexOf(H.inputSource);if(X===-1)return;let et=M[X];et!==void 0&&(et.update(H.inputSource,H.frame,c||o),et.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",F);for(let H=0;H<M.length;H++){let X=S[H];X!==null&&(S[H]=null,M[H].disconnect(X))}C=null,P=null,m.reset();for(let H in g)delete g[H];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),E!==null){let H=E.camera;H.fov=E.fov,H.zoom=E.zoom,H.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",N),r.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,st=null,tt=null;x.depth&&(tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=x.stencil?Mi:mi,st=x.stencil?mr:Wn);let ct={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Pe(f.textureWidth,f.textureHeight,{format:ln,type:sn,depthTexture:new On(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Pe(d.framebufferWidth,d.framebufferHeight,{format:ln,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(H){for(let X=0;X<H.removed.length;X++){let et=H.removed[X],st=S.indexOf(et);st>=0&&(S[st]=null,M[st].disconnect(et))}for(let X=0;X<H.added.length;X++){let et=H.added[X],st=S.indexOf(et);if(st===-1){for(let ct=0;ct<M.length;ct++)if(ct>=S.length){S.push(et),st=ct;break}else if(S[ct]===null){S[ct]=et,st=ct;break}if(st===-1)break}let tt=M[st];tt&&tt.connect(et)}}let O=new W,k=new W;function V(H,X,et){O.setFromMatrixPosition(X.matrixWorld),k.setFromMatrixPosition(et.matrixWorld);let st=O.distanceTo(k),tt=X.projectionMatrix.elements,ct=et.projectionMatrix.elements,pt=tt[14]/(tt[10]-1),ft=tt[14]/(tt[10]+1),yt=(tt[9]+1)/tt[5],Yt=(tt[9]-1)/tt[5],wt=(tt[8]-1)/tt[0],xt=(ct[8]+1)/ct[0],Kt=pt*wt,le=pt*xt,fe=st/(-wt+xt),de=fe*-wt;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(de),H.translateZ(fe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),tt[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Y=pt+fe,Be=ft+fe,be=Kt-de,G=le+(st-de),L=yt*ft/Be*Y,Q=Yt*ft/Be*Y;H.projectionMatrix.makePerspective(be,G,L,Q,Y,Be),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function q(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,et=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(et=m.depthFar)),D.near=T.near=w.near=X,D.far=T.far=w.far=et,(C!==D.near||P!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,P=D.far),D.layers.mask=H.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let st=H.parent,tt=D.cameras;q(D,st);for(let ct=0;ct<tt.length;ct++)q(tt[ct],st);tt.length===2?V(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),E===null&&H.isPerspectiveCamera&&(E={camera:H,fov:H.fov,zoom:H.zoom}),z(H,D,st)};function z(H,X,et){et===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(et.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=hc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(H){return g[H]};let $=null;function J(H,X){if(h=X.getViewerPose(c||o),p=X,h!==null){let et=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let st=!1;et.length!==D.cameras.length&&(D.cameras.length=0,st=!0);for(let ft=0;ft<et.length;ft++){let yt=et[ft],Yt=null;if(d!==null)Yt=d.getViewport(yt);else{let xt=u.getViewSubImage(f,yt);Yt=xt.viewport,ft===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let wt=I[ft];wt===void 0&&(wt=new He,wt.layers.enable(ft),wt.viewport=new Se,I[ft]=wt),wt.matrix.fromArray(yt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(yt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),ft===0&&(D.matrix.copy(wt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),st===!0&&D.cameras.push(wt)}let tt=r.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ft=u.getDepthInformation(et[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,r.renderState)}if(tt&&tt.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ft=0;ft<et.length;ft++){let yt=et[ft].camera;if(yt){let Yt=g[yt];Yt||(Yt=new Qo,g[yt]=Yt);let wt=u.getCameraImage(yt);Yt.sourceTexture=wt}}}}for(let et=0;et<M.length;et++){let st=S[et],tt=M[et];st!==null&&tt!==void 0&&tt.update(st,X,c||o)}$&&$(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let ot=new d0;ot.setAnimationLoop(J),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}},I2=new jt,v0=new Qt;v0.set(-1,0,0,0,1,0,0,0,1);function L2(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,_f(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,x,y,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),b(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Je&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Je&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(I2.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(v0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Je&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function F2(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=r[v.id];S===void 0&&(m(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(v,A);let _=t.render.frame;s[v.id]!==_&&(f(v),s[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let S=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,E=S.length;_<E;_++){let w=S[_];if(Array.isArray(w))for(let T=0,I=w.length;T<I;T++)d(w[T],_,T,A);else d(w,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,S,A){if(b(v,M,S,A)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let w=0;for(let T=0;T<E.length;T++){let I=E[T],D=g(I);p(I,v.__data,w),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(w+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function b(v,M,S,A){let _=v.value,E=M+"_"+S;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let w=A[E];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function m(v){let M=v.uniforms,S=0,A=16;for(let E=0,w=M.length;E<w;E++){let T=Array.isArray(M[E])?M[E]:[M[E]];for(let I=0,D=T.length;I<D;I++){let C=T[I],P=Array.isArray(C.value)?C.value:[C.value];for(let R=0,N=P.length;R<N;R++){let F=P[R],O=g(F),k=S%A,V=k%O.boundary,q=k+V;S+=V,q!==0&&A-q<O.storage&&(S+=A-q),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=O.storage}}}let _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var D2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function N2(){return Si===null&&(Si=new Nn(D2,16,16,_i,an),Si.name="DFG_LUT",Si.minFilter=Ye,Si.magFilter=Ye,Si.wrapS=bn,Si.wrapT=bn,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var zi=class{constructor(t={}){let{canvas:e=Dm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let b=d,m=new Set([$s,Ys,qs]),g=new Set([sn,Wn,pr,mr,Bc,kc]),x=new Uint32Array(4),y=new Int32Array(4),v=new W,M=null,S=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,T=!1,I=null,D=null,C=null,P=null;this._outputColorSpace=we;let R=0,N=0,F=null,O=-1,k=null,V=new Se,q=new Se,z=null,$=new Z(0),J=0,ot=e.width,H=e.height,X=1,et=null,st=null,tt=new Se(0,0,ot,H),ct=new Se(0,0,ot,H),pt=!1,ft=new Us,yt=!1,Yt=!1,wt=new jt,xt=new W,Kt=new Se,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function de(){return F===null?X:1}let Y=n;function Be(B,K){return e.getContext(B,K)}let be,G,L,Q,rt,lt,vt,St,ut,dt,Tt,Gt,_t,Mt,Ot,qt,ee,j,At,ht,Et,Lt,gt;try{let B={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ei,!1),Y===null){let K="webgl2";if(Y=Be(K,B),Y===null)throw Be(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(B){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),Jt("WebGLRenderer: "+B.message),B}function $t(){be=new GM(Y),be.init(),Et=new R2(Y,be),G=new LM(Y,be,t,Et),L=new A2(Y,be),G.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),D=Y.createFramebuffer(),C=Y.createFramebuffer(),P=Y.createFramebuffer(),Q=new XM(Y),rt=new f2,lt=new E2(Y,be,L,rt,G,Et,Q),vt=new VM(w),St=new Yv(Y),Lt=new CM(Y,St),ut=new HM(Y,St,Q,Lt),dt=new YM(Y,ut,St,Lt,Q),j=new qM(Y,G,lt),Ot=new FM(rt),Tt=new h2(w,vt,be,G,Lt,Ot),Gt=new L2(w,rt),_t=new p2,Mt=new y2(be),ee=new PM(w,vt,L,dt,p,l),qt=new T2(w,dt,G),gt=new F2(Y,Q,G,L),At=new IM(Y,be,Q),ht=new WM(Y,be,Q),Q.programs=Tt.programs,w.capabilities=G,w.extensions=be,w.properties=rt,w.renderLists=_t,w.shadowMap=qt,w.state=L,w.info=Q}b!==sn&&(E=new ZM(b,e.width,e.height,a,r,s));let Vt=new Xf(w,Y);this.xr=Vt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let B=be.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=be.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(B){B!==void 0&&(X=B,this.setSize(ot,H,!1))},this.getSize=function(B){return B.set(ot,H)},this.setSize=function(B,K,at=!0){if(Vt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=B,H=K,e.width=Math.floor(B*X),e.height=Math.floor(K*X),at===!0&&(e.style.width=B+"px",e.style.height=K+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,B,K)},this.getDrawingBufferSize=function(B){return B.set(ot*X,H*X).floor()},this.setDrawingBufferSize=function(B,K,at){ot=B,H=K,X=at,e.width=Math.floor(B*at),e.height=Math.floor(K*at),this.setViewport(0,0,B,K)},this.setEffects=function(B){if(b===sn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let K=0;K<B.length;K++)if(B[K].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(V)},this.getViewport=function(B){return B.copy(tt)},this.setViewport=function(B,K,at,nt){B.isVector4?tt.set(B.x,B.y,B.z,B.w):tt.set(B,K,at,nt),L.viewport(V.copy(tt).multiplyScalar(X).round())},this.getScissor=function(B){return B.copy(ct)},this.setScissor=function(B,K,at,nt){B.isVector4?ct.set(B.x,B.y,B.z,B.w):ct.set(B,K,at,nt),L.scissor(q.copy(ct).multiplyScalar(X).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(B){L.setScissorTest(pt=B)},this.setOpaqueSort=function(B){et=B},this.setTransparentSort=function(B){st=B},this.getClearColor=function(B){return B.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(B=!0,K=!0,at=!0){let nt=0;if(B){let it=!1;if(F!==null){let Ct=F.texture.format;it=m.has(Ct)}if(it){let Ct=F.texture.type,Nt=g.has(Ct),Pt=ee.getClearColor(),Bt=ee.getClearAlpha(),Ht=Pt.r,ue=Pt.g,me=Pt.b;Nt?(x[0]=Ht,x[1]=ue,x[2]=me,x[3]=Bt,Y.clearBufferuiv(Y.COLOR,0,x)):(y[0]=Ht,y[1]=ue,y[2]=me,y[3]=Bt,Y.clearBufferiv(Y.COLOR,0,y))}else nt|=Y.COLOR_BUFFER_BIT}K&&(nt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(nt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Y.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),I=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),ee.dispose(),_t.dispose(),Mt.dispose(),rt.dispose(),vt.dispose(),dt.dispose(),Lt.dispose(),gt.dispose(),Tt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",lp),Vt.removeEventListener("sessionend",cp),Pr.stop()};function Fe(B){B.preventDefault(),Go("WebGLRenderer: Context Lost."),T=!0}function Te(){Go("WebGLRenderer: Context Restored."),T=!1;let B=Q.autoReset,K=qt.enabled,at=qt.autoUpdate,nt=qt.needsUpdate,it=qt.type;$t(),Q.autoReset=B,qt.enabled=K,qt.autoUpdate=at,qt.needsUpdate=nt,qt.type=it}function ei(B){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function hi(B){let K=B.target;K.removeEventListener("dispose",hi),Dx(K)}function Dx(B){Nx(B),rt.remove(B)}function Nx(B){let K=rt.get(B).programs;K!==void 0&&(K.forEach(function(at){Tt.releaseProgram(at)}),B.isShaderMaterial&&Tt.releaseShaderCache(B))}this.renderBufferDirect=function(B,K,at,nt,it,Ct){K===null&&(K=le);let Nt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Pt=Bx(B,K,at,nt,it);L.setMaterial(nt,Nt);let Bt=at.index,Ht=1;if(nt.wireframe===!0){if(Bt=ut.getWireframeAttribute(at),Bt===void 0)return;Ht=2}let ue=at.drawRange,me=at.attributes.position,kt=ue.start*Ht,Ae=(ue.start+ue.count)*Ht;Ct!==null&&(kt=Math.max(kt,Ct.start*Ht),Ae=Math.min(Ae,(Ct.start+Ct.count)*Ht)),Bt!==null?(kt=Math.max(kt,0),Ae=Math.min(Ae,Bt.count)):me!=null&&(kt=Math.max(kt,0),Ae=Math.min(Ae,me.count));let tn=Ae-kt;if(tn<0||tn===1/0)return;Lt.setup(it,nt,Pt,at,Bt);let Ne,Le=At;if(Bt!==null&&(Ne=St.get(Bt),Le=ht,Le.setIndex(Ne)),it.isMesh)nt.wireframe===!0?(L.setLineWidth(nt.wireframeLinewidth*de()),Le.setMode(Y.LINES)):Le.setMode(Y.TRIANGLES);else if(it.isLine){let Sn=nt.linewidth;Sn===void 0&&(Sn=1),L.setLineWidth(Sn*de()),it.isLineSegments?Le.setMode(Y.LINES):it.isLineLoop?Le.setMode(Y.LINE_LOOP):Le.setMode(Y.LINE_STRIP)}else it.isPoints?Le.setMode(Y.POINTS):it.isSprite&&Le.setMode(Y.TRIANGLES);if(it.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Le.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let Sn=it._multiDrawStarts,Dt=it._multiDrawCounts,Cn=it._multiDrawCount,ye=Bt?St.get(Bt).bytesPerElement:1,Zn=rt.get(nt).currentProgram.getUniforms();for(let fi=0;fi<Cn;fi++)Zn.setValue(Y,"_gl_DrawID",fi),Le.render(Sn[fi]/ye,Dt[fi])}else if(it.isInstancedMesh)Le.renderInstances(kt,tn,it.count);else if(at.isInstancedBufferGeometry){let Sn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Dt=Math.min(at.instanceCount,Sn);Le.renderInstances(kt,tn,Dt)}else Le.render(kt,tn)};function ap(B,K,at,nt){I!==null&&B.isNodeMaterial&&I.setObject(nt,B),yt===!0&&Ot.setState(B,at,!1),B.transparent===!0&&B.side===te&&B.forceSinglePass===!1?(B.side=Je,B.needsUpdate=!0,_l(B,K,nt),B.side=Rn,B.needsUpdate=!0,_l(B,K,nt),B.side=te):_l(B,K,nt)}this.compile=function(B,K,at=null){at===null&&(at=B),I!==null&&I.renderStart(B,K,at),S=Mt.get(at),S.init(K),_.push(S),at.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),B!==at&&B.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),Yt=this.localClippingEnabled,yt=Ot.init(this.clippingPlanes,Yt),yt===!0&&Ot.setGlobalState(this.clippingPlanes,K),I!==null&&qt.render(S.state.shadowsArray,at,K);let nt=new Set;return B.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Ct=it.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){let Pt=Ct[Nt];ap(Pt,at,K,it),nt.add(Pt)}else ap(Ct,at,K,it),nt.add(Ct)}),S=_.pop(),I!==null&&I.renderEnd(),nt},this.compileAsync=function(B,K,at=null){let nt=this.compile(B,K,at);return new Promise(it=>{function Ct(){if(nt.forEach(function(Nt){let Bt=rt.get(Nt).currentProgram;(Bt===void 0||Bt.isReady())&&nt.delete(Nt)}),nt.size===0){it(B);return}setTimeout(Ct,10)}be.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let xh=null;function Ox(B){xh&&xh(B)}function lp(){Pr.stop()}function cp(){Pr.start()}let Pr=new d0;Pr.setAnimationLoop(Ox),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(B){xh=B,Vt.setAnimationLoop(B),B===null?Pr.stop():Pr.start()},Vt.addEventListener("sessionstart",lp),Vt.addEventListener("sessionend",cp),this.render=function(B,K){if(K!==void 0&&K.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;I!==null&&I.renderStart(B,K);let at=Vt.enabled===!0&&Vt.isPresenting===!0,nt=E!==null&&(F===null||at)&&E.begin(w,F);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(K),K=Vt.getCamera()),B.isScene===!0&&B.onBeforeRender(w,B,K,F),S=Mt.get(B,_.length),S.init(K),S.state.textureUnits=lt.getTextureUnits(),_.push(S),wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ft.setFromProjectionMatrix(wt,oi,K.reversedDepth),Yt=this.localClippingEnabled,yt=Ot.init(this.clippingPlanes,Yt),M=_t.get(B,A.length),M.init(),A.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Nt=w.xr.getDepthSensingMesh();Nt!==null&&vh(Nt,K,-1/0,w.sortObjects)}vh(B,K,0,w.sortObjects),M.finish(),I!==null&&I.updateLights(S.state.lightsArray),w.sortObjects===!0&&M.sort(et,st),fe=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,fe&&ee.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&Ot.beginShadows();let it=S.state.shadowsArray;if(qt.render(it,B,K),yt===!0&&Ot.endShadows(),(nt&&E.hasRenderPass())===!1){let Nt=M.opaque,Pt=M.transmissive;if(S.setupLights(),K.isArrayCamera){let Bt=K.cameras;if(Pt.length>0)for(let Ht=0,ue=Bt.length;Ht<ue;Ht++){let me=Bt[Ht];hp(Nt,Pt,B,me)}fe&&ee.render(B);for(let Ht=0,ue=Bt.length;Ht<ue;Ht++){let me=Bt[Ht];up(M,B,me,me.viewport)}}else Pt.length>0&&hp(Nt,Pt,B,K),fe&&ee.render(B),up(M,B,K)}F!==null&&N===0&&(lt.updateMultisampleRenderTarget(F),lt.updateRenderTargetMipmap(F)),nt&&E.end(w),B.isScene===!0&&B.onAfterRender(w,B,K),Lt.resetDefaultState(),O=-1,k=null,_.pop(),_.length>0?(S=_[_.length-1],lt.setTextureUnits(S.state.textureUnits),yt===!0&&Ot.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,I!==null&&I.renderEnd()};function vh(B,K,at,nt){if(B.visible===!1)return;if(B.layers.test(K.layers)){if(B.isGroup)at=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(K);else if(B.isLightProbeGrid)S.pushLightProbeGrid(B);else if(B.isLight)S.pushLight(B),B.castShadow&&S.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(ft)){nt&&Kt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(wt);let Nt=dt.update(B),Pt=B.material;Pt.visible&&M.push(B,Nt,Pt,at,Kt.z,null,K)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(ft))){let Nt=dt.update(B),Pt=B.material;if(nt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Kt.copy(B.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Kt.copy(Nt.boundingSphere.center)),Kt.applyMatrix4(B.matrixWorld).applyMatrix4(wt)),Array.isArray(Pt)){let Bt=Nt.groups;for(let Ht=0,ue=Bt.length;Ht<ue;Ht++){let me=Bt[Ht],kt=Pt[me.materialIndex];kt&&kt.visible&&M.push(B,Nt,kt,at,Kt.z,me,K)}}else Pt.visible&&M.push(B,Nt,Pt,at,Kt.z,null,K)}}let Ct=B.children;for(let Nt=0,Pt=Ct.length;Nt<Pt;Nt++)vh(Ct[Nt],K,at,nt)}function up(B,K,at,nt){let{opaque:it,transmissive:Ct,transparent:Nt}=B;S.setupLightsView(at),yt===!0&&Ot.setGlobalState(w.clippingPlanes,at),nt&&L.viewport(V.copy(nt)),it.length>0&&Ml(it,K,at),Ct.length>0&&Ml(Ct,K,at),Nt.length>0&&Ml(Nt,K,at),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function hp(B,K,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[nt.id]===void 0){let kt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[nt.id]=new Pe(1,1,{generateMipmaps:!0,type:kt?an:sn,minFilter:dr,samples:Math.max(4,G.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Ct=S.state.transmissionRenderTarget[nt.id],Nt=nt.viewport||V;Ct.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);let Pt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),Ht=w.getActiveMipmapLevel();w.setRenderTarget(Ct),w.getClearColor($),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),fe&&ee.render(at);let ue=w.toneMapping;w.toneMapping=Hn;let me=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),S.setupLightsView(nt),yt===!0&&Ot.setGlobalState(w.clippingPlanes,nt),Ml(B,at,nt),lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct),be.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ae=0,tn=K.length;Ae<tn;Ae++){let Ne=K[Ae],{object:Le,geometry:Sn,material:Dt,group:Cn}=Ne;if(Dt.side===te&&Le.layers.test(nt.layers)){let ye=Dt.side;Dt.side=Je,Dt.needsUpdate=!0,fp(Le,at,nt,Sn,Dt,Cn),Dt.side=ye,Dt.needsUpdate=!0,kt=!0}}kt===!0&&(lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct))}w.setRenderTarget(Pt,Bt,Ht),w.setClearColor($,J),me!==void 0&&(nt.viewport=me),w.toneMapping=ue}function Ml(B,K,at){let nt=K.isScene===!0?K.overrideMaterial:null;for(let it=0,Ct=B.length;it<Ct;it++){let Nt=B[it],{object:Pt,geometry:Bt,group:Ht}=Nt,ue=Nt.material;ue.allowOverride===!0&&nt!==null&&(ue=nt),Pt.layers.test(at.layers)&&fp(Pt,K,at,Bt,ue,Ht)}}function fp(B,K,at,nt,it,Ct){I!==null&&it.isNodeMaterial&&I.setObject(B,it),B.onBeforeRender(w,K,at,nt,it,Ct),B.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),it.onBeforeRender(w,K,at,nt,B,Ct),it.transparent===!0&&it.side===te&&it.forceSinglePass===!1?(it.side=Je,it.needsUpdate=!0,w.renderBufferDirect(at,K,nt,it,B,Ct),it.side=Rn,it.needsUpdate=!0,w.renderBufferDirect(at,K,nt,it,B,Ct),it.side=te):w.renderBufferDirect(at,K,nt,it,B,Ct),B.onAfterRender(w,K,at,nt,it,Ct)}function _l(B,K,at){K.isScene!==!0&&(K=le);let nt=rt.get(B),it=S.state.lights,Ct=S.state.shadowsArray,Nt=it.state.version,Pt=Tt.getParameters(B,it.state,Ct,K,at,S.state.lightProbeGridArray),Bt=Tt.getProgramCacheKey(Pt),Ht=nt.programs;nt.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?K.environment:null,nt.fog=K.fog;let ue=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;nt.envMap=vt.get(B.envMap||nt.environment,ue),nt.envMapRotation=nt.environment!==null&&B.envMap===null?K.environmentRotation:B.envMapRotation,Ht===void 0&&(B.addEventListener("dispose",hi),Ht=new Map,nt.programs=Ht);let me=Ht.get(Bt);if(me!==void 0){if(nt.currentProgram===me&&nt.lightsStateVersion===Nt)return pp(B,Pt),me}else Pt.uniforms=Tt.getUniforms(B),I!==null&&B.isNodeMaterial&&I.build(B,at,Pt),B.onBeforeCompile(Pt,w),me=Tt.acquireProgram(Pt,Bt),Ht.set(Bt,me),nt.uniforms=Pt.uniforms;let kt=nt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(kt.clippingPlanes=Ot.uniform),pp(B,Pt),nt.needsLights=zx(B),nt.lightsStateVersion=Nt,nt.needsLights&&(kt.ambientLightColor.value=it.state.ambient,kt.lightProbe.value=it.state.probe,kt.sunLights.value=it.state.sun,kt.sunLightShadows.value=it.state.sunShadow,kt.directionalLights.value=it.state.directional,kt.directionalLightShadows.value=it.state.directionalShadow,kt.spotLights.value=it.state.spot,kt.spotLightShadows.value=it.state.spotShadow,kt.rectAreaLights.value=it.state.rectArea,kt.ltc_1.value=it.state.rectAreaLTC1,kt.ltc_2.value=it.state.rectAreaLTC2,kt.pointLights.value=it.state.point,kt.pointLightShadows.value=it.state.pointShadow,kt.hemisphereLights.value=it.state.hemi,kt.sunShadowMatrix.value=it.state.sunShadowMatrix,kt.sunShadowCascade.value=it.state.sunShadowCascade,kt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,kt.spotLightMatrix.value=it.state.spotLightMatrix,kt.spotLightMap.value=it.state.spotLightMap,kt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=S.state.lightProbeGridArray.length>0,nt.currentProgram=me,nt.uniformsList=null,me}function dp(B){if(B.uniformsList===null){let K=B.currentProgram.getUniforms();B.uniformsList=Js.seqWithValue(K.seq,B.uniforms)}return B.uniformsList}function pp(B,K){let at=rt.get(B);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function Ux(B,K){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let at=0,nt=B.length;at<nt;at++){let it=B[at];if(it.texture!==null&&it.boundingBox.containsPoint(v))return it}return null}function Bx(B,K,at,nt,it){K.isScene!==!0&&(K=le),lt.resetTextureUnits();let Ct=K.fog,Nt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?K.environment:null,Pt=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pe.workingColorSpace,Bt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Ht=vt.get(nt.envMap||Nt,Bt),ue=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,me=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),kt=!!at.morphAttributes.position,Ae=!!at.morphAttributes.normal,tn=!!at.morphAttributes.color,Ne=Hn;nt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ne=w.toneMapping);let Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Sn=Le!==void 0?Le.length:0,Dt=rt.get(nt),Cn=S.state.lights;if(yt===!0&&(Yt===!0||B!==k)){let De=B===k&&nt.id===O;Ot.setState(nt,B,De)}let ye=!1;nt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Cn.state.version||Dt.outputColorSpace!==Pt||it.isBatchedMesh&&Dt.batching===!1||!it.isBatchedMesh&&Dt.batching===!0||it.isBatchedMesh&&Dt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Dt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Dt.instancing===!1||!it.isInstancedMesh&&Dt.instancing===!0||it.isSkinnedMesh&&Dt.skinning===!1||!it.isSkinnedMesh&&Dt.skinning===!0||it.isInstancedMesh&&Dt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Dt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Dt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Dt.instancingMorph===!1&&it.morphTexture!==null||Dt.envMap!==Ht||nt.fog===!0&&Dt.fog!==Ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Ot.numPlanes||Dt.numIntersection!==Ot.numIntersection)||Dt.vertexAlphas!==ue||Dt.vertexTangents!==me||Dt.morphTargets!==kt||Dt.morphNormals!==Ae||Dt.morphColors!==tn||Dt.toneMapping!==Ne||Dt.morphTargetsCount!==Sn||!!Dt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Dt.__version=nt.version);let Zn=Dt.currentProgram;ye===!0&&(Zn=_l(nt,K,it),I&&nt.isNodeMaterial&&I.onUpdateProgram(nt,Zn,Dt));let fi=!1,Yi=!1,ss=!1,Ce=Zn.getUniforms(),Ke=Dt.uniforms;if(L.useProgram(Zn.program)&&(fi=!0,Yi=!0,ss=!0),nt.id!==O&&(O=nt.id,Yi=!0),Dt.needsLights){let De=Ux(S.state.lightProbeGridArray,it);Dt.lightProbeGrid!==De&&(Dt.lightProbeGrid=De,Yi=!0)}if(fi||k!==B){L.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Ce.setValue(Y,"projectionMatrix",B.projectionMatrix),Ce.setValue(Y,"viewMatrix",B.matrixWorldInverse);let Zi=Ce.map.cameraPosition;Zi!==void 0&&Zi.setValue(Y,xt.setFromMatrixPosition(B.matrixWorld)),G.logarithmicDepthBuffer&&Ce.setValue(Y,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(Y,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Yi=!0,ss=!0)}if(Dt.needsLights&&(Cn.state.sunShadowMap.length>0&&Ce.setValue(Y,"sunShadowMap",Cn.state.sunShadowMap,lt),Cn.state.directionalShadowMap.length>0&&Ce.setValue(Y,"directionalShadowMap",Cn.state.directionalShadowMap,lt),Cn.state.spotShadowMap.length>0&&Ce.setValue(Y,"spotShadowMap",Cn.state.spotShadowMap,lt),Cn.state.pointShadowMap.length>0&&Ce.setValue(Y,"pointShadowMap",Cn.state.pointShadowMap,lt)),it.isSkinnedMesh){Ce.setOptional(Y,it,"bindMatrix"),Ce.setOptional(Y,it,"bindMatrixInverse");let De=it.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ce.setValue(Y,"boneTexture",De.boneTexture,lt))}it.isBatchedMesh&&(Ce.setOptional(Y,it,"batchingTexture"),Ce.setValue(Y,"batchingTexture",it._matricesTexture,lt),Ce.setOptional(Y,it,"batchingIdTexture"),Ce.setValue(Y,"batchingIdTexture",it._indirectTexture,lt),Ce.setOptional(Y,it,"batchingColorTexture"),it._colorsTexture!==null&&Ce.setValue(Y,"batchingColorTexture",it._colorsTexture,lt));let $i=at.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&j.update(it,at,Zn),(Yi||Dt.receiveShadow!==it.receiveShadow)&&(Dt.receiveShadow=it.receiveShadow,Ce.setValue(Y,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&K.environment!==null&&(Ke.envMapIntensity.value=K.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=N2()),Yi){if(Ce.setValue(Y,"toneMappingExposure",w.toneMappingExposure),Dt.needsLights&&kx(Ke,ss),Ct&&nt.fog===!0&&Gt.refreshFogUniforms(Ke,Ct),Gt.refreshMaterialUniforms(Ke,nt,X,H,S.state.transmissionRenderTarget[B.id]),Dt.needsLights&&Dt.lightProbeGrid){let De=Dt.lightProbeGrid;Ke.probesSH.value=De.texture,Ke.probesMin.value.copy(De.boundingBox.min),Ke.probesMax.value.copy(De.boundingBox.max),Ke.probesResolution.value.copy(De.resolution)}Js.upload(Y,dp(Dt),Ke,lt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Js.upload(Y,dp(Dt),Ke,lt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(Y,"center",it.center),Ce.setValue(Y,"modelViewMatrix",it.modelViewMatrix),Ce.setValue(Y,"normalMatrix",it.normalMatrix),Ce.setValue(Y,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let De=nt.uniformsGroups;for(let Zi=0,os=De.length;Zi<os;Zi++){let gp=De[Zi];gt.update(gp,Zn),gt.bind(gp,Zn)}}return Zn}function kx(B,K){B.ambientLightColor.needsUpdate=K,B.lightProbe.needsUpdate=K,B.sunLights.needsUpdate=K,B.sunLightShadows.needsUpdate=K,B.directionalLights.needsUpdate=K,B.directionalLightShadows.needsUpdate=K,B.pointLights.needsUpdate=K,B.pointLightShadows.needsUpdate=K,B.spotLights.needsUpdate=K,B.spotLightShadows.needsUpdate=K,B.rectAreaLights.needsUpdate=K,B.hemisphereLights.needsUpdate=K}function zx(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(B,K,at){let nt=rt.get(B);nt.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(B.texture).__webglTexture=K,rt.get(B.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:at,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,K){let at=rt.get(B);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(B,K=0,at=0){F=B,R=K,N=at;let nt=null,it=!1,Ct=!1;if(B){let Pt=rt.get(B);if(Pt.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(Y.FRAMEBUFFER,Pt.__webglFramebuffer),V.copy(B.viewport),q.copy(B.scissor),z=B.scissorTest,L.viewport(V),L.scissor(q),L.setScissorTest(z),O=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(B);else if(Pt.__hasExternalTextures)lt.rebindTextures(B,rt.get(B.texture).__webglTexture,rt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let ue=B.depthTexture;if(Pt.__boundDepthTexture!==ue){if(ue!==null&&rt.has(ue)&&(B.width!==ue.image.width||B.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(B)}}let Bt=B.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);let Ht=rt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Ht[K])?nt=Ht[K][at]:nt=Ht[K],it=!0):B.samples>0&&lt.useMultisampledRTT(B)===!1?nt=rt.get(B).__webglMultisampledFramebuffer:Array.isArray(Ht)?nt=Ht[at]:nt=Ht,V.copy(B.viewport),q.copy(B.scissor),z=B.scissorTest}else V.copy(tt).multiplyScalar(X).floor(),q.copy(ct).multiplyScalar(X).floor(),z=pt;if(at!==0&&(nt=D),L.bindFramebuffer(Y.FRAMEBUFFER,nt)&&L.drawBuffers(B,nt),L.viewport(V),L.scissor(q),L.setScissorTest(z),it){let Pt=rt.get(B.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pt.__webglTexture,at)}else if(Ct){let Pt=K;for(let Bt=0;Bt<B.textures.length;Bt++){let Ht=rt.get(B.textures[Bt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,at,Pt)}}else if(B!==null&&at!==0){let Pt=rt.get(B.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pt.__webglTexture,at)}O=-1};function mp(B){let K=rt.get(B);return(K.__readFormat!==B.format||K.__readType!==B.type)&&(K.__readFormat=B.format,K.__readType=B.type,K.__formatReadable=G.textureFormatReadable(B.format),K.__typeReadable=G.textureTypeReadable(B.type)),K}this.readRenderTargetPixels=function(B,K,at,nt,it,Ct,Nt,Pt=0){if(!(B&&B.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){L.bindFramebuffer(Y.FRAMEBUFFER,Bt);try{let Ht=B.textures[Pt],ue=Ht.format,me=Ht.type;B.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);let kt=mp(Ht);if(kt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=B.width-nt&&at>=0&&at<=B.height-it&&Y.readPixels(K,at,nt,it,Et.convert(ue),Et.convert(me),Ct)}finally{let Ht=F!==null?rt.get(F).__webglFramebuffer:null;L.bindFramebuffer(Y.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(B,K,at,nt,it,Ct,Nt,Pt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt)if(K>=0&&K<=B.width-nt&&at>=0&&at<=B.height-it){L.bindFramebuffer(Y.FRAMEBUFFER,Bt);let Ht=B.textures[Pt],ue=Ht.format,me=Ht.type;B.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);let kt=mp(Ht);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ct.byteLength,Y.STREAM_READ),Y.readPixels(K,at,nt,it,Et.convert(ue),Et.convert(me),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let tn=F!==null?rt.get(F).__webglFramebuffer:null;L.bindFramebuffer(Y.FRAMEBUFFER,tn);let Ne=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Om(Y,Ne,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ct),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ae),Y.deleteSync(Ne),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,K=null,at=0){let nt=Math.pow(2,-at),it=Math.floor(B.image.width*nt),Ct=Math.floor(B.image.height*nt),Nt=K!==null?K.x:0,Pt=K!==null?K.y:0;lt.setTexture2D(B,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,at,0,0,Nt,Pt,it,Ct),L.unbindTexture()},this.copyTextureToTexture=function(B,K,at=null,nt=null,it=0,Ct=0){let Nt,Pt,Bt,Ht,ue,me,kt,Ae,tn,Ne=B.isCompressedTexture?B.mipmaps[Ct]:B.image;if(at!==null)Nt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Ht=at.min.x,ue=at.min.y,me=at.isBox3?at.min.z:0;else{let Ke=Math.pow(2,-it);Nt=Math.floor(Ne.width*Ke),Pt=Math.floor(Ne.height*Ke),B.isDataArrayTexture?Bt=Ne.depth:B.isData3DTexture?Bt=Math.floor(Ne.depth*Ke):Bt=1,Ht=0,ue=0,me=0}nt!==null?(kt=nt.x,Ae=nt.y,tn=nt.z):(kt=0,Ae=0,tn=0);let Le=Et.convert(K.format),Sn=Et.convert(K.type),Dt;K.isData3DTexture?(lt.setTexture3D(K,0),Dt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(lt.setTexture2DArray(K,0),Dt=Y.TEXTURE_2D_ARRAY):(lt.setTexture2D(K,0),Dt=Y.TEXTURE_2D),L.activeTexture(Y.TEXTURE0),L.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let Cn=L.getParameter(Y.UNPACK_ROW_LENGTH),ye=L.getParameter(Y.UNPACK_IMAGE_HEIGHT),Zn=L.getParameter(Y.UNPACK_SKIP_PIXELS),fi=L.getParameter(Y.UNPACK_SKIP_ROWS),Yi=L.getParameter(Y.UNPACK_SKIP_IMAGES);L.pixelStorei(Y.UNPACK_ROW_LENGTH,Ne.width),L.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ne.height),L.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(Y.UNPACK_SKIP_ROWS,ue),L.pixelStorei(Y.UNPACK_SKIP_IMAGES,me);let ss=B.isDataArrayTexture||B.isData3DTexture,Ce=K.isDataArrayTexture||K.isData3DTexture;if(B.isDepthTexture){let Ke=rt.get(B),$i=rt.get(K),De=rt.get(Ke.__renderTarget),Zi=rt.get($i.__renderTarget);L.bindFramebuffer(Y.READ_FRAMEBUFFER,De.__webglFramebuffer),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let os=0;os<Bt;os++)ss&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(B).__webglTexture,it,me+os),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(K).__webglTexture,Ct,tn+os)),Y.blitFramebuffer(Ht,ue,Nt,Pt,kt,Ae,Nt,Pt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);L.bindFramebuffer(Y.READ_FRAMEBUFFER,null),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(it!==0||B.isRenderTargetTexture||rt.has(B)){let Ke=rt.get(B),$i=rt.get(K);L.bindFramebuffer(Y.READ_FRAMEBUFFER,C),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,P);for(let De=0;De<Bt;De++)ss?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ke.__webglTexture,it,me+De):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ke.__webglTexture,it),Ce?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$i.__webglTexture,Ct,tn+De):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$i.__webglTexture,Ct),it!==0?Y.blitFramebuffer(Ht,ue,Nt,Pt,kt,Ae,Nt,Pt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ce?Y.copyTexSubImage3D(Dt,Ct,kt,Ae,tn+De,Ht,ue,Nt,Pt):Y.copyTexSubImage2D(Dt,Ct,kt,Ae,Ht,ue,Nt,Pt);L.bindFramebuffer(Y.READ_FRAMEBUFFER,null),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ce?B.isDataTexture||B.isData3DTexture?Y.texSubImage3D(Dt,Ct,kt,Ae,tn,Nt,Pt,Bt,Le,Sn,Ne.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Dt,Ct,kt,Ae,tn,Nt,Pt,Bt,Le,Ne.data):Y.texSubImage3D(Dt,Ct,kt,Ae,tn,Nt,Pt,Bt,Le,Sn,Ne):B.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ct,kt,Ae,Nt,Pt,Le,Sn,Ne.data):B.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ct,kt,Ae,Ne.width,Ne.height,Le,Ne.data):Y.texSubImage2D(Y.TEXTURE_2D,Ct,kt,Ae,Nt,Pt,Le,Sn,Ne);L.pixelStorei(Y.UNPACK_ROW_LENGTH,Cn),L.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(Y.UNPACK_SKIP_PIXELS,Zn),L.pixelStorei(Y.UNPACK_SKIP_ROWS,fi),L.pixelStorei(Y.UNPACK_SKIP_IMAGES,Yi),Ct===0&&K.generateMipmaps&&Y.generateMipmap(Dt),L.unbindTexture()},this.initRenderTarget=function(B){rt.get(B).__webglFramebuffer===void 0&&lt.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?lt.setTextureCube(B,0):B.isData3DTexture?lt.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?lt.setTexture2DArray(B,0):lt.setTexture2D(B,0),L.unbindTexture()},this.resetState=function(){R=0,N=0,F=null,L.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var y0=24*1024*1024,O2=12e4;function Yf(i){let t=i.aureon_model?.url;return typeof t!="string"||t.length>512||!t.startsWith("/")||t.startsWith("//")||/[?#\\]|\.\./.test(t)||!/\.glb$/i.test(t)?null:t}var U2={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16},B2={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function ka(i){try{typeof performance<"u"&&performance.mark&&!performance.getEntriesByName(i).length&&performance.mark(i)}catch{}}async function Su(i,t){let e=new DataView(i);if(i.byteLength<20||e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2)throw new Error("not a glTF 2.0 .glb");let n=null,r=null;for(let y=12;y+8<=Math.min(i.byteLength,e.getUint32(8,!0));){let v=e.getUint32(y,!0),M=e.getUint32(y+4,!0);if(y+8+v>i.byteLength)throw new Error("truncated chunk");M===1313821514?n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,y+8,v))):M===5130562&&(r=i.slice(y+8,y+8+v)),y+=8+v+(4-v%4)%4}if(!n||!r)throw new Error("missing JSON or BIN chunk");if((n.buffers??[]).some(y=>typeof y.uri=="string"))throw new Error("external buffers are not supported");let s=y=>{let v=n.accessors?.[y];if(!v)throw new Error("missing accessor");let M=U2[v.type],S=B2[v.componentType],A=n.bufferViews?.[v.bufferView];if(!M||!S||!A||(A.buffer??0)!==0)throw new Error("unsupported accessor");let _=S.prototype.BYTES_PER_ELEMENT,E=A.byteStride??M*_,w=(A.byteOffset??0)+(v.byteOffset??0);if(w+E*(v.count-1)+M*_>r.byteLength)throw new Error("accessor out of range");let T=v.componentType===5126?new Float32Array(v.count*M):new Uint32Array(v.count*M),I=new DataView(r),D=C=>{switch(v.componentType){case 5126:return I.getFloat32(C,!0);case 5125:return I.getUint32(C,!0);case 5123:return I.getUint16(C,!0);case 5122:return I.getInt16(C,!0);case 5121:return I.getUint8(C);default:return I.getInt8(C)}};for(let C=0;C<v.count;C++)for(let P=0;P<M;P++)T[C*M+P]=D(w+C*E+P*_);return{array:T,size:M}},o=(n.images??[]).map(async y=>{let v=n.bufferViews?.[y.bufferView];if(!v||typeof y.mimeType!="string"||!/^image\/(png|jpeg)$/.test(y.mimeType))return null;let M=new Blob([new Uint8Array(r,v.byteOffset??0,v.byteLength)],{type:y.mimeType}),S=await t(M);if(!S)return null;let A=new dn(S);return A.flipY=!1,A.needsUpdate=!0,A}),a=await Promise.all(o),l=new Map,c=(y,v)=>{let M=y?n.textures?.[y.index]:null,S=M?a[M.source]??null:null;if(!S)return null;let A=`${M.source}|${v}|${M.sampler??-1}`,_=l.get(A);if(!_){_=l.size?S.clone():S,l.size&&(_.needsUpdate=!0);let E=typeof M.sampler=="number"?n.samplers?.[M.sampler]:void 0,w=T=>T===33071?bn:T===33648?Cs:je;_.wrapS=w(E?.wrapS),_.wrapT=w(E?.wrapT),_.colorSpace=v?we:Xn,l.set(A,_)}return _},h=(n.materials??[]).map(y=>{let v=y.pbrMetallicRoughness??{},M=v.baseColorFactor??[1,1,1,1],S=new Un({color:new Z().setRGB(M[0],M[1],M[2]),opacity:M[3]??1,transparent:y.alphaMode==="BLEND"||(M[3]??1)<1,metalness:v.metallicFactor??1,roughness:v.roughnessFactor??1,side:y.doubleSided?te:Rn});S.map=c(v.baseColorTexture,!0);let A=c(y.normalTexture,!1);if(A){S.normalMap=A;let w=typeof y.normalTexture.scale=="number"?y.normalTexture.scale:1;S.normalScale.set(w,-w)}let _=c(v.metallicRoughnessTexture,!1);_&&(S.roughnessMap=_,S.metalnessMap=_);let E=y.emissiveFactor;if(Array.isArray(E)&&E.length>=3&&E.some(w=>w>0)){S.emissive.setRGB(E[0],E[1],E[2]),S.emissiveMap=c(y.emissiveTexture,!0);let w=y.extensions?.KHR_materials_emissive_strength?.emissiveStrength;typeof w=="number"&&(S.emissiveIntensity=Math.min(20,Math.max(0,w)))}return y.alphaMode==="MASK"&&(S.alphaTest=typeof y.alphaCutoff=="number"?y.alphaCutoff:.5),S.name=typeof y.name=="string"?y.name:"",S}),u=new Un({color:13421772,roughness:.8,metalness:0}),f=new Map,d=0,p=(y,v,M)=>{let S=n.nodes?.[y];if(!S||M>32)return;let A=new jt;Array.isArray(S.matrix)?A.fromArray(S.matrix):A.compose(new W().fromArray(S.translation??[0,0,0]),new Dn().fromArray(S.rotation??[0,0,0,1]),new W().fromArray(S.scale??[1,1,1]));let _=v.clone().multiply(A),E=new Qt().getNormalMatrix(_),w=S.mesh!==void 0?n.meshes?.[S.mesh]:null;for(let T of w?.primitives??[]){if((T.mode??4)!==4||T.attributes?.POSITION===void 0)continue;let I=s(T.attributes.POSITION),D=T.attributes.NORMAL!==void 0?s(T.attributes.NORMAL):null,C=T.attributes.TEXCOORD_0!==void 0?s(T.attributes.TEXCOORD_0):null,P=I.array.length/3,R=T.indices!==void 0?s(T.indices).array:Uint32Array.from({length:P},(k,V)=>V);if(d+=R.length/3,d>O2)throw new Error("model too detailed");let N=typeof T.material=="number"?T.material:-1,F=f.get(N)??{p:[],n:[],uv:[]};f.set(N,F);let O=new W;for(let k of R){if(k>=P)throw new Error("index out of range");O.set(I.array[k*3],I.array[k*3+1],I.array[k*3+2]).applyMatrix4(_),F.p.push(O.x,O.y,O.z),D&&(O.set(D.array[k*3],D.array[k*3+1],D.array[k*3+2]).applyMatrix3(E).normalize(),F.n.push(O.x,O.y,O.z)),F.uv.push(C?C.array[k*2]:0,C?C.array[k*2+1]:0)}}for(let T of S.children??[])p(T,_,M+1)},b=n.scenes?.[n.scene??0];for(let y of b?.nodes??(n.nodes??[]).map((v,M)=>M))p(y,new jt,0);let m=[],g=new W(1/0,1/0,1/0),x=new W(-1/0,-1/0,-1/0);for(let[y,v]of f){if(!v.p.length)continue;let M=new Ft;M.setAttribute("position",new Ee(new Float32Array(v.p),3)),v.n.length===v.p.length?M.setAttribute("normal",new Ee(new Float32Array(v.n),3)):M.computeVertexNormals(),M.setAttribute("uv",new Ee(new Float32Array(v.uv),2)),M.computeBoundingBox(),g.min(M.boundingBox.min),x.max(M.boundingBox.max),m.push({geometry:M,material:h[y]??u})}if(!m.length)throw new Error("no triangles");return{parts:m,min:g,size:x.clone().sub(g),triangles:d}}var k2=Math.PI/180,$f=new Map,wu=class i{entries=new Map;groups=new Map;basic=new Map;look="";contactMaterial=null;contactGeometry=new Vn(1,1);onReady;contact(){if(this.contactMaterial)return this.contactMaterial;let t=globalThis.document;if(!t?.createElement)return null;let e=128,n=t.createElement("canvas");n.width=n.height=e;let r=n.getContext("2d");if(!r)return null;let s=r.createImageData(e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c=Math.abs((l+.5)/e-.5)*2,h=Math.abs((a+.5)/e-.5)*2,u=Math.max(0,c-.72)/.28,f=Math.max(0,h-.72)/.28,d=Math.min(1,Math.hypot(u,f)),p=Math.pow(1-d,1.8)*(.85-.25*Math.max(c,h)*Math.max(c,h)),b=(a*e+l)*4;s.data[b]=s.data[b+1]=s.data[b+2]=0,s.data[b+3]=Math.round(255*Math.max(0,p))}r.putImageData(s,0,0);let o=new rn(n);return this.contactMaterial=new Wt({map:o,transparent:!0,depthWrite:!1,opacity:.55,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.contactMaterial}constructor(t){this.onReady=t}request(t){for(let e of t){let n=Yf(e);!n||this.entries.has(n)||(this.entries.set(n,{state:"loading"}),this.load(n))}}async load(t){try{let e=await($f.get(t)??i.download(t)),n=await Su(e,async r=>typeof createImageBitmap=="function"?createImageBitmap(r):null);this.entries.set(t,{state:"ready",model:n})}catch(e){$f.delete(t),console.warn("AUREON model not loaded:",t,e),this.entries.set(t,{state:"error",error:String(e?.message??e)})}this.loading||ka("aureon:models-parsed"),this.onReady()}static download(t){let e=(async()=>{let n=globalThis.document?.querySelector("home-assistant")?.hass,r=t.startsWith("/api/")&&n?.fetchWithAuth?await n.fetchWithAuth(t,{credentials:"same-origin"}):await fetch(t,{credentials:"same-origin"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(Number(r.headers.get("content-length")??0)>y0)throw new Error("file too large");let o=await r.arrayBuffer();if(o.byteLength>y0)throw new Error("file too large");return o})();return $f.set(t,e),e}modelled(t){let e=new Set;for(let n of t){let r=Yf(n);r&&this.entries.get(r)?.state==="ready"&&e.add(n.id)}return e}get loading(){for(let t of this.entries.values())if(t.state==="loading")return!0;return!1}status(){let t={};for(let[e,n]of this.entries)t[e]=n.state==="error"?`error: ${n.error}`:n.state;return t}place(t,e,n,r){this.groups.get(t)?.removeFromParent();let s=new ge;s.name="aureon-models";for(let o of e){let a=Yf(o),l=a?this.entries.get(a):void 0;if(!l||l.state!=="ready")continue;let{model:c}=l,h=new ge;h.userData.aureonFurniture=o.id;let u=new ge,f=c.size.x>1e-6?o.w/c.size.x:1,d=c.size.y>1e-6?o.h/c.size.y:1,p=c.size.z>1e-6?o.d/c.size.z:1;u.scale.set(f*(o.mirror?-1:1),d,p),u.position.set(-(c.min.x+c.size.x/2)*u.scale.x,-c.min.y*d,-(c.min.z+c.size.z/2)*p);for(let m of c.parts){let g=new bt(m.geometry,m.material);g.castShadow=!o.type.startsWith("lamp_"),g.receiveShadow=!0,g.userData.aureonModelMaterial=m.material,u.add(g)}h.add(u);let b=this.contact();if(b&&(o.mount_y??0)<.05&&!o.type.startsWith("lamp_")&&!/curtain|rug|carpet/.test(o.type)&&o.w*o.d>.01){let m=new bt(this.contactGeometry,b);m.scale.set(o.w+.16,o.d+.16,1),m.rotation.x=-Math.PI/2,m.position.y=.006,m.renderOrder=1,m.userData.aureonContact=!0,h.add(m)}h.rotation.y=-o.rotation*k2+Math.PI,h.position.set(o.x,Math.max(0,o.mount_y??0),o.z),s.add(h)}return r?.children.length&&s.add(r),this.groups.set(t,s),n.add(s),this.look="",s}sync(t,e,n){for(let[a,l]of this.groups){let c=t.get(a);if(!c){l.visible=!1;continue}let h=c.group;l.visible=h.visible,l.position.copy(h.position),l.quaternion.copy(h.quaternion),l.scale.copy(h.scale),h.updateMatrixWorld();let u=c.cut===null?[]:[new Ln(new W(0,-1,0),new W(0,c.cut,0).applyMatrix4(h.matrixWorld).y)];l.traverse(f=>{let d=f;if(!d.isMesh)return;let p=[d.material,d.userData.aureonModelMaterial,this.basic.get(d.userData.aureonModelMaterial)];for(let b of p)b&&(b.clippingPlanes?.length??0)+u.length>0&&(b.clippingPlanes?.[0]?.constant??null)!==(u[0]?.constant??null)&&(b.clippingPlanes=u,b.needsUpdate=!0)})}let r=`${e}|${e==="real"?0:Math.round(n*10)}`;if(r===this.look)return;this.look=r;let s=e==="real"||e==="day";for(let a of this.groups.values())a.traverse(l=>{l.userData.aureonContact&&(l.visible=s)});let o=e==="day"||e==="real"?1:e==="night"?.55:.42;for(let a of this.groups.values())a.traverse(l=>{let c=l,h=c.userData?.aureonModelMaterial;if(!c.isMesh||!h)return;if(e==="real"){c.material=h;return}let u=this.basic.get(h);u||(u=new Wt({map:h.map,alphaTest:h.alphaTest,transparent:h.transparent,opacity:h.opacity,side:h.side,polygonOffset:h.polygonOffset,polygonOffsetFactor:h.polygonOffsetFactor,polygonOffsetUnits:h.polygonOffsetUnits}),this.basic.set(h,u)),u.color.copy(h.color).multiplyScalar(o),c.material=u})}dispose(){for(let t of this.groups.values())t.removeFromParent();this.groups.clear();for(let t of this.entries.values())if(t.state==="ready")for(let e of t.model.parts){e.geometry.dispose();for(let n of[e.material.map,e.material.normalMap,e.material.roughnessMap,e.material.emissiveMap])n?.dispose();e.material.dispose()}for(let t of this.basic.values())t.dispose();this.basic.clear(),this.entries.clear(),this.contactMaterial?.map?.dispose(),this.contactMaterial?.dispose(),this.contactMaterial=null,this.contactGeometry.dispose()}};var gr=Xt(3662079,.95),Zf=Xt(3662079,1),Vi=Xt(5995775,.34),M0=Xt(5995775,.22),Tu=[-.55,.83],ie=-1,Au=16,br=32,_0=48,Kf=64,re=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=ie,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ft;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),this.uv&&t.setAttribute("uv",new It(this.uv,2)),this.tile&&t.setAttribute("tile",new It(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=gr,r=ie){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,ie);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,ie),this.seg(c,a,n,s)}geometry(){let t=new Ft;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),t}};function w0(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let m=0;m<3;m++)i.p[b*3+m]=f[p].p[m],i.c[b*3+m]=f[p].c[m];if(i.uv&&f[p].uv)for(let m=0;m<s;m++)i.uv[b*2+m]=f[p].uv[m];if(i.tile&&f[p].tile)for(let m=0;m<2;m++)i.tile[b*2+m]=f[p].tile[m];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(_=>_.p[1]>e+1e-6),p=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],m=(_,E)=>a(_,E,(e-_.p[1])/(E.p[1]-_.p[1])),g=d.filter(Boolean).length,x=g===1?d.indexOf(!0):d.indexOf(!1),y=f[x],v=f[(x+1)%3],M=f[(x+2)%3],S=m(y,v),A=m(M,y);g===1?(l(u,[y,S,A],n),c([S,v,M],b),c([S,M,A],b)):(l(u,[y,S,A],b),c([S,v,M],n),c([S,M,A],n))}}function S0(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ae=Math.PI/180;function Xt(i,t){let e=new Z(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function z2(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function pn(i,t=[]){let e=i.map(([n,r])=>new zt(n,r));return ra.triangulateShape(e,t.map(n=>n.map(([r,s])=>new zt(r,s))))}function T0(i,t,e,n,r,s,o){let a=new Z(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],m=e[d],g=e[(d+1)%4],x=b[0]-p[0],y=b[1]-p[1],v=Math.hypot(x,y);if(v<1e-6)continue;let S=.8+.28*((y/v*Tu[0]-x/v*Tu[1]+1)/2),A=(m[0]+g[0]-p[0]-b[0])/2*(-y/v)+(m[1]+g[1]-p[1]-b[1])/2*(x/v),_=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),E=Xt(s,l(n)*S).lerp(a,_),w=Xt(s,l(r)*S).lerp(a,_);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],E,w,w),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[b[0],n,b[1]],E,w,E)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function A0(i,t,e,n,r,s,o,a,l,c){let h=new Z(l),u=[];for(let m=0;m<c;m++){let g=m/c*Math.PI*2;u.push({y:s+Math.cos(g)*o,s:r+Math.sin(g)*o})}let f=(m,g)=>{let x=t(m,u[g%c].s);return[x[0],u[g%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(m,g,x,y,v)=>{let M=(g[1]-m[1])*(x[2]-m[2])-(g[2]-m[2])*(x[1]-m[1]),S=(g[2]-m[2])*(x[0]-m[0])-(g[0]-m[0])*(x[2]-m[2]),A=(g[0]-m[0])*(x[1]-m[1])-(g[1]-m[1])*(x[0]-m[0]);M*y[0]+S*y[1]+A*y[2]<0?i.tri(m,x,g,v):i.tri(m,g,x,v)};for(let m=0;m<c;m++){let g=(m+.5)/c*Math.PI*2,x=Xt(a,.62+.4*Math.max(0,Math.cos(g))),y=t((e+n)/2,r+Math.sin(g)*o),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(g)*o,y[1]-v[1]];b(f(e,m),f(n,m+1),f(n,m),M,x),b(f(e,m),f(e,m+1),f(n,m+1),M,x)}for(let[m,g,x]of[[e,p,d],[n,d,p]]){let y=t(m,r),v=[y[0],s,y[1]],M=[x[0]-g[0],0,x[1]-g[1]];for(let S=0;S<c;S++)b(v,f(m,S),f(m,S+1),M,h)}}function Ue(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??ie,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(o.holes??[]).map(p=>z2(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:pn(t,u);if(o.topFace!==!1){let p=new Z(s);for(let[b,m,g]of d){let x=f[b],y=f[m],v=f[g];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=Xt(r,.55);for(let[b,m,g]of d){let x=f[b],y=f[m],v=f[g];i.tri([x[0],e,x[1]],[y[0],e,y[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let m=p[b],g=p[(b+1)%p.length],x=g[0]-m[0],y=g[1]-m[1],v=Math.hypot(x,y);if(v<1e-6||o.skipSide?.(m,g))continue;let S=.8+.28*((y/v*Tu[0]-x/v*Tu[1]+1)/2),A=a(m),_=a(g),E=Xt(r,h(e)*S),w=Xt(r,h(A)*S),T=Xt(r,h(_)*S);i.tri([m[0],e,m[1]],[m[0],A,m[1]],[g[0],_,g[1]],E,w,T,void 0,c),i.tri([m[0],e,m[1]],[g[0],_,g[1]],[g[0],e,g[1]],E,T,E,void 0,c)}}var jf=[{id:"pure_white",color:"#fbfbfa"},{id:"white",color:"#f4f3ef"},{id:"warm_white",color:"#efe9df"},{id:"sand",color:"#e2d6c3"},{id:"greige",color:"#cfc8bc"},{id:"sage",color:"#c5cdb9"},{id:"terracotta",color:"#d9b29a"},{id:"blue_grey",color:"#b9c4cc"},{id:"charcoal",color:"#5b5d5f"}];function Jf(i){return typeof i=="string"&&/^#[0-9a-f]{6}$/i.test(i)?i.toLowerCase():null}function E0(i,t){let e=i?.wall_paints,n=[];for(let r=0;r<t;r++)n.push(Array.isArray(e)?Jf(e[r]):null);return n}function Gi(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var no=(i,t=1)=>`rgb(${i.map(e=>Math.max(0,Math.min(255,Math.round(e*t)))).join(",")})`;function Qf(i,t,e,n,r,s,o,a){let l=[176,132,88].map((f,d)=>f*o+[8,4,0][d]*(a()-.5));i.fillStyle=no(l),i.fillRect(t,e,n,r);let c=s?n:r,h=s?r:n,u=Math.max(4,Math.round(h/2.2));for(let f=0;f<u;f++){let d=(f+a())/u,p=a()*6.28,b=h*(.02+.05*a()),m=(2+4*a())/c;i.strokeStyle=no(l,a()<.5?.9:1.07),i.globalAlpha=.18+.22*a(),i.lineWidth=Math.max(.6,h*.012),i.beginPath();for(let g=0;g<=c;g+=Math.max(2,c/60)){let x=d*h+b*Math.sin(g*m*6.28+p),y=s?t+g:t+x,v=s?e+x:e+g;g===0?i.moveTo(y,v):i.lineTo(y,v)}i.stroke()}i.globalAlpha=1}var eo={repeat:2.4,bottom:1.2,top:1.32},io={paint:{period:[1,1],roughness:.9,ppm:4,draw:(i,t,e)=>{i.fillStyle="#ffffff",i.fillRect(0,0,t,e)}},oak_herringbone:{period:[1.08,1.08],roughness:.55,ppm:900,draw(i,t){let n=t/12,r=Gi(7),s=(o,a,l,c,h)=>{for(let u of[-t,0,t])for(let f of[-t,0,t]){let d=o*n+u,p=a*n+f;d>t||p>t||d+l*n<0||p+c*n<0||(i.save(),i.beginPath(),i.rect(d,p,l*n,c*n),i.clip(),Qf(i,d,p,l*n,c*n,h,.9+.16*r(),Gi(Math.round(o*31+a*17+3))),i.restore(),i.strokeStyle="rgba(70,48,28,0.55)",i.lineWidth=Math.max(1,n*.025),i.strokeRect(d,p,l*n,c*n))}};for(let o=-1;o<=1;o++)for(let a=-12;a<24;a++){let l=((a+12*o)%12+12)%12,c=(a%12+12)%12;s(l,c,6,1,!0),s(l,c+1,1,6,!1)}}},oak_planks:{period:[1.8,1.08],roughness:.55,ppm:560,draw(i,t,e){let r=e/6,s=Gi(11);for(let o=0;o<6;o++){let a=(o*.37+.13)%1*t;for(let[l,c]of[[a-t,a],[a,a+t]]){let h=Math.max(0,l),u=Math.min(t,c);u<=h||Qf(i,h,o*r,u-h,r,!0,.9+.16*s(),Gi(o*13+(l<0?1:2)))}i.fillStyle="rgba(70,48,28,0.55)",i.fillRect(0,o*r,t,Math.max(1,r*.012)),i.fillRect(a-1,o*r,2,r)}}},white_tiles_wall:{period:[.6,1.2],roughness:.22,ppm:600,draw:(i,t,e)=>Eu(i,t,e,2,2,21)},white_tiles_navy_band:{period:[.6,eo.repeat],roughness:.22,ppm:420,draw:V2},white_tiles_floor:{period:[1.2,1.2],roughness:.25,ppm:500,draw:(i,t,e)=>Eu(i,t,e,2,2,5)},deck_tiles:{period:[.6,.6],roughness:.7,ppm:900,draw(i,t){i.fillStyle="#151515",i.fillRect(0,0,t,t);let e=t/2,n=Gi(23),r=e*.012,s=e*.022,o=(e-2*r-5*s)/6;for(let a=0;a<2;a++)for(let l=0;l<2;l++)for(let c=0;c<6;c++){let h=l*e+r+c*(o+s),u=a*e+r;Qf(i,h,u,o,e-2*r,!1,.78+.12*n(),Gi(l*97+a*41+c*7)),i.fillStyle="rgba(150,80,30,0.18)",i.fillRect(h,u,o,e-2*r)}}},light_brick:{period:[.5,.162],roughness:.9,ppm:900,draw(i,t,e){i.fillStyle="#c9c4ba",i.fillRect(0,0,t,e);let n=Gi(31),r=2,s=e/r,o=t*.02,a=t/2,l=[[214,186,152],[222,199,166],[205,168,132],[226,205,178],[210,176,142],[218,180,146]];for(let c=0;c<r;c++){let h=c%2?a/2:0;for(let u=-1;u<3;u++){let f=u*a+h+o/2,d=c*s+o/2,p=a-o,b=s-o,m=l[Math.floor(n()*l.length)],g=.94+.1*n();i.fillStyle=no(m,g),i.fillRect(f,d,p,b);for(let x=0;x<40;x++)i.fillStyle=no(m,.86+.24*n()),i.globalAlpha=.25,i.fillRect(f+n()*p,d+n()*b,1+2*n(),1+2*n());i.globalAlpha=1}}}}};function Eu(i,t,e,n,r,s,o=0,a=e){let l=Gi(s),c=t/n,h=(a-o)/r;for(let f=0;f<r;f++)for(let d=0;d<n;d++)i.fillStyle=no([246,246,244],.992+.012*l()),i.fillRect(d*c,o+f*h,c,h);i.fillStyle="#dcdddf";let u=Math.max(1,t*.004);for(let f=0;f<=n;f++)i.fillRect(f*c-u/2,o,u,a-o);for(let f=0;f<=r;f++)i.fillRect(0,o+f*h-u/2,t,u)}function V2(i,t,e){let n=e/eo.repeat,r=b=>e-b*n;Eu(i,t,e,2,2,21,r(eo.bottom),e),Eu(i,t,e,2,2,22,0,r(eo.top));let s=r(eo.top),o=r(eo.bottom),a=.024*n;i.fillStyle="#cfd3da",i.fillRect(0,s,t,o-s);let l=Gi(9),c=[[22,36,78],[28,46,96],[18,30,64],[36,58,112],[24,40,88]],h=Math.max(1,Math.round(t/a)),u=Math.max(1,Math.round((o-s)/a)),f=t/h,d=(o-s)/u,p=Math.max(.6,f*.1);for(let b=0;b<u;b++)for(let m=0;m<h;m++)i.fillStyle=no(c[Math.floor(l()*c.length)],.92+.16*l()),i.fillRect(m*f+p/2,s+b*d+p/2,f-p,d-p)}var R0=new Map,P0=new Map;function td(i,t,e=null){let n=io[i];if(!n||typeof document>"u")return null;let r=i==="paint"?`paint|${e??jf[0].color}`:i,s=P0.get(r);if(s)return s;let o=R0.get(i);if(!o){let a=document.createElement("canvas");a.width=Math.min(1024,Math.round(n.period[0]*n.ppm)),a.height=Math.min(1024,Math.round(n.period[1]*n.ppm)),n.draw(a.getContext("2d"),a.width,a.height),o=new rn(a),o.wrapS=o.wrapT=je,o.colorSpace=we,o.anisotropy=8,R0.set(i,o)}return s=new Un({map:o,roughness:n.roughness,metalness:0,side:Rn,polygonOffset:!0,polygonOffsetFactor:t?0:-1,polygonOffsetUnits:t?-4:-2}),i==="paint"&&(s.color.set(e??jf[0].color),s.name="paint"),P0.set(r,s),s}var tP=Object.keys(io),G2=i=>i.reduce((t,[e,n],r)=>t+e*i[(r+1)%i.length][1]-i[(r+1)%i.length][0]*n,0)/2,ed=(i,t)=>[i[0]-t[0],i[1]-t[1]],nd=i=>Math.hypot(i[0],i[1]);function H2(i,t,e){let n=i.points,r=n.length,s=G2(n)>0,o=n.map((l,c)=>{let h=n[(c+1)%r],u=ed(h,l),f=nd(u)||1,d=[u[0]/f,u[1]/f],p=s?[-d[1],d[0]]:[d[1],-d[0]],b=!1,m=i.wall_thickness?.[c]??null;for(let x of t)x!==i&&x.points.forEach((y,v)=>{let M=x.points[(v+1)%x.points.length],S=w=>Math.abs((w[0]-l[0])*d[1]-(w[1]-l[1])*d[0]);if(S(y)>.02||S(M)>.02)return;let A=w=>(w[0]-l[0])*d[0]+(w[1]-l[1])*d[1],_=Math.max(0,Math.min(A(y),A(M)));if(Math.min(f,Math.max(A(y),A(M)))-_>.05){b=!0;let w=x.wall_thickness?.[v];typeof w=="number"&&(m=Math.max(m??0,w))}});let g=b?(m??e)/2:0;return{a:l,u:d,inward:p,offset:g+.003}}),a=l=>{let c=o[(l-1+r)%r],h=o[l],u=[c.a[0]+c.inward[0]*c.offset,c.a[1]+c.inward[1]*c.offset],f=[h.a[0]+h.inward[0]*h.offset,h.a[1]+h.inward[1]*h.offset],d=c.u[0]*h.u[1]-c.u[1]*h.u[0];if(Math.abs(d)<1e-6)return f;let p=((f[0]-u[0])*h.u[1]-(f[1]-u[1])*h.u[0])/d;return[u[0]+c.u[0]*p,u[1]+c.u[1]*p]};return o.map((l,c)=>({a:a(c),b:a((c+1)%r),inward:l.inward,offset:l.offset}))}function I0(i,t){let e=new ge;e.name="aureon-finishes";for(let n of i.rooms){let r=n.aureon_finish;if(!r)continue;if(r.floor&&io[r.floor.material]){let o=td(r.floor.material,!0);o&&e.add(X2(n.points,r.floor,o))}let s=E0(r,n.points.length);if(r.walls&&io[r.walls.material]){let o=td(r.walls.material,!1,Jf(r.walls.color)),a=n.points.map((l,c)=>c).filter(l=>s[l]===null&&(!r.walls.edges||r.walls.edges.includes(l)));if(o&&a.length){let l=C0(n,i,{...r.walls,edges:a},t,o);l&&e.add(l)}}for(let o of new Set(s.filter(a=>a!==null))){let a=td("paint",!1,o),l=s.flatMap((h,u)=>h===o?[u]:[]),c=a?C0(n,i,{material:"paint",color:o,edges:l},t,a):null;c&&e.add(c)}}return e}function W2(i,t,e){let n=io[e.material],r=(e.rotation??0)*Math.PI/180,s=i*Math.cos(r)+t*Math.sin(r),o=-i*Math.sin(r)+t*Math.cos(r);return[s/n.period[0],o/n.period[1]]}function X2(i,t,e){let n=pn(i),r=[],s=[],o=[],a=t.material==="oak_herringbone"?{...t,rotation:(t.rotation??0)+45}:t;for(let h of n){let[u,f,d]=h,p=[i[u],i[f],i[d]],m=(p[1][0]-p[0][0])*(p[2][1]-p[0][1])-(p[1][1]-p[0][1])*(p[2][0]-p[0][0])<0?[0,1,2]:[0,2,1];for(let g of m)r.push(p[g][0],.004,p[g][1]),o.push(0,1,0),s.push(...W2(p[g][0],p[g][1],a))}let l=new Ft;l.setAttribute("position",new Ee(new Float32Array(r),3)),l.setAttribute("normal",new Ee(new Float32Array(o),3)),l.setAttribute("uv",new Ee(new Float32Array(s),2));let c=new bt(l,e);return c.receiveShadow=!0,c.userData.aureonModelMaterial=e,c}function C0(i,t,e,n,r){let s=H2(i,t.rooms,n),o=[],a=[],l=[],c=io[e.material];if(s.forEach((f,d)=>{if(e.edges&&!e.edges.includes(d))return;let p=i.wall_heights?.[d],b=typeof p=="number"?p:i.ceiling_height??t.height;if(!(b>.05))return;let m=ed(f.b,f.a),g=nd(m);if(g<.02)return;let x=[m[0]/g,m[1]/g],y=[];for(let M of t.openings){let S=t.rooms.find(k=>k.id===M.room_id);if(!S)continue;let A=S.points[M.edge],_=S.points[(M.edge+1)%S.points.length];if(!A||!_)continue;let E=ed(_,A),w=nd(E)||1,T=[E[0]/w,E[1]/w],I=[A[0]+T[0]*(M.offset-M.width/2),A[1]+T[1]*(M.offset-M.width/2)],D=[A[0]+T[0]*(M.offset+M.width/2),A[1]+T[1]*(M.offset+M.width/2)],C=k=>Math.abs((k[0]-f.a[0])*x[1]-(k[1]-f.a[1])*x[0]);if(C(I)>f.offset+.3||C(D)>f.offset+.3)continue;let P=k=>(k[0]-f.a[0])*x[0]+(k[1]-f.a[1])*x[1],R=Math.max(0,Math.min(P(I),P(D))),N=Math.min(g,Math.max(P(I),P(D)));if(N-R<.02)continue;let F=M.type==="door"?0:Math.max(0,M.sill??.9),O=Math.min(b,F+(M.height??(M.type==="door"?2.05:1.3)));y.push({s0:R,s1:N,y0:F,y1:O})}let v=[...new Set([0,g,...y.flatMap(M=>[M.s0,M.s1])])].sort((M,S)=>M-S);for(let M=0;M+1<v.length;M++){let S=v[M],A=v[M+1];if(A-S<.005)continue;let _=(S+A)/2,E=y.filter(I=>I.s0<=_&&_<=I.s1).sort((I,D)=>I.y0-D.y0),w=0,T=[];for(let I of E)I.y0>w+.005&&T.push([w,I.y0]),w=Math.max(w,I.y1);b>w+.005&&T.push([w,b]);for(let[I,D]of T){let C=(q,z)=>[f.a[0]+x[0]*q,z,f.a[1]+x[1]*q],P=[C(S,I),C(A,I),C(A,D),C(S,D)],R=q=>(f.a[0]*x[0]+f.a[1]*x[1]+q)/c.period[0],N=[[R(S),I/c.period[1]],[R(A),I/c.period[1]],[R(A),D/c.period[1]],[R(S),D/c.period[1]]],F=[P[1][0]-P[0][0],0,P[1][2]-P[0][2]],O=[-F[2],0,F[0]],V=O[0]*f.inward[0]+O[2]*f.inward[1]<0?[0,2,1,0,3,2]:[0,1,2,0,2,3];for(let q of V)o.push(...P[q]),l.push(f.inward[0],0,f.inward[1]),a.push(...N[q])}}}),!o.length)return null;let h=new Ft;h.setAttribute("position",new Ee(new Float32Array(o),3)),h.setAttribute("normal",new Ee(new Float32Array(l),3)),h.setAttribute("uv",new Ee(new Float32Array(a),2));let u=new bt(h,r);return u.receiveShadow=!0,u.userData.aureonModelMaterial=r,u}var L0={AdditiveBlending:Me,BackSide:Je,Box3:ke,BufferAttribute:Ee,BufferGeometry:Ft,ByteType:Ra,ClampToEdgeWrapping:bn,Clock:da,Color:Z,DataArrayTexture:nr,DataTexture:Nn,DataUtils:qo,DoubleSide:te,EquirectangularReflectionMapping:Hs,Float32BufferAttribute:It,FloatType:Fn,FrontSide:Rn,HalfFloatType:an,IntType:Ws,Line3:ma,LinearFilter:Ye,LinearMipMapLinearFilter:df,Matrix3:Qt,Matrix4:jt,Mesh:bt,MeshBasicMaterial:Wt,NearestFilter:Xe,NoBlending:qe,NoToneMapping:Hn,NormalBlending:vn,OrthographicCamera:xn,PerspectiveCamera:He,Plane:Ln,Quaternion:Dn,REVISION:"186",RGBAFormat:ln,RGBAIntegerFormat:$s,RGFormat:_i,RGIntegerFormat:Ys,Ray:xi,RedFormat:Xs,RedIntegerFormat:qs,RepeatWrapping:je,Scene:En,ShaderMaterial:ze,ShortType:Pa,Source:Ho,Spherical:pa,Triangle:si,UnsignedByteType:sn,UnsignedIntType:Wn,UnsignedShortType:pr,Vector2:zt,Vector3:W,Vector4:Se,WebGLArrayRenderTarget:Wo,WebGLRenderTarget:Pe};var id;function q2(){let i=globalThis;i.__AUREON_THREE__??=L0;let t="7e7a6f983aad",e;try{e=new URL(`./neonplan3d-pathtrace.js?v=${t}`,new URL(import.meta.url)).href}catch(n){return Promise.reject(n)}return id??=import(e).catch(n=>{throw id=void 0,n}),id}var Ru=400,F0=160;function ro(i){let t=i;if(!t.isMesh||i.userData.aureonContact)return!1;let e=t.material,n=Array.isArray(e)?e:[e];return n.length>0&&n.every(r=>!!r&&r.isMeshStandardMaterial===!0&&r.visible)}function Y2(i,t,e,n){let r=n!=="glass";if(i>-.5){let s=Math.round(i),o=Math.floor(s/16),a=s-o*16,l=(t>>a&1)===1,c=(e>>a&1)===1;r=o===0||o===4?l:o===1||o===3?!l:!0;let h=o===0||o===2;n==="solid"&&c&&h&&(r=!1),n==="glass"&&(r=r&&c&&h)}return r}function $2(i){let t=i.geometry,e=Array.isArray(i.material)?i.material:[i.material],n=t.getAttribute("fold"),r=e[0]?.userData?.fp3dFold,s=e[0]?.clippingPlanes??null,o=!!n&&!!r,a=!!s&&s.length>0;if(!o&&!a)return null;let l=t.getAttribute("position");if(!l)return null;let c=l.count,h=new Uint8Array(c),u=new W;for(let y=0;y<c;y++){let v=!0;if(o&&(v=Y2(n.getX(y),r.masks.standing.value,r.masks.glass.value,r.role)),v&&a){u.fromBufferAttribute(l,y).applyMatrix4(i.matrixWorld);for(let M of s)M.distanceToPoint(u)<0&&(v=!1)}h[y]=v?1:0}let f=t.index,d=y=>f?f.getX(y):y,p=f?f.count:c,b=t.groups.length?t.groups:[{start:0,count:p,materialIndex:0}],m=[],g=new Ft;for(let y of b){let v=m.length,M=Math.min(p,y.start+y.count);for(let S=y.start;S+2<M;S+=3){let A=d(S),_=d(S+1),E=d(S+2);(o?h[A]&&h[_]&&h[E]:h[A]||h[_]||h[E])&&m.push(A,_,E)}t.groups.length&&g.addGroup(v,m.length-v,y.materialIndex??0)}for(let[y,v]of Object.entries(t.attributes))g.setAttribute(y,v);if(g.setIndex(new Ee(new Uint32Array(m),1)),f)return g;let x=g.toNonIndexed();return g.dispose(),x}function Z2(i){let t=i.geometry,e=Array.isArray(i.material)?i.material:[i.material],n=t.index,r=n?n.count:t.getAttribute("position")?.count??0,s=t.groups.length?t.groups:[{start:0,count:r,materialIndex:0}],o=[];for(let a of s){let l=e[a.materialIndex??0];if(!l||!l.visible)continue;let c=a.start,h=Math.min(r,a.start+a.count);if(h-c<3)continue;let u=new Ft;for(let f of["position","normal","uv"]){let d=t.getAttribute(f);if(!d)continue;let p=d.itemSize,b=new Float32Array((h-c)*p);for(let m=c;m<h;m++){let g=n?n.getX(m):m;for(let x=0;x<p;x++)b[(m-c)*p+x]=d.getComponent(g,x)}u.setAttribute(f,new Ee(b,p))}u.getAttribute("normal")||u.computeVertexNormals(),o.push({geometry:u,material:l})}return o}function K2(i){let t=0,e=0;return i.traverseVisible(n=>{if(!ro(n))return;let r=n,s=r.geometry.getAttribute("position");t++;let o=n.matrixWorld.elements;e=(e*31+r.geometry.id*7+(s?"version"in s?s.version:s.data.version:0)+(s?.count??0)+Math.round((o[12]+o[13]*3+o[14]*5+o[0]+o[10])*1e3))%2147483647}),`${t}:${e}`}function D0(i){let t=i.projectionMatrix.elements;return[...i.matrixWorld.elements,t[0],t[5]].map(e=>e.toFixed(4)).join(",")}var j2=/shade|linen|bamboo|paper|rattan|fabric|cloth|opal|frosted/i,za=class i{static debug={copies:!0,shades:!0,lean:!0};static enabled=!0;tracer=null;failed=!1;sceneSig="";cameraSig="";lightSig="";rebuilds=[];errors=0;loadingNow=!1;pausedUntil=0;renderer;disposed=!1;constructor(t){this.renderer=t}get ready(){return!!this.tracer&&!this.failed}get samples(){return this.tracer?.samples??0}get done(){return this.samples>=F0}get off(){return this.failed}load(t){this.tracer||this.failed||this.loadingNow||(this.loadingNow=!0,q2().then(e=>{if(this.loadingNow=!1,this.disposed)return;let n=this.renderer.domElement.width,r=Math.min(1,Math.sqrt(1e6/Math.max(1,n*this.renderer.domElement.height)));this.tracer=e.createTracer(this.renderer,{scale:r,tiles:2,bounces:5}),t()}).catch(()=>{this.loadingNow=!1,this.failed=!0}))}touch(){this.tracer?.reset()}step(t,e,n,r,s,o){let a=this.tracer;if(!a||this.failed)return!1;let l=!0;return n(()=>{let c=new Z(13229301).lerp(new Z(725536),o),h=new Z(9207660).lerp(new Z(657671),o),u=t.environment,f=t.environmentIntensity,d=[],p=[],b=[];try{let m=K2(t);if(m!==this.sceneSig){let x=performance.now();if(this.rebuilds=this.rebuilds.filter(M=>x-M<2e4),this.rebuilds.push(x),this.rebuilds.length>4){this.rebuilds=[],this.pausedUntil=x+15e3,l=!1,r();return}t.environment=a.sky(c,h),t.environmentIntensity=1.8*(1-o)+.14*o,t.traverseVisible(M=>{!M.isMesh||ro(M)||d.push(M)});for(let M of d)M.visible=!1;t.traverseVisible(M=>{let S=M;if(!i.debug.shades||!ro(M)||S.castShadow||!M.userData.aureonModelMaterial||Array.isArray(S.material)||!j2.test(S.material.name))return;let A=S.material;p.push([S,A]),S.material=this.shade(A)}),t.traverseVisible(M=>{let S=M;if(!ro(M)||!i.debug.lean)return;let A=S.material,E=(Array.isArray(A)?A:[A]).map(w=>this.lean(w));p.push([S,A]),S.material=Array.isArray(A)?E:E[0]}),t.traverseVisible(M=>{let S=M;if(!ro(M)||!i.debug.copies)return;let A=$2(S);A&&(b.push([S,S.geometry]),S.geometry=A)});for(let M of this.copies)M.dispose();this.copies=b.map(([M])=>M.geometry);let y=new ge;y.name="aureon-trace-flat";let v=[];t.updateMatrixWorld(),t.traverseVisible(M=>{let S=M;if(ro(M)){for(let A of Z2(S)){let _=new bt(A.geometry,A.material);_.matrixAutoUpdate=!1,_.matrix.copy(S.matrixWorld),_.matrixWorld.copy(S.matrixWorld),y.add(_),v.push(A.geometry)}d.push(M)}});for(let M of d)M.visible=!1;t.add(y);try{a.build(t,e)}finally{t.remove(y);for(let M of v)M.dispose()}for(let[M,S]of b)M.geometry=S;b.length=0;for(let[M,S]of[...p].reverse())M.material=S;p.length=0;for(let M of d)M.visible=!0;d.length=0,this.sceneSig=m,this.cameraSig=D0(e),this.lightSig=s}s!==this.lightSig&&(a.lights(),this.lightSig=s);let g=D0(e);g!==this.cameraSig&&(a.camera(e),this.cameraSig=g),t.environment=u,t.environmentIntensity=f,a.sample(r),l=a.samples<F0,this.errors=0}catch{this.sceneSig="",++this.errors>3?this.failed=!0:this.pausedUntil=performance.now()+5e3,l=!1,r()}finally{for(let m of d)m.visible=!0;for(let[m,g]of[...p].reverse())m.material=g;for(let[m,g]of b)m.geometry=g;t.environment=u,t.environmentIntensity=f}}),l}copies=[];shades=new Map;leans=new Map;lean(t){if(t.isMeshPhysicalMaterial&&t.transmission>0)return t;let e=this.leans.get(t);return e||(e=t.isMeshPhysicalMaterial?new or:new Un,e.name=t.name,e.color.copy(t.color),e.map=t.map,e.alphaMap=t.alphaMap,e.alphaTest=t.alphaTest,e.transparent=t.transparent,e.opacity=t.opacity,e.side=t.side,e.metalness=t.metalnessMap?t.metalness>=.99&&/metal|brass|nickel|chrome|steel|black/i.test(t.name)?.9:0:t.metalness,e.roughness=t.roughnessMap?Math.max(.35,Math.min(1,t.roughness*.75)):t.roughness,e.emissive.copy(t.emissive),e.emissiveIntensity=t.emissiveIntensity,e.visible=t.visible,e.userData=t.userData,this.leans.set(t,e)),e}shade(t){let e=this.shades.get(t);return e||(e=new or({color:t.color,map:t.map,normalMap:t.normalMap,roughness:1,metalness:0,transmission:.75,thickness:0,ior:1.2,side:t.side}),this.shades.set(t,e)),e}dispose(){for(let t of this.copies)t.dispose();this.copies=[];for(let t of this.leans.values())t.dispose();this.leans.clear();for(let t of this.shades.values())t.dispose();this.shades.clear(),this.disposed=!0,this.tracer?.dispose(),this.tracer=null}};var Pu=class extends En{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new sr;t.deleteAttribute("uv");let e=new Un({side:Je}),n=new Un,r=new Vr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new bt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new jo(t,n,6),a=new $e;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new bt(t,so(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new bt(t,so(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new bt(t,so(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new bt(t,so(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new bt(t,so(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new bt(t,so(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function so(i){return new aa({color:0,emissive:16777215,emissiveIntensity:i})}var oo=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},J2=new xn(-1,1,1,-1,0,1),rd=class extends Ft{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},Q2=new rd,ao=class{constructor(t){this._mesh=new bt(Q2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,J2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Va={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new zt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new jt},cameraProjectionMatrixInverse:{value:new jt},cameraWorldMatrix:{value:new jt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new W(-1,-1,-1)},sceneBoxMax:{value:new W(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ga={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function N0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=tw(t),n=e.length,r=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new W(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}let s=new Nn(r,t,t);return s.wrapS=je,s.wrapT=je,s.needsUpdate=!0,s}function tw(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),r=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(r===-1&&s===t?(s=t-2,r=0):(s===t&&(s=0),r<0&&(r=t-1)),n[r*t+s]!==0){s-=2,r++;continue}else n[r*t+s]=o++;s++,r--}return n}var Ha={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:sd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new zt},cameraProjectionMatrixInverse:{value:new jt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function sd(i,t,e){let n=ew(i,t,e),r="vec3[SAMPLES](";for(let s=0;s<i;s++){let o=n[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<i-1?",":")"}`}return r}function ew(i,t,e){let n=[];for(let r=0;r<i;r++){let s=2*Math.PI*t*r/i,o=Math.pow(r/(i-1),e);n.push(new W(Math.cos(s),Math.sin(s),o))}return n}var Iu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Lu=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,r,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=t-f,b=e-d,m,g;p>b?(m=1,g=0):(m=0,g=1);let x=p-m+h,y=b-g+h,v=p-1+2*h,M=b-1+2*h,S=l&255,A=c&255,_=this.perm[S+this.perm[A]]%12,E=this.perm[S+m+this.perm[A+g]]%12,w=this.perm[S+1+this.perm[A+1]]%12,T=.5-p*p-b*b;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[_],p,b));let I=.5-x*x-y*y;I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[E],x,y));let D=.5-v*v-M*M;return D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[w],v,M)),70*(n+r+s)}noise3d(t,e,n){let r,s,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,p=(h+u+f)*d,b=h-p,m=u-p,g=f-p,x=t-b,y=e-m,v=n-g,M,S,A,_,E,w;x>=y?y>=v?(M=1,S=0,A=0,_=1,E=1,w=0):x>=v?(M=1,S=0,A=0,_=1,E=0,w=1):(M=0,S=0,A=1,_=1,E=0,w=1):y<v?(M=0,S=0,A=1,_=0,E=1,w=1):x<v?(M=0,S=1,A=0,_=0,E=1,w=1):(M=0,S=1,A=0,_=1,E=1,w=0);let T=x-M+d,I=y-S+d,D=v-A+d,C=x-_+2*d,P=y-E+2*d,R=v-w+2*d,N=x-1+3*d,F=y-1+3*d,O=v-1+3*d,k=h&255,V=u&255,q=f&255,z=this.perm[k+this.perm[V+this.perm[q]]]%12,$=this.perm[k+M+this.perm[V+S+this.perm[q+A]]]%12,J=this.perm[k+_+this.perm[V+E+this.perm[q+w]]]%12,ot=this.perm[k+1+this.perm[V+1+this.perm[q+1]]]%12,H=.6-x*x-y*y-v*v;H<0?r=0:(H*=H,r=H*H*this._dot3(this.grad3[z],x,y,v));let X=.6-T*T-I*I-D*D;X<0?s=0:(X*=X,s=X*X*this._dot3(this.grad3[$],T,I,D));let et=.6-C*C-P*P-R*R;et<0?o=0:(et*=et,o=et*et*this._dot3(this.grad3[J],C,P,R));let st=.6-N*N-F*F-O*O;return st<0?a=0:(st*=st,a=st*st*this._dot3(this.grad3[ot],N,F,O)),32*(r+s+o+a)}noise4d(t,e,n,r){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,b=(t+e+n+r)*l,m=Math.floor(t+b),g=Math.floor(e+b),x=Math.floor(n+b),y=Math.floor(r+b),v=(m+g+x+y)*c,M=m-v,S=g-v,A=x-v,_=y-v,E=t-M,w=e-S,T=n-A,I=r-_,D=E>w?32:0,C=E>T?16:0,P=w>T?8:0,R=E>I?4:0,N=w>I?2:0,F=T>I?1:0,O=D+C+P+R+N+F,k=o[O][0]>=3?1:0,V=o[O][1]>=3?1:0,q=o[O][2]>=3?1:0,z=o[O][3]>=3?1:0,$=o[O][0]>=2?1:0,J=o[O][1]>=2?1:0,ot=o[O][2]>=2?1:0,H=o[O][3]>=2?1:0,X=o[O][0]>=1?1:0,et=o[O][1]>=1?1:0,st=o[O][2]>=1?1:0,tt=o[O][3]>=1?1:0,ct=E-k+c,pt=w-V+c,ft=T-q+c,yt=I-z+c,Yt=E-$+2*c,wt=w-J+2*c,xt=T-ot+2*c,Kt=I-H+2*c,le=E-X+3*c,fe=w-et+3*c,de=T-st+3*c,Y=I-tt+3*c,Be=E-1+4*c,be=w-1+4*c,G=T-1+4*c,L=I-1+4*c,Q=m&255,rt=g&255,lt=x&255,vt=y&255,St=a[Q+a[rt+a[lt+a[vt]]]]%32,ut=a[Q+k+a[rt+V+a[lt+q+a[vt+z]]]]%32,dt=a[Q+$+a[rt+J+a[lt+ot+a[vt+H]]]]%32,Tt=a[Q+X+a[rt+et+a[lt+st+a[vt+tt]]]]%32,Gt=a[Q+1+a[rt+1+a[lt+1+a[vt+1]]]]%32,_t=.6-E*E-w*w-T*T-I*I;_t<0?h=0:(_t*=_t,h=_t*_t*this._dot4(s[St],E,w,T,I));let Mt=.6-ct*ct-pt*pt-ft*ft-yt*yt;Mt<0?u=0:(Mt*=Mt,u=Mt*Mt*this._dot4(s[ut],ct,pt,ft,yt));let Ot=.6-Yt*Yt-wt*wt-xt*xt-Kt*Kt;Ot<0?f=0:(Ot*=Ot,f=Ot*Ot*this._dot4(s[dt],Yt,wt,xt,Kt));let qt=.6-le*le-fe*fe-de*de-Y*Y;qt<0?d=0:(qt*=qt,d=qt*qt*this._dot4(s[Tt],le,fe,de,Y));let ee=.6-Be*Be-be*be-G*G-L*L;return ee<0?p=0:(ee*=ee,p=ee*ee*this._dot4(s[Gt],Be,be,G,L)),27*(h+u+f+d+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,r){return t[0]*e+t[1]*n+t[2]*r}_dot4(t,e,n,r,s){return t[0]*e+t[1]*n+t[2]*r+t[3]*s}};var Wa=class i extends oo{constructor(t,e,n=512,r=512,s,o,a){super(),this.width=n,this.height=r,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=N0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Pe(this.width,this.height,{type:an,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ze({defines:Object.assign({},Va.defines),uniforms:wi.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new oa,this.normalMaterial.blending=qe,this.pdMaterial=new ze({defines:Object.assign({},Ha.defines),uniforms:wi.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ze({defines:Object.assign({},Ga.defines),uniforms:wi.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ze({uniforms:wi.clone(Iu.uniforms),vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:va,blendDst:Jn,blendEquation:yn,blendSrcAlpha:xa,blendDstAlpha:Jn,blendEquationAlpha:yn}),this.blendMaterial=new ze({uniforms:wi.clone(Cu.uniforms),vertexShader:Cu.vertexShader,fragmentShader:Cu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vi,blendSrc:va,blendDst:Jn,blendEquation:yn,blendSrcAlpha:xa,blendDstAlpha:Jn,blendEquationAlpha:yn}),this._fsQuad=new ao(null),this._originalClearColor=new Z,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new On,this.depthTexture.format=Mi,this.depthTexture.type=mr,this.normalRenderTarget=new Pe(this.width,this.height,{minFilter:Xe,magFilter:Xe,type:an,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=sd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r=e.clearColor||r,s=e.clearAlpha||s,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Lu,n=t*t*4,r=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;r[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,r[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,r[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,r[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Nn(r,t,t,ln,sn);return s.wrapS=je,s.wrapT=je,s.needsUpdate=!0,s}};Wa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Fu=class extends oo{constructor(){super(),this.isOutputPass=!0,this.uniforms=wi.clone(Xa.uniforms),this.material=new ks({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new ao(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ki?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function qn(i,t,e="plain"){return i.userData.fp3dFold={masks:t,role:e},i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var nw=["architecture","wood","fabric","metal","glass","stone","tile","concrete","deck","parquet","paint"];function O0(i){return/glass|window|shower|mirror/.test(i)?"glass":/metal|sink|oven|fridge|refrigerator|stove|radiator|tap|steel/.test(i)?"metal":/sofa|couch|bed|rug|carpet|armchair|cushion|curtain/.test(i)?"fabric":/table|desk|cabinet|shelf|wardrobe|chair|wood|door/.test(i)?"wood":"architecture"}function U0(i){return i==="wood"?"deck":/parquet|oak|laminate|herringbone/.test(i)?"parquet":/carpet|fabric|rug/.test(i)?"fabric":i==="tiles"?"tile":i==="concrete"?"concrete":"stone"}function qa(i,t,e){if(i==="wood")return .5+.1*Math.sin(t*.21+Math.sin(e*.9)*.6)+.06*Math.sin(t*1.9+e*.13)+.04*Math.sin(e*3.1);if(i==="parquet"){let n=Math.floor(e/16),r=(e%16+16)%16,s=n*37%64,o=((t+s)%64+64)%64,a=(n*53+Math.floor((t+s)/64)*29)%7/7;return r<1.1||o<1.1?.12:.42+.16*a+.06*Math.sin(t*.35+Math.sin(e*.7)*1.5)+.03*Math.sin(t*2.3)}if(i==="fabric")return .5+.22*Math.sin(t*Math.PI/2)*Math.sin(e*Math.PI/2);if(i==="stone"){let n=(t%64+64)%64,r=(e%32+32)%32;return n<1.2||r<1.2?.18:.5+.1*Math.sin(t*.31+e*.17)*Math.cos(e*.28-t*.13)}if(i==="paint")return .5+.015*Math.sin(t*.9+e*.4);if(i==="tile"){let n=(t%64+64)%64,r=(e%64+64)%64;return n<1.4||r<1.4?.15:.56+.03*Math.sin(t*.9+e*1.3)}return i==="concrete"?.5+.06*Math.sin(t*1.7+e*.9)*Math.sin(e*2.3-t*.7)+.04*Math.sin(t*5.1+e*4.3):i==="deck"?(e%16+16)%16<1.1?.12:.52+.16*Math.sin(t*.37+Math.sin(e*.21)*2)+.05*Math.sin(t*2.1):i==="metal"?.5+.035*Math.sin(t*2.8):.5+.05*Math.sin(t*.71+e*.49)*Math.cos(e*.83)}function iw(i,t=128){let e=Math.max(16,Math.min(256,Math.round(t))),n=new Uint8Array(e*e*4),r=new Uint8Array(n.length),s=new Uint8Array(n.length),o=new Uint8Array(n.length),a={paint:[238,236,230],architecture:[216,209,197],parquet:[182,124,72],wood:[150,104,66],fabric:[158,160,156],metal:[194,199,203],glass:[233,245,247],stone:[176,184,190],tile:[226,214,184],concrete:[186,184,178],deck:[132,118,102]},l={paint:.42,architecture:.86,parquet:.5,wood:.55,fabric:.94,metal:.27,glass:.08,stone:.62,tile:.38,concrete:.8,deck:.74};for(let h=0;h<e;h++)for(let u=0;u<e;u++){let f=(h*e+u)*4,d=qa(i,u*128/e,h*128/e),p=qa(i,(u+1)*128/e,h*128/e)-qa(i,(u-1)*128/e,h*128/e),b=qa(i,u*128/e,(h+1)*128/e)-qa(i,u*128/e,(h-1)*128/e),m=Math.hypot(p,b,1);for(let g=0;g<3;g++)n[f+g]=Math.round(Math.min(255,Math.max(0,a[i][g]*(.9+d*.2)*(d<.2?.74:1)))),r[f+g]=Math.round(Math.max(.03,Math.min(1,l[i]+(d-.5)*.12))*255),s[f+g]=i==="metal"?235:0;o[f]=Math.round((-.5*p/m+.5)*255),o[f+1]=Math.round((-.5*b/m+.5)*255),o[f+2]=Math.round((.5/m+.5)*255),n[f+3]=r[f+3]=s[f+3]=o[f+3]=255}let c=(h,u=!1)=>{let f=new Nn(h,e,e,ln,sn);return f.wrapS=f.wrapT=je,f.colorSpace=u?we:Xn,f.generateMipmaps=!0,f.needsUpdate=!0,f};return{color:c(n,!0),roughness:c(r),metalness:c(s),normal:c(o)}}var rw=8,Ya=class i{maps=new Map;materials=new WeakMap;owned=new Set;subscriptions=new Map;depths=new WeakMap;geometryVersions=new WeakMap;lights=new ge;environment=null;pmrem=null;environmentTarget=null;sun=new Gr(16773340,3.2);sky=new ur(14477823,6840396,1.25);lamps=[];glows=[];glowTexture=null;warmFill=new ur(16764826,3877405,0);ambient=new ha(16777215,.06);bounds=new ke;static PHOTO_CD=120;static PHOTO_EXPOSURE=1.2;static LIVE_PHYSICAL=!1;static DAY=new Z(16773340);static MOON=new Z(10466278);renderer;low;ao;static AO=!0;aoTarget=null;aoOut=null;gtao=null;output=null;aoSize=new zt;constructor(t,e=!1,n=!1){this.renderer=t,this.low=e,this.ao=n&&!e,this.sun.position.set(7,12,8),this.sun.castShadow=!e,this.sun.shadow.mapSize.set(e?512:2048,e?512:2048),this.sun.shadow.camera.left=-25,this.sun.shadow.camera.right=25,this.sun.shadow.camera.top=25,this.sun.shadow.camera.bottom=-25,this.sun.shadow.camera.near=.1,this.sun.shadow.camera.far=70,this.sun.shadow.normalBias=.025,this.sun.shadow.bias=-2e-4,this.sun.shadow.radius=3,this.lights.add(this.sun,this.sun.target,this.sky,this.ambient),this.lights.add(this.warmFill);for(let r=0;r<(e?3:rw);r++){let s=new Vr(16766624,0,7.5,2);s.visible=!1,!e&&r<2&&(s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.bias=-.004,s.shadow.radius=6,s.shadow.camera.near=.08,s.shadow.camera.far=8),this.lamps.push(s),this.lights.add(s)}}glow(t){if(this.glows[t])return this.glows[t];if(!this.glowTexture){let r=globalThis.document;if(!r?.createElement)return null;let s=r.createElement("canvas");s.width=s.height=64;let o=s.getContext("2d");if(!o)return null;let a=o.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,0.9)"),a.addColorStop(.18,"rgba(255,255,255,0.55)"),a.addColorStop(.5,"rgba(255,255,255,0.14)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,64,64),this.glowTexture=new rn(s)}let e=new ir({map:this.glowTexture,transparent:!0,depthWrite:!1,blending:vi});e.blendEquation=yn,e.blendSrc=hr,e.blendDst=yi,e.blendSrcAlpha=Jn,e.blendDstAlpha=yi;let n=new Ur(e);return n.visible=!1,n.renderOrder=5,this.glows[t]=n,this.lights.add(n),n}textureSet(t){let e=this.maps.get(t);return e||(e=iw(t,this.low?64:128),this.maps.set(t,e)),e}physical(t,e){let n=this.materials.get(t);if(!n){n=[],this.materials.set(t,n);let o=n,a=()=>{for(let c of o)this.owned.delete(c.material)&&c.material.dispose();o.length=0;let l=this.depths.get(t);l&&this.owned.delete(l)&&l.dispose(),this.materials.delete(t),this.depths.delete(t),t.removeEventListener("dispose",a),this.subscriptions.delete(t)};this.subscriptions.set(t,a),t.addEventListener("dispose",a)}let r=n.find(o=>o.kind===e)?.material;if(!r){let o=this.textureSet(e);r=new or({map:o.color,roughnessMap:o.roughness,metalnessMap:o.metalness,normalMap:o.normal,roughness:1,metalness:e==="metal"?1:0,side:te,vertexColors:!1,envMapIntensity:e==="metal"?1.3:.75,clearcoat:e==="wood"||e==="parquet"||e==="tile"?.12:0,clearcoatRoughness:.4}),r.normalScale.set(this.low?.1:.2,this.low?.1:.2),e==="glass"&&(r.transmission=this.low?0:.92,r.ior=1.5,r.thickness=.06,r.roughness=.08,r.roughnessMap=null,r.normalMap=null,r.transparent=!0,r.opacity=this.low?.3:1,r.depthWrite=!1);let a=t.userData.fp3dFold;a&&qn(r,a.masks,a.role),n.push({kind:e,material:r}),this.owned.add(r)}let s=e==="glass";return r.opacity=t.opacity*(s&&this.low?.3:1),r.transparent=s||t.transparent,r.visible=t.visible,r.polygonOffset=t.polygonOffset,r.polygonOffsetFactor=t.polygonOffsetFactor,r.polygonOffsetUnits=t.polygonOffsetUnits,r.blending=vn,r}prepareGeometry(t){let e=t.getAttribute("position");if(!e?.count)return;let n="data"in e?e.data.version:e.version,r=this.geometryVersions.get(t);if(r?.position===e&&r.version===n&&r.count===e.count)return;t.computeVertexNormals();let s=t.getAttribute("normal"),o=new Float32Array(e.count*2);for(let a=0;a<e.count;a++){let l=e.getX(a),c=e.getY(a),h=e.getZ(a),u=Math.abs(s.getX(a)),f=Math.abs(s.getY(a)),d=Math.abs(s.getZ(a));o[a*2]=f>=u&&f>=d?l:u>=d?h:l,o[a*2+1]=f>=u&&f>=d?h:c}(!t.getAttribute("uv")||t.userData.aureonPbrUv)&&(t.setAttribute("uv",new It(o,2)),t.userData.aureonPbrUv=!0),this.geometryVersions.set(t,{position:e,version:n,count:e.count})}stage(t){let e=Math.min(1,Math.max(0,t.night??0)),n=this.bounds,r=n.isEmpty()?new W:n.getCenter(new W),s=n.isEmpty()?12:Math.max(4,n.getSize(new W).length()/2+1);this.sun.target.position.copy(r),this.sun.position.set(r.x+s*.9,r.y+s*1.7,r.z+s*1.1);let o=this.sun.shadow.camera;(o.right!==s||o.far!==s*5)&&(o.left=-s,o.right=s,o.top=s,o.bottom=-s,o.near=.1,o.far=s*5,o.updateProjectionMatrix()),this.sun.color.copy(i.DAY).lerp(i.MOON,e),this.sun.intensity=3.4*(1-e)+.35*e,this.sky.intensity=.7*(1-.8*e),this.ambient.intensity=.06*(1-.5*e);let a=(t.lamps??[]).filter(h=>h.level>0).sort((h,u)=>u.level-h.level),l=2/(1+Math.min(this.lamps.length,a.length));this.lamps.forEach((h,u)=>{let f=a[u];h.visible=!!f;let d=this.low?null:this.glow(u);if(d&&(d.visible=!!f),!!f&&(h.position.set(f.x,f.y,f.z),h.color.setRGB(Math.min(1,f.color[0]),Math.min(1,f.color[1]),Math.min(1,f.color[2])),h.intensity=t.photo||i.LIVE_PHYSICAL?f.level*i.PHOTO_CD*l:f.level*(.95+1.75*e)*l,h.distance=t.photo||i.LIVE_PHYSICAL?0:9,d)){d.position.set(f.x,f.y,f.z);let p=Math.min(1.2,f.level);d.scale.setScalar(.45+.55*p),d.material.color.setRGB(Math.min(1,f.color[0]),Math.min(1,f.color[1])*.92,Math.min(1,f.color[2])*.78),d.material.opacity=(.18+.42*e)*p}});for(let h=a.length;h<this.glows.length;h++)this.glows[h]&&(this.glows[h].visible=!1);let c=Math.min(1,a.reduce((h,u)=>h+u.level,0)/3);this.warmFill.intensity=.16*e*c}render(t,e,n={}){this.run(t,e,n,()=>this.ao&&i.AO?this.drawAo(t,e):this.renderer.render(t,e))}drawAo(t,e){let n=this.renderer,r=n.getDrawingBufferSize(new zt);if(this.aoTarget&&!r.equals(this.aoSize)&&(this.aoTarget.depthTexture?.dispose(),this.aoTarget.dispose(),this.aoOut?.dispose(),this.gtao?.dispose(),this.output?.dispose(),this.aoTarget=this.aoOut=null,this.gtao=null,this.output=null),!this.aoTarget){let l=new On(r.x,r.y);this.aoTarget=new Pe(r.x,r.y,{type:an,depthTexture:l,samples:4}),this.aoOut=new Pe(r.x,r.y,{type:an}),this.gtao=new Wa(t,e,r.x,r.y),this.gtao.setGBuffer(l),this.gtao.blendIntensity=.85,this.gtao.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1.15,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.output=new Fu,this.aoSize.copy(r)}let s=this.gtao;s.scene=t,s.camera=e;let o=n.getRenderTarget(),a=n.getClearAlpha();try{n.setRenderTarget(this.aoTarget),n.setClearAlpha(0),n.clear(),n.render(t,e),s.render(n,this.aoOut,this.aoTarget,0,!1),this.output.renderToScreen=!0,this.output.render(n,null,this.aoOut,0,!1)}finally{n.setRenderTarget(o),n.setClearAlpha(a)}}staged(t,e,n,r){this.run(t,e,n,r)}run(t,e,n,r){if(!this.environment){let a=new Pu;this.pmrem=new Qs(this.renderer),this.environmentTarget=this.pmrem.fromScene(a,.04,.1,100),this.environment=this.environmentTarget.texture,a.dispose()}let s={environment:t.environment,tone:this.renderer.toneMapping,exposure:this.renderer.toneMappingExposure,shadows:this.renderer.shadowMap.enabled,type:this.renderer.shadowMap.type},o=[];try{let a=Math.min(1,Math.max(0,n.night??0)),l=t.environmentIntensity;o.push(()=>{t.environmentIntensity=l}),t.environmentIntensity=.42-.34*a,t.environment=this.environment,t.add(this.lights),this.renderer.toneMapping=ki,this.renderer.toneMappingExposure=n.photo?i.PHOTO_EXPOSURE:1-.14*a,this.bounds.makeEmpty(),this.renderer.shadowMap.enabled=!this.low,this.renderer.shadowMap.type=Dc,t.traverse(c=>{let h=c,u=h.material;if(!h.isMesh||!u||Array.isArray(u)||u.blending!==Me)return;let f={blending:u.blending,src:u.blendSrc,dst:u.blendDst,eq:u.blendEquation,srcA:u.blendSrcAlpha,dstA:u.blendDstAlpha};u.blending=vi,u.blendEquation=yn,u.blendSrc=hr,u.blendDst=yi,u.blendSrcAlpha=Jn,u.blendDstAlpha=yi,o.push(()=>{u.blending=f.blending,u.blendSrc=f.src,u.blendDst=f.dst,u.blendEquation=f.eq,u.blendSrcAlpha=f.srcA,u.blendDstAlpha=f.dstA})}),t.traverse(c=>{c.userData.aureonHideInReal&&c.visible&&(c.visible=!1,o.push(()=>{c.visible=!0}))}),(n.photo||i.LIVE_PHYSICAL)&&t.traverse(c=>{let h=c,u=h.material;!h.isMesh||!u||Array.isArray(u)||!h.visible||u.blending!==vi&&u.blending!==Me||(h.visible=!1,o.push(()=>{h.visible=!0}))}),t.traverse(c=>{let h=c;if(!h.isMesh||!h.userData.aureonPbrKind||Array.isArray(h.material)||!h.material.isMeshBasicMaterial)return;let u=h.material,f=h.userData.aureonPbrKind;if(!nw.includes(f))return;if(this.prepareGeometry(h.geometry),u.visible&&f!=="glass"){h.geometry.boundingBox||h.geometry.computeBoundingBox();let y=h.geometry.boundingBox;y&&!y.isEmpty()&&this.bounds.union(y.clone().applyMatrix4(h.matrixWorld))}let d=h.userData.aureonPbrGroups,p=h.geometry.groups,b=h.castShadow,m=h.receiveShadow,g=h.customDepthMaterial;if(d?.length){let y=[];h.geometry.groups=[];for(let v of d){let M=this.physical(u,v.kind),S=y.indexOf(M);S<0&&(S=y.length,y.push(M)),h.geometry.addGroup(v.start*3,(v.end-v.start)*3,S)}h.material=y}else h.material=this.physical(u,f);h.castShadow=f!=="glass",h.receiveShadow=!0;let x=u.userData.fp3dFold;if(x){let y=this.depths.get(u);y||(y=new zs({depthPacking:xf}),qn(y,x.masks,x.role),this.depths.set(u,y),this.owned.add(y)),h.customDepthMaterial=y}o.push(()=>{h.material=u,h.geometry.groups=p,h.castShadow=b,h.receiveShadow=m,h.customDepthMaterial=g})}),this.stage(n),r()}finally{for(let a of o.reverse())a();t.remove(this.lights),t.environment=s.environment,this.renderer.toneMapping=s.tone,this.renderer.toneMappingExposure=s.exposure,this.renderer.shadowMap.enabled=s.shadows,this.renderer.shadowMap.type=s.type}}dispose(){this.aoTarget?.depthTexture?.dispose(),this.aoTarget?.dispose(),this.aoOut?.dispose(),this.gtao?.dispose(),this.output?.dispose(),this.aoTarget=this.aoOut=null,this.gtao=null,this.output=null;for(let t of this.glows)t?.material.dispose();this.glows=[],this.glowTexture?.dispose(),this.glowTexture=null;for(let[t,e]of this.subscriptions)t.removeEventListener("dispose",e);this.subscriptions.clear();for(let t of this.owned)t.dispose();this.owned.clear();for(let t of this.maps.values())for(let e of Object.values(t))e.dispose();this.maps.clear(),this.sun.shadow.map?.dispose(),this.environmentTarget?.dispose(),this.pmrem?.dispose(),this.environment=null}};function B0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function k0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function z0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var sw=[],od=new Map,ow=0;function $a(i){sw=i,od=new Map(i.flatMap(t=>t.items.map(e=>[aw(t.id,e.id),e]))),ow++}function aw(i,t){return`pack:${i}:${t}`}function ad(i){return i.startsWith("pack:")}function Du(i){return ad(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function ld(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function V0(i){return i==="robot_vacuum"||ad(i)&&i.endsWith(":robot_vacuum")}function Za(i){return i.z>.05}function G0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Za(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var lw={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function H0(i){return Re(i)?.parts.find(t=>t.screen)}function Re(i){if(!ad(i))return;let t=od.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=lw[e];return r?od.get(`pack:${r}:${n.join(":")}`):void 0}function Mn(i,t){let e=Re(t.type);if(t.mount_y!=null)return t.mount_y;let n=Y0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Ou;if(W0.has(t.type))return Math.max(0,i.height-X0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return qr(i,t)+q0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?qr(i,t):Yr(t)||qr(i,t)}}function qr(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>ne([t.x,t.z],n.points))?0:Nu(i,t.x,t.z)}var lo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ai(i){return i==="hedge"||i==="fence"||i==="pergola"}function cd(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!ai(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Bu(i){return[...i.rooms,...cd(i)]}function uw(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function hw(i,t,e,n){return $r(i,t)+lo[t.type]-Ka(i,t,e,n)}var ud=-.2,Uu={set:!1,level:ud};function Z0(i){let t=i?.settings.terrain??null;Uu={set:t?.level!=null,level:t?.level??ud}}function co(i,t){return Uu.level}function K0(i){return i.elevation>.3?0:Uu.set?Uu.level-i.elevation:ud}function $r(i,t){return K0(i)+(t.offset??0)}function Ka(i,t,e,n){return t.type==="pool"?0:uw(t,e,n)}function Nu(i,t,e){let n=(i.outdoor??[]).filter(s=>!ai(s.type)&&s.type!=="pool"&&ne([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?hw(i,r,t,e):K0(i)}function ku(i,t){return $r(i,t)+(t.above?J0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function fw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?J0(i):1.5}function hd(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!ai(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>ne(n,e.points)))}function j0(i,t){return!t.above&&!hd(i,t)?zu(i,t)-.05:ku(i,t)-fw(t)}function zu(i,t){return ku(i,t)-.15}function J0(i){return i.height&&i.height>.3?i.height:1.2}var dw={type:"none",pitch:35,overhang:.4},WP={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...dw}};var Q0=.3;var tg=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ou=1.75;var W0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function X0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var eg=new Set(["stairs","stairs_u"]);function ng(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function ig(i){return tg.has(i)||!!Re(i)?.light}var pw=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Yr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var $0=.04,mw=1.2;function q0(i,t,e,n=0){let r=0;for(let s of i.furniture)!(pw.has(s.type)||Re(s.type)?.surface)||!ne([t,e],yr(s))||s.type==="worktop"&&n>0&&s.h-$0>=mw&&n<=s.h-$0-.02||(r=Math.max(r,s.h));return r}var Vu=new Set(["wall_switch","wall_socket"]),gw=4;function rg(i){let t=(i.gangs??[]).slice(0,gw);return t.length?t:[{entity:null}]}function Y0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var cw=new Set([...tg,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var bw=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],xw=["standard","bars","glass_wall"];function xr(i,t){return i.type==="door"?i.style&&bw.includes(i.style)?i.style:t?"front":"interior":i.style&&xw.includes(i.style)?i.style:"standard"}function sg(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function og(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Yn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function li(i){return Math.abs(Yn(i))}function vr(i){let t=Yn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function ag(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function lg(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function yr(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ne(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function dd(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var Ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ai=(i,t)=>[i[0]+t[0],i[1]+t[1]],Qn=(i,t)=>[i[0]*t,i[1]*t],ho=(i,t)=>i[0]*t[0]+i[1]*t[1],uo=(i,t)=>i[0]*t[1]-i[1]*t[0],ja=i=>Math.hypot(i[0],i[1]),$n=i=>{let t=ja(i)||1;return[i[0]/t,i[1]/t]},fd=i=>[-i[1],i[0]],cg=i=>[i[1],-i[0]];function Ei(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),o=[],a=w=>{for(let T=0;T<o.length;T++)if(Math.abs(o[T][0]-w[0])<=n&&Math.abs(o[T][1]-w[1])<=n)return T;return o.push([w[0],w[1]]),o.length-1},l=[];for(let w of i){let T=w.points;if(T.length<3||Math.abs(Yn(T))<1e-6)continue;let I=Yn(T)>0,D=T.map(a);for(let C=0;C<T.length;C++){let P=D[C],R=D[(C+1)%T.length];P!==R&&l.push(I?{u:P,v:R,room:w.id,edge:C,forward:!0}:{u:R,v:P,room:w.id,edge:C,forward:!1})}}let c=s.map(w=>[a(w.a),a(w.b)]),h=new Set;for(let w of i){let T=w.points;T.length<3||(w.wall_splits??[]).forEach((I,D)=>{if(!I||D>=T.length)return;let C=T[D],P=Ze(T[(D+1)%T.length],C),R=ja(P);for(let N of I)N>n&&N<R-n&&h.add(a(Ai(C,Qn(P,N/R))))})}let u=[];for(let w of l){let T=o[w.u],I=o[w.v],D=Ze(I,T),C=ja(D),P=Qn(D,1/C),R=[];for(let F=0;F<o.length;F++){if(F===w.u||F===w.v)continue;let O=Ze(o[F],T),k=ho(O,P);k<=n||k>=C-n||Math.abs(uo(P,O))<=n&&R.push({t:k,id:F})}R.sort((F,O)=>F.t-O.t);let N=[{t:0,id:w.u},...R,{t:C,id:w.v}];for(let F=0;F+1<N.length;F++){let O=N[F],k=N[F+1],V=w.forward?O.t:C-k.t,q=w.forward?k.t:C-O.t;u.push({u:O.id,v:k.id,room:w.room,edge:w.edge,t0:V,t1:q})}}let f=new Map;for(let w of u){let T=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,I=f.get(T);I||f.set(T,I=[]),I.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),p=new Map;for(let w of u){let T=`${w.room}:${w.edge}`;p.set(T,[...p.get(T)??[],w.t0].sort((I,D)=>I-D))}let b=w=>{let T=i.find(D=>D.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(T))return T;let I=p.get(`${w.room}:${w.edge}`)??[];return T[I.indexOf(w.t0)]??null},m=w=>{let T=w.map(b).filter(D=>typeof D=="number"&&D>0);if(T.length)return Math.min(...T);let I=w.map(D=>i.find(C=>C.id===D.room)?.ceiling_height);return I.every(D=>typeof D=="number"&&D>0)?Math.max(...I):void 0},g=w=>{let T=w.map(I=>i.find(D=>D.id===I.room)?.wall_thickness?.[I.edge]).filter(I=>typeof I=="number"&&I>0);return T.length?Math.max(...T):void 0},x=w=>{for(let T of w){let I=i.find(R=>R.id===T.room),D=I?.wall_slopes?.[T.edge];if(!I||!D)continue;let C=I.points[T.edge],P=I.points[(T.edge+1)%I.points.length];return{p:[C[0],C[1]],q:[P[0],P[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},y=w=>w.some(T=>b(T)===0),v=w=>{let T=x(w);return T?{height:Math.max(T.h0,T.h1),slope:T}:{height:m(w)}},M=[],S=[];for(let w of f.values()){let T=w[0],I=w.find(D=>D!==T&&D.u===T.v&&D.v===T.u&&D.room!==T.room);for(let D of w)D!==T&&D!==I&&D.room!==T.room&&r.push(`overlap:${T.room}:${D.room}`);if(y(I?[T,I]:[T])){I&&M.push([T.room,I.room]);continue}if(I){let D=g([T,I])??t.interior;S.push({a:T.u,b:T.v,left:D/2,right:D/2,exterior:!1,roomLeft:T.room,roomRight:I.room,sources:[d(T),d(I)],...v([T,I])})}else S.push({a:T.u,b:T.v,left:0,right:g([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[d(T)],...v([T])})}let A=w=>$n(Ze(o[w.b],o[w.a]));for(let w of S){if(w.exterior||w.free)continue;let T=new Set;for(let D of[w.a,w.b])for(let C of S)!C.exterior||C.free||C.a!==D&&C.b!==D||Math.abs(uo(A(w),A(C)))>1e-6||(C.roomLeft===w.roomLeft?T.add("left"):C.roomLeft===w.roomRight&&T.add("right"));if(T.size!==1)continue;let I=w.left+w.right;T.has("left")?(w.left=0,w.right=I):(w.left=I,w.right=0)}s.forEach((w,T)=>{let[I,D]=c[T];if(I===D)return;let C=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],P=i.find(F=>F.points.length>=3&&ne(C,F.points))?.id??null,R=(w.thickness??t.interior)/2,N=typeof w.height=="number"&&w.height>0?w.height:void 0;S.push({free:w.id,a:I,b:D,left:R,right:R,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:N})}),S=yw(S,o,h);let _=_w(S,o);return{walls:S.map((w,T)=>{let I=o[w.a],D=o[w.b],C=_.get(`${T}:a`),P=_.get(`${T}:b`),R=ww([C.right,P.left,D,P.right,C.left,I],1e-6);return{id:vw(I,D),a:[I[0],I[1]],b:[D[0],D[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:R,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{},...w.slope?{slope:w.slope}:{}}}),warnings:[...new Set(r)],open:M}}function vw(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function ug(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function yw(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=ug(l)),c.a!==o&&(c=ug(c)),l.a===c.b)continue;let h=$n(Ze(t[l.b],t[l.a])),u=$n(Ze(t[c.b],t[c.a]));if(Math.abs(uo(h,u))>1e-6||ho(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:Mw(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function Mw(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function _w(i,t){let e=new Map;i.forEach((r,s)=>{let o=$n(Ze(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Qn(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Ai(o,Qn(fd(c.d),c.left)),right:Ai(o,Qn(cg(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=Ai(o,Qn(fd(h.d),h.left)),d=Ai(o,Qn(cg(u.d),u.right)),p=uo(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=uo(Ze(d,f),u.d)/p,m=Ai(f,Qn(h.d,b));ja(Ze(m,o))>l||(n.get(h.key).left=m,n.get(u.key).right=m)}}return n}function ww(i,t){let e=i.filter((r,s)=>ja(Ze(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Ze(o,s),c=Ze(a,o);if(Math.abs(uo($n(l),$n(c)))<1e-7&&ho(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function pd(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=$n(Ze(r,n));return Ai(n,Qn(s,e))}function hg(i,t){let e=Ze(i.b,i.a),n=fd($n(e)),r=a=>t.some(l=>l.points.length>=3&&ne(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=Ai(i.a,Qn(e,a));r(Ai(l,Qn(n,i.left+.2)))&&s++,r(Ze(l,Qn(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function fo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=$n(Ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ai(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function po(i,t,e){if(!t.wall)return Sw(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=pd(e.room,0,t.offset);return{wall:n,s:ho(Ze(r,n.a),$n(Ze(n.b,n.a)))}}function md(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=$n(Ze(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||ho($n(Ze(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function Sw(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=pd(t,e,n);return{wall:r,s:ho(Ze(o,r.a),$n(Ze(r.b,r.a)))}}return null}function Gu(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let m=b>0?c.left:-c.right,g=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(m+b*(o/2)));if(!g&&x>.03||a&&x>=a.off)continue;let y=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=g?m+b*(o/2):p,S=c.slope?dd(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:y+d[0]*M,z:v+d[1]*M,top:S,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Mr=Math.PI/180;function Zr(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Mr;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Wu(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],s=e?-i.s:i.s;return[i.p[0]+n*i.c-r*s,i.p[1]+n*s+r*i.c]}function wn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),s=Zr(i),o=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=s?(l,c)=>Wu(s,o(l,c)):o;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function bd(i,t,e,n=1e-6){let[r,s]=Pi(i,t,e),o=wn({...i,rotation:0});return r>=o.u0-n&&r<=o.u1+n&&s>=-n&&s<=o.w+n}function _n(i){let t=wn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=bg(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function xd(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var vd=.14;function dg(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function yd(i,t){return _n(i).rh-vd>t+.01}function pg(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of xd(i)){if(o.open||n!==void 0&&!yd(o,n)||!bd(o,t,e)||o.points&&o.points.length>=3&&!ne([t,e],o.points))continue;let[a,l]=Pi(o,t,e),c=o.shape==="flat"||o.shape==="parapet",h=Math.max(0,o.overhang??s),f=((c?null:tl(jr(o,{u0:h,u1:h,a:h,b:h}),a,l))??_n(o).y(l))-vd;r=r===null?f:Math.max(r,f)}return r}function Xu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=li(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=fg([a[0]-o[0],a[1]-o[1]]),h=fg([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+p*u[1])/b,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/b*t*g,a[1]+p/b*t*g])}return r}function fg(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function mg(i,t){if(i.points&&i.points.length>=3)return Xu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t,o=Zr(i);return[[e,r],[n,r],[n,s],[e,s]].map(a=>Wu(o,a))}function gg(i,t,e,n){let r=Ei(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(o.get(s(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(li(f))>Math.abs(li(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Xu(h,e):null}var Ja=Math.tan(30*Mr);function bg(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Ja*(i-o+s))/(2*Ja))),h=a+(c-s)*Ja;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*Ja:f<=i-o?l+(i-o-f)*Ja:e+(i-f)*r}}function jr(i,t){let e=wn(i),n=_n(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(F,O)=>[F,O,n.y(O)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr);if(i.shape==="pent"){let F=[h,u,f,d],O=[[0,n.y(0)],[r,n.y(r)]];return{faces:[F],rim:F,ridges:[[f,d]],gable:O,gables:[O,O]}}if(i.shape==="pyramid"){let F=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,F],[u,f,F],[f,d,F],[d,h,F]],rim:[h,u,f,d],ridges:[[h,F],[d,F],[u,F],[f,F]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let F=bg(r,i.eave_a,i.eave_b,p,b),O=[[0,n.y(0)],[F.vla,F.yla],[F.vr,F.rh],[r-F.vlb,F.ylb],[r,n.y(r)]],k=[a,F.vla,F.yla],V=[l,F.vla,F.yla],q=[a,r-F.vlb,F.ylb],z=[l,r-F.vlb,F.ylb],$=[a,F.vr,F.rh],J=[l,F.vr,F.rh];return{faces:[[h,u,V,k],[k,V,J,$],[$,J,z,q],[q,z,f,d]],rim:[h,u,V,J,z,f,d,q,$,k],ridges:[[$,J],[k,V],[q,z]],gable:O,gables:[O,O]}}let[m,g]=qu(i)??["gable","gable"],x=Md(i,[m,g]),y=m==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=g==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],S=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],E=m==="halfhip",w=g==="halfhip",T=[[h,u,...w?[A]:[],v,y,...E?[M]:[]],[y,v,...w?[_]:[],f,d,...E?[S]:[]]];m==="hip"&&T.push([d,h,y]),E&&T.push([S,M,y]),g==="hip"&&T.push([u,f,v]),w&&T.push([A,_,v]);let I=[h,u,...g==="gable"?[v]:w?[A,_]:[],f,d,...m==="gable"?[y]:E?[S,M]:[]],D=[[y,v]];m==="hip"&&D.push([h,y],[d,y]),E&&D.push([M,y],[S,y]),g==="hip"&&D.push([u,v],[f,v]),w&&D.push([A,v],[_,v]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],P=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],R=F=>F==="gable"?C:F==="halfhip"?P:null,N=[R(m),R(g)];return{faces:T,rim:I,ridges:D,gable:N[0]??N[1],gables:N}}function qu(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Md(i,t){let e=wn(i),n=_n(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(h-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(h-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,s)),b=m=>m==="hip"?d:m==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function tl(i,t,e){let n=null;for(let r of i.faces){if(!ne([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-h*f,b=h*u-l*d,m=l*f-c*u;if(Math.abs(b)<1e-9)continue;let g=s[2]-(p*(t-s[0])+m*(e-s[1]))/b;n=n===null?g:Math.min(n,g)}return n}function Pi(i,t,e){let[n,r]=Wu(Zr(i),[t,e],!0),s=Math.min(i.x0,i.x1),o=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?o-n:n-s]}function gd(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Kr(i,t){let[e,n]=Wu(Zr(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5||bd(o,e,n)&&(!s||r(o)<r(s))&&(s=o);return s}function _d(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=wn(t),n=_n(t).rh,r=jr(i,{u0:0,u1:0,a:0,b:0}),s=_n(i),o=b=>{let[m,g]=e.at(b,e.w/2),[x,y]=Pi(i,m,g);return tl(r,x,y)??s.y(y)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(o(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Zr(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function xg(i,t){let e=_d(i,t),n=wn(e),r=_n(e),s=jr(i,{u0:0,u1:0,a:0,b:0}),o=_n(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,m]=Pi(i,d,p);return tl(s,b,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,m=l?n.u0+p:n.u1-p,g=a(m),x=1/0,y=-1/0;for(let _=0;_<=40;_++){let E=n.w*_/40;r.y(E)>g+.02&&(x=Math.min(x,E),y=Math.max(y,E))}if(!(y-x>.05))continue;let v=n.at(b,x),M=n.at(m,y),S=Pi(i,v[0],v[1]),A=Pi(i,M[0],M[1]);h.push({u0:Math.min(S[0],A[0]),u1:Math.max(S[0],A[0]),v0:Math.min(S[1],A[1]),v1:Math.max(S[1],A[1])})}return h}function Ri(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function wd(i,t){let e=Ri(i,0,t.u0,!0),n=Ri(i,0,t.u1,!1),r=Ri(Ri(i,0,t.u0,!1),0,t.u1,!0),s=Ri(r,1,t.v0,!0),o=Ri(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(li(a.map(l=>[l[0],l[1]])))>1e-6)}function Yu(i,t,e){let n=wn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(h=>r.some(u=>ne(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function vg(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Tw(i){return _n(i).rh}function yg(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Kr(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>Tw(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return bd(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Hu(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Qa(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],h=s[2]-t[2],u=(c*l-h*r)/o,f=(n*h-a*c)/o;return[u,f,t[2]-u*t[0]-f*t[1]]}var mo=i=>Math.abs(li(i.map(t=>[t[0],t[1]])));function $u(i){let t=Yn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function Aw(i,t){let e=Qa(i),n=Qa(t.poly);if(!e||!n||mo(t.poly)<1e-6)return null;let r=[...$u(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Mg(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=Aw(s,n),a=o?s:[];for(let c of o??[])a=Hu(a,c);if(a.length<3||mo(a)<1e-6){r.push(s);continue}let l=s;for(let[c,h,u]of $u(a)){let f=Hu(l,[-c,-h,-u]);if(f.length>=3&&mo(f)>1e-6&&r.push(f),l=Hu(l,[c,h,u]),l.length<3)break}}e=r}return e}function Sd(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Qa(s.poly);if(!o||mo(s.poly)<1e-6)continue;let a=$u(s.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(s.depth)&&a.push([s.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function _g(i,t){let e=Qa(i),n=Qa(t);if(!e||!n||mo(t)<1e-6)return null;let r=[...i];for(let c of $u(t))r=Hu(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=s(h),d=s(u);if(f<0!=d<0){let p=f/(f-d);o.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function wg(i,t){let e=wn(i),n=s=>s.map(([o,a,l])=>{let[c,h]=e.at(o,a);return[c,h,l]}),r=[];for(let s of t){let o=Ri(Ri(Ri(Ri(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&mo(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of wd(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:vd})}return r}function Td(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...Pi(i,n,r),s]),depth:e.depth}))}function Sg(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Kr(i,t)!==e&&Kr(i,e)!==t}function Tg(i,t){if(t.dormer||t.open||!qu(t)||Zr(t)||Kr(i,t))return null;let e=wn(t),n=_n(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||Zr(o)||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=_n(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=gd(o),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=gd(t),[b,m]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||m>d+.05)continue;let g=Ag(t,o),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=g+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=g-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function Ag(i,t){let e=wn(t),n=e.at(e.u0,_n(t).vr);return i.axis==="x"?n[0]:n[1]}function Eg(i,t){let e=Ag(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=gd(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Ad(i,t){return t.rooms.some(e=>e.points.length>=3)?gg(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Ed(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Ad(i,t);return!!e&&e.some(([n,r])=>co(n,r)-t.elevation>-.15)}function Rg(i,t,e,n,r){return!e||!Ed(i,t)?!1:n<Math.min(t.height,co(r[0],r[1])-t.elevation)-.05}function go(i,t){let e=Yn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function Pg(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var ci=1e-4;function Rd(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Cg(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>ci&&a<1-ci&&l>-ci&&l<1+ci?a:null}function Pd(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=ci||o>=1-ci?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<ci?o:null}function Ew(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Cg(n,r,o,a)!==null||Pd(o,n,r)!==null||Pd(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<ci)return!0}}return ne(i[0],t)||ne(t[0],i)}function Rw(i){let t=i.map(s=>Rd(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],m=Cg(l,c,p,b)??Pd(p,l,c);m!==null&&h.push(m)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<ci)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((m,g)=>g!==o&&ne(b,m))||e.some(([m,g])=>Math.hypot(m[0]-f[0],m[1]-f[1])<ci&&Math.hypot(g[0]-d[0],g[1]-d[1])<ci)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Rd(o)>1e-6&&n.push(o)}return n}function Ig(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&Ew(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:Rw(s))}function Pw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Lg(i,t,e=.03){return i.every(n=>ne(n,t)||t.some((r,s)=>Pw(n,r,t[(s+1)%t.length])<=e))}function Fg(i,t){let e=Rd(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Id(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var bo=(i,t)=>!!i.fix&&i.fix.includes(t);function Cd(i,t,e,n){let r=new Map,s=i.filter(c=>bo(c,t)).map(c=>({p:c,e:Id(c,t,e)})),o=Math.min(.05,.1*e);for(let{p:c,e:h}of s)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||u[0]>a+(a===0?o:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:o)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of s)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Jr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function Dg(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Zu(n))return[Jr(t,n),Jr(e,n)];let r=n.side.get(i)??"lo",s=e-t;if(r==="mid")return[n.s/2-s/2,n.s/2+s/2];if(r==="free"){let o=Jr((t+e)/2,n);return[o-s/2,o+s/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Zu(i){return i.lo>0||i.hi>0}function Ku(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:Cd(i.parts,"w",r,t),d:Cd(i.parts,"d",s,e),h:Cd(i.parts,"h",o,n)},l={w:!Zu(a.w)&&i.parts.some(c=>bo(c,"w")),d:!Zu(a.d)&&i.parts.some(c=>bo(c,"d")),h:!Zu(a.h)&&i.parts.some(c=>bo(c,"h"))};return i.parts.map(c=>{let h=x=>{let y=a[x],[v,M]=Id(c,x,y.s0);return bo(c,x)&&!l[x]?Dg(c,v,M,y):[Jr(v,y),Jr(M,y)]},[u,f]=h("w"),[d,p]=h("d"),[b,m]=h("h"),g={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(m-b)/n};if(c.shape==="loft"){let x=(A,_,E,w,T)=>{let I=a[A],D=_??w,C=E??T,P=(D-C/2+.5)*I.s0,R=(D+C/2+.5)*I.s0;if(!bo(c,A)||l[A])return[Jr(P,I),Jr(R,I)];let[N,F]=Id(c,A,I.s0),[O]=Dg(c,N,F,I),k=O-N;return[P+k,R+k]},[y,v]=x("w",c.tx,c.tw,c.x,c.w),[M,S]=x("d",c.tz,c.td,c.z,c.d);g.tx=(y+v)/2/t-.5,g.tw=(v-y)/t,g.tz=(M+S)/2/e-.5,g.td=(S-M)/e}return g})}var Cw=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Iw=["wall","pole","pillar","parcel","bank"];function Og(i){return Cw.includes(i.variant??"")?i.variant:"bin240"}function Ug(i){return Iw.includes(i.variant??"")?i.variant:"wall"}var Qe=["#3a3f47","#3a3f47"],Qr=["#23262b","#23262b"],ui=["#5a3b25","#5a3b25"],Ge=["#1f4fa8","#1f4fa8"],_r=["#e3b616","#e3b616"],xe=["#2f7d3b","#2f7d3b"],Ng={default:{rest:Qe,bio:ui,paper:Ge,plastic:_r,glass:xe,garden:xe,recycling:_r,other:Qe},DE:{rest:Qr,bio:ui,paper:Ge,plastic:_r,glass:xe,garden:xe,recycling:_r},AT:{rest:Qe,bio:ui,paper:[Qe[0],"#c0262d"],plastic:_r,glass:xe,garden:xe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:xe,paper:Ge,plastic:Qe,glass:xe,garden:xe},NL:{rest:Qe,bio:xe,paper:Ge,plastic:["#3a3f47","#e57a1f"],glass:xe,garden:xe},BE:{rest:Qe,bio:xe,paper:Ge,plastic:Ge,glass:xe,garden:xe},GB:{rest:Qr,bio:["#3a3f47","#5a3b25"],paper:Ge,plastic:Ge,glass:Qr,garden:ui,recycling:Ge},US:{rest:Qr,bio:xe,paper:Ge,plastic:Ge,glass:Ge,garden:xe,recycling:Ge},CA:{rest:Qr,bio:xe,paper:Ge,plastic:Ge,glass:Ge,garden:xe,recycling:Ge},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Qe,bio:ui,paper:[Qe[0],"#e3b616"],plastic:[Qe[0],"#e3b616"],recycling:[Qe[0],"#e3b616"],glass:xe,garden:xe},IT:{rest:Qe,bio:ui,paper:Ge,plastic:_r,glass:xe,garden:xe},ES:{rest:Qe,bio:ui,paper:Ge,plastic:_r,glass:xe,garden:xe},PT:{rest:Qe,bio:ui,paper:Ge,plastic:_r,glass:xe,garden:xe},DK:{rest:Qr,bio:xe,paper:Ge,plastic:Qe,glass:xe,garden:xe},SE:{rest:Qr,bio:ui,paper:Ge,plastic:Qe,glass:xe,garden:xe},NO:{rest:Qe,bio:ui,paper:Ge,plastic:Qe,glass:xe,garden:xe},FI:{rest:Qe,bio:ui,paper:Ge,plastic:Qe,glass:xe,garden:xe}},Bg="DE";function kg(){return Bg}function Lw(i,t){return Ng[t]?.[i]??Ng.default[i]??Qe}function zg(i,t=Bg){let e=Lw(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=Xt(5995775,.3),Ut=Xt(5995775,.17),se=Xt(3662079,.45),Sr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Dd(n)}rotated(t,e,n){let r=n*ae,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ue(this.buf,Ld(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Ld(l)&&(l.reverse(),c.reverse()),T0(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,b=t==="x"?n:e,m=(g,x)=>t==="x"?this.tf(g,x):this.tf(x,g);if(A0(this.buf,m,p-o/2,p+o/2,b,d,f,l,c,h),u)for(let g of[p-o/2,p+o/2])for(let x=0;x<h;x++){let y=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(m(g,b+Math.sin(y)*f),m(g,b+Math.sin(v)*f),d+Math.cos(y)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ue(this.buf,Ld(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=mt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,ie)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Dd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Ld(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function ts(i,t,e,n,r,s,o=U.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function nl(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Ut)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,se);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,se)}}}function Vg(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);ts(i,t,e,.07,.05,.05,U.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,U.fabric,U.fabricTop,.04,mt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,U.fabric,U.fabricTop,mt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let b=s+c+d*p+.02,m=b+d-.04;i.pad(b,m,h-.08,h+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,m-.01,a+u*.55,a+u+.14],[b+.03,m-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,U.cushion)}}function Gg(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(_,E)=>i.loft([_-.015,_+.015,E-.015,E+.015],[_-.025,_+.025,E-.025,E+.025],0,.07,U.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let _ of p)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,mt);for(let _ of p){let[E,w]=_<0?[s+.02,s+c]:[o-c,o-.02];i.pad(E,w,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,mt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,U.fabric,U.fabricTop,mt);for(let _ of p)_<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,mt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,mt);for(let _ of p){let[E,w]=_<0?[s+h,s+c]:[o-c,o-h];i.pad(E,w,f-.08,d,l-u,l,U.fabric,U.fabricTop,.04,mt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,mt);let m=s+h,g=r?o-h:o-u,x=Math.max(1,Math.round((g-m)/.62)),y=(g-m)/x;for(let _=0;_<x;_++){let E=m+y*_+.02,w=E+y-.04;i.pad(E,w,f-.08,f+.05,a+h+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([E+.01,w-.01,a+h*.55,a+h+.14],[E+.03,w-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,U.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let S=Math.max(1,Math.round((M-v)/.62)),A=(M-v)/S;for(let _ of p)for(let E=0;E<S;E++){let w=v+A*E+.02,T=w+A-.04;_<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,w,T,U.cushion,U.cushion,.04),i.loft([s+h*.55,s+h+.14,w+.01,T-.01],[s+h*.4,s+h*.4+.06,w+.03,T-.03],f+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,w,T,U.cushion,U.cushion,.04),i.loft([o-h-.14,o-h*.55,w+.01,T-.01],[o-h*.4-.06,o-h*.4,w+.03,T-.03],f+.03,n*.93,U.cushion))}}function Fw(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);ts(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,r+.06,s,U.wood,U.woodTop,mt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,mt),i.box(o,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Ut);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,U.cushion,U.fabricTop,.025,Ut),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=o+.1+f*d,b=r+.12,m=Math.min(.42,e*.2),g=.1;i.loft([p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],[p+.03,p+f-.03,b,b+m],c,c+.06,U.whiteTop),i.loft([p+.03,p+f-.03,b,b+m],[p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Ut)}}function Dw(i,t,e,n){let r=Math.min(.46,n*.52);ts(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,mt)}function Nw(i,t,e,n){ts(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,se),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function Ow(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Ut);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,se);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,se),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function wr(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),nl(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function Uw(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Ut),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=h+.006,c++}}}}function Bw(i,t,e,n){let r=Math.max(1,Math.round(t/.6));wr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function kw(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ut);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,se),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,se)}var ju=(i,t)=>Xt(parseInt(i.slice(1),16),t).getHex(),el=!1;function qg(i){el=i}function Yg(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function zw(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new Z(f).toArray());return ju(f,d>.05?Math.max(1,.62/d):1)},a=el?o(s[0]):ju(s[0],.55),l=el?o(s[1]):ju(s[1],.8),c=ju(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Ut),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Ut),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,mt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Ut),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Ut);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Ut),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Ut);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Ut),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,se),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ut))}function Vw(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?U.metal:U.white,o?U.metal:U.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ut),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,U.white,U.whiteTop,Ut),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ut);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,U.metal,U.metal,Ut),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ut);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,U.dark,U.dark,14,Ut),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,mt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,mt)}}}function Gw(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,mt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Ut)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,U.white,U.whiteTop,24,mt),i.cyl(0,0,s*.5,n,n+.01,U.metal,U.metal,12)}function Hw(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,U.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,U.metal,U.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,U.white,U.whiteTop,20,mt),i.cyl(0,0,s*.85,n-.05,n,U.white,U.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,U.dark,U.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,U.dark)}function Ww(i,t,e,n,r){let s=U.metal,o=Xt(U.metal,1.25).getHex(),a=Xt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Ut),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Ut),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Ut),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Ut),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function Xw(i,t,e,n){let r=e/2-$g;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Ut),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Ut))}var $g=.06;function Zg(i,t,e,n){let r=t.rotation*ae,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(C,P,R)=>[t.x+C*s-R*o,P,t.z+C*o+R*s],c=(C,P,R,N,F)=>{i.tri(C,P,R,F),i.tri(C,R,N,F),i.tri(C,R,P,F),i.tri(C,N,R,F)},h=(C,P,R,N)=>{let F=l(C[0],C[1],C[2]),O=l(P[0],P[1],P[2]),k=O[0]-F[0],V=O[1]-F[1],q=O[2]-F[2],z=Math.hypot(k,V,q)||1,$=[k/z,V/z,q/z],J=Math.abs($[1])>.9?[1,0,0]:[0,1,0],ot=[$[1]*J[2]-$[2]*J[1],$[2]*J[0]-$[0]*J[2],$[0]*J[1]-$[1]*J[0]],H=Math.hypot(ot[0],ot[1],ot[2])||1,X=[ot[0]/H*R,ot[1]/H*R,ot[2]/H*R],et=[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]],st=[[1,1],[-1,1],[-1,-1],[1,-1]],tt=(ct,pt)=>[ct[0]+X[0]*st[pt][0]+et[0]*st[pt][1],ct[1]+X[1]*st[pt][0]+et[1]*st[pt][1],ct[2]+X[2]*st[pt][0]+et[2]*st[pt][1]];for(let ct=0;ct<4;ct++){let pt=(ct+1)%4;i.tri(tt(F,ct),tt(O,ct),tt(O,pt),N),i.tri(tt(F,ct),tt(O,pt),tt(F,pt),N)}},u=(C,P,R,N,F,O,k,V)=>{c(l(C,N,F),l(P,N,F),l(P,N,O),l(C,N,O),V),c(l(C,R,O),l(P,R,O),l(P,N,O),l(C,N,O),k),c(l(C,R,F),l(P,R,F),l(P,R,O),l(C,R,O),k),c(l(C,R,F),l(C,R,O),l(C,N,O),l(C,N,F),k),c(l(P,R,F),l(P,R,O),l(P,N,O),l(P,N,F),k)},f=new Z(U.body),d=new Z(U.bodyTop),p=new Z(U.accent),b=new Z(1929098),m=new Z(995141),g=(C,P,R,N,F)=>{let O=(k,V,q)=>[k[0]+(V[0]-k[0])*q,k[1]+(V[1]-k[1])*q,k[2]+(V[2]-k[2])*q];for(let k=0;k<F;k++){let V=O(C,P,k/F),q=O(C,P,(k+1)/F),z=O(R,N,(k+1)/F),$=O(R,N,k/F);c(l(V[0],V[1],V[2]),l(q[0],q[1],q[2]),l(z[0],z[1],z[2]),l($[0],$[1],$[2]),k%2?b:m)}},x=t.w/2,y=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),S=(t.awning_pitch??12)*Math.PI/180,A=(C,P)=>{t.awning_valance!==!1&&g([-x+.04,C,P+.01],[x-.04,C,P+.01],[-x+.04,C-.2,P+.01],[x-.04,C-.2,P+.01],M)},_=t.variant??"arm";if(_==="side"){let C=e,P=.05,R=0,N=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,C+.05,R-.05,R+.05,f,d),u(x-.06,x,0,C+.05,R-.03,R+.03,f,d),a>.01&&g([-x+.1,C,R],[-x+.1,P,R],[N,C,R],[N,P,R],Math.max(4,Math.round((C-P)/.3))),h([N,P,R],[N,C,R],.02,p);return}if(_==="vertical"){let C=y,P=Math.min(t.d/2,y+v);u(-x,x,e,e+v,C,P,f,d);let R=(C+P)/2;for(let F of[-x+.02,x-.02])h([F,.02,R],[F,e,R],.02,p);let N=e-a*Math.max(0,e-.04);a>.01&&g([-x+.04,e,R],[x-.04,e,R],[-x+.04,N,R],[x-.04,N,R],M),h([-x+.03,N,R],[x-.03,N,R],.025,p);return}if(_==="pergola"){let C=t.d/2-.05,P=e+v,R=P-(C-y)*Math.tan(S);u(-x,x,e,P,y,y+v,f,d);for(let O of[-x+.05,x-.05])h([O,P,y+v],[O,R,C],.035,p),h([O,0,C],[O,R,C],.045,f);h([-x+.05,R,C],[x-.05,R,C],.035,p);let N=y+v+a*(C-y-v),F=P-(N-y)*Math.tan(S)+.04;a>.01&&g([-x+.08,P+.04,y+v],[x-.08,P+.04,y+v],[-x+.08,F,N],[x-.08,F,N],M),h([-x+.08,F,N],[x-.08,F,N],.025,p);return}let E=y,w=y+v;u(-x,x,e,e+v,E,w,f,d);let T=[w-.02,e+v*.35];if(_==="drop"){let C=Math.max(.3,t.d-v),P=[w,T[1]-C],R=a*(Math.PI/2+S),N=[P[0]+Math.sin(R)*C,P[1]+Math.cos(R)*C];for(let F of[-x+.08,x-.08])h([F,P[1],P[0]],[F,N[1],N[0]],.018,p);a>.01&&g([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,N[1],N[0]],[x-.04,N[1],N[0]],M),h([-x+.02,N[1],N[0]],[x-.02,N[1],N[0]],.03,p),a>.05&&A(N[1],N[0]);return}let I=Math.max(0,t.d-v)*a,D=[T[0]+I,T[1]-I*Math.tan(S)];if(I>.01){g([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],M);let C=Math.max(.3,(t.d-v)/2+.05);for(let P of[-1,1]){let R=P*(x-.12),N=[R,e+.02,w-.04],F=[R,D[1]-.02,D[0]],O=Math.hypot(F[2]-N[2],F[1]-N[1]),k=Math.sqrt(Math.max(0,C*C-(O/2)**2)),V=[R-P*Math.min(k,x-.15),(N[1]+F[1])/2,(N[2]+F[2])/2];h(N,V,.018,p),h(V,F,.018,p)}}h([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,p),I>.05&&A(D[1],D[0])}function Kg(i,t,e,n,r){let s=i.p.length;qw(i,t,e,n,r),t.mirror&&Ud(i,s)}function qw(i,t,e,n,r){let s=t.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],h=e+.05,u=e+t.h-.02,f=new Z(.75,.1,.14),d=new Z(U.dark),p=new Z(U.accent),b=t.w/2-.006,m=(v,M,S)=>{let A=S/g,_=new Z(2043212).lerp(f,A),E=new Z(U.body).lerp(f,A*.8),w=Math.cos(S),T=Math.sin(S),I=(P,R)=>c(v+M*(P*w-R*T),t.d/2+P*T+R*w),D=(P,R,N,F)=>{let[O,k,V,q]=P;i.tri([O[0],R,O[1]],[k[0],R,k[1]],[V[0],N,V[1]],F),i.tri([O[0],R,O[1]],[V[0],N,V[1]],[q[0],N,q[1]],F)},C=(P,R,N,F,O,k,V,q=V)=>{let z=[I(P,k),I(R,k),I(R,O),I(P,O)];D([z[0],z[1],z[1],z[0]],N,F,q),D([z[3],z[2],z[2],z[3]],N,F,V),D([z[0],z[3],z[3],z[0]],N,F,V),D([z[1],z[2],z[2],z[1]],N,F,V),D([z[0],z[1],z[2],z[3]],F,F,V),D([z[3],z[2],z[1],z[0]],N,N,V)};return C(0,b,h,u,-$g,0,E,_),C(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),C},g=1.83;m(-t.w/2,1,n*g)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*g)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Yw(i,t,e,n){wr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,mt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,se)}}function $w(i,t,e,n){wr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,se),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function Zw(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,se),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function Kw(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,se),i.seg(r,n,s,o,n,a,se),i.seg(o,.05,a,o,n,a,se);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,se)}function jw(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function Jw(i,t,e,n){wr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,se),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,se)}function Qw(i,t,e,n){wr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,U.dark,U.dark,se)}function tS(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,U.pot,U.pot,10,mt),i.cyl(0,0,r*.08,s,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,U.plant,U.plantTop,8,a===o-1?Ut:null)}}function eS(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,mt)}function nS(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,U.wood,U.woodTop),i.seg(-t/2,d,u,t/2,d,u,mt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,mt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Ut);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),se);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Ut)}}function iS(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=ng(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let A=0;A<s;A++){let _=e/2-c*A,E=h*(A+1);i.box(u,f,0,E,_-c,_,U.wood,U.woodTop),i.seg(u,E,_,f,E,_,mt)}i.seg(u,0,e/2,u,h,e/2,mt);let m=h*r,g=.2;i.box(u,f,0,m,-e/2,b,U.wood,U.woodTop),i.box(f,p,Math.max(0,m-g),m,-e/2,b,U.wood,U.woodTop),i.seg(u,m,b,f,m,b,mt);for(let A=0;A<o;A++){let _=b+c*A,E=h*(r+1+A);i.box(d,p,Math.max(0,E-h-g),E,_,_+c,U.wood,U.woodTop),i.seg(d,E,_,p,E,_,mt)}i.seg(u,h,e/2,u,m,b,Ut),i.seg(p,m,b,p,n,b+c*(o-1),Ut);let x=.9,y=f-.03,v=d+.03,M=b-.03,S=Math.max(1,o-4);i.seg(y,h+x,e/2-c/2,y,m+x,M,se),i.seg(y,m+x,M,v,m+x,M,se),i.seg(v,m+x,M,v,h*(r+S)+x,b+c*(S-.5),se);for(let A=0;A<s;A+=3){let _=e/2-c*(A+.5);i.seg(y,h*(A+1),_,y,h*(A+1)+x,_,Ut)}for(let A of[y,v])i.seg(A,m,M,A,m+x,M,Ut);for(let A=2;A<S;A+=3){let _=b+c*(A+.5);i.seg(v,h*(r+1+A),_,v,h*(r+1+A)+x,_,Ut)}}function rS(i,t,e,n){ts(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),nl(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function sS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Ut)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,se)}}function oS(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,mt),nl(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function Hg(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,mt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Ut),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Ut))}function aS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Ut),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,mt)}function lS(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function cS(i,t,e,n){ts(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,mt)}function uS(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,mt),nl(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function hS(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,se),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,se);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Ut);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,se),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,se)}function fS(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),nl(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function dS(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,se),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function Wg(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,mt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Ut),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,se);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,se),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Ut)}}function pS(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Ut),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,mt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Ut)}function mS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,mt)}function gS(i,t,e,n){ts(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Ut)}function bS(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,se)}function xS(i,t,e,n){let r=Nd;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,mt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ut)}}function vS(i,t,e,n){let r=Od;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ut),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,se)}function xo(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,se)}}function yS(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,se),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),xo(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,se);for(let a of[-1,1])xo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,se);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ut)}function MS(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,mt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Ut);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,se)}}function _S(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,s,n*.08,n*.78,U.dark,U.body,18,mt),i.cyl(0,0,s*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,mt),xo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,U.dark,U.metal,16,mt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,se)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,U.dark,U.body)}function wS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;xo(i,s,o,r,e/2+.004,24),xo(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Ut),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Ut),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,se);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ut)}function SS(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,mt);for(let s of[-1,1])xo(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,se);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Ut)}function TS(i,t,e,n){let r=Q0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function AS(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,se),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ut)}function ES(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,mt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,se)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function RS(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ut),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ut),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,se)}function PS(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,se),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ut);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,se),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,se)}}var Nd=.12,Od=2.05;function jg(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function Bd(i,t){let e=CS(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function CS(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=H0(i.type);if(s){let l=t?Mn(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Mn(t,i)-Yr(i):0,a=IS(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function IS(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?Mn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Nd+.02,y1:Nd+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Od+.015,y1:Od+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function LS(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=Re(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function FS(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new Z(1-r,1-r,1-r),c=new Z(1,1,1),h=o+.003;if(s){let b=v=>[v[0],h,v[1]],g=(v,M,S)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*S),x=i.p.length,y=b(t(0,0));for(let v=0;v<24;v++){let M=b(g(v,e/2,n/2)),S=b(g(v+1,e/2,n/2)),A=b(g(v,e/2+a,n/2+a)),_=b(g(v+1,e/2+a,n/2+a));i.tri(y,M,S,l),i.tri(M,A,_,l,c,c),i.tri(M,_,S,l,c,l)}Dd(t)&&Ud(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let m=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[m]),l,c,c),i.tri(d(u[b]),d(f[m]),d(u[m]),l,c,l)}Dd(t)&&Ud(i,p)}function Ju(i,t,e,n,r=0,s=!1){DS(i,t,e,n,r,s)}function Ud(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function DS(i,t,e,n,r,s=!1){let o=Re(n.type)?0:r-Yr(n);if(Re(n.type)||Math.abs(o)<.001)return Xg(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;Xg(i,t,r<.05?e:new re,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=o;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=o;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=o}function Xg(i,t,e,n,r,s=!1){let o=n.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,h=(b,m)=>[n.x+c*b*a-m*l,n.z+c*b*l+m*a],u=new Sr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":Vg(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Vg(u,f,d,p,1);break;case"sofa_l":Gg(u,f,d,p,!1);break;case"sofa_u":Gg(u,f,d,p,!0);break;case"bed":Fw(u,f,d,p);break;case"chair":Dw(u,f,d,p);break;case"table":Nw(u,f,d,p);break;case"desk":Ow(u,f,d,p);break;case"nightstand":wr(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Ut);break;case"wardrobe":wr(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":Uw(u,f,d,p);break;case"kitchen":Bw(u,f,d,p);break;case"fridge":kw(u,f,d,p);break;case"fridge_smart":Xw(u,f,d,p);break;case"waste_bin":{let b=i.c.length;zw(u,f,d,p,Og(n),zg(n,kg())),el&&Yg(i.c,b);break}case"mailbox":{let b=i.p.length,m=t.p.length;Ww(u,f,d,p,Ug(n));let g=Yr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;if(g>0)return;break}case"wifi_ap":Gw(u,f,d,p,n.variant==="wall");return;case"water_heater":if(Hw(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,m=t.p.length;Vw(u,f,d,p,rg(n).length,n.type==="wall_socket",n.variant==="outdoor");let g=Yr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;return}case"awning":return;case"stove":Yw(u,f,d,p);break;case"sink":$w(u,f,d,p);break;case"bathtub":Zw(u,f,d,p);break;case"shower":Kw(u,f,d,p);break;case"wc":jw(u,f,d,p);break;case"washbasin":Jw(u,f,d,p);break;case"tv_board":Qw(u,f,d,p);break;case"plant":tS(u,f,d,p);break;case"rug":eS(u,f,d);return;case"stairs":nS(u,f,d,p);break;case"stairs_u":iS(u,f,d,p);break;case"stairwell":return;case"sideboard":rS(u,f,d,p);break;case"dresser":sS(u,f,d,p);break;case"tall_cabinet":wr(u,f,d,p,1,p*.5);break;case"coat_rack":oS(u,f,d,p);break;case"bench":Hg(u,f,d,p,!1);break;case"corner_bench":Hg(u,f,d,p,!0);break;case"bar_stool":aS(u,f,d,p);break;case"office_chair":lS(u,f,d,p);break;case"stool":cS(u,f,d,p);break;case"kitchen_wall":uS(u,f,d,p);return;case"kitchen_tall":hS(u,f,d,p);break;case"island":fS(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,U.whiteTop,U.whiteTop,mt);return;case"dishwasher":dS(u,f,d,p);break;case"washer":Wg(u,f,d,p,!1);break;case"dryer":Wg(u,f,d,p,!0);break;case"bunk_bed":pS(u,f,d,p);break;case"table_round":mS(u,f,d,p);break;case"coffee_table":gS(u,f,d,p);break;case"tv_wall":bS(u,f,d,p);return;case"parking":{let m=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let g=0;g<4;g++)u.seg(m[g][0],.012,m[g][1],m[(g+1)%4][0],.012,m[(g+1)%4][1],Ut);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,U.white,U.whiteTop,mt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":xS(u,f,d,p);return;case"ac_unit":vS(u,f,d,p);return;case"inverter":yS(u,f,d,p,n.variant??null);return;case"grid_point":AS(u,f,d,p);break;case"wallbox":ES(u,f,d,p);return;case"pool_pump":MS(u,f,d,p);break;case"pool_filter":_S(u,f,d,p,n.variant??null);break;case"pool_heat_pump":wS(u,f,d,p);break;case"pool_dosing":SS(u,f,d,p);break;case"pool_valve":TS(u,f,d,p);return;case"meter":RS(u,f,d,p);return;case"home_battery":if(PS(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=Re(n.type);if(b){let m=Du(n.type),g=m?x=>ld(m,x):V0(n.type)&&!s?Za:null;if(il(u,b,f,d,p,r,null,null,g),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,U.body,U.bodyTop,mt)}}FS(e,h,f,d,n.type==="plant"?.35:.5,LS(n),Math.min(0,r))}function Jg(i){return!!Re(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function Fd(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function il(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let h of Ku(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&o!==null,d=f?o:Fd(u.color,!1)??U.body,p=f?o:Fd(u.top,!1)??Fd(u.color,!0)??Xt(d,1.25).getHex(),b=s+u.y*r,m=s+Math.min(r,(u.y+u.h)*r),g=i.colors.length,x=u.edges==="glow"?gr:u.edges==="faint"?Ut:u.edges?mt:null,y=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))y.lyingCyl(u.axis,u.x*e,u.z*n,b,m,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")y.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,m,d,p,14,x);else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,S=u.tw??u.w,A=u.td??u.d;y.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-S/2)*e,(v+S/2)*e,(M-A/2)*n,(M+A/2)*n],b,m,d,p,x)}else y.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,m,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);el&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Yg(i.colors,g)}}function Qg(i,t,e,n,r,s){let o=s*ae,a=Math.cos(o),l=Math.sin(o),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new Sr(i,new Ve,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function tb(i,t,e,n,r){let s=G0(t)*n,o=new Sr(i,new Ve,(c,h)=>[c,h-s]);il(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Za);let a=0,l=0;for(let c of Ku(t,e,n,r)){if(!Za(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function rl(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];il(new Sr(i,new Ve,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function eb(i,t,e,n,r,s){let o=NS(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ae,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];il(new Sr(i,new Ve,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function NS(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>ld(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function nb(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let m of Ku(i,n,r,s)){if(!m.glow)continue;let g=(m.x+(m.shape==="loft"?m.tx??m.x:m.x))/2*n,x=(m.z+(m.shape==="loft"?m.tz??m.z:m.z))/2*r,y=m.y*s,v=Math.min(s,(m.y+m.h)*s),M=Math.max(1e-6,m.w*n*m.d*r*Math.max(0,v-y));o+=M,a+=g*M,l+=(y+v)/2*M,c+=x*M}if(!o)return null;let h=a/o,u=c/o,f=t.rotation*ae,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/o,t.z+b*h*p+u*d]}function Qu(i,t,e,n,r){let s=e.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];il(new Sr(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var OS={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function US(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function rb(i,t){return t.type==="pool"?zu(i,t):$r(i,t)+(ai(t.type)?.01:lo[t.type])}function sl(i){return Yn(i)>=0?i:[...i].reverse()}function BS(i,t){let e=i[t];if(ai(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>ne(o,e.points))&&n.push(sl(s.points))}return n}function ib(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ue(i,sl([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],m=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,ie),i.tri(v[0],v[2],v[3],M,M,M,void 0,ie),i.tri(v[0],v[2],v[1],M,M,M,void 0,ie),i.tri(v[0],v[3],v[2],M,M,M,void 0,ie)},g=new Z(a),x=new Z(Xt(o,.9)),y=new Z(Xt(o,.6));m([p(s,1),b(s,1),b(s,-1),p(s,-1)],g),m([p(r,1),b(r,1),b(r,-1),p(r,-1)],y),m([p(r,1),b(r,1),b(s,1),p(s,1)],x),m([p(r,-1),b(r,-1),b(s,-1),p(s,-1)],x),m([p(r,1),p(r,-1),p(s,-1),p(s,1)],x),m([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function sb(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=$r(e,s),l=(x,y)=>a-Ka(e,s,x,y),c=a-(s.type==="pool"?0:s.slope??0),h=ai(s.type)&&s.height?s.height:lo[s.type],u={...OS[s.type],top:h},f=sl(s.points),d=Xt(u.edge,u.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let y=0;y<f.length;y++){if(y===p)continue;let v=f[y],M=f[(y+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,ie)}},m=n??i,g=new Z(n?1734832:u.color);switch(s.type){case"pool":{let x=new Z(u.side),y=new Z(Xt(u.side,.55)),v=new Z(932440),M=zu(e,s),S=ku(e,s),A=j0(e,s);for(let[_,E,w]of pn(f)){let T=f[_],I=f[E],D=f[w];(n?m:i).tri([T[0],M,T[1]],[D[0],M,D[1]],[I[0],M,I[1]],g,g,g,void 0,ie),i.tri([T[0],A,T[1]],[D[0],A,D[1]],[I[0],A,I[1]],v,v,v,void 0,ie)}for(let _=0;_<f.length;_++){let E=f[_],w=f[(_+1)%f.length];i.tri([w[0],A,w[1]],[w[0],S,w[1]],[E[0],S,E[1]],y,x,x,void 0,ie),i.tri([w[0],A,w[1]],[E[0],S,E[1]],[E[0],A,E[1]],y,x,y,void 0,ie)}if(!s.above&&hd(e,s)){let _=new Z(660258),E=new Z(396054),w=A-.2,T=Math.min(a,S);for(let I=0;I<f.length;I++){let D=f[I],C=f[(I+1)%f.length];i.tri([D[0],w,D[1]],[D[0],T,D[1]],[C[0],T,C[1]],E,_,_,void 0,ie),i.tri([D[0],w,D[1]],[C[0],T,C[1]],[C[0],w,C[1]],E,_,E,void 0,ie)}for(let[I,D,C]of pn(f)){let P=f[I],R=f[D],N=f[C];i.tri([P[0],w,P[1]],[R[0],w,R[1]],[N[0],w,N[1]],E,E,E,void 0,ie)}if(s.outline!==!1)for(let I=0;I<f.length;I++){let D=f[I],C=f[(I+1)%f.length];t.seg([D[0],w,D[1]],[C[0],w,C[1]],Xt(u.edge,u.edgeAlpha*.35),ie),t.seg([D[0],w,D[1]],[D[0],T,D[1]],Xt(u.edge,u.edgeAlpha*.25),ie)}}if(S>a+.02){let _=new Z(2044240),E=new Z(1187123);for(let w=0;w<f.length;w++){let T=f[w],I=f[(w+1)%f.length];i.tri([T[0],a,T[1]],[T[0],S,T[1]],[I[0],S,I[1]],E,_,_,void 0,ie),i.tri([T[0],a,T[1]],[I[0],S,I[1]],[I[0],a,I[1]],E,_,E,void 0,ie)}b(()=>a+.005)}if(b(()=>S),b(()=>M+.005),s.outline!==!1)for(let _=0;_<f.length;_++){let E=f[_],w=f[(_+1)%f.length];t.seg([E[0],A+.005,E[1]],[w[0],A+.005,w[1]],Xt(u.edge,u.edgeAlpha*.4),ie)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let y=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),S=Math.max(1,Math.round(M/2)),A=p>=0&&x===p-1?S:S-1;for(let _=0;_<=A;_++){let E=_/S,w=y[0]+(v[0]-y[0])*E,T=y[1]+(v[1]-y[1])*E,I=l(w,T);Ue(i,sl([[w-.04,T-.04],[w+.04,T-.04],[w+.04,T+.04],[w-.04,T+.04]]),I,I+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([y[0],l(y[0],y[1])+_*u.top,y[1]],[v[0],l(v[0],v[1])+_*u.top,v[1]],d,ie)}break}case"pergola":{let x=u.top;for(let[y,v]of f){let M=l(y,v);Ue(i,sl([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+x,u.side,u.color)}for(let y=0;y<f.length;y++){if(y===p)continue;let v=f[y],M=f[(y+1)%f.length],S=l(v[0],v[1])+x;if(ib(i,v,M,.12,S-.16,S,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let A=l(v[0],v[1]),_=l(M[0],M[1]);t.seg([v[0],A+.25,v[1]],[M[0],_+x-.25,M[1]],d,ie),t.seg([M[0],_+.25,M[1]],[v[0],A+x-.25,v[1]],d,ie)}}if(ag(f)){let y=lg(f),v=y.x1-y.x0,M=y.z1-y.z0,S=v>=M,A=S?v:M,_=Math.max(1,Math.round(A/.6));for(let E=1;E<_;E++){let w=(S?y.x0:y.z0)+A*E/_,T=S?[w,y.z0+.06]:[y.x0+.06,w],I=S?[w,y.z1-.06]:[y.x1-.06,w],D=l(T[0],T[1])+x;ib(i,T,I,.06,D-.04,D+.08,u.side,u.color,l(I[0],I[1])-l(T[0],T[1]))}}b((y,v)=>l(y,v)+x+.004);break}case"balcony":{Ue(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let y=s.height&&s.height>.3?s.height:1,v=Xt(9417983,.42),M=Xt(3662079,.55);for(let S=0;S<f.length;S++){let A=f[S],_=f[(S+1)%f.length];if(US(e,A,_))continue;let E=Math.hypot(_[0]-A[0],_[1]-A[1]),w=a+u.top;t.seg([A[0],w+y,A[1]],[_[0],w+y,_[1]],M,ie),t.seg([A[0],w+.1,A[1]],[_[0],w+.1,_[1]],v,ie);let T=Math.max(1,Math.round(E/.12));for(let I=0;I<=T;I++){let D=I/T,C=A[0]+(_[0]-A[0])*D,P=A[1]+(_[1]-A[1])*D;t.seg([C,w,P],[C,w+y,P],I===0||I===T?M:v,ie)}}break}default:{let x=(v,M)=>l(v,M)+u.top,y=BS(r,o);if(Ue(i,f,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let S=v[M],A=v[(M+1)%v.length];t.seg([S[0],x(S[0],S[1])+.004,S[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,ie)}}}})}var eh=Math.PI/180,kS=1.13,zS=1.72,kd=.025,es=.07,ob=.25;function ab(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Ei(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},p=(b,m,g,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:m,eu:g,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&p(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var zd="ground";function vo(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function lb(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=vo(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Nu(s,o,a)):t.base??0;return{key:zd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function VS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function is(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>GS(x,Yu(i,x,x.overhang??t.overhang)));let e=VS(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(y=>y[0])),r=e.rooms.flatMap(x=>x.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=e.elevation+e.height;if(t.type==="flat")return[cb("main",null,o,l,a,c,h+ob)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*eh),b=(x,y,v)=>f?[x,h+v,(l+c)/2+y]:[(o+a)/2+y,h+v,x],[m,g]=f?[o,a]:[l,c];return[-1,1].map(x=>th(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(m,x*d,0),b(g,x*d,0),b(m,0,p),t.pitch,()=>[0,g-m]))}function GS(i,t){let e=wn(i),n=_n(i),r=(y,v,M)=>{let[S,A]=e.at(y,v);return[S,M,A]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let y=e.at(a,-s),v=e.at(l,e.w+o);return[cb(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+ob)]}if(i.shape==="pent")return[th(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=qu(i),u=h?Md(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,m=f?e.u0+p-a:0,g=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let y=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(th(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[m*(v/y),c-g*(v/y)]))}if(e.w-n.vr>.3){let y=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(th(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[g*(v/y),c-m*(v/y)]))}if(f||d){let y=n.y(-s),v=n.y(e.w+o),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,y),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,y),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[S,A,_,E,w]of M){let T=HS(S,i.id,A,_,E,w);T&&x.push(T)}}return x}function HS(i,t,e,n,r,s){let o=ol(ns(r,n));if(o<.3)return null;let a=Tr(ns(r,n)),l=ns(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ol(h);if(u<.3)return null;let f=Tr(h),d=Tr(fb(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Tr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/eh;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:b,span:g=>{let x=Math.min(1,Math.max(0,g/u));return[c*x,o-(o-c)*x]},facing:[p[0],p[2]]}}function th(i,t,e,n,r,s,o,a){let l=Tr(ns(r,n)),c=Tr(ns(s,n)),h=Tr(fb(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=Tr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:ol(ns(r,n)),ls:ol(ns(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function cb(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ub(i){let t=i.module_w||kS,e=i.module_h||zS;return i.portrait===!1?[e,t]:[t,e]}function WS(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function hb(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*eh:i.wall?Math.min(90,Math.max(0,t.tilt??0))*eh:0}function XS(i,t){let[,e]=ub(t),n=hb(i,t);return i.wall?e*Math.cos(n)+kd:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+kd}function al(i,t,e=!1){let[n,r]=ub(t),s=[],o=hb(i,t),a=r*Math.cos(o),l=XS(i,t),c=WS(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,m,g)=>[i.o[0]+i.eu[0]*b+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*b+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*b+i.es[2]*m+i.n[2]*g],p=(b,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[g,x]=i.span(m);return b>=g-1e-6&&b<=x+1e-6};return c.forEach((b,m)=>{let g=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let y=`${m}:${x}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(x+g)*(n+kd),S=t.v+m*l,A=M+n,_=S+(i.flat||i.wall?a:r);if(f){if(!(p((M+A)/2,S)&&p((M+A)/2,_)))continue}else if(![[M,S],[A,S],[A,_],[M,_]].every(([C,P])=>p(C,P)))continue;if(i.wall&&o>.001){let C=es+r*Math.sin(o),[P,R]=t.flip?[C,es]:[es,C],N=[d(M,S,P),d(A,S,P),d(A,_,R),d(M,_,R)],F=t.flip?S:_,O=[M+.05,A-.05].map(k=>[d(k,F,0),d(k,F,C)]);s.push({corners:N,posts:O,cell:y,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,S,es),d(A,S,es),d(A,_,es),d(M,_,es)],posts:[],cell:y,skipped:v});continue}let E=.15,w=E+r*Math.sin(o),[T,I]=t.flip?[_,S]:[S,_],D=[d(M,T,E),d(A,T,E),d(A,I,w),d(M,I,w)];s.push({corners:D,posts:[M+.05,A-.05].flatMap(C=>[[d(C,T,0),d(C,T,E)],[d(C,I,0),d(C,I,w)]]),cell:y,skipped:v})}}),s}function ns(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ol(i){return Math.hypot(i[0],i[1],i[2])}function Tr(i){let t=ol(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function fb(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var qS=.78,YS=1.18;function $S(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||qS,module_h:i.h||YS}}function nh(i,t){let e=al(i,$S(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function ih(i,t,e){let n=t?nh(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>ne([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var ll=1712952,cl=2239816,gb=1318193,Ar=Xt(3662079,.9),yo=Xt(5995775,.45),hn=.14,ZS=9427199,KS=13226982,jS=14936565,JS={black:{glass:new Z(329483),edge:Xt(9082544,.32),cells:Xt(2766160,.22)},blue:{glass:new Z(1386842),edge:Xt(10467583,.55),cells:Xt(4025599,.35)}},QS=Xt(13226982,.5),tT=Xt(13226982,.85),eT=Xt(16757575,.95),db=new Z(2845583),pb=new Z(1713986),nT=new Z(3662079).multiplyScalar(.35),mb=new Z(4871791);function iT(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function bb(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:oT(i),r=e?.type==="custom"?aT(i,e.sections??[],e.overhang):n?[n]:[];return sT(i,r),rT(i,r,t),r}function rT(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(is(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?nh(o,s):null;if(!o||!a)continue;let l=o.section?t.find(R=>R.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?ih(i,o,s):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=R=>[R[0],R[1]-u,R[2]],[d,p,b,m]=a.map(f),g=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),y=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new re,lines:new Ve,glass:new re}).get(h.id):x?l.win??={solid:new re,lines:new Ve,glass:new re}:l.winRoof??={solid:new re,lines:new Ve,glass:new re},v=(R,N)=>[R[0]+o.n[0]*N,R[1]+o.n[1]*N,R[2]+o.n[2]*N],M=(R,N,F)=>[R[0]+(N[0]-R[0])*F,R[1]+(N[1]-R[1])*F,R[2]+(N[2]-R[2])*F],S=g.open>.02||g.tilt>.02?eT:tT,A=[d,p,b,m].map(R=>v(R,.06)),_=[d,p,b,m].map(R=>v(R,-.02));for(let R=0;R<4;R++){y.lines.seg(A[R],A[(R+1)%4],S);let N=(R+1)%4;y.solid.tri(_[R],_[N],A[N],mb),y.solid.tri(_[R],A[N],A[R],mb)}let E=(g.open>.02?30*Math.min(1,g.open):g.tilt>.5?12:0)*ae,w=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),T=R=>{let N=o.es;return[R[0]-N[0]*w*Math.cos(E)+o.n[0]*w*Math.sin(E),R[1]-N[1]*w*Math.cos(E)+o.n[1]*w*Math.sin(E),R[2]-N[2]*w*Math.cos(E)+o.n[2]*w*Math.sin(E)]},I=v(m,.065),D=v(b,.065),C=T(I),P=T(D);y.glass.tri(C,P,D,db),y.glass.tri(C,D,I,db);for(let[R,N]of[[C,P],[P,D],[D,I],[I,C]])y.lines.seg(R,N,S);if(g.cover>.02){let R=Math.min(1,g.cover),N=v(M(I,C,R),.01),F=v(M(D,P,R),.01),O=v(I,.01),k=v(D,.01);y.solid.tri(N,F,k,pb),y.solid.tri(N,k,O,pb);let V=Math.max(1,Math.round(w*R/.05));for(let q=1;q<=V;q++){let z=q/V;y.lines.seg(v(M(O,N,z),.004),v(M(k,F,z),.004),nT)}}}}function sT(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(is(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Vd(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Vd(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=JS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of al(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let p=(g,x=.004)=>[g[0]+e.n[0]*x,g[1]+e.n[1]*x,g[2]+e.n[2]*x],b=(g,x,y)=>[g[0]+(x[0]-g[0])*y,g[1]+(x[1]-g[1])*y,g[2]+(x[2]-g[2])*y],m=[h,u,f,d].map(g=>p(g));for(let g=0;g<4;g++)t.seg(m[g],m[(g+1)%4],o.edge);for(let g=1;g<a;g++)t.seg(p(b(h,u,g/a)),p(b(d,f,g/a)),o.cells);for(let g=1;g<l;g++)t.seg(p(b(h,d,g/l)),p(b(u,f,g/l)),o.cells);for(let[g,x]of c.posts)t.seg(s(g),s(x),QS)}}function oT(i){let t=i.settings.roof,e=iT(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(w=>w.points.map(T=>T[0])),r=e.rooms.flatMap(w=>w.points.map(T=>T[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new re,u=new Ve;if(t.type==="flat"){Ue(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,ll,cl,{bottom:!0});let w=.252;for(let[T,I]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([T[0],w,T[1]],[I[0],w,I[1]],Ar),u.seg([T[0],0,T[1]],[I[0],0,I[1]],yo);return{floor:e,base:e.height,solid:h,lines:u,glass:new re}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,b=p*Math.tan(t.pitch*ae),m=(w,T,I)=>d?[w,I,(l+c)/2+T]:[(o+a)/2+T,I,w],[g,x]=d?[o,a]:[l,c],y=new Z(cl),v=new Z(ll),M=(w,T,I,D,C)=>{h.tri(w,T,I,C),h.tri(w,I,D,C)};for(let w of[-1,1]){M(m(g,w*p,0),m(x,w*p,0),m(x,0,b),m(g,0,b),y),M(m(g,w*p,-hn),m(g,0,b-hn),m(x,0,b-hn),m(x,w*p,-hn),v),M(m(g,w*p,-hn),m(x,w*p,-hn),m(x,w*p,0),m(g,w*p,0),v);for(let T of[g,x])M(m(T,w*p,-hn),m(T,w*p,0),m(T,0,b),m(T,0,b-hn),v);u.seg(m(g,w*p,0),m(x,w*p,0),yo);for(let T of[g,x])u.seg(m(T,w*p,0),m(T,0,b),yo)}let S=t.overhang,A=new Z(gb),_=p-S,E=_*Math.tan(t.pitch*ae);for(let w of[g+S,x-S])h.tri(m(w,-_,-hn),m(w,_,-hn),m(w,0,E-hn),A),h.tri(m(w,_,-hn),m(w,-_,-hn),m(w,0,E-hn),A);return u.seg(m(g,0,b+.004),m(x,0,b+.004),Ar),{floor:e,base:e.height,solid:h,lines:u,glass:new re}}function aT(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(is(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=Kr(t,l),h=c?null:Tg(t,l),u=c?_d(c,l):h?Eg(l,h):l,f=Yu(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?wg(u,jr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),h=vg(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new re,lines:new Ve,glass:new re,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Kr(t,v)===l).flatMap(v=>xg(l,v));for(let v of i.settings.roof.windows??[]){let M=s.get(v.face),S=M&&M.section===l.id?nh(M,v):null;if(!S)continue;let A=S.map(_=>Pi(l,_[0],_[2]));b.push({u0:Math.min(...A.map(_=>_[0])),u1:Math.max(...A.map(_=>_[0])),v0:Math.min(...A.map(_=>_[1])),v1:Math.max(...A.map(_=>_[1]))})}let m=c.drawn,g=c.junction?1-c.junction.end:null;if(d){let v=wn(m),M=jr(d,{u0:0,u1:0,a:0,b:0}),S=A=>{let[_,E]=v.at(A,v.w/2),[w,T]=Pi(d,_,E);return tl(M,w,T)??_n(d).y(T)};g=S(v.u0)<=S(v.u1)?0:1}let x=o.filter(v=>Sg(t,l,v)),y=x.length?{covers:Td(m,x.flatMap(v=>a.get(v).covers)),lines:Td(m,x.filter(v=>o.indexOf(v)>o.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[wn(l).u0,wn(l).u1]:null}:null;lT(f.solid,f.lines,m,c.ov,h.elevation,f.glass,p,b,g,y)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function lT(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let h=wn(e),u=_n(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,m=h.u0-Math.max(0,f.u0),g=h.u1+Math.max(0,f.u1),x=(R,N,F)=>{let[O,k]=h.at(R,N);return[O,F-r,k]},y=new Z(cl),v=new Z(ll),M=new Z(gb),S=(R,N)=>{for(let F=1;F+1<R.length;F++)i.tri(R[0],R[F],R[F+1],N)},A=[],_=[],E=[],w=[null,null],T=[];if(e.shape==="flat"||e.shape==="parapet"){let R=e.eave_a,N=e.shape==="parapet",F=e.points&&e.points.length>=3?mg(e,N?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):N?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(m,-d),h.at(g,-d),h.at(g,b+p),h.at(m,b+p)];Ue(i,F,R-r,R-r+.25,ll,cl,{bottom:!0});for(let O=0;O<F.length;O++){let k=F[O],V=F[(O+1)%F.length];t.seg([k[0],R-r+.252,k[1]],[V[0],R-r+.252,V[1]],Ar),t.seg([k[0],R-r,k[1]],[V[0],R-r,V[1]],yo)}if(N){let O=z=>li(z)>=0?z:[...z].reverse(),k=O(F),V=Xu(k,-.2),q=k.length;for(let z=0;z<q;z++){let $=O([k[z],k[(z+1)%q],V[(z+1)%q],V[z]]);Ue(i,$,R-r+.25,R-r+.65,ll,cl),t.seg([k[z][0],R-r+.652,k[z][1]],[k[(z+1)%q][0],R-r+.652,k[(z+1)%q][1]],Ar),t.seg([V[z][0],R-r+.652,V[z][1]],[V[(z+1)%q][0],R-r+.652,V[(z+1)%q][1]],Ar)}}}else{let R=jr(e,f);A=R.faces;for(let N of a)A=A.flatMap(F=>wd(F,N));if(_=R.rim,E=R.ridges,w=R.gables,c){for(let N of A)for(let F of c.lines){let O=_g(N,F.poly);if(O)for(let[k,V]of Sd(O[0],O[1],c.covers.filter(q=>q!==F)))T.push([k,V])}A=A.flatMap(N=>Mg(N,c.covers))}}let I=!!e.open,D=new Z(ZS);for(let R of A){if(I){for(let N=1;N+1<R.length;N++)s.tri(x(R[0][0],R[0][1],R[0][2]),x(R[N][0],R[N][1],R[N][2]),x(R[N+1][0],R[N+1][1],R[N+1][2]),D);continue}S(R.map(([N,F,O])=>x(N,F,O)),y),S(R.map(([N,F,O])=>x(N,F,O-hn)),v)}let C=(R,N)=>c?Sd(R,N,c.covers):[[R,N]];for(let R=0;R<_.length;R++)for(let[[N,F,O],[k,V,q]]of C(_[R],_[(R+1)%_.length]))I||S([x(N,F,O),x(k,V,q),x(k,V,q-hn),x(N,F,O-hn)],v),t.seg(x(N,F,O),x(k,V,q),I?Ar:yo);if(I){cT(i,t,h,u,f,x,r);return}for(let[R,N]of E)for(let[[F,O,k],[V,q,z]]of C(R,N))t.seg(x(F,O,k+.004),x(V,q,z+.004),Ar);for(let[[R,N,F],[O,k,V]]of T)t.seg(x(R,N,F+.004),x(O,k,V+.004),Ar);let P=e.base;if(!o){for(let R of[0,1]){let N=w[R];if(!N||l!==null&&l!==R)continue;let F=uT(N,P-hn),O=R===0?h.u0:h.u1;F.length>=3&&S(F.map(([k,V])=>x(O,k,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[R,N]=c?.wallU??[h.u0,h.u1];for(let F of[0,b]){let O=u.y(F)-hn;O>P+.02&&S([x(R,F,P),x(N,F,P),x(N,F,O),x(R,F,O)],M)}}else if(e.eave_a>P+.02)for(let[R,N,F,O]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])S([x(R,N,P),x(F,O,P),x(F,O,e.eave_a),x(R,N,e.eave_a)],M)}}function cT(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(g,x,y,v,M,S)=>{let A=[e.at(g,y),e.at(x,y),e.at(x,v),e.at(g,v)],_=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ue(i,_<0?[...A].reverse():A,M-o,S-o,KS,jS,{bottom:!0})},b=o;for(let[g,x]of[[0,h],[a,u]]){if(!x)continue;let y=n.y(g)-.03,v=g===0?0:a-l;p(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,g,y-c),s(e.u1,g,y-c),yo)}for(let[g,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,S=Math.min(n.y(v),n.y(M))-.03;p(g,g+l,v,M,S-c,S)}let m=[];for(let[g,x]of[[0,h],[a-l,u]]){if(!x)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let S=e.u0+y*M/v;M===0&&!f||M===v&&!d||m.push([S,g])}}if(!h&&!u)for(let g of[e.u0,e.u1-l])(g===e.u0&&f||g!==e.u0&&d)&&m.push([g,a/2-l/2]);for(let[g,x]of m){let y=n.y(x+l/2)-.03-c;p(g,g+l,x,x+l,b,y)}}function uT(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ul={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},xb={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},mn=.2,hT=-.06,fT=.01,hl=8,rh=.42,Gd=.42;function _b(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Ei(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(P,R,N,F)=>{let O=F?.slope?Math.min(N,dd(F.slope,P,R)):N,k=s?s(P,R):null;return k===null?O:Math.max(.05,Math.min(O,k))},c=(P,R)=>{let N=s?s(P,R):null;return N!==null&&N<hT},h=(P,R,N,F,O,k)=>{if(!s&&!k?.slope)return O;let V=O,q=Math.max(2,Math.ceil((F-N)/.25)+1);for(let z=0;z<q;z++){let $=N+(F-N)*z/(q-1);V=Math.min(V,l(P[0]+R[0]*$,P[1]+R[1]*$,O,k))}return V},u=new re(!0,!0),f=[],d=new Ve,p=[];for(let P of i.rooms){if(P.points.length<3)continue;let R=sh(P.points),N=xb[P.floor_material]??xb.wood,F=new Z(N.color),O=n.flatMap(J=>{if(Lg(J,R))return[J];if(!Pg(J))return[];let ot=go(R,J);return ot.length>=3&&Math.abs(li(ot))>.01?[sh(ot)]:[]}),k=Ig(O).map(J=>Fg(sh(J),.003));p.push(...k);let V=[...R,...k.flat()],q=u.count;for(let[J,ot,H]of pn(R,k)){let X=V[J],et=V[ot],st=V[H];u.tri([X[0],0,X[1]],[st[0],0,st[1]],[et[0],0,et[1]],F,F,F,[X[0],X[1],st[0],st[1],et[0],et[1]],ie,N.tile)}f.push({roomId:P.id,start:q,end:u.count,color:N.color});let z=new Z(ul.slab),$=J=>{for(let ot=0;ot<J.length;ot++){let H=J[ot],X=J[(ot+1)%J.length];u.tri([H[0],-mn,H[1]],[H[0],0,H[1]],[X[0],0,X[1]],z),u.tri([H[0],-mn,H[1]],[X[0],0,X[1]],[X[0],-mn,X[1]],z)}};$(R);for(let J of k){$([...sh(J)].reverse());for(let ot=0;ot<J.length;ot++){let H=J[ot],X=J[(ot+1)%J.length];d.seg([H[0],.006,H[1]],[X[0],.006,X[1]],gr),d.seg([H[0],-mn,H[1]],[X[0],-mn,X[1]],Vi)}}}let b=new Map,m=[],g=new Map,x=new Map;for(let P of o){if(!P.free)continue;let R=hg(P,i.rooms);R!==null&&x.set(P,R)}for(let P of o){let R="interior",N=null,F=x.get(P);if(P.exterior||F!==void 0){let k=P.b[0]-P.a[0],V=P.b[1]-P.a[1],q=Math.hypot(k,V)||1,z=F===!1?-1:1,$=[z*V/q,-z*k/q],J=(Math.round(Math.atan2($[1],$[0])/(2*Math.PI)*hl)%hl+hl)%hl;R=`s${J}`;let ot=J/hl*2*Math.PI;N=[Math.cos(ot),Math.sin(ot)]}let O=b.get(R);O===void 0&&(O=m.length,b.set(R,O),m.push(N)),g.set(P,O)}let y=new Map,v=[];for(let P of i.openings){let R=fo(P,i.rooms,i.walls??[]);if(!R)continue;let N=po(o,P,R);if(!N)continue;let{wall:F,s:O}=N,k=ah([F.b[0]-F.a[0],F.b[1]-F.a[1]]),V=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),q=O-P.width/2<-1e-6?md(o,F,!1):null,z=O+P.width/2>V+1e-6?md(o,F,!0):null,$=le=>le?Math.hypot(le.b[0]-le.a[0],le.b[1]-le.a[1]):0,J=-$(q),ot=V+$(z),H=Math.min(P.width,ot-J),X=Math.max(J,Math.min(ot-H,O-H/2)),et=R.room.points,st=x.get(F),tt=F.free?st??k[0]*(et[1][0]-et[0][0])+k[1]*(et[1][1]-et[0][1])>0:F.exterior||F.roomLeft===P.room_id,ct=[-k[1],k[0]],pt=tt?ct:[-ct[0],-ct[1]],ft=Math.min(h(F.a,k,X,X+H,fl(F,i.height),F)-.02,P.sill+P.height),yt=Math.max(0,Math.min(P.sill,ft-.1)),Yt=[pt[1],-pt[0]],wt=k[0]*Yt[0]+k[1]*Yt[1]>0,xt={opening:P,bucket:g.get(F),start:[F.a[0]+k[0]*X,F.a[1]+k[1]*X],axis:k,width:H,toRoom:pt,faceRoom:tt?F.left:F.right,faceOut:tt?F.right:F.left,sill:yt,top:ft,hingeAtStart:P.hinge==="left"===wt,exterior:F.exterior||st!==void 0};v.push(xt);let Kt=y.get(F);Kt||y.set(F,Kt=[]),Kt.push({s0:X,s1:X+H,sill:yt,top:ft,info:xt});for(let le of[q,z]){if(!le)continue;let fe=be=>(F.a[0]+k[0]*be-le.a[0])*k[0]+(F.a[1]+k[1]*be-le.a[1])*k[1],de=Math.max(0,fe(X)),Y=Math.min($(le),fe(X+H));if(Y-de<1e-4)continue;let Be=y.get(le);Be||y.set(le,Be=[]),Be.push({s0:de,s1:Y,sill:yt,top:ft,info:xt,cont:!0})}}let M=Math.min(i.cut_height,i.height),S=new re;for(let P of o){let R=g.get(P),N=ah([P.b[0]-P.a[0],P.b[1]-P.a[1]]),F=(y.get(P)??[]).sort((H,X)=>H.s0-X.s0),O=fl(P,i.height),k=[],V=[-1/0,...new Set(F.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,X)=>H-X);for(let H=0;H+1<V.length;H++){let X=V[H],et=V[H+1];if(et-X<1e-6)continue;let st=Number.isFinite(X)&&Number.isFinite(et)?(X+et)/2:Number.isFinite(X)?X+1:et-1,tt=F.filter(ft=>ft.s0<st&&ft.s1>st).map(ft=>[ft.sill,ft.top]).sort((ft,yt)=>ft[0]-yt[0]),ct=[],pt=-mn;for(let[ft,yt]of tt)ft>pt+1e-4&&ct.push([pt,ft<1e-4?-fT:ft]),pt=Math.max(pt,yt);O>pt+1e-4&&ct.push([pt,O]),k.push({t0:X,t1:et,ranges:ct})}let q=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),z=(s||P.slope)&&h(P.a,N,0,q,O,P)<O-.001,$=z?k.flatMap(H=>{let X=Math.max(H.t0,-.5),et=Math.min(H.t1,q+.5),st=Math.max(1,Math.ceil((et-X)/.3));return Array.from({length:st},(tt,ct)=>({t0:ct===0?H.t0:X+(et-X)*ct/st,t1:ct===st-1?H.t1:X+(et-X)*(ct+1)/st,ranges:H.ranges,inner0:ct>0,inner1:ct<st-1}))}):k.map(H=>({...H,inner0:!1,inner1:!1})),J=H=>(H[0]-P.a[0])*N[0]+(H[1]-P.a[1])*N[1],ot=H=>{if(!s)return[H];let X=Hd(P.footprint,P.a,N,H.t0,H.t1),et=X.filter(([pt,ft])=>c(pt,ft)).length;if(et===0)return[H];if(et===X.length)return[];let st=Math.max(H.t0,-.5),tt=Math.min(H.t1,q+.5),ct=Math.max(1,Math.ceil((tt-st)/.05));return Array.from({length:ct},(pt,ft)=>({t0:ft===0?H.t0:st+(tt-st)*ft/ct,t1:ft===ct-1?H.t1:st+(tt-st)*(ft+1)/ct,ranges:H.ranges,inner0:ft>0||H.inner0,inner1:ft<ct-1||H.inner1})).filter(pt=>!Hd(P.footprint,P.a,N,pt.t0,pt.t1).every(([ft,yt])=>c(ft,yt)))};for(let H of z?$.flatMap(ot):$){let X=Hd(P.footprint,P.a,N,H.t0,H.t1);if(X.length<3)continue;let et=(ct,pt)=>Math.abs(J(ct)-pt)<1e-4,st=(ct,pt)=>H.inner0&&et(ct,H.t0)&&et(pt,H.t0)||H.inner1&&et(ct,H.t1)&&et(pt,H.t1),tt=z?Math.min(...X.map(([ct,pt])=>l(ct,pt,O,P))):O;for(let[ct,pt]of H.ranges){let ft=Math.min(pt,z?Math.max(...X.map(([xt,Kt])=>l(xt,Kt,O,P))):pt);if(ft-ct<1e-4||tt-ct<.01)continue;let yt=ct>.01,Yt=z&&pt>tt,wt=(xt,Kt)=>Math.min(pt,l(xt,Kt,O,P));if(ct<M-1e-6){let xt=ft>M+1e-6?_0+R:br+R,Kt=Yt&&tt<M?(le,fe)=>Math.min(M,wt(le,fe)):Math.min(ft,M);Ue(S,X,ct,Kt,ul.wall,ul.wallTop,{aoFrom:0,bottom:yt,fold:br+R,topFold:xt,skipSide:st})}ft>M+1e-6&&tt>M+1e-6&&Ue(S,X,Math.max(ct,M),Yt?wt:ft,ul.wall,ul.wallTop,{aoFrom:0,fold:R,bottom:yt&&ct>=M,skipSide:st})}}}let A=o.flatMap(P=>P.footprint),_=mT(o,A),E=new Ve;E.p.push(...d.p),E.c.push(...d.c),E.f.push(...d.f);let w=(P,R)=>(y.get(P)??[]).filter(R);for(let P of _.edges){let R=g.get(P.wall);for(let[F,O]of oh(P,w(P.wall,k=>k.sill<=.005)))E.seg([F[0],.004,F[1]],[O[0],.004,O[1]],M0);for(let[F,O]of oh(P,w(P.wall,k=>k.sill<M&&k.top>M)))E.seg([F[0],M,F[1]],[O[0],M,O[1]],Zf,Au+R);let N=fl(P.wall,i.height);for(let[F,O]of oh(P,w(P.wall,k=>k.top>=N-.021))){if(!s&&!P.wall.slope){E.seg([F[0],N,F[1]],[O[0],N,O[1]],gr,N<=M+1e-6?br+R:R);continue}let k=Math.max(1,Math.ceil(Math.hypot(O[0]-F[0],O[1]-F[1])/.3));for(let V=0;V<k;V++){let q=[F[0]+(O[0]-F[0])*V/k,F[1]+(O[1]-F[1])*V/k],z=[F[0]+(O[0]-F[0])*(V+1)/k,F[1]+(O[1]-F[1])*(V+1)/k];if(c(q[0],q[1])&&c(z[0],z[1]))continue;let $=l(q[0],q[1],N,P.wall),J=l(z[0],z[1],N,P.wall);E.seg([q[0],$,q[1]],[z[0],J,z[1]],gr,Math.max($,J)<=M+1e-6?br+R:R)}}}let T=(P,R)=>l(R[0],R[1],fl(P,i.height),P);for(let P of _.corners){if(c(P.p[0],P.p[1]))continue;let R=P.walls.reduce((F,O)=>T(O,P.p)>T(F,P.p)+1e-6?O:F,P.wall),N=l(P.p[0],P.p[1],fl(R,i.height),R);E.segSplit([P.p[0],.004,P.p[1]],[P.p[0],N,P.p[1]],Vi,Math.min(M,N),g.get(R))}for(let P of _.joints){let[R,N]=P.walls,F=[T(R,P.a),T(N,P.a)],O=[T(R,P.b),T(N,P.b)];if(Math.abs(F[0]-F[1])<.01&&Math.abs(O[0]-O[1])<.01)continue;let k=F[1]+O[1]>=F[0]+O[0]?N:R,V=g.get(k),q=Math.max(...F),z=Math.max(...O);E.seg([P.a[0],q,P.a[1]],[P.b[0],z,P.b[1]],gr,Math.max(q,z)<=M+1e-6?br+V:V);for(let[$,J]of[[P.a,F],[P.b,O]]){let ot=Math.min(...J),H=Math.max(...J);H-ot>.01&&E.segSplit([$[0],ot,$[1]],[$[0],H,$[1]],Vi,M,V)}}for(let P of y.values())for(let R of P)R.cont||dT(E,R,M);let I=gT(_.edges,i.rooms,y),D=new re;sb(S,E,i,D);for(let P of r)Vd(S,E,P.face,P.field,i.elevation);let C=[];for(let P of i.furniture){if(ig(P.type))continue;let R=S.count,N=E.p.length/6,F=P,O=Mn(i,F);if(Vu.has(F.type)){let k=Gu(o,F,i.height,O);F={...F,x:k.x,z:k.z},O=k.y}Ju(S,E,I,F,O),O+F.h>M+.05&&(w0(S,R,M,Kf),S0(E,N,M,Kf)),C.push({id:F.id,start:R,end:S.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:S.geometry(),water:D.geometry(),lines:E.geometry(),shadow:I.geometry(),buckets:m,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(P=>g.get(P)),furnitureTris:C,roofUnder:s}}function dT(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:ie,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Vi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Vi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Vi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Vi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Vi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Zf,Au+r)}function Hd(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=vb(o,a=>s(a)-n)),Number.isFinite(r)&&(o=vb(o,a=>r-s(a))),o}function vb(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var yb=i=>Math.round(i*1e3),dl=i=>`${yb(i[0])},${yb(i[1])}`,Mb=(i,t)=>{let e=dl(i),n=dl(t);return e<n?`${e}|${n}`:`${n}|${e}`};function pT(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];dl(f)!==dl(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function mT(i,t){let e=i.map(h=>({wall:h,edges:pT(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=Mb(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let s=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&s.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let o=[],a=new Map,l=(h,u,f)=>{let d=dl(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Mb(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;o.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:o,corners:c,joints:s}}function oh(i,t){if(!t.length)return[[i.a,i.b]];let e=ah([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=ah([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function gT(i,t,e){let n=new re,r=new Z(Gd,Gd,Gd),s=new Z(1,1,1),o=.002;for(let a of i)for(let[l,c]of oh(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(g=>g.points.length>=3&&ne(p,g.points)))continue;let b=[l[0]+d[0]*rh,l[1]+d[1]*rh],m=[c[0]+d[0]*rh,c[1]+d[1]*rh];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[m[0],o,m[1]],r,s,s),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],r,s,r)}return n}function wb(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(yr),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(eg.has(s.type)||Re(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(yr);return[...e,...r]}function fl(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function ah(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function sh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var bT=new Z(1516340),xT=new Z(527897),Wd=new Z(1779256),pl=new Z(1120808),vT=new Z(4163256),Sb=new Z(5995161),yT=new Z(2240842),MT=new Z(1318704),_T=.35,Mo=.8,wT=.2,Tb=.1;function ST(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||ai(o.type)||!ne(e,o.points)||(r=Math.max(r,s.elevation+$r(s,o)+lo[o.type]-t.elevation));return r>n?r-n:0}function Ab(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Ad(i,t);if(!r)return null;let s=(p,b)=>co(p,b)-t.elevation,o=n&&r.some(([p,b])=>s(p,b)<-mn-.03);if(!o&&!Ed(i,t))return null;let a=t.height,l=-_T,c=(p,b)=>Math.min(a,co(p,b)-t.elevation),h=new re,u=new re,f=new Ve,d=(p,b,m,g,x,y,v,M)=>{let S=[b[0]-p[0],b[2]-p[2]];-S[1]*x[0]+S[0]*x[1]>0?(M.tri(p,b,m,y,y,v),M.tri(p,m,g,y,v,v)):(M.tri(p,m,b,y,v,y),M.tri(p,g,m,y,v,v))};for(let p=0;p<r.length;p++){let b=r[p],m=r[(p+1)%r.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<1e-4)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],y=[x[1],-x[0]],v=[(b[0]+m[0])/2+y[0]*.05,(b[1]+m[1])/2+y[1]*.05];ne(v,r)&&(y=[-y[0],-y[1]]);let M=(w,T=.012)=>[b[0]+x[0]*w+y[0]*T,b[1]+x[1]*w+y[1]*T],S=[];for(let w of e){if(w.opening.type!=="window"||!w.exterior||w.opening.well===!1)continue;let T=w.start[0]+w.axis[0]*(w.width/2)-w.toRoom[0]*w.faceOut,I=w.start[1]+w.axis[1]*(w.width/2)-w.toRoom[1]*w.faceOut,D=(T-b[0])*x[0]+(I-b[1])*x[1];Math.abs((T-b[0])*y[0]+(I-b[1])*y[1])>.08||D<-.05||D>g+.05||Rg(i,t,w.exterior,w.sill,[T,I])&&S.push({s0:Math.max(0,D-w.width/2-Tb),s1:Math.min(g,D+w.width/2+Tb),bottom:Math.max(l+.05,w.sill-wT),rim:w.opening.well_rim??0})}let A=new Set([0,g]);for(let w of S)A.add(w.s0),A.add(w.s1);let _=[...A].sort((w,T)=>w-T),E=[];for(let w=0;w<_.length-1;w++){let T=Math.max(1,Math.ceil((_[w+1]-_[w])/.5));for(let I=0;I<T;I++)E.push(_[w]+(_[w+1]-_[w])*I/T)}E.push(g);for(let w=0;w<E.length-1;w++){let T=E[w],I=E[w+1],D=S.find(q=>T>=q.s0-1e-6&&I<=q.s1+1e-6),C=M(T),P=M(I),R=c(C[0],C[1]),N=c(P[0],P[1]),F=D?Math.min(R,D.bottom):R,O=D?Math.min(N,D.bottom):N;if(F>l+.01||O>l+.01){let q=Math.min(F,l),z=Math.min(O,l);d([C[0],q,C[1]],[P[0],z,P[1]],[P[0],Math.max(O,l),P[1]],[C[0],Math.max(F,l),C[1]],y,xT,bT,h)}let k=s(C[0],C[1]),V=s(P[0],P[1]);if(o&&(k<-mn-.01||V<-mn-.01)&&d([C[0],Math.min(k,-mn),C[1]],[P[0],Math.min(V,-mn),P[1]],[P[0],-mn,P[1]],[C[0],-mn,C[1]],y,MT,yT,h),R>l||N>l||o&&(k<-mn||V<-mn)){let q=o?Math.min(k,Math.max(R,l)):Math.max(R,l),z=o?Math.min(V,Math.max(N,l)):Math.max(N,l);f.seg([C[0],q+.004,C[1]],[P[0],z+.004,P[1]],vT)}}for(let w of S){let T=M(w.s0,0),I=M(w.s1,0),D=[T[0]+y[0]*Mo,T[1]+y[1]*Mo],C=[I[0]+y[0]*Mo,I[1]+y[1]*Mo],P=[(T[0]+I[0]+D[0]+C[0])/4,(T[1]+I[1]+D[1]+C[1])/4],R=ST(i,t,P,c(P[0],P[1])),N=Math.max(w.rim,R>0?R+.02:0),F=$=>c($[0],$[1])+N,O=w.bottom,k=($,J)=>[$[0],J,$[1]];u.tri(k(T,O),k(I,O),k(C,O),pl),u.tri(k(T,O),k(C,O),k(D,O),pl);let V=($,J)=>{u.tri(k($,O),k(J,O),k(J,F(J)),pl,pl,Wd),u.tri(k($,O),k(J,F(J)),k($,F($)),pl,Wd,Wd)};V(T,D),V(I,C),V(D,C);let q=$=>[$[0],F($)+.01,$[1]];for(let[$,J]of[[T,I],[I,C],[C,D],[D,T]])f.seg(q($),q(J),Sb);let z=Math.max(3,Math.round((w.s1-w.s0)/.12));for(let $=1;$<z;$++){let J=$/z,ot=[T[0]+(I[0]-T[0])*J,T[1]+(I[1]-T[1])*J];f.seg(q(ot),q([ot[0]+y[0]*Mo,ot[1]+y[1]*Mo]),Sb)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var Eb=i=>Math.round(i*1e3)/1e3;function TT(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Rb(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&ne([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Yn(a)>=0?1:-1,c=yr({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=yr({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<.05)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],y=[-x[1]*l,x[0]*l],v=TT(i,o.id,b,m)?r/2:0,M=0;d.forEach((S,A)=>{let _=(S[0]-b[0])*x[0]+(S[1]-b[1])*x[1];if(_<-.01||_>g+.01)return;let E=(S[0]-b[0])*y[0]+(S[1]-b[1])*y[1]-v,w=c[A];(w[0]-b[0])*y[0]+(w[1]-b[1])*y[1]-v<-s||E<M&&(M=E)}),M<-1e-4&&(h-=y[0]*M,u-=y[1]*M)}}return[Eb(h),Eb(u)]}var AT=500,ET=1e3;function Pb(i,t){let e=t-i.timeStamp;return e>ET&&e<6e4}var Cb=.12,Ib=1.35,RT=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,lh=class{view={target:new W,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=RT(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Xd(this.view.phi+this.velocity.phi,Cb,Ib),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},AT)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Pb(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Xd(this.view.phi+c,Cb,Ib),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Pb(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Xd(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new W(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new W(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Xd(i,t,e){return Math.min(e,Math.max(t,i))}var hh=5,ch=512,Lb=.7,uh=class{projectors=new Map;loader=new kr;loggedIds="";depthMaterial=new Wt({colorWrite:!1,side:te});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Pe(ch,ch);a.depthTexture=new On(ch,ch),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new He(60,16/9,Lb,40),target:a,matrix:new jt,uniforms:{uProjMat:{value:new jt},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(hh),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=we;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,m]of o.overlays)l.has(b)||(m.parent?.remove(m),m.material.dispose(),o.overlays.delete(b));for(let b of n){let m=o.overlays.get(b.key);(!m||m.parent!==b.parent)&&(m&&(m.parent?.remove(m),m.material.dispose()),m=new bt(b.geometry,this.material(o,b.masks)),m.renderOrder=2.5,m.frustumCulled=!1,b.parent.add(m),o.overlays.set(b.key,m)),m.geometry!==b.geometry&&(m.geometry=b.geometry),m.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let h=o.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/o.aspect)*180/Math.PI,h.aspect=o.aspect,h.far=a.reach,h.near=Lb,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),o.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let m of b.overlays.values())m.visible&&f.push(m);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Wt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?qn(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Fb(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Db(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=Fb(s,o),c=Fb(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],p=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let b=0;b<=e;b++){let m=b/e,g=(1-m)*(1-m),x=2*(1-m)*m,y=m*m;n.push([g*d[0]+x*o[0]+y*p[0],g*d[1]+x*o[1]+y*p[1],g*d[2]+x*o[2]+y*p[2]])}}return n.push(i[i.length-1]),n}var Nb=new Z(7568261),Ob=new Z(4869974),PT=new Z(3116287),Ub=new Z(3948872),qd=rs([.35,.85,.4]),Bb=10;function rs(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function ml(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function kb(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=rs(ml(i,t));return[e,rs(ml(i,e))]}function Hi(i,t){let e=.5+.5*Math.max(0,t[0]*qd[0]+t[1]*qd[1]+t[2]*qd[2]);return i.clone().multiplyScalar(e)}function _o(i,t,e,n,r,s=!1){let o=rs([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=kb(o),c=(h,u)=>{let f=u/Bb*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Bb;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Hi(r,u.n),Hi(r,p.n),Hi(r,d.n)),i.tri(u.p,f.p,p.p,Hi(r,u.n),Hi(r,f.n),Hi(r,p.n)),s&&(i.tri([...t],f.p,u.p,Hi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,Hi(r,o)))}}function CT(i,t,e,n,r,s,o,a){let l=rs(ml(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Hi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function zb(i,t){if(t.points.length<2)return;let e=t.radius,n=Db(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?Nb.clone().multiplyScalar(.55):Nb;_o(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);_o(i,o,a,e*1.22,Ob,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);_o(i,o,a,e*1.08,t.water?new Z(...t.water).multiplyScalar(.9):new Z(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];_o(i,c,h,e*1.3,Ob,!0)}}else{let[o,a]=s(.055);_o(i,o,a,e*1.4,Ub,!0);let[l]=kb(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];_o(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Ub,!0);let u=r.open===!1?rs(ml(r.dir,c)):r.dir,f=rs(ml(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];CT(i,d,u,f,.1,.028,.012,PT)}}}var Yd=1.62,fh=.2,$d=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=Ei(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=fo(a,e.rooms,e.walls??[]);if(!c)continue;let h=po(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,m=d/p,g=[u.a[0]+b*h.s,u.a[1]+m*h.s],x=u.left+.45,y=u.right+.45,v=[[g[0]-m*x,g[1]+b*x],[g[0]+m*y,g[1]-b*y]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(S=>S.points.length>=3&&ne(v[1],S.points)))continue;let M=o.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),o.set(u,M),this.doors.push({centre:g,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=fh){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=fh){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=fh){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>ne(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>IT(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=fh+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,g])=>[d.c[0]+d.u[0]*m*(d.hw+p)+b[0]*g*(d.hd+p),d.c[1]+d.u[1]*m*(d.hw+p)+b[1]*g*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,m=h.get(b);return m===void 0&&(m=this.clear(s[d],s[p]),h.set(b,m)),m};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let b=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=fo(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=po(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>Vb(s)-Vb(r))[0],n=e?this.freeNear(vr(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function IT(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function Vb(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var Zd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Yd}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-Yd,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(vr(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],m=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],g=[-m[0],-m[1],-m[2]],x=[p[0]+b[0]*r*u*f+g[0]*s*u,p[1]+b[1]*r*u*f+g[1]*s*u,p[2]+b[2]*r*u*f+g[2]*s*u];if(x[1]>=-.02)return null;let y=Yd/-x[1];return[l+x[0]*y,c+x[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function LT(i,t){let e=Re(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Kd(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?LT(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}var Gb=8,Hb=1024,Wi=6,dh=class{group=new ge;shadow;target=null;arc=new ge;glow=NT();textures=[];constructor(){this.shadow=new bt(new Vn(1,1),new Wt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,s,o,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Hb,Math.max(32,Math.ceil((h-l)*Gb))),d=Math.min(Hb,Math.max(32,Math.ceil((u-c)*Gb)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Pe(f,d,{minFilter:Ye,magFilter:Ye,depthBuffer:!1});let S=this.shadow.material;S.map=this.target.texture,S.needsUpdate=!0}let p=new En,b=S=>{let A=new Float32Array(S.length/2*3);for(let E=0,w=0;E<S.length;E+=2,w+=3)A.set([S[E],-S[E+1],0],w);let _=new Ft;return _.setAttribute("position",new It(A,3)),_},m=new bt(b(e),new Wt({color:16777215,side:te})),g=[];for(let S of r)for(let A of pn(S))for(let _ of A)g.push(S[_][0],S[_][1]);let x=new bt(b(g),new Wt({color:0,transparent:!0,opacity:0,blending:qe,side:te}));x.renderOrder=1,p.add(m,x);let y=new xn(l,h,-c,-u,.1,10);y.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,y),t.setRenderTarget(v);for(let S of[m,x])S.geometry.dispose(),S.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,s,(c+u)/2);let M=this.shadow.material;M.opacity=o,M.color.set(a),this.shadow.visible=o>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?vn:Me,n=(s,o)=>{let a=DT(t.points.map(c=>c.at),s,t.points.map(c=>FT(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new bt(a,new Wt({vertexColors:!0,transparent:!0,opacity:o*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new rr(Wb(t.hours.flat()),new Bi({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let s=this.sprite(OT(t.light),t.size*5,t.size*5,t.fade,e);s.position.set(...t.sun),this.arc.add(s)}for(let s of t.labels){let o=this.sprite(UT(`${s.rising?"\u2191":"\u2193"} ${s.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,vn,!0);o.position.set(...s.at),this.arc.add(o)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:s}=t.ring,o=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,o,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new nn(Wb(l),new on({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?vn:Me,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),s.forEach((h,u)=>{let f=this.sprite(BT(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,vn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,s,o=!1){this.textures.push(t);let a=new Ur(new ir({map:t,transparent:!0,opacity:r,blending:s,depthWrite:!1,depthTest:!o}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Wb(i){let t=new Ft;return t.setAttribute("position",new It(i,3)),t}function FT(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new Z(t?13778970:16730666),r=new Z(t?14711552:16753978),s=new Z(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(s,(e-.4)/.6)}function DT(i,t,e){let n=[],r=[],s=[],o=new W(0,1,0);for(let l=0;l<i.length;l++){let c=new W(...i[l]),h=new W(...i[Math.max(0,l-1)]),f=new W(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new W().crossVectors(f,o);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new W().crossVectors(d,f).normalize();for(let b=0;b<Wi;b++){let m=b/Wi*Math.PI*2,g=c.clone().addScaledVector(d,Math.cos(m)*t).addScaledVector(p,Math.sin(m)*t);n.push(g.x,g.y,g.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Wi;b++){let m=(l-1)*Wi+b,g=(l-1)*Wi+(b+1)%Wi,x=l*Wi+b,y=l*Wi+(b+1)%Wi;s.push(m,x,y,m,y,g)}}let a=new Ft;return a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),a.setIndex(s),a}function ph(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function NT(){let[i,t]=ph(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new rn(i)}function OT(i){let[t,e]=ph(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let s=r%2===0?124:92,o=e.createLinearGradient(0,0,0,-s);o.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),o.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-s),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new rn(t)}function UT(i,t){let[e,n]=ph(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),s=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(s,10,r,84,42):n.rect(s,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new rn(e)}function BT(i,t,e){let[n,r]=ph(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new rn(n)}var kT=40;function Xb(i,t,e,n,r){let s=[];if(n<=0)return s;let o=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(kT,Math.max(0,h-r)*o);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>s.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,m])=>a(b,f,m)),p=h.points.map(([b,m])=>a(b,u,m));for(let[b,m,g]of pn(h.points))l(d[b],d[m],d[g]),l(p[b],p[m],p[g]);for(let b=0;b<h.points.length;b++){let m=(b+1)%h.points.length;l(d[b],d[m],p[m]),l(d[b],p[m],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return s}function qb(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let s=0;s<i.length;s+=2)t=Math.min(t,i[s]),n=Math.max(n,i[s]),e=Math.min(e,i[s+1]),r=Math.max(r,i[s+1]);return[t,e,n,r]}function jd(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=zT(c.id)%1e3/1e3;for(let b of al(l,c)){let[m,g,x,y]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[m,0,0],[g,1,0],[x,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[S,A,_]=v[M];e.push(S[0],S[1],S[2]),n.push(A,_),r.push(u,f),s.push(d)}}let p=e.length/3-h;p&&o.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Ft;return a.setAttribute("position",new It(e,3)),a.setAttribute("uv",new It(n,2)),a.setAttribute("aCells",new It(r,2)),a.setAttribute("aPhase",new It(s,1)),a.setAttribute("aLevel",new It(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function gl(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Jd(i){let t=new Wt({transparent:!0,blending:Me,depthWrite:!1,side:te});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function zT(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var $b=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,VT=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,GT=$b,HT=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Yb(i,t){let e=[];for(let[r,s,o]of pn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Ft;return n.setAttribute("position",new It(e,3)),n}function Zb(i,t){let e=new ge;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new bt(Yb(n.points,o),new ze({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:$b,fragmentShader:VT,transparent:!0,blending:Me,depthWrite:!1,side:te}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=go(n.points,p);if(b.length>=3){let m=new bt(Yb(b,n.y+.03),new ze({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:GT,fragmentShader:HT,transparent:!0,side:te}));m.renderOrder=6,e.add(m);let g=[];for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];g.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Ft;x.setAttribute("position",new It(g,3)),e.add(new nn(x,new on({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Kb(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var jb=["neon","blueprint","day","night","real"];function Jb(i){return jb.indexOf(i)}var wo={value:new W(.22,.88,1)},So={value:0};function Qb(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var WT=`
uniform int uTheme;
varying vec3 vAureonSurfacePos;
uniform vec3 uAccent;
uniform int uAccentOn;
// Smooth, deterministic 3D value noise. A continuous finish avoids the
// hard voxel edges and shimmer of cell-by-cell random colours while orbiting.
float aureonHash3(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}
float aureonValueNoise3(vec3 p) {
  vec3 cell = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = mix(aureonHash3(cell), aureonHash3(cell + vec3(1.0, 0.0, 0.0)), f.x);
  float b = mix(aureonHash3(cell + vec3(0.0, 1.0, 0.0)), aureonHash3(cell + vec3(1.0, 1.0, 0.0)), f.x);
  float c = mix(aureonHash3(cell + vec3(0.0, 0.0, 1.0)), aureonHash3(cell + vec3(1.0, 0.0, 1.0)), f.x);
  float d = mix(aureonHash3(cell + vec3(0.0, 1.0, 1.0)), aureonHash3(cell + vec3(1.0, 1.0, 1.0)), f.x);
  return mix(mix(a, b, f.y), mix(c, d, f.y), f.z);
}
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  if (uTheme == 3) {
    // Night: preserve active device signal colours while darkening inactive geometry.
    if (line) return vec3(0.26, 0.39, 0.55) * clamp(mx, 0.15, 0.8);
    // Keep structural surfaces legible at night without turning them into emissive objects.
    float nightLevel = smoothstep(0.0, 0.42, l);
    return mix(vec3(0.018, 0.024, 0.038), vec3(0.19, 0.23, 0.29), nightLevel);
  }
  if (uTheme == 4) {
    // Real: restrained architectural palette, tonal shading and dark trim.
    // This is a material-style prototype, not PBR textures or photorealism.
    if (line) return vec3(0.17, 0.16, 0.15) * clamp(mx * 1.3, 0.45, 1.0);
    // Keep the original furniture's hue instead of turning every object beige.
    // This is still a palette/shading enhancement; it does not supply PBR maps.
    float tone = smoothstep(0.015, 0.48, l);
    vec3 base = mix(vec3(0.19, 0.18, 0.17), vec3(0.88, 0.83, 0.75), tone);
    vec3 hue = c / max(mx, 0.001);
    // Preserve furniture identity more faithfully: retain a share of the source colour
    // while keeping the restrained, warm architectural lighting of the Real look.
    float hueWeight = clamp(sat * 0.62, 0.0, 0.62);
    vec3 tinted = mix(base, base * hue, hueWeight);
    // Subtle, stable world-space material grain. Unlike screen-space noise, the
    // finish stays attached to walls and furniture when the camera moves.
    // No image textures or additional downloads are required.
    // Use all three world axes: xz-only grain collapses into stripes on
    // vertical walls and furniture sides. This 3D cell noise remains stable
    // under camera movement and does not require texture downloads.
    float grain = aureonValueNoise3(vAureonSurfacePos.xyz * 58.0);
    float finish = mix(0.975, 1.025, grain);
    return clamp(mix(tinted, c, 0.18) * finish, 0.0, 1.0);
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function gn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=wo,s.uniforms.uAccentOn=So,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAureonSurfacePos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAureonSurfacePos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${WT}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function bl(i){return i==="day"||i==="night"||i==="real"?vn:Me}var Xi=.012,XT=.012;function ex(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(g,x,y,v,M,S,A)=>{for(let _ of[g,x,y,g,y,v])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(S),h.push(A)};i.rooms.forEach((g,x)=>{if(g.points.length<3)return;let y=g.points.map(T=>T[0]),v=g.points.map(T=>T[1]),M=Math.min(...y),S=Math.min(...v),A=Math.max(...y),_=Math.max(...v),E=Math.max(1,Math.ceil((A-M)/r)),w=Math.max(1,Math.ceil((_-S)/r));for(let T=0;T<E;T++)for(let I=0;I<w;I++){let D=M+T*r,C=S+I*r,P=Math.min(D+r,A),R=Math.min(C+r,_),N=go(g.points,[[D,C],[P,C],[P,R],[D,R]]),F=N.length>=3?Math.abs(jT(N)):0;if(F<1e-4)continue;let O=JT(N);if(!s.some(k=>ne(O,k))){if(F>(P-D)*(R-C)-1e-6){u([D,Xi,C],[D,Xi,R],[P,Xi,R],[P,Xi,C],[0,1,0],x,-1);continue}for(let[k,V,q]of pn(N)){let z=N[k],$=N[q],J=N[V];(J[1]-z[1])*($[0]-z[0])-(J[0]-z[0])*($[1]-z[1])<0&&([z,$]=[$,z]),u([z[0],Xi,z[1]],[J[0],Xi,J[1]],[$[0],Xi,$[1]],[$[0],Xi,$[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(g=>g.points.length>=3&&!ai(g.type));if(d.length){let g=d.flatMap(_=>_.points.map(E=>E[0])),x=d.flatMap(_=>_.points.map(E=>E[1])),y=Math.floor(Math.min(...g)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...g)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),A=(_,E,w)=>rb(i,_)-Ka(i,_,E,w)+Xi;for(let _=0;_<M;_++)for(let E=0;E<S;E++){let w=y+_*r,T=v+E*r,I,D=[w+r/2,T+r/2];I=d.find(P=>P.type==="pool"&&ne(D,P.points));for(let P=d.length-1;P>=0&&!I;P--)ne(D,d[P].points)&&(I=d[P]);if(!I)continue;let C=(P,R)=>[P,A(I,P,R),R];u(C(w,T),C(w,T+r),C(w+r,T+r),C(w+r,T),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((g,x)=>{let y=Math.min(i.height,g.height??i.height),v=Math.min(p,y-.02),M=g.b[0]-g.a[0],S=g.b[1]-g.a[1],A=Math.hypot(M,S);if(A<.05)return;let _=[M/A,S/A],E=[-_[1],_[0]],w=e[x],T=YT(g,_,A,n),I=(R,N)=>R?i.rooms.findIndex(F=>F.id===R):N?f:-1;b.push({a:g.a,b:g.b,h:y,ra:I(g.roomLeft,!1),rb:I(g.roomRight,g.exterior),gaps:T});let D=(R,N,F)=>[N,F,...R.filter(O=>O>N+.005&&O<F-.005)].sort((O,k)=>O-k).filter((O,k,V)=>k===0||O>V[k-1]+.005),C=D([v,(v+y)/2,...T.flatMap(R=>[R.y0+.01,R.y1-.01])],.02,y-.02),P=D(T.flatMap(R=>[R.s0,R.s1]),0,A);for(let R of[1,-1]){let N=R>0?g.roomLeft:g.roomRight,F=N?i.rooms.findIndex(z=>z.id===N):g.exterior?f:-1;if(F<0)continue;let O=(R>0?g.left:g.right)+XT,k=[E[0]*R,E[1]*R],V=(z,$)=>[g.a[0]+_[0]*z+k[0]*O,$,g.a[1]+_[1]*z+k[1]*O],q=z=>{let $=V(z,0),J=o?.($[0],$[2]);return J==null?1/0:J-.02};for(let z=0;z<P.length-1;z++){let $=P[z+1]-P[z],J=Math.max(1,Math.ceil($/r));for(let ot=0;ot<J;ot++){let H=P[z]+$/J*ot,X=P[z]+$/J*(ot+1),et=(H+X)/2;for(let st=0;st<C.length-1;st++){let tt=C[st],ct=C[st+1];if(ct-tt<.01)continue;let pt=(tt+ct)/2;if(T.some(wt=>et>wt.s0&&et<wt.s1&&pt>wt.y0&&pt<wt.y1))continue;let ft=tt>=p-1e-6?w:br+w,yt=Math.min(ct,q(H)),Yt=Math.min(ct,q(X));yt<=tt+.005&&Yt<=tt+.005||u(V(H,tt),V(X,tt),V(X,Math.max(tt,Yt)),V(H,Math.max(tt,yt)),[k[0],0,k[1]],F,ft)}}}}});let m=[];for(let g of n){if(g.opening.type!=="door")continue;let x=t.find(M=>nx(M,g)&&qT(M,g));if(!x||!x.roomLeft||!x.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);y<0||v<0||m.push({id:g.opening.id,a:y,b:v,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:m,blockers:b}}function nx(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function qT(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function YT(i,t,e,n){let r=[];for(let s of n){if(!nx(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function $T(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function ZT(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function tx(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=ZT(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*p*(.2+.8*b)*$T(i.kind,l/u)}function ix(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let g of t){if(g.room!==d)continue;let x=g.x-h.x,y=g.y-h.y,v=g.z-h.z,M=Math.hypot(x,y,v)||1,S=tx(g,h.x,h.y,h.z,x/M,y/M,v/M);b[0]+=g.color[0]*S,b[1]+=g.color[1]*S,b[2]+=g.color[2]*S}let m=Math.max(b[0],b[1],b[2]);m<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/m,b[1]/m,b[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:p})}});let s=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(h.room,[...s.get(h.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=s.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let m of u){if(m.walls.length&&KT(m,m.walls,o[f],o[f+1],o[f+2]))continue;let g=tx(m,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*g,p+=m.color[1]*g,b+=m.color[2]*g}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function KT(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*o-f*s)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(g=>m>g.s0&&m<g.s1&&b>g.y0&&b<g.y1))return!0}return!1}function Qd(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ne([t,e],r.points));return n<0?i.rooms.length:n}function To(i,t){return i&&t>=0&&t<i.length?i[t]:t}function jT(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function JT(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var xl={open:0,open2:0,tilt:0,tilt2:0,cover:null},rx=2043986,sx=2769520,QT=2242399,tp=1845831,tA=1450554,qi=16758087,mh=3662079,eA=1.2,nA=1.5,iA=.5,rA=1846349,sA=2572395,oA=1120816,aA=1845831,ox=5995775,ax=9085695,Ao=Xt(3662079,.08),lA=.2;function gh(i,t,e,n,r,s,o,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),Xt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),Xt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),Xt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),Xt(l.getHex(),.92)]];for(let[d,p,b,m,g]of f)i.tri(d,p,b,g,g,g,void 0,h),i.tri(d,b,m,g,g,g,void 0,h)}function ve(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return gh(i,t,e,n,r,s,o,a,l,c,ie);if(o>=h-1e-6)return gh(i,t,e,n,r,s,o,a,l,c,u);gh(i,t,e,n,r,s,o,h,l,c,ie),gh(i,t,e,n,r,s,h,a,l,c,u)}function Er(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,p)=>{let b=v=>h?(o-v)/h:.5,m=t(e,r,f),g=t(n,r,f),x=t(n,r,d),y=t(e,r,d);i.tri(m,g,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(m,x,y,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};o<=l+1e-6?u(s,o,ie):s>=l-1e-6?u(s,o,c):(u(s,l,ie),u(l,o,c))}function cA(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,b=(s-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function uA(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function hA(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!uA(i,t)&&xr(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function lx(i,t,e,n,r,s,o,a,l){let c=hA(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&ve(e,n,-.04,h+.04,r+s,i.faceRoom+.07,u-.03,u,new Z(tp),o,a,l),c.outside&&ve(e,n,-.03,h+.03,-i.faceOut-.06,r-s,u-.04,u-.02,new Z(tp),o,a,l)}function cx(i,t,e){let n=new re,r=new re,s=new re(!0),o=new Z(rx),a=new Z(sx),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=s.count,b=t.get(u.opening.id)??xl,m=u.width,{sill:g,top:x,bucket:y}=u,v=(_,E,w)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*E,w,u.start[1]+u.axis[1]*_+u.toRoom[1]*E],M=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",A=u.opening.type==="door"&&xr(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let _=-u.faceOut-.012,E=u.faceRoom+.012,w=u.opening.type==="garage"&&(S?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),T=w?Xt(qi,.8):new Z(rx),I=w?Xt(qi,1):new Z(sx);ve(n,v,-.045,.02,_,E,0,x+.045,T,I,e,y),ve(n,v,m-.02,m+.045,_,E,0,x+.045,T,I,e,y),ve(n,v,.02,m-.02,_,E,x-.02,x+.045,T,I,e,y)}if(u.opening.type==="door"){let _=xr(u.opening,u.exterior),E=og(_),w=u.opening.swing==="out"?-1:1,T=w>0?u.faceRoom:-u.faceOut,I=u.opening.leaves===2,D=.02,C=m-.02,P=sg(m,_,u.hingeAtStart,u.opening);if(P){let k=-u.faceOut-.012,V=u.faceRoom+.012,q=T-w*(E?.06:.04)/2,z=.06;for(let[$,J]of P.panels)ve(n,v,$,$+z,k,V,.02,x-.02,o,a,e,y),ve(n,v,J-z,J,k,V,.02,x-.02,o,a,e,y),ve(n,v,$+z,J-z,k,V,.02,.12,o,a,e,y),Er(r,v,$+z,J-z,q,.12,x-.02,Ao,e,y);D=P.x0,C=P.x1}let R=I?(C-D)/2-.004:C-D,N=E?.06:.04;E&&(ve(n,v,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new Z(tp),a,e,y),u.exterior&&ve(n,v,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Xt(qi,.55),Xt(qi,.85),e,ie));let F=A?[]:[[u.hingeAtStart,b.open]];I&&!A&&F.push([!u.hingeAtStart,b.open2??0]);let O=u.opening.open_angle;for(let[k,V]of F){let q=Math.min(1,Math.max(0,V)),z=_==="sliding"?0:O!=null&&O>0?(b.sensed?q:Math.min(1,q/iA))*Math.min(170,O)*(Math.PI/180):q*nA,$=_==="sliding"?q*R:0,J=(ft,yt,Yt)=>{let wt=ft*Math.cos(z)-yt*Math.sin(z)-$,xt=T+w*(yt*Math.cos(z)+ft*Math.sin(z)+($?.05:0));return v(k?D+wt:C-wt,xt,Yt)},ot=q>.05?ie:y,H=S?!!b.sensed&&q<.05:q>.9,X=H?Xt(qi,.7):new Z(E?oA:rA),et=H?Xt(qi,.9):new Z(E?aA:sA);_==="glass"?(ve(n,J,0,.05,-N,0,.01,x-.01,X,et,e,ot),ve(n,J,R-.05,R,-N,0,.01,x-.01,X,et,e,ot),ve(n,J,.05,R-.05,-N,0,.01,.12,X,et,e,ot),ve(n,J,.05,R-.05,-N,0,x-.08,x-.01,X,et,e,ot),Er(r,J,.05,R-.05,-N/2,.12,x-.08,Ao,e,ot)):ve(n,J,0,R,-N,0,.01,x-.01,X,et,e,ot);for(let ft of[.001,-N-.001])_==="front_glass"?Er(r,J,.12,R-.12,ft,x*.55,x-.18,Ao,e,ot):E&&Er(r,J,.1,.18,ft,.3,x-.3,Ao,e,ot);let st=Math.min(1.05,x*.5),tt=E?.3:.012,ct=E?R-.11:R-.16,pt=E?R-.08:R-.05;ve(n,J,ct,pt,.004,.05,st-tt,st+tt,new Z(ox),new Z(ax),e,ot),ve(n,J,ct,pt,-N-.05,-N-.004,st-tt,st+tt,new Z(ox),new Z(ax),e,ot),b.unlocked&&k===u.hingeAtStart&&ve(n,J,R-.022,R+.004,-N-.006,.006,.03,x-.03,Xt(mh,.85),Xt(mh,1),e,ot)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),E=new Z(13951231),w=u.faceRoom-.03,T=x*(1-_);_>.01&&Er(s,v,.02,m-.02,w,T,x,E,e,y,.5);let I=(1-_)*x;I>.01&&cA(s,v,.02,m-.02,w,w+I,x+.03,E,y,.5)}else if(xr(u.opening,u.exterior)==="glass_wall"){ve(n,v,0,.04,M-.025,M+.025,g,x,o,a,e,y),ve(n,v,m-.04,m,M-.025,M+.025,g,x,o,a,e,y),ve(n,v,.04,m-.04,M-.025,M+.025,g,g+.03,o,a,e,y),ve(n,v,.04,m-.04,M-.025,M+.025,x-.04,x,o,a,e,y),lx(u,i,n,v,M,.025,a,e,y);let w=Math.max(1,Math.round((m-2*.04)/.9)),T=(m-2*.04)/w;for(let I=1;I<w;I++){let D=.04+I*T;ve(n,v,D-.02,D+.02,M-.025,M+.025,g+.03,x-.04,o,a,e,y)}for(let I=0;I<w;I++){let D=.04+I*T+(I?.02:0),C=.04+(I+1)*T-(I<w-1?.02:0);Er(r,v,D,C,M,g+.03,x-.04,Ao,e,y)}}else{ve(n,v,0,.06,M-.035,M+.035,g,x,o,a,e,y),ve(n,v,m-.06,m,M-.035,M+.035,g,x,o,a,e,y),ve(n,v,.06,m-.06,M-.035,M+.035,g,g+(g>.05?.06:.03),o,a,e,y),ve(n,v,.06,m-.06,M-.035,M+.035,x-.06,x,o,a,e,y),lx(u,i,n,v,M,.035,a,e,y);let w=.055,T=g+(g>.05?.06:.03),I=x-.06,D=M+.035,C=M+.035+.06,R=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:b.open,tilt:b.tilt}];for(let N of R){let F=N.open>.02||N.tilt>.02,O=S?!!b.sensed&&!F:F,k=O?Xt(qi,.75):new Z(QT),V=O?Xt(qi,.95):a,q=N.x0,z=N.x1,$=z-q,J=N.open*eA*(u.opening.swing==="out"?-1:1),ot=N.tilt*lA,H=(et,st,tt)=>{let ct=tt-T,pt=st+ct*Math.sin(ot),ft=T+ct*Math.cos(ot),yt=et*Math.cos(J)-(pt-D)*Math.sin(J);pt=D+(pt-D)*Math.cos(J)+et*Math.sin(J);let Yt=N.atStart?q+yt:z-yt;return v(Yt,pt,ft)},X=Math.abs(J)>.05?ie:y;if(ve(n,H,0,w,D,C,T,I,k,V,e,X),ve(n,H,$-w,$,D,C,T,I,k,V,e,X),ve(n,H,w,$-w,D,C,T,T+w,k,V,e,X),ve(n,H,w,$-w,D,C,I-w,I,k,V,e,X),Er(r,H,w,$-w,(D+C)/2,T+w,I-w,O?Xt(qi,.16):Ao,e,X),b.unlocked&&N.atStart===u.hingeAtStart&&ve(n,H,$-.022,$+.004,D-.006,C+.006,T+.02,I-.02,Xt(mh,.85),Xt(mh,1),e,X),xr(u.opening,u.exterior)==="bars"){let et=(T+I)/2,st=(D+C)/2;ve(n,H,w,$-w,st-.012,st+.012,et-.012,et+.012,k,V,e,X),ve(n,H,$/2-.012,$/2+.012,st-.012,st+.012,T+w,I-w,k,V,e,X)}}}if(b.cover!==null){let _=-u.faceOut,E=x+.2;ve(n,v,-.05,m+.05,_-.15,_,x,E,new Z(tA),a,e,y);let w=Math.min(1,Math.max(0,b.cover));if(w>.01){let T=x-w*(x-g);Er(s,v,0,m,_-.07,T,x,new Z(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var fA=.3,ux=2.6;function hx(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=M=>{let S=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...S,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return S.every(_=>ne(_,i))&&!n.some(_=>A.some(E=>ne(E,_)))},d=(M,S)=>f(h?[M,S]:[S,M]),p=(M,S)=>{let A=Math.ceil(Math.hypot(S[0]-M[0],S[1]-M[1])/.05);for(let _=1;_<A;_++)if(!f([M[0]+(S[0]-M[0])*_/A,M[1]+(S[1]-M[1])*_/A]))return!1;return!0},[b,m,g,x]=h?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=b+e;M<=m-e+1e-6;M+=t){let S=null,A=null,_=.05;for(let I=g;I<=x+1e-6;I+=_)if(d(M,I)&&(A??=I),(!d(M,I)||I+_>x+1e-6)&&A!==null){let D=d(M,I)?I:I-_;(!S||D-A>S[1]-S[0])&&(S=[A,D]),A=null}if(!S||S[1]-S[0]<.2)continue;let E=I=>{let[D,C]=I?S:[S[1],S[0]];return[h?[M,D]:[D,M],h?[M,C]:[C,M]]},w=E(v),T=y[y.length-1];if(T&&n.length&&!p(T,w[0])){let I=E(!v);if(!p(T,I[0]))continue;w=I,v=!v}y.push(w[0],w[1]),v=!v}return y}function np(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var ep=i=>Math.atan2(Math.sin(i),Math.cos(i));function fx(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=ep(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),ux*e),!0)}let a=Math.atan2(r,s),l=ep(a-i.heading);if(i.heading=ep(i.heading+Math.sign(l)*Math.min(Math.abs(l),ux*e)),Math.abs(l)<.35){let c=Math.min(o,fA*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function dx(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var dA=66,pA=250;function px(i,t){return i?t>=3e4?pA:dA:0}function mx(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var ti=null,gx=new Map;function xx(i,t=0){let e=new re,n=new Ve,r=Re(i.type);if(r?.light)Qu(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)ip(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Ju(e,n,new re,s,0,!0)}return{buf:e,lines:n}}function mA(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=gx.get(r);if(s)return s;e&&$a(e),ti??=new zi({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ti.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ti.setSize(t,t,!1),ti.setClearColor(0,0);let{buf:o,lines:a}=xx(i),l=new En,c=new bt(o.geometry(),new Wt({vertexColors:!0,color:new Z(n,n,n)})),h=new nn(a.geometry(),new on({vertexColors:!0,color:new Z(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new ke().setFromObject(c),f=u.getCenter(new W),d=new xn(-1,1,1,-1,.01,100);d.position.copy(f).add(new W(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let g of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let v=new W(g,x,y).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),ti.render(l,d);let m=ti.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),gx.set(r,m),m}function gA(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=bx.get(s);if(o)return o;n&&$a(n);let{buf:a,lines:l}=xx(i,t),c=new bt(a.geometry(),new Wt({vertexColors:!0,color:new Z(r,r,r)})),h=new nn(l.geometry(),new on({vertexColors:!0,color:new Z(r*1.8,r*1.8,r*1.8)})),u=new ke().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),g=Math.max(1,Math.min(1024,Math.round((b-p)*e)));ti??=new zi({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ti.setPixelRatio(1),ti.setSize(m,g,!1),ti.setClearColor(0,0);let x=new En;x.add(c,h);let y=new xn(f,d,b,p,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),ti.render(x,y);let v=ti.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return bx.set(s,M),M}var bx=new Map;var Rr=null,vx=new Map,yx=Promise.resolve();function bA(i,t,e=200){let n=`${i}|${e}`,r=vx.get(n);return r||(r=yx=yx.then(()=>xA(i,t,e)).catch(()=>null),vx.set(n,r),r)}async function xA(i,t,e){let n=await t(i);if(!n.ok)return null;let r=await Su(await n.arrayBuffer(),async d=>typeof createImageBitmap=="function"?createImageBitmap(d):null);Rr??=new zi({antialias:!0,preserveDrawingBuffer:!0}),Rr.setPixelRatio(1),Rr.setSize(e,Math.round(e*.72),!1),Rr.setClearColor(1910574,1),Rr.outputColorSpace=we,Rr.toneMapping=ki;let s=new En;s.add(new ur(16774890,3818056,1.5));let o=new Gr(16777215,2.2);o.position.set(-2,3,-2.5),s.add(o);for(let d of r.parts)s.add(new bt(d.geometry,d.material));let a=new ke().setFromObject(s),l=a.getCenter(new W),c=a.getSize(new W).length()/2||.5,h=new He(28,e/Math.round(e*.72),c/50,c*30),u=c/Math.sin(14*Math.PI/180)*1.02;h.position.set(l.x+u*.42,l.y+u*.38,l.z-u*.82),h.lookAt(l),Rr.render(s,h);let f=Rr.domElement.toDataURL("image/jpeg",.85);for(let d of r.parts){d.geometry.dispose();let p=d.material;for(let b of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","alphaMap"])p[b]?.dispose?.();d.material.dispose()}return f}var xL={Group:ge,Mesh:bt,MeshBasicMaterial:Wt,CanvasTexture:rn,Color:Z,PlaneGeometry:Vn,BufferGeometry:Ft,Float32BufferAttribute:It,DoubleSide:te,skin:{Group:ge,Bone:Os,Skeleton:Zo,SkinnedMesh:$o,Float32BufferAttribute:It,Uint16BufferAttribute:Nr}},_x={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},vA=[.22,.88,1],yA=2.4,wx=1.4,MA=.22,Sx=.94,Tx=140,Ax=1.5;function _A(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,h=l-o,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*h)/u));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+h*f)))}return n}var sp=32,wA=500,Ex=160,SA=33,Rx=.028,TA=.026,AA=.012,EA=.09,ce=2767456,RA=2240847,PA=3096944,CA=1911110,IA=1,Px=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),bh=450,Cx=125,LA=200,FA=.08,yl={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},DA=new Z(1714765);function NA(){let i=navigator;return mx(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var op=class{realPbr=null;aureonTrace=null;aureonTraceTimer;aureonTraceRaf=0;aureonModels=null;aureonModelTimer=0;host;options;renderer;scene=new En;camera=new He(38,1,.1,400);controls;labels;root=new ge;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new dh;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new nn(new Ft,new on({color:10471679,transparent:!0,opacity:.4,blending:Me,depthWrite:!1}));snow=new rr(new Ft,new Bi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new bt(new ta(1,28),new Wt({color:16767370,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=UA(),this.blindTexture=kA(),this.haloTexture=GA(),this.ground=new bt(new Vn(1,1),new Wt({transparent:!1,blending:Me,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=px(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return dx(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.realPbr?.dispose(),this.realPbr=null,this.stopAureonTrace(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){$a(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,Z0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFrameScale(t){let e=Number.isFinite(t)?Math.min(1.5,Math.max(.5,t)):1;if(e===this.frameScale)return;this.frameScale=e;let n=this.host.clientWidth||1,r=this.host.clientHeight||1;this.camera.aspect=n/r,this.camera.updateProjectionMatrix(),this.building&&this.fit(350)}frameScale=1;setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Bu(h.floor).some(u=>u.id===t)),n=e?Bu(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=vr(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new W(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=vr(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new W(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new W(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])gl(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&gl(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Kb(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Zb(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new ge;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new bt(new sa(.92,1,48),new Wt({color:3662079,transparent:!0,opacity:0,blending:Me,depthWrite:!1,side:te}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Ft;c.setAttribute("position",new It(a,3));let h=new nn(c,new on({color:3662079,transparent:!0,opacity:.45,blending:Me,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=vl(r),o=rp(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of pn(c.points))for(let f of u)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ft;l.setAttribute("position",new It(s,3)),l.setAttribute("color",new It(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new re;for(let s of e)zb(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,p,b,m)=>{let g=Math.hypot(p-f,b-d)||1,x=-(b-d)/g*(m/2+o),y=(p-f)/g*(m/2+o);a.push(f+x,d+y,0,p+x,b+y,0,p-x,b-y,0,f+x,d+y,0,p-x,b-y,0,f-x,d-y,0)},h=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ft;return u.setAttribute("position",new It(a,3)),u},n=new bt(e(0),new Wt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:te})),r=new bt(e(.05),new Wt({color:t,transparent:!0,opacity:.22,blending:Me,depthWrite:!1,side:te}));n.renderOrder=6,r.renderOrder=5;let s=new ge;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Qb(t),n=e?1:0;n===So.value&&(!e||wo.value.equals(new W(...e)))||(So.value=n,e&&wo.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Jb(t),qg(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||Jg(o.type)))&&this.rebuild();let n=bl(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines,this.roof.winLines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e){this.sunPath=t,e&&(this.compassLetters=e),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new Z(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Xo(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ft;l.setAttribute("position",new It(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ae,o=(r?t.azimuth+180:t.azimuth)*ae,a=Math.max(10,Math.abs(t.elevation))*ae,{center:l,r:c}=this.skyFrame(),h=new W(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new W((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1,r=(t?.settings.north??0)*ae,s=this.weather?.cloud??0,o=n&&!this.lowQuality&&e.elevation>1&&s<.9&&!this.roomTint,a=o?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${s.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,o?this.drawShadow(t,e,r,s):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${s.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(g,x,y=0)=>{let v=Math.max(0,x)*ae,M=r+g*ae;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+y,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*s,p=Date.now(),b=g=>new Date(g).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),m=h.r*.03;this.sunFx.setArc({points:l.points.map(g=>({at:f(g.azimuth,g.elevation),t:g.t,elevation:g.elevation})),now:p,hours:l.points.filter(g=>g!==l.rise&&g!==l.set&&new Date(g.t).getMinutes()===0).map(g=>f(g.azimuth,g.elevation)),labels:[l.rise,l.set].flatMap(g=>g?[{text:b(g.t),at:f(g.azimuth,g.elevation,m*2.2),rising:g===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:m,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?vo(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),s=n.map(h=>h[1]),[o,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...s),Math.max(...s)];return{x:(o+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-o,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),s=n&&r>0?vo(n):null,o=!!s&&Math.abs(t.floor.elevation-s.elevation)<.5,a=new Map;if(o)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=o&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new re;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(I=>I.id===u.opening.room_id),d=f<0?void 0:a.get(To(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),m=u.top-u.sill;if(b<.05||m<.1)continue;let g=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,m/1.2),y=new Z(d[0]/g*x,d[1]/g*x,d[2]/g*x),v=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),S=.35*M,A=[u.start[0]+u.axis[0]*(u.width/2)+v[0]*(u.faceOut+M/2),u.start[1]+u.axis[1]*(u.width/2)+v[1]*(u.faceOut+M/2)],_=qr(t.floor,{x:A[0],z:A[1]})+.014,E=(I,D)=>{let C=D/M,P=-S*C+I*(u.width+2*S*C);return[u.start[0]+u.axis[0]*P+v[0]*(u.faceOut+D),_,u.start[1]+u.axis[1]*P+v[1]*(u.faceOut+D)]},w=4,T=[[0,0],[.18,1],[.82,1],[1,0]];for(let I=0;I<w;I++){let D=M*I/w,C=M*(I+1)/w,P=(1-I/w)**2,R=(1-(I+1)/w)**2;for(let N=0;N+1<T.length;N++){let[F,O]=T[N],[k,V]=T[N+1],q=E(F,D),z=E(k,D),$=E(k,C),J=E(F,C),ot=y.clone().multiplyScalar(P*O),H=y.clone().multiplyScalar(P*V),X=y.clone().multiplyScalar(R*V),et=y.clone().multiplyScalar(R*O);h.tri(q,z,$,ot,H,X),h.tri(q,$,J,ot,X,et)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let s=vo(t),o=s?.rooms.filter(m=>!m.outdoor&&m.points.length>=3)??[];if(!s||!o.length)return this.sunFx.hideShadow();let a=o.flatMap(m=>m.points.map(g=>g[0])),l=o.flatMap(m=>m.points.map(g=>g[1])),c=s.elevation+qr(s,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ae,u=Xb(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=qb(u);if(!f)return this.sunFx.hideShadow();let d=s.elevation-c<=.35?s.elevation+.012:c+.012,p=t.floors.filter(m=>Math.abs(m.elevation-s.elevation)<.5).flatMap(m=>m.rooms.filter(g=>!g.outdoor&&g.points.length>=3).map(g=>g.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??xl,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Ex),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new re;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Kg(e,n,Mn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Zg(e,n,Mn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=Du(n.type),s=r?Re(n.type):void 0;r&&s&&eb(e,s,r,n,Mn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new uh(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new W(e.x,a,e.z),direction:new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(hh);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(hh),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.realPbr?.dispose(),this.realPbr=null,this.stopAureonTrace(),clearTimeout(this.aureonModelTimer),this.aureonModels?.dispose(),this.aureonModels=null,this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&NA();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new zi({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=we,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new lh(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.frameScale!==1&&this.aureonFitted&&Math.abs(this.controls.view.radius-this.aureonFitted)<.001&&this.fit(0),this.invalidate()}aureonFitted=null;retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},wA)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=ex(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Ix(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=To(r,a.ra),a.rb=To(r,a.rb)}t.lightSurface=n;let s=new Ft;s.setAttribute("position",new It(n.pos,3)),s.setAttribute("color",new It(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new It(n.fold,1));let o=new Or(new Uint32Array(n.pos.length/3),1);o.setUsage(yf),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=Re(t.pack);if(!e)return null;let[n,r,s]=t.size??yl.wall;return nb(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Qd(t.floor,n.x,n.z),a=To(t.lightZones,o),[l,,c]=n.size??(n.lamp?yl[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<IA?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*ae,g=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let y=(n.rise??0)*ae;e.push({x:n.x+Math.cos(m)*l*x*Math.cos(y),y:p+Math.sin(y)*l*x,z:n.z+Math.sin(m)*l*x*Math.cos(y),color:b,level:r.level*.55,kind:g||y?"omni":d,room:a})}}else{let m=this.packLightAt(n);e.push({x:m?m[0]:n.x,y:m?m[1]:p,z:m?m[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=ne([h.x,h.z],s)?0:_A(h.x,h.z,s);if(f>Ax)continue;let d=u.level*(1-f/Ax);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=vr(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:To(t.lightZones,Qd(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&xr(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=ix(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:gn(new Wt({vertexColors:!0}),this.themeUniform),pattern:BA(this.patternTexture),wall:gn(qn(new Wt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:qn(new Wt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Wt({vertexColors:!0,blending:ba,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:te,polygonOffset:!0,polygonOffsetFactor:-1}),lines:gn(qn(new on({vertexColors:!0,transparent:!0,blending:bl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:qn(new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:gn(qn(new Wt({vertexColors:!0,side:te}),t),this.themeUniform),glass:qn(new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te}),t),blinds:gn(qn(new Wt({map:this.blindTexture,vertexColors:!0,side:te}),t),this.themeUniform),water:gn(new Wt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:te}),this.themeUniform),flow:VA(this.flowTime),pipeLine:zA(this.flowTime),patch:new Wt({vertexColors:!0,transparent:!0,depthWrite:!1,side:te,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Jd(this.flowTime),lamps:gn(new Wt({vertexColors:!0}),this.themeUniform),halos:new Bi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1}),cones:new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te}),screens:new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te}),earth:gn(new Wt({vertexColors:!0}),this.themeUniform),earthWell:gn(new Wt({vertexColors:!0,side:te}),this.themeUniform),earthLines:gn(new on({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=vo(n)?.id===s.id?o.filter(xt=>xt.face===zd).map(xt=>({field:xt,face:lb(n,xt)})):[],l=o.filter(xt=>xt.face.startsWith(`wall:${s.id}:`));if(l.length){let xt=new Map(ab(n,s.id).map(Kt=>[Kt.key,Kt]));for(let Kt of l){let le=xt.get(Kt.face);le&&a.push({field:Kt,face:le})}}let h=xd(n).some(xt=>dg(xt,s.elevation+s.height)&&yd(xt,s.elevation))?(xt,Kt)=>{let le=pg(n,xt,Kt,s.elevation);return le===null?null:le-s.elevation}:void 0;this.aureonModels??=new wu(()=>{clearTimeout(this.aureonModelTimer),this.aureonModelTimer=window.setTimeout(()=>{this.disposed||!this.building||this.aureonModels?.loading||(this.rebuild(),this.invalidate())},120)}),this.aureonModels.request(s.furniture);let u=this.aureonModels.modelled(s.furniture),f=Kd(s,this.parked),d=_b(u.size?{...f,furniture:f.furniture.filter(xt=>!u.has(xt.id))}:f,n.settings.wall_exterior,n.settings.wall_interior,wb(n.floors,s),a,h),p={standing:{value:65535},glass:{value:0}},b=this.makeMaterials(p),m=new ge,g=new bt(d.floor,b.floor),x=new bt(d.shadow,b.shadow);x.renderOrder=1;let y=new bt(d.floor,b.pattern);y.renderOrder=2;let v=new bt(new Ft,b.glow);v.renderOrder=3,v.visible=!1;let M=new bt(new Ft,b.frames),S=new bt(new Ft,b.blinds),A=new bt(new Ft,b.glass);A.renderOrder=4;let _=new bt(new Ft,b.lamps);_.visible=!1;let E=new bt(new Ft,b.cones);E.visible=!1,E.renderOrder=3;let w=new bt(new Ft,b.cones);w.visible=!1,w.renderOrder=3,w.userData.aureonHideInReal=!0;let T=new rr(new Ft,b.halos);T.visible=!1,T.renderOrder=7;let I=new bt(new Ft,b.cones);I.visible=!1,I.renderOrder=7;let D=new bt(new Ft,b.cones);D.visible=!1,D.renderOrder=7;let C=new bt(new Ft,b.lamps);C.visible=!1;let P=new bt(new Ft,b.lamps);P.visible=!1;let R=new bt(new Ft,b.patch);R.visible=!1,R.renderOrder=3;let N=new bt(new Ft,b.patchGlow);N.visible=!1,N.renderOrder=3;let F=new bt(new Ft,b.screens);F.visible=!1,F.renderOrder=5;let O=new bt(new Ft,b.flow);O.renderOrder=5,O.frustumCulled=!1;let k=new bt(new Ft,b.pipeLine),V=new bt(new Ft,b.pipeLine),q=new bt(new Ft,b.pipeLine);for(let xt of[k,V,q])xt.renderOrder=4,xt.frustumCulled=!1,xt.visible=!1;let z=jd(a,s.elevation),$=z?new bt(z.geometry,b.solarLive):null;$&&($.renderOrder=6,gl(z,this.solarLevels));for(let xt of[M,S,A])xt.frustumCulled=!1;let J=new bt(d.walls,b.glassWall),ot=new bt(d.walls,b.wall),H=(xt,Kt,le)=>{let fe=[],de=0;for(let Y of Kt)Y.start>de&&fe.push({start:de,end:Y.start,kind:le}),Y.end>Y.start&&fe.push(Y),de=Y.end;return de<xt&&fe.push({start:de,end:xt,kind:le}),fe};g.userData.aureonPbrKind="stone",g.userData.aureonPbrGroups=H(d.floor.getAttribute("position").count/3,d.roomTris.map(xt=>({start:xt.start,end:xt.end,kind:U0(s.rooms.find(Kt=>Kt.id===xt.roomId)?.floor_material||"")})),"stone"),ot.userData.aureonPbrKind="architecture",ot.userData.aureonPbrGroups=H(d.walls.getAttribute("position").count/3,d.furnitureTris.map(xt=>({start:xt.start,end:xt.end,kind:O0(s.furniture.find(Kt=>Kt.id===xt.id)?.type||"")})),"architecture"),M.userData.aureonPbrKind=n.settings.aureon_frames==="white"?"paint":"wood",S.userData.aureonPbrKind="fabric",A.userData.aureonPbrKind="glass",J.renderOrder=6;let X=new bt(d.water,b.water);X.renderOrder=4;let et=Math.min(...n.floors.filter(xt=>xt.rooms.length).map(xt=>xt.elevation)),st=Ab(n,s,d.openings,s.elevation===et),tt=st?[new bt(st.earth.geometry(),b.earth),new bt(st.wells.geometry(),b.earthWell),new nn(st.lines.geometry(),b.earthLines)]:[];for(let xt of tt)xt.userData.earth=!0;m.add(g,x,y,v,ot,X,new nn(d.lines,b.lines),M,S,A,O,k,V,q,_,E,w,T,I,D,C,P,R,N,F,J,...$?[$]:[],...tt),this.root.add(m),this.aureonModels.place(s.id,s.furniture.filter(xt=>u.has(xt.id)),this.root,I0(s,n.settings.wall_interior));let ct=document.createElement("button");ct.className="fp3d-pin fp3d-pin-floor",ct.dataset.floor=s.id;let pt=document.createElement("b");pt.textContent=s.name||"\u2013";let ft=document.createElement("span");ft.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",ct.append(pt,ft),ct.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(ct);let yt=t.get(s.id),Yt=[],wt=null;for(let xt of Bu(s)){let Kt=document.createElement("button");Kt.className="fp3d-pin",Kt.dataset.room=xt.id,Kt.dataset.floor=s.id,this.fillRoomPin(Kt,xt.name,this.roomInfo.get(xt.id)),Kt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,xt.id)),this.labels.append(Kt);let[le,fe]=vr(xt.points);if(Yt.push({pin:Kt,room:xt,cx:le,cz:fe}),!xt.outdoor)for(let[de,Y]of xt.points)wt??={x0:de,x1:de,z0:Y,z1:Y},wt.x0=Math.min(wt.x0,de),wt.x1=Math.max(wt.x1,de),wt.z0=Math.min(wt.z0,Y),wt.z1=Math.max(wt.z1,Y)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:d,floorMesh:g,shadowMesh:x,patternMesh:y,glowMesh:v,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:A,blindsMesh:S,flowMesh:O,pipeLineMesh:k,pipeHouseMesh:V,pipeFloorMesh:q,pipeLineSig:"",solarMesh:$,solarLive:z,lampMesh:_,sunMesh:E,sunSig:"",spillMesh:w,spillSig:"",haloMesh:T,coneMesh:I,trailMesh:D,fridgeMesh:C,pipeMesh:P,pipeSig:"",patchMesh:R,patchGlowMesh:N,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:ot,screenMesh:F,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:wt,roomPins:Yt,labelSize:null,materials:b,mask:p,openings:new Map,y:yt?.y??0,o:yt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:ct})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??xl);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(x=>x.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(x=>x.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?bb(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(is(this.building).map(x=>[x.key,x])),n=this.building.settings.roof?.solar??[],r=Jd(this.flowTime),s=[],o=new ge,a=gn(new Wt({vertexColors:!0,transparent:!0,side:te}),this.themeUniform),l=gn(new on({vertexColors:!0,transparent:!0,blending:bl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=gn(new Wt({vertexColors:!0,transparent:!0,side:te,depthWrite:!1}),this.themeUniform),h=new ge,u=gn(new Wt({vertexColors:!0,side:te}),this.themeUniform),f=gn(new Wt({vertexColors:!0,transparent:!0,opacity:.35,side:te,depthWrite:!1}),this.themeUniform),d=gn(new Wt({vertexColors:!0,transparent:!0,opacity:.35,side:te,depthWrite:!1}),this.themeUniform),p=gn(new on({vertexColors:!0,transparent:!0,blending:bl(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],m=t.map(x=>{let y=new ge;y.add(new bt(x.solid.geometry(),a),new nn(x.lines.geometry(),l)),x.glass.count&&y.add(new bt(x.glass.geometry(),c));let v=n.flatMap(A=>{let _=e.get(A.face);return _&&(_.section?x.sections?.includes(_.section):x===t[0])?[{face:_,field:A}]:[]}),M=jd(v,x.floor.elevation+x.base);if(M){let A=new bt(M.geometry,r);A.renderOrder=9,y.add(A),s.push(M),gl(M,this.solarLevels)}x.winRoof?.solid.count&&y.add(new bt(x.winRoof.solid.geometry(),u),new nn(x.winRoof.lines.geometry(),p)),x.winRoof?.glass.count&&y.add(new bt(x.winRoof.glass.geometry(),d)),y.renderOrder=8,o.add(y);let S=null;(x.win?.solid.count||x.win?.glass.count)&&(S=new ge,S.add(new bt(x.win.solid.geometry(),u),new nn(x.win.lines.geometry(),p)),x.win.glass.count&&S.add(new bt(x.win.glass.geometry(),f)),h.add(S));for(let[A,_]of x.winBelow??[]){if(!_.solid.count&&!_.glass.count)continue;let E=new ge;E.add(new bt(_.solid.geometry(),u),new nn(_.lines.geometry(),p)),_.glass.count&&E.add(new bt(_.glass.geometry(),f)),h.add(E),b.push({floorId:A,win:E})}return{group:y,floorId:x.floor.id,rideId:yg(this.building,x.floor,x.sections??[]),base:x.base,lift:x.lift!==!1,win:S}}),g=new Map([[a,"stone"],[c,"glass"],[u,"wood"],[f,"glass"],[d,"glass"]]);for(let x of[o,h])x.traverse(y=>{let v=y,M=g.get(v.material);v.isMesh&&M&&(v.userData.aureonPbrKind=M)});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:m,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Sx)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Sx*n:0,o=1-Math.exp(-t/Tx),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*wx:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*wx:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&!["day","real"].includes(this.theme)&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:MA)):r=this.explode?n.rank*yA:0,n.ty=r,n.to=s;let a=e===n?Je:Rn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Tx);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Ex);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??xl,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,m=p-b;Math.abs(m)<.003?u[d]=p:(u[d]=b+m*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=LA)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new Z(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*FA+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let d=f-e,p=d>bh?.5+.5*Math.sin(d/140):d/bh;return Math.round(p*10)/10},r=this.aureonModels?.modelled(t.floor.furniture)??new Set,s=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)&&!(u.furnitureId&&r.has(u.furnitureId))),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),a=s.map(u=>this.glowOf(u)),l=s.map((u,f)=>`${n(u.id)},${a[f]?`${a[f].level.toFixed(3)},${a[f].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new re,f=[],d=[],p=new Map,b=t.floor.height;for(let m of s){let g=m.lamp==="strip"?(m.base??b)>Math.min(t.floor.cut_height,b):m.lamp?Px.has(m.lamp)&&(m.top??b)>Math.min(t.floor.cut_height,b):m.model==="camera_ceiling";if(!m.lamp&&!m.model||g&&this.wallMode==="cut")continue;let x=u.count,y=m.pack?Re(m.pack):void 0,[v,M,S]=m.size??[.3,.3,.3];m.model?m.ownLook||Qg(u,m.model,m.x,m.model==="camera_ceiling"?b:m.y,m.z,m.rotation??0):y?Qu(u,y,{x:m.x,z:m.z,rotation:m.rotation??0,w:v,d:M,h:S,mirror:m.mirror},m.base??0,65280):ip(u,{...m,lamp:m.lamp},m.top??b,65280,m.lamp!=="fan"),p.set(m.furnitureId??m.id,{start:x,end:u.count}),m.pickable!==!1&&f.push({id:m.id,start:x,end:u.count}),m.furnitureId&&d.push({id:m.furnitureId,start:x,end:u.count})}t.lampTris=f,t.lampFurnTris=d,t.lampRanges=p,t.lampShade=B0(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(l===t.lampColorSig)return;t.lampColorSig=l;let c=t.lampMesh.geometry.getAttribute("color"),h=c.array;s.forEach((u,f)=>{let d=t.lampRanges.get(u.furnitureId??u.id);if(!d)return;let p=a[f],b=p?.55+.45*p.level:0,m=p?new Z(...p.color.map(y=>Math.min(1,y*b))):new Z(CA),g=n(u.id);g>0&&m.lerp(new Z(1,1,1),.7*g);let x=new Z(m.getHex());k0(h,t.lampShade,d,[x.r,x.g,x.b])}),c.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ae,r=this.weather?.cloud??0,s=Ix(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new re;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ae,h=e.azimuth*ae,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let m=t.openings.get(d.opening.id),g=d.top-(m?.cover??0)*(d.top-d.sill);if(g-d.sill<.05)continue;let x=(T,I)=>{let D=Math.min(7,I*f);return[d.start[0]+d.axis[0]*T+d.toRoom[0]*d.faceRoom-u[0]*D,.02,d.start[1]+d.axis[1]*T+d.toRoom[1]*d.faceRoom-u[1]*D]},y=.14*l*Math.min(1,b*1.5),v=new Z(1*y,.82*y,.55*y),M=v.clone().multiplyScalar(.45),S=t.floor.rooms.findIndex(T=>T.id===d.opening.room_id);if(S<0||t.floor.rooms[S].points.length<3)continue;let A=s[S],_=t.floor.rooms.filter((T,I)=>s[I]===A&&T.points.length>=3).map(T=>T.points),E=Math.max(1,Math.ceil(Math.min(7,g*f)/.25)),w=Math.max(1,Math.ceil(d.width/.3));for(let T=0;T<E;T++){let I=d.sill+(g-d.sill)*T/E,D=d.sill+(g-d.sill)*(T+1)/E,C=T/E,P=(T+1)/E,R=v.clone().lerp(M,C),N=v.clone().lerp(M,P);for(let F=0;F<w;F++){let O=d.width*F/w,k=d.width*(F+1)/w,V=x((O+k)/2,(I+D)/2);if(!_.some(ot=>ne([V[0],V[2]],ot)))continue;let q=x(O,I),z=x(k,I),$=x(k,D),J=x(O,D);a.tri(q,z,$,R,R,N),a.tri(q,$,J,R,N,N)}}}this.pushRoofSun(t,a,s,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(is(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let u of l){let f=c.get(u.face),d=ih(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,m,g,x]=d.corners,y=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(y>.95)continue;let v=(C,P,R)=>[C[0]+(P[0]-C[0])*R,C[1]+(P[1]-C[1])*R,C[2]+(P[2]-C[2])*R],M=v(x,b,y),S=v(g,m,y),A=t.floor.rooms.findIndex(C=>C.id===d.roomId);if(A<0)continue;let _=t.floor.rooms.filter((C,P)=>n[P]===n[A]&&C.points.length>=3).map(C=>C.points),E=(C,P)=>{let R=(F,O)=>v(v(C[0],C[1],F),v(C[3],C[2],F),O);for(let F=0;F<6;F++)for(let O=0;O<6;O++){let k=R((F+.5)/6,(O+.5)/6);if(!_.some(J=>ne([k[0],k[2]],J)))continue;let V=R(F/6,O/6),q=R((F+1)/6,O/6),z=R((F+1)/6,(O+1)/6),$=R(F/6,(O+1)/6);e.tri(V,q,z,P,P,P),e.tri(V,z,$,P,P,P)}},w=C=>[C[0],.019,C[2]],T=.06*o;if(E([w(b),w(m),w(S),w(M)],new Z(.75*T,.85*T,1*T)),p<.05)continue;let I=C=>{let P=Math.min(7,(C[1]-t.floor.elevation)/Math.tan(s));return[C[0]-r[0]*P,.02,C[2]-r[1]*P]},D=.16*o*Math.min(1,p*1.5);E([I(b),I(m),I(S),I(M)],new Z(1*D,.84*D,.6*D))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new re,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ae,y=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),S=(l.fov??(v?360:90))*ae/2,A=l.motion?new Z(.9,.12,.16):new Z(.04,.22,.28),_=new Z(0,0,0),E=Math.max(4,Math.round(S/.15)),w=.015,T=t.geo.walls2d,I=O=>{let k=O.b[0]-O.a[0],V=O.b[1]-O.a[1],q=k*k+V*V||1,z=Math.max(0,Math.min(1,((l.x-O.a[0])*k+(l.z-O.a[1])*V)/q));return Math.hypot(l.x-(O.a[0]+k*z),l.z-(O.a[1]+V*z))},D=null;for(let O of T)I(O)<.45&&(!D||I(O)<I(D))&&(D=O);let C=O=>{let k=y[0]*Math.cos(O)-y[1]*Math.sin(O),V=y[1]*Math.cos(O)+y[0]*Math.sin(O),q=M;for(let z of T){let $=z.b[0]-z.a[0],J=z.b[1]-z.a[1],ot=k*J-V*$;if(Math.abs(ot)<1e-9)continue;let H=((z.a[0]-l.x)*J-(z.a[1]-l.z)*$)/ot,X=((z.a[0]-l.x)*V-(z.a[1]-l.z)*k)/ot;z===D&&H<=.45||H>.02&&H<q&&X>=0&&X<=1&&(q=H)}return q},P=(O,k)=>w+qr(t.floor,{x:O,z:k}),R=O=>{let k=C(O),V=l.x+(y[0]*Math.cos(O)-y[1]*Math.sin(O))*k,q=l.z+(y[1]*Math.cos(O)+y[0]*Math.sin(O))*k;return[V,P(V,q),q]},N=[l.x,Math.max(P(l.x,l.z),v?-1/0:P(l.x+y[0]*.3,l.z+y[1]*.3)),l.z],F=s.count;for(let O=0;O<E;O++)s.tri(N,R(-S+2*S*(O+1)/E),R(-S+2*S*O/E),A,_,_);o.push({id:l.id,start:F,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Px.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??yl[l.lamp],p=l.base??0,b=(l.rotation??0)*ae,m={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],g=(x,y,v=1)=>{n.push(x,m,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6));else if(l.rise){let y=l.rise*ae;n.push(l.x+Math.cos(b)*u*x*Math.cos(y),m+Math.sin(y)*u*x,l.z+Math.sin(b)*u*x*Math.cos(y)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else g(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(y=>y*c.level*.7))):g(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new Z(...c.color.map(A=>A*.09*c.level)),y=new Z(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,S=16;for(let A=0;A<S;A++){let _=A/S*Math.PI*2,E=(A+1)/S*Math.PI*2,w=[l.x+Math.cos(_)*v,m,l.z+Math.sin(_)*v],T=[l.x+Math.cos(E)*v,m,l.z+Math.sin(E)*v],I=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],D=[l.x+Math.cos(E)*M,.02,l.z+Math.sin(E)*M];s.tri(w,I,D,x,y,y),s.tri(w,D,T,x,y,x)}}}let a=new Ft;a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Kd(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(So.value?wo.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new re;for(let o of e){let a=this.screens.get(o.id),l=Vu.has(o.type)?Gu(t.geo.walls2d,o,t.floor.height,Mn(t.floor,o)):null,c=l?{...o,x:l.x,z:l.z,mount_y:l.y}:o,h=c.rotation*ae,u=Math.cos(h),f=Math.sin(h),d=(A,_,E)=>[c.x+A*u-E*f,_,c.z+A*f+E*u];if(a.faces){let A=Math.max(.05,c.w)*(c.mirror?-1:1),_=Math.max(.05,c.d),E=Math.max(.005,c.h),w=Mn(t.floor,c);for(let T of a.faces){if(T.part==="lights"){let q=Re(c.type),z=$=>["#e8f4ff","#ff3b4f"].includes($.color.toLowerCase());if(q&&q.parts.some(z)){let $=new Z(...T.color.map(J=>Math.min(1,J*(.4+.6*T.level))));rl(s,q,c,w,$.getHex(),z)}continue}if(T.part==="cabin"){let q=Re(c.type),z=$=>$.color.toLowerCase()==="#13283a"||$.color==="glass";if(q&&q.parts.some(z)){let $=new Z(...T.color.map(J=>Math.min(1,J*(.3+.5*T.level))));rl(s,q,c,w,$.getHex(),z);continue}}if(T.part==="burners"&&Re(c.type)){let q=Re(c.type),z=new Z(...T.color.map($=>Math.min(1,$*(.25+.6*T.level))));rl(s,q,c,w,z.getHex(),z0);continue}if(T.part==="burners"){let q=new Z(...T.color.map($=>Math.min(1,$*(.25+.6*T.level)))),z=w+E+.008;for(let[$,J,ot]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let H=$*Math.abs(A)/.6,X=J*_/.62,et=14;for(let st=0;st<et;st++){let tt=st/et*Math.PI*2,ct=(st+1)/et*Math.PI*2;s.tri(d(H,z,X),d(H+Math.cos(tt)*ot,z,X+Math.sin(tt)*ot),d(H+Math.cos(ct)*ot,z,X+Math.sin(ct)*ot),q)}}continue}if(T.part==="band"||T.part==="cabin"){let q=T.part==="cabin",z=w+E*(q?.6:.42),$=q?w+E*.86:z+.07,J=new Z(...T.color.map(et=>Math.min(1,et*(.3+.45*T.level)))),ot=Math.abs(A)/2+(q?.012:.02),H=_/2+(q?.012:.02),X=[[-ot,-H],[ot,-H],[ot,H],[-ot,H]];for(let et=0;et<4;et++){let st=X[et],tt=X[(et+1)%4],ct=d(st[0]*Math.sign(A),z,st[1]),pt=d(tt[0]*Math.sign(A),z,tt[1]),ft=d(tt[0]*Math.sign(A),$,tt[1]),yt=d(st[0]*Math.sign(A),$,st[1]);s.tri(ct,pt,ft,J),s.tri(ct,ft,yt,J)}continue}if(T.part==="strata"){let q=T.top??T.color,z=.22+.4*T.level,$=new Z(...T.color.map(tt=>Math.min(1,tt*z))),J=new Z(...q.map(tt=>Math.min(1,tt*z))),ot=w+E*.06,H=w+E*.94,X=Math.abs(A)/2+.012,et=_/2+.012,st=20;for(let tt=0;tt<st;tt++){let ct=tt/st*Math.PI*2,pt=(tt+1)/st*Math.PI*2,ft=[Math.cos(ct)*X,Math.sin(ct)*et],yt=[Math.cos(pt)*X,Math.sin(pt)*et];s.tri(d(ft[0],ot,ft[1]),d(yt[0],ot,yt[1]),d(yt[0],H,yt[1]),$,$,J),s.tri(d(ft[0],ot,ft[1]),d(yt[0],H,yt[1]),d(ft[0],H,ft[1]),$,J,J)}continue}if(T.part==="apring"){let q=c.variant==="wall",z=Math.abs(A),$=q?Math.min(z,E)*.3:Math.min(z,_)*.3,J=new Z(...T.color.map(et=>Math.min(1,et*(.4+.6*T.level)))),ot=new Z(0,0,0),H=24,X=(et,st)=>q?d(Math.cos(et)*st,w+E/2+Math.sin(et)*st,_/2+.004):d(Math.cos(et)*st,w-.003,Math.sin(et)*st);for(let et=0;et<H;et++){let st=et/H*Math.PI*2,tt=(et+1)/H*Math.PI*2;s.tri(X(st,$*.8),X(st,$),X(tt,$),J),s.tri(X(st,$*.8),X(tt,$),X(tt,$*.8),J),s.tri(X(st,$),X(st,$*1.5),X(tt,$*1.5),J,ot,ot),s.tri(X(st,$),X(tt,$*1.5),X(tt,$),J,ot,J)}continue}if(T.part==="drum"){let q=Math.abs(A),z=Math.min(q*.36,(E-.2)*.42),$=w+(E-.14)/2+.04,J=_/2-.006,ot=new Z(...T.color.map(tt=>Math.min(1,tt*(.35+.65*T.level)))),H=ot.clone().multiplyScalar(.12),X=new Z(0,0,0),et=28,st=(tt,ct)=>d(Math.cos(tt)*ct,$+Math.sin(tt)*ct,J);for(let tt=0;tt<et;tt++){let ct=tt/et*Math.PI*2,pt=(tt+1)/et*Math.PI*2;s.tri(d(0,$,J),st(ct,z*.78),st(pt,z*.78),H),s.tri(st(ct,z*.78),st(ct,z),st(pt,z),ot),s.tri(st(ct,z*.78),st(pt,z),st(pt,z*.78),ot),s.tri(st(ct,z),st(ct,z*1.18),st(pt,z*1.18),ot,X,X),s.tri(st(ct,z),st(pt,z*1.18),st(pt,z),ot,X,ot)}continue}if(T.part==="gang"){let q=Math.max(1,T.of??1),z=Math.abs(A),$=z/q,J=(-z/2+$*((T.index??0)+.5))*Math.sign(A),ot=_/2+(c.variant==="outdoor"?.02:.008),H=T.accent?So.value?wo.value.toArray():vA:T.color,X=new Z(...H.map(wt=>Math.min(1,wt*(.35+.65*T.level)))),et=X.clone().multiplyScalar(.5),st=new Z(0,0,0),tt=$*.34,ct=w+E*.16,pt=w+E*.84,ft=[d(J-tt,ct,ot),d(J+tt,ct,ot),d(J+tt,pt,ot),d(J-tt,pt,ot)];s.tri(ft[0],ft[1],ft[2],X),s.tri(ft[0],ft[2],ft[3],X);let yt=.012+.015*T.level,Yt=[d(J-tt-yt,ct-yt,ot-.001),d(J+tt+yt,ct-yt,ot-.001),d(J+tt+yt,pt+yt,ot-.001),d(J-tt-yt,pt+yt,ot-.001)];for(let wt=0;wt<4;wt++){let xt=(wt+1)%4;s.tri(ft[wt],Yt[xt],Yt[wt],et,st,st),s.tri(ft[wt],ft[xt],Yt[xt],et,et,st)}continue}if(T.part==="beacon"){let q=new Z(...T.color.map(pt=>Math.min(1,pt*(.25+.45*T.level)))),z=new Z(0,0,0),$=w+E+.01,J=.6+.6*T.level,ot=Math.min(Math.abs(A),_)*.38;for(let[pt,ft]of[[ot,0],[0,ot]]){let yt=d(-pt,$,-ft),Yt=d(pt,$,ft),wt=d(pt*.4,$+J,ft*.4),xt=d(-pt*.4,$+J,-ft*.4);s.tri(yt,Yt,wt,q,q,z),s.tri(yt,wt,xt,q,z,z)}let H=Mn(t.floor,{...c,mount_y:0})+.012,X=Math.abs(A)/2+.03,et=_/2+.03,st=.22+.18*T.level,tt=(pt,ft,yt)=>d(pt*(X+yt),H,ft*(et+yt)),ct=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let pt=0;pt<4;pt++){let[ft,yt]=ct[pt],[Yt,wt]=ct[(pt+1)%4];s.tri(tt(ft,yt,0),tt(Yt,wt,0),tt(Yt,wt,st),q,q,z),s.tri(tt(ft,yt,0),tt(Yt,wt,st),tt(ft,yt,st),q,z,z)}continue}let I=T.part==="right"?.03:-Math.abs(A)/2+.03,D=T.part==="left"?-.03:Math.abs(A)/2-.03,C=w+(T.part==="bottom"?E*.45:E)+.006,P=new Z(...T.color.map(q=>Math.min(1,q*(.35+.65*T.level)))),R=new Z(0,0,0),N=(q,z,$=C)=>d(q*Math.sign(A),$,z),F=[N(I,-_/2+.03),N(D,-_/2+.03),N(D,_/2-.03),N(I,_/2-.03)];s.tri(F[0],F[2],F[1],P),s.tri(F[0],F[3],F[2],P);let O=T.part==="lid"?.025+.02*T.level:.12+.1*T.level,k=P.clone().multiplyScalar(T.part==="lid"?.7:.5),V=[N(I-O,-_/2-O,C+.004),N(D+O,-_/2-O,C+.004),N(D+O,_/2+O,C+.004),N(I-O,_/2+O,C+.004)];for(let q=0;q<4;q++){let z=(q+1)%4;s.tri(F[q],V[z],V[q],k,R,R),s.tri(F[q],F[z],V[z],k,k,R)}}continue}let p=Re(c.type);if(p&&!p.light&&a.ring&&p.parts.some(A=>A.glow)){let A=new Z(...a.color.map(_=>Math.min(1,_*(.45+.55*a.level))));rl(s,p,c,Mn(t.floor,c),A.getHex())}let b=Bd(c,t.floor);if(!b)continue;let m=new Z(...a.color.map(A=>Math.min(1,A*(.35+.65*a.level)))),g=new Z(0,0,0),x=b.z+.004;if(s.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),m),s.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),m),a.plain)continue;let y=.18+.12*a.level,v=m.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],S=[d(b.x0-y,b.y0-y,x+.01),d(b.x1+y,b.y0-y,x+.01),d(b.x1+y,b.y1+y,x+.01),d(b.x0-y,b.y1+y,x+.01)];for(let A=0;A<4;A++){let _=(A+1)%4;s.tri(M[A],S[A],S[_],v,g,g),s.tri(M[A],S[_],M[_],v,g,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Bd(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new bt(new Vn(1,1),new Wt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new kr().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=we,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,{w:a,h:l}=jg(n.x1-n.x0,n.y1-n.y0,o),c=e.rotation*ae,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(vl).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(vl(h))??{speed:rp(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],m=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;m.push([-b[2]/x,0,b[0]/x])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[Rx*1.4,1]]:[[EA,.25],[Rx,1]];for(let[x,y]of g)for(let v of m){let M=x*(h.width??1)/2,S=(_,E)=>[_[0]+v[0]*M*E,_[1]+v[1]*M*E,_[2]+v[2]*M*E],A=[[S(h.a,-1),h.dist,0],[S(h.b,-1),h.dist+p,0],[S(h.b,1),h.dist+p,1],[S(h.a,1),h.dist,1]];for(let _ of[0,1,2,0,2,3]){let[E,w,T]=A[_];n.push(E[0],E[1],E[2]),r.push(d[0]*y,d[1]*y,d[2]*y),s.push(w,T),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ft;c.setAttribute("position",new It(n,3)),c.setAttribute("color",new It(r,3)),c.setAttribute("uv",new It(s,2)),c.setAttribute("flowSpeed",new It(o,1)),c.setAttribute("flowOffset",new It(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(vl(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(vl(f))??{speed:rp(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],m=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;m.push([-b[2]/v,0,b[0]/v])}else m.push([1,0,0],[0,0,1]);let g=TA*(f.width??1),x=f.power>.5?1:.62,y=[[g+AA*2,[.02,.025,.05],.78,2],[g,f.color.map(v=>v*x),1,0]];for(let[v,M,S,A]of y)for(let _ of m){let E=v/2,w=A===0?.002:0,T=(D,C)=>[D[0]+_[0]*E*C,D[1]+_[1]*E*C+w,D[2]+_[2]*E*C],I=[[T(f.a,-1),f.dist,A],[T(f.b,-1),f.dist+d,A],[T(f.b,1),f.dist+d,A+1],[T(f.a,1),f.dist,A+1]];for(let D of[0,1,2,0,2,3]){let[C,P,R]=I[D];s.push(C[0],C[1],C[2]),o.push(M[0],M[1],M[2],S),a.push(P,R),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ft;u.setAttribute("position",new It(s,3)),u.setAttribute("color",new It(o,4)),u.setAttribute("uv",new It(a,2)),u.setAttribute("flowSpeed",new It(l,1)),u.setAttribute("flowOffset",new It(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=cx(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new Z(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new Z(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(DA,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new ke;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new W(p,f,b)),e.expandByPoint(new W(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new W(-4,0,-4),new W(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new W),r=e.getSize(new W),s=Math.max(8*Math.min(1,this.frameScale),this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02)*this.frameScale);this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new W(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}if(this.frameScale!==1&&!c){let u=l?l.phi:.85,f=l?l.theta:-.6,d=f,p=this.projectedFit(e,n,u,f);if(!l)for(let b of[1,2,3]){let m=f+b*Math.PI/2,g=this.projectedFit(e,n,u,m);g.radius<p.radius*.94&&(d=m,p=g)}this.aureonFitted=p.radius*this.frameScale,this.controls.flyTo({target:p.target,radius:this.aureonFitted,phi:u,theta:d},t,!!l);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}projectedFit(t,e,n,r){let s=this.camera.clone(),o=[],a=Math.max(.3,Math.min(.6,(this.building?.settings.wall_exterior??.3)*2));t=t.clone(),t.min.x-=a,t.min.z-=a,t.max.x+=a,t.max.z+=a;for(let f of[t.min.x,t.max.x])for(let d of[t.min.y,t.max.y])for(let p of[t.min.z,t.max.z])o.push(new W(f,d,p));let l=e.clone(),c=f=>{s.position.set(l.x+f*Math.sin(n)*Math.sin(r),l.y+f*Math.cos(n),l.z+f*Math.sin(n)*Math.cos(r)),s.lookAt(l),s.updateMatrixWorld(!0);let d=1/0,p=-1/0,b=1/0,m=-1/0;for(let g of o){let x=g.clone().project(s);d=Math.min(d,x.x),p=Math.max(p,x.x),b=Math.min(b,x.y),m=Math.max(m,x.y)}return{x0:d,x1:p,y0:b,y1:m}},h=()=>{let f=.5,d=400;for(let p=0;p<40;p++){let b=(f+d)/2,m=c(b);m.x0>=-1&&m.x1<=1&&m.y0>=-1&&m.y1<=1?d=b:f=b}return d},u=h();for(let f=0;f<3;f++){let d=c(u),p=s.position.distanceTo(l),b=p*Math.tan(s.fov*ae/2),m=b*s.aspect,g=new W().setFromMatrixColumn(s.matrixWorld,0),x=new W().setFromMatrixColumn(s.matrixWorld,1);l.addScaledVector(g,(d.x0+d.x1)/2*m).addScaledVector(x,(d.y0+d.y1)/2*b),u=h()}return{target:l,radius:Math.max(u,2)}}placeGround(){let t=new ke,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&!["day","real"].includes(this.theme),t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=HA();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new W),r=t.getSize(new W),s=sp*Math.ceil((Math.max(r.x,r.z)+16)/sp);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-mn-.02,n.z)}distanceFor(t){let e=this.camera.fov*ae,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new fa;return r.setFromCamera(new zt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??ie;if(f!==ie&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=cd(c.floor).find(d=>ne([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,m=(c.mask.glass.value&1<<p)!==0;if(!b){let g=n.ray.direction,x=Math.hypot(g.x,g.z)||1,y=[a.point.x-g.x/x*.3,a.point.z-g.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&ne(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!m&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+bh),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ae,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new W),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*b*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(m=>m.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Rb(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ve,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new Z(.25,.9,1):new Z(1,.71,.28)))}n&&(this.ghost=new nn(e.geometry(),new on({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=Re(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Mn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:Mn(e.floor,n),u=n.rotation*ae,f=Math.cos(u),d=Math.sin(u),p=(m,g,x)=>[s+m*f-g*d,x,o+m*d+g*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let m=0;m<4;m++){let[g,x]=b[m],[y,v]=b[(m+1)%4];t.seg(p(g,x,h+.01),p(y,v,h+.01),r),t.seg(p(g,x,h+c),p(y,v,h+c),r),t.seg(p(g,x,h+.01),p(g,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new Z(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(g=>g.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Pe(s,o);a.texture.colorSpace=we;let l=new xn(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let b=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let D of this.floors)D.group.visible=D===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let x=g.floor.rooms.flatMap(D=>D.points),y=g.floor.elevation,v=new ke(new W(Math.min(...x.map(D=>D[0]))-.3,y,Math.min(...x.map(D=>D[1]))-.3),new W(Math.max(...x.map(D=>D[0]))+.3,y+Math.min(g.floor.cut_height,g.floor.height),Math.max(...x.map(D=>D[1]))+.3)),M=v.getCenter(new W),S=-.6,A=.8,_=new W(Math.sin(A)*Math.sin(S),Math.cos(A),Math.sin(A)*Math.cos(S));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let E=.5,w=.5;for(let D of[v.min.x,v.max.x])for(let C of[v.min.y,v.max.y])for(let P of[v.min.z,v.max.z]){let R=new W(D,C,P).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(R.x)),w=Math.max(w,Math.abs(R.y))}let T=s/o;E/w>T?w=E/T:E=w*T,l.left=-E*1.05,l.right=E*1.05,l.top=w*1.05,l.bottom=-w*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderScene(l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let I=b.createImageData(s,o);for(let D=0;D<o;D++)I.data.set(d.subarray((o-1-D)*s*4,(o-D)*s*4),D*s*4);b.putImageData(I,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?hx(n.room,void 0,void 0,n.obstacles):np(n.rest),l=a.length?a:np(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!ne(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(_x[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&Re(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Wt({color:_x[t.mode]}),r=this.robotModelKey(t),s=t.model?Re(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,h=new re,{radius:u,top:f}=tb(h,s,a,l,c),d=new re,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ue(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Wt({vertexColors:!0});let m=[h.geometry(),d.geometry()],g=new ge;return g.add(new bt(m[0],this.robotMat),new bt(m[1],n)),{info:t,motion:e,group:g,led:n,own:m,modelKey:r}}if(!this.robotGeo){let a=new re,l=(h,u,f,d,p)=>{let b=[];for(let m=0;m<20;m++)b.push([Math.cos(m/20*Math.PI*2)*h,Math.sin(m/20*Math.PI*2)*h]);Ue(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Wt({vertexColors:!0});let c=new re;Ue(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new ge;return o.add(new bt(this.robotGeo,this.robotMat),new bt(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??yl.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new re;Fx(h,0,0,0,l,0),this.fanMat??=new Wt({vertexColors:!0});let u=new bt(h.geometry(),this.fanMat),f=new ge;f.add(u),f.rotation.y=-((n.rotation??0)*ae),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Lx(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=fx(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new Z(.25-.2*a,.95-.83*a,1-.7*a),r=new Z(0,0,0),s=new Z(.3,1,.6),o=.02;for(let a of this.floors){let l=new re;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,m=-(f-p[1])/b*.1,g=(u-p[0])/b*.1;l.tri([p[0]+m,o,p[1]+g],[u+m,o,f+g],[u-m,o,f-g],s,s,s),l.tri([p[0]+m,o,p[1]+g],[u-m,o,f-g],[p[0]-m,o,p[1]-g],s,s,s)}for(let b=0;b<10;b++){let m=b/10*Math.PI*2,g=(b+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(g)*.35,o,f+Math.sin(g)*.35],[u+Math.cos(m)*.35,o,f+Math.sin(m)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+p],[h.x+d,o,h.z+p],[h.x-d,o,h.z-p],b,u,u),l.tri([c.x+d,o,c.z+p],[h.x-d,o,h.z-p],[c.x-d,o,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(p)*.22,o,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new W(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+bh;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new W(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}realLamps(){let t=[];for(let e of this.activeFloors()){let n=e.floor.elevation+e.ty;for(let r of this.lightSources(e))t.push({x:r.x,y:n+r.y,z:r.z,color:r.color,level:r.level})}return t}traceWanted(){return za.enabled&&this.theme==="real"&&!this.lowQuality&&this.highQuality&&!this.disposed&&!document.hidden&&this.onScreen}armAureonTrace(t){!this.traceWanted()||this.aureonTrace?.off||!t&&(this.aureonTraceTimer!==void 0||this.aureonTraceRaf)||(this.aureonTrace?.touch(),clearTimeout(this.aureonTraceTimer),cancelAnimationFrame(this.aureonTraceRaf),this.aureonTraceRaf=0,this.aureonTraceTimer=setTimeout(()=>{this.aureonTraceTimer=void 0,this.aureonTraceStep()},Ru))}aureonTraceStep(){if(cancelAnimationFrame(this.aureonTraceRaf),this.aureonTraceRaf=0,!this.traceWanted())return;if(this.frame||this.lastFrame||this.controls.busy){clearTimeout(this.aureonTraceTimer),this.aureonTraceTimer=setTimeout(()=>{this.aureonTraceTimer=void 0,this.aureonTraceStep()},Ru/2);return}this.aureonTrace??=new za(this.renderer);let t=this.aureonTrace;if(t.off)return;let e=t.pausedUntil-performance.now();if(e>0||this.aureonModels?.loading){clearTimeout(this.aureonTraceTimer),this.aureonTraceTimer=setTimeout(()=>{this.aureonTraceTimer=void 0,this.aureonTraceStep()},Math.max(e,Ru));return}if(!t.ready){t.load(()=>this.aureonTraceStep());return}this.realPbr??=new Ya(this.renderer,this.lowQuality,this.highQuality);let n=this.realPbr,r=this.camera,s={night:this.nightFactor(),lamps:this.realLamps(),photo:!0},o=`${s.night.toFixed(2)}|${s.lamps.map(l=>`${l.x.toFixed(2)},${l.z.toFixed(2)},${l.level.toFixed(2)},${l.color.map(c=>c.toFixed(2)).join("/")}`).join(";")}`;t.step(this.scene,r,l=>n.staged(this.scene,r,s,l),()=>this.renderer.render(this.scene,r),o,s.night)&&(this.aureonTraceRaf=requestAnimationFrame(()=>this.aureonTraceStep()))}stopAureonTrace(){clearTimeout(this.aureonTraceTimer),this.aureonTraceTimer=void 0,cancelAnimationFrame(this.aureonTraceRaf),this.aureonTraceRaf=0,this.aureonTrace?.dispose(),this.aureonTrace=null}renderScene(t){if(ka("aureon:3d-first-frame"),typeof performance<"u"&&performance.getEntriesByName?.("aureon:models-drawn").length&&ka("aureon:models-shown"),this.aureonModels&&(this.renderer.localClippingEnabled=!0,this.aureonModels.sync(new Map(this.floors.map(e=>[e.floor.id,{group:e.group,cut:this.wallMode==="cut"?Math.min(e.floor.cut_height,e.floor.height):null}])),this.theme,this.nightFactor()),!this.aureonModels.loading&&Object.keys(this.aureonModels.status()).length&&ka("aureon:models-drawn")),this.theme==="real"){this.realPbr??=new Ya(this.renderer,this.lowQuality,this.highQuality);let e={night:this.nightFactor(),lamps:this.realLamps()},n=!this.lastFrame&&!this.controls.busy;if(n&&t===this.camera&&this.aureonTrace?.ready&&this.aureonTrace.samples>0&&this.traceWanted()){this.aureonTraceStep();return}this.realPbr.render(this.scene,t,e),this.armAureonTrace(!n)}else{let e=[];this.frameScale!==1&&this.scene.traverse(n=>{this.theme==="day"&&n.userData.aureonHideInReal&&n.visible&&(n.visible=!1,e.push(()=>{n.visible=!0}));let r=n.material;if(!n.isMesh&&!n.isPoints||!r||Array.isArray(r)||r.blending!==Me)return;let s={blending:r.blending,src:r.blendSrc,dst:r.blendDst,eq:r.blendEquation,srcA:r.blendSrcAlpha,dstA:r.blendDstAlpha};r.blending=vi,r.blendEquation=yn,r.blendSrc=hr,r.blendDst=yi,r.blendSrcAlpha=Jn,r.blendDstAlpha=yi,e.push(()=>{r.blending=s.blending,r.blendSrc=s.src,r.blendDst=s.dst,r.blendEquation=s.eq,r.blendSrcAlpha=s.srcA,r.blendDstAlpha=s.dstA})});try{this.renderer.render(this.scene,t)}finally{for(let n of e.reverse())n()}}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let g=new Set;for(let[x,y]of this.flashes){let v=this.deviceFloor.get(x);v&&g.add(v),y<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)g.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||s||o||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.renderScene(this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*Cx:Cx):null;if(b!==null&&!this.effectTimer&&!document.hidden){let g=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},g)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let g=c||m||h?this.decor(h?83:0,h?83:void 0):null;!f&&g!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},g));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},SA))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new W,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(b,h,m).project(this.camera);let g=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||g<l.x)&&(l={x:g,y:x}),(!c||g>c.x)&&(c={x:g,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new W(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new W(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new W,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=OA(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function OA(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function UA(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new rn(t);return s.flipY=!1,s.wrapS=bn,s.wrapT=bn,s.anisotropy=4,s.colorSpace=we,s}function BA(i){let t=new Wt({map:i,transparent:!0,blending:Me,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function kA(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new rn(i);return e.wrapS=je,e.wrapT=je,e.colorSpace=we,e}function vl(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function rp(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function zA(i){let t=new Wt({vertexColors:!0,transparent:!0,depthWrite:!1,side:te,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function VA(i){let t=new Wt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:te});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Ix(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function GA(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new rn(t);return r.colorSpace=we,r}function HA(){let t=sp,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new rn(e);return s.anisotropy=4,s.colorSpace=we,s}function FL(i,t){return new op(i,t)}function Lx(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function Fx(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Ue(i,d,e-.006,e+.006,RA,PA,{aoFrom:0,bottom:!0})}}function ip(i,t,e,n,r=!0){let[s,o,a]=t.size??yl[t.lamp],l=t.base??0,c=(t.rotation??0)*ae,h=Math.cos(c),u=Math.sin(c),f=(m,g)=>[t.x+m*h-g*u,t.z+m*u+g*h],d=(m,g,x,y,v,M=14)=>{let S=[];for(let A=0;A<M;A++){let _=A/M*Math.PI*2;S.push([t.x+Math.cos(_)*m,t.z+Math.sin(_)*m])}Ue(i,S,g,x,y,v,{aoFrom:0,bottom:!0})},p=(m,g,x,y,v,M,S,A=S)=>Ue(i,[f(m,x),f(g,x),f(g,y),f(m,y)],v,M,S,A,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,ce,ce,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let m=Math.max(.4,e-a);d(.06,e-.02,e,ce,ce,8);let g=t.variant==="globe"?m+2*b:t.variant==="drum"?m+.24:m+.2;if(d(.008,g,e-.02,ce,ce,5),t.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),M=Math.PI*((y+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),m+b-b*Math.cos(v),m+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)d(b*(.25+.75*(4-y)/4),m+.06*y,m+.06*(y+1),n,n,16);else t.variant==="drum"?d(b,m,m+.24,n,n,18):(d(b*.35,m+.14,m+.2,n,n,12),d(b,m,m+.14,n,n,16));break}case"fan":{let m=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,ce,ce,10),d(.012,m+.16,e-.03,ce,ce,6),d(.13,m+.07,m+.16,ce,ce,16),d(.11,m,m+.07,n,n,16),r&&Fx(i,t.x,Lx(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,ce,ce,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,ce,ce,10),d(b,e-Math.max(.06,a),e-.02,ce,ce,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,ce,ce),p(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,ce,ce),d(.014,l+.03,l+a-.12,ce,ce,6),d(b,l+a-.14,l+a-.02,ce,ce),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,ce,ce,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,ce,ce,10);break;case"garden":d(.012,l,l+a-.08,ce,ce,5),d(b,l+a-.08,l+a-.01,ce,ce,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,ce,ce),d(.014,l+.03,l+a-.28,ce,ce,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,ce,ce),d(.012,l+.03,l+a-.16,ce,ce,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let m=t.base??Ou;p(-s/2+.03,s/2-.03,-o/2,-o/2+.02,m,m+a,ce),p(-s/2,s/2,-o/2+.02,o/2,m+a*.15,m+a*.85,n);break}case"strip":{let m=Math.max(.02,a),g=t.base!=null?t.base+m:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-s/2,s/2,-o/2,o/2,g-m,g,n);break}let x=(t.roll??0)*ae,y=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:g-m/2,S=(t.upright?0:t.rise??0)*ae,A=(I,D,C)=>{let P=I,R=D*y-C*v,N=D*v+C*y;return S&&([P,R]=[P*Math.cos(S)-R*Math.sin(S),P*Math.sin(S)+R*Math.cos(S)]),t.upright&&([P,R]=[-R,P]),[t.x+P*h-N*u,M+R,t.z+P*u+N*h]},_=[A(-s/2,-m/2,-o/2),A(s/2,-m/2,-o/2),A(s/2,-m/2,o/2),A(-s/2,-m/2,o/2),A(-s/2,m/2,-o/2),A(s/2,m/2,-o/2),A(s/2,m/2,o/2),A(-s/2,m/2,o/2)],E=new Z(n),w=[t.x,M,t.z],T=(I,D,C,P)=>{let[R,N,F]=[_[I],_[D],_[C]],O=[(N[1]-R[1])*(F[2]-R[2])-(N[2]-R[2])*(F[1]-R[1]),(N[2]-R[2])*(F[0]-R[0])-(N[0]-R[0])*(F[2]-R[2]),(N[0]-R[0])*(F[1]-R[1])-(N[1]-R[1])*(F[0]-R[0])],k=[R[0]-w[0],R[1]-w[1],R[2]-w[2]],V=O[0]*k[0]+O[1]*k[1]+O[2]*k[2]<0,[q,z,$,J]=V?[_[P],_[C],_[D],_[I]]:[_[I],_[D],_[C],_[P]];i.tri(q,z,$,E,E,E),i.tri(q,$,J,E,E,E)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{$d as FloorMap,op as FloorplanViewer,Zd as WalkCamera,bA as aureonModelThumb,FL as createViewer,xL as funLib,gA as furnitureFront,mA as furniturePreview,NA as isLowEnd,Su as parseGlb,Fx as pushFanBlades,ip as pushLampModel};
