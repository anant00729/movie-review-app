(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(1),o=t.n(i),a=t(36),c=t.n(a),l=(t(45),t(46),t(7)),s=t(2),u=t(3);function d(){var e=Object(s.a)(["\n  margin-top: 16px;\n  color: #fff;\n"]);return d=function(){return e},e}function b(){var e=Object(s.a)(["\n  padding: 10px 16px;\n  background: #fff;\n  border: 0 solid transparent;\n  border-radius: 4px;\n  font-size: 20px;\n  outline-color: transparent;\n  color: rgb(55, 65, 81);\n  margin-top: 32px;\n  cursor: pointer;\n  &:focus {\n    outline-width: 0;\n  }\n"]);return b=function(){return e},e}function j(){var e=Object(s.a)(["\n  padding: 10px 16px;\n  background: #fff;\n  border: 0 solid transparent;\n  border-radius: 4px;\n  font-size: 20px;\n  outline-color: transparent;\n  color: rgb(55, 65, 81);\n  margin-top: 14px;\n  &:focus {\n    outline-width: 0;\n  }\n"]);return j=function(){return e},e}function f(){var e=Object(s.a)(["\n  padding: 10px 16px;\n  background: #fff;\n  border: 0 solid transparent;\n  border-radius: 4px;\n  font-size: 20px;\n  outline-color: transparent;\n  color: rgb(55, 65, 81);\n  margin-top: 14px;\n  &:focus {\n    outline-width: 0;\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(s.a)(["\n  width: 100%;\n\n  @media "," {\n    width: 600px;\n    margin: unset;\n  }\n\n  @media "," {\n    width: 668px;\n    margin: unset;\n  }\n\n  @media "," {\n    width: 1000px;\n  }\n\n  @media "," {\n    width: 1100px;\n  }\n"]);return v=function(){return e},e}var p="(min-width: 600px)",x="(min-width: 768px)",g="(min-width: 992px)",h=u.b.div(v(),p,x,g,"(min-width: 1200px)"),m=u.b.input(f()),O=u.b.textarea(j()),y=u.b.button(b()),w=u.b.label(d());function _(){var e=Object(s.a)(["\n  font-size: 16px;\n  color: #fff;\n  margin-top: 16px;\n"]);return _=function(){return e},e}function S(){var e=Object(s.a)(["\n  font-size: 32px;\n  color: #fff;\n"]);return S=function(){return e},e}function k(){var e=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 16px;\n  margin-top: 16px;\n\n  @media "," {\n    margin-top: unset;\n  }\n"]);return k=function(){return e},e}function A(){var e=Object(s.a)(["\n  display: flex;\n  margin-top: 24px;\n\n  flex-direction: column;\n  @media "," {\n    flex-direction: row;\n  }\n"]);return A=function(){return e},e}function C(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"]);return I=function(){return e},e}function T(){var e=Object(s.a)(["\n  width: 100%;\n  margin-top: 24px;\n"]);return T=function(){return e},e}function E(){var e=Object(s.a)(["\n  height: 200px;\n  border-radius: 8px;\n  flex: 1;\n  object-fit: cover;\n\n  @media "," {\n    height: 350px;\n  }\n"]);return E=function(){return e},e}var P=u.b.img(E(),g),R=u.b.div(T()),z=u.b.div(I()),D=u.b.div(C(),p,x,g),L=Object(u.b)(h)(A(),x),M=u.b.div(k(),x),N=u.b.label(S()),V=u.b.label(_());function B(){var e=Object(s.a)(["\n  margin: 12px 0;\n  color: #fff;\n  text-align: center;\n"]);return B=function(){return e},e}function U(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  transition: 1s;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n"]);return U=function(){return e},e}function W(){var e=Object(s.a)(["\n  margin-top: 16px;\n  width: 190px;\n  height: 295px;\n  border-radius: 4px;\n  object-fit: cover;\n"]);return W=function(){return e},e}var F=u.b.img(W()),H=u.b.div(U()),J=u.b.label(B()),G=t(5),K="/",Y="/login",Z="/register",X="/movie-review",$=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},q=t(21),Q=t(4),ee="STORE_TOKEN_AND_USER_ID",ne="CLEAR_TOKEN_AND_USER_ID",te="GET_ALL_MOVIE_REVIEWS",re="CREATE_REVIEW_POST",ie="CLEAR_REVIEWS",oe="SET_ALERT",ae="REMOVE_ALERT",ce=function(e,n){var t,r,i,o,a,c,l;switch(n.type){case ee:return localStorage.setItem("user_token",null===n||void 0===n||null===(t=n.payload)||void 0===t?void 0:t.token),localStorage.setItem("user_id",null===n||void 0===n||null===(r=n.payload)||void 0===r?void 0:r.user_id),localStorage.setItem("username",null===n||void 0===n||null===(i=n.payload)||void 0===i?void 0:i.username),Object(Q.a)(Object(Q.a)({},e),{},{user_token:null===n||void 0===n||null===(o=n.payload)||void 0===o?void 0:o.token,user_id:null===n||void 0===n||null===(a=n.payload)||void 0===a?void 0:a.user_id,username:null===n||void 0===n||null===(c=n.payload)||void 0===c?void 0:c.username,isAuthenticated:!0});case ne:return localStorage.removeItem("user_token"),localStorage.removeItem("user_id"),localStorage.removeItem("username"),localStorage.clear(),Object(Q.a)(Object(Q.a)({},e),{},{user_token:"",user_id:"",username:"",isAuthenticated:!1});case re:var s=localStorage.getItem("username");return Object(Q.a)(Object(Q.a)({},e),{},{all_reviews:[Object(Q.a)(Object(Q.a)({},null===n||void 0===n?void 0:n.payload),{},{username:s})].concat(Object(q.a)(e.all_reviews))});case te:return Object(Q.a)(Object(Q.a)({},e),{},{all_reviews:Object(q.a)(null===n||void 0===n?void 0:n.payload)});case ie:return Object(Q.a)(Object(Q.a)({},e),{},{all_reviews:[]});case oe:return Object(Q.a)(Object(Q.a)({},e),{},{alerts:[].concat(Object(q.a)(e.alerts),[null===n||void 0===n?void 0:n.payload])});case ae:return Object(Q.a)(Object(Q.a)({},e),{},{alerts:null===e||void 0===e||null===(l=e.alerts)||void 0===l?void 0:l.filter((function(e){return e.id!==(null===n||void 0===n?void 0:n.payload)}))});default:return e}},le=t(70),se={user_token:localStorage.getItem("user_token"),user_id:localStorage.getItem("user_id"),username:localStorage.getItem("username"),isAuthenticated:!!localStorage.getItem("user_token")&&"undefined"!=localStorage.getItem("user_token"),all_reviews:[],alerts:[]},ue=Object(i.createContext)(se),de=function(e){var n=e.children,t=Object(i.useReducer)(ce,se),o=Object(l.a)(t,2),a=o[0],c=o[1];return Object(r.jsx)(ue.Provider,{value:{user_token:a.user_token,user_id:a.user_id,username:a.username,isAuthenticated:a.isAuthenticated,all_reviews:a.all_reviews,alerts:a.alerts,clearAuth:function(){c({type:ne})},storeAuth:function(e,n,t){c({type:ee,payload:{token:e,user_id:n,username:t}})},createReviewPost:function(e){c({type:re,payload:e})},storeAllReviews:function(e){c({type:te,payload:e})},clearAllReviews:function(){c({type:ie,payload:[]})},setAlert:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2500;if(e){var t=Object(le.a)();c({type:oe,payload:{msg:e,id:t}}),setTimeout((function(){return c({type:ae,payload:t})}),n)}}},children:n})};var be=Object(G.g)((function(e){var n=e.movie,t=n.poster_path,o=n.original_title,a=n.id,c=e.history,l=Object(i.useContext)(ue).clearAllReviews;return Object(r.jsxs)(H,{onClick:function(){l(),c.push("".concat(X,"/").concat(a))},children:[Object(r.jsx)(F,{src:"https://image.tmdb.org/t/p/w220_and_h330_face".concat(t),alt:"img"}),Object(r.jsx)(J,{children:o})]})}));var je=function(e){var n=Object(i.useState)([]),t=Object(l.a)(n,2),o=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("/v1/movie/getMovieList",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({pageNumber:1})}).then((function(e){return e.json()})).then((function(e){e.results.length>0&&a(e.results)})).catch((function(e){console.log("error.message :>> ",null===e||void 0===e?void 0:e.message)}))}),[]),Object(r.jsxs)(z,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)(P,{src:"https://pbs.twimg.com/media/Dz_LPnmUUAUrjAi?format=jpg&name=4096x4096",alt:"home-img"}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(N,{children:" Welcome."})}),Object(r.jsxs)(V,{children:["Millions of movies, TV shows and people to discover. Explore now."," "]})]})]}),Object(r.jsx)(h,{children:Object(r.jsx)(R,{children:o.length>0?Object(r.jsx)(D,{children:o.map((function(e,n){return Object(r.jsx)(be,{movie:e},n)}))}):Object(r.jsx)("div",{style:{textAlign:"center",color:"#fff"},children:Object(r.jsx)("h2",{children:"Loading... "})})})})]})};function fe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return fe=function(){return e},e}function ve(){var e=Object(s.a)(["\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 1px;\n  margin-top: 16px;\n"]);return ve=function(){return e},e}function pe(){var e=Object(s.a)(["\n  width: 120px;\n  height: 120px;\n"]);return pe=function(){return e},e}function xe(){var e=Object(s.a)(["\n  height: calc(100vh - 52px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return xe=function(){return e},e}function ge(){var e=Object(s.a)(["\n  background-color: #202020;\n  border: 1px solid #fdce14;\n  border-radius: 4px;\n  box-shadow: 0 10px 0 -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 32px;\n  min-width: 400px;\n"]);return ge=function(){return e},e}var he=u.b.div(ge()),me=Object(u.b)(h)(xe()),Oe=u.b.img(pe()),ye=u.b.label(ve()),we=u.b.form(fe()),_e=t.p+"static/media/earth-2.0bbf81b4.svg",Se=t(13),ke=t.n(Se);var Ae=Object(G.g)((function(e){var n=e.history,t=Object(i.useState)(""),o=Object(l.a)(t,2),a=o[0],c=o[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),d=u[0],b=u[1],j=Object(i.useContext)(ue),f=j.storeAuth,v=j.setAlert;return Object(r.jsx)(me,{children:Object(r.jsxs)(he,{children:[Object(r.jsx)(Oe,{src:_e,alt:"login_logo"}),Object(r.jsx)(ye,{children:"Welcome user"}),Object(r.jsxs)(we,{children:[Object(r.jsx)(w,{children:"Email"}),Object(r.jsx)(m,{onChange:function(e){return c(e.target.value)},value:a,type:"email"}),Object(r.jsx)(w,{children:"Password"}),Object(r.jsx)(m,{value:d,onChange:function(e){return b(e.target.value)},type:"password"}),Object(r.jsx)(y,{onClick:function(e){return function(e){e.preventDefault(),(null===a||void 0===a?void 0:a.length)?$(a)?(null===d||void 0===d?void 0:d.length)?ke()({method:"POST",url:"/v1/auth/login",headers:{Accept:"application/json","Content-Type":"application/json"},data:{email:a,password:d}}).then((function(e){var t,r,i,o,a,c,l;(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.status)?(f(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.token,null===e||void 0===e||null===(i=e.data)||void 0===i||null===(o=i.user)||void 0===o?void 0:o.id,null===e||void 0===e||null===(a=e.data)||void 0===a||null===(c=a.user)||void 0===c?void 0:c.username),n.push(K)):v(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.message)})).catch((function(e){v(null===e||void 0===e?void 0:e.message)})):v("Please enter your password."):v("Please enter valid email address."):v("Please enter your email.")}(e)},children:"Login"})]})]})})}));var Ce=Object(G.g)((function(e){var n=e.history,t=Object(i.useState)(""),o=Object(l.a)(t,2),a=o[0],c=o[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),d=u[0],b=u[1],j=Object(i.useState)(""),f=Object(l.a)(j,2),v=f[0],p=f[1],x=Object(i.useState)(""),g=Object(l.a)(x,2),h=g[0],O=g[1],_=Object(i.useContext)(ue),S=_.storeAuth,k=_.setAlert;return Object(r.jsx)(me,{children:Object(r.jsxs)(he,{children:[Object(r.jsx)(Oe,{src:_e,alt:"login_logo"}),Object(r.jsx)(ye,{children:"Hello new user"}),Object(r.jsxs)(we,{children:[Object(r.jsx)(w,{children:"Email"}),Object(r.jsx)(m,{onChange:function(e){return c(e.target.value)},value:a,type:"email"}),Object(r.jsx)(w,{children:"Username"}),Object(r.jsx)(m,{onChange:function(e){return b(e.target.value)},value:d,type:"text"}),Object(r.jsx)(w,{children:"Password"}),Object(r.jsx)(m,{onChange:function(e){return p(e.target.value)},value:v,type:"password"}),Object(r.jsx)(w,{children:"Confirm Password"}),Object(r.jsx)(m,{onChange:function(e){return O(e.target.value)},value:h,type:"password"}),Object(r.jsx)(y,{onClick:function(e){return function(e){e.preventDefault(),(null===a||void 0===a?void 0:a.length)?$(a)?(null===d||void 0===d?void 0:d.length)?(null===v||void 0===v?void 0:v.length)?(null===h||void 0===h?void 0:h.length)?(null===v||void 0===v?void 0:v.length)<6?k("Passwords must be more than 5 characters."):h===v?ke()({method:"POST",url:"/v1/auth/register",headers:{Accept:"application/json","Content-Type":"application/json"},data:{email:a,username:d,password:v}}).then((function(e){var t,r,i,o,a,c,l;(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.status)?(S(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.token,null===e||void 0===e||null===(i=e.data)||void 0===i||null===(o=i.user)||void 0===o?void 0:o.id,null===e||void 0===e||null===(a=e.data)||void 0===a||null===(c=a.user)||void 0===c?void 0:c.username),n.push(K)):k(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.message)})).catch((function(e){k(null===e||void 0===e?void 0:e.message)})):k("Passwords do not match."):k("Please enter a confirm password."):k("Please enter a password."):k("Please enter your username."):k("Please enter valid email address."):k("Please enter your email.")}(e)},children:"Register"})]})]})})}));function Ie(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n  align-items: center;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(s.a)(["\n  margin-top: 24px;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n"]);return Te=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  width: 220px;\n  height: 330px;\n  border-radius: 4px;\n  object-fit: cover;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n"]);return Ee=function(){return e},e}var Pe=u.b.img(Ee()),Re=u.b.label(Te()),ze=u.b.div(Ie());function De(e){var n=e.movieName,t=e.poster;return Object(r.jsxs)(ze,{children:[Object(r.jsx)(Pe,{src:"https://image.tmdb.org/t/p/w220_and_h330_face".concat(t),alt:"img-movie-details"}),Object(r.jsx)(Re,{children:n})]})}function Le(){var e=Object(s.a)(["\n  margin: 12px 0;\n  color: #fff;\n  font-size: 24px;\n"]);return Le=function(){return e},e}function Me(){var e=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"]);return Me=function(){return e},e}var Ne=u.b.div(Me()),Ve=u.b.label(Le());var Be=function(e){var n=e.movieId,t=Object(i.useState)(""),o=Object(l.a)(t,2),a=o[0],c=o[1],s=Object(i.useContext)(ue),u=s.user_id,d=s.createReviewPost,b=s.setAlert;return Object(r.jsxs)(Ne,{children:[Object(r.jsx)(Ve,{children:"Post your Review"}),Object(r.jsxs)("form",{children:[Object(r.jsx)(O,{value:a,onChange:function(e){return c(e.target.value)},type:"text",style:{width:"100%",boxSizing:"border-box",marginTop:0},rows:"5"}),Object(r.jsx)(y,{onClick:function(e){return function(e){e.preventDefault(),(null===a||void 0===a?void 0:a.length)?ke()({method:"POST",url:"/v1/review/createReview",headers:{Accept:"application/json","Content-Type":"application/json"},data:{user_id:u,tmdb_movie_id:n,review_message:a}}).then((function(e){var n,t;(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.status)&&(c(""),d(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data))})).catch((function(e){b(null===e||void 0===e?void 0:e.message)})):b("Please enter your review message.")}(e)},children:"Add Review"})]})]})};function Ue(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  @media "," {\n    grid-template-columns: 300px 1fr;\n  }\n"]);return Ue=function(){return e},e}function We(){var e=Object(s.a)([""]);return We=function(){return e},e}var Fe=Object(u.b)(h)(We()),He=u.b.div(Ue(),x);function Je(){var e=Object(s.a)(["\n  margin: 12px 0;\n  color: #fff;\n  font-size: 24px;\n"]);return Je=function(){return e},e}function Ge(){var e=Object(s.a)(["\n  margin-top: 24px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.2);\n  padding-top: 16px;\n"]);return Ge=function(){return e},e}var Ke=u.b.div(Ge()),Ye=u.b.label(Je());function Ze(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 16px;\n"]);return Ze=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  margin: 12px 0;\n  color: #fff;\n  font-size: 16px;\n"]);return Xe=function(){return e},e}function $e(){var e=Object(s.a)(["\n  margin: 4px 0;\n  color: #fff;\n  font-size: 20px;\n"]);return $e=function(){return e},e}function qe(){var e=Object(s.a)(["\n  margin: 12px 0;\n  color: #fff;\n  font-size: 24px;\n"]);return qe=function(){return e},e}function Qe(){var e=Object(s.a)(["\n  margin-top: 14px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n"]);return Qe=function(){return e},e}function en(){var e=Object(s.a)(["\n  padding: 12px;\n  width: 100%;\n\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n"]);return en=function(){return e},e}var nn=u.b.div(en()),tn=u.b.img(Qe()),rn=(u.b.label(qe()),u.b.label($e())),on=u.b.label(Xe()),an=u.b.div(Ze());var cn=function(e){var n=e.reviewData,t=n.username,i=n.review_message;return Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{src:"https://avatar.oxro.io/avatar.svg?name=".concat(t,"&length=2")}),Object(r.jsxs)(an,{children:[Object(r.jsx)(rn,{children:t}),Object(r.jsx)(on,{children:i})]})]})},ln=t.p+"static/media/box.d8914003.svg";var sn=function(e){var n=e.movieId,t=Object(i.useContext)(ue),o=t.all_reviews,a=t.storeAllReviews;return Object(i.useEffect)((function(){ke()({method:"POST",url:"/v1/review/getAllReviewsByMovieId",headers:{Accept:"application/json","Content-Type":"application/json"},data:{tmdb_movie_id:n}}).then((function(e){var n,t;(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.all_reviews.length)>0&&a(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.all_reviews)})).catch((function(e){console.log("error.message :>> ",null===e||void 0===e?void 0:e.message)}))}),[]),Object(r.jsxs)(Ke,{children:[Object(r.jsx)(Ye,{children:"Movie Reviews"}),(null===o||void 0===o?void 0:o.length)?o.map((function(e,n){return Object(r.jsx)(cn,{reviewData:e},n)})):Object(r.jsxs)("div",{style:{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(r.jsx)("img",{src:ln,alt:"EmptyBox",style:{width:"80px",height:"80px"}}),Object(r.jsx)("h4",{style:{color:"#fff",marginTop:"8px"},children:"Be the first one to review this movie!"})]})]})};var un=function(e){var n=e.match.params,t=Object(i.useState)(""),o=Object(l.a)(t,2),a=o[0],c=o[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),d=u[0],b=u[1];return Object(i.useEffect)((function(){window.scrollTo(0,0),fetch("/v1/movie/getMovieByTMDBMovieID",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({tmdb_movie_id:null===n||void 0===n?void 0:n.id})}).then((function(e){return e.json()})).then((function(e){(null===e||void 0===e?void 0:e.original_title)&&(c(null===e||void 0===e?void 0:e.original_title),b(null===e||void 0===e?void 0:e.poster_path))})).catch((function(e){console.log("error.message :>> ",null===e||void 0===e?void 0:e.message)}))}),[]),Object(r.jsx)(Fe,{children:Object(r.jsxs)(He,{children:[Object(r.jsx)("div",{children:a.length>0?Object(r.jsx)(De,{movieName:a,poster:d}):Object(r.jsx)("div",{style:{minHeight:"400px",display:"flex",alignItems:"center"},children:Object(r.jsx)("h2",{style:{color:"#fff",width:"100%",textAlign:"center"},children:"Getting Movie info..."})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Be,{movieId:null===n||void 0===n?void 0:n.id}),Object(r.jsx)(sn,{movieId:null===n||void 0===n?void 0:n.id})]})]})})};function dn(){var e=Object(s.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-left: 8px;\n  object-fit: cover;\n  object-position: center;\n  margin-right: 16px;\n"]);return dn=function(){return e},e}function bn(){var e=Object(s.a)(["\n  width: 40px;\n  height: 40px;\n  margin-left: 16px;\n"]);return bn=function(){return e},e}function jn(){var e=Object(s.a)(["\n  cursor: pointer;\n"]);return jn=function(){return e},e}function fn(){var e=Object(s.a)(["\n  padding: 8px 10px;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.2s;\n  &:hover {\n    background-color: #fdce14;\n    color: #202020;\n    border-radius: 4px;\n  }\n  text-decoration: none;\n"]);return fn=function(){return e},e}function vn(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return vn=function(){return e},e}function pn(){var e=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 52px;\n  background-color: #202020;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n"]);return pn=function(){return e},e}var xn=u.b.div(pn()),gn=u.b.div(vn()),hn=u.b.div(fn()),mn=u.b.label(jn()),On=u.b.img(bn()),yn=u.b.img(dn()),wn=t.p+"static/media/planet.435d6c69.svg",_n=t(8);var Sn=Object(G.g)((function(e){var n=e.history,t=Object(i.useContext)(ue),o=t.isAuthenticated,a=t.clearAuth,c=t.username;return Object(r.jsx)(xn,{children:Object(r.jsx)(h,{id:"AppContainer",children:Object(r.jsxs)(gn,{children:[Object(r.jsx)(On,{src:wn,alt:"app_logo"}),Object(r.jsx)(_n.a,{to:K,style:{textDecoration:"none",marginLeft:"12px"},children:Object(r.jsx)(hn,{children:Object(r.jsx)(mn,{style:{letterSpacing:"2px",fontSize:"18px"},children:"Movistar"})})}),o?Object(r.jsxs)("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center"},children:[Object(r.jsx)(_n.a,{to:Y,style:{textDecoration:"none"},children:Object(r.jsx)(hn,{onClick:function(){return a(),void n.push(Y)},children:Object(r.jsx)(mn,{children:"Logout"})})}),(null===c||void 0===c?void 0:c.length)>0?Object(r.jsx)(yn,{id:"profile-img",alt:"profile-img",src:"https://avatar.oxro.io/avatar.svg?name=".concat(c,"&length=2")}):null]}):Object(r.jsxs)("div",{style:{marginLeft:"auto",display:"flex"},children:[Object(r.jsx)(_n.a,{to:Y,style:{textDecoration:"none"},children:Object(r.jsx)(hn,{children:Object(r.jsx)(mn,{children:"Login"})})}),Object(r.jsx)(_n.a,{to:Z,style:{textDecoration:"none",marginLeft:"12px"},children:Object(r.jsx)(hn,{children:Object(r.jsx)(mn,{children:"Register"})})})]})]})})})})),kn=t(20),An=function(e){var n=e.component,t=Object(kn.a)(e,["component"]),i=!!localStorage.getItem("user_token")&&"undefined"!=localStorage.getItem("user_token");return Object(r.jsx)(G.b,Object(Q.a)(Object(Q.a)({},t),{},{render:function(e){return i?Object(r.jsx)(n,Object(Q.a)({},e)):Object(r.jsx)(G.a,{to:Y})}}))},Cn=function(e){var n=e.component,t=Object(kn.a)(e,["component"]),i=!!localStorage.getItem("user_token")&&"undefined"!=localStorage.getItem("user_token");return Object(r.jsx)(G.b,Object(Q.a)(Object(Q.a)({},t),{},{render:function(e){return i?Object(r.jsx)(G.a,{to:K}):Object(r.jsx)(n,Object(Q.a)({},e))}}))};function In(){var e=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  margin-left: 12px;\n\n  @media "," {\n    margin-left: unset;\n  }\n"]);return In=function(){return e},e}function Tn(){var e=Object(s.a)(["\n  font-size: 20px;\n  margin-left: 12px;\n"]);return Tn=function(){return e},e}function En(){var e=Object(s.a)(["\n  width: 100%;\n  background-color: #202020;\n  border: 1px solid #fdce14;\n  border-radius: 4px;\n  box-shadow: 0 10px 0 -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px 8px;\n"]);return En=function(){return e},e}function Pn(){var e=Object(s.a)(["\n          visibility: hidden;\n        "]);return Pn=function(){return e},e}function Rn(){var e=Object(s.a)(["\n          visibility: visible; /* Show the snackbar */\n          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n          animation: fadein 0.5s, fadeout 0.5s 2.5s;\n        "]);return Rn=function(){return e},e}function zn(){var e=Object(s.a)(["\n  /* Hidden by default. Visible on click */\n  min-width: 290px;\n  /* Set a default minimum width */\n  /* margin: 0 auto; */\n  /* Divide value of min-width by 2 */\n  background-color: transparent; /* Black background color */\n  color: #fff; /* White text color */\n  text-align: center; /* Centered text */\n  border-radius: 1rem; /* Rounded borders */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  transform: translateX(-50%);\n  bottom: 30px; /* 30px from the bottom */\n  ","\n"]);return zn=function(){return e},e}var Dn=u.b.div(zn(),(function(e){return e.isVisible?Object(u.a)(Rn()):Object(u.a)(Pn())})),Ln=u.b.div(En()),Mn=u.b.label(Tn()),Nn=u.b.img(In(),x),Vn=t.p+"static/media/warning.596d4534.svg";function Bn(){var e,n=Object(i.useContext)(ue).alerts;return n.length>0?(e=n[n.length-1],Object(r.jsx)(Dn,{isVisible:!!(null===e||void 0===e?void 0:e.id),id:"snackbar",children:Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Nn,{src:Vn,alt:"alert-img"}),Object(r.jsx)(Mn,{children:e.msg})]})})):null}function Un(){return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff"},children:[Object(r.jsx)("img",{src:Vn,alt:"Page404",style:{width:"150px",marginTop:"32px",height:"150px"}}),Object(r.jsx)("h3",{style:{marginTop:"16px"},children:"Page Not Found"})]})}var Wn=function(){return Object(r.jsxs)("div",{style:{position:"relative",overflowY:"auto"},children:[Object(r.jsx)(Sn,{}),Object(r.jsx)("div",{id:"layout",style:{marginTop:"52px",display:"flex",justifyContent:"center"},children:Object(r.jsxs)(G.d,{children:[Object(r.jsx)(An,{exact:!0,path:K,component:je}),Object(r.jsx)(Cn,{exact:!0,path:Y,component:Ae}),Object(r.jsx)(Cn,{exact:!0,path:Z,component:Ce}),Object(r.jsx)(An,{exact:!0,path:"".concat(X,"/:id"),component:un}),Object(r.jsx)(G.b,{component:Un})]})}),Object(r.jsx)(Bn,{})]})},Fn=t(9),Hn=Object(Fn.a)();var Jn=function(){return Object(r.jsx)("div",{style:{backgroundColor:"#181818",minHeight:"100vh",position:"relative",overflowY:"auto"},children:Object(r.jsx)(de,{children:Object(r.jsx)(G.c,{history:Hn,children:Object(r.jsx)(G.b,{component:Wn})})})})},Gn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Jn,{})}),document.getElementById("root")),Gn()}},[[68,1,2]]]);
//# sourceMappingURL=main.f56f3b81.chunk.js.map