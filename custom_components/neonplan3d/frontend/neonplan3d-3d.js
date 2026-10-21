var xf=0,Kc=1,vf=2;var Vs=1,yf=2,Kr=3,$n=0,tn=1,ue=2,Zn=0,Fi=1,Fe=2,Jc=3,Gs=4,_f=5;var sr=100,Mf=101,Sf=102,wf=103,Tf=104,Ef=200,Af=201,Rf=202,Cf=203,jc=204,Qc=205,Pf=206,If=207,Lf=208,Ff=209,Df=210,Nf=211,Uf=212,Of=213,Bf=214,ra=0,sa=1,oa=2,zr=3,aa=4,la=5,ca=6,ua=7,tu=0,kf=1,zf=2,Ln=0,eu=1,nu=2,iu=3,ru=4,su=5,ou=6,au=7;var lu=300,Di=301,or=302,Ba=303,ka=304,Hs=306,Qi=1e3,bn=1001,ha=1002,Ye=1003,Vf=1004;var Ws=1005;var je=1006,za=1007;var Ni=1008;var vn=1009,cu=1010,uu=1011,Jr=1012,Va=1013,Fn=1014,Dn=1015,Nn=1016,Ga=1017,Ha=1018,jr=1020,hu=35902,fu=35899,du=1021,pu=1022,Sn=1023,Hn=1026,Ui=1027,mu=1028,Wa=1029,Oi=1030,Xa=1031;var Ya=1033,Xs=33776,Ys=33777,qs=33778,$s=33779,qa=35840,$a=35841,Za=35842,Ka=35843,Ja=36196,ja=37492,Qa=37496,tl=37488,el=37489,Zs=37490,nl=37491,il=37808,rl=37809,sl=37810,ol=37811,al=37812,ll=37813,cl=37814,ul=37815,hl=37816,fl=37817,dl=37818,pl=37819,ml=37820,gl=37821,bl=36492,xl=36494,vl=36495,yl=36283,_l=36284,Ks=36285,Ml=36286;var Ms=2300,fa=2301,ea=2302,kc=2303,zc=2400,Vc=2401,Gc=2402;var Gf=3200;var gu=0,Hf=1,fi="",Ce="srgb",Ss="srgb-linear",ws="linear",me="srgb";var na=7680;var Wf=519,Xf=512,Yf=513,qf=514,Sl=515,$f=516,Zf=517,wl=518,Kf=519,Jf=35044,bu=35048;var xu="300 es",In=2e3,Ts=2001;function I0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function L0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=Vr("canvas");return i.style.display="block",i}var zh={},Gr=null;function vu(...i){let t="THREE."+i.shift();Gr?Gr("log",t,...i):console.log(t,...i)}function Qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in zh||(zh[t]=!0,Gt(...i))}function td(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var ed={[ra]:sa,[oa]:ca,[aa]:ua,[zr]:la,[sa]:ra,[ca]:oa,[ua]:aa,[la]:zr},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,da=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function F0(i,t){return(i%t+t)%t}function bc(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wu=class wu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;var ie=wu,Xn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],b=s[o+3];if(h!==b||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*b;m<0&&(f=-f,d=-d,g=-g,b=-b,m=-m);let p=1-a;if(m<.9995){let x=Math.acos(m),_=Math.sin(x);p=Math.sin(p*x)/_,a=Math.sin(a*x)/_,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+b*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+b*a;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tu=class Tu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tu.prototype.isVector3=!0;var X=Tu,xc=new X,Vh=new Xn,Eu=class Eu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],b=r[0],m=r[3],p=r[6],x=r[1],_=r[4],v=r[7],M=r[2],w=r[5],R=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*m+a*_+l*w,s[6]=o*p+a*v+l*R,s[1]=c*b+u*x+h*M,s[4]=c*m+u*_+h*w,s[7]=c*p+u*v+h*R,s[2]=f*b+d*x+g*M,s[5]=f*m+d*_+g*w,s[8]=f*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=h*b,t[1]=(r*c-u*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(u*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eu.prototype.isMatrix3=!0;var $t=Eu,vc=new $t,Gh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){let i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ae=D0();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Tr===void 0&&(Tr=Vr("canvas")),Tr.width=t.width,Tr.height=t.height;let r=Tr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},N0=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yc(r[o].image)):s.push(yc(r[o]))}else s=yc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var U0=0,_c=new X,on=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,r=bn,s=je,o=Ni,a=Sn,l=vn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Js(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=lu;on.DEFAULT_ANISOTROPY=1;var Au=class Au{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(u+f)/4,R=(h+b)/4,y=(g+m)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=R/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=R/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-b)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Au.prototype.isVector4=!0;var Ie=Au,ma=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new on(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Es=class extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oa=class Oa{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,b,m)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,b=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,b=c*h;e[0]=f+b*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,b=c*h;e[0]=f-b*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,b=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+b,e[1]=l*h,e[5]=b*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*u,e[4]=b-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-b*h}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+b,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=b*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O0,t,B0)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),_i.crossVectors(n,mn),_i.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),_i.crossVectors(n,mn)),_i.normalize(),Po.crossVectors(mn,_i),r[0]=_i.x,r[4]=Po.x,r[8]=mn.x,r[1]=_i.y,r[5]=Po.y,r[9]=mn.y,r[2]=_i.z,r[6]=Po.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],M=n[15],w=r[0],R=r[4],y=r[8],P=r[12],S=r[1],A=r[5],T=r[9],C=r[13],E=r[2],I=r[6],F=r[10],D=r[14],k=r[3],O=r[7],B=r[11],V=r[15];return s[0]=o*w+a*S+l*E+c*k,s[4]=o*R+a*A+l*I+c*O,s[8]=o*y+a*T+l*F+c*B,s[12]=o*P+a*C+l*D+c*V,s[1]=u*w+h*S+f*E+d*k,s[5]=u*R+h*A+f*I+d*O,s[9]=u*y+h*T+f*F+d*B,s[13]=u*P+h*C+f*D+d*V,s[2]=g*w+b*S+m*E+p*k,s[6]=g*R+b*A+m*I+p*O,s[10]=g*y+b*T+m*F+p*B,s[14]=g*P+b*C+m*D+p*V,s[3]=x*w+_*S+v*E+M*k,s[7]=x*R+_*A+v*I+M*O,s[11]=x*y+_*T+v*F+M*B,s[15]=x*P+_*C+v*D+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],b=t[7],m=t[11],p=t[15],x=l*d-c*f,_=a*d-c*h,v=a*f-l*h,M=o*d-c*u,w=o*f-l*u,R=o*h-a*u;return e*(b*x-m*_+p*v)-n*(g*x-m*M+p*w)+r*(g*_-b*M+p*R)-s*(g*v-b*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],b=t[13],m=t[14],p=t[15],x=e*a-n*o,_=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,R=r*c-s*l,y=u*b-h*g,P=u*m-f*g,S=u*p-d*g,A=h*m-f*b,T=h*p-d*b,C=f*p-d*m,E=x*C-_*T+v*A+M*S-w*P+R*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return t[0]=(a*C-l*T+c*A)*I,t[1]=(r*T-n*C-s*A)*I,t[2]=(b*R-m*w+p*M)*I,t[3]=(f*w-h*R-d*M)*I,t[4]=(l*S-o*C-c*P)*I,t[5]=(e*C-r*S+s*P)*I,t[6]=(m*v-g*R-p*_)*I,t[7]=(u*R-f*v+d*_)*I,t[8]=(o*T-a*S+c*y)*I,t[9]=(n*S-e*T-s*y)*I,t[10]=(g*w-b*v+p*x)*I,t[11]=(h*v-u*w-d*x)*I,t[12]=(a*P-o*A-l*y)*I,t[13]=(e*A-n*P+r*y)*I,t[14]=(b*_-g*M-m*x)*I,t[15]=(u*M-h*_+f*x)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,b=o*u,m=o*h,p=a*h,x=l*c,_=l*u,v=l*h,M=n.x,w=n.y,R=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(g-_)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(g+_)*R,r[9]=(m-x)*R,r[10]=(1-(f+b))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),l=Er.set(r[8],r[9],r[10]).length();s<0&&(o=-o),An.copy(this);let c=1/o,u=1/a,h=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===In)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Ts)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===In)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===Ts)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Oa.prototype.isMatrix4=!0;var ve=Oa,Er=new X,An=new ve,O0=new X(0,0,0),B0=new X(1,1,1),_i=new X,Po=new X,mn=new X,Wh=new ve,Xh=new Xn,Ai=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},k0=0,Yh=new X,Ar=new Xn,ii=new ve,Io=new X,gs=new X,z0=new X,V0=new Xn,qh=new X(1,0,0),$h=new X(0,1,0),Zh=new X(0,0,1),Kh={type:"added"},G0={type:"removed"},Rr={type:"childadded",child:null},Mc={type:"childremoved",child:null},pn=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new Ai,n=new Xn,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return Yh.copy(t).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(gs,Io,this.up):ii.lookAt(Io,gs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ii),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,z0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new X(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Sc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ae.workingColorSpace){if(t=F0(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Sc(o,s,t+1/3),this.g=Sc(o,s,t),this.b=Sc(o,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ae.workingToColorSpace(sn.copy(this),t),Math.round(ce(sn.r*255,0,255))*65536+Math.round(ce(sn.g*255,0,255))*256+Math.round(ce(sn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(sn.copy(this),e);let n=sn.r,r=sn.g,s=sn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Ce){ae.workingToColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,r=sn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Lo);let n=bc(Mi.h,Lo.h,e),r=bc(Mi.s,Lo.s,e),s=bc(Mi.l,Lo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new j;j.NAMES=nd;var As=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ri=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new X,ri=new X,wc=new X,si=new X,Cr=new X,Pr=new X,Jh=new X,Tc=new X,Ec=new X,Ac=new X,Rc=new Ie,Cc=new Ie,Pc=new Ie,Ei=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ri.subVectors(n,e),wc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ri),l=Rn.dot(wc),c=ri.dot(ri),u=ri.dot(wc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,n),Pc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Cc,s.y),o.addScaledVector(Pc,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ri.subVectors(t,e),Rn.cross(ri).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Rn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Cr.subVectors(r,n),Pr.subVectors(s,n),Tc.subVectors(t,n);let l=Cr.dot(Tc),c=Pr.dot(Tc);if(l<=0&&c<=0)return e.copy(n);Ec.subVectors(t,r);let u=Cr.dot(Ec),h=Pr.dot(Ec);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Cr,o);Ac.subVectors(t,s);let d=Cr.dot(Ac),g=Pr.dot(Ac);if(g>=0&&d<=g)return e.copy(s);let b=d*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pr,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Jh.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(Jh,a);let p=1/(m+b+f);return o=b*p,a=f*p,e.copy(n).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),Do.subVectors(this.max,bs),Ir.subVectors(t.a,bs),Lr.subVectors(t.b,bs),Fr.subVectors(t.c,bs),Si.subVectors(Lr,Ir),wi.subVectors(Fr,Lr),$i.subVectors(Ir,Fr);let e=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Si.z,0,-Si.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!Ic(e,Ir,Lr,Fr,Do)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Ir,Lr,Fr,Do))?!1:(No.crossVectors(Si,wi),e=[No.x,No.y,No.z],Ic(e,Ir,Lr,Fr,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new X,new X,new X,new X,new X,new X,new X,new X],Cn=new X,Fo=new hn,Ir=new X,Lr=new X,Fr=new X,Si=new X,wi=new X,$i=new X,bs=new X,Do=new X,No=new X,Zi=new X;function Ic(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);let a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ke=new X,Uo=new ie,W0=0,Mn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rs=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},X0=new hn,xs=new X,Lc=new X,Ci=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):X0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Lc)),this.expandByPoint(xs.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y0=0,_n=new ve,Fc=new pn,Dr=new X,gn=new hn,vs=new hn,We=new X,Zt=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?tr:Rs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Fc.lookAt(t),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,vs.min),gn.expandByPoint(We),We.addVectors(gn.max,vs.max),gn.expandByPoint(We)):(gn.expandByPoint(vs.min),gn.expandByPoint(vs.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)We.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(t,c),We.add(Dr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new X,l[y]=new X;let c=new X,u=new X,h=new X,f=new ie,d=new ie,g=new ie,b=new X,m=new X;function p(y,P,S){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,P),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),a[y].add(b),a[P].add(b),a[S].add(b),l[y].add(m),l[P].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,P=x.length;y<P;++y){let S=x[y],A=S.start,T=S.count;for(let C=A,E=A+T;C<E;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let _=new X,v=new X,M=new X,w=new X;function R(y){M.fromBufferAttribute(r,y),w.copy(M);let P=a[y];_.copy(P),_.sub(M.multiplyScalar(M.dot(P))).normalize(),v.crossVectors(w,P);let A=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,P=x.length;y<P;++y){let S=x[y],A=S.start,T=S.count;for(let C=A,E=A+T;C<E;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Mn(f,u,h)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dc=new X,q0=new X,$0=new $t,Pn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Dc.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Dc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$0.getNormalMatrix(t),r=this.coplanarPoint(Dc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Z0=0,ci=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Fi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Qc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new X,Nc=new X,Oo=new X,Bo=new X,er=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nc.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),Bo.copy(this.origin).sub(Nc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=Bo.dot(this.direction),l=-Bo.dot(Oo),c=Bo.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let b=1/u;h*=b,f*=b,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nc).addScaledVector(Oo,f),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,b=e.y-o.y,m=e.z-o.z,p=n.x-o.x,x=n.y-o.y,_=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),R,y,P,S,A,T,C,E,I,F,D,k;if(v>=M&&v>=w?(P=l,T=h,I=g,k=p,l>=0?(R=c,y=u,S=f,A=d,C=b,E=m,F=x,D=_):(R=u,y=c,S=d,A=f,C=m,E=b,F=_,D=x)):M>=w?(P=c,T=f,I=b,k=x,c>=0?(R=u,y=l,S=d,A=h,C=m,E=g,F=_,D=p):(R=l,y=u,S=h,A=d,C=g,E=m,F=p,D=_)):(P=u,T=d,I=m,k=_,u>=0?(R=l,y=c,S=h,A=f,C=g,E=b,F=p,D=x):(R=c,y=l,S=f,A=h,C=b,E=g,F=x,D=p)),P===0)return null;let O=R/P,B=y/P,V=1/P,K=S-O*T,G=A-B*T,Z=C-O*I,Q=E-B*I,ht=F-O*k,H=D-B*k,W=ht*Q-H*Z,nt=K*H-G*ht,st=Z*G-Q*K;if(r){if(W<0||nt<0||st<0)return null}else if((W<0||nt<0||st<0)&&(W>0||nt>0||st>0))return null;let lt=W+nt+st;if(lt===0)return null;let mt=V*(W*T+nt*I+st*k);return(lt>0?mt<0:mt>0)?null:this.at(mt/lt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jh=new ve,Ki=new er,ko=new Ci,Qh=new X,zo=new X,Vo=new X,Go=new X,Uc=new X,Ho=new X,tf=new X,Wo=new X,Nt=class extends pn{constructor(t=new Zt,e=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Uc.fromBufferAttribute(h,t),o?Ho.addScaledVector(Uc,u):Ho.addScaledVector(Uc.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(ko.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ko,Qh)===null||Ki.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);r=Xo(this,p,t,n,c,u,h,w,R,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);r=Xo(this,o,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=v,R=v+1,y=v+2;r=Xo(this,p,t,n,c,u,h,w,R,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let x=m,_=m+1,v=m+2;r=Xo(this,o,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function K0(i,t,e,n,r,s,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===$n,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,Vo),i.getVertexPosition(c,Go);let u=K0(i,t,e,n,zo,Vo,Go,tf);if(u){let h=new X;Ei.getBarycoord(tf,zo,Vo,Go,h),r&&(u.uv=Ei.getInterpolatedAttribute(r,a,l,c,h,new ie)),s&&(u.uv1=Ei.getInterpolatedAttribute(s,a,l,c,h,new ie)),o&&(u.normal=Ei.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new X,materialIndex:0};Ei.getNormal(zo,Vo,Go,f.normal),u.face=f,u.barycoord=h}return u}var ba=class extends on{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Ye,u=Ye,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=new Ci,J0=new ie(.5,.5),Yo=new X,Cs=class{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],b=s[9],m=s[10],p=s[11],x=s[12],_=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-g,M-x).normalize(),r[1].setComponents(c+o,d+u,p+g,M+x).normalize(),r[2].setComponents(c+a,d+h,p+b,M+_).normalize(),r[3].setComponents(c-a,d-h,p-b,M-_).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,d-f,p-m,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-m,M-v).normalize(),e===In)r[5].setComponents(c+l,d+f,p+m,M+v).normalize();else if(e===Ts)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=J0.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Yo.x=r.normal.x>0?t.max.x:t.min.x,Yo.y=r.normal.y>0?t.max.y:t.min.y,Yo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qe=class extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xa=new X,va=new X,ef=new ve,ys=new er,qo=new Ci,Oc=new X,nf=new X,ya=class extends pn{constructor(t=new Zt,e=new Qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)xa.fromBufferAttribute(e,r-1),va.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=xa.distanceTo(va);t.setAttribute("lineDistance",new zt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,t.ray.intersectsSphere(qo)===!1)return;ef.copy(r).invert(),ys.copy(t.ray).applyMatrix4(ef);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=d,m=g-1;b<m;b+=c){let p=u.getX(b),x=u.getX(b+1),_=$o(this,t,ys,l,p,x,b);_&&e.push(_)}if(this.isLineLoop){let b=u.getX(g-1),m=u.getX(d),p=$o(this,t,ys,l,b,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let b=d,m=g-1;b<m;b+=c){let p=$o(this,t,ys,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=$o(this,t,ys,l,g-1,d,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function $o(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(xa.fromBufferAttribute(a,r),va.fromBufferAttribute(a,s),e.distanceSqToSegment(xa,va,Oc,nf)>n)return;Oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:nf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new X,sf=new X,$e=class extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)rf.fromBufferAttribute(e,r),sf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+rf.distanceTo(sf);t.setAttribute("lineDistance",new zt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},of=new ve,Hc=new er,Zo=new Ci,Ko=new X,Yr=class extends pn{constructor(t=new Zt,e=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=s,t.ray.intersectsSphere(Zo)===!1)return;of.copy(r).invert(),Hc.copy(t.ray).applyMatrix4(of);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,b=d;g<b;g++){let m=c.getX(g);Ko.fromBufferAttribute(h,m),af(Ko,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,b=d;g<b;g++)Ko.fromBufferAttribute(h,g),af(Ko,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function af(i,t,e,n,r,s,o){let a=Hc.distanceSqToPoint(i);if(a<e){let l=new X;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ps=class extends on{constructor(t=[],e=Di,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ui=class extends on{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends on{constructor(t,e,n=Fn,r,s,o,a=Ye,l=Ye,c,u=Hn,h=1){if(u!==Hn&&u!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_a=class extends Yn{constructor(t,e=Fn,n=Di,r,s,o=Ye,a=Ye,l,c=Hn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Is=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qr=class i extends Zt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(b,m,p,x,_,v,M,w,R,y,P){let S=v/R,A=M/y,T=v/2,C=M/2,E=w/2,I=R+1,F=y+1,D=0,k=0,O=new X;for(let B=0;B<F;B++){let V=B*A-C;for(let K=0;K<I;K++){let G=K*S-T;O[b]=G*x,O[m]=V*_,O[p]=E,c.push(O.x,O.y,O.z),O[b]=0,O[m]=0,O[p]=w>0?1:-1,u.push(O.x,O.y,O.z),h.push(K/R),h.push(1-B/y),D+=1}}for(let B=0;B<y;B++)for(let V=0;V<R;V++){let K=f+V+I*B,G=f+V+I*(B+1),Z=f+(V+1)+I*(B+1),Q=f+(V+1)+I*B;l.push(K,G,Q),l.push(G,Z,Q),k+=6}a.addGroup(d,k,P),d+=k,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ls=class i extends Zt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new X,u=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function j0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=id(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ig(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Fs(s,o,e,a,l,c,0),o}function id(i,t,e,n,r){let s;if(r===pg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=lf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=lf(o/n|0,i[o],i[o+1],s);return s&&$r(s,s.next)&&(Ns(s),s=s.next),s}function ir(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&lg(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?tg(i,n,r,s):Q0(i)){t.push(l.i,i.i,c.i),Ns(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=eg(ir(i),t),Fs(i,t,e,n,r,s,2)):o===2&&ng(i,t,e,n,r,s):Fs(ir(i),t,e,n,r,s,1);break}}}function Q0(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&_s(r,a,s,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Pe(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),b=Math.max(a,l,c),m=Math.max(u,h,f),p=Wc(d,g,t,e,n),x=Wc(b,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&_s(a,u,l,h,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&_s(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=b&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&_s(a,u,l,h,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&_s(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function eg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!$r(n,r)&&sd(n,e,e.next,r)&&Ds(n,r)&&Ds(r,n)&&(t.push(n.i,e.i,r.i),Ns(e),Ns(e.next),e=i=r),e=e.next}while(e!==i);return ir(e)}function ng(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hg(o,a)){let l=od(o,a);o=ir(o,o.next),l=ir(l,l.next),Fs(o,t,e,n,r,s,0),Fs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ig(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ug(c))}r.sort(rg);for(let s=0;s<r.length;s++)e=sg(r[s],e);return e}function rg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function sg(i,t){let e=og(i,t);if(!e)return t;let n=od(e,i);return ir(n,n.next),ir(e,e.next)}function og(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if($r(i,e))return e;do{if($r(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Ds(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&ag(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function ag(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function lg(i,t,e,n){let r=i;do r.z===0&&(r.z=Wc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cg(r)}function cg(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Wc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function _s(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&rd(i,t,e,n,r,s,o,a)}function hg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fg(i,t)&&(Ds(i,t)&&Ds(t,i)&&dg(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||$r(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function sd(i,t,e,n){let r=jo(Pe(i,t,e)),s=jo(Pe(i,t,n)),o=jo(Pe(e,n,i)),a=jo(Pe(e,n,t));return!!(r!==s&&o!==a||r===0&&Jo(i,e,t)||s===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ds(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function dg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function od(i,t){let e=Xc(i.i,i.x,i.y),n=Xc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function lf(i,t,e,n){let r=Xc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Yc=class{static triangulate(t,e,n=2){return j0(t,e,n)}},Us=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];cf(t),uf(n,t);let o=t.length;e.forEach(cf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,uf(n,e[l]);let a=Yc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function cf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hi=class i extends Zt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],b=[],m=[];for(let p=0;p<u;p++){let x=p*f-o;for(let _=0;_<c;_++){let v=_*h-s;g.push(v,-x,0),b.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;d.push(_,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(b,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Os=class i extends Zt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new X,g=new ie;for(let b=0;b<=r;b++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let b=0;b<r;b++){let m=b*(n+1);for(let p=0;p<n;p++){let x=p+m,_=x,v=x+n+1,M=x+n+2,w=x+1;a.push(_,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function ar(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(hf(r))r.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(hf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=ar(i[e]);for(let r in n)t[r]=n[r]}return t}function hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ad={clone:ar,merge:ln},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=mg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wa=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends Pi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vc:s=t,a=2*e-n;break;case Gc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:o=t,l=2*n-e;break;case Gc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),b=g*g,m=b*g,p=-f*m+2*f*b-f*g,x=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*b+.5*g,v=d*m-d*b;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+x*o[c+M]+_*o[l+M]+v*o[h+M];return s}},Ea=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Aa=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ra=class extends Pi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(r-e),b=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*b+o[l+m]*g;return s}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let b=o[c+g],m=o[l+g],p=d*f+g*2,x=h[p],_=h[p+1],v=t*f+g*2,M=u[v],w=u[v+1],R=vg(n,e,x,M,r);s[g]=ld(R,b,_,w,m)}return s}};function ld(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function xg(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function vg(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=ld(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=xg(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Bc(t.settings)&&(n.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ra(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Bc(this.settings)&&(ff(this.settings.inTangents,t),ff(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&L0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ea,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let b=e[h+g];if(b!==e[f+g]||b!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Bc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ff(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=fa;var Ii=class extends xn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ms;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};Ca.prototype.ValueTypeName="color";var Pa=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};Pa.prototype.ValueTypeName="number";var Ia=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Xn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Bs=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends xn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ms;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};La.prototype.ValueTypeName="vector";var ia={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(df(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!df(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function df(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Fa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new Fa,Zr=class{constructor(t){this.manager=t!==void 0?t:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=new WeakMap,Da=class extends Zr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ia.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=Ur.get(o);h===void 0&&(h=[],Ur.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Vr("img");function l(){u(),e&&e(this);let h=Ur.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ur.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),ia.remove(`image:${t}`);let f=Ur.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}Ur.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ia.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var rr=class extends Zr{constructor(t){super(t)}load(t,e,n,r){let s=new on,o=new Da(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Qo=new X,ta=new Xn,Gn=new X,ks=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,ta,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qo,ta,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new X,pf=new ie,mf=new ie,Xe=class extends ks{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qn=class extends ks{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Or=-90,Br=1,Na=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xe(Or,Br,t,e);r.layers=this.layers,this.add(r);let s=new Xe(Or,Br,t,e);s.layers=this.layers,this.add(s);let o=new Xe(Or,Br,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Or,Br,t,e);a.layers=this.layers,this.add(a);let l=new Xe(Or,Br,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Or,Br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var _u="\\[\\]\\.:\\/",yg=new RegExp("["+_u+"]","g"),Mu="[^"+_u+"]",_g="[^"+_u.replace("\\.","")+"]",Mg=/((?:WC+[\/:])*)/.source.replace("WC",Mu),Sg=/(WCOD+)?/.source.replace("WCOD",_g),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),Eg=new RegExp("^"+Mg+Sg+wg+Tg+"$"),Ag=["material","materials","bones","map"],qc=class{constructor(t,e,n){let r=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(t){let e=Eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ag.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=qc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z2=new Float32Array(1);var gf=new ve,zs=class{constructor(t,e,n=0,r=1/0){this.ray=new er(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(t,e=!0,n=[]){return $c(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)$c(t[r],this,n,e);return n.sort(bf),n}};function bf(i,t){return i.distance-t.distance}function $c(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)$c(s[o],t,e,!0)}}var Ru=class Ru{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Ru.prototype.isMatrix2=!0;var Zc=Ru;function Su(i,t,e,n){let r=Rg(n);switch(e){case du:return i*t;case mu:return i*t/r.components*r.byteLength;case Wa:return i*t/r.components*r.byteLength;case Oi:return i*t*2/r.components*r.byteLength;case Xa:return i*t*2/r.components*r.byteLength;case pu:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Ya:return i*t*4/r.components*r.byteLength;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case ja:case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case Zs:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ks:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(i){switch(i){case vn:case cu:return{byteLength:1,components:1};case Jr:case uu:case Nn:return{byteLength:2,components:1};case Ga:case Ha:return{byteLength:2,components:4};case Fn:case Va:case Dn:return{byteLength:4,components:1};case hu:case fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Id(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Pg(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],b=h[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,h[f]=b)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let b=h[d];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
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
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tb=`#define PI 3.141592653589793
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
} // validated`,eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nb=`vec3 transformedNormal = objectNormal;
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
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sb=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
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
#endif`,Cb=`uniform sampler2D dfgLUT;
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
}`,Pb=`
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
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
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
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,zx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,Zx=`#define MATCAP
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
}`,Kx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,jx=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,tv=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,rv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Ig,alphahash_pars_fragment:Lg,alphamap_fragment:Fg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Og,aomap_pars_fragment:Bg,batching_pars_vertex:kg,batching_vertex:zg,begin_vertex:Vg,beginnormal_vertex:Gg,bsdfs:Hg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Zg,color_fragment:Kg,color_pars_fragment:Jg,color_pars_vertex:jg,color_vertex:Qg,common:tb,cube_uv_reflection_fragment:eb,defaultnormal_vertex:nb,displacementmap_pars_vertex:ib,displacementmap_vertex:rb,emissivemap_fragment:sb,emissivemap_pars_fragment:ob,colorspace_fragment:ab,colorspace_pars_fragment:lb,envmap_fragment:cb,envmap_common_pars_fragment:ub,envmap_pars_fragment:hb,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Sb,envmap_vertex:db,fog_vertex:pb,fog_pars_vertex:mb,fog_fragment:gb,fog_pars_fragment:bb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:vb,lights_lambert_fragment:yb,lights_lambert_pars_fragment:_b,lights_pars_begin:Mb,lights_toon_fragment:wb,lights_toon_pars_fragment:Tb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:Pb,lights_fragment_maps:Ib,lights_fragment_end:Lb,lightprobes_pars_fragment:Fb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Nb,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Ob,map_fragment:Bb,map_pars_fragment:kb,map_particle_fragment:zb,map_particle_pars_fragment:Vb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Wb,morphcolor_vertex:Xb,morphnormal_vertex:Yb,morphtarget_pars_vertex:qb,morphtarget_vertex:$b,normal_fragment_begin:Zb,normal_fragment_maps:Kb,normal_pars_fragment:Jb,normal_pars_vertex:jb,normal_vertex:Qb,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:rx,opaque_fragment:sx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:ux,roughnessmap_fragment:hx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:bx,skinning_pars_vertex:xx,skinning_vertex:vx,skinnormal_vertex:yx,specularmap_fragment:_x,specularmap_pars_fragment:Mx,tonemapping_fragment:Sx,tonemapping_pars_fragment:wx,transmission_fragment:Tx,transmission_pars_fragment:Ex,uv_pars_fragment:Ax,uv_pars_vertex:Rx,uv_vertex:Cx,worldpos_vertex:Px,background_vert:Ix,background_frag:Lx,backgroundCube_vert:Fx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Ox,depth_frag:Bx,distance_vert:kx,distance_frag:zx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Hx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:Yx,meshlambert_vert:qx,meshlambert_frag:$x,meshmatcap_vert:Zx,meshmatcap_frag:Kx,meshnormal_vert:Jx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:tv,meshphysical_vert:ev,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:rv,points_vert:sv,points_frag:ov,shadow_vert:av,shadow_frag:lv,sprite_vert:cv,sprite_frag:uv},Mt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Jn={basic:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:ln([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:ln([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:ln([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:ln([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:ln([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:ln([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:ln([Mt.common,Mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:ln([Mt.lights,Mt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Jn.physical={uniforms:ln([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Tl={r:0,b:0,g:0},hv=new ve,Ld=new $t;Ld.set(-1,0,0,0,1,0,0,0,1);function fv(i,t,e,n,r,s){let o=new j(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function g(x){let _=!1,v=d(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Hs)?(c===void 0&&(c=new Nt(new qr(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ar(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new hi(2,2),new an({name:"BackgroundMaterial",uniforms:ar(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,_){x.getRGB(Tl,yu(i)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:b,dispose:p}}function dv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(A,T,C,E,I){let F=!1,D=h(A,E,C,T);s!==D&&(s=D,c(s.object)),F=d(A,E,C,I),F&&g(A,E,C,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(A,T,C,E),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,T,C,E){let I=E.wireframe===!0,F=n[T.id];F===void 0&&(F={},n[T.id]=F);let D=A.isInstancedMesh===!0?A.id:0,k=F[D];k===void 0&&(k={},F[D]=k);let O=k[C.id];O===void 0&&(O={},k[C.id]=O);let B=O[I];return B===void 0&&(B=f(l()),O[I]=B),B}function f(A){let T=[],C=[],E=[];for(let I=0;I<e;I++)T[I]=0,C[I]=0,E[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:C,attributeDivisors:E,object:A,attributes:{},index:null}}function d(A,T,C,E){let I=s.attributes,F=T.attributes,D=0,k=C.getAttributes();for(let O in k)if(k[O].location>=0){let V=I[O],K=F[O];if(K===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;D++}return s.attributesNum!==D||s.index!==E}function g(A,T,C,E){let I={},F=T.attributes,D=0,k=C.getAttributes();for(let O in k)if(k[O].location>=0){let V=F[O];V===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(V=A.instanceColor));let K={};K.attribute=V,V&&V.data&&(K.data=V.data),I[O]=K,D++}s.attributes=I,s.attributesNum=D,s.index=E}function b(){let A=s.newAttributes;for(let T=0,C=A.length;T<C;T++)A[T]=0}function m(A){p(A,0)}function p(A,T){let C=s.newAttributes,E=s.enabledAttributes,I=s.attributeDivisors;C[A]=1,E[A]===0&&(i.enableVertexAttribArray(A),E[A]=1),I[A]!==T&&(i.vertexAttribDivisor(A,T),I[A]=T)}function x(){let A=s.newAttributes,T=s.enabledAttributes;for(let C=0,E=T.length;C<E;C++)T[C]!==A[C]&&(i.disableVertexAttribArray(C),T[C]=0)}function _(A,T,C,E,I,F,D){D===!0?i.vertexAttribIPointer(A,T,C,I,F):i.vertexAttribPointer(A,T,C,E,I,F)}function v(A,T,C,E){b();let I=E.attributes,F=C.getAttributes(),D=T.defaultAttributeValues;for(let k in F){let O=F[k];if(O.location>=0){let B=I[k];if(B===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let V=B.normalized,K=B.itemSize,G=t.get(B);if(G===void 0)continue;let Z=G.buffer,Q=G.type,ht=G.bytesPerElement,H=Q===i.INT||Q===i.UNSIGNED_INT||B.gpuType===Va;if(B.isInterleavedBufferAttribute){let W=B.data,nt=W.stride,st=B.offset;if(W.isInstancedInterleavedBuffer){for(let lt=0;lt<O.locationSize;lt++)p(O.location+lt,W.meshPerAttribute);A.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let lt=0;lt<O.locationSize;lt++)m(O.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let lt=0;lt<O.locationSize;lt++)_(O.location+lt,K/O.locationSize,Q,V,nt*ht,(st+K/O.locationSize*lt)*ht,H)}else{if(B.isInstancedBufferAttribute){for(let W=0;W<O.locationSize;W++)p(O.location+W,B.meshPerAttribute);A.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let W=0;W<O.locationSize;W++)m(O.location+W);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let W=0;W<O.locationSize;W++)_(O.location+W,K/O.locationSize,Q,V,K*ht,K/O.locationSize*W*ht,H)}}else if(D!==void 0){let V=D[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}x()}function M(){P();for(let A in n){let T=n[A];for(let C in T){let E=T[C];for(let I in E){let F=E[I];for(let D in F)u(F[D].object),delete F[D];delete E[I]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;let T=n[A.id];for(let C in T){let E=T[C];for(let I in E){let F=E[I];for(let D in F)u(F[D].object),delete F[D];delete E[I]}}delete n[A.id]}function R(A){for(let T in n){let C=n[T];for(let E in C){let I=C[E];if(I[A.id]===void 0)continue;let F=I[A.id];for(let D in F)u(F[D].object),delete F[D];delete I[A.id]}}}function y(A){for(let T in n){let C=n[T],E=A.isInstancedMesh===!0?A.id:0,I=C[E];if(I!==void 0){for(let F in I){let D=I[F];for(let k in D)u(D[k].object),delete D[k];delete I[F]}delete C[E],Object.keys(C).length===0&&delete n[T]}}}function P(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function pv(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function mv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vn&&R!==Dn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:w}}function gv(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let x=s?0:n,_=x*4,v=p.clippingState||null;l.value=v,v=u(g,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==b;++_,v+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var ts=4,bv=6,xv=20,vv=256,js=new qn,ud=new j,Cu=null,Pu=0,Iu=0,Lu=!1,yv=new X,lr=new X,Al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=yv}=s;Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cu,Pu,Iu),this._renderer.xr.enabled=Lu,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:Ss,depthBuffer:!1},r=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_v(s)),this._blurMaterial=Sv(s,t,e),this._ggxMaterial=Mv(s,t,e)}return r}_compileMaterial(t){let e=new Nt(new Zt,t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,r,s){let l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ud),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new qr,new Jt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(ud),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let M=this._cubeSize;Qr(r,v*M,_>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(b,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Di||t.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,js)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-ts?n-g+ts:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Qr(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(a,js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Qr(t,m,p,3*b,2*b),r.setRenderTarget(t),r.render(a,js)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-ts?r-this._lodMax+ts:0),f=4*(this._cubeSize-u);Qr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,js)}};function _v(i){let t=[],e=[],n=i,r=i-ts+1+bv;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,g=new Float32Array(d*f*h),b=new Float32Array(d*f*h);for(let p=0;p<h;p++){let x=p%3*2/3-1,_=p>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];g.set(v,d*f*p);for(let M=0;M<f;M++){let w=u[M*2]*2-1,R=u[M*2+1]*2-1;p===0?lr.set(1,R,w):p===1?lr.set(-w,1,-R):p===2?lr.set(-w,R,1):p===3?lr.set(-1,R,-w):p===4?lr.set(-w,-1,R):lr.set(w,R,-1),lr.toArray(b,(p*f+M)*d)}}let m=new Zt;m.setAttribute("position",new Mn(g,d)),m.setAttribute("outputDirection",new Mn(b,d)),e.push(new Nt(m,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function hd(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Mv(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Sv(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function fd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function dd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ps(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Zn});s.uniforms.tEquirect.value=e;let o=new Nt(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=je),new Na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function wv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ba||d===ka)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let b=new Rl(g.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Ba||d===ka,b=d===Di||d===or;if(g||b){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Al(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return g&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Al(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Ba?f.mapping=Di:d===ka&&(f.mapping=or),f}function l(f){let d=0,g=6;for(let b=0;b<g;b++)f[b]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Tv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function Ev(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,b=0;if(g===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],w=x[_+1],R=x[_+2];f.push(M,w,w,R,R,M)}}else{let x=g.array;b=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,w=_+1,R=_+2;f.push(M,w,w,R,R,M)}}let m=new(g.count>=65535?tr:Rs)(f,1);m.version=b;let p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Av(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let b=0;for(let m=0;m<d;m++)b+=f[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Cv(i,t,e){let n=new WeakMap,r=new Ie;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let P=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*h),R=new Es(w,v,M,h);R.type=Dn,R.needsUpdate=!0;let y=_*4;for(let S=0;S<h;S++){let A=m[S],T=p[S],C=x[S],E=v*M*4*S;for(let I=0;I<A.count;I++){let F=I*y;d===!0&&(r.fromBufferAttribute(A,I),w[E+F+0]=r.x,w[E+F+1]=r.y,w[E+F+2]=r.z,w[E+F+3]=0),g===!0&&(r.fromBufferAttribute(T,I),w[E+F+4]=r.x,w[E+F+5]=r.y,w[E+F+6]=r.z,w[E+F+7]=0),b===!0&&(r.fromBufferAttribute(C,I),w[E+F+8]=r.x,w[E+F+9]=r.y,w[E+F+10]=r.z,w[E+F+11]=C.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ie(v,M)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Pv(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Iv={[eu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[au]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function Lv(i,t,e,n,r,s){let o=new qe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));let u=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Nt(c,u),f=new qn(-1,1,1,-1,0,1),d=null,g=null,b=!1,m,p=null,x=[],_=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let R=x[w];R.setSize&&R.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=o.width,w=o.height;x.length>0&&a===null&&(a=new qe(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let y=x[R];y.setSize&&y.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Ln&&x.length===0)return!1;if(p=M,M!==null){let w=M.width,R=M.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return _===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=m,b=!0;let w=o,R=a;for(let y=0;y<x.length;y++){let P=x[y];P.enabled!==!1&&(P.render(v,R,w,M),P.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},ae.getTransfer(d)===me&&(u.defines.SRGB_TRANSFER="");let y=Iv[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(h,f),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Fd=new on,Nu=new Yn(1,1),Dd=new Es,Nd=new ga,Ud=new Ps,pd=[],md=[],gd=new Float32Array(16),bd=new Float32Array(9),xd=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=pd[r];if(s===void 0&&(s=new Float32Array(r),pd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pl(i,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),Ve(e,n)}}function Bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Ve(e,n)}}function kv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Ve(e,n)}}function zv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Wv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function $v(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nu.compareFunction=e.isReversedDepthBuffer()?wl:Sl,s=Nu):s=Fd,e.setTexture2D(t||s,r)}function Zv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Nd,r)}function Kv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ud,r)}function Jv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Dd,r)}function jv(i){switch(i){case 5126:return Fv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return Bv;case 35676:return kv;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Wv;case 36294:return Xv;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Jv}}function Qv(i,t){i.uniform1fv(this.addr,t)}function ty(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function ey(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function ny(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function iy(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ry(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function oy(i,t){i.uniform1iv(this.addr,t)}function ay(i,t){i.uniform2iv(this.addr,t)}function ly(i,t){i.uniform3iv(this.addr,t)}function cy(i,t){i.uniform4iv(this.addr,t)}function uy(i,t){i.uniform1uiv(this.addr,t)}function hy(i,t){i.uniform2uiv(this.addr,t)}function fy(i,t){i.uniform3uiv(this.addr,t)}function dy(i,t){i.uniform4uiv(this.addr,t)}function py(i,t,e){let n=this.cache,r=t.length,s=Pl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nu:o=Fd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function my(i,t,e){let n=this.cache,r=t.length,s=Pl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Nd,s[o])}function gy(i,t,e){let n=this.cache,r=t.length,s=Pl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ud,s[o])}function by(i,t,e){let n=this.cache,r=t.length,s=Pl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Dd,s[o])}function xy(i){switch(i){case 5126:return Qv;case 35664:return ty;case 35665:return ey;case 35666:return ny;case 35674:return iy;case 35675:return ry;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return ay;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return uy;case 36294:return hy;case 36295:return fy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return by}}var Uu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jv(e.type)}},Ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xy(e.type)}},Bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function vd(i,t){i.seq.push(t),i.map[t.id]=t}function vy(i,t,e){let n=i.name,r=n.length;for(Fu.lastIndex=0;;){let s=Fu.exec(n),o=Fu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vd(e,c===void 0?new Uu(a,i,t):new Ou(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Bu(a),vd(e,h)),e=h}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);vy(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function yd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yy=37297,_y=0;function My(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _d=new $t;function Sy(i){ae._getMatrix(_d,ae.workingColorSpace,i);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+My(i.getShaderSource(t),a)}else return s}function wy(i,t){let e=Sy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ty={[eu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[ru]:"ACESFilmic",[ou]:"AgX",[au]:"Neutral",[su]:"Custom"};function Ey(i,t){let e=Ty[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new X;function Ay(){ae.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Cy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Py(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function Sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(i){return i.replace(Iy,Fy)}var Ly=new Map;function Fy(i,t){let e=ne[t];if(e===void 0){let n=Ly.get(t);if(n!==void 0)e=ne[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ku(e)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(Dy,Ny)}function Ny(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Uy={[Vs]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Oy(i){return Uy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var By={[Di]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function ky(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":By[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zy={[or]:"ENVMAP_MODE_REFRACTION"};function Vy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gy={[tu]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function Hy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gy[i.combine]||"ENVMAP_BLENDING_NONE"}function Wy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xy(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Oy(e),c=ky(e),u=Vy(e),h=Hy(e),f=Wy(e),d=Ry(e),g=Cy(s),b=r.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),Ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=ku(o),o=Sd(o,e),o=wd(o,e),a=ku(a),a=Sd(a,e),a=wd(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+o,v=x+p+a,M=yd(r,r.VERTEX_SHADER,_),w=yd(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(A){if(i.debug.checkShaderErrors){let T=r.getProgramInfoLog(b)||"",C=r.getShaderInfoLog(M)||"",E=r.getShaderInfoLog(w)||"",I=T.trim(),F=C.trim(),D=E.trim(),k=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let B=Md(r,M,"vertex"),V=Md(r,w,"fragment");Ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+B+`
`+V)}else I!==""?Gt("WebGLProgram: Program Info Log:",I):(F===""||D==="")&&(O=!1);O&&(A.diagnostics={runnable:k,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(M),r.deleteShader(w),y=new es(r,b),P=Py(r,b)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,yy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_y++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var Yy=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vu(t),e.set(t,n)),n}},Vu=class{constructor(t){this.id=Yy++,this.code=t,this.usedTimes=0}};function qy(i){return i===Oi||i===Zs||i===Ks}function $y(i,t,e,n,r,s){let o=new Wr,a=new zu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,P,S,A,T,C){let E=A.fog,I=T.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||F,D),O=k&&k.mapping===Hs?k.image.height:null,B=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Gt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=V!==void 0?V.length:0,G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let Z,Q,ht,H;if(B){let ye=Jn[B];Z=ye.vertexShader,Q=ye.fragmentShader}else{Z=y.vertexShader,Q=y.fragmentShader;let ye=a.getVertexShaderStage(y),de=a.getFragmentShaderStage(y);a.update(y,ye,de),ht=ye.id,H=de.id}let W=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),st=T.isInstancedMesh===!0,lt=T.isBatchedMesh===!0,mt=!!y.map,Ct=!!y.matcap,At=!!k,Wt=!!y.aoMap,oe=!!y.lightMap,qt=!!y.bumpMap&&y.wireframe===!1,Te=!!y.normalMap,He=!!y.displacementMap,fn=!!y.emissiveMap,Re=!!y.metalnessMap,Oe=!!y.roughnessMap,$=y.anisotropy>0,en=y.clearcoat>0,ge=y.dispersion>0,z=y.retroreflectivity>0,L=y.iridescence>0,J=y.sheen>0,it=y.transmission>0,ot=$&&!!y.anisotropyMap,pt=en&&!!y.clearcoatMap,gt=en&&!!y.clearcoatNormalMap,at=en&&!!y.clearcoatRoughnessMap,ut=L&&!!y.iridescenceMap,bt=L&&!!y.iridescenceThicknessMap,Ut=J&&!!y.sheenColorMap,_t=J&&!!y.sheenRoughnessMap,xt=!!y.specularMap,Ot=!!y.specularColorMap,Vt=!!y.specularIntensityMap,te=it&&!!y.transmissionMap,q=it&&!!y.thicknessMap,vt=!!y.gradientMap,ct=!!y.alphaMap,yt=y.alphaTest>0,Tt=!!y.alphaHash,dt=!!y.extensions,Bt=Ln;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Ft={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:Q,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:lt,batchingColor:lt&&T._colorsTexture!==null,instancing:st,instancingColor:st&&T.instanceColor!==null,instancingMorph:st&&T.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:Ct,envMap:At,envMapMode:At&&k.mapping,envMapCubeUVHeight:O,aoMap:Wt,lightMap:oe,bumpMap:qt,normalMap:Te,displacementMap:He,emissiveMap:fn,normalMapObjectSpace:Te&&y.normalMapType===Hf,normalMapTangentSpace:Te&&y.normalMapType===gu,packedNormalMap:Te&&y.normalMapType===gu&&qy(y.normalMap.format),metalnessMap:Re,roughnessMap:Oe,anisotropy:$,anisotropyMap:ot,clearcoat:en,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:at,dispersion:ge,retroreflection:z,iridescence:L,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:J,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Ot,specularIntensityMap:Vt,transmission:it,transmissionMap:te,thicknessMap:q,gradientMap:vt,opaque:y.transparent===!1&&y.blending===Fi&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:yt,alphaHash:Tt,combine:y.combine,mapUv:mt&&g(y.map.channel),aoMapUv:Wt&&g(y.aoMap.channel),lightMapUv:oe&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:Te&&g(y.normalMap.channel),displacementMapUv:He&&g(y.displacementMap.channel),emissiveMapUv:fn&&g(y.emissiveMap.channel),metalnessMapUv:Re&&g(y.metalnessMap.channel),roughnessMapUv:Oe&&g(y.roughnessMap.channel),anisotropyMapUv:ot&&g(y.anisotropyMap.channel),clearcoatMapUv:pt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(y.sheenRoughnessMap.channel),specularMapUv:xt&&g(y.specularMap.channel),specularColorMapUv:Ot&&g(y.specularColorMap.channel),specularIntensityMapUv:Vt&&g(y.specularIntensityMap.channel),transmissionMapUv:te&&g(y.transmissionMap.channel),thicknessMapUv:q&&g(y.thicknessMap.channel),alphaMapUv:ct&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||$),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!I.attributes.uv&&(mt||ct),fog:!!E,useFog:y.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:nt,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:G,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===me,decodeVideoTextureEmissive:fn&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ue,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(y){let P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)P.push(S),P.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(p(P,y),x(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function p(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function x(y,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let P=d[y.type],S;if(P){let A=Jn[P];S=ad.clone(A.uniforms)}else S=y.uniforms;return S}function v(y,P){let S=u.get(P);return S!==void 0?++S.usedTimes:(S=new Xy(i,P,y,r),c.push(S),u.set(P,S)),S}function M(y){if(--y.usedTimes===0){let P=c.indexOf(y);c[P]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:R}}function Zy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ky(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,b,m,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=m,x.group=p),t++,x}function l(f,d,g,b,m,p,x){x.reversedDepth===!0&&(m=-m);let _=a(f,d,g,b,m,p);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):e.push(_)}function c(f,d,g,b,m,p){let x=a(f,d,g,b,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||Ky),n.length>1&&n.sort(d||Ad),r.length>1&&r.sort(d||Ad)}function h(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function Jy(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Rd,i.set(n,[o])):r>=s.length?(o=new Rd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new j};break;case"SpotLight":e={position:new X,direction:new X,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Qy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var t_=0;function e_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n_(i){let t=new jy,e=Qy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let r=new X,s=new ve,o=new ve;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,b=0,m=0,p=0,x=0,_=0,v=0,M=0,w=0,R=0,y=0,P=0,S=0;c.sort(e_);for(let T=0,C=c.length;T<C;T++){let E=c[T],I=E.color,F=E.intensity,D=E.distance,k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Oi?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],F);S++}else if(E.isSunLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=k;let K=B.getViewportCount();for(let G=0;G<K;G++)n.sunShadowMatrix[b+G]=B.getMatrix(G),n.sunShadowCascade[b+G]=B._cascadeData[G];b+=K,g++}n.sun[d]=O,d++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=E.shadow.matrix,M++}n.directional[m]=O,m++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(I).multiplyScalar(F),O.distance=D,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[x]=O;let B=E.shadow;if(E.map&&(n.spotLightMap[y]=E.map,y++,B.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[x]=B.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=k,R++}x++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(I).multiplyScalar(F),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[_]=O,_++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=E.shadow.matrix,w++}n.point[p]=O,p++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(F),O.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[v]=O,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.sunLength!==d||A.directionalLength!==m||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==_||A.hemiLength!==v||A.numSunShadows!==g||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==R||A.numSpotMaps!==y||A.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=S,A.sunLength=d,A.directionalLength=m,A.pointLength=p,A.spotLength=x,A.rectAreaLength=_,A.hemiLength=v,A.numSunShadows=g,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=R,A.numSpotMaps=y,A.numLightProbes=S,n.version=t_++)}function l(c,u){let h=0,f=0,d=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Cd(i){let t=new n_(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function i_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Cd(i),t.set(r,[a])):s>=o.length?(a=new Cd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`,o_=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],a_=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Pd=new ve,Qs=new X,Du=new X;function l_(i,t,e){let n=new Cs,r=new ie,s=new ie,o=new Ie,a=new Sa,l=new wa,c={},u=e.maxTextureSize,h={[$n]:tn,[tn]:$n,[ue]:ue},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:r_,fragmentShader:s_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let p=this.type;this.render=function(w,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);let P=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Zn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let C=p!==this.type;C&&R.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(I=>I.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,I=w.length;E<I;E++){let F=w[E],D=F.shadow;if(D===void 0){Gt("WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let k=D.getFrameExtents();r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=O,D.map===null||C===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Kr){if(F.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new qe(r.x,r.y,{format:Oi,type:Nn,minFilter:je,magFilter:je,generateMipmaps:!1}),D.map.texture.name=F.name+".shadowMap",D.map.depthTexture=new Yn(r.x,r.y,Dn),D.map.depthTexture.name=F.name+".shadowMapDepth",D.map.depthTexture.format=Hn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ye,D.map.depthTexture.magFilter=Ye}else F.isPointLight?(D.map=new Rl(r.x),D.map.depthTexture=new _a(r.x,Fn)):(D.map=new qe(r.x,r.y),D.map.depthTexture=new Yn(r.x,r.y,Fn)),D.map.depthTexture.name=F.name+".shadowMap",D.map.depthTexture.format=Hn,this.type===Vs?(D.map.depthTexture.compareFunction=O?wl:Sl,D.map.depthTexture.minFilter=je,D.map.depthTexture.magFilter=je):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ye,D.map.depthTexture.magFilter=Ye);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);let B=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();F.isPointLight!==!0&&D.updateMatrices(F,y);for(let V=0;V<B;V++){let K=D.getCamera(V);if(F.isPointLight){let G=D.camera,Z=D.matrix,Q=F.distance||G.far;Q!==G.far&&(G.far=Q,G.updateProjectionMatrix()),Qs.setFromMatrixPosition(F.matrixWorld),G.position.copy(Qs),Du.copy(G.position),Du.add(o_[V]),G.up.copy(a_[V]),G.lookAt(Du),G.updateMatrixWorld(),Z.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Pd.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Pd,G.coordinateSystem,G.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,V),i.clear();else{V===0&&(i.setRenderTarget(D.map),i.clear());let G=D.getViewport(V);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),T.viewport(o)}n=D.getFrustum(V),v(R,y,K,F,this.type)}D.isPointLightShadow!==!0&&this.type===Kr&&x(D,y),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,S,A)};function x(w,R){let y=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new qe(r.x,r.y,{format:Oi,type:Nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,y,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,y,d,b,null)}function _(w,R,y,P){let S=null,A=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let T=S.uuid,C=R.uuid,E=c[T];E===void 0&&(E={},c[T]=E);let I=E[C];I===void 0&&(I=S.clone(),E[C]=I,R.addEventListener("dispose",M)),S=I}if(S.visible=R.visible,S.wireframe=R.wireframe,P===Kr?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let T=i.properties.get(S);T.light=y}return S}function v(w,R,y,P,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let C=t.update(w),E=w.material;if(Array.isArray(E)){let I=C.groups;for(let F=0,D=I.length;F<D;F++){let k=I[F],O=E[k.materialIndex];if(O&&O.visible){let B=_(w,O,P,S);w.onBeforeShadow(i,w,R,y,C,B,k),i.renderBufferDirect(y,null,C,B,w,k),w.onAfterShadow(i,w,R,y,C,B,k)}}}else if(E.visible){let I=_(w,E,P,S);w.onBeforeShadow(i,w,R,y,C,I,null),i.renderBufferDirect(y,null,C,I,w,null),w.onAfterShadow(i,w,R,y,C,I,null)}}let T=w.children;for(let C=0,E=T.length;C<E;C++)v(T[C],R,y,P,S)}function M(w){w.target.removeEventListener("dispose",M);for(let y in c){let P=c[y],S=w.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}function c_(i,t){function e(){let q=!1,vt=new Ie,ct=null,yt=new Ie(0,0,0,0);return{setMask:function(Tt){ct!==Tt&&!q&&(i.colorMask(Tt,Tt,Tt,Tt),ct=Tt)},setLocked:function(Tt){q=Tt},setClear:function(Tt,dt,Bt,Ft,ye){ye===!0&&(Tt*=Ft,dt*=Ft,Bt*=Ft),vt.set(Tt,dt,Bt,Ft),yt.equals(vt)===!1&&(i.clearColor(Tt,dt,Bt,Ft),yt.copy(vt))},reset:function(){q=!1,ct=null,yt.set(-1,0,0,0)}}}function n(){let q=!1,vt=!1,ct=null,yt=null,Tt=null;return{setReversed:function(dt){if(vt!==dt){let Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=dt;let Ft=Tt;Tt=null,this.setClear(Ft)}},getReversed:function(){return vt},setTest:function(dt){dt?W(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(dt){ct!==dt&&!q&&(i.depthMask(dt),ct=dt)},setFunc:function(dt){if(vt&&(dt=ed[dt]),yt!==dt){switch(dt){case ra:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=dt}},setLocked:function(dt){q=dt},setClear:function(dt){Tt!==dt&&(Tt=dt,vt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){q=!1,ct=null,yt=null,Tt=null,vt=!1}}}function r(){let q=!1,vt=null,ct=null,yt=null,Tt=null,dt=null,Bt=null,Ft=null,ye=null;return{setTest:function(de){q||(de?W(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(de){vt!==de&&!q&&(i.stencilMask(de),vt=de)},setFunc:function(de,En,zn){(ct!==de||yt!==En||Tt!==zn)&&(i.stencilFunc(de,En,zn),ct=de,yt=En,Tt=zn)},setOp:function(de,En,zn){(dt!==de||Bt!==En||Ft!==zn)&&(i.stencilOp(de,En,zn),dt=de,Bt=En,Ft=zn)},setLocked:function(de){q=de},setClear:function(de){ye!==de&&(i.clearStencil(de),ye=de)},reset:function(){q=!1,vt=null,ct=null,yt=null,Tt=null,dt=null,Bt=null,Ft=null,ye=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],b=null,m=!1,p=null,x=null,_=null,v=null,M=null,w=null,R=null,y=new j(0,0,0),P=0,S=!1,A=null,T=null,C=null,E=null,I=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,k=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=k>=2);let B=null,V={},K=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),Z=new Ie().fromArray(K),Q=new Ie().fromArray(G);function ht(q,vt,ct,yt){let Tt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(q,dt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ct;Bt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return dt}let H={};H[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(zr),qt(!1),Te(Kc),W(i.CULL_FACE),Wt(Zn);function W(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function nt(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function st(q,vt){return f[q]!==vt?(i.bindFramebuffer(q,vt),f[q]=vt,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function lt(q,vt){let ct=g,yt=!1;if(q){ct=d.get(vt),ct===void 0&&(ct=[],d.set(vt,ct));let Tt=q.textures;if(ct.length!==Tt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Bt=Tt.length;dt<Bt;dt++)ct[dt]=i.COLOR_ATTACHMENT0+dt;ct.length=Tt.length,yt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ct)}function mt(q){return b!==q?(i.useProgram(q),b=q,!0):!1}let Ct={[sr]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};Ct[wf]=i.MIN,Ct[Tf]=i.MAX;let At={[Ef]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[Qc]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(q,vt,ct,yt,Tt,dt,Bt,Ft,ye,de){if(q===Zn){m===!0&&(nt(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),q!==_f){if(q!==p||de!==S){if((x!==sr||M!==sr)&&(i.blendEquation(i.FUNC_ADD),x=sr,M=sr),de)switch(q){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",q);break}else switch(q){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gs:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",q);break}_=null,v=null,w=null,R=null,y.set(0,0,0),P=0,p=q,S=de}return}Tt=Tt||vt,dt=dt||ct,Bt=Bt||yt,(vt!==x||Tt!==M)&&(i.blendEquationSeparate(Ct[vt],Ct[Tt]),x=vt,M=Tt),(ct!==_||yt!==v||dt!==w||Bt!==R)&&(i.blendFuncSeparate(At[ct],At[yt],At[dt],At[Bt]),_=ct,v=yt,w=dt,R=Bt),(Ft.equals(y)===!1||ye!==P)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ye),y.copy(Ft),P=ye),p=q,S=!1}function oe(q,vt){q.side===ue?nt(i.CULL_FACE):W(i.CULL_FACE);let ct=q.side===tn;vt&&(ct=!ct),qt(ct),q.blending===Fi&&q.transparent===!1?Wt(Zn):Wt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let yt=q.stencilWrite;a.setTest(yt),yt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function Te(q){q!==xf?(W(i.CULL_FACE),q!==T&&(q===Kc?i.cullFace(i.BACK):q===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),T=q}function He(q){q!==C&&(D&&i.lineWidth(q),C=q)}function fn(q,vt,ct){q?(W(i.POLYGON_OFFSET_FILL),(E!==vt||I!==ct)&&(E=vt,I=ct,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,ct))):nt(i.POLYGON_OFFSET_FILL)}function Re(q){q?W(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function Oe(q){q===void 0&&(q=i.TEXTURE0+F-1),B!==q&&(i.activeTexture(q),B=q)}function $(q,vt,ct){ct===void 0&&(B===null?ct=i.TEXTURE0+F-1:ct=B);let yt=V[ct];yt===void 0&&(yt={type:void 0,texture:void 0},V[ct]=yt),(yt.type!==q||yt.texture!==vt)&&(B!==ct&&(i.activeTexture(ct),B=ct),i.bindTexture(q,vt||H[q]),yt.type=q,yt.texture=vt)}function en(){let q=V[B];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function L(){try{i.texSubImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function J(){try{i.texSubImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function pt(){try{i.texStorage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function gt(){try{i.texStorage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function at(){try{i.texImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function ut(){try{i.texImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function bt(q){return h[q]!==void 0?h[q]:i.getParameter(q)}function Ut(q,vt){h[q]!==vt&&(i.pixelStorei(q,vt),h[q]=vt)}function _t(q){Z.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Z.copy(q))}function xt(q){Q.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function Ot(q,vt){let ct=c.get(vt);ct===void 0&&(ct=new WeakMap,c.set(vt,ct));let yt=ct.get(q);yt===void 0&&(yt=i.getUniformBlockIndex(vt,q.name),ct.set(q,yt))}function Vt(q,vt){let yt=c.get(vt).get(q);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,q.__bindingPointIndex),l.set(vt,yt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,V={},f={},d=new WeakMap,g=[],b=null,m=!1,p=null,x=null,_=null,v=null,M=null,w=null,R=null,y=new j(0,0,0),P=0,S=!1,A=null,T=null,C=null,E=null,I=null,Z.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:W,disable:nt,bindFramebuffer:st,drawBuffers:lt,useProgram:mt,setBlending:Wt,setMaterial:oe,setFlipSided:qt,setCullFace:Te,setLineWidth:He,setPolygonOffset:fn,setScissorTest:Re,activeTexture:Oe,bindTexture:$,unbindTexture:en,compressedTexImage2D:ge,compressedTexImage3D:z,texImage2D:at,texImage3D:ut,pixelStorei:Ut,getParameter:bt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:L,texSubImage3D:J,compressedTexSubImage2D:it,compressedTexSubImage3D:ot,scissor:_t,viewport:xt,reset:te}}function u_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,L){return g?new OffscreenCanvas(z,L):Vr("canvas")}function m(z,L,J){let it=1,ot=ge(z);if((ot.width>J||ot.height>J)&&(it=J/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let pt=Math.floor(it*ot.width),gt=Math.floor(it*ot.height);f===void 0&&(f=b(pt,gt));let at=L?b(pt,gt):f;return at.width=pt,at.height=gt,at.getContext("2d").drawImage(z,0,0,pt,gt),Gt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+pt+"x"+gt+")."),at}else return"data"in z&&Gt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),z;return z}function p(z){return z.generateMipmaps}function x(z){i.generateMipmap(z)}function _(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(z,L,J,it,ot,pt=!1){if(z!==null){if(i[z]!==void 0)return i[z];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let gt;it&&(gt=t.get("EXT_texture_norm16"),gt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=L;if(L===i.RED&&(J===i.FLOAT&&(at=i.R32F),J===i.HALF_FLOAT&&(at=i.R16F),J===i.UNSIGNED_BYTE&&(at=i.R8),J===i.UNSIGNED_SHORT&&gt&&(at=gt.R16_EXT),J===i.SHORT&&gt&&(at=gt.R16_SNORM_EXT)),L===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.R8UI),J===i.UNSIGNED_SHORT&&(at=i.R16UI),J===i.UNSIGNED_INT&&(at=i.R32UI),J===i.BYTE&&(at=i.R8I),J===i.SHORT&&(at=i.R16I),J===i.INT&&(at=i.R32I)),L===i.RG&&(J===i.FLOAT&&(at=i.RG32F),J===i.HALF_FLOAT&&(at=i.RG16F),J===i.UNSIGNED_BYTE&&(at=i.RG8),J===i.UNSIGNED_SHORT&&gt&&(at=gt.RG16_EXT),J===i.SHORT&&gt&&(at=gt.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RG8UI),J===i.UNSIGNED_SHORT&&(at=i.RG16UI),J===i.UNSIGNED_INT&&(at=i.RG32UI),J===i.BYTE&&(at=i.RG8I),J===i.SHORT&&(at=i.RG16I),J===i.INT&&(at=i.RG32I)),L===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGB8UI),J===i.UNSIGNED_SHORT&&(at=i.RGB16UI),J===i.UNSIGNED_INT&&(at=i.RGB32UI),J===i.BYTE&&(at=i.RGB8I),J===i.SHORT&&(at=i.RGB16I),J===i.INT&&(at=i.RGB32I)),L===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),J===i.UNSIGNED_INT&&(at=i.RGBA32UI),J===i.BYTE&&(at=i.RGBA8I),J===i.SHORT&&(at=i.RGBA16I),J===i.INT&&(at=i.RGBA32I)),L===i.RGB&&(J===i.UNSIGNED_SHORT&&gt&&(at=gt.RGB16_EXT),J===i.SHORT&&gt&&(at=gt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),L===i.RGBA){let ut=pt?ws:ae.getTransfer(ot);J===i.FLOAT&&(at=i.RGBA32F),J===i.HALF_FLOAT&&(at=i.RGBA16F),J===i.UNSIGNED_BYTE&&(at=ut===me?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&gt&&(at=gt.RGBA16_EXT),J===i.SHORT&&gt&&(at=gt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(z,L){let J;return z?L===null||L===Fn||L===jr?J=i.DEPTH24_STENCIL8:L===Dn?J=i.DEPTH32F_STENCIL8:L===Jr&&(J=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Fn||L===jr?J=i.DEPTH_COMPONENT24:L===Dn?J=i.DEPTH_COMPONENT32F:L===Jr&&(J=i.DEPTH_COMPONENT16),J}function w(z,L){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ye&&z.minFilter!==je?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function R(z){let L=z.target;L.removeEventListener("dispose",R),P(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&h.delete(L)}function y(z){let L=z.target;L.removeEventListener("dispose",y),A(L)}function P(z){let L=n.get(z);if(L.__webglInit===void 0)return;let J=z.source,it=d.get(J);if(it){let ot=it[L.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(z),Object.keys(it).length===0&&d.delete(J)}n.remove(z)}function S(z){let L=n.get(z);i.deleteTexture(L.__webglTexture);let J=z.source,it=d.get(J);delete it[L.__cacheKey],o.memory.textures--}function A(z){let L=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(L.__webglFramebuffer[it]))for(let ot=0;ot<L.__webglFramebuffer[it].length;ot++)i.deleteFramebuffer(L.__webglFramebuffer[it][ot]);else i.deleteFramebuffer(L.__webglFramebuffer[it]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[it])}else{if(Array.isArray(L.__webglFramebuffer))for(let it=0;it<L.__webglFramebuffer.length;it++)i.deleteFramebuffer(L.__webglFramebuffer[it]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let it=0;it<L.__webglColorRenderbuffer.length;it++)L.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[it]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let J=z.textures;for(let it=0,ot=J.length;it<ot;it++){let pt=n.get(J[it]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(J[it])}n.remove(z)}let T=0;function C(){T=0}function E(){return T}function I(z){T=z}function F(){let z=T;return z>=r.maxTextures&&Gt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),T+=1,z}function D(z){let L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()}function k(z,L){let J=n.get(z);if(z.isVideoTexture&&$(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&J.__version!==z.version){let it=z.image;if(it===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,z,L);return}}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+L)}function O(z,L){let J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){nt(J,z,L);return}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+L)}function B(z,L){let J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){nt(J,z,L);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+L)}function V(z,L){let J=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&J.__version!==z.version){st(J,z,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+L)}let K={[Qi]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},G={[Ye]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Z={[Xf]:i.NEVER,[Kf]:i.ALWAYS,[Yf]:i.LESS,[Sl]:i.LEQUAL,[qf]:i.EQUAL,[wl]:i.GEQUAL,[$f]:i.GREATER,[Zf]:i.NOTEQUAL};function Q(z,L){if(L.type===Dn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===je||L.magFilter===za||L.magFilter===Ws||L.magFilter===Ni||L.minFilter===je||L.minFilter===za||L.minFilter===Ws||L.minFilter===Ni)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,K[L.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,K[L.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,K[L.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,G[L.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,G[L.minFilter]),L.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Z[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Ye||L.minFilter!==Ws&&L.minFilter!==Ni||L.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function ht(z,L){let J=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",R));let it=L.source,ot=d.get(it);ot===void 0&&(ot={},d.set(it,ot));let pt=D(L);if(pt!==z.__cacheKey){ot[pt]===void 0&&(ot[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ot[pt].usedTimes++;let gt=ot[z.__cacheKey];gt!==void 0&&(ot[z.__cacheKey].usedTimes--,gt.usedTimes===0&&S(L)),z.__cacheKey=pt,z.__webglTexture=ot[pt].texture}return J}function H(z,L,J){return Math.floor(Math.floor(z/J)/L)}function W(z,L,J,it){let pt=z.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,J,it,L.data);else{pt.sort((Ut,_t)=>Ut.start-_t.start);let gt=0;for(let Ut=1;Ut<pt.length;Ut++){let _t=pt[gt],xt=pt[Ut],Ot=_t.start+_t.count,Vt=H(xt.start,L.width,4),te=H(_t.start,L.width,4);xt.start<=Ot+1&&Vt===te&&H(xt.start+xt.count-1,L.width,4)===Vt?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++gt,pt[gt]=xt)}pt.length=gt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let Ut=0,_t=pt.length;Ut<_t;Ut++){let xt=pt[Ut],Ot=Math.floor(xt.start/4),Vt=Math.ceil(xt.count/4),te=Ot%L.width,q=Math.floor(Ot/L.width),vt=Vt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,te,q,vt,ct,J,it,L.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function nt(z,L,J){let it=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(it=i.TEXTURE_3D);let ot=ht(z,L),pt=L.source;e.bindTexture(it,z.__webglTexture,i.TEXTURE0+J);let gt=n.get(pt);if(pt.version!==gt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let ct=ae.getPrimaries(ae.workingColorSpace),yt=L.colorSpace===fi?null:ae.getPrimaries(L.colorSpace),Tt=L.colorSpace===fi||ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let ut=m(L.image,!1,r.maxTextureSize);ut=en(L,ut);let bt=s.convert(L.format,L.colorSpace),Ut=s.convert(L.type),_t=v(L.internalFormat,bt,Ut,L.normalized,L.colorSpace,L.isVideoTexture);Q(it,L);let xt,Ot=L.mipmaps,Vt=L.isVideoTexture!==!0,te=gt.__version===void 0||ot===!0,q=pt.dataReady,vt=w(L,ut);if(L.isDepthTexture)_t=M(L.format===Ui,L.type),te&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,_t,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,_t,ut.width,ut.height,0,bt,Ut,null));else if(L.isDataTexture)if(Ot.length>0){Vt&&te&&e.texStorage2D(i.TEXTURE_2D,vt,_t,Ot[0].width,Ot[0].height);for(let ct=0,yt=Ot.length;ct<yt;ct++)xt=Ot[ct],Vt?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,bt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,ct,_t,xt.width,xt.height,0,bt,Ut,xt.data);L.generateMipmaps=!1}else Vt?(te&&e.texStorage2D(i.TEXTURE_2D,vt,_t,ut.width,ut.height),q&&W(L,ut,bt,Ut)):e.texImage2D(i.TEXTURE_2D,0,_t,ut.width,ut.height,0,bt,Ut,ut.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Vt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,_t,Ot[0].width,Ot[0].height,ut.depth);for(let ct=0,yt=Ot.length;ct<yt;ct++)if(xt=Ot[ct],L.format!==Sn)if(bt!==null)if(Vt){if(q)if(L.layerUpdates.size>0){let Tt=Su(xt.width,xt.height,L.format,L.type);for(let dt of L.layerUpdates){let Bt=xt.data.subarray(dt*Tt/xt.data.BYTES_PER_ELEMENT,(dt+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,dt,xt.width,xt.height,1,bt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,ut.depth,bt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,_t,xt.width,xt.height,ut.depth,0,xt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,ut.depth,bt,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,_t,xt.width,xt.height,ut.depth,0,bt,Ut,xt.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{Vt&&te&&e.texStorage2D(i.TEXTURE_2D,vt,_t,Ot[0].width,Ot[0].height);for(let ct=0,yt=Ot.length;ct<yt;ct++)xt=Ot[ct],L.format!==Sn?bt!==null?Vt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,bt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,_t,xt.width,xt.height,0,xt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,bt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,ct,_t,xt.width,xt.height,0,bt,Ut,xt.data)}else if(L.isDataArrayTexture)if(Vt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,_t,ut.width,ut.height,ut.depth),q)if(L.layerUpdates.size>0){let ct=Su(ut.width,ut.height,L.format,L.type);for(let yt of L.layerUpdates){let Tt=ut.data.subarray(yt*ct/ut.data.BYTES_PER_ELEMENT,(yt+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,ut.width,ut.height,1,bt,Ut,Tt)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Ut,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,ut.width,ut.height,ut.depth,0,bt,Ut,ut.data);else if(L.isData3DTexture)Vt?(te&&e.texStorage3D(i.TEXTURE_3D,vt,_t,ut.width,ut.height,ut.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Ut,ut.data)):e.texImage3D(i.TEXTURE_3D,0,_t,ut.width,ut.height,ut.depth,0,bt,Ut,ut.data);else if(L.isFramebufferTexture){if(te)if(Vt)e.texStorage2D(i.TEXTURE_2D,vt,_t,ut.width,ut.height);else{let ct=ut.width,yt=ut.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,_t,ct,yt,0,bt,Ut,null),ct>>=1,yt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ut.parentNode!==ct){ct.appendChild(ut),h.add(L),ct.onpaint=yt=>{let Tt=yt.changedElements;for(let dt of h)Tt.includes(dt.image)&&(dt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Tt=i.RGBA,dt=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,dt,Bt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&te){let ct=ge(Ot[0]);e.texStorage2D(i.TEXTURE_2D,vt,_t,ct.width,ct.height)}for(let ct=0,yt=Ot.length;ct<yt;ct++)xt=Ot[ct],Vt?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,Ut,xt):e.texImage2D(i.TEXTURE_2D,ct,_t,bt,Ut,xt);L.generateMipmaps=!1}else if(Vt){if(te){let ct=ge(ut);e.texStorage2D(i.TEXTURE_2D,vt,_t,ct.width,ct.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ut,ut)}else e.texImage2D(i.TEXTURE_2D,0,_t,bt,Ut,ut);p(L)&&x(it),gt.__version=pt.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function st(z,L,J){if(L.image.length!==6)return;let it=ht(z,L),ot=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+J);let pt=n.get(ot);if(ot.version!==pt.__version||it===!0){e.activeTexture(i.TEXTURE0+J);let gt=ae.getPrimaries(ae.workingColorSpace),at=L.colorSpace===fi?null:ae.getPrimaries(L.colorSpace),ut=L.colorSpace===fi||gt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let bt=L.isCompressedTexture||L.image[0].isCompressedTexture,Ut=L.image[0]&&L.image[0].isDataTexture,_t=[];for(let dt=0;dt<6;dt++)!bt&&!Ut?_t[dt]=m(L.image[dt],!0,r.maxCubemapSize):_t[dt]=Ut?L.image[dt].image:L.image[dt],_t[dt]=en(L,_t[dt]);let xt=_t[0],Ot=s.convert(L.format,L.colorSpace),Vt=s.convert(L.type),te=v(L.internalFormat,Ot,Vt,L.normalized,L.colorSpace),q=L.isVideoTexture!==!0,vt=pt.__version===void 0||it===!0,ct=ot.dataReady,yt=w(L,xt);Q(i.TEXTURE_CUBE_MAP,L);let Tt;if(bt){q&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,te,xt.width,xt.height);for(let dt=0;dt<6;dt++){Tt=_t[dt].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){let Ft=Tt[Bt];L.format!==Sn?Ot!==null?q?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,te,Ft.width,Ft.height,0,Ft.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,0,0,Ft.width,Ft.height,Ot,Vt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,te,Ft.width,Ft.height,0,Ot,Vt,Ft.data)}}}else{if(Tt=L.mipmaps,q&&vt){Tt.length>0&&yt++;let dt=ge(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,te,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Ut){q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,_t[dt].width,_t[dt].height,Ot,Vt,_t[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,te,_t[dt].width,_t[dt].height,0,Ot,Vt,_t[dt].data);for(let Bt=0;Bt<Tt.length;Bt++){let ye=Tt[Bt].image[dt].image;q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,0,0,ye.width,ye.height,Ot,Vt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,te,ye.width,ye.height,0,Ot,Vt,ye.data)}}else{q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ot,Vt,_t[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,te,Ot,Vt,_t[dt]);for(let Bt=0;Bt<Tt.length;Bt++){let Ft=Tt[Bt];q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,0,0,Ot,Vt,Ft.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,te,Ot,Vt,Ft.image[dt])}}}p(L)&&x(i.TEXTURE_CUBE_MAP),pt.__version=ot.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function lt(z,L,J,it,ot,pt){let gt=s.convert(J.format,J.colorSpace),at=s.convert(J.type),ut=v(J.internalFormat,gt,at,J.normalized,J.colorSpace),bt=n.get(L),Ut=n.get(J);if(Ut.__renderTarget=L,!bt.__hasExternalTextures){let _t=Math.max(1,L.width>>pt),xt=Math.max(1,L.height>>pt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,pt,ut,_t,xt,L.depth,0,gt,at,null):e.texImage2D(ot,pt,ut,_t,xt,0,gt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Oe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ot,Ut.__webglTexture,0,Re(L)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ot,Ut.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(z,L,J){if(i.bindRenderbuffer(i.RENDERBUFFER,z),L.depthBuffer){let it=L.depthTexture,ot=it&&it.isDepthTexture?it.type:null,pt=M(L.stencilBuffer,ot),gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(L),pt,L.width,L.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(L),pt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,pt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,z)}else{let it=L.textures;for(let ot=0;ot<it.length;ot++){let pt=it[ot],gt=s.convert(pt.format,pt.colorSpace),at=s.convert(pt.type),ut=v(pt.internalFormat,gt,at,pt.normalized,pt.colorSpace);Oe(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(L),ut,L.width,L.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(L),ut,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,ut,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(z,L,J){let it=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(L.depthTexture);if(ot.__renderTarget=L,(!ot.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),it){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,L.depthTexture.addEventListener("dispose",R)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Q(i.TEXTURE_CUBE_MAP,L.depthTexture);let bt=s.convert(L.depthTexture.format),Ut=s.convert(L.depthTexture.type),_t;L.depthTexture.format===Hn?_t=i.DEPTH_COMPONENT24:L.depthTexture.format===Ui&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,L.width,L.height,0,bt,Ut,null)}}else k(L.depthTexture,0);let pt=ot.__webglTexture,gt=Re(L),at=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ut=L.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===Hn)Oe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,at,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,at,pt,0);else if(L.depthTexture.format===Ui)Oe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,at,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,at,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(z){let L=n.get(z),J=z.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==z.depthTexture){let it=z.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),it){let ot=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),L.__depthDisposeCallback=ot}L.__boundDepthTexture=it}if(z.depthTexture&&!L.__autoAllocateDepthBuffer)if(J)for(let it=0;it<6;it++)Ct(L.__webglFramebuffer[it],z,it);else{let it=z.texture.mipmaps;it&&it.length>0?Ct(L.__webglFramebuffer[0],z,0):Ct(L.__webglFramebuffer,z,0)}else if(J){L.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[it]),L.__webglDepthbuffer[it]===void 0)L.__webglDepthbuffer[it]=i.createRenderbuffer(),mt(L.__webglDepthbuffer[it],z,!1);else{let ot=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=L.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,pt)}}else{let it=z.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),mt(L.__webglDepthbuffer,z,!1);else{let ot=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(z,L,J){let it=n.get(z);L!==void 0&&lt(it.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&At(z)}function oe(z){let L=z.texture,J=n.get(z),it=n.get(L);z.addEventListener("dispose",y);let ot=z.textures,pt=z.isWebGLCubeRenderTarget===!0,gt=ot.length>1;if(gt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=L.version,o.memory.textures++),pt){J.__webglFramebuffer=[];for(let at=0;at<6;at++)if(L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer[at]=[];for(let ut=0;ut<L.mipmaps.length;ut++)J.__webglFramebuffer[at][ut]=i.createFramebuffer()}else J.__webglFramebuffer[at]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer=[];for(let at=0;at<L.mipmaps.length;at++)J.__webglFramebuffer[at]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(gt)for(let at=0,ut=ot.length;at<ut;at++){let bt=n.get(ot[at]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Oe(z)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){let ut=ot[at];J.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[at]);let bt=s.convert(ut.format,ut.colorSpace),Ut=s.convert(ut.type),_t=v(ut.internalFormat,bt,Ut,ut.normalized,ut.colorSpace,z.isXRRenderTarget===!0),xt=Re(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,J.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(J.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Q(i.TEXTURE_CUBE_MAP,L);for(let at=0;at<6;at++)if(L.mipmaps&&L.mipmaps.length>0)for(let ut=0;ut<L.mipmaps.length;ut++)lt(J.__webglFramebuffer[at][ut],z,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else lt(J.__webglFramebuffer[at],z,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(L)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,ut=ot.length;at<ut;at++){let bt=ot[at],Ut=n.get(bt),_t=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_t=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ut.__webglTexture),Q(_t,bt),lt(J.__webglFramebuffer,z,bt,i.COLOR_ATTACHMENT0+at,_t,0),p(bt)&&x(_t)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(at=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,it.__webglTexture),Q(at,L),L.mipmaps&&L.mipmaps.length>0)for(let ut=0;ut<L.mipmaps.length;ut++)lt(J.__webglFramebuffer[ut],z,L,i.COLOR_ATTACHMENT0,at,ut);else lt(J.__webglFramebuffer,z,L,i.COLOR_ATTACHMENT0,at,0);p(L)&&x(at),e.unbindTexture()}z.depthBuffer&&At(z)}function qt(z){let L=z.textures;for(let J=0,it=L.length;J<it;J++){let ot=L[J];if(p(ot)){let pt=_(z),gt=n.get(ot).__webglTexture;e.bindTexture(pt,gt),x(pt),e.unbindTexture()}}}let Te=[],He=[];function fn(z){if(z.samples>0){if(Oe(z)===!1){let L=z.textures,J=z.width,it=z.height,ot=i.COLOR_BUFFER_BIT,pt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(z),at=L.length>1;if(at)for(let bt=0;bt<L.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let ut=z.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let bt=0;bt<L.length;bt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[bt]);let Ut=n.get(L[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,J,it,0,0,J,it,ot,i.NEAREST),l===!0&&(Te.length=0,He.length=0,Te.push(i.COLOR_ATTACHMENT0+bt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Te.push(pt),He.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let bt=0;bt<L.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[bt]);let Ut=n.get(L[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let L=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function Re(z){return Math.min(r.maxSamples,z.samples)}function Oe(z){let L=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function $(z){let L=o.render.frame;u.get(z)!==L&&(u.set(z,L),z.update())}function en(z,L){let J=z.colorSpace,it=z.format,ot=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||J!==Ss&&J!==fi&&(ae.getTransfer(J)===me?(it!==Sn||ot!==vn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",J)),L}function ge(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.getTextureUnits=E,this.setTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h_(i,t){function e(n,r=fi){let s,o=ae.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cu)return i.BYTE;if(n===uu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===pu)return i.RGB;if(n===Sn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Xs||n===Ys||n===qs||n===$s)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===$a||n===Za||n===Ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===ja||n===Qa||n===tl||n===el||n===Zs||n===nl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ja||n===ja)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return s.COMPRESSED_R11_EAC;if(n===el)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zs)return s.COMPRESSED_RG11_EAC;if(n===nl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===il)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===xl||n===vl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===bl)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===_l||n===Ks||n===Ml)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Is(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:f_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends Wn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,b=typeof XRWebGLBinding<"u",m=new Gu,p={},x=e.getContextAttributes(),_=null,v=null,M=[],w=[],R=new ie,y=null,P=null,S=new Xe;S.viewport=new Ie;let A=new Xe;A.viewport=new Ie;let T=[S,A],C=new Ua,E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=M[H];return W===void 0&&(W=new Xr,M[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=M[H];return W===void 0&&(W=new Xr,M[H]=W),W.getGripSpace()},this.getHand=function(H){let W=M[H];return W===void 0&&(W=new Xr,M[H]=W),W.getHandSpace()};function F(H){let W=w.indexOf(H.inputSource);if(W===-1)return;let nt=M[W];nt!==void 0&&(nt.update(H.inputSource,H.frame,c||o),nt.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let H=0;H<M.length;H++){let W=w[H];W!==null&&(w[H]=null,M[H].disconnect(W))}E=null,I=null,m.reset();for(let H in p)delete p[H];if(t.setRenderTarget(_),d=null,f=null,h=null,r=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),P!==null){let H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,st=null,lt=null;x.depth&&(lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?Ui:Hn,st=x.stencil?jr:Fn);let mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(mt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new qe(f.textureWidth,f.textureHeight,{format:Sn,type:vn,depthTexture:new Yn(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qe(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(H){for(let W=0;W<H.removed.length;W++){let nt=H.removed[W],st=w.indexOf(nt);st>=0&&(w[st]=null,M[st].disconnect(nt))}for(let W=0;W<H.added.length;W++){let nt=H.added[W],st=w.indexOf(nt);if(st===-1){for(let mt=0;mt<M.length;mt++)if(mt>=w.length){w.push(nt),st=mt;break}else if(w[mt]===null){w[mt]=nt,st=mt;break}if(st===-1)break}let lt=M[st];lt&&lt.connect(nt)}}let O=new X,B=new X;function V(H,W,nt){O.setFromMatrixPosition(W.matrixWorld),B.setFromMatrixPosition(nt.matrixWorld);let st=O.distanceTo(B),lt=W.projectionMatrix.elements,mt=nt.projectionMatrix.elements,Ct=lt[14]/(lt[10]-1),At=lt[14]/(lt[10]+1),Wt=(lt[9]+1)/lt[5],oe=(lt[9]-1)/lt[5],qt=(lt[8]-1)/lt[0],Te=(mt[8]+1)/mt[0],He=Ct*qt,fn=Ct*Te,Re=st/(-qt+Te),Oe=Re*-qt;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Oe),H.translateZ(Re),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),lt[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let $=Ct+Re,en=At+Re,ge=He-Oe,z=fn+(st-Oe),L=Wt*At/en*$,J=oe*At/en*$;H.projectionMatrix.makePerspective(ge,z,L,J,$,en),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function K(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,nt=H.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),C.near=A.near=S.near=W,C.far=A.far=S.far=nt,(E!==C.near||I!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),E=C.near,I=C.far),C.layers.mask=H.layers.mask|6,S.layers.mask=C.layers.mask&-5,A.layers.mask=C.layers.mask&-3;let st=H.parent,lt=C.cameras;K(C,st);for(let mt=0;mt<lt.length;mt++)K(lt[mt],st);lt.length===2?V(C,S,A):C.projectionMatrix.copy(S.projectionMatrix),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),G(H,C,st)};function G(H,W,nt){nt===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(nt.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=da*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(H){return p[H]};let Z=null;function Q(H,W){if(u=W.getViewerPose(c||o),g=W,u!==null){let nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let st=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,st=!0);for(let At=0;At<nt.length;At++){let Wt=nt[At],oe=null;if(d!==null)oe=d.getViewport(Wt);else{let Te=h.getViewSubImage(f,Wt);oe=Te.viewport,At===0&&(t.setRenderTargetTextures(v,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(v))}let qt=T[At];qt===void 0&&(qt=new Xe,qt.layers.enable(At),qt.viewport=new Ie,T[At]=qt),qt.matrix.fromArray(Wt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Wt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(oe.x,oe.y,oe.width,oe.height),At===0&&(C.matrix.copy(qt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),st===!0&&C.cameras.push(qt)}let lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let At=h.getDepthInformation(nt[0]);At&&At.isValid&&At.texture&&m.init(At,r.renderState)}if(lt&&lt.includes("camera-access")&&b){t.state.unbindTexture(),h=n.getBinding();for(let At=0;At<nt.length;At++){let Wt=nt[At].camera;if(Wt){let oe=p[Wt];oe||(oe=new Is,p[Wt]=oe);let qt=h.getCameraImage(Wt);oe.sourceTexture=qt}}}}for(let nt=0;nt<M.length;nt++){let st=w[nt],lt=M[nt];st!==null&&lt!==void 0&&lt.update(st,W,c||o)}Z&&Z(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let ht=new Id;ht.setAnimationLoop(Q),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}},p_=new ve,Od=new $t;Od.set(-1,0,0,0,1,0,0,0,1);function m_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,_,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Od),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function g_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(m(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",x));let R=M.program;n.updateUBOMapping(v,R);let y=t.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function u(v){let M=h();v.__bindingPointIndex=M;let w=i.createBuffer(),R=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],w=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,P=w.length;y<P;y++){let S=w[y];if(Array.isArray(S))for(let A=0,T=S.length;A<T;A++)d(S[A],y,A,R);else d(S,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,R){if(b(v,M,w,R)===!0){let y=v.__offset,P=v.value;if(Array.isArray(P)){let S=0;for(let A=0;A<P.length;A++){let T=P[A],C=p(T);g(T,v.__data,S),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(S+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,R){let y=v.value,P=M+"_"+w;if(R[P]===void 0)return typeof y=="number"||typeof y=="boolean"?R[P]=y:ArrayBuffer.isView(y)?R[P]=y.slice():R[P]=y.clone(),!0;{let S=R[P];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return R[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function m(v){let M=v.uniforms,w=0,R=16;for(let P=0,S=M.length;P<S;P++){let A=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,C=A.length;T<C;T++){let E=A[T],I=Array.isArray(E.value)?E.value:[E.value];for(let F=0,D=I.length;F<D;F++){let k=I[F],O=p(k),B=w%R,V=B%O.boundary,K=B+V;w+=V,K!==0&&R-K<O.storage&&(w+=R-K),E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=O.storage}}}let y=w%R;return y>0&&(w+=R-y),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var b_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function x_(){return Kn===null&&(Kn=new ba(b_,16,16,Oi,Nn),Kn.name="DFG_LUT",Kn.minFilter=je,Kn.magFilter=je,Kn.wrapS=bn,Kn.wrapT=bn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var cr=class{constructor(t={}){let{canvas:e=jf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=d,m=new Set([Ya,Xa,Wa]),p=new Set([vn,Fn,Jr,jr,Ga,Ha]),x=new Uint32Array(4),_=new Int32Array(4),v=new X,M=null,w=null,R=[],y=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,A=!1,T=null,C=null,E=null,I=null;this._outputColorSpace=Ce;let F=0,D=0,k=null,O=-1,B=null,V=new Ie,K=new Ie,G=null,Z=new j(0),Q=0,ht=e.width,H=e.height,W=1,nt=null,st=null,lt=new Ie(0,0,ht,H),mt=new Ie(0,0,ht,H),Ct=!1,At=new Cs,Wt=!1,oe=!1,qt=new ve,Te=new X,He=new Ie,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Oe(){return k===null?W:1}let $=n;function en(U,Y){return e.getContext(U,Y)}let ge,z,L,J,it,ot,pt,gt,at,ut,bt,Ut,_t,xt,Ot,Vt,te,q,vt,ct,yt,Tt,dt;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",En,!1),$===null){let Y="webgl2";if($=en(Y,U),$===null)throw en(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(U){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Ht("WebGLRenderer: "+U.message),U}function Bt(){ge=new Tv($),ge.init(),yt=new h_($,ge),z=new mv($,ge,t,yt),L=new c_($,ge),z.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),C=$.createFramebuffer(),E=$.createFramebuffer(),I=$.createFramebuffer(),J=new Rv($),it=new Zy,ot=new u_($,ge,L,it,z,yt,J),pt=new wv(S),gt=new Pg($),Tt=new dv($,gt),at=new Ev($,gt,J,Tt),ut=new Pv($,at,gt,Tt,J),q=new Cv($,z,ot),Ot=new gv(it),bt=new $y(S,pt,ge,z,Tt,Ot),Ut=new m_(S,it),_t=new Jy,xt=new i_(ge),te=new fv(S,pt,L,ut,g,l),Vt=new l_(S,ut,z),dt=new g_($,J,z,L),vt=new pv($,ge,J),ct=new Av($,ge,J),J.programs=bt.programs,S.capabilities=z,S.extensions=ge,S.properties=it,S.renderLists=_t,S.shadowMap=Vt,S.state=L,S.info=J}b!==vn&&(P=new Lv(b,e.width,e.height,a,r,s));let Ft=new Hu(S,$);this.xr=Ft,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let U=ge.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=ge.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(U){U!==void 0&&(W=U,this.setSize(ht,H,!1))},this.getSize=function(U){return U.set(ht,H)},this.setSize=function(U,Y,rt=!0){if(Ft.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=U,H=Y,e.width=Math.floor(U*W),e.height=Math.floor(Y*W),rt===!0&&(e.style.width=U+"px",e.style.height=Y+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,U,Y)},this.getDrawingBufferSize=function(U){return U.set(ht*W,H*W).floor()},this.setDrawingBufferSize=function(U,Y,rt){ht=U,H=Y,W=rt,e.width=Math.floor(U*rt),e.height=Math.floor(Y*rt),this.setViewport(0,0,U,Y)},this.setEffects=function(U){if(b===vn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Y=0;Y<U.length;Y++)if(U[Y].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(V)},this.getViewport=function(U){return U.copy(lt)},this.setViewport=function(U,Y,rt,tt){U.isVector4?lt.set(U.x,U.y,U.z,U.w):lt.set(U,Y,rt,tt),L.viewport(V.copy(lt).multiplyScalar(W).round())},this.getScissor=function(U){return U.copy(mt)},this.setScissor=function(U,Y,rt,tt){U.isVector4?mt.set(U.x,U.y,U.z,U.w):mt.set(U,Y,rt,tt),L.scissor(K.copy(mt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(U){L.setScissorTest(Ct=U)},this.setOpaqueSort=function(U){nt=U},this.setTransparentSort=function(U){st=U},this.getClearColor=function(U){return U.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(U=!0,Y=!0,rt=!0){let tt=0;if(U){let et=!1;if(k!==null){let wt=k.texture.format;et=m.has(wt)}if(et){let wt=k.texture.type,Rt=p.has(wt),St=te.getClearColor(),It=te.getClearAlpha(),Dt=St.r,ee=St.g,se=St.b;Rt?(x[0]=Dt,x[1]=ee,x[2]=se,x[3]=It,$.clearBufferuiv($.COLOR,0,x)):(_[0]=Dt,_[1]=ee,_[2]=se,_[3]=It,$.clearBufferiv($.COLOR,0,_))}else tt|=$.COLOR_BUFFER_BIT}Y&&(tt|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&$.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),T=U},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",En,!1),te.dispose(),_t.dispose(),xt.dispose(),it.dispose(),pt.dispose(),ut.dispose(),Tt.dispose(),dt.dispose(),bt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Ih),Ft.removeEventListener("sessionend",Lh),qi.stop()};function ye(U){U.preventDefault(),vu("WebGLRenderer: Context Lost."),A=!0}function de(){vu("WebGLRenderer: Context Restored."),A=!1;let U=J.autoReset,Y=Vt.enabled,rt=Vt.autoUpdate,tt=Vt.needsUpdate,et=Vt.type;Bt(),J.autoReset=U,Vt.enabled=Y,Vt.autoUpdate=rt,Vt.needsUpdate=tt,Vt.type=et}function En(U){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function zn(U){let Y=U.target;Y.removeEventListener("dispose",zn),w0(Y)}function w0(U){T0(U),it.remove(U)}function T0(U){let Y=it.get(U).programs;Y!==void 0&&(Y.forEach(function(rt){bt.releaseProgram(rt)}),U.isShaderMaterial&&bt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Y,rt,tt,et,wt){Y===null&&(Y=fn);let Rt=et.isMesh&&et.matrixWorld.determinantAffine()<0,St=R0(U,Y,rt,tt,et);L.setMaterial(tt,Rt);let It=rt.index,Dt=1;if(tt.wireframe===!0){if(It=at.getWireframeAttribute(rt),It===void 0)return;Dt=2}let ee=rt.drawRange,se=rt.attributes.position,Lt=ee.start*Dt,pe=(ee.start+ee.count)*Dt;wt!==null&&(Lt=Math.max(Lt,wt.start*Dt),pe=Math.min(pe,(wt.start+wt.count)*Dt)),It!==null?(Lt=Math.max(Lt,0),pe=Math.min(pe,It.count)):se!=null&&(Lt=Math.max(Lt,0),pe=Math.min(pe,se.count));let Be=pe-Lt;if(Be<0||Be===1/0)return;Tt.setup(et,tt,St,rt,It);let Me,xe=vt;if(It!==null&&(Me=gt.get(It),xe=ct,xe.setIndex(Me)),et.isMesh)tt.wireframe===!0?(L.setLineWidth(tt.wireframeLinewidth*Oe()),xe.setMode($.LINES)):xe.setMode($.TRIANGLES);else if(et.isLine){let nn=tt.linewidth;nn===void 0&&(nn=1),L.setLineWidth(nn*Oe()),et.isLineSegments?xe.setMode($.LINES):et.isLineLoop?xe.setMode($.LINE_LOOP):xe.setMode($.LINE_STRIP)}else et.isPoints?xe.setMode($.POINTS):et.isSprite&&xe.setMode($.TRIANGLES);if(et.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))xe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let nn=et._multiDrawStarts,Et=et._multiDrawCounts,un=et._multiDrawCount,he=It?gt.get(It).bytesPerElement:1,yn=it.get(tt).currentProgram.getUniforms();for(let Vn=0;Vn<un;Vn++)yn.setValue($,"_gl_DrawID",Vn),xe.render(nn[Vn]/he,Et[Vn])}else if(et.isInstancedMesh)xe.renderInstances(Lt,Be,et.count);else if(rt.isInstancedBufferGeometry){let nn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Et=Math.min(rt.instanceCount,nn);xe.renderInstances(Lt,Be,Et)}else xe.render(Lt,Be)};function Ph(U,Y,rt,tt){T!==null&&U.isNodeMaterial&&T.setObject(tt,U),Wt===!0&&Ot.setState(U,rt,!1),U.transparent===!0&&U.side===ue&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,Co(U,Y,tt),U.side=$n,U.needsUpdate=!0,Co(U,Y,tt),U.side=ue):Co(U,Y,tt)}this.compile=function(U,Y,rt=null){rt===null&&(rt=U),T!==null&&T.renderStart(U,Y,rt),w=xt.get(rt),w.init(Y),y.push(w),rt.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),U!==rt&&U.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,Wt=Ot.init(this.clippingPlanes,oe),Wt===!0&&Ot.setGlobalState(this.clippingPlanes,Y),T!==null&&Vt.render(w.state.shadowsArray,rt,Y);let tt=new Set;return U.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let wt=et.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let St=wt[Rt];Ph(St,rt,Y,et),tt.add(St)}else Ph(wt,rt,Y,et),tt.add(wt)}),w=y.pop(),T!==null&&T.renderEnd(),tt},this.compileAsync=function(U,Y,rt=null){let tt=this.compile(U,Y,rt);return new Promise(et=>{function wt(){if(tt.forEach(function(Rt){let It=it.get(Rt).currentProgram;(It===void 0||It.isReady())&&tt.delete(Rt)}),tt.size===0){et(U);return}setTimeout(wt,10)}ge.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let pc=null;function E0(U){pc&&pc(U)}function Ih(){qi.stop()}function Lh(){qi.start()}let qi=new Id;qi.setAnimationLoop(E0),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(U){pc=U,Ft.setAnimationLoop(U),U===null?qi.stop():qi.start()},Ft.addEventListener("sessionstart",Ih),Ft.addEventListener("sessionend",Lh),this.render=function(U,Y){if(Y!==void 0&&Y.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T!==null&&T.renderStart(U,Y);let rt=Ft.enabled===!0&&Ft.isPresenting===!0,tt=P!==null&&(k===null||rt)&&P.begin(S,k);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(Y),Y=Ft.getCamera()),U.isScene===!0&&U.onBeforeRender(S,U,Y,k),w=xt.get(U,y.length),w.init(Y),w.state.textureUnits=ot.getTextureUnits(),y.push(w),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(qt,In,Y.reversedDepth),oe=this.localClippingEnabled,Wt=Ot.init(this.clippingPlanes,oe),M=_t.get(U,R.length),M.init(),R.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){let Rt=S.xr.getDepthSensingMesh();Rt!==null&&mc(Rt,Y,-1/0,S.sortObjects)}mc(U,Y,0,S.sortObjects),M.finish(),T!==null&&T.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(nt,st),Re=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Re&&te.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Ot.beginShadows();let et=w.state.shadowsArray;if(Vt.render(et,U,Y),Wt===!0&&Ot.endShadows(),(tt&&P.hasRenderPass())===!1){let Rt=M.opaque,St=M.transmissive;if(w.setupLights(),Y.isArrayCamera){let It=Y.cameras;if(St.length>0)for(let Dt=0,ee=It.length;Dt<ee;Dt++){let se=It[Dt];Dh(Rt,St,U,se)}Re&&te.render(U);for(let Dt=0,ee=It.length;Dt<ee;Dt++){let se=It[Dt];Fh(M,U,se,se.viewport)}}else St.length>0&&Dh(Rt,St,U,Y),Re&&te.render(U),Fh(M,U,Y)}k!==null&&D===0&&(ot.updateMultisampleRenderTarget(k),ot.updateRenderTargetMipmap(k)),tt&&P.end(S),U.isScene===!0&&U.onAfterRender(S,U,Y),Tt.resetDefaultState(),O=-1,B=null,y.pop(),y.length>0?(w=y[y.length-1],ot.setTextureUnits(w.state.textureUnits),Wt===!0&&Ot.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,T!==null&&T.renderEnd()};function mc(U,Y,rt,tt){if(U.visible===!1)return;if(U.layers.test(Y.layers)){if(U.isGroup)rt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Y);else if(U.isLightProbeGrid)w.pushLightProbeGrid(U);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(At)){tt&&He.setFromMatrixPosition(U.matrixWorld).applyMatrix4(qt);let Rt=ut.update(U),St=U.material;St.visible&&M.push(U,Rt,St,rt,He.z,null,Y)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(At))){let Rt=ut.update(U),St=U.material;if(tt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),He.copy(U.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),He.copy(Rt.boundingSphere.center)),He.applyMatrix4(U.matrixWorld).applyMatrix4(qt)),Array.isArray(St)){let It=Rt.groups;for(let Dt=0,ee=It.length;Dt<ee;Dt++){let se=It[Dt],Lt=St[se.materialIndex];Lt&&Lt.visible&&M.push(U,Rt,Lt,rt,He.z,se,Y)}}else St.visible&&M.push(U,Rt,St,rt,He.z,null,Y)}}let wt=U.children;for(let Rt=0,St=wt.length;Rt<St;Rt++)mc(wt[Rt],Y,rt,tt)}function Fh(U,Y,rt,tt){let{opaque:et,transmissive:wt,transparent:Rt}=U;w.setupLightsView(rt),Wt===!0&&Ot.setGlobalState(S.clippingPlanes,rt),tt&&L.viewport(V.copy(tt)),et.length>0&&Ro(et,Y,rt),wt.length>0&&Ro(wt,Y,rt),Rt.length>0&&Ro(Rt,Y,rt),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Dh(U,Y,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[tt.id]===void 0){let Lt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[tt.id]=new qe(1,1,{generateMipmaps:!0,type:Lt?Nn:vn,minFilter:Ni,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let wt=w.state.transmissionRenderTarget[tt.id],Rt=tt.viewport||V;wt.setSize(Rt.z*S.transmissionResolutionScale,Rt.w*S.transmissionResolutionScale);let St=S.getRenderTarget(),It=S.getActiveCubeFace(),Dt=S.getActiveMipmapLevel();S.setRenderTarget(wt),S.getClearColor(Z),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),Re&&te.render(rt);let ee=S.toneMapping;S.toneMapping=Ln;let se=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),w.setupLightsView(tt),Wt===!0&&Ot.setGlobalState(S.clippingPlanes,tt),Ro(U,rt,tt),ot.updateMultisampleRenderTarget(wt),ot.updateRenderTargetMipmap(wt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let pe=0,Be=Y.length;pe<Be;pe++){let Me=Y[pe],{object:xe,geometry:nn,material:Et,group:un}=Me;if(Et.side===ue&&xe.layers.test(tt.layers)){let he=Et.side;Et.side=tn,Et.needsUpdate=!0,Nh(xe,rt,tt,nn,Et,un),Et.side=he,Et.needsUpdate=!0,Lt=!0}}Lt===!0&&(ot.updateMultisampleRenderTarget(wt),ot.updateRenderTargetMipmap(wt))}S.setRenderTarget(St,It,Dt),S.setClearColor(Z,Q),se!==void 0&&(tt.viewport=se),S.toneMapping=ee}function Ro(U,Y,rt){let tt=Y.isScene===!0?Y.overrideMaterial:null;for(let et=0,wt=U.length;et<wt;et++){let Rt=U[et],{object:St,geometry:It,group:Dt}=Rt,ee=Rt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),St.layers.test(rt.layers)&&Nh(St,Y,rt,It,ee,Dt)}}function Nh(U,Y,rt,tt,et,wt){T!==null&&et.isNodeMaterial&&T.setObject(U,et),U.onBeforeRender(S,Y,rt,tt,et,wt),U.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),et.onBeforeRender(S,Y,rt,tt,U,wt),et.transparent===!0&&et.side===ue&&et.forceSinglePass===!1?(et.side=tn,et.needsUpdate=!0,S.renderBufferDirect(rt,Y,tt,et,U,wt),et.side=$n,et.needsUpdate=!0,S.renderBufferDirect(rt,Y,tt,et,U,wt),et.side=ue):S.renderBufferDirect(rt,Y,tt,et,U,wt),U.onAfterRender(S,Y,rt,tt,et,wt)}function Co(U,Y,rt){Y.isScene!==!0&&(Y=fn);let tt=it.get(U),et=w.state.lights,wt=w.state.shadowsArray,Rt=et.state.version,St=bt.getParameters(U,et.state,wt,Y,rt,w.state.lightProbeGridArray),It=bt.getProgramCacheKey(St),Dt=tt.programs;tt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?Y.environment:null,tt.fog=Y.fog;let ee=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;tt.envMap=pt.get(U.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&U.envMap===null?Y.environmentRotation:U.envMapRotation,Dt===void 0&&(U.addEventListener("dispose",zn),Dt=new Map,tt.programs=Dt);let se=Dt.get(It);if(se!==void 0){if(tt.currentProgram===se&&tt.lightsStateVersion===Rt)return Oh(U,St),se}else St.uniforms=bt.getUniforms(U),T!==null&&U.isNodeMaterial&&T.build(U,rt,St),U.onBeforeCompile(St,S),se=bt.acquireProgram(St,It),Dt.set(It,se),tt.uniforms=St.uniforms;let Lt=tt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),Oh(U,St),tt.needsLights=P0(U),tt.lightsStateVersion=Rt,tt.needsLights&&(Lt.ambientLightColor.value=et.state.ambient,Lt.lightProbe.value=et.state.probe,Lt.sunLights.value=et.state.sun,Lt.sunLightShadows.value=et.state.sunShadow,Lt.directionalLights.value=et.state.directional,Lt.directionalLightShadows.value=et.state.directionalShadow,Lt.spotLights.value=et.state.spot,Lt.spotLightShadows.value=et.state.spotShadow,Lt.rectAreaLights.value=et.state.rectArea,Lt.ltc_1.value=et.state.rectAreaLTC1,Lt.ltc_2.value=et.state.rectAreaLTC2,Lt.pointLights.value=et.state.point,Lt.pointLightShadows.value=et.state.pointShadow,Lt.hemisphereLights.value=et.state.hemi,Lt.sunShadowMatrix.value=et.state.sunShadowMatrix,Lt.sunShadowCascade.value=et.state.sunShadowCascade,Lt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Lt.spotLightMatrix.value=et.state.spotLightMatrix,Lt.spotLightMap.value=et.state.spotLightMap,Lt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=w.state.lightProbeGridArray.length>0,tt.currentProgram=se,tt.uniformsList=null,se}function Uh(U){if(U.uniformsList===null){let Y=U.currentProgram.getUniforms();U.uniformsList=es.seqWithValue(Y.seq,U.uniforms)}return U.uniformsList}function Oh(U,Y){let rt=it.get(U);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function A0(U,Y){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,tt=U.length;rt<tt;rt++){let et=U[rt];if(et.texture!==null&&et.boundingBox.containsPoint(v))return et}return null}function R0(U,Y,rt,tt,et){Y.isScene!==!0&&(Y=fn),ot.resetTextureUnits();let wt=Y.fog,Rt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Y.environment:null,St=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ae.workingColorSpace,It=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Dt=pt.get(tt.envMap||Rt,It),ee=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Lt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Be=!!rt.morphAttributes.color,Me=Ln;tt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Me=S.toneMapping);let xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,nn=xe!==void 0?xe.length:0,Et=it.get(tt),un=w.state.lights;if(Wt===!0&&(oe===!0||U!==B)){let _e=U===B&&tt.id===O;Ot.setState(tt,U,_e)}let he=!1;tt.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==un.state.version||Et.outputColorSpace!==St||et.isBatchedMesh&&Et.batching===!1||!et.isBatchedMesh&&Et.batching===!0||et.isBatchedMesh&&Et.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Et.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Et.instancing===!1||!et.isInstancedMesh&&Et.instancing===!0||et.isSkinnedMesh&&Et.skinning===!1||!et.isSkinnedMesh&&Et.skinning===!0||et.isInstancedMesh&&Et.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Et.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Et.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Et.instancingMorph===!1&&et.morphTexture!==null||Et.envMap!==Dt||tt.fog===!0&&Et.fog!==wt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==ee||Et.vertexTangents!==se||Et.morphTargets!==Lt||Et.morphNormals!==pe||Et.morphColors!==Be||Et.toneMapping!==Me||Et.morphTargetsCount!==nn||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Et.__version=tt.version);let yn=Et.currentProgram;he===!0&&(yn=Co(tt,Y,et),T&&tt.isNodeMaterial&&T.onUpdateProgram(tt,yn,Et));let Vn=!1,xi=!1,Sr=!1,be=yn.getUniforms(),De=Et.uniforms;if(L.useProgram(yn.program)&&(Vn=!0,xi=!0,Sr=!0),tt.id!==O&&(O=tt.id,xi=!0),Et.needsLights){let _e=A0(w.state.lightProbeGridArray,et);Et.lightProbeGrid!==_e&&(Et.lightProbeGrid=_e,xi=!0)}if(Vn||B!==U){L.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),be.setValue($,"projectionMatrix",U.projectionMatrix),be.setValue($,"viewMatrix",U.matrixWorldInverse);let yi=be.map.cameraPosition;yi!==void 0&&yi.setValue($,Te.setFromMatrixPosition(U.matrixWorld)),z.logarithmicDepthBuffer&&be.setValue($,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&be.setValue($,"isOrthographic",U.isOrthographicCamera===!0),B!==U&&(B=U,xi=!0,Sr=!0)}if(Et.needsLights&&(un.state.sunShadowMap.length>0&&be.setValue($,"sunShadowMap",un.state.sunShadowMap,ot),un.state.directionalShadowMap.length>0&&be.setValue($,"directionalShadowMap",un.state.directionalShadowMap,ot),un.state.spotShadowMap.length>0&&be.setValue($,"spotShadowMap",un.state.spotShadowMap,ot),un.state.pointShadowMap.length>0&&be.setValue($,"pointShadowMap",un.state.pointShadowMap,ot)),et.isSkinnedMesh){be.setOptional($,et,"bindMatrix"),be.setOptional($,et,"bindMatrixInverse");let _e=et.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),be.setValue($,"boneTexture",_e.boneTexture,ot))}et.isBatchedMesh&&(be.setOptional($,et,"batchingTexture"),be.setValue($,"batchingTexture",et._matricesTexture,ot),be.setOptional($,et,"batchingIdTexture"),be.setValue($,"batchingIdTexture",et._indirectTexture,ot),be.setOptional($,et,"batchingColorTexture"),et._colorsTexture!==null&&be.setValue($,"batchingColorTexture",et._colorsTexture,ot));let vi=rt.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&q.update(et,rt,yn),(xi||Et.receiveShadow!==et.receiveShadow)&&(Et.receiveShadow=et.receiveShadow,be.setValue($,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Y.environment!==null&&(De.envMapIntensity.value=Y.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=x_()),xi){if(be.setValue($,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&C0(De,Sr),wt&&tt.fog===!0&&Ut.refreshFogUniforms(De,wt),Ut.refreshMaterialUniforms(De,tt,W,H,w.state.transmissionRenderTarget[U.id]),Et.needsLights&&Et.lightProbeGrid){let _e=Et.lightProbeGrid;De.probesSH.value=_e.texture,De.probesMin.value.copy(_e.boundingBox.min),De.probesMax.value.copy(_e.boundingBox.max),De.probesResolution.value.copy(_e.resolution)}es.upload($,Uh(Et),De,ot)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(es.upload($,Uh(Et),De,ot),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&be.setValue($,"center",et.center),be.setValue($,"modelViewMatrix",et.modelViewMatrix),be.setValue($,"normalMatrix",et.normalMatrix),be.setValue($,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let _e=tt.uniformsGroups;for(let yi=0,wr=_e.length;yi<wr;yi++){let kh=_e[yi];dt.update(kh,yn),dt.bind(kh,yn)}}return yn}function C0(U,Y){U.ambientLightColor.needsUpdate=Y,U.lightProbe.needsUpdate=Y,U.sunLights.needsUpdate=Y,U.sunLightShadows.needsUpdate=Y,U.directionalLights.needsUpdate=Y,U.directionalLightShadows.needsUpdate=Y,U.pointLights.needsUpdate=Y,U.pointLightShadows.needsUpdate=Y,U.spotLights.needsUpdate=Y,U.spotLightShadows.needsUpdate=Y,U.rectAreaLights.needsUpdate=Y,U.hemisphereLights.needsUpdate=Y}function P0(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(U,Y,rt){let tt=it.get(U);tt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),it.get(U.texture).__webglTexture=Y,it.get(U.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Y){let rt=it.get(U);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(U,Y=0,rt=0){k=U,F=Y,D=rt;let tt=null,et=!1,wt=!1;if(U){let St=it.get(U);if(St.__useDefaultFramebuffer!==void 0){L.bindFramebuffer($.FRAMEBUFFER,St.__webglFramebuffer),V.copy(U.viewport),K.copy(U.scissor),G=U.scissorTest,L.viewport(V),L.scissor(K),L.setScissorTest(G),O=-1;return}else if(St.__webglFramebuffer===void 0)ot.setupRenderTarget(U);else if(St.__hasExternalTextures)ot.rebindTextures(U,it.get(U.texture).__webglTexture,it.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let ee=U.depthTexture;if(St.__boundDepthTexture!==ee){if(ee!==null&&it.has(ee)&&(U.width!==ee.image.width||U.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(U)}}let It=U.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Dt=it.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Dt[Y])?tt=Dt[Y][rt]:tt=Dt[Y],et=!0):U.samples>0&&ot.useMultisampledRTT(U)===!1?tt=it.get(U).__webglMultisampledFramebuffer:Array.isArray(Dt)?tt=Dt[rt]:tt=Dt,V.copy(U.viewport),K.copy(U.scissor),G=U.scissorTest}else V.copy(lt).multiplyScalar(W).floor(),K.copy(mt).multiplyScalar(W).floor(),G=Ct;if(rt!==0&&(tt=C),L.bindFramebuffer($.FRAMEBUFFER,tt)&&L.drawBuffers(U,tt),L.viewport(V),L.scissor(K),L.setScissorTest(G),et){let St=it.get(U.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,St.__webglTexture,rt)}else if(wt){let St=Y;for(let It=0;It<U.textures.length;It++){let Dt=it.get(U.textures[It]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+It,Dt.__webglTexture,rt,St)}}else if(U!==null&&rt!==0){let St=it.get(U.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,St.__webglTexture,rt)}O=-1};function Bh(U){let Y=it.get(U);return(Y.__readFormat!==U.format||Y.__readType!==U.type)&&(Y.__readFormat=U.format,Y.__readType=U.type,Y.__formatReadable=z.textureFormatReadable(U.format),Y.__typeReadable=z.textureTypeReadable(U.type)),Y}this.readRenderTargetPixels=function(U,Y,rt,tt,et,wt,Rt,St=0){if(!(U&&U.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=it.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){L.bindFramebuffer($.FRAMEBUFFER,It);try{let Dt=U.textures[St],ee=Dt.format,se=Dt.type;U.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);let Lt=Bh(Dt);if(Lt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=U.width-tt&&rt>=0&&rt<=U.height-et&&$.readPixels(Y,rt,tt,et,yt.convert(ee),yt.convert(se),wt)}finally{let Dt=k!==null?it.get(k).__webglFramebuffer:null;L.bindFramebuffer($.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(U,Y,rt,tt,et,wt,Rt,St=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=it.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(Y>=0&&Y<=U.width-tt&&rt>=0&&rt<=U.height-et){L.bindFramebuffer($.FRAMEBUFFER,It);let Dt=U.textures[St],ee=Dt.format,se=Dt.type;U.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);let Lt=Bh(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,pe),$.bufferData($.PIXEL_PACK_BUFFER,wt.byteLength,$.STREAM_READ),$.readPixels(Y,rt,tt,et,yt.convert(ee),yt.convert(se),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Be=k!==null?it.get(k).__webglFramebuffer:null;L.bindFramebuffer($.FRAMEBUFFER,Be);let Me=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await td($,Me,4),$.bindBuffer($.PIXEL_PACK_BUFFER,pe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,wt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(pe),$.deleteSync(Me),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Y=null,rt=0){let tt=Math.pow(2,-rt),et=Math.floor(U.image.width*tt),wt=Math.floor(U.image.height*tt),Rt=Y!==null?Y.x:0,St=Y!==null?Y.y:0;ot.setTexture2D(U,0),$.copyTexSubImage2D($.TEXTURE_2D,rt,0,0,Rt,St,et,wt),L.unbindTexture()},this.copyTextureToTexture=function(U,Y,rt=null,tt=null,et=0,wt=0){let Rt,St,It,Dt,ee,se,Lt,pe,Be,Me=U.isCompressedTexture?U.mipmaps[wt]:U.image;if(rt!==null)Rt=rt.max.x-rt.min.x,St=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,Dt=rt.min.x,ee=rt.min.y,se=rt.isBox3?rt.min.z:0;else{let De=Math.pow(2,-et);Rt=Math.floor(Me.width*De),St=Math.floor(Me.height*De),U.isDataArrayTexture?It=Me.depth:U.isData3DTexture?It=Math.floor(Me.depth*De):It=1,Dt=0,ee=0,se=0}tt!==null?(Lt=tt.x,pe=tt.y,Be=tt.z):(Lt=0,pe=0,Be=0);let xe=yt.convert(Y.format),nn=yt.convert(Y.type),Et;Y.isData3DTexture?(ot.setTexture3D(Y,0),Et=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ot.setTexture2DArray(Y,0),Et=$.TEXTURE_2D_ARRAY):(ot.setTexture2D(Y,0),Et=$.TEXTURE_2D),L.activeTexture($.TEXTURE0),L.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);let un=L.getParameter($.UNPACK_ROW_LENGTH),he=L.getParameter($.UNPACK_IMAGE_HEIGHT),yn=L.getParameter($.UNPACK_SKIP_PIXELS),Vn=L.getParameter($.UNPACK_SKIP_ROWS),xi=L.getParameter($.UNPACK_SKIP_IMAGES);L.pixelStorei($.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei($.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei($.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei($.UNPACK_SKIP_ROWS,ee),L.pixelStorei($.UNPACK_SKIP_IMAGES,se);let Sr=U.isDataArrayTexture||U.isData3DTexture,be=Y.isDataArrayTexture||Y.isData3DTexture;if(U.isDepthTexture){let De=it.get(U),vi=it.get(Y),_e=it.get(De.__renderTarget),yi=it.get(vi.__renderTarget);L.bindFramebuffer($.READ_FRAMEBUFFER,_e.__webglFramebuffer),L.bindFramebuffer($.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let wr=0;wr<It;wr++)Sr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(U).__webglTexture,et,se+wr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(Y).__webglTexture,wt,Be+wr)),$.blitFramebuffer(Dt,ee,Rt,St,Lt,pe,Rt,St,$.DEPTH_BUFFER_BIT,$.NEAREST);L.bindFramebuffer($.READ_FRAMEBUFFER,null),L.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(et!==0||U.isRenderTargetTexture||it.has(U)){let De=it.get(U),vi=it.get(Y);L.bindFramebuffer($.READ_FRAMEBUFFER,E),L.bindFramebuffer($.DRAW_FRAMEBUFFER,I);for(let _e=0;_e<It;_e++)Sr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,De.__webglTexture,et,se+_e):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,De.__webglTexture,et),be?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,vi.__webglTexture,wt,Be+_e):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,vi.__webglTexture,wt),et!==0?$.blitFramebuffer(Dt,ee,Rt,St,Lt,pe,Rt,St,$.COLOR_BUFFER_BIT,$.NEAREST):be?$.copyTexSubImage3D(Et,wt,Lt,pe,Be+_e,Dt,ee,Rt,St):$.copyTexSubImage2D(Et,wt,Lt,pe,Dt,ee,Rt,St);L.bindFramebuffer($.READ_FRAMEBUFFER,null),L.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else be?U.isDataTexture||U.isData3DTexture?$.texSubImage3D(Et,wt,Lt,pe,Be,Rt,St,It,xe,nn,Me.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(Et,wt,Lt,pe,Be,Rt,St,It,xe,Me.data):$.texSubImage3D(Et,wt,Lt,pe,Be,Rt,St,It,xe,nn,Me):U.isDataTexture?$.texSubImage2D($.TEXTURE_2D,wt,Lt,pe,Rt,St,xe,nn,Me.data):U.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,wt,Lt,pe,Me.width,Me.height,xe,Me.data):$.texSubImage2D($.TEXTURE_2D,wt,Lt,pe,Rt,St,xe,nn,Me);L.pixelStorei($.UNPACK_ROW_LENGTH,un),L.pixelStorei($.UNPACK_IMAGE_HEIGHT,he),L.pixelStorei($.UNPACK_SKIP_PIXELS,yn),L.pixelStorei($.UNPACK_SKIP_ROWS,Vn),L.pixelStorei($.UNPACK_SKIP_IMAGES,xi),wt===0&&Y.generateMipmaps&&$.generateMipmap(Et),L.unbindTexture()},this.initRenderTarget=function(U){it.get(U).__webglFramebuffer===void 0&&ot.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ot.setTextureCube(U,0):U.isData3DTexture?ot.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ot.setTexture2DArray(U,0):ot.setTexture2D(U,0),L.unbindTexture()},this.resetState=function(){F=0,D=0,k=null,L.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function Bd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function kd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function zd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var v_=[],Wu=new Map,y_=0;function eo(i){v_=i,Wu=new Map(i.flatMap(t=>t.items.map(e=>[__(t.id,e.id),e]))),y_++}function __(i,t){return`pack:${i}:${t}`}function Vd(i){return i.startsWith("pack:")}function Il(i){return Vd(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Xu(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}var M_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Gd(i){return we(i)?.parts.find(t=>t.screen)}function we(i){if(!Vd(i))return;let t=Wu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=M_[e];return r?Wu.get(`pack:${r}:${n.join(":")}`):void 0}function cn(i,t){let e=we(t.type);if(t.mount_y!=null)return t.mount_y;let n=Yd(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Ll;if(Hd.has(t.type))return Math.max(0,i.height-Wd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Xd(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:ur(t)}}var is={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Un(i){return i==="hedge"||i==="fence"||i==="pergola"}function Yu(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Un(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Dl(i){return[...i.rooms,...Yu(i)]}function w_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function T_(i,t,e,n){return hr(i,t)+is[t.type]-no(i,t,e,n)}var qu=-.2,Fl={set:!1,level:qu};function $d(i){let t=i?.settings.terrain??null;Fl={set:t?.level!=null,level:t?.level??qu}}function Nl(i,t){return Fl.level}function Zd(i){return i.elevation>.3?0:Fl.set?Fl.level-i.elevation:qu}function hr(i,t){return Zd(i)+(t.offset??0)}function no(i,t,e,n){return t.type==="pool"?0:w_(t,e,n)}function Kd(i,t,e){let n=(i.outdoor??[]).filter(s=>!Un(s.type)&&s.type!=="pool"&&Kt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?T_(i,r,t,e):Zd(i)}function Ul(i,t){return hr(i,t)+(t.above?jd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function E_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?jd(i):1.5}function $u(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Un(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Kt(n,e.points)))}function Jd(i,t){return!t.above&&!$u(i,t)?Ol(i,t)-.05:Ul(i,t)-E_(t)}function Ol(i,t){return Ul(i,t)-.15}function jd(i){return i.height&&i.height>.3?i.height:1.2}var A_={type:"none",pitch:35,overhang:.4},ME={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...A_}};var Qd=.3;var tp=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ll=1.75;var Hd=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Wd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var ep=new Set(["stairs","stairs_u"]);function np(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function ip(i){return tp.has(i)||!!we(i)?.light}var R_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ur(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var qd=.04,C_=1.2;function Xd(i,t,e,n=0){let r=0;for(let s of i.furniture)!(R_.has(s.type)||we(s.type)?.surface)||!Kt([t,e],ki(s))||s.type==="worktop"&&n>0&&s.h-qd>=C_&&n<=s.h-qd-.02||(r=Math.max(r,s.h));return r}var P_=4;function rp(i){let t=(i.gangs??[]).slice(0,P_);return t.length?t:[{entity:null}]}function Yd(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var S_=new Set([...tp,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var I_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],L_=["standard","bars","glass_wall"];function fr(i,t){return i.type==="door"?i.style&&I_.includes(i.style)?i.style:t?"front":"interior":i.style&&L_.includes(i.style)?i.style:"standard"}function sp(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function op(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function On(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function jn(i){return Math.abs(On(i))}function Bi(i){let t=On(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function ap(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function lp(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function ki(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Kt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function fp(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var Ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],zi=(i,t)=>[i[0]+t[0],i[1]+t[1]],di=(i,t)=>[i[0]*t,i[1]*t],ro=(i,t)=>i[0]*t[0]+i[1]*t[1],rs=(i,t)=>i[0]*t[1]-i[1]*t[0],io=i=>Math.hypot(i[0],i[1]),Qn=i=>{let t=io(i)||1;return[i[0]/t,i[1]/t]},cp=i=>[-i[1],i[0]],up=i=>[i[1],-i[0]];function pi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let A=0;A<o.length;A++)if(Math.abs(o[A][0]-S[0])<=n&&Math.abs(o[A][1]-S[1])<=n)return A;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let A=S.points;if(A.length<3||Math.abs(On(A))<1e-6)continue;let T=On(A)>0,C=A.map(a);for(let E=0;E<A.length;E++){let I=C[E],F=C[(E+1)%A.length];I!==F&&l.push(T?{u:I,v:F,room:S.id,edge:E,forward:!0}:{u:F,v:I,room:S.id,edge:E,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),u=new Set;for(let S of i){let A=S.points;A.length<3||(S.wall_splits??[]).forEach((T,C)=>{if(!T||C>=A.length)return;let E=A[C],I=Ze(A[(C+1)%A.length],E),F=io(I);for(let D of T)D>n&&D<F-n&&u.add(a(zi(E,di(I,D/F))))})}let h=[];for(let S of l){let A=o[S.u],T=o[S.v],C=Ze(T,A),E=io(C),I=di(C,1/E),F=[];for(let k=0;k<o.length;k++){if(k===S.u||k===S.v)continue;let O=Ze(o[k],A),B=ro(O,I);B<=n||B>=E-n||Math.abs(rs(I,O))<=n&&F.push({t:B,id:k})}F.sort((k,O)=>k.t-O.t);let D=[{t:0,id:S.u},...F,{t:E,id:S.v}];for(let k=0;k+1<D.length;k++){let O=D[k],B=D[k+1],V=S.forward?O.t:E-B.t,K=S.forward?B.t:E-O.t;h.push({u:O.id,v:B.id,room:S.room,edge:S.edge,t0:V,t1:K})}}let f=new Map;for(let S of h){let A=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,T=f.get(A);T||f.set(A,T=[]),T.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),g=new Map;for(let S of h){let A=`${S.room}:${S.edge}`;g.set(A,[...g.get(A)??[],S.t0].sort((T,C)=>T-C))}let b=S=>{let A=i.find(C=>C.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(A))return A;let T=g.get(`${S.room}:${S.edge}`)??[];return A[T.indexOf(S.t0)]??null},m=S=>{let A=S.map(b).filter(C=>typeof C=="number"&&C>0);if(A.length)return Math.min(...A);let T=S.map(C=>i.find(E=>E.id===C.room)?.ceiling_height);return T.every(C=>typeof C=="number"&&C>0)?Math.max(...T):void 0},p=S=>{let A=S.map(T=>i.find(C=>C.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return A.length?Math.max(...A):void 0},x=S=>{for(let A of S){let T=i.find(F=>F.id===A.room),C=T?.wall_slopes?.[A.edge];if(!T||!C)continue;let E=T.points[A.edge],I=T.points[(A.edge+1)%T.points.length];return{p:[E[0],E[1]],q:[I[0],I[1]],h0:Math.max(.05,C[0]),h1:Math.max(.05,C[1])}}},_=S=>S.some(A=>b(A)===0),v=S=>{let A=x(S);return A?{height:Math.max(A.h0,A.h1),slope:A}:{height:m(S)}},M=[],w=[];for(let S of f.values()){let A=S[0],T=S.find(C=>C!==A&&C.u===A.v&&C.v===A.u&&C.room!==A.room);for(let C of S)C!==A&&C!==T&&C.room!==A.room&&r.push(`overlap:${A.room}:${C.room}`);if(_(T?[A,T]:[A])){T&&M.push([A.room,T.room]);continue}if(T){let C=p([A,T])??t.interior;w.push({a:A.u,b:A.v,left:C/2,right:C/2,exterior:!1,roomLeft:A.room,roomRight:T.room,sources:[d(A),d(T)],...v([A,T])})}else w.push({a:A.u,b:A.v,left:0,right:p([A])??t.exterior,exterior:!0,roomLeft:A.room,roomRight:null,sources:[d(A)],...v([A])})}let R=S=>Qn(Ze(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let A=new Set;for(let C of[S.a,S.b])for(let E of w)!E.exterior||E.free||E.a!==C&&E.b!==C||Math.abs(rs(R(S),R(E)))>1e-6||(E.roomLeft===S.roomLeft?A.add("left"):E.roomLeft===S.roomRight&&A.add("right"));if(A.size!==1)continue;let T=S.left+S.right;A.has("left")?(S.left=0,S.right=T):(S.left=T,S.right=0)}s.forEach((S,A)=>{let[T,C]=c[A];if(T===C)return;let E=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],I=i.find(k=>k.points.length>=3&&Kt(E,k.points))?.id??null,F=(S.thickness??t.interior)/2,D=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:T,b:C,left:F,right:F,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:D})}),w=D_(w,o,u);let y=U_(w,o);return{walls:w.map((S,A)=>{let T=o[S.a],C=o[S.b],E=y.get(`${A}:a`),I=y.get(`${A}:b`),F=O_([E.right,I.left,C,I.right,E.left,T],1e-6);return{id:F_(T,C),a:[T[0],T[1]],b:[C[0],C[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:F,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function F_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function hp(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function D_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=hp(l)),c.a!==o&&(c=hp(c)),l.a===c.b)continue;let u=Qn(Ze(t[l.b],t[l.a])),h=Qn(Ze(t[c.b],t[c.a]));if(Math.abs(rs(u,h))>1e-6||ro(u,h)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:N_(l.sources,c.sources)},d=n.filter((g,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function N_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function U_(i,t){let e=new Map;i.forEach((r,s)=>{let o=Qn(Ze(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:di(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:zi(o,di(cp(c.d),c.left)),right:zi(o,di(up(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=zi(o,di(cp(u.d),u.left)),d=zi(o,di(up(h.d),h.right)),g=rs(u.d,h.d);if(Math.abs(g)<1e-4)continue;let b=rs(Ze(d,f),h.d)/g,m=zi(f,di(u.d,b));io(Ze(m,o))>l||(n.get(u.key).left=m,n.get(h.key).right=m)}}return n}function O_(i,t){let e=i.filter((r,s)=>io(Ze(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Ze(o,s),c=Ze(a,o);if(Math.abs(rs(Qn(l),Qn(c)))<1e-7&&ro(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function Zu(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Qn(Ze(r,n));return zi(n,di(s,e))}function so(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Qn(Ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,zi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function oo(i,t,e){if(!t.wall)return B_(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Zu(e.room,0,t.offset);return{wall:n,s:ro(Ze(r,n.a),Qn(Ze(n.b,n.a)))}}function B_(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Zu(t,e,n);return{wall:r,s:ro(Ze(o,r.a),Qn(Ze(r.b,r.a)))}}return null}var lo=Math.PI/180;function ti(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function wn(i){let t=ti(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*lo),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*lo);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=xp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var k_=.14;function pp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function mp(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Kt([t,e],s.points))continue;let[u,h]=Vi(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),b=((f?null:co(os(s,{u0:d,u1:d,a:d,b:d}),u,h))??wn(s).y(h))-k_;n=n===null?b:Math.max(n,b)}return n}function Bl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=dp([a[0]-o[0],a[1]-o[1]]),u=dp([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],g=h[1]+f[1],b=Math.hypot(d,g);if(b<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let m=(d*h[0]+g*h[1])/b,p=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/b*t*p,a[1]+g/b*t*p])}return r}function dp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function gp(i,t){if(i.points&&i.points.length>=3)return Bl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function bp(i,t,e,n){let r=pi(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let s=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])o.set(s(f),[...o.get(s(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let g=(o.get(s(d))??[]).find(b=>!l.has(b));if(!g||(l.add(g),d=s(g.a)===s(d)?g.b:g.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(jn(f))>Math.abs(jn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],g=c[(h+1)%c.length],b=(d[0]-f[0])*(g[1]-d[1])-(d[1]-f[1])*(g[0]-d[0]);Math.abs(b)>1e-6&&u.push(d)}return u.length>=3?Bl(u,e):null}var ao=Math.tan(30*lo);function xp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+ao*(i-o+s))/(2*ao))),u=a+(c-s)*ao;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*ao:f<=i-o?l+(i-o-f)*ao:e+(i-f)*r}}function os(i,t){let e=ti(i),n=wn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(x,_)=>[x,_,n.y(_)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*lo),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*lo);if(i.shape==="pent"){let x=[u,h,f,d];return{faces:[x],rim:x,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let x=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),_=[e.u0+x,n.vr,n.rh],v=[e.u1-x,n.vr,n.rh],M=i.shape==="pyramid"?[[u,h,_],[h,f,_],[f,d,_],[d,u,_]]:[[u,h,v,_],[_,v,f,d],[d,u,_],[h,f,v]],w=i.shape==="pyramid"?[[u,_],[d,_],[h,_],[f,_]]:[[_,v],[u,_],[d,_],[h,v],[f,v]];return{faces:M,rim:[u,h,f,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let x=Math.min(n.y(0),n.y(r)),_=x+(n.rh-x)*.55,v=g>1e-6?Math.min(n.vr,(_-i.eave_a)/g):n.vr,M=b>1e-6?Math.max(n.vr,r-(_-i.eave_b)/b):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-_)/Math.max(.2,g)),R=[e.u0+w,n.vr,n.rh],y=[e.u1-w,n.vr,n.rh],P=[a,v,_],S=[a,M,_],A=[l,v,_],T=[l,M,_];return{faces:[[u,h,A,y,R,P],[R,y,T,f,d,S],[S,P,R],[A,T,y]],rim:[u,h,A,T,f,d,S,P],ridges:[[R,y],[P,R],[S,R],[A,y],[T,y]],gable:[[0,n.y(0)],[v,_],[M,_],[r,n.y(r)]]}}if(i.shape==="mansard"){let x=xp(r,i.eave_a,i.eave_b,g,b),_=[a,x.vla,x.yla],v=[l,x.vla,x.yla],M=[a,r-x.vlb,x.ylb],w=[l,r-x.vlb,x.ylb],R=[a,x.vr,x.rh],y=[l,x.vr,x.rh];return{faces:[[u,h,v,_],[_,v,y,R],[R,y,w,M],[M,w,f,d]],rim:[u,h,v,y,w,f,d,M,R,_],ridges:[[R,y],[_,v],[M,w]],gable:[[0,n.y(0)],[x.vla,x.yla],[x.vr,x.rh],[r-x.vlb,x.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,h,p,m],[m,p,f,d]],rim:[u,h,p,f,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function co(i,t,e){let n=null;for(let r of i.faces){if(!Kt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],g=c*d-u*f,b=u*h-l*d,m=l*f-c*h;if(Math.abs(b)<1e-9)continue;let p=s[2]-(g*(t-s[0])+m*(e-s[1]))/b;n=n===null?p:Math.min(n,p)}return n}function Vi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function z_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function kl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=z_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Ku(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ti(t),n=wn(t).rh,r=os(i,{u0:0,u1:0,a:0,b:0}),s=wn(i),o=g=>{let[b,m]=e.at(g,e.w/2),[p,x]=Vi(i,b,m);return co(r,p,x)??s.y(x)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let g=.5;g<h;g+=.05)if(o(l+u*g)>=n-.02){f=l+u*g;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function vp(i,t){let e=Ku(i,t),n=ti(e),r=wn(e),s=os(i,{u0:0,u1:0,a:0,b:0}),o=wn(i),a=f=>{let[d,g]=n.at(f,n.w/2),[b,m]=Vi(i,d,g);return co(s,b,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,g=c*(f+1)/h,b=l?n.u0+d:n.u1-d,m=l?n.u0+g:n.u1-g,p=a(m),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let P=n.w*y/40;r.y(P)>p+.02&&(x=Math.min(x,P),_=Math.max(_,P))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(m,_),w=Vi(i,v[0],v[1]),R=Vi(i,M[0],M[1]);u.push({u0:Math.min(w[0],R[0]),u1:Math.max(w[0],R[0]),v0:Math.min(w[1],R[1]),v1:Math.max(w[1],R[1])})}return u}function ss(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function yp(i,t){let e=ss(i,0,t.u0,!0),n=ss(i,0,t.u1,!1),r=ss(ss(i,0,t.u0,!1),0,t.u1,!0),s=ss(r,1,t.v0,!0),o=ss(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(jn(a.map(l=>[l[0],l[1]])))>1e-6)}function zl(i,t,e){let n=ti(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>Kt(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function _p(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function V_(i){return wn(i).rh}function Mp(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>kl(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>V_(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,f]=c.points.reduce((d,g)=>[d[0]+g[0]/c.points.length,d[1]+g[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function as(i,t){let e=On(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let g=f/(f-d);n.push([u[0]+(h[0]-u[0])*g,u[1]+(h[1]-u[1])*g])}}}return n}function Sp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Bn=1e-4;function Ju(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function wp(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Bn&&a<1-Bn&&l>-Bn&&l<1+Bn?a:null}function ju(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Bn||o>=1-Bn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Bn?o:null}function G_(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(wp(n,r,o,a)!==null||ju(o,n,r)!==null||ju(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Bn)return!0}}return Kt(i[0],t)||Kt(t[0],i)}function H_(i){let t=i.map(s=>Ju(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let g=h[d],b=h[(d+1)%h.length],m=wp(l,c,g,b)??ju(g,l,c);m!==null&&u.push(m)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Bn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],g=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/g*.001,(f[1]+d[1])/2-(d[0]-f[0])/g*.001];t.some((m,p)=>p!==o&&Kt(b,m))||e.some(([m,p])=>Math.hypot(m[0]-f[0],m[1]-f[1])<Bn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Bn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Ju(o)>1e-6&&n.push(o)}return n}function Tp(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&G_(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:H_(s))}function W_(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Ep(i,t,e=.03){return i.every(n=>Kt(n,t)||t.some((r,s)=>W_(n,r,t[(s+1)%t.length])<=e))}function Ap(i,t){let e=Ju(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function th(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var ls=(i,t)=>!!i.fix&&i.fix.includes(t);function Cp(i,t,e,n){if(i==="h")return e>=n-.01&&t>.01?"hi":"lo";let r=(t+e)/2;return Math.abs(r-n/2)<1e-6?"mid":r<n/2?"lo":"hi"}function Qu(i,t,e,n){let r=0,s=0;for(let o of i){if(!ls(o,t))continue;let[a,l]=th(o,t,e),c=Cp(t,a,l,e);c==="lo"?r=Math.max(r,l):c==="hi"&&(s=Math.max(s,e-a))}return r+s>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0}:{s0:e,s:n,lo:r,hi:s}}function cs(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function Rp(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Vl(n))return[cs(t,n),cs(e,n)];let r=Cp(i,t,e,n.s0),s=e-t;return r==="mid"?[n.s/2-s/2,n.s/2+s/2]:r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Vl(i){return i.lo>0||i.hi>0}function Pp(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:Qu(i.parts,"w",r,t),d:Qu(i.parts,"d",s,e),h:Qu(i.parts,"h",o,n)},l={w:!Vl(a.w)&&i.parts.some(c=>ls(c,"w")),d:!Vl(a.d)&&i.parts.some(c=>ls(c,"d")),h:!Vl(a.h)&&i.parts.some(c=>ls(c,"h"))};return i.parts.map(c=>{let u=x=>{let _=a[x],[v,M]=th(c,x,_.s0);return ls(c,x)&&!l[x]?Rp(x,v,M,_):[cs(v,_),cs(M,_)]},[h,f]=u("w"),[d,g]=u("d"),[b,m]=u("h"),p={...c,x:(h+f)/2/t-.5,w:(f-h)/t,z:(d+g)/2/e-.5,d:(g-d)/e,y:b/n,h:(m-b)/n};if(c.shape==="loft"){let x=(R,y,P,S,A)=>{let T=a[R],C=y??S,E=P??A,I=(C-E/2+.5)*T.s0,F=(C+E/2+.5)*T.s0;if(!ls(c,R)||l[R])return[cs(I,T),cs(F,T)];let[D,k]=th(c,R,T.s0),[O]=Rp(R,D,k,T),B=O-D;return[I+B,F+B]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);p.tx=(_+v)/2/t-.5,p.tw=(v-_)/t,p.tz=(M+w)/2/e-.5,p.td=(w-M)/e}return p})}var X_=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Y_=["wall","pole","pillar","parcel","bank"];function Lp(i){return X_.includes(i.variant??"")?i.variant:"bin240"}function Fp(i){return Y_.includes(i.variant??"")?i.variant:"wall"}var Ue=["#3a3f47","#3a3f47"],dr=["#23262b","#23262b"],kn=["#5a3b25","#5a3b25"],Ee=["#1f4fa8","#1f4fa8"],Gi=["#e3b616","#e3b616"],le=["#2f7d3b","#2f7d3b"],Ip={default:{rest:Ue,bio:kn,paper:Ee,plastic:Gi,glass:le,garden:le,recycling:Gi,other:Ue},DE:{rest:dr,bio:kn,paper:Ee,plastic:Gi,glass:le,garden:le,recycling:Gi},AT:{rest:Ue,bio:kn,paper:[Ue[0],"#c0262d"],plastic:Gi,glass:le,garden:le},CH:{rest:["#d8d8d8","#d8d8d8"],bio:le,paper:Ee,plastic:Ue,glass:le,garden:le},NL:{rest:Ue,bio:le,paper:Ee,plastic:["#3a3f47","#e57a1f"],glass:le,garden:le},BE:{rest:Ue,bio:le,paper:Ee,plastic:Ee,glass:le,garden:le},GB:{rest:dr,bio:["#3a3f47","#5a3b25"],paper:Ee,plastic:Ee,glass:dr,garden:kn,recycling:Ee},US:{rest:dr,bio:le,paper:Ee,plastic:Ee,glass:Ee,garden:le,recycling:Ee},CA:{rest:dr,bio:le,paper:Ee,plastic:Ee,glass:Ee,garden:le,recycling:Ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ue,bio:kn,paper:[Ue[0],"#e3b616"],plastic:[Ue[0],"#e3b616"],recycling:[Ue[0],"#e3b616"],glass:le,garden:le},IT:{rest:Ue,bio:kn,paper:Ee,plastic:Gi,glass:le,garden:le},ES:{rest:Ue,bio:kn,paper:Ee,plastic:Gi,glass:le,garden:le},PT:{rest:Ue,bio:kn,paper:Ee,plastic:Gi,glass:le,garden:le},DK:{rest:dr,bio:le,paper:Ee,plastic:Ue,glass:le,garden:le},SE:{rest:dr,bio:kn,paper:Ee,plastic:Ue,glass:le,garden:le},NO:{rest:Ue,bio:kn,paper:Ee,plastic:Ue,glass:le,garden:le},FI:{rest:Ue,bio:kn,paper:Ee,plastic:Ue,glass:le,garden:le}},Dp="DE";function Np(){return Dp}function q_(i,t){return Ip[t]?.[i]??Ip.default[i]??Ue}function Up(i,t=Dp){let e=q_(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var pr=kt(3662079,.95),eh=kt(3662079,1),Hi=kt(5995775,.34),Op=kt(5995775,.22),Gl=[-.55,.83],Xt=-1,Hl=16,mr=32,Bp=48,nh=64,uo=15,jt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Xt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Zt;return t.setAttribute("position",new zt(this.p,3)),t.setAttribute("color",new zt(this.c,3)),t.setAttribute("fold",new zt(this.f,1)),this.uv&&t.setAttribute("uv",new zt(this.uv,2)),this.tile&&t.setAttribute("tile",new zt(this.tile,2)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=pr,r=Xt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Xt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Xt),this.seg(c,a,n,s)}geometry(){let t=new Zt;return t.setAttribute("position",new zt(this.p,3)),t.setAttribute("color",new zt(this.c,3)),t.setAttribute("fold",new zt(this.f,1)),t}};function kp(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((g,b)=>g+(f.p[b]-g)*d),c:h.c.map((g,b)=>g+(f.c[b]-g)*d),uv:h.uv&&f.uv?h.uv.map((g,b)=>g+(f.uv[b]-g)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let g=0;g<3;g++){let b=h*3+g;for(let m=0;m<3;m++)i.p[b*3+m]=f[g].p[m],i.c[b*3+m]=f[g].c[m];if(i.uv&&f[g].uv)for(let m=0;m<s;m++)i.uv[b*2+m]=f[g].uv[m];if(i.tile&&f[g].tile)for(let m=0;m<2;m++)i.tile[b*2+m]=f[g].tile[m];i.f[b]=d}},c=(h,f)=>{let d=i.p.length/9;for(let g of h)i.p.push(...g.p),i.c.push(...g.c),i.f.push(f),i.uv&&i.uv.push(...g.uv??[.5,.5]),i.tile&&i.tile.push(...g.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(y=>y.p[1]>e+1e-6),g=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let y=0;y<3;y++)i.f[h*3+y]=n;continue}let b=i.f[h*3],m=(y,P)=>a(y,P,(e-y.p[1])/(P.p[1]-y.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],w=m(_,v),R=m(M,_);p===1?(l(h,[_,w,R],n),c([w,v,M],b),c([w,M,R],b)):(l(h,[_,w,R],b),c([w,v,M],n),c([w,M,R],n))}}function zp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var re=Math.PI/180;function kt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function $_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function ei(i,t=[]){let e=i.map(([n,r])=>new ie(n,r));return Us.triangulateShape(e,t.map(n=>n.map(([r,s])=>new ie(r,s))))}function Vp(i,t,e,n,r,s,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],b=t[(d+1)%4],m=e[d],p=e[(d+1)%4],x=b[0]-g[0],_=b[1]-g[1],v=Math.hypot(x,_);if(v<1e-6)continue;let w=.8+.28*((_/v*Gl[0]-x/v*Gl[1]+1)/2),R=(m[0]+p[0]-g[0]-b[0])/2*(-_/v)+(m[1]+p[1]-g[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,r-n)))),P=kt(s,l(n)*w).lerp(a,y),S=kt(s,l(r)*w).lerp(a,y);i.tri([g[0],n,g[1]],[m[0],r,m[1]],[p[0],r,p[1]],P,S,S),i.tri([g[0],n,g[1]],[p[0],r,p[1]],[b[0],n,b[1]],P,S,P)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function Gp(i,t,e,n,r,s,o,a,l,c){let u=new j(l),h=[];for(let m=0;m<c;m++){let p=m/c*Math.PI*2;h.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(m,p)=>{let x=t(m,h[p%c].s);return[x[0],h[p%c].y,x[1]]},d=t(e,r),g=t(n,r),b=(m,p,x,_,v)=>{let M=(p[1]-m[1])*(x[2]-m[2])-(p[2]-m[2])*(x[1]-m[1]),w=(p[2]-m[2])*(x[0]-m[0])-(p[0]-m[0])*(x[2]-m[2]),R=(p[0]-m[0])*(x[1]-m[1])-(p[1]-m[1])*(x[0]-m[0]);M*_[0]+w*_[1]+R*_[2]<0?i.tri(m,x,p,v):i.tri(m,p,x,v)};for(let m=0;m<c;m++){let p=(m+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(p))),_=t((e+n)/2,r+Math.sin(p)*o),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(p)*o,_[1]-v[1]];b(f(e,m),f(n,m+1),f(n,m),M,x),b(f(e,m),f(e,m+1),f(n,m+1),M,x)}for(let[m,p,x]of[[e,g,d],[n,d,g]]){let _=t(m,r),v=[_[0],s,_[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let w=0;w<c;w++)b(v,f(m,w),f(m,w+1),M,u)}}function Ae(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(e+.002,n(g[0],g[1])),l=o.aoFrom??e,c=o.fold??Xt,u=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),h=(o.holes??[]).map(g=>$_(g)>0?[...g].reverse():g),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:ei(t,h);if(o.topFace!==!1){let g=new j(s);for(let[b,m,p]of d){let x=f[b],_=f[m],v=f[p];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],g,g,g,void 0,o.topFold??c)}}if(o.bottom){let g=kt(r,.55);for(let[b,m,p]of d){let x=f[b],_=f[m],v=f[p];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],g,g,g,void 0,c)}}for(let g of[t,...h])for(let b=0;b<g.length;b++){let m=g[b],p=g[(b+1)%g.length],x=p[0]-m[0],_=p[1]-m[1],v=Math.hypot(x,_);if(v<1e-6||o.skipSide?.(m,p))continue;let w=.8+.28*((_/v*Gl[0]-x/v*Gl[1]+1)/2),R=a(m),y=a(p),P=kt(r,u(e)*w),S=kt(r,u(R)*w),A=kt(r,u(y)*w);i.tri([m[0],e,m[1]],[m[0],R,m[1]],[p[0],y,p[1]],P,S,A,void 0,c),i.tri([m[0],e,m[1]],[p[0],y,p[1]],[p[0],e,p[1]],P,A,P,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ft=kt(5995775,.3),Pt=kt(5995775,.17),Yt=kt(3662079,.45),gr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=$p(n)}rotated(t,e,n){let r=n*re,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ae(this.buf,ih(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==ih(l)&&(l.reverse(),c.reverse()),Vp(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,b=t==="x"?n:e,m=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(Gp(this.buf,m,g-o/2,g+o/2,b,d,f,l,c,u),h)for(let p of[g-o/2,g+o/2])for(let x=0;x<u;x++){let _=x/u*Math.PI*2,v=(x+1)/u*Math.PI*2;this.line(m(p,b+Math.sin(_)*f),m(p,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ae(this.buf,ih(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=ft){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Xt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function $p(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function ih(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function br(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function ho(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,Pt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,Yt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Yt)}}}function Hp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);br(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,N.fabric,N.fabricTop,.04,ft),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,N.fabric,N.fabricTop,ft),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,ft),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,ft);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let b=s+c+d*g+.02,m=b+d-.04;i.pad(b,m,u-.08,u+.05,a+h+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,m-.01,a+h*.55,a+h+.14],[b+.03,m-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,N.cushion)}}function Wp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,g=r?[-1,1]:[-1],b=(y,P)=>i.loft([y-.015,y+.015,P-.015,P+.015],[y-.025,y+.025,P-.025,P+.025],0,.07,N.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let y of g)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,ft);for(let y of g){let[P,S]=y<0?[s+.02,s+c]:[o-c,o-.02];i.pad(P,S,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,ft)}i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,N.fabric,N.fabricTop,ft);for(let y of g)y<0?i.loft([s,s+u,a+u,l],[s,s+u*.5,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,ft):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,ft);for(let y of g){let[P,S]=y<0?[s+u,s+c]:[o-c,o-u];i.pad(P,S,f-.08,d,l-h,l,N.fabric,N.fabricTop,.04,ft)}r||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,ft);let m=s+u,p=r?o-u:o-h,x=Math.max(1,Math.round((p-m)/.62)),_=(p-m)/x;for(let y=0;y<x;y++){let P=m+_*y+.02,S=P+_-.04;i.pad(P,S,f-.08,f+.05,a+u+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([P+.01,S-.01,a+u*.55,a+u+.14],[P+.03,S-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,N.cushion)}let v=a+c,M=l-h;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),R=(M-v)/w;for(let y of g)for(let P=0;P<w;P++){let S=v+R*P+.02,A=S+R-.04;y<0?(i.pad(s+u+.02,s+c-.04,f-.08,f+.05,S,A,N.cushion,N.cushion,.04),i.loft([s+u*.55,s+u+.14,S+.01,A-.01],[s+u*.4,s+u*.4+.06,S+.03,A-.03],f+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,S,A,N.cushion,N.cushion,.04),i.loft([o-u-.14,o-u*.55,S+.01,A-.01],[o-u*.4-.06,o-u*.4,S+.03,A-.03],f+.03,n*.93,N.cushion))}}function Z_(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);br(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,ft),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,ft),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Pt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,N.cushion,N.fabricTop,.025,Pt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let g=o+.1+f*d,b=r+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+f-.03-p,b+p*.5,b+m-p*.5],[g+.03,g+f-.03,b,b+m],c,c+.06,N.whiteTop),i.loft([g+.03,g+f-.03,b,b+m],[g+.03+p,g+f-.03-p,b+p*.5,b+m-p*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Pt)}}function K_(i,t,e,n){let r=Math.min(.46,n*.52);br(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,ft),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,ft)}function J_(i,t,e,n){br(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,Yt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function j_(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,ft),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,ft);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Pt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Yt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,Yt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Wi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),ho(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function Q_(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,ft),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,ft),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Pt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=u+.006,c++}}}}function t1(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Wi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,ft)}function e1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,ft);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Pt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Yt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Yt)}var Wl=(i,t)=>kt(parseInt(i.slice(1),16),t).getHex(),Xl=!1;function Zp(i){Xl=i}function n1(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function i1(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new j(f).toArray());return Wl(f,d>.05?Math.max(1,.62/d):1)},a=Xl?o(s[0]):Wl(s[0],.55),l=Xl?o(s[1]):Wl(s[1],.8),c=Wl(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Pt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,ft),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Pt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,ft),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Pt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Pt);return}if(r==="bin1100"){for(let d of[-1,1])for(let g of[-1,1])i.cyl(d*(t/2-.12),g*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,ft),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Pt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Pt);return}let u=Math.min(.2,n*.19),h=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),h+u/2+.01,0,u,.05,u,N.dark,N.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,a,a,ft),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,l,c,Pt),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,Yt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Pt))}function r1(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?N.metal:N.white,o?N.metal:N.whiteTop,ft);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Pt),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,N.white,N.whiteTop,Pt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Pt);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,N.metal,N.metal,Pt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Pt);else{let u=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-u,n/2+u,.004,u*2,N.dark,N.dark,14,Pt),i.seg(c-u*.45,n/2,e/2+.0045,c-u*.45+.004,n/2,e/2+.0045,ft),i.seg(c+u*.45-.004,n/2,e/2+.0045,c+u*.45,n/2,e/2+.0045,ft)}}}function s1(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,ft);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Pt)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,N.white,N.whiteTop,24,ft),i.cyl(0,0,s*.5,n,n+.01,N.metal,N.metal,12)}function o1(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,.05,ft),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,N.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,N.metal,N.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,N.white,N.whiteTop,20,ft),i.cyl(0,0,s*.85,n-.05,n,N.white,N.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,N.dark,N.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,N.dark)}function a1(i,t,e,n,r){let s=N.metal,o=kt(N.metal,1.25).getHex(),a=kt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Pt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,ft),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,ft),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Pt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,ft),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,ft),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Pt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,ft);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let u=-t/2+t/3*l+.015,h=n/2*c+.015;i.box(u,u+t/3-.03,h,h+n/2-.03,e/2,e/2+.01,a,o,Pt),i.box(u+.04,u+t/3-.07,h+n/2-.09,h+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,ft),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,ft),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function l1(i,t,e,n){let r=e/2-Kp;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,ft),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Pt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Pt))}var Kp=.06;function Jp(i,t,e,n){let r=t.rotation*re,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(E,I,F)=>[t.x+E*s-F*o,I,t.z+E*o+F*s],c=(E,I,F,D,k)=>{i.tri(E,I,F,k),i.tri(E,F,D,k),i.tri(E,F,I,k),i.tri(E,D,F,k)},u=(E,I,F,D)=>{let k=l(E[0],E[1],E[2]),O=l(I[0],I[1],I[2]),B=O[0]-k[0],V=O[1]-k[1],K=O[2]-k[2],G=Math.hypot(B,V,K)||1,Z=[B/G,V/G,K/G],Q=Math.abs(Z[1])>.9?[1,0,0]:[0,1,0],ht=[Z[1]*Q[2]-Z[2]*Q[1],Z[2]*Q[0]-Z[0]*Q[2],Z[0]*Q[1]-Z[1]*Q[0]],H=Math.hypot(ht[0],ht[1],ht[2])||1,W=[ht[0]/H*F,ht[1]/H*F,ht[2]/H*F],nt=[Z[1]*W[2]-Z[2]*W[1],Z[2]*W[0]-Z[0]*W[2],Z[0]*W[1]-Z[1]*W[0]],st=[[1,1],[-1,1],[-1,-1],[1,-1]],lt=(mt,Ct)=>[mt[0]+W[0]*st[Ct][0]+nt[0]*st[Ct][1],mt[1]+W[1]*st[Ct][0]+nt[1]*st[Ct][1],mt[2]+W[2]*st[Ct][0]+nt[2]*st[Ct][1]];for(let mt=0;mt<4;mt++){let Ct=(mt+1)%4;i.tri(lt(k,mt),lt(O,mt),lt(O,Ct),D),i.tri(lt(k,mt),lt(O,Ct),lt(k,Ct),D)}},h=(E,I,F,D,k,O,B,V)=>{c(l(E,D,k),l(I,D,k),l(I,D,O),l(E,D,O),V),c(l(E,F,O),l(I,F,O),l(I,D,O),l(E,D,O),B),c(l(E,F,k),l(I,F,k),l(I,F,O),l(E,F,O),B),c(l(E,F,k),l(E,F,O),l(E,D,O),l(E,D,k),B),c(l(I,F,k),l(I,F,O),l(I,D,O),l(I,D,k),B)},f=new j(N.body),d=new j(N.bodyTop),g=new j(N.accent),b=new j(1929098),m=new j(995141),p=(E,I,F,D,k)=>{let O=(B,V,K)=>[B[0]+(V[0]-B[0])*K,B[1]+(V[1]-B[1])*K,B[2]+(V[2]-B[2])*K];for(let B=0;B<k;B++){let V=O(E,I,B/k),K=O(E,I,(B+1)/k),G=O(F,D,(B+1)/k),Z=O(F,D,B/k);c(l(V[0],V[1],V[2]),l(K[0],K[1],K[2]),l(G[0],G[1],G[2]),l(Z[0],Z[1],Z[2]),B%2?b:m)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,R=(E,I)=>{t.awning_valance!==!1&&p([-x+.04,E,I+.01],[x-.04,E,I+.01],[-x+.04,E-.2,I+.01],[x-.04,E-.2,I+.01],M)},y=t.variant??"arm";if(y==="side"){let E=e,I=.05,F=0,D=-x+.08+a*(t.w-.16);h(-x,-x+.1,0,E+.05,F-.05,F+.05,f,d),h(x-.06,x,0,E+.05,F-.03,F+.03,f,d),a>.01&&p([-x+.1,E,F],[-x+.1,I,F],[D,E,F],[D,I,F],Math.max(4,Math.round((E-I)/.3))),u([D,I,F],[D,E,F],.02,g);return}if(y==="vertical"){let E=_,I=Math.min(t.d/2,_+v);h(-x,x,e,e+v,E,I,f,d);let F=(E+I)/2;for(let k of[-x+.02,x-.02])u([k,.02,F],[k,e,F],.02,g);let D=e-a*Math.max(0,e-.04);a>.01&&p([-x+.04,e,F],[x-.04,e,F],[-x+.04,D,F],[x-.04,D,F],M),u([-x+.03,D,F],[x-.03,D,F],.025,g);return}if(y==="pergola"){let E=t.d/2-.05,I=e+v,F=I-(E-_)*Math.tan(w);h(-x,x,e,I,_,_+v,f,d);for(let O of[-x+.05,x-.05])u([O,I,_+v],[O,F,E],.035,g),u([O,0,E],[O,F,E],.045,f);u([-x+.05,F,E],[x-.05,F,E],.035,g);let D=_+v+a*(E-_-v),k=I-(D-_)*Math.tan(w)+.04;a>.01&&p([-x+.08,I+.04,_+v],[x-.08,I+.04,_+v],[-x+.08,k,D],[x-.08,k,D],M),u([-x+.08,k,D],[x-.08,k,D],.025,g);return}let P=_,S=_+v;h(-x,x,e,e+v,P,S,f,d);let A=[S-.02,e+v*.35];if(y==="drop"){let E=Math.max(.3,t.d-v),I=[S,A[1]-E],F=a*(Math.PI/2+w),D=[I[0]+Math.sin(F)*E,I[1]+Math.cos(F)*E];for(let k of[-x+.08,x-.08])u([k,I[1],I[0]],[k,D[1],D[0]],.018,g);a>.01&&p([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],M),u([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,g),a>.05&&R(D[1],D[0]);return}let T=Math.max(0,t.d-v)*a,C=[A[0]+T,A[1]-T*Math.tan(w)];if(T>.01){p([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,C[1],C[0]],[x-.04,C[1],C[0]],M);let E=Math.max(.3,(t.d-v)/2+.05);for(let I of[-1,1]){let F=I*(x-.12),D=[F,e+.02,S-.04],k=[F,C[1]-.02,C[0]],O=Math.hypot(k[2]-D[2],k[1]-D[1]),B=Math.sqrt(Math.max(0,E*E-(O/2)**2)),V=[F-I*Math.min(B,x-.15),(D[1]+k[1])/2,(D[2]+k[2])/2];u(D,V,.018,g),u(V,k,.018,g)}}u([-x+.02,C[1],C[0]],[x-.02,C[1],C[0]],.03,g),T>.05&&R(C[1],C[0])}function jp(i,t,e,n,r){let s=i.p.length;c1(i,t,e,n,r),t.mirror&&Qp(i,s)}function c1(i,t,e,n,r){let s=t.rotation*re,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],u=e+.05,h=e+t.h-.02,f=new j(.75,.1,.14),d=new j(N.dark),g=new j(N.accent),b=t.w/2-.006,m=(v,M,w)=>{let R=w/p,y=new j(2043212).lerp(f,R),P=new j(N.body).lerp(f,R*.8),S=Math.cos(w),A=Math.sin(w),T=(I,F)=>c(v+M*(I*S-F*A),t.d/2+I*A+F*S),C=(I,F,D,k)=>{let[O,B,V,K]=I;i.tri([O[0],F,O[1]],[B[0],F,B[1]],[V[0],D,V[1]],k),i.tri([O[0],F,O[1]],[V[0],D,V[1]],[K[0],D,K[1]],k)},E=(I,F,D,k,O,B,V,K=V)=>{let G=[T(I,B),T(F,B),T(F,O),T(I,O)];C([G[0],G[1],G[1],G[0]],D,k,K),C([G[3],G[2],G[2],G[3]],D,k,V),C([G[0],G[3],G[3],G[0]],D,k,V),C([G[1],G[2],G[2],G[1]],D,k,V),C([G[0],G[1],G[2],G[3]],k,k,V),C([G[3],G[2],G[1],G[0]],D,D,V)};return E(0,b,u,h,-Kp,0,P,y),E(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),E},p=1.83;m(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function u1(i,t,e,n){Wi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,ft);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,Yt)}}function h1(i,t,e,n){Wi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,ft),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,ft),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,Yt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function f1(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,ft),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,Yt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function d1(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,ft),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Yt),i.seg(r,n,s,o,n,a,Yt),i.seg(o,.05,a,o,n,a,Yt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,Yt)}function p1(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,ft),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,ft),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function m1(i,t,e,n){Wi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,ft),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,Yt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,Yt)}function g1(i,t,e,n){Wi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,Yt)}function b1(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,ft),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Pt:null)}}function x1(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,ft)}function v1(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,N.wood,N.woodTop),i.seg(-t/2,d,h,t/2,d,h,ft)}i.seg(-t/2,0,e/2,-t/2,s,e/2,ft);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,Pt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),Yt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,Pt)}}function y1(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:u}=np(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,g=t/2,b=-e/2+l;for(let R=0;R<s;R++){let y=e/2-c*R,P=u*(R+1);i.box(h,f,0,P,y-c,y,N.wood,N.woodTop),i.seg(h,P,y,f,P,y,ft)}i.seg(h,0,e/2,h,u,e/2,ft);let m=u*r,p=.2;i.box(h,g,Math.max(0,m-p),m,-e/2,b,N.wood,N.woodTop),i.seg(h,m,b,f,m,b,ft);for(let R=0;R<o;R++){let y=b+c*R,P=u*(r+1+R);i.box(d,g,Math.max(0,P-u-p),P,y,y+c,N.wood,N.woodTop),i.seg(d,P,y,g,P,y,ft)}i.seg(h,u,e/2,h,m,b,Pt),i.seg(g,m,b,g,n,b+c*(o-1),Pt);let x=.9,_=f-.03,v=d+.03,M=b-.03,w=Math.max(1,o-4);i.seg(_,u+x,e/2-c/2,_,m+x,M,Yt),i.seg(_,m+x,M,v,m+x,M,Yt),i.seg(v,m+x,M,v,u*(r+w)+x,b+c*(w-.5),Yt);for(let R=0;R<s;R+=3){let y=e/2-c*(R+.5);i.seg(_,u*(R+1),y,_,u*(R+1)+x,y,Pt)}for(let R of[_,v])i.seg(R,m,M,R,m+x,M,Pt);for(let R=2;R<w;R+=3){let y=b+c*(R+.5);i.seg(v,u*(r+1+R),y,v,u*(r+1+R)+x,y,Pt)}}function _1(i,t,e,n){br(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,ft),ho(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function M1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,ft),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Pt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Yt)}}function S1(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,ft),ho(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,ft),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,ft);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Xp(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,ft),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,ft),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Pt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,ft),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,ft),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Pt))}function w1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Pt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,ft)}function T1(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,ft),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,ft),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function E1(i,t,e,n){br(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,ft)}function A1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,ft),ho(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function R1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,Yt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Yt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Pt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Yt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Yt)}function C1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,ft),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),ho(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,ft)}function P1(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Yt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,ft)}function Yp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,ft);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Pt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Yt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,Yt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Pt)}}function I1(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,ft),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Pt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,ft);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Pt)}function L1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,ft)}function F1(i,t,e,n){br(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,ft),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Pt)}function D1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,Yt)}function N1(i,t,e,n){let r=sh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,ft);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Pt)}}function U1(i,t,e,n){let r=oh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,ft),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,ft),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Pt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Yt)}function us(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Yt)}}function O1(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,ft),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Yt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,ft),us(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Yt);for(let a of[-1,1])us(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,ft),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Yt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Pt)}function B1(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,ft);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Pt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,ft),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Yt)}}function k1(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,ft),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,ft),us(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,ft);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Yt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function z1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,ft);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;us(i,s,o,r,e/2+.004,24),us(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Pt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Pt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Yt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Pt)}function V1(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,ft);for(let s of[-1,1])us(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Yt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Pt)}function G1(i,t,e,n){let r=Qd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,ft),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function H1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,ft),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Yt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Pt)}function W1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,ft);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,Yt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function X1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,ft),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Pt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Pt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Yt)}function Y1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,ft),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Yt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Pt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,ft),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Yt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,ft);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Yt)}}var sh=.12,oh=2.05;function ah(i,t){let e=q1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function q1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Gd(i.type);if(s){let l=t?cn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?cn(t,i)-ur(i):0,a=$1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function $1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?cn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:sh+.02,y1:sh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:oh+.015,y1:oh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Z1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new j(1-r,1-r,1-r),a=new j(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[g]),o,a,a),i.tri(h(c[d]),h(u[g]),h(c[g]),o,a,o)}$p(t)&&Qp(i,f)}function Yl(i,t,e,n,r=0){K1(i,t,e,n,r)}function Qp(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function K1(i,t,e,n,r){let s=we(n.type)?0:r-ur(n);if(we(n.type)||Math.abs(s)<.001)return qp(i,t,e,n,r);let o=i.p.length,a=t.p.length;qp(i,t,r<.05?e:new jt,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function qp(i,t,e,n,r){let s=n.rotation*re,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(g,b)=>[n.x+l*g*o-b*a,n.z+l*g*a+b*o],u=new gr(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Hp(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Hp(u,h,f,d,1);break;case"sofa_l":Wp(u,h,f,d,!1);break;case"sofa_u":Wp(u,h,f,d,!0);break;case"bed":Z_(u,h,f,d);break;case"chair":K_(u,h,f,d);break;case"table":J_(u,h,f,d);break;case"desk":j_(u,h,f,d);break;case"nightstand":Wi(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,Pt);break;case"wardrobe":Wi(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":Q_(u,h,f,d);break;case"kitchen":t1(u,h,f,d);break;case"fridge":e1(u,h,f,d);break;case"fridge_smart":l1(u,h,f,d);break;case"waste_bin":{let g=i.c.length;i1(u,h,f,d,Lp(n),Up(n,Np())),Xl&&n1(i.c,g);break}case"mailbox":{let g=i.p.length,b=t.p.length;a1(u,h,f,d,Fp(n));let m=ur(n);for(let p=g+1;p<i.p.length;p+=3)i.p[p]+=m;for(let p=b+1;p<t.p.length;p+=3)t.p[p]+=m;if(m>0)return;break}case"wifi_ap":s1(u,h,f,d,n.variant==="wall");return;case"water_heater":if(o1(u,h,f,d,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let g=i.p.length,b=t.p.length;r1(u,h,f,d,rp(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=ur(n);for(let p=g+1;p<i.p.length;p+=3)i.p[p]+=m;for(let p=b+1;p<t.p.length;p+=3)t.p[p]+=m;return}case"awning":return;case"stove":u1(u,h,f,d);break;case"sink":h1(u,h,f,d);break;case"bathtub":f1(u,h,f,d);break;case"shower":d1(u,h,f,d);break;case"wc":p1(u,h,f,d);break;case"washbasin":m1(u,h,f,d);break;case"tv_board":g1(u,h,f,d);break;case"plant":b1(u,h,f,d);break;case"rug":x1(u,h,f);return;case"stairs":v1(u,h,f,d);break;case"stairs_u":y1(u,h,f,d);break;case"stairwell":return;case"sideboard":_1(u,h,f,d);break;case"dresser":M1(u,h,f,d);break;case"tall_cabinet":Wi(u,h,f,d,1,d*.5);break;case"coat_rack":S1(u,h,f,d);break;case"bench":Xp(u,h,f,d,!1);break;case"corner_bench":Xp(u,h,f,d,!0);break;case"bar_stool":w1(u,h,f,d);break;case"office_chair":T1(u,h,f,d);break;case"stool":E1(u,h,f,d);break;case"kitchen_wall":A1(u,h,f,d);return;case"kitchen_tall":R1(u,h,f,d);break;case"island":C1(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,N.whiteTop,N.whiteTop,ft);return;case"dishwasher":P1(u,h,f,d);break;case"washer":Yp(u,h,f,d,!1);break;case"dryer":Yp(u,h,f,d,!0);break;case"bunk_bed":I1(u,h,f,d);break;case"table_round":L1(u,h,f,d);break;case"coffee_table":F1(u,h,f,d);break;case"tv_wall":D1(u,h,f,d);return;case"parking":{let b=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let m=0;m<4;m++)u.seg(b[m][0],.012,b[m][1],b[(m+1)%4][0],.012,b[(m+1)%4][1],Pt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,ft),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,ft);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,N.white,N.whiteTop,ft),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,N.accent);return;case"radiator":N1(u,h,f,d);return;case"ac_unit":U1(u,h,f,d);return;case"inverter":O1(u,h,f,d,n.variant??null);return;case"grid_point":H1(u,h,f,d);break;case"wallbox":W1(u,h,f,d);return;case"pool_pump":B1(u,h,f,d);break;case"pool_filter":k1(u,h,f,d,n.variant??null);break;case"pool_heat_pump":z1(u,h,f,d);break;case"pool_dosing":V1(u,h,f,d);break;case"pool_valve":G1(u,h,f,d);return;case"meter":X1(u,h,f,d);return;case"home_battery":if(Y1(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let g=we(n.type);if(g){let b=Il(n.type);if(ql(u,g,h,f,d,r,null,null,b?m=>Xu(b,m):null),r>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,N.body,N.bodyTop,ft)}}Z1(e,c,h,f,n.type==="plant"?.35:.5)}function rh(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ql(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let u of Pp(t,e,n,r)){if(l?.(u)||a&&!a(u))continue;let h=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,f=h.glow&&o!==null,d=f?o:rh(h.color,!1)??N.body,g=f?o:rh(h.top,!1)??rh(h.color,!0)??kt(d,1.25).getHex(),b=s+h.y*r,m=s+Math.min(r,(h.y+h.h)*r),p=h.edges==="glow"?pr:h.edges==="faint"?Pt:h.edges?ft:null,x=h.rot?i.rotated(h.x*e,h.z*n,h.rot):i;if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))x.lyingCyl(h.axis,h.x*e,h.z*n,b,m,h.axis==="x"?h.w*e:h.d*n,h.axis==="x"?h.d*n:h.w*e,d,g,14,p);else if(h.shape==="cyl")x.cyl(h.x*e,h.z*n,Math.min(h.w*e,h.d*n)/2,b,m,d,g,14,p);else if(h.shape==="loft"){let _=h.tx??h.x,v=h.tz??h.z,M=h.tw??h.w,w=h.td??h.d;x.loft([(h.x-h.w/2)*e,(h.x+h.w/2)*e,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(_-M/2)*e,(_+M/2)*e,(v-w/2)*n,(v+w/2)*n],b,m,d,g,p)}else x.box((h.x-h.w/2)*e,(h.x+h.w/2)*e,b,m,(h.z-h.d/2)*n,(h.z+h.d/2)*n,d,g,p)}}function tm(i,t,e,n,r,s){let o=s*re,a=Math.cos(o),l=Math.sin(o),c=(g,b)=>[e+g*a-b*l,r+g*l+b*a],u=new gr(i,new Le,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function fo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*re,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];ql(new gr(i,new Le,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function em(i,t,e,n,r,s){let o=J1(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*re,l=Math.cos(a),c=Math.sin(a),u=n.mirror?-1:1,h=(f,d)=>[n.x+u*f*l-d*c,n.z+u*f*c+d*l];ql(new gr(i,new Le,h),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function J1(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Xu(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function $l(i,t,e,n,r){let s=e.rotation*re,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];ql(new gr(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var j1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Q1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((r*f-s*h)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*g-n[0],l[1]+f*g-n[1])<.4}))}function im(i,t){return t.type==="pool"?Ol(i,t):hr(i,t)+(Un(t.type)?.01:is[t.type])}function po(i){return On(i)>=0?i:[...i].reverse()}function tM(i,t){let e=i[t];if(Un(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Kt(o,e.points))&&n.push(po(s.points))}return n}function nm(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Ae(i,po([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let g=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],m=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Xt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Xt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Xt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Xt)},p=new j(a),x=new j(kt(o,.9)),_=new j(kt(o,.6));m([g(s,1),b(s,1),b(s,-1),g(s,-1)],p),m([g(r,1),b(r,1),b(r,-1),g(r,-1)],_),m([g(r,1),b(r,1),b(s,1),g(s,1)],x),m([g(r,-1),b(r,-1),b(s,-1),g(s,-1)],x),m([g(r,1),g(r,-1),g(s,-1),g(s,1)],x),m([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function rm(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=hr(e,s),l=(x,_)=>a-no(e,s,x,_),c=a-(s.type==="pool"?0:s.slope??0),u=Un(s.type)&&s.height?s.height:is[s.type],h={...j1[s.type],top:u},f=po(s.points),d=kt(h.edge,h.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let _=0;_<f.length;_++){if(_===g)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Xt)}},m=n??i,p=new j(n?1734832:h.color);switch(s.type){case"pool":{let x=new j(h.side),_=new j(kt(h.side,.55)),v=new j(932440),M=Ol(e,s),w=Ul(e,s),R=Jd(e,s);for(let[y,P,S]of ei(f)){let A=f[y],T=f[P],C=f[S];(n?m:i).tri([A[0],M,A[1]],[C[0],M,C[1]],[T[0],M,T[1]],p,p,p,void 0,Xt),i.tri([A[0],R,A[1]],[C[0],R,C[1]],[T[0],R,T[1]],v,v,v,void 0,Xt)}for(let y=0;y<f.length;y++){let P=f[y],S=f[(y+1)%f.length];i.tri([S[0],R,S[1]],[S[0],w,S[1]],[P[0],w,P[1]],_,x,x,void 0,Xt),i.tri([S[0],R,S[1]],[P[0],w,P[1]],[P[0],R,P[1]],_,x,_,void 0,Xt)}if(!s.above&&$u(e,s)){let y=new j(660258),P=new j(396054),S=R-.2,A=Math.min(a,w);for(let T=0;T<f.length;T++){let C=f[T],E=f[(T+1)%f.length];i.tri([C[0],S,C[1]],[C[0],A,C[1]],[E[0],A,E[1]],P,y,y,void 0,Xt),i.tri([C[0],S,C[1]],[E[0],A,E[1]],[E[0],S,E[1]],P,y,P,void 0,Xt)}for(let[T,C,E]of ei(f)){let I=f[T],F=f[C],D=f[E];i.tri([I[0],S,I[1]],[F[0],S,F[1]],[D[0],S,D[1]],P,P,P,void 0,Xt)}if(s.outline!==!1)for(let T=0;T<f.length;T++){let C=f[T],E=f[(T+1)%f.length];t.seg([C[0],S,C[1]],[E[0],S,E[1]],kt(h.edge,h.edgeAlpha*.35),Xt),t.seg([C[0],S,C[1]],[C[0],A,C[1]],kt(h.edge,h.edgeAlpha*.25),Xt)}}if(w>a+.02){let y=new j(2044240),P=new j(1187123);for(let S=0;S<f.length;S++){let A=f[S],T=f[(S+1)%f.length];i.tri([A[0],a,A[1]],[A[0],w,A[1]],[T[0],w,T[1]],P,y,y,void 0,Xt),i.tri([A[0],a,A[1]],[T[0],w,T[1]],[T[0],a,T[1]],P,y,P,void 0,Xt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),s.outline!==!1)for(let y=0;y<f.length;y++){let P=f[y],S=f[(y+1)%f.length];t.seg([P[0],R+.005,P[1]],[S[0],R+.005,S[1]],kt(h.edge,h.edgeAlpha*.4),Xt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===g)continue;let _=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-_[0],v[1]-_[1]),w=Math.max(1,Math.round(M/2)),R=g>=0&&x===g-1?w:w-1;for(let y=0;y<=R;y++){let P=y/w,S=_[0]+(v[0]-_[0])*P,A=_[1]+(v[1]-_[1])*P,T=l(S,A);Ae(i,po([[S-.04,A-.04],[S+.04,A-.04],[S+.04,A+.04],[S-.04,A+.04]]),T,T+h.top,h.side,h.color)}for(let y of[.35,.85])t.seg([_[0],l(_[0],_[1])+y*h.top,_[1]],[v[0],l(v[0],v[1])+y*h.top,v[1]],d,Xt)}break}case"pergola":{let x=h.top;for(let[_,v]of f){let M=l(_,v);Ae(i,po([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,h.side,h.color)}for(let _=0;_<f.length;_++){if(_===g)continue;let v=f[_],M=f[(_+1)%f.length],w=l(v[0],v[1])+x;if(nm(i,v,M,.12,w-.16,w,h.side,h.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let R=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],R+.25,v[1]],[M[0],y+x-.25,M[1]],d,Xt),t.seg([M[0],y+.25,M[1]],[v[0],R+x-.25,v[1]],d,Xt)}}if(ap(f)){let _=lp(f),v=_.x1-_.x0,M=_.z1-_.z0,w=v>=M,R=w?v:M,y=Math.max(1,Math.round(R/.6));for(let P=1;P<y;P++){let S=(w?_.x0:_.z0)+R*P/y,A=w?[S,_.z0+.06]:[_.x0+.06,S],T=w?[S,_.z1-.06]:[_.x1-.06,S],C=l(A[0],A[1])+x;nm(i,A,T,.06,C-.04,C+.08,h.side,h.color,l(T[0],T[1])-l(A[0],A[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Ae(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),b(()=>a+h.top+.004);let _=s.height&&s.height>.3?s.height:1,v=kt(9417983,.42),M=kt(3662079,.55);for(let w=0;w<f.length;w++){let R=f[w],y=f[(w+1)%f.length];if(Q1(e,R,y))continue;let P=Math.hypot(y[0]-R[0],y[1]-R[1]),S=a+h.top;t.seg([R[0],S+_,R[1]],[y[0],S+_,y[1]],M,Xt),t.seg([R[0],S+.1,R[1]],[y[0],S+.1,y[1]],v,Xt);let A=Math.max(1,Math.round(P/.12));for(let T=0;T<=A;T++){let C=T/A,E=R[0]+(y[0]-R[0])*C,I=R[1]+(y[1]-R[1])*C;t.seg([E,S,I],[E,S+_,I],T===0||T===A?M:v,Xt)}}break}default:{let x=(v,M)=>l(v,M)+h.top,_=tM(r,o);if(Ae(i,f,c,s.slope?x:a+h.top,h.side,h.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let w=v[M],R=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[R[0],x(R[0],R[1])+.004,R[1]],d,Xt)}}}})}var Kl=Math.PI/180,eM=1.13,nM=1.72,lh=.025,xr=.07,sm=.25;function om(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=pi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},g=(b,m,p,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:m,eu:p,es:[0,1,0],n:x,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});g(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&g(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var ch="ground";function uh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function am(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=uh(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Kd(s,o,a)):t.base??0;return{key:ch,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function iM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>rM(x,zl(i,x,x.overhang??t.overhang)));let e=iM(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[lm("main",null,o,l,a,c,u+sm)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,g=d*Math.tan(t.pitch*Kl),b=(x,_,v)=>f?[x,u+v,(l+c)/2+_]:[(o+a)/2+_,u+v,x],[m,p]=f?[o,a]:[l,c];return[-1,1].map(x=>Zl(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(m,x*d,0),b(p,x*d,0),b(m,0,g),t.pitch,()=>[0,p-m]))}function rM(i,t){let e=ti(i),n=wn(i),r=(b,m,p)=>{let[x,_]=e.at(b,m);return[x,p,_]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let b=e.at(a,-s),m=e.at(l,e.w+o);return[lm(i.id,i.id,Math.min(b[0],m[0]),Math.min(b[1],m[1]),Math.max(b[0],m[0]),Math.max(b[1],m[1]),i.eave_a+sm)]}if(i.shape==="pent")return[Zl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Zl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,m=>[f*(m/b),c-d*(m/b)]))}if(e.w-n.vr>.3){let b=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Zl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/b),c-f*(m/b)]))}if(u){let b=n.y(-s),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,m),r(a,-s,b),r(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,b),r(l,e.w+o,m),r(e.u1-h,n.vr,n.rh)]];for(let[x,_,v,M,w]of p){let R=sM(x,i.id,_,v,M,w);R&&g.push(R)}}return g}function sM(i,t,e,n,r,s){let o=mo(vr(r,n));if(o<.3)return null;let a=Xi(vr(r,n)),l=vr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=mo(u);if(h<.3)return null;let f=Xi(u),d=Xi(hm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Xi([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Kl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/h));return[c*x,o-(o-c)*x]},facing:[g[0],g[2]]}}function Zl(i,t,e,n,r,s,o,a){let l=Xi(vr(r,n)),c=Xi(vr(s,n)),u=Xi(hm(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Xi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:mo(vr(r,n)),ls:mo(vr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function lm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function cm(i){let t=i.module_w||eM,e=i.module_h||nM;return i.portrait===!1?[e,t]:[t,e]}function oM(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function um(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Kl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Kl:0}function aM(i,t){let[,e]=cm(t),n=um(i,t);return i.wall?e*Math.cos(n)+lh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+lh}function go(i,t,e=!1){let[n,r]=cm(t),s=[],o=um(i,t),a=r*Math.cos(o),l=aM(i,t),c=oM(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,m,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*m+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*m+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*m+i.n[2]*p],g=(b,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[p,x]=i.span(m);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,m)=>{let p=t.align==="right"?u-b:t.align==="center"?(u-b)/2:0;for(let x=0;x<b;x++){let _=`${m}:${x}`,v=h.has(_);if(v&&!e)continue;let M=t.u+(x+p)*(n+lh),w=t.v+m*l,R=M+n,y=w+(i.flat||i.wall?a:r);if(f){if(!(g((M+R)/2,w)&&g((M+R)/2,y)))continue}else if(![[M,w],[R,w],[R,y],[M,y]].every(([E,I])=>g(E,I)))continue;if(i.wall&&o>.001){let E=xr+r*Math.sin(o),[I,F]=t.flip?[E,xr]:[xr,E],D=[d(M,w,I),d(R,w,I),d(R,y,F),d(M,y,F)],k=t.flip?w:y,O=[M+.05,R-.05].map(B=>[d(B,k,0),d(B,k,E)]);s.push({corners:D,posts:O,cell:_,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,w,xr),d(R,w,xr),d(R,y,xr),d(M,y,xr)],posts:[],cell:_,skipped:v});continue}let P=.15,S=P+r*Math.sin(o),[A,T]=t.flip?[y,w]:[w,y],C=[d(M,A,P),d(R,A,P),d(R,T,S),d(M,T,S)];s.push({corners:C,posts:[M+.05,R-.05].flatMap(E=>[[d(E,A,0),d(E,A,P)],[d(E,T,0),d(E,T,S)]]),cell:_,skipped:v})}}),s}function vr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function mo(i){return Math.hypot(i[0],i[1],i[2])}function Xi(i){let t=mo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function hm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var lM=.78,cM=1.18;function uM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||lM,module_h:i.h||cM}}function Jl(i,t){let e=go(i,uM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function jl(i,t,e){let n=t?Jl(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Kt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var bo=1712952,xo=2239816,mm=1318193,_r=kt(3662079,.9),hs=kt(5995775,.45),Ge=.14,hM=9427199,fM=13226982,dM=14936565,pM={black:{glass:new j(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new j(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},mM=kt(13226982,.5),gM=kt(13226982,.85),bM=kt(16757575,.95),fm=new j(2845583),dm=new j(1713986),xM=new j(3662079).multiplyScalar(.35),pm=new j(4871791);function vM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function gm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:MM(i),r=e?.type==="custom"?SM(i,e.sections??[],e.overhang):n?[n]:[];return _M(i,r),yM(i,r,t),r}function yM(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(yr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Jl(o,s):null;if(!o||!a)continue;let l=o.section?t.find(F=>F.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?jl(i,o,s):null,u=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,h=u?u.elevation:l.floor.elevation+l.base,f=F=>[F[0],F[1]-h,F[2]],[d,g,b,m]=a.map(f),p=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(u!==null||c.floor.id===l.floor.id),_=u?(l.winBelow??=new Map).get(u.id)??l.winBelow.set(u.id,{floor:u,solid:new jt,lines:new Le,glass:new jt}).get(u.id):x?l.win??={solid:new jt,lines:new Le,glass:new jt}:l.winRoof??={solid:new jt,lines:new Le,glass:new jt},v=(F,D)=>[F[0]+o.n[0]*D,F[1]+o.n[1]*D,F[2]+o.n[2]*D],M=(F,D,k)=>[F[0]+(D[0]-F[0])*k,F[1]+(D[1]-F[1])*k,F[2]+(D[2]-F[2])*k],w=p.open>.02||p.tilt>.02?bM:gM,R=[d,g,b,m].map(F=>v(F,.06)),y=[d,g,b,m].map(F=>v(F,-.02));for(let F=0;F<4;F++){_.lines.seg(R[F],R[(F+1)%4],w);let D=(F+1)%4;_.solid.tri(y[F],y[D],R[D],pm),_.solid.tri(y[F],R[D],R[F],pm)}let P=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*re,S=Math.hypot(b[0]-g[0],b[1]-g[1],b[2]-g[2]),A=F=>{let D=o.es;return[F[0]-D[0]*S*Math.cos(P)+o.n[0]*S*Math.sin(P),F[1]-D[1]*S*Math.cos(P)+o.n[1]*S*Math.sin(P),F[2]-D[2]*S*Math.cos(P)+o.n[2]*S*Math.sin(P)]},T=v(m,.065),C=v(b,.065),E=A(T),I=A(C);_.glass.tri(E,I,C,fm),_.glass.tri(E,C,T,fm);for(let[F,D]of[[E,I],[I,C],[C,T],[T,E]])_.lines.seg(F,D,w);if(p.cover>.02){let F=Math.min(1,p.cover),D=v(M(T,E,F),.01),k=v(M(C,I,F),.01),O=v(T,.01),B=v(C,.01);_.solid.tri(D,k,B,dm),_.solid.tri(D,B,O,dm);let V=Math.max(1,Math.round(S*F/.05));for(let K=1;K<=V;K++){let G=K/V;_.lines.seg(v(M(O,D,G),.004),v(M(B,k,G),.004),xM)}}}}function _M(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(yr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&hh(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function hh(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=pM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of go(e,n)){let[u,h,f,d]=c.corners.map(s);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let g=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,_)=>[p[0]+(x[0]-p[0])*_,p[1]+(x[1]-p[1])*_,p[2]+(x[2]-p[2])*_],m=[u,h,f,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(b(u,h,p/a)),g(b(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(b(u,d,p/l)),g(b(h,f,p/l)),o.cells);for(let[p,x]of c.posts)t.seg(s(p),s(x),mM)}}function MM(i){let t=i.settings.roof,e=vM(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(A=>A[0])),r=e.rooms.flatMap(S=>S.points.map(A=>A[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new jt,h=new Le;if(t.type==="flat"){Ae(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,bo,xo,{bottom:!0});let S=.252;for(let[A,T]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([A[0],S,A[1]],[T[0],S,T[1]],_r),h.seg([A[0],0,A[1]],[T[0],0,T[1]],hs);return{floor:e,base:e.height,solid:u,lines:h,glass:new jt}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,g=(d?c-l:a-o)/2,b=g*Math.tan(t.pitch*re),m=(S,A,T)=>d?[S,T,(l+c)/2+A]:[(o+a)/2+A,T,S],[p,x]=d?[o,a]:[l,c],_=new j(xo),v=new j(bo),M=(S,A,T,C,E)=>{u.tri(S,A,T,E),u.tri(S,T,C,E)};for(let S of[-1,1]){M(m(p,S*g,0),m(x,S*g,0),m(x,0,b),m(p,0,b),_),M(m(p,S*g,-Ge),m(p,0,b-Ge),m(x,0,b-Ge),m(x,S*g,-Ge),v),M(m(p,S*g,-Ge),m(x,S*g,-Ge),m(x,S*g,0),m(p,S*g,0),v);for(let A of[p,x])M(m(A,S*g,-Ge),m(A,S*g,0),m(A,0,b),m(A,0,b-Ge),v);h.seg(m(p,S*g,0),m(x,S*g,0),hs);for(let A of[p,x])h.seg(m(A,S*g,0),m(A,0,b),hs)}let w=t.overhang,R=new j(mm),y=g-w,P=y*Math.tan(t.pitch*re);for(let S of[p+w,x-w])u.tri(m(S,-y,-Ge),m(S,y,-Ge),m(S,0,P-Ge),R),u.tri(m(S,y,-Ge),m(S,-y,-Ge),m(S,0,P-Ge),R);return h.seg(m(p,0,b+.004),m(x,0,b+.004),_r),{floor:e,base:e.height,solid:u,lines:h,glass:new jt}}function SM(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(yr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=_p(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new jt,lines:new Le,glass:new jt,sections:[],lift:!o.open}),c.sections.push(o.id);let u=kl(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(b=>b!==o&&kl(t,b)===o).flatMap(b=>vp(o,b));for(let b of i.settings.roof.windows??[]){let m=s.get(b.face),p=m&&m.section===o.id?Jl(m,b):null;if(!p)continue;let x=p.map(_=>Vi(o,_[0],_[2]));f.push({u0:Math.min(...x.map(_=>_[0])),u1:Math.max(...x.map(_=>_[0])),v0:Math.min(...x.map(_=>_[1])),v1:Math.max(...x.map(_=>_[1]))})}let d=u?Ku(u,o):o,g=null;if(u){let b=ti(d),m=os(u,{u0:0,u1:0,a:0,b:0}),p=x=>{let[_,v]=b.at(x,b.w/2),[M,w]=Vi(u,_,v);return co(m,M,w)??wn(u).y(w)};g=p(b.u0)<=p(b.u1)?0:1}wM(c.solid,c.lines,d,zl(i,d,d.overhang??e),a.elevation,c.glass,h,f,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function wM(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=ti(e),u=wn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),g=c.w,b=c.u0-Math.max(0,h.u0),m=c.u1+Math.max(0,h.u1),p=(C,E,I)=>{let[F,D]=c.at(C,E);return[F,I-r,D]},x=new j(xo),_=new j(bo),v=new j(mm),M=(C,E)=>{for(let I=1;I+1<C.length;I++)i.tri(C[0],C[I],C[I+1],E)},w=[],R=[],y=[],P=null;if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,E=e.shape==="parapet",I=e.points&&e.points.length>=3?gp(e,E?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(b,-f),c.at(m,-f),c.at(m,g+d),c.at(b,g+d)];Ae(i,I,C-r,C-r+.25,bo,xo,{bottom:!0});for(let F=0;F<I.length;F++){let D=I[F],k=I[(F+1)%I.length];t.seg([D[0],C-r+.252,D[1]],[k[0],C-r+.252,k[1]],_r),t.seg([D[0],C-r,D[1]],[k[0],C-r,k[1]],hs)}if(E){let F=B=>jn(B)>=0?B:[...B].reverse(),D=F(I),k=Bl(D,-.2),O=D.length;for(let B=0;B<O;B++){let V=F([D[B],D[(B+1)%O],k[(B+1)%O],k[B]]);Ae(i,V,C-r+.25,C-r+.65,bo,xo),t.seg([D[B][0],C-r+.652,D[B][1]],[D[(B+1)%O][0],C-r+.652,D[(B+1)%O][1]],_r),t.seg([k[B][0],C-r+.652,k[B][1]],[k[(B+1)%O][0],C-r+.652,k[(B+1)%O][1]],_r)}}}else{let C=os(e,h);w=C.faces;for(let E of a)w=w.flatMap(I=>yp(I,E));R=C.rim,y=C.ridges,P=C.gable}let S=!!e.open,A=new j(hM);for(let C of w){if(S){for(let E=1;E+1<C.length;E++)s.tri(p(C[0][0],C[0][1],C[0][2]),p(C[E][0],C[E][1],C[E][2]),p(C[E+1][0],C[E+1][1],C[E+1][2]),A);continue}M(C.map(([E,I,F])=>p(E,I,F)),x),M(C.map(([E,I,F])=>p(E,I,F-Ge)),_)}for(let C=0;C<R.length;C++){let[E,I,F]=R[C],[D,k,O]=R[(C+1)%R.length];S||M([p(E,I,F),p(D,k,O),p(D,k,O-Ge),p(E,I,F-Ge)],_),t.seg(p(E,I,F),p(D,k,O),S?_r:hs)}if(S){TM(i,t,c,u,h,p,r);return}for(let[[C,E,I],[F,D,k]]of y)t.seg(p(C,E,I+.004),p(F,D,k+.004),_r);let T=e.base;if(!o){if(P){let C=EM(P,T-Ge),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(C.length>=3)for(let I of E)M(C.map(([F,D])=>p(I,F,D)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let C of[0,g]){let E=u.y(C)-Ge;E>T+.02&&M([p(c.u0,C,T),p(c.u1,C,T),p(c.u1,C,E),p(c.u0,C,E)],v)}else if(e.eave_a>T+.02)for(let[C,E,I,F]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])M([p(C,E,T),p(I,F,T),p(I,F,e.eave_a),p(C,E,e.eave_a)],v)}}function TM(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,g=(p,x,_,v,M,w)=>{let R=[e.at(p,_),e.at(x,_),e.at(x,v),e.at(p,v)],y=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);Ae(i,y<0?[...R].reverse():R,M-o,w-o,fM,dM,{bottom:!0})},b=o;for(let[p,x]of[[0,u],[a,h]]){if(!x)continue;let _=n.y(p)-.03,v=p===0?0:a-l;g(e.u0,e.u1,v,v+l,_-c,_),t.seg(s(e.u0,p,_-c),s(e.u1,p,_-c),hs)}for(let[p,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(v),n.y(M))-.03;g(p,p+l,v,M,w-c,w)}let m=[];for(let[p,x]of[[0,u],[a-l,h]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let w=e.u0+_*M/v;M===0&&!f||M===v&&!d||m.push([w,p])}}if(!u&&!h)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&m.push([p,a/2-l/2]);for(let[p,x]of m){let _=n.y(x+l/2)-.03-c;g(p,p+l,x,x+l,b,_)}}function EM(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var vo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},bm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ke=.2,AM=.01,yo=8,Ql=.42,fh=.42;function _m(i,t,e,n=[],r=[],s){let{walls:o,open:a}=pi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,C,E,I)=>{let F=I?.slope?Math.min(E,fp(I.slope,T,C)):E,D=s?s(T,C):null;return D===null?F:Math.max(.05,Math.min(F,D))},c=(T,C,E,I,F,D)=>{if(!s&&!D?.slope)return F;let k=F,O=Math.max(2,Math.ceil((I-E)/.25)+1);for(let B=0;B<O;B++){let V=E+(I-E)*B/(O-1);k=Math.min(k,l(T[0]+C[0]*V,T[1]+C[1]*V,F,D))}return k},u=new jt(!0,!0),h=[],f=new Le,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let C=ec(T.points),E=bm[T.floor_material]??bm.wood,I=new j(E.color),F=n.flatMap(K=>{if(Ep(K,C))return[K];if(!Sp(K))return[];let G=as(C,K);return G.length>=3&&Math.abs(jn(G))>.01?[ec(G)]:[]}),D=Tp(F).map(K=>Ap(ec(K),.003));d.push(...D);let k=[...C,...D.flat()],O=u.count;for(let[K,G,Z]of ei(C,D)){let Q=k[K],ht=k[G],H=k[Z];u.tri([Q[0],0,Q[1]],[H[0],0,H[1]],[ht[0],0,ht[1]],I,I,I,[Q[0],Q[1],H[0],H[1],ht[0],ht[1]],Xt,E.tile)}h.push({roomId:T.id,start:O,end:u.count,color:E.color});let B=new j(vo.slab),V=K=>{for(let G=0;G<K.length;G++){let Z=K[G],Q=K[(G+1)%K.length];u.tri([Z[0],-Ke,Z[1]],[Z[0],0,Z[1]],[Q[0],0,Q[1]],B),u.tri([Z[0],-Ke,Z[1]],[Q[0],0,Q[1]],[Q[0],-Ke,Q[1]],B)}};V(C);for(let K of D){V([...ec(K)].reverse());for(let G=0;G<K.length;G++){let Z=K[G],Q=K[(G+1)%K.length];f.seg([Z[0],.006,Z[1]],[Q[0],.006,Q[1]],pr),f.seg([Z[0],-Ke,Z[1]],[Q[0],-Ke,Q[1]],Hi)}}}let g=new Map,b=[],m=new Map;for(let T of o){let C="interior",E=null;if(T.exterior){let F=T.b[0]-T.a[0],D=T.b[1]-T.a[1],k=Math.hypot(F,D)||1,O=[D/k,-F/k],B=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*yo)%yo+yo)%yo;C=`s${B}`;let V=B/yo*2*Math.PI;E=[Math.cos(V),Math.sin(V)]}let I=g.get(C);I===void 0&&(I=b.length,g.set(C,I),b.push(E)),m.set(T,I)}let p=new Map,x=[];for(let T of i.openings){let C=so(T,i.rooms,i.walls??[]);if(!C)continue;let E=oo(o,T,C);if(!E)continue;let{wall:I,s:F}=E,D=ic([I.b[0]-I.a[0],I.b[1]-I.a[1]]),k=Math.hypot(I.b[0]-I.a[0],I.b[1]-I.a[1]),O=Math.min(T.width,k),B=Math.max(0,Math.min(k-O,F-O/2)),V=C.room.points,K=I.free?D[0]*(V[1][0]-V[0][0])+D[1]*(V[1][1]-V[0][1])>0:I.exterior||I.roomLeft===T.room_id,G=[-D[1],D[0]],Z=K?G:[-G[0],-G[1]],Q=Math.min(c(I.a,D,B,B+O,tc(I,i.height),I)-.02,T.sill+T.height),ht=Math.max(0,Math.min(T.sill,Q-.1)),H=[Z[1],-Z[0]],W=D[0]*H[0]+D[1]*H[1]>0,nt={opening:T,bucket:m.get(I),start:[I.a[0]+D[0]*B,I.a[1]+D[1]*B],axis:D,width:O,toRoom:Z,faceRoom:K?I.left:I.right,faceOut:K?I.right:I.left,sill:ht,top:Q,hingeAtStart:T.hinge==="left"===W,exterior:I.exterior};x.push(nt);let st=p.get(I);st||p.set(I,st=[]),st.push({s0:B,s1:B+O,sill:ht,top:Q,info:nt})}let _=Math.min(i.cut_height,i.height),v=new jt;for(let T of o){let C=m.get(T),E=ic([T.b[0]-T.a[0],T.b[1]-T.a[1]]),I=(p.get(T)??[]).sort((G,Z)=>G.s0-Z.s0),F=tc(T,i.height),D=[],k=[-1/0,...new Set(I.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,Z)=>G-Z);for(let G=0;G+1<k.length;G++){let Z=k[G],Q=k[G+1];if(Q-Z<1e-6)continue;let ht=Number.isFinite(Z)&&Number.isFinite(Q)?(Z+Q)/2:Number.isFinite(Z)?Z+1:Q-1,H=I.filter(st=>st.s0<ht&&st.s1>ht).map(st=>[st.sill,st.top]).sort((st,lt)=>st[0]-lt[0]),W=[],nt=-Ke;for(let[st,lt]of H)st>nt+1e-4&&W.push([nt,st<1e-4?-AM:st]),nt=Math.max(nt,lt);F>nt+1e-4&&W.push([nt,F]),D.push({t0:Z,t1:Q,ranges:W})}let O=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),B=(s||T.slope)&&c(T.a,E,0,O,F,T)<F-.001,V=B?D.flatMap(G=>{let Z=Math.max(G.t0,-.5),Q=Math.min(G.t1,O+.5),ht=Math.max(1,Math.ceil((Q-Z)/.3));return Array.from({length:ht},(H,W)=>({t0:W===0?G.t0:Z+(Q-Z)*W/ht,t1:W===ht-1?G.t1:Z+(Q-Z)*(W+1)/ht,ranges:G.ranges,inner0:W>0,inner1:W<ht-1}))}):D.map(G=>({...G,inner0:!1,inner1:!1})),K=G=>(G[0]-T.a[0])*E[0]+(G[1]-T.a[1])*E[1];for(let G of V){let Z=CM(T.footprint,T.a,E,G.t0,G.t1);if(Z.length<3)continue;let Q=(W,nt)=>Math.abs(K(W)-nt)<1e-4,ht=(W,nt)=>G.inner0&&Q(W,G.t0)&&Q(nt,G.t0)||G.inner1&&Q(W,G.t1)&&Q(nt,G.t1),H=B?Math.min(...Z.map(([W,nt])=>l(W,nt,F,T))):F;for(let[W,nt]of G.ranges){let st=Math.min(nt,B?Math.max(...Z.map(([At,Wt])=>l(At,Wt,F,T))):nt);if(st-W<1e-4||H-W<.01)continue;let lt=W>.01,mt=B&&nt>H,Ct=(At,Wt)=>Math.min(nt,l(At,Wt,F,T));if(W<_-1e-6){let At=st>_+1e-6?Bp+C:mr+C,Wt=mt&&H<_?(oe,qt)=>Math.min(_,Ct(oe,qt)):Math.min(st,_);Ae(v,Z,W,Wt,vo.wall,vo.wallTop,{aoFrom:0,bottom:lt,fold:mr+C,topFold:At,skipSide:ht})}st>_+1e-6&&H>_+1e-6&&Ae(v,Z,Math.max(W,_),mt?Ct:st,vo.wall,vo.wallTop,{aoFrom:0,fold:C,bottom:lt&&W>=_,skipSide:ht})}}}let M=o.flatMap(T=>T.footprint),w=IM(o,M),R=new Le;R.p.push(...f.p),R.c.push(...f.c),R.f.push(...f.f);let y=(T,C)=>(p.get(T)??[]).filter(C);for(let T of w.edges){let C=m.get(T.wall);for(let[I,F]of nc(T,y(T.wall,D=>D.sill<=.005)))R.seg([I[0],.004,I[1]],[F[0],.004,F[1]],Op);for(let[I,F]of nc(T,y(T.wall,D=>D.sill<_&&D.top>_)))R.seg([I[0],_,I[1]],[F[0],_,F[1]],eh,Hl+C);let E=tc(T.wall,i.height);for(let[I,F]of nc(T,y(T.wall,D=>D.top>=E-.021))){if(!s&&!T.wall.slope){R.seg([I[0],E,I[1]],[F[0],E,F[1]],pr,E<=_+1e-6?mr+C:C);continue}let D=Math.max(1,Math.ceil(Math.hypot(F[0]-I[0],F[1]-I[1])/.3));for(let k=0;k<D;k++){let O=[I[0]+(F[0]-I[0])*k/D,I[1]+(F[1]-I[1])*k/D],B=[I[0]+(F[0]-I[0])*(k+1)/D,I[1]+(F[1]-I[1])*(k+1)/D],V=l(O[0],O[1],E,T.wall),K=l(B[0],B[1],E,T.wall);R.seg([O[0],V,O[1]],[B[0],K,B[1]],pr,Math.max(V,K)<=_+1e-6?mr+C:C)}}}for(let T of w.corners){let C=l(T.p[0],T.p[1],tc(T.wall,i.height),T.wall);R.segSplit([T.p[0],.004,T.p[1]],[T.p[0],C,T.p[1]],Hi,Math.min(_,C),m.get(T.wall))}for(let T of p.values())for(let C of T)RM(R,C,_);let P=LM(w.edges,i.rooms,p),S=new jt;rm(v,R,i,S);for(let T of r)hh(v,R,T.face,T.field,i.elevation);let A=[];for(let T of i.furniture){if(ip(T.type))continue;let C=v.count,E=R.p.length/6,I=cn(i,T);Yl(v,R,P,T,I),I+T.h>_+.05&&(kp(v,C,_,nh+uo),zp(R,E,_,nh+uo)),A.push({id:T.id,start:C,end:v.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:v.geometry(),water:S.geometry(),lines:R.geometry(),shadow:P.geometry(),buckets:b,openings:x,walls2d:o,openRooms:a,wallBuckets:o.map(T=>m.get(T)),furnitureTris:A,roofUnder:s}}function RM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Xt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Hi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Hi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Hi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Hi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Hi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),eh,Hl+r)}function CM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=xm(o,a=>s(a)-n)),Number.isFinite(r)&&(o=xm(o,a=>r-s(a))),o}function xm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var vm=i=>Math.round(i*1e3),_o=i=>`${vm(i[0])},${vm(i[1])}`,ym=(i,t)=>{let e=_o(i),n=_o(t);return e<n?`${e}|${n}`:`${n}|${e}`};function PM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];_o(f)!==_o(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function IM(i,t){let e=i.map(l=>({wall:l,edges:PM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=ym(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let h=_o(l),f=s.get(h);f||s.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(ym(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function nc(i,t){if(!t.length)return[[i.a,i.b]];let e=ic([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=ic([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let g=[];return h.s0>f&&g.push([f,h.s0]),h.s1<d&&g.push([h.s1,d]),g});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function LM(i,t,e){let n=new jt,r=new j(fh,fh,fh),s=new j(1,1,1),o=.002;for(let a of i)for(let[l,c]of nc(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Kt(g,p.points)))continue;let b=[l[0]+d[0]*Ql,l[1]+d[1]*Ql],m=[c[0]+d[0]*Ql,c[1]+d[1]*Ql];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[m[0],o,m[1]],r,s,s),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],r,s,r)}return n}function Mm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(ki),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(ep.has(s.type)||we(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(ki);return[...e,...r]}function tc(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function ic(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ec(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var FM=new j(1516340),DM=new j(527897),dh=new j(1779256),Mo=new j(1120808),NM=new j(4163256),Sm=new j(5995161),UM=new j(2240842),OM=new j(1318704),BM=.35,fs=.8,kM=.2,wm=.1;function zM(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Tm(i,t);return!!e&&e.some(([n,r])=>Nl(n,r)-t.elevation>-.15)}function Tm(i,t){return t.rooms.some(e=>e.points.length>=3)?bp(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function VM(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||Un(o.type)||!Kt(e,o.points)||(r=Math.max(r,s.elevation+hr(s,o)+is[o.type]-t.elevation));return r>n?r-n:0}function Em(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Tm(i,t);if(!r)return null;let s=(g,b)=>Nl(g,b)-t.elevation,o=n&&r.some(([g,b])=>s(g,b)<-Ke-.03);if(!o&&!zM(i,t))return null;let a=t.height,l=-BM,c=(g,b)=>Math.min(a,Nl(g,b)-t.elevation),u=new jt,h=new jt,f=new Le,d=(g,b,m,p,x,_,v,M)=>{let w=[b[0]-g[0],b[2]-g[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(g,b,m,_,_,v),M.tri(g,m,p,_,v,v)):(M.tri(g,m,b,_,v,_),M.tri(g,p,m,_,v,v))};for(let g=0;g<r.length;g++){let b=r[g],m=r[(g+1)%r.length],p=Math.hypot(m[0]-b[0],m[1]-b[1]);if(p<1e-4)continue;let x=[(m[0]-b[0])/p,(m[1]-b[1])/p],_=[x[1],-x[0]],v=[(b[0]+m[0])/2+_[0]*.05,(b[1]+m[1])/2+_[1]*.05];Kt(v,r)&&(_=[-_[0],-_[1]]);let M=(S,A=.012)=>[b[0]+x[0]*S+_[0]*A,b[1]+x[1]*S+_[1]*A],w=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let A=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,T=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,C=(A-b[0])*x[0]+(T-b[1])*x[1];Math.abs((A-b[0])*_[0]+(T-b[1])*_[1])>.08||C<-.05||C>p+.05||S.sill>=c(A,T)-.05||w.push({s0:Math.max(0,C-S.width/2-wm),s1:Math.min(p,C+S.width/2+wm),bottom:Math.max(l+.05,S.sill-kM),rim:S.opening.well_rim??0})}let R=new Set([0,p]);for(let S of w)R.add(S.s0),R.add(S.s1);let y=[...R].sort((S,A)=>S-A),P=[];for(let S=0;S<y.length-1;S++){let A=Math.max(1,Math.ceil((y[S+1]-y[S])/.5));for(let T=0;T<A;T++)P.push(y[S]+(y[S+1]-y[S])*T/A)}P.push(p);for(let S=0;S<P.length-1;S++){let A=P[S],T=P[S+1],C=w.find(K=>A>=K.s0-1e-6&&T<=K.s1+1e-6),E=M(A),I=M(T),F=c(E[0],E[1]),D=c(I[0],I[1]),k=C?Math.min(F,C.bottom):F,O=C?Math.min(D,C.bottom):D;if(k>l+.01||O>l+.01){let K=Math.min(k,l),G=Math.min(O,l);d([E[0],K,E[1]],[I[0],G,I[1]],[I[0],Math.max(O,l),I[1]],[E[0],Math.max(k,l),E[1]],_,DM,FM,u)}let B=s(E[0],E[1]),V=s(I[0],I[1]);if(o&&(B<-Ke-.01||V<-Ke-.01)&&d([E[0],Math.min(B,-Ke),E[1]],[I[0],Math.min(V,-Ke),I[1]],[I[0],-Ke,I[1]],[E[0],-Ke,E[1]],_,OM,UM,u),F>l||D>l||o&&(B<-Ke||V<-Ke)){let K=o?Math.min(B,Math.max(F,l)):Math.max(F,l),G=o?Math.min(V,Math.max(D,l)):Math.max(D,l);f.seg([E[0],K+.004,E[1]],[I[0],G+.004,I[1]],NM)}}for(let S of w){let A=M(S.s0,0),T=M(S.s1,0),C=[A[0]+_[0]*fs,A[1]+_[1]*fs],E=[T[0]+_[0]*fs,T[1]+_[1]*fs],I=[(A[0]+T[0]+C[0]+E[0])/4,(A[1]+T[1]+C[1]+E[1])/4],F=VM(i,t,I,c(I[0],I[1])),D=Math.max(S.rim,F>0?F+.02:0),k=Z=>c(Z[0],Z[1])+D,O=S.bottom,B=(Z,Q)=>[Z[0],Q,Z[1]];h.tri(B(A,O),B(T,O),B(E,O),Mo),h.tri(B(A,O),B(E,O),B(C,O),Mo);let V=(Z,Q)=>{h.tri(B(Z,O),B(Q,O),B(Q,k(Q)),Mo,Mo,dh),h.tri(B(Z,O),B(Q,k(Q)),B(Z,k(Z)),Mo,dh,dh)};V(A,C),V(T,E),V(C,E);let K=Z=>[Z[0],k(Z)+.01,Z[1]];for(let[Z,Q]of[[A,T],[T,E],[E,C],[C,A]])f.seg(K(Z),K(Q),Sm);let G=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let Z=1;Z<G;Z++){let Q=Z/G,ht=[A[0]+(T[0]-A[0])*Q,A[1]+(T[1]-A[1])*Q];f.seg(K(ht),K([ht[0]+_[0]*fs,ht[1]+_[1]*fs]),Sm)}}}return u.count||h.count?{earth:u,wells:h,lines:f}:null}var Am=i=>Math.round(i*1e3)/1e3;function GM(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function Rm(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Kt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=On(a)>=0?1:-1,c=ki({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=ki({...t,x:u,z:h});for(let g=0;g<a.length;g++){let b=a[g],m=a[(g+1)%a.length],p=Math.hypot(m[0]-b[0],m[1]-b[1]);if(p<.05)continue;let x=[(m[0]-b[0])/p,(m[1]-b[1])/p],_=[-x[1]*l,x[0]*l],v=GM(i,o.id,b,m)?r/2:0,M=0;d.forEach((w,R)=>{let y=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(y<-.01||y>p+.01)return;let P=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-v,S=c[R];(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v<-s||P<M&&(M=P)}),M<-1e-4&&(u-=_[0]*M,h-=_[1]*M)}}return[Am(u),Am(h)]}var HM=500,Cm=.12,Pm=1.35,WM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,rc=class{view={target:new X,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=WM(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=ph(this.view.phi+this.velocity.phi,Cm,Pm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s=this.angleLock?{target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:n.theta,phi:n.phi}:{target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},HM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=ph(this.view.phi+c,Cm,Pm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=ph(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new X(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new X(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function ph(i,t,e){return Math.min(e,Math.max(t,i))}function ni(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut (bucket 15)
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var ac=5,sc=512,Im=.7,oc=class{projectors=new Map;loader=new rr;loggedIds="";depthMaterial=new Jt({colorWrite:!1,side:ue});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new qe(sc,sc);a.depthTexture=new Yn(sc,sc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Xe(60,16/9,Im,40),target:a,matrix:new ve,uniforms:{uProjMat:{value:new ve},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(ac),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ce;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,m]of o.overlays)l.has(b)||(m.parent?.remove(m),m.material.dispose(),o.overlays.delete(b));for(let b of n){let m=o.overlays.get(b.key);(!m||m.parent!==b.parent)&&(m&&(m.parent?.remove(m),m.material.dispose()),m=new Nt(b.geometry,this.material(o,b.masks)),m.renderOrder=2.5,m.frustumCulled=!1,b.parent.add(m),o.overlays.set(b.key,m)),m.geometry!==b.geometry&&(m.geometry=b.geometry),m.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let u=o.camera,h=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);u.fov=2*Math.atan(Math.tan(h/2)/o.aspect)*180/Math.PI,u.aspect=o.aspect,u.far=a.reach,u.near=Im,u.position.copy(a.position),u.lookAt(a.position.clone().add(a.direction)),u.updateProjectionMatrix(),o.uniforms.uNearFar.value=[u.near,u.far],u.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let m of b.overlays.values())m.visible&&f.push(m);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),g=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,u),t.setRenderTarget(d),e.overrideMaterial=g;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Jt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ni(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Lm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Fm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=Lm(s,o),c=Lm(o,a),u=Math.min(t,l*.45,c*.45),h=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],g=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let b=0;b<=e;b++){let m=b/e,p=(1-m)*(1-m),x=2*(1-m)*m,_=m*m;n.push([p*d[0]+x*o[0]+_*g[0],p*d[1]+x*o[1]+_*g[1],p*d[2]+x*o[2]+_*g[2]])}}return n.push(i[i.length-1]),n}var Dm=new j(7568261),Nm=new j(4869974),XM=new j(3116287),Um=new j(3948872),mh=Mr([.35,.85,.4]),Om=10;function Mr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function So(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Bm(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Mr(So(i,t));return[e,Mr(So(i,e))]}function mi(i,t){let e=.5+.5*Math.max(0,t[0]*mh[0]+t[1]*mh[1]+t[2]*mh[2]);return i.clone().multiplyScalar(e)}function ds(i,t,e,n,r,s=!1){let o=Mr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Bm(o),c=(u,h)=>{let f=h/Om*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<Om;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),g=c(e,u+1);i.tri(h.p,g.p,d.p,mi(r,h.n),mi(r,g.n),mi(r,d.n)),i.tri(h.p,f.p,g.p,mi(r,h.n),mi(r,f.n),mi(r,g.n)),s&&(i.tri([...t],f.p,h.p,mi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,g.p,mi(r,o)))}}function YM(i,t,e,n,r,s,o,a){let l=Mr(So(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*h*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*h*r+n[2]*f*s+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=mi(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function km(i,t){if(t.points.length<2)return;let e=t.radius,n=Fm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?Dm.clone().multiplyScalar(.55):Dm;ds(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);ds(i,o,a,e*1.22,Nm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);ds(i,o,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of s(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];ds(i,c,u,e*1.3,Nm,!0)}}else{let[o,a]=s(.055);ds(i,o,a,e*1.4,Um,!0);let[l]=Bm(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];ds(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],u,e*.35,Um,!0);let h=r.open===!1?Mr(So(r.dir,c)):r.dir,f=Mr(So(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];YM(i,d,h,f,.1,.028,.012,XM)}}}var gh=1.62,lc=.2,bh=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=pi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=so(a,e.rooms,e.walls??[]);if(!c)continue;let u=oo(this.walls,a,c);if(!u)continue;let h=o.get(u.wall)??[];h.push([u.s-a.width/2+.05,u.s+a.width/2-.05]),o.set(u.wall,h);let f=u.wall,d=f.b[0]-f.a[0],g=f.b[1]-f.a[1],b=Math.hypot(d,g)||1,m=d/b,p=g/b,x=[f.a[0]+m*u.s,f.a[1]+p*u.s],_=f.left+.45,v=f.right+.45;this.doors.push({centre:x,p:[[x[0]-p*_,x[1]+m*_],[x[0]+p*v,x[1]-m*v]]})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c);u<1e-6||this.solids.push({a:a.a,u:[l/u,c/u],len:u,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=lc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=lc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=lc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Kt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let g=this.path(d,e);return g?[d,...g]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let g=this.path(t,d);return g?[...g,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>qM(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let g=lc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,p])=>[d.c[0]+d.u[0]*m*(d.hw+g)+b[0]*p*(d.hd+g),d.c[1]+d.u[1]*m*(d.hw+g)+b[1]*p*(d.hd+g)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let u=new Map,h=(d,g)=>{let b=d<g?`${d}:${g}`:`${g}:${d}`,m=u.get(b);return m===void 0&&(m=this.clear(s[d],s[g]),u.set(b,m)),m};for(;;){let d=-1;for(let g=0;g<o;g++)!c[g]&&a[g]<1/0&&(d<0||a[g]<a[d])&&(d=g);if(d<0)return null;if(d===1)break;c[d]=!0;for(let g=0;g<o;g++){if(c[g]||g===d)continue;let b=Math.hypot(s[d][0]-s[g][0],s[d][1]-s[g][1]);a[d]+b>=a[g]||h(d,g)&&(a[g]=a[d]+b,l[g]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=so(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=oo(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],g=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(h,-f))}}let e=[...this.rooms].sort((r,s)=>zm(s)-zm(r))[0],n=e?this.freeNear(Bi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function qM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function zm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var xh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+gh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-gh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Bi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,u=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/f*d,r.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],m=[g[1]*b[2]-g[2]*b[1],g[2]*b[0]-g[0]*b[2],g[0]*b[1]-g[1]*b[0]],p=[-m[0],-m[1],-m[2]],x=[g[0]+b[0]*r*h*f+p[0]*s*h,g[1]+b[1]*r*h*f+p[1]*s*h,g[2]+b[2]*r*h*f+p[2]*s*h];if(x[1]>=-.02)return null;let _=gh/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function $M(i,t){let e=we(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function vh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?$M(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function yh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=ZM(c.id)%1e3/1e3;for(let b of go(l,c)){let[m,p,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[m,0,0],[p,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,R,y]=v[M];e.push(w[0],w[1],w[2]),n.push(R,y),r.push(h,f),s.push(d)}}let g=e.length/3-u;g&&o.push({id:c.id,start:u,count:g})}if(!e.length)return null;let a=new Zt;return a.setAttribute("position",new zt(e,3)),a.setAttribute("uv",new zt(n,2)),a.setAttribute("aCells",new zt(r,2)),a.setAttribute("aPhase",new zt(s,1)),a.setAttribute("aLevel",new zt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function wo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function _h(i){let t=new Jt({transparent:!0,blending:Fe,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function ZM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Gm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,KM=`
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
`,JM=Gm,jM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Vm(i,t){let e=[];for(let[r,s,o]of ei(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Zt;return n.setAttribute("position",new zt(e,3)),n}function Hm(i,t){let e=new Ne;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Nt(Vm(n.points,o),new an({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Gm,fragmentShader:KM,transparent:!0,blending:Fe,depthWrite:!1,side:ue}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,u,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),g=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],b=as(n.points,g);if(b.length>=3){let m=new Nt(Vm(b,n.y+.03),new an({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:JM,fragmentShader:jM,transparent:!0,side:ue}));m.renderOrder=6,e.add(m);let p=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Zt;x.setAttribute("position",new zt(p,3)),e.add(new $e(x,new Qe({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Wm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Xm=["neon","blueprint","day"];function Ym(i){return Xm.indexOf(i)}var cc={value:new X(.22,.88,1)},uc={value:0};function qm(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var QM=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
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
  // day: light surfaces that keep their shading and a little more of their hue (#645: too bright, too flat), dark blue lines
  if (line) return vec3(0.07, 0.15, 0.34) * clamp(mx * 1.4, 0.45, 1.0);
  vec3 g = vec3(clamp(0.5 + l * 2.4, 0.0, 0.94));
  return mix(g, g * (c / max(mx, 0.001)), 0.2);
}
`;function Je(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=cc,s.uniforms.uAccentOn=uc,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${QM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function To(i){return i==="day"?Fi:Fe}var gi=.012,t2=.012;function Zm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],u=[],h=(p,x,_,v,M,w,R)=>{for(let y of[p,x,_,p,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(w),u.push(R)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let _=p.points.map(A=>A[0]),v=p.points.map(A=>A[1]),M=Math.min(..._),w=Math.min(...v),R=Math.max(..._),y=Math.max(...v),P=Math.max(1,Math.ceil((R-M)/r)),S=Math.max(1,Math.ceil((y-w)/r));for(let A=0;A<P;A++)for(let T=0;T<S;T++){let C=M+A*r,E=w+T*r,I=Math.min(C+r,R),F=Math.min(E+r,y),D=as(p.points,[[C,E],[I,E],[I,F],[C,F]]),k=D.length>=3?Math.abs(o2(D)):0;if(k<1e-4)continue;let O=a2(D);if(!s.some(B=>Kt(O,B))){if(k>(I-C)*(F-E)-1e-6){h([C,gi,E],[C,gi,F],[I,gi,F],[I,gi,E],[0,1,0],x,-1);continue}for(let[B,V,K]of ei(D)){let G=D[B],Z=D[K],Q=D[V];(Q[1]-G[1])*(Z[0]-G[0])-(Q[0]-G[0])*(Z[1]-G[1])<0&&([G,Z]=[Z,G]),h([G[0],gi,G[1]],[Q[0],gi,Q[1]],[Z[0],gi,Z[1]],[Z[0],gi,Z[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!Un(p.type));if(d.length){let p=d.flatMap(y=>y.points.map(P=>P[0])),x=d.flatMap(y=>y.points.map(P=>P[1])),_=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),R=(y,P,S)=>im(i,y)-no(i,y,P,S)+gi;for(let y=0;y<M;y++)for(let P=0;P<w;P++){let S=_+y*r,A=v+P*r,T,C=[S+r/2,A+r/2];T=d.find(I=>I.type==="pool"&&Kt(C,I.points));for(let I=d.length-1;I>=0&&!T;I--)Kt(C,d[I].points)&&(T=d[I]);if(!T)continue;let E=(I,F)=>[I,R(T,I,F),F];h(E(S,A),E(S,A+r),E(S+r,A+r),E(S+r,A),[0,1,0],f,-1)}}let g=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let _=Math.min(i.height,p.height??i.height),v=Math.min(g,_-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],R=Math.hypot(M,w);if(R<.05)return;let y=[M/R,w/R],P=[-y[1],y[0]],S=e[x],A=n2(p,y,R,n),T=(F,D)=>F?i.rooms.findIndex(k=>k.id===F):D?f:-1;b.push({a:p.a,b:p.b,h:_,ra:T(p.roomLeft,!1),rb:T(p.roomRight,p.exterior),gaps:A});let C=(F,D,k)=>[D,k,...F.filter(O=>O>D+.005&&O<k-.005)].sort((O,B)=>O-B).filter((O,B,V)=>B===0||O>V[B-1]+.005),E=C([v,(v+_)/2,...A.flatMap(F=>[F.y0+.01,F.y1-.01])],.02,_-.02),I=C(A.flatMap(F=>[F.s0,F.s1]),0,R);for(let F of[1,-1]){let D=F>0?p.roomLeft:p.roomRight,k=D?i.rooms.findIndex(G=>G.id===D):p.exterior?f:-1;if(k<0)continue;let O=(F>0?p.left:p.right)+t2,B=[P[0]*F,P[1]*F],V=(G,Z)=>[p.a[0]+y[0]*G+B[0]*O,Z,p.a[1]+y[1]*G+B[1]*O],K=G=>{let Z=V(G,0),Q=o?.(Z[0],Z[2]);return Q==null?1/0:Q-.02};for(let G=0;G<I.length-1;G++){let Z=I[G+1]-I[G],Q=Math.max(1,Math.ceil(Z/r));for(let ht=0;ht<Q;ht++){let H=I[G]+Z/Q*ht,W=I[G]+Z/Q*(ht+1),nt=(H+W)/2;for(let st=0;st<E.length-1;st++){let lt=E[st],mt=E[st+1];if(mt-lt<.01)continue;let Ct=(lt+mt)/2;if(A.some(qt=>nt>qt.s0&&nt<qt.s1&&Ct>qt.y0&&Ct<qt.y1))continue;let At=lt>=g-1e-6?S:mr+S,Wt=Math.min(mt,K(H)),oe=Math.min(mt,K(W));Wt<=lt+.005&&oe<=lt+.005||h(V(H,lt),V(W,lt),V(W,Math.max(lt,oe)),V(H,Math.max(lt,Wt)),[B[0],0,B[1]],k,At)}}}}});let m=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>Km(M,p)&&e2(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||m.push({id:p.opening.id,a:_,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:m,blockers:b}}function Km(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function e2(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function n2(i,t,e,n){let r=[];for(let s of n){if(!Km(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function i2(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function r2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function $m(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=r2(i),d=1/(1+u/(f*f)),g=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*g*(.2+.8*b)*i2(i.kind,l/h)}function Jm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,g]of[[u.a,u.b],[u.b,u.a]]){let b=[0,0,0];for(let p of t){if(p.room!==d)continue;let x=p.x-u.x,_=p.y-u.y,v=p.z-u.z,M=Math.hypot(x,_,v)||1,w=$m(p,u.x,u.y,u.z,x/M,_/M,v/M);b[0]+=p.color[0]*w,b[1]+=p.color[1]*w,b[2]+=p.color[2]*w}let m=Math.max(b[0],b[1],b[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[b[0]/m,b[1]/m,b[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:g})}});let s=new Map;for(let u of r){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,g=0,b=0;for(let m of h){if(m.walls.length&&s2(m,m.walls,o[f],o[f+1],o[f+2]))continue;let p=$m(m,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*p,g+=m.color[1]*p,b+=m.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-g*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function s2(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=s*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let g=(h*o-f*s)/u;if(g<0||g>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let m=g*Math.hypot(l,c);if(!a.gaps.some(p=>m>p.s0&&m<p.s1&&b>p.y0&&b<p.y1))return!0}return!1}function Mh(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Kt([t,e],r.points));return n<0?i.rooms.length:n}function Eo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function o2(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function a2(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Ao={open:0,open2:0,tilt:0,tilt2:0,cover:null},jm=2043986,Qm=2769520,l2=2242399,Sh=1845831,c2=1450554,bi=16758087,u2=1.2,h2=1.5,f2=1846349,d2=2572395,p2=1120816,m2=1845831,t0=5995775,e0=9085695,ps=kt(3662079,.08),g2=.2;function hc(i,t,e,n,r,s,o,a,l,c,u){let h=(d,g,b)=>t(d,g,b),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),kt(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),kt(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),kt(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),kt(l.getHex(),.92)]];for(let[d,g,b,m,p]of f)i.tri(d,g,b,p,p,p,void 0,u),i.tri(d,b,m,p,p,p,void 0,u)}function fe(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return hc(i,t,e,n,r,s,o,a,l,c,Xt);if(o>=u-1e-6)return hc(i,t,e,n,r,s,o,a,l,c,h);hc(i,t,e,n,r,s,o,u,l,c,Xt),hc(i,t,e,n,r,s,u,a,l,c,h)}function Yi(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,g)=>{let b=v=>u?(o-v)/u:.5,m=t(e,r,f),p=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(m,p,x,a,a,a,[0,b(f),1,b(f),1,b(d)],g),i.tri(m,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],g)};o<=l+1e-6?h(s,o,Xt):s>=l-1e-6?h(s,o,c):(h(s,l,Xt),h(l,o,c))}function b2(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),g=0,b=(s-r)/c;i.tri(u,h,f,a,a,a,[0,g,1,g,1,b],l),i.tri(u,f,d,a,a,a,[0,g,1,b,0,b],l)}function n0(i,t,e){let n=new jt,r=new jt,s=new jt(!0),o=new j(jm),a=new j(Qm),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,g=s.count,b=t.get(h.opening.id)??Ao,m=h.width,{sill:p,top:x,bucket:_}=h,v=(y,P,S)=>[h.start[0]+h.axis[0]*y+h.toRoom[0]*P,S,h.start[1]+h.axis[1]*y+h.toRoom[1]*P],M=(h.faceRoom-h.faceOut)/2,w=h.opening.mark==="closed",R=h.opening.type==="door"&&fr(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!R||h.opening.type==="garage"){let y=-h.faceOut-.012,P=h.faceRoom+.012,S=h.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),A=S?kt(bi,.8):new j(jm),T=S?kt(bi,1):new j(Qm);fe(n,v,-.045,.02,y,P,0,x+.045,A,T,e,_),fe(n,v,m-.02,m+.045,y,P,0,x+.045,A,T,e,_),fe(n,v,.02,m-.02,y,P,x-.02,x+.045,A,T,e,_)}if(h.opening.type==="door"){let y=fr(h.opening,h.exterior),P=op(y),S=h.opening.swing==="out"?-1:1,A=S>0?h.faceRoom:-h.faceOut,T=h.opening.leaves===2,C=.02,E=m-.02,I=sp(m,y,h.hingeAtStart,h.opening);if(I){let O=-h.faceOut-.012,B=h.faceRoom+.012,V=A-S*(P?.06:.04)/2,K=.06;for(let[G,Z]of I.panels)fe(n,v,G,G+K,O,B,.02,x-.02,o,a,e,_),fe(n,v,Z-K,Z,O,B,.02,x-.02,o,a,e,_),fe(n,v,G+K,Z-K,O,B,.02,.12,o,a,e,_),Yi(r,v,G+K,Z-K,V,.12,x-.02,ps,e,_);C=I.x0,E=I.x1}let F=T?(E-C)/2-.004:E-C,D=P?.06:.04;P&&(fe(n,v,.02,m-.02,-h.faceOut-.02,h.faceRoom,0,.02,new j(Sh),a,e,_),h.exterior&&fe(n,v,m/2-.08,m/2+.08,-h.faceOut-.1,-h.faceOut,x+.1,x+.17,kt(bi,.55),kt(bi,.85),e,Xt));let k=R?[]:[[h.hingeAtStart,b.open]];T&&!R&&k.push([!h.hingeAtStart,b.open2??0]);for(let[O,B]of k){let V=Math.min(1,Math.max(0,B)),K=y==="sliding"?0:V*h2,G=y==="sliding"?V*F:0,Z=(Ct,At,Wt)=>{let oe=Ct*Math.cos(K)-At*Math.sin(K)-G,qt=A+S*(At*Math.cos(K)+Ct*Math.sin(K)+(G?.05:0));return v(O?C+oe:E-oe,qt,Wt)},Q=V>.05?Xt:_,ht=w?!!b.sensed&&V<.05:V>.9,H=ht?kt(bi,.7):new j(P?p2:f2),W=ht?kt(bi,.9):new j(P?m2:d2);y==="glass"?(fe(n,Z,0,.05,-D,0,.01,x-.01,H,W,e,Q),fe(n,Z,F-.05,F,-D,0,.01,x-.01,H,W,e,Q),fe(n,Z,.05,F-.05,-D,0,.01,.12,H,W,e,Q),fe(n,Z,.05,F-.05,-D,0,x-.08,x-.01,H,W,e,Q),Yi(r,Z,.05,F-.05,-D/2,.12,x-.08,ps,e,Q)):fe(n,Z,0,F,-D,0,.01,x-.01,H,W,e,Q),y==="front_glass"?Yi(r,Z,.12,F-.12,.001,x*.55,x-.18,ps,e,Q):P&&Yi(r,Z,.1,.18,.001,.3,x-.3,ps,e,Q);let nt=Math.min(1.05,x*.5),st=P?.3:.012,lt=P?F-.11:F-.16,mt=P?F-.08:F-.05;fe(n,Z,lt,mt,.004,.05,nt-st,nt+st,new j(t0),new j(e0),e,Q),fe(n,Z,lt,mt,-D-.05,-D-.004,nt-st,nt+st,new j(t0),new j(e0),e,Q)}}else if(h.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),P=new j(13951231),S=h.faceRoom-.03,A=x*(1-y);y>.01&&Yi(s,v,.02,m-.02,S,A,x,P,e,_,.5);let T=(1-y)*x;T>.01&&b2(s,v,.02,m-.02,S,S+T,x+.03,P,_,.5)}else if(fr(h.opening,h.exterior)==="glass_wall"){fe(n,v,0,.04,M-.025,M+.025,p,x,o,a,e,_),fe(n,v,m-.04,m,M-.025,M+.025,p,x,o,a,e,_),fe(n,v,.04,m-.04,M-.025,M+.025,p,p+.03,o,a,e,_),fe(n,v,.04,m-.04,M-.025,M+.025,x-.04,x,o,a,e,_);let S=Math.max(1,Math.round((m-2*.04)/.9)),A=(m-2*.04)/S;for(let T=1;T<S;T++){let C=.04+T*A;fe(n,v,C-.02,C+.02,M-.025,M+.025,p+.03,x-.04,o,a,e,_)}for(let T=0;T<S;T++){let C=.04+T*A+(T?.02:0),E=.04+(T+1)*A-(T<S-1?.02:0);Yi(r,v,C,E,M,p+.03,x-.04,ps,e,_)}}else{fe(n,v,0,.06,M-.035,M+.035,p,x,o,a,e,_),fe(n,v,m-.06,m,M-.035,M+.035,p,x,o,a,e,_),fe(n,v,.06,m-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,_),fe(n,v,.06,m-.06,M-.035,M+.035,x-.06,x,o,a,e,_),p>.3&&(fe(n,v,-.04,m+.04,M+.035,h.faceRoom+.07,p-.03,p,new j(Sh),a,e,_),h.exterior&&fe(n,v,-.03,m+.03,-h.faceOut-.06,M-.035,p-.04,p-.02,new j(Sh),a,e,_));let S=.055,A=p+(p>.05?.06:.03),T=x-.06,C=M+.035,E=M+.035+.06,F=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:m/2,x1:h.hingeAtStart?m/2:m-.06,open:b.open,tilt:b.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?m/2:.06,x1:h.hingeAtStart?m-.06:m/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:m-.06,open:b.open,tilt:b.tilt}];for(let D of F){let k=D.open>.02||D.tilt>.02,O=w?!!b.sensed&&!k:k,B=O?kt(bi,.75):new j(l2),V=O?kt(bi,.95):a,K=D.x0,G=D.x1,Z=G-K,Q=D.open*u2*(h.opening.swing==="out"?-1:1),ht=D.tilt*g2,H=(nt,st,lt)=>{let mt=lt-A,Ct=st+mt*Math.sin(ht),At=A+mt*Math.cos(ht),Wt=nt*Math.cos(Q)-(Ct-C)*Math.sin(Q);Ct=C+(Ct-C)*Math.cos(Q)+nt*Math.sin(Q);let oe=D.atStart?K+Wt:G-Wt;return v(oe,Ct,At)},W=Math.abs(Q)>.05?Xt:_;if(fe(n,H,0,S,C,E,A,T,B,V,e,W),fe(n,H,Z-S,Z,C,E,A,T,B,V,e,W),fe(n,H,S,Z-S,C,E,A,A+S,B,V,e,W),fe(n,H,S,Z-S,C,E,T-S,T,B,V,e,W),Yi(r,H,S,Z-S,(C+E)/2,A+S,T-S,O?kt(bi,.16):ps,e,W),fr(h.opening,h.exterior)==="bars"){let nt=(A+T)/2,st=(C+E)/2;fe(n,H,S,Z-S,st-.012,st+.012,nt-.012,nt+.012,B,V,e,W),fe(n,H,Z/2-.012,Z/2+.012,st-.012,st+.012,A+S,T-S,B,V,e,W)}}}if(b.cover!==null){let y=-h.faceOut,P=x+.2;fe(n,v,-.05,m+.05,y-.15,y,x,P,new j(c2),a,e,_);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let A=x-S*(x-p);Yi(s,v,0,m,y-.07,A,x,new j(16777215),e,_,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var x2=.3,i0=2.6;function r0(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],R=[...w,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return w.every(y=>Kt(y,i))&&!n.some(y=>R.some(P=>Kt(P,y)))},d=(M,w)=>f(u?[M,w]:[w,M]),g=(M,w)=>{let R=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let y=1;y<R;y++)if(!f([M[0]+(w[0]-M[0])*y/R,M[1]+(w[1]-M[1])*y/R]))return!1;return!0},[b,m,p,x]=u?[o,a,l,c]:[l,c,o,a],_=[],v=!0;for(let M=b+e;M<=m-e+1e-6;M+=t){let w=null,R=null,y=.05;for(let T=p;T<=x+1e-6;T+=y)if(d(M,T)&&(R??=T),(!d(M,T)||T+y>x+1e-6)&&R!==null){let C=d(M,T)?T:T-y;(!w||C-R>w[1]-w[0])&&(w=[R,C]),R=null}if(!w||w[1]-w[0]<.2)continue;let P=T=>{let[C,E]=T?w:[w[1],w[0]];return[u?[M,C]:[C,M],u?[M,E]:[E,M]]},S=P(v),A=_[_.length-1];if(A&&n.length&&!g(A,S[0])){let T=P(!v);if(!g(A,T[0]))continue;S=T,v=!v}_.push(S[0],S[1]),v=!v}return _}function Th(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var wh=i=>Math.atan2(Math.sin(i),Math.cos(i));function s0(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=wh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),i0*e),!0)}let a=Math.atan2(r,s),l=wh(a-i.heading);if(i.heading=wh(i.heading+Math.sign(l)*Math.min(Math.abs(l),i0*e)),Math.abs(l)<.35){let c=Math.min(o,x2*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Tn=null,o0=new Map;function l0(i,t=0){let e=new jt,n=new Le,r=we(i.type);if(r?.light)$l(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Eh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Yl(e,n,new jt,s)}return{buf:e,lines:n}}function v2(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=o0.get(r);if(s)return s;e&&eo(e),Tn??=new cr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Tn.setSize(t,t,!1),Tn.setClearColor(0,0);let{buf:o,lines:a}=l0(i),l=new Ri,c=new Nt(o.geometry(),new Jt({vertexColors:!0,color:new j(n,n,n)})),u=new $e(a.geometry(),new Qe({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new hn().setFromObject(c),f=h.getCenter(new X),d=new qn(-1,1,1,-1,.01,100);d.position.copy(f).add(new X(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let g=.05;for(let p of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let _ of[h.min.z,h.max.z]){let v=new X(p,x,_).applyMatrix4(d.matrixWorldInverse);g=Math.max(g,Math.abs(v.x),Math.abs(v.y))}let b=g*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Tn.render(l,d);let m=Tn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),o0.set(r,m),m}function y2(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=a0.get(s);if(o)return o;n&&eo(n);let{buf:a,lines:l}=l0(i,t),c=new Nt(a.geometry(),new Jt({vertexColors:!0,color:new j(r,r,r)})),u=new $e(l.geometry(),new Qe({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),h=new hn().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,g=Math.max(0,h.min.y),b=h.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((b-g)*e)));Tn??=new cr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(1),Tn.setSize(m,p,!1),Tn.setClearColor(0,0);let x=new Ri;x.add(c,u);let _=new qn(f,d,b,g,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Tn.render(x,_);let v=Tn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:v,x0:f,x1:d,y0:g,y1:b};return a0.set(s,M),M}var a0=new Map;var N3={Group:Ne,Mesh:Nt,MeshBasicMaterial:Jt,CanvasTexture:ui,Color:j,PlaneGeometry:hi,BufferGeometry:Zt,Float32BufferAttribute:zt,DoubleSide:ue},u0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},_2=2.4,h0=1.4,M2=.22,f0=.94,d0=140,p0=1.5;function S2(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,u=l-o,h=c*c+u*u||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*u)/h));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+u*f)))}return n}var Rh=32,w2=500,m0=160,g0=33,b0=.028,T2=.09,Qt=2767456,E2=2240847,A2=3096944,R2=1911110,C2=1,x0=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),fc=450,v0=125,P2=.08,dc={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},I2=new j(1714765);function L2(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Ch=class{host;options;renderer;scene=new Ri;camera=new Xe(38,1,.1,400);controls;labels;root=new Ne;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new $e(new Zt,new Qe({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Yr(new Zt,new nr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Nt(new Ls(1,28),new Jt({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=D2(),this.blindTexture=U2(),this.haloTexture=B2(),this.ground=new Nt(new hi(1,1),new Jt({transparent:!1,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){eo(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,$d(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>Dl(u.floor).some(h=>h.id===t)),n=e?Dl(e.floor).find(u=>u.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let u=e.floor.elevation+e.ty,[h,f]=Bi(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new X(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=Bi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new X(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new X(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}get wallsCut(){return this.wallMode!=="auto"}get objectsCut(){return this.wallMode==="cut"}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])wo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&wo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Wm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Hm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ne;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new Nt(new Os(.92,1,48),new Jt({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:ue}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Zt;c.setAttribute("position",new zt(a,3));let u=new $e(c,new Qe({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Ah(r),o=y0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new jt;for(let s of e)km(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=qm(t),n=e?1:0;n===uc.value&&(!e||cc.value.equals(new X(...e)))||(uc.value=n,e&&cc.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Ym(t),Zp(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"))&&this.rebuild();let n=To(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new As(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Zt;l.setAttribute("position",new zt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*re,o=(r?t.azimuth+180:t.azimuth)*re,a=Math.max(10,Math.abs(t.elevation))*re,l=this.weatherBox,c=new X((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new X(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Ao,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/m0),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new jt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);jp(e,n,cn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Jp(e,n,cn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=Il(n.type),s=r?we(n.type):void 0;r&&s&&em(e,s,r,n,cn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new oc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new X(e.x,a,e.z),direction:new X(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(ac);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(ac),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&L2();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new cr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new rc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},w2)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Zm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=_0(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Eo(r,a.ra),a.rb=Eo(r,a.rb)}t.lightSurface=n;let s=new Zt;s.setAttribute("position",new zt(n.pos,3)),s.setAttribute("color",new zt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new zt(n.fold,1));let o=new tr(new Uint32Array(n.pos.length/3),1);o.setUsage(bu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Mh(t.floor,n.x,n.z),a=Eo(t.lightZones,o),[l,,c]=n.size??(n.lamp?dc[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<C2?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],g=n.lightY??f,b=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*re,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:u+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*re;e.push({x:n.x+Math.cos(m)*l*x*Math.cos(_),y:g+Math.sin(_)*l*x,z:n.z+Math.sin(m)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:p||_?"omni":d,room:a})}}else e.push({x:n.x,y:g,z:n.z,color:b,level:r.level,kind:d,room:a})}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let u of this.devices){if(u.floorId!==n.floor.id)continue;let h=this.glowOf(u);if(!h)continue;let f=Kt([u.x,u.z],s)?0:S2(u.x,u.z,s);if(f>p0)continue;let d=h.level*(1-f/p0);for(let g=0;g<3;g++)a[g]+=h.color[g]*d;o+=d}if(o<.02)continue;let[l,c]=Bi(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:Eo(t.lightZones,Mh(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(g=>g.opening.id===h.id);if(f&&fr(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Jm(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Je(new Jt({vertexColors:!0}),this.themeUniform),pattern:N2(this.patternTexture),wall:Je(ni(new Jt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ni(new Jt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Jt({vertexColors:!0,blending:Gs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Je(ni(new Qe({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ni(new Jt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Je(ni(new Jt({vertexColors:!0,side:ue}),t),this.themeUniform),glass:ni(new Jt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),t),blinds:Je(ni(new Jt({map:this.blindTexture,vertexColors:!0,side:ue}),t),this.themeUniform),water:Je(new Jt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ue}),this.themeUniform),flow:O2(this.flowTime),solarLive:_h(this.flowTime),lamps:Je(new Jt({vertexColors:!0}),this.themeUniform),halos:new nr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new Jt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),screens:new Jt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),earth:Je(new Jt({vertexColors:!0}),this.themeUniform),earthWell:Je(new Jt({vertexColors:!0,side:ue}),this.themeUniform),earthLines:Je(new Qe({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=uh(n)?.id===s.id?o.filter(nt=>nt.face===ch).map(nt=>({field:nt,face:am(n,nt)})):[],l=o.filter(nt=>nt.face.startsWith(`wall:${s.id}:`));if(l.length){let nt=new Map(om(n,s.id).map(st=>[st.key,st]));for(let st of l){let lt=nt.get(st.face);lt&&a.push({field:st,face:lt})}}let u=(n.settings.roof.sections??[]).some(nt=>pp(nt,s.elevation+s.height))?(nt,st)=>{let lt=mp(n,nt,st);return lt===null?null:lt-s.elevation}:void 0,h=_m(vh(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Mm(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),g=new Ne,b=new Nt(h.floor,d.floor),m=new Nt(h.shadow,d.shadow);m.renderOrder=1;let p=new Nt(h.floor,d.pattern);p.renderOrder=2;let x=new Nt(new Zt,d.glow);x.renderOrder=3,x.visible=!1;let _=new Nt(new Zt,d.frames),v=new Nt(new Zt,d.blinds),M=new Nt(new Zt,d.glass);M.renderOrder=4;let w=new Nt(new Zt,d.lamps);w.visible=!1;let R=new Nt(new Zt,d.cones);R.visible=!1,R.renderOrder=3;let y=new Yr(new Zt,d.halos);y.visible=!1,y.renderOrder=7;let P=new Nt(new Zt,d.cones);P.visible=!1,P.renderOrder=7;let S=new Nt(new Zt,d.cones);S.visible=!1,S.renderOrder=7;let A=new Nt(new Zt,d.lamps);A.visible=!1;let T=new Nt(new Zt,d.lamps);T.visible=!1;let C=new Nt(new Zt,d.screens);C.visible=!1,C.renderOrder=5;let E=new Nt(new Zt,d.flow);E.renderOrder=5,E.frustumCulled=!1;let I=yh(a,s.elevation),F=I?new Nt(I.geometry,d.solarLive):null;F&&(F.renderOrder=6,wo(I,this.solarLevels));for(let nt of[_,v,M])nt.frustumCulled=!1;let D=new Nt(h.walls,d.glassWall),k=new Nt(h.walls,d.wall);D.renderOrder=6;let O=new Nt(h.water,d.water);O.renderOrder=4;let B=Math.min(...n.floors.filter(nt=>nt.rooms.length).map(nt=>nt.elevation)),V=Em(n,s,h.openings,s.elevation===B),K=V?[new Nt(V.earth.geometry(),d.earth),new Nt(V.wells.geometry(),d.earthWell),new $e(V.lines.geometry(),d.earthLines)]:[];for(let nt of K)nt.userData.earth=!0;g.add(b,m,p,x,k,O,new $e(h.lines,d.lines),_,v,M,E,w,R,y,P,S,A,T,C,D,...F?[F]:[],...K),this.root.add(g);let G=document.createElement("button");G.className="fp3d-pin fp3d-pin-floor",G.dataset.floor=s.id;let Z=document.createElement("b");Z.textContent=s.name||"\u2013";let Q=document.createElement("span");Q.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",G.append(Z,Q),G.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(G);let ht=t.get(s.id),H=[],W=null;for(let nt of Dl(s)){let st=document.createElement("button");st.className="fp3d-pin",st.dataset.room=nt.id,st.dataset.floor=s.id,this.fillRoomPin(st,nt.name,this.roomInfo.get(nt.id)),st.addEventListener("click",()=>this.options.onRoomTap?.(s.id,nt.id)),this.labels.append(st);let[lt,mt]=Bi(nt.points);if(H.push({pin:st,room:nt,cx:lt,cz:mt}),!nt.outdoor)for(let[Ct,At]of nt.points)W??={x0:Ct,x1:Ct,z0:At,z1:At},W.x0=Math.min(W.x0,Ct),W.x1=Math.max(W.x1,Ct),W.z0=Math.min(W.z0,At),W.z1=Math.max(W.z1,At)}this.floors.push({floor:s,rank:r.indexOf(s),group:g,geo:h,floorMesh:b,shadowMesh:m,patternMesh:p,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:E,solarMesh:F,solarLive:I,lampMesh:w,sunMesh:R,sunSig:"",haloMesh:y,coneMesh:P,trailMesh:S,fridgeMesh:A,pipeMesh:T,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:C,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:W,roomPins:H,labelSize:null,materials:d,mask:f,openings:new Map,y:ht?.y??0,o:ht?.o??1,ty:0,to:1,appliedO:-1,label:G})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ao);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?gm(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(yr(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],r=_h(this.flowTime),s=[],o=new Ne,a=Je(new Jt({vertexColors:!0,transparent:!0,side:ue}),this.themeUniform),l=Je(new Qe({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Je(new Jt({vertexColors:!0,transparent:!0,side:ue,depthWrite:!1}),this.themeUniform),u=new Ne,h=Je(new Jt({vertexColors:!0,side:ue}),this.themeUniform),f=Je(new Jt({vertexColors:!0,transparent:!0,opacity:.35,side:ue,depthWrite:!1}),this.themeUniform),d=Je(new Jt({vertexColors:!0,transparent:!0,opacity:.35,side:ue,depthWrite:!1}),this.themeUniform),g=Je(new Qe({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],m=t.map(p=>{let x=new Ne;x.add(new Nt(p.solid.geometry(),a),new $e(p.lines.geometry(),l)),p.glass.count&&x.add(new Nt(p.glass.geometry(),c));let _=n.flatMap(w=>{let R=e.get(w.face);return R&&(R.section?p.sections?.includes(R.section):p===t[0])?[{face:R,field:w}]:[]}),v=yh(_,p.floor.elevation+p.base);if(v){let w=new Nt(v.geometry,r);w.renderOrder=9,x.add(w),s.push(v),wo(v,this.solarLevels)}p.winRoof?.solid.count&&x.add(new Nt(p.winRoof.solid.geometry(),h),new $e(p.winRoof.lines.geometry(),g)),p.winRoof?.glass.count&&x.add(new Nt(p.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let M=null;(p.win?.solid.count||p.win?.glass.count)&&(M=new Ne,M.add(new Nt(p.win.solid.geometry(),h),new $e(p.win.lines.geometry(),g)),p.win.glass.count&&M.add(new Nt(p.win.glass.geometry(),f)),u.add(M));for(let[w,R]of p.winBelow??[]){if(!R.solid.count&&!R.glass.count)continue;let y=new Ne;y.add(new Nt(R.solid.geometry(),h),new $e(R.lines.geometry(),g)),R.glass.count&&y.add(new Nt(R.glass.geometry(),f)),u.add(y),b.push({floorId:w,win:y})}return{group:x,floorId:p.floor.id,rideId:Mp(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:M}});o.renderOrder=8,this.scene.add(o),this.scene.add(u),this.roof={group:o,parts:m,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:u,winSolid:h,winLines:g,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/f0)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&!this.wallsCut&&!this.hideRoof?f0*n:0,o=1-Math.exp(-t/d0),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+this.roofLift()+(l.lift?h*h0:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*h0:0),l.win.visible=c.group.visible&&c.o>.5&&!this.wallsCut)}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&!this.wallsCut)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:M2)):r=this.explode?n.rank*_2:0,n.ty=r,n.to=s;let a=e===n?tn:$n;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/d0);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/m0);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Ao,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,g=a[f]??0,b=d-g;Math.abs(b)<.003?u[f]=d:(u[f]=g+b*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=h}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*P2+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>fc?.5+.5*Math.sin(f/140):f/fc;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new jt,h=[],f=[],d=new Map,g=t.floor.height;for(let b of r){let m=b.lamp==="strip"?(b.base??g)>Math.min(t.floor.cut_height,g):b.lamp?x0.has(b.lamp)&&(b.top??g)>Math.min(t.floor.cut_height,g):b.model==="camera_ceiling";if(!b.lamp&&!b.model||m&&this.objectsCut)continue;let p=u.count,x=b.pack?we(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?tm(u,b.model,b.x,b.model==="camera_ceiling"?g:b.y,b.z,b.rotation??0):x?$l(u,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):Eh(u,{...b,lamp:b.lamp},b.top??g,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:p,end:u.count}),b.pickable!==!1&&h.push({id:b.id,start:p,end:u.count}),b.furnitureId&&f.push({id:b.furnitureId,start:p,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Bd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],g=d?.55+.45*d.level:0,b=d?new j(...d.color.map(x=>Math.min(1,x*g))):new j(R2),m=n(u.id);m>0&&b.lerp(new j(1,1,1),.7*m);let p=new j(b.getHex());kd(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*re,r=this.weather?.cloud??0,s=_0(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new jt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*re,u=e.azimuth*re,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let g=[-d.toRoom[0],-d.toRoom[1]],b=g[0]*h[0]+g[1]*h[1];if(b<.05)continue;let m=t.openings.get(d.opening.id),p=d.top-(m?.cover??0)*(d.top-d.sill);if(p-d.sill<.05)continue;let x=(A,T)=>{let C=Math.min(7,T*f);return[d.start[0]+d.axis[0]*A+d.toRoom[0]*d.faceRoom-h[0]*C,.02,d.start[1]+d.axis[1]*A+d.toRoom[1]*d.faceRoom-h[1]*C]},_=.14*l*Math.min(1,b*1.5),v=new j(1*_,.82*_,.55*_),M=v.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(A=>A.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let R=s[w],y=t.floor.rooms.filter((A,T)=>s[T]===R&&A.points.length>=3).map(A=>A.points),P=Math.max(1,Math.ceil(Math.min(7,p*f)/.25)),S=Math.max(1,Math.ceil(d.width/.3));for(let A=0;A<P;A++){let T=d.sill+(p-d.sill)*A/P,C=d.sill+(p-d.sill)*(A+1)/P,E=A/P,I=(A+1)/P,F=v.clone().lerp(M,E),D=v.clone().lerp(M,I);for(let k=0;k<S;k++){let O=d.width*k/S,B=d.width*(k+1)/S,V=x((O+B)/2,(T+C)/2);if(!y.some(ht=>Kt([V[0],V[2]],ht)))continue;let K=x(O,T),G=x(B,T),Z=x(B,C),Q=x(O,C);a.tri(K,G,Z,F,F,D),a.tri(K,Z,Q,F,D,D)}}}this.pushRoofSun(t,a,s,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(yr(a).map(h=>[h.key,h])),u=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let h of l){let f=c.get(h.face),d=jl(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let g=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2],[b,m,p,x]=d.corners,_=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(_>.95)continue;let v=(E,I,F)=>[E[0]+(I[0]-E[0])*F,E[1]+(I[1]-E[1])*F,E[2]+(I[2]-E[2])*F],M=v(x,b,_),w=v(p,m,_),R=t.floor.rooms.findIndex(E=>E.id===d.roomId);if(R<0)continue;let y=t.floor.rooms.filter((E,I)=>n[I]===n[R]&&E.points.length>=3).map(E=>E.points),P=(E,I)=>{let F=(k,O)=>v(v(E[0],E[1],k),v(E[3],E[2],k),O);for(let k=0;k<6;k++)for(let O=0;O<6;O++){let B=F((k+.5)/6,(O+.5)/6);if(!y.some(Q=>Kt([B[0],B[2]],Q)))continue;let V=F(k/6,O/6),K=F((k+1)/6,O/6),G=F((k+1)/6,(O+1)/6),Z=F(k/6,(O+1)/6);e.tri(V,K,G,I,I,I),e.tri(V,G,Z,I,I,I)}},S=E=>[E[0],.019,E[2]],A=.06*o;if(P([S(b),S(m),S(w),S(M)],new j(.75*A,.85*A,1*A)),g<.05)continue;let T=E=>{let I=Math.min(7,(E[1]-t.floor.elevation)/Math.tan(s));return[E[0]-r[0]*I,.02,E[2]-r[1]*I]},C=.16*o*Math.min(1,g*1.5);P([T(b),T(m),T(w),T(M)],new j(1*C,.84*C,.6*C))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new jt,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.objectsCut||l.cone===!1)continue;let x=(l.rotation??0)*re,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*re/2,R=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),y=new j(0,0,0),P=Math.max(4,Math.round(w/.15)),S=.015,A=t.geo.walls2d,T=D=>{let k=D.b[0]-D.a[0],O=D.b[1]-D.a[1],B=k*k+O*O||1,V=Math.max(0,Math.min(1,((l.x-D.a[0])*k+(l.z-D.a[1])*O)/B));return Math.hypot(l.x-(D.a[0]+k*V),l.z-(D.a[1]+O*V))},C=null;for(let D of A)T(D)<.45&&(!C||T(D)<T(C))&&(C=D);let E=D=>{let k=_[0]*Math.cos(D)-_[1]*Math.sin(D),O=_[1]*Math.cos(D)+_[0]*Math.sin(D),B=M;for(let V of A){let K=V.b[0]-V.a[0],G=V.b[1]-V.a[1],Z=k*G-O*K;if(Math.abs(Z)<1e-9)continue;let Q=((V.a[0]-l.x)*G-(V.a[1]-l.z)*K)/Z,ht=((V.a[0]-l.x)*O-(V.a[1]-l.z)*k)/Z;V===C&&Q<=.45||Q>.02&&Q<B&&ht>=0&&ht<=1&&(B=Q)}return B},I=D=>{let k=E(D);return[l.x+(_[0]*Math.cos(D)-_[1]*Math.sin(D))*k,S,l.z+(_[1]*Math.cos(D)+_[0]*Math.sin(D))*k]},F=s.count;for(let D=0;D<P;D++)s.tri([l.x,S,l.z],I(-w+2*w*(D+1)/P),I(-w+2*w*D/P),R,y,y);o.push({id:l.id,start:F,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||x0.has(l.lamp)&&this.objectsCut&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??dc[l.lamp],g=l.base??0,b=(l.rotation??0)*re,m={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,fan:Math.max(.5,u-Math.max(.25,d))+.02,floor:g+d-.15,uplight:g+d,table:g+d-.09,wall:g+d/2,strip:g+Math.max(.02,d)-.01,bollard:g+d-.08,garden:g+d-.03}[l.lamp],p=(x,_,v=1)=>{n.push(x,m,_),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,g+h*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*re;n.push(l.x+Math.cos(b)*h*x*Math.cos(_),m+Math.sin(_)*h*x,l.z+Math.sin(b)*h*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else p(l.x+Math.cos(b)*h*x,l.z+Math.sin(b)*h*x,.6);else l.lamp==="wall"?p(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05)):p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new j(...c.color.map(R=>R*.09*c.level)),_=new j(0,0,0),v=Math.max(.03,h/2),M=.45+.35*c.level,w=16;for(let R=0;R<w;R++){let y=R/w*Math.PI*2,P=(R+1)/w*Math.PI*2,S=[l.x+Math.cos(y)*v,m,l.z+Math.sin(y)*v],A=[l.x+Math.cos(P)*v,m,l.z+Math.sin(P)*v],T=[l.x+Math.cos(y)*M,.02,l.z+Math.sin(y)*M],C=[l.x+Math.cos(P)*M,.02,l.z+Math.sin(P)*M];s.tri(S,T,C,x,_,_),s.tri(S,C,A,x,_,x)}}}let a=new Zt;a.setAttribute("position",new zt(n,3)),a.setAttribute("color",new zt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=vh(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new jt;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*re,l=Math.cos(a),c=Math.sin(a),u=(v,M,w)=>[s.x+v*l-w*c,M,s.z+v*c+w*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),w=Math.max(.005,s.h),R=cn(t.floor,s);for(let y of o.faces){if(y.part==="lights"){let O=we(s.type),B=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(O&&O.parts.some(B)){let V=new j(...y.color.map(K=>Math.min(1,K*(.4+.6*y.level))));fo(r,O,s,R,V.getHex(),B)}continue}if(y.part==="cabin"){let O=we(s.type),B=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(O&&O.parts.some(B)){let V=new j(...y.color.map(K=>Math.min(1,K*(.3+.5*y.level))));fo(r,O,s,R,V.getHex(),B);continue}}if(y.part==="burners"&&we(s.type)){let O=we(s.type),B=new j(...y.color.map(V=>Math.min(1,V*(.25+.6*y.level))));fo(r,O,s,R,B.getHex(),zd);continue}if(y.part==="burners"){let O=new j(...y.color.map(V=>Math.min(1,V*(.25+.6*y.level)))),B=R+w+.008;for(let[V,K,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let Z=V*Math.abs(v)/.6,Q=K*M/.62,ht=14;for(let H=0;H<ht;H++){let W=H/ht*Math.PI*2,nt=(H+1)/ht*Math.PI*2;r.tri(u(Z,B,Q),u(Z+Math.cos(W)*G,B,Q+Math.sin(W)*G),u(Z+Math.cos(nt)*G,B,Q+Math.sin(nt)*G),O)}}continue}if(y.part==="band"||y.part==="cabin"){let O=y.part==="cabin",B=R+w*(O?.6:.42),V=O?R+w*.86:B+.07,K=new j(...y.color.map(ht=>Math.min(1,ht*(.3+.45*y.level)))),G=Math.abs(v)/2+(O?.012:.02),Z=M/2+(O?.012:.02),Q=[[-G,-Z],[G,-Z],[G,Z],[-G,Z]];for(let ht=0;ht<4;ht++){let H=Q[ht],W=Q[(ht+1)%4],nt=u(H[0]*Math.sign(v),B,H[1]),st=u(W[0]*Math.sign(v),B,W[1]),lt=u(W[0]*Math.sign(v),V,W[1]),mt=u(H[0]*Math.sign(v),V,H[1]);r.tri(nt,st,lt,K),r.tri(nt,lt,mt,K)}continue}if(y.part==="apring"){let O=s.variant==="wall",B=Math.abs(v),V=O?Math.min(B,w)*.3:Math.min(B,M)*.3,K=new j(...y.color.map(ht=>Math.min(1,ht*(.4+.6*y.level)))),G=new j(0,0,0),Z=24,Q=(ht,H)=>O?u(Math.cos(ht)*H,R+w/2+Math.sin(ht)*H,M/2+.004):u(Math.cos(ht)*H,R-.003,Math.sin(ht)*H);for(let ht=0;ht<Z;ht++){let H=ht/Z*Math.PI*2,W=(ht+1)/Z*Math.PI*2;r.tri(Q(H,V*.8),Q(H,V),Q(W,V),K),r.tri(Q(H,V*.8),Q(W,V),Q(W,V*.8),K),r.tri(Q(H,V),Q(H,V*1.5),Q(W,V*1.5),K,G,G),r.tri(Q(H,V),Q(W,V*1.5),Q(W,V),K,G,K)}continue}if(y.part==="drum"){let O=Math.abs(v),B=Math.min(O*.36,(w-.2)*.42),V=R+(w-.14)/2+.04,K=M/2-.006,G=new j(...y.color.map(W=>Math.min(1,W*(.35+.65*y.level)))),Z=G.clone().multiplyScalar(.12),Q=new j(0,0,0),ht=28,H=(W,nt)=>u(Math.cos(W)*nt,V+Math.sin(W)*nt,K);for(let W=0;W<ht;W++){let nt=W/ht*Math.PI*2,st=(W+1)/ht*Math.PI*2;r.tri(u(0,V,K),H(nt,B*.78),H(st,B*.78),Z),r.tri(H(nt,B*.78),H(nt,B),H(st,B),G),r.tri(H(nt,B*.78),H(st,B),H(st,B*.78),G),r.tri(H(nt,B),H(nt,B*1.18),H(st,B*1.18),G,Q,Q),r.tri(H(nt,B),H(st,B*1.18),H(st,B),G,Q,G)}continue}if(y.part==="gang"){let O=Math.max(1,y.of??1),B=Math.abs(v),V=B/O,K=(-B/2+V*((y.index??0)+.5))*Math.sign(v),G=M/2+(s.variant==="outdoor"?.02:.008),Z=new j(...y.color.map(Ct=>Math.min(1,Ct*(.35+.65*y.level)))),Q=Z.clone().multiplyScalar(.5),ht=new j(0,0,0),H=V*.34,W=R+w*.16,nt=R+w*.84,st=[u(K-H,W,G),u(K+H,W,G),u(K+H,nt,G),u(K-H,nt,G)];r.tri(st[0],st[1],st[2],Z),r.tri(st[0],st[2],st[3],Z);let lt=.012+.015*y.level,mt=[u(K-H-lt,W-lt,G-.001),u(K+H+lt,W-lt,G-.001),u(K+H+lt,nt+lt,G-.001),u(K-H-lt,nt+lt,G-.001)];for(let Ct=0;Ct<4;Ct++){let At=(Ct+1)%4;r.tri(st[Ct],mt[At],mt[Ct],Q,ht,ht),r.tri(st[Ct],st[At],mt[At],Q,Q,ht)}continue}if(y.part==="beacon"){let O=new j(...y.color.map(st=>Math.min(1,st*(.25+.45*y.level)))),B=new j(0,0,0),V=R+w+.01,K=.6+.6*y.level,G=Math.min(Math.abs(v),M)*.38;for(let[st,lt]of[[G,0],[0,G]]){let mt=u(-st,V,-lt),Ct=u(st,V,lt),At=u(st*.4,V+K,lt*.4),Wt=u(-st*.4,V+K,-lt*.4);r.tri(mt,Ct,At,O,O,B),r.tri(mt,At,Wt,O,B,B)}let Z=cn(t.floor,{...s,mount_y:0})+.012,Q=Math.abs(v)/2+.03,ht=M/2+.03,H=.22+.18*y.level,W=(st,lt,mt)=>u(st*(Q+mt),Z,lt*(ht+mt)),nt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let st=0;st<4;st++){let[lt,mt]=nt[st],[Ct,At]=nt[(st+1)%4];r.tri(W(lt,mt,0),W(Ct,At,0),W(Ct,At,H),O,O,B),r.tri(W(lt,mt,0),W(Ct,At,H),W(lt,mt,H),O,B,B)}continue}let P=y.part==="right"?.03:-Math.abs(v)/2+.03,S=y.part==="left"?-.03:Math.abs(v)/2-.03,A=R+(y.part==="bottom"?w*.45:w)+.006,T=new j(...y.color.map(O=>Math.min(1,O*(.35+.65*y.level)))),C=new j(0,0,0),E=(O,B,V=A)=>u(O*Math.sign(v),V,B),I=[E(P,-M/2+.03),E(S,-M/2+.03),E(S,M/2-.03),E(P,M/2-.03)];r.tri(I[0],I[2],I[1],T),r.tri(I[0],I[3],I[2],T);let F=y.part==="lid"?.025+.02*y.level:.12+.1*y.level,D=T.clone().multiplyScalar(y.part==="lid"?.7:.5),k=[E(P-F,-M/2-F,A+.004),E(S+F,-M/2-F,A+.004),E(S+F,M/2+F,A+.004),E(P-F,M/2+F,A+.004)];for(let O=0;O<4;O++){let B=(O+1)%4;r.tri(I[O],k[B],k[O],D,C,C),r.tri(I[O],I[B],k[B],D,D,C)}}continue}let h=we(s.type);if(h&&!h.light&&o.ring&&h.parts.some(v=>v.glow)){let v=new j(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));fo(r,h,s,cn(t.floor,s),v.getHex())}let f=ah(s,t.floor);if(!f)continue;let d=new j(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new j(0,0,0),b=f.z+.004;if(r.tri(u(f.x0,f.y0,b),u(f.x1,f.y0,b),u(f.x1,f.y1,b),d),r.tri(u(f.x0,f.y0,b),u(f.x1,f.y1,b),u(f.x0,f.y1,b),d),o.plain)continue;let m=.18+.12*o.level,p=d.clone().multiplyScalar(.5),x=[u(f.x0,f.y0,b),u(f.x1,f.y0,b),u(f.x1,f.y1,b),u(f.x0,f.y1,b)],_=[u(f.x0-m,f.y0-m,b+.01),u(f.x1+m,f.y0-m,b+.01),u(f.x1+m,f.y1+m,b+.01),u(f.x0-m,f.y1+m,b+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(x[v],_[v],_[M],p,g,g),r.tri(x[v],_[M],x[M],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=ah(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Nt(new hi(1,1),new Jt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new rr().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Ce,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*re,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Ah).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Ah(u))??{speed:y0(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(x=>x*f),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(g<1e-4)continue;let b=[(u.b[0]-u.a[0])/g,(u.b[1]-u.a[1])/g,(u.b[2]-u.a[2])/g],m=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;m.push([-b[2]/x,0,b[0]/x])}else m.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[b0*1.4,1]]:[[T2,.25],[b0,1]];for(let[x,_]of p)for(let v of m){let M=x/2,w=(y,P)=>[y[0]+v[0]*M*P,y[1]+v[1]*M*P,y[2]+v[2]*M*P],R=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+g,0],[w(u.b,1),u.dist+g,1],[w(u.a,1),u.dist,1]];for(let y of[0,1,2,0,2,3]){let[P,S,A]=R[y];n.push(P[0],P[1],P[2]),r.push(d[0]*_,d[1]*_,d[2]*_),s.push(S,A),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Zt;c.setAttribute("position",new zt(n,3)),c.setAttribute("color",new zt(r,3)),c.setAttribute("uv",new zt(s,2)),c.setAttribute("flowSpeed",new zt(o,1)),c.setAttribute("flowOffset",new zt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=n0(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new j(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new j(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(I2,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new hn;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[g,b]of d.points)e.expandByPoint(new X(g,f,b)),e.expandByPoint(new X(g,f+h.floor.height,b))}e.isEmpty()&&e.set(new X(-4,0,-4),new X(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new X),r=e.getSize(new X),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new X(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new hn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new X(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new X(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=k2();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new X),r=t.getSize(new X),s=Rh*Math.ceil((Math.max(r.x,r.z)+16)/Rh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Ke-.02,n.z)}distanceFor(t){let e=this.camera.fov*re,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new zs;return r.setFromCamera(new ie(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallsCut&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xt;if(f!==Xt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(!u&&a.face&&a.face.normal.y>.7){let f=Yu(c.floor).find(d=>Kt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),g=f%16,b=this.wallsCut&&d===0,m=(c.mask.glass.value&1<<g)!==0;if(!b){let p=n.ray.direction,x=Math.hypot(p.x,p.z)||1,_=[a.point.x-p.x/x*.3,a.point.z-p.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&Kt(_,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!m&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||s(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*re,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:s.id,d:h})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(h=>h.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(s!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new X),d=Math.hypot(f.x,f.z)||1,g=[f.x/d,f.z/d],b=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),m=this.renderer.domElement.getBoundingClientRect().height||1,p=2*b*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-g[1],g[0]],fwd:g,perPx:p,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(m=>m.id===n.id),g=f&&this.floorPoint(f,t,e);if(!f||!d||!g)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((g[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((g[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Rm(s.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new $e(e.geometry(),new Qe({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=we(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?cn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:cn(e.floor,n),h=n.rotation*re,f=Math.cos(h),d=Math.sin(h),g=(m,p,x)=>[s+m*f-p*d,x,o+m*d+p*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let m=0;m<4;m++){let[p,x]=b[m],[_,v]=b[(m+1)%4];t.seg(g(p,x,u+.01),g(_,v,u+.01),r),t.seg(g(p,x,u+c),g(_,v,u+c),r),t.seg(g(p,x,u+.01),g(p,x,u+c),r)}t.seg(g(-n.w/2,n.d/2+.03,u+.02),g(n.w/2,n.d/2+.03,u+.02),new j(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new qe(s,o);a.texture.colorSpace=Ce;let l=new qn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let b=g.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let C of this.floors)C.group.visible=C===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let x=p.floor.rooms.flatMap(C=>C.points),_=p.floor.elevation,v=new hn(new X(Math.min(...x.map(C=>C[0]))-.3,_,Math.min(...x.map(C=>C[1]))-.3),new X(Math.max(...x.map(C=>C[0]))+.3,_+Math.min(p.floor.cut_height,p.floor.height),Math.max(...x.map(C=>C[1]))+.3)),M=v.getCenter(new X),w=-.6,R=.8,y=new X(Math.sin(R)*Math.sin(w),Math.cos(R),Math.sin(R)*Math.cos(w));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let P=.5,S=.5;for(let C of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let I of[v.min.z,v.max.z]){let F=new X(C,E,I).applyMatrix4(l.matrixWorldInverse);P=Math.max(P,Math.abs(F.x)),S=Math.max(S,Math.abs(F.y))}let A=s/o;P/S>A?S=P/A:P=S*A,l.left=-P*1.05,l.right=P*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let T=b.createImageData(s,o);for(let C=0;C<o;C++)T.data.set(d.subarray((o-1-C)*s*4,(o-C)*s*4),C*s*4);b.putImageData(T,0,0),m.push({floorId:p.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?r0(n.room,void 0,void 0,n.obstacles):Th(n.rest),l=a.length?a:Th(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Kt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(u0[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new jt,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ae(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new Jt({vertexColors:!0});let o=new jt;Ae(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ne,n=new Jt({color:u0[t.mode]});return e.add(new Nt(this.robotGeo,this.robotMat),new Nt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??dc.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let u=new jt;S0(u,0,0,0,l,0),this.fanMat??=new Jt({vertexColors:!0});let h=new Nt(u.geometry(),this.fanMat),f=new Ne;f.add(h),f.rotation.y=-((n.rotation??0)*re),c={group:f,mesh:h,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=M0(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.objectsCut&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=s0(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),s=new j(.3,1,.6),o=.02;for(let a of this.floors){let l=new jt;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let g=u.points[d-1];if(g){let b=Math.hypot(h-g[0],f-g[1])||1,m=-(f-g[1])/b*.1,p=(h-g[0])/b*.1;l.tri([g[0]+m,o,g[1]+p],[h+m,o,f+p],[h-m,o,f-p],s,s,s),l.tri([g[0]+m,o,g[1]+p],[h-m,o,f-p],[g[0]-m,o,g[1]-p],s,s,s)}for(let b=0;b<10;b++){let m=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[h+Math.cos(m)*.35,o,f+Math.sin(m)*.35],s,r,r)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,g=(u.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+g],[u.x+d,o,u.z+g],[u.x-d,o,u.z-g],b,h,h),l.tri([c.x+d,o,c.z+g],[u.x-d,o,u.z-g],[c.x-d,o,c.z-g],b,h,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,g=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(g)*.22,o,u.z+Math.sin(g)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new X(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new X(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+fc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new X(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let g=new Set;for(let[b,m]of this.flashes){let p=this.deviceFloor.get(b);p&&g.add(p),m<=t&&this.flashes.delete(b)}a=this.flashes.size>0;for(let b of this.floors)g.has(b.floor.id)&&this.buildLamps(b)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepFans(t),h=this.stepWeather(t),f=r||s||o||a||l,d=[];if((r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),u&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*v0:v0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let b of this.floors)b.o<.02||!this.effectFloors.has(b.floor.id)||(this.buildLamps(b),this.buildGlow(b));this.invalidate()},g)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},this.lowQuality?83:50)),!f&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*g0:g0))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallsCut,c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?this.objectsCut?0:1<<uo:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new X,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(b,u,m).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,g=l.y;d<f&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new X(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length();if(o.near!==void 0&&h>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=u.normalize().dot(new X(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new X,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=F2(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function F2(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function D2(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new ui(t);return s.flipY=!1,s.wrapS=bn,s.wrapT=bn,s.anisotropy=4,s.colorSpace=Ce,s}function N2(i){let t=new Jt({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function U2(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new ui(i);return e.wrapS=Qi,e.wrapT=Qi,e.colorSpace=Ce,e}function Ah(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function y0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function O2(i){let t=new Jt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function _0(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function B2(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new ui(t);return r.colorSpace=Ce,r}function k2(){let t=Rh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new ui(e);return s.anisotropy=4,s.colorSpace=Ce,s}function q3(i,t){return new Ch(i,t)}function M0(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function S0(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,u=Math.cos(c),h=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([g,b])=>[t+g*u-b*h,n+g*h+b*u]);Ae(i,d,e-.006,e+.006,E2,A2,{aoFrom:0,bottom:!0})}}function Eh(i,t,e,n,r=!0){let[s,o,a]=t.size??dc[t.lamp],l=t.base??0,c=(t.rotation??0)*re,u=Math.cos(c),h=Math.sin(c),f=(m,p)=>[t.x+m*u-p*h,t.z+m*h+p*u],d=(m,p,x,_,v,M=14)=>{let w=[];for(let R=0;R<M;R++){let y=R/M*Math.PI*2;w.push([t.x+Math.cos(y)*m,t.z+Math.sin(y)*m])}Ae(i,w,p,x,_,v,{aoFrom:0,bottom:!0})},g=(m,p,x,_,v,M,w,R=w)=>Ae(i,[f(m,x),f(p,x),f(p,_),f(m,_)],v,M,w,R,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,Qt,Qt,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let m=Math.max(.4,e-a);d(.06,e-.02,e,Qt,Qt,8);let p=t.variant==="globe"?m+2*b:t.variant==="drum"?m+.24:m+.2;if(d(.008,p,e-.02,Qt,Qt,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),m+b-b*Math.cos(v),m+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),m+.06*_,m+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,m,m+.24,n,n,18):(d(b*.35,m+.14,m+.2,n,n,12),d(b,m,m+.14,n,n,16));break}case"fan":{let m=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,Qt,Qt,10),d(.012,m+.16,e-.03,Qt,Qt,6),d(.13,m+.07,m+.16,Qt,Qt,16),d(.11,m,m+.07,n,n,16),r&&S0(i,t.x,M0(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,Qt,Qt,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,Qt,Qt,10),d(b,e-Math.max(.06,a),e-.02,Qt,Qt,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":g(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,Qt,Qt),g(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,Qt,Qt),d(.014,l+.03,l+a-.12,Qt,Qt,6),d(b,l+a-.14,l+a-.02,Qt,Qt),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,Qt,Qt,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,Qt,Qt,10);break;case"garden":d(.012,l,l+a-.08,Qt,Qt,5),d(b,l+a-.08,l+a-.01,Qt,Qt,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,Qt,Qt),d(.014,l+.03,l+a-.28,Qt,Qt,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,Qt,Qt),d(.012,l+.03,l+a-.16,Qt,Qt,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let m=t.base??Ll;g(-s/2+.03,s/2-.03,-o/2,-o/2+.02,m,m+a,Qt),g(-s/2,s/2,-o/2+.02,o/2,m+a*.15,m+a*.85,n);break}case"strip":{let m=Math.max(.02,a),p=t.base!=null?t.base+m:e-.04;if(!t.roll&&!t.upright&&!t.rise){g(-s/2,s/2,-o/2,o/2,p-m,p,n);break}let x=(t.roll??0)*re,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:p-m/2,w=(t.upright?0:t.rise??0)*re,R=(T,C,E)=>{let I=T,F=C*_-E*v,D=C*v+E*_;return w&&([I,F]=[I*Math.cos(w)-F*Math.sin(w),I*Math.sin(w)+F*Math.cos(w)]),t.upright&&([I,F]=[-F,I]),[t.x+I*u-D*h,M+F,t.z+I*h+D*u]},y=[R(-s/2,-m/2,-o/2),R(s/2,-m/2,-o/2),R(s/2,-m/2,o/2),R(-s/2,-m/2,o/2),R(-s/2,m/2,-o/2),R(s/2,m/2,-o/2),R(s/2,m/2,o/2),R(-s/2,m/2,o/2)],P=new j(n),S=[t.x,M,t.z],A=(T,C,E,I)=>{let[F,D,k]=[y[T],y[C],y[E]],O=[(D[1]-F[1])*(k[2]-F[2])-(D[2]-F[2])*(k[1]-F[1]),(D[2]-F[2])*(k[0]-F[0])-(D[0]-F[0])*(k[2]-F[2]),(D[0]-F[0])*(k[1]-F[1])-(D[1]-F[1])*(k[0]-F[0])],B=[F[0]-S[0],F[1]-S[1],F[2]-S[2]],V=O[0]*B[0]+O[1]*B[1]+O[2]*B[2]<0,[K,G,Z,Q]=V?[y[I],y[E],y[C],y[T]]:[y[T],y[C],y[E],y[I]];i.tri(K,G,Z,P,P,P),i.tri(K,Z,Q,P,P,P)};A(0,1,2,3),A(4,5,6,7),A(0,1,5,4),A(1,2,6,5),A(2,3,7,6),A(3,0,4,7);break}}}export{bh as FloorMap,Ch as FloorplanViewer,xh as WalkCamera,q3 as createViewer,N3 as funLib,y2 as furnitureFront,v2 as furniturePreview,L2 as isLowEnd,S0 as pushFanBlades,Eh as pushLampModel};
