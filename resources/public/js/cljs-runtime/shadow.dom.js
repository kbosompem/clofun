goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35143 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35143(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35146 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35146(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34070 = coll;
var G__34071 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34070,G__34071) : shadow.dom.lazy_native_coll_seq.call(null,G__34070,G__34071));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34124 = arguments.length;
switch (G__34124) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34163 = arguments.length;
switch (G__34163) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34168 = arguments.length;
switch (G__34168) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34172 = arguments.length;
switch (G__34172) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34180 = arguments.length;
switch (G__34180) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34191){if((e34191 instanceof Object)){
var e = e34191;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34191;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34202 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34203 = null;
var count__34204 = (0);
var i__34205 = (0);
while(true){
if((i__34205 < count__34204)){
var el = chunk__34203.cljs$core$IIndexed$_nth$arity$2(null,i__34205);
var handler_35160__$1 = ((function (seq__34202,chunk__34203,count__34204,i__34205,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34202,chunk__34203,count__34204,i__34205,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35160__$1);


var G__35161 = seq__34202;
var G__35162 = chunk__34203;
var G__35163 = count__34204;
var G__35164 = (i__34205 + (1));
seq__34202 = G__35161;
chunk__34203 = G__35162;
count__34204 = G__35163;
i__34205 = G__35164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34202);
if(temp__5804__auto__){
var seq__34202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34202__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34202__$1);
var G__35165 = cljs.core.chunk_rest(seq__34202__$1);
var G__35166 = c__5568__auto__;
var G__35167 = cljs.core.count(c__5568__auto__);
var G__35168 = (0);
seq__34202 = G__35165;
chunk__34203 = G__35166;
count__34204 = G__35167;
i__34205 = G__35168;
continue;
} else {
var el = cljs.core.first(seq__34202__$1);
var handler_35169__$1 = ((function (seq__34202,chunk__34203,count__34204,i__34205,el,seq__34202__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34202,chunk__34203,count__34204,i__34205,el,seq__34202__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35169__$1);


var G__35170 = cljs.core.next(seq__34202__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__34202 = G__35170;
chunk__34203 = G__35171;
count__34204 = G__35172;
i__34205 = G__35173;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34284 = cljs.core.seq(events);
var chunk__34285 = null;
var count__34286 = (0);
var i__34287 = (0);
while(true){
if((i__34287 < count__34286)){
var vec__34318 = chunk__34285.cljs$core$IIndexed$_nth$arity$2(null,i__34287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34318,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35177 = seq__34284;
var G__35178 = chunk__34285;
var G__35179 = count__34286;
var G__35180 = (i__34287 + (1));
seq__34284 = G__35177;
chunk__34285 = G__35178;
count__34286 = G__35179;
i__34287 = G__35180;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34284);
if(temp__5804__auto__){
var seq__34284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34284__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34284__$1);
var G__35181 = cljs.core.chunk_rest(seq__34284__$1);
var G__35182 = c__5568__auto__;
var G__35183 = cljs.core.count(c__5568__auto__);
var G__35184 = (0);
seq__34284 = G__35181;
chunk__34285 = G__35182;
count__34286 = G__35183;
i__34287 = G__35184;
continue;
} else {
var vec__34323 = cljs.core.first(seq__34284__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35185 = cljs.core.next(seq__34284__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__34284 = G__35185;
chunk__34285 = G__35186;
count__34286 = G__35187;
i__34287 = G__35188;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34331 = cljs.core.seq(styles);
var chunk__34332 = null;
var count__34333 = (0);
var i__34334 = (0);
while(true){
if((i__34334 < count__34333)){
var vec__34346 = chunk__34332.cljs$core$IIndexed$_nth$arity$2(null,i__34334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34346,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35189 = seq__34331;
var G__35190 = chunk__34332;
var G__35191 = count__34333;
var G__35192 = (i__34334 + (1));
seq__34331 = G__35189;
chunk__34332 = G__35190;
count__34333 = G__35191;
i__34334 = G__35192;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34331);
if(temp__5804__auto__){
var seq__34331__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34331__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34331__$1);
var G__35193 = cljs.core.chunk_rest(seq__34331__$1);
var G__35194 = c__5568__auto__;
var G__35195 = cljs.core.count(c__5568__auto__);
var G__35196 = (0);
seq__34331 = G__35193;
chunk__34332 = G__35194;
count__34333 = G__35195;
i__34334 = G__35196;
continue;
} else {
var vec__34354 = cljs.core.first(seq__34331__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35197 = cljs.core.next(seq__34331__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34331 = G__35197;
chunk__34332 = G__35198;
count__34333 = G__35199;
i__34334 = G__35200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34363_35201 = key;
var G__34363_35202__$1 = (((G__34363_35201 instanceof cljs.core.Keyword))?G__34363_35201.fqn:null);
switch (G__34363_35202__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35208 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35208,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35208,"aria-");
}
})())){
el.setAttribute(ks_35208,value);
} else {
(el[ks_35208] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34383){
var map__34385 = p__34383;
var map__34385__$1 = cljs.core.__destructure_map(map__34385);
var props = map__34385__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34387 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34391 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34391,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34391;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34395){
var vec__34396 = p__34395;
var seq__34397 = cljs.core.seq(vec__34396);
var first__34398 = cljs.core.first(seq__34397);
var seq__34397__$1 = cljs.core.next(seq__34397);
var nn = first__34398;
var first__34398__$1 = cljs.core.first(seq__34397__$1);
var seq__34397__$2 = cljs.core.next(seq__34397__$1);
var np = first__34398__$1;
var nc = seq__34397__$2;
var node = vec__34396;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34400 = nn;
var G__34401 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34400,G__34401) : create_fn.call(null,G__34400,G__34401));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34406 = nn;
var G__34407 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34406,G__34407) : create_fn.call(null,G__34406,G__34407));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34409 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34409,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34409,(1),null);
var seq__34413_35210 = cljs.core.seq(node_children);
var chunk__34414_35211 = null;
var count__34415_35212 = (0);
var i__34416_35213 = (0);
while(true){
if((i__34416_35213 < count__34415_35212)){
var child_struct_35214 = chunk__34414_35211.cljs$core$IIndexed$_nth$arity$2(null,i__34416_35213);
var children_35215 = shadow.dom.dom_node(child_struct_35214);
if(cljs.core.seq_QMARK_(children_35215)){
var seq__34437_35216 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35215));
var chunk__34439_35217 = null;
var count__34440_35218 = (0);
var i__34441_35219 = (0);
while(true){
if((i__34441_35219 < count__34440_35218)){
var child_35220 = chunk__34439_35217.cljs$core$IIndexed$_nth$arity$2(null,i__34441_35219);
if(cljs.core.truth_(child_35220)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35220);


var G__35221 = seq__34437_35216;
var G__35222 = chunk__34439_35217;
var G__35223 = count__34440_35218;
var G__35224 = (i__34441_35219 + (1));
seq__34437_35216 = G__35221;
chunk__34439_35217 = G__35222;
count__34440_35218 = G__35223;
i__34441_35219 = G__35224;
continue;
} else {
var G__35225 = seq__34437_35216;
var G__35226 = chunk__34439_35217;
var G__35227 = count__34440_35218;
var G__35228 = (i__34441_35219 + (1));
seq__34437_35216 = G__35225;
chunk__34439_35217 = G__35226;
count__34440_35218 = G__35227;
i__34441_35219 = G__35228;
continue;
}
} else {
var temp__5804__auto___35229 = cljs.core.seq(seq__34437_35216);
if(temp__5804__auto___35229){
var seq__34437_35230__$1 = temp__5804__auto___35229;
if(cljs.core.chunked_seq_QMARK_(seq__34437_35230__$1)){
var c__5568__auto___35231 = cljs.core.chunk_first(seq__34437_35230__$1);
var G__35232 = cljs.core.chunk_rest(seq__34437_35230__$1);
var G__35233 = c__5568__auto___35231;
var G__35234 = cljs.core.count(c__5568__auto___35231);
var G__35235 = (0);
seq__34437_35216 = G__35232;
chunk__34439_35217 = G__35233;
count__34440_35218 = G__35234;
i__34441_35219 = G__35235;
continue;
} else {
var child_35236 = cljs.core.first(seq__34437_35230__$1);
if(cljs.core.truth_(child_35236)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35236);


var G__35237 = cljs.core.next(seq__34437_35230__$1);
var G__35238 = null;
var G__35239 = (0);
var G__35240 = (0);
seq__34437_35216 = G__35237;
chunk__34439_35217 = G__35238;
count__34440_35218 = G__35239;
i__34441_35219 = G__35240;
continue;
} else {
var G__35241 = cljs.core.next(seq__34437_35230__$1);
var G__35242 = null;
var G__35243 = (0);
var G__35244 = (0);
seq__34437_35216 = G__35241;
chunk__34439_35217 = G__35242;
count__34440_35218 = G__35243;
i__34441_35219 = G__35244;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35215);
}


var G__35245 = seq__34413_35210;
var G__35246 = chunk__34414_35211;
var G__35247 = count__34415_35212;
var G__35248 = (i__34416_35213 + (1));
seq__34413_35210 = G__35245;
chunk__34414_35211 = G__35246;
count__34415_35212 = G__35247;
i__34416_35213 = G__35248;
continue;
} else {
var temp__5804__auto___35249 = cljs.core.seq(seq__34413_35210);
if(temp__5804__auto___35249){
var seq__34413_35250__$1 = temp__5804__auto___35249;
if(cljs.core.chunked_seq_QMARK_(seq__34413_35250__$1)){
var c__5568__auto___35251 = cljs.core.chunk_first(seq__34413_35250__$1);
var G__35252 = cljs.core.chunk_rest(seq__34413_35250__$1);
var G__35253 = c__5568__auto___35251;
var G__35254 = cljs.core.count(c__5568__auto___35251);
var G__35255 = (0);
seq__34413_35210 = G__35252;
chunk__34414_35211 = G__35253;
count__34415_35212 = G__35254;
i__34416_35213 = G__35255;
continue;
} else {
var child_struct_35256 = cljs.core.first(seq__34413_35250__$1);
var children_35257 = shadow.dom.dom_node(child_struct_35256);
if(cljs.core.seq_QMARK_(children_35257)){
var seq__34452_35258 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35257));
var chunk__34454_35259 = null;
var count__34455_35260 = (0);
var i__34456_35261 = (0);
while(true){
if((i__34456_35261 < count__34455_35260)){
var child_35262 = chunk__34454_35259.cljs$core$IIndexed$_nth$arity$2(null,i__34456_35261);
if(cljs.core.truth_(child_35262)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35262);


var G__35263 = seq__34452_35258;
var G__35264 = chunk__34454_35259;
var G__35265 = count__34455_35260;
var G__35266 = (i__34456_35261 + (1));
seq__34452_35258 = G__35263;
chunk__34454_35259 = G__35264;
count__34455_35260 = G__35265;
i__34456_35261 = G__35266;
continue;
} else {
var G__35267 = seq__34452_35258;
var G__35268 = chunk__34454_35259;
var G__35269 = count__34455_35260;
var G__35270 = (i__34456_35261 + (1));
seq__34452_35258 = G__35267;
chunk__34454_35259 = G__35268;
count__34455_35260 = G__35269;
i__34456_35261 = G__35270;
continue;
}
} else {
var temp__5804__auto___35271__$1 = cljs.core.seq(seq__34452_35258);
if(temp__5804__auto___35271__$1){
var seq__34452_35272__$1 = temp__5804__auto___35271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34452_35272__$1)){
var c__5568__auto___35274 = cljs.core.chunk_first(seq__34452_35272__$1);
var G__35275 = cljs.core.chunk_rest(seq__34452_35272__$1);
var G__35276 = c__5568__auto___35274;
var G__35277 = cljs.core.count(c__5568__auto___35274);
var G__35278 = (0);
seq__34452_35258 = G__35275;
chunk__34454_35259 = G__35276;
count__34455_35260 = G__35277;
i__34456_35261 = G__35278;
continue;
} else {
var child_35279 = cljs.core.first(seq__34452_35272__$1);
if(cljs.core.truth_(child_35279)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35279);


var G__35281 = cljs.core.next(seq__34452_35272__$1);
var G__35282 = null;
var G__35283 = (0);
var G__35284 = (0);
seq__34452_35258 = G__35281;
chunk__34454_35259 = G__35282;
count__34455_35260 = G__35283;
i__34456_35261 = G__35284;
continue;
} else {
var G__35285 = cljs.core.next(seq__34452_35272__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__34452_35258 = G__35285;
chunk__34454_35259 = G__35286;
count__34455_35260 = G__35287;
i__34456_35261 = G__35288;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35257);
}


var G__35290 = cljs.core.next(seq__34413_35250__$1);
var G__35291 = null;
var G__35292 = (0);
var G__35293 = (0);
seq__34413_35210 = G__35290;
chunk__34414_35211 = G__35291;
count__34415_35212 = G__35292;
i__34416_35213 = G__35293;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34476 = cljs.core.seq(node);
var chunk__34477 = null;
var count__34478 = (0);
var i__34479 = (0);
while(true){
if((i__34479 < count__34478)){
var n = chunk__34477.cljs$core$IIndexed$_nth$arity$2(null,i__34479);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35307 = seq__34476;
var G__35308 = chunk__34477;
var G__35309 = count__34478;
var G__35310 = (i__34479 + (1));
seq__34476 = G__35307;
chunk__34477 = G__35308;
count__34478 = G__35309;
i__34479 = G__35310;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34476);
if(temp__5804__auto__){
var seq__34476__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34476__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34476__$1);
var G__35312 = cljs.core.chunk_rest(seq__34476__$1);
var G__35313 = c__5568__auto__;
var G__35314 = cljs.core.count(c__5568__auto__);
var G__35315 = (0);
seq__34476 = G__35312;
chunk__34477 = G__35313;
count__34478 = G__35314;
i__34479 = G__35315;
continue;
} else {
var n = cljs.core.first(seq__34476__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35316 = cljs.core.next(seq__34476__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__34476 = G__35316;
chunk__34477 = G__35317;
count__34478 = G__35318;
i__34479 = G__35319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34549 = arguments.length;
switch (G__34549) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34559 = arguments.length;
switch (G__34559) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34568 = arguments.length;
switch (G__34568) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35323 = arguments.length;
var i__5770__auto___35324 = (0);
while(true){
if((i__5770__auto___35324 < len__5769__auto___35323)){
args__5775__auto__.push((arguments[i__5770__auto___35324]));

var G__35325 = (i__5770__auto___35324 + (1));
i__5770__auto___35324 = G__35325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34624_35326 = cljs.core.seq(nodes);
var chunk__34625_35327 = null;
var count__34626_35328 = (0);
var i__34627_35329 = (0);
while(true){
if((i__34627_35329 < count__34626_35328)){
var node_35331 = chunk__34625_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34627_35329);
fragment.appendChild(shadow.dom._to_dom(node_35331));


var G__35334 = seq__34624_35326;
var G__35335 = chunk__34625_35327;
var G__35336 = count__34626_35328;
var G__35337 = (i__34627_35329 + (1));
seq__34624_35326 = G__35334;
chunk__34625_35327 = G__35335;
count__34626_35328 = G__35336;
i__34627_35329 = G__35337;
continue;
} else {
var temp__5804__auto___35338 = cljs.core.seq(seq__34624_35326);
if(temp__5804__auto___35338){
var seq__34624_35339__$1 = temp__5804__auto___35338;
if(cljs.core.chunked_seq_QMARK_(seq__34624_35339__$1)){
var c__5568__auto___35340 = cljs.core.chunk_first(seq__34624_35339__$1);
var G__35341 = cljs.core.chunk_rest(seq__34624_35339__$1);
var G__35342 = c__5568__auto___35340;
var G__35343 = cljs.core.count(c__5568__auto___35340);
var G__35344 = (0);
seq__34624_35326 = G__35341;
chunk__34625_35327 = G__35342;
count__34626_35328 = G__35343;
i__34627_35329 = G__35344;
continue;
} else {
var node_35345 = cljs.core.first(seq__34624_35339__$1);
fragment.appendChild(shadow.dom._to_dom(node_35345));


var G__35346 = cljs.core.next(seq__34624_35339__$1);
var G__35347 = null;
var G__35348 = (0);
var G__35349 = (0);
seq__34624_35326 = G__35346;
chunk__34625_35327 = G__35347;
count__34626_35328 = G__35348;
i__34627_35329 = G__35349;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34607){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34607));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34638_35350 = cljs.core.seq(scripts);
var chunk__34639_35351 = null;
var count__34640_35352 = (0);
var i__34641_35353 = (0);
while(true){
if((i__34641_35353 < count__34640_35352)){
var vec__34659_35354 = chunk__34639_35351.cljs$core$IIndexed$_nth$arity$2(null,i__34641_35353);
var script_tag_35355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34659_35354,(0),null);
var script_body_35356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34659_35354,(1),null);
eval(script_body_35356);


var G__35357 = seq__34638_35350;
var G__35358 = chunk__34639_35351;
var G__35359 = count__34640_35352;
var G__35360 = (i__34641_35353 + (1));
seq__34638_35350 = G__35357;
chunk__34639_35351 = G__35358;
count__34640_35352 = G__35359;
i__34641_35353 = G__35360;
continue;
} else {
var temp__5804__auto___35361 = cljs.core.seq(seq__34638_35350);
if(temp__5804__auto___35361){
var seq__34638_35362__$1 = temp__5804__auto___35361;
if(cljs.core.chunked_seq_QMARK_(seq__34638_35362__$1)){
var c__5568__auto___35363 = cljs.core.chunk_first(seq__34638_35362__$1);
var G__35364 = cljs.core.chunk_rest(seq__34638_35362__$1);
var G__35365 = c__5568__auto___35363;
var G__35366 = cljs.core.count(c__5568__auto___35363);
var G__35367 = (0);
seq__34638_35350 = G__35364;
chunk__34639_35351 = G__35365;
count__34640_35352 = G__35366;
i__34641_35353 = G__35367;
continue;
} else {
var vec__34664_35368 = cljs.core.first(seq__34638_35362__$1);
var script_tag_35369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664_35368,(0),null);
var script_body_35370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664_35368,(1),null);
eval(script_body_35370);


var G__35375 = cljs.core.next(seq__34638_35362__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__34638_35350 = G__35375;
chunk__34639_35351 = G__35376;
count__34640_35352 = G__35377;
i__34641_35353 = G__35378;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34668){
var vec__34669 = p__34668;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34669,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34669,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34747 = arguments.length;
switch (G__34747) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34787 = cljs.core.seq(style_keys);
var chunk__34788 = null;
var count__34789 = (0);
var i__34790 = (0);
while(true){
if((i__34790 < count__34789)){
var it = chunk__34788.cljs$core$IIndexed$_nth$arity$2(null,i__34790);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35380 = seq__34787;
var G__35381 = chunk__34788;
var G__35382 = count__34789;
var G__35383 = (i__34790 + (1));
seq__34787 = G__35380;
chunk__34788 = G__35381;
count__34789 = G__35382;
i__34790 = G__35383;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34787);
if(temp__5804__auto__){
var seq__34787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34787__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34787__$1);
var G__35384 = cljs.core.chunk_rest(seq__34787__$1);
var G__35385 = c__5568__auto__;
var G__35386 = cljs.core.count(c__5568__auto__);
var G__35387 = (0);
seq__34787 = G__35384;
chunk__34788 = G__35385;
count__34789 = G__35386;
i__34790 = G__35387;
continue;
} else {
var it = cljs.core.first(seq__34787__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35388 = cljs.core.next(seq__34787__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__34787 = G__35388;
chunk__34788 = G__35389;
count__34789 = G__35390;
i__34790 = G__35391;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34801,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34814 = k34801;
var G__34814__$1 = (((G__34814 instanceof cljs.core.Keyword))?G__34814.fqn:null);
switch (G__34814__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34801,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34828){
var vec__34829 = p__34828;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34800){
var self__ = this;
var G__34800__$1 = this;
return (new cljs.core.RecordIter((0),G__34800__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34803,other34804){
var self__ = this;
var this34803__$1 = this;
return (((!((other34804 == null)))) && ((((this34803__$1.constructor === other34804.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34803__$1.x,other34804.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34803__$1.y,other34804.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34803__$1.__extmap,other34804.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34801){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34871 = k34801;
var G__34871__$1 = (((G__34871 instanceof cljs.core.Keyword))?G__34871.fqn:null);
switch (G__34871__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34801);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34800){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34874 = cljs.core.keyword_identical_QMARK_;
var expr__34875 = k__5352__auto__;
if(cljs.core.truth_((pred__34874.cljs$core$IFn$_invoke$arity$2 ? pred__34874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34875) : pred__34874.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34875)))){
return (new shadow.dom.Coordinate(G__34800,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34874.cljs$core$IFn$_invoke$arity$2 ? pred__34874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34875) : pred__34874.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34875)))){
return (new shadow.dom.Coordinate(self__.x,G__34800,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34800),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34800){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34800,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34805){
var extmap__5385__auto__ = (function (){var G__34894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34805,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34894);
} else {
return G__34894;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34805),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34805),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34899,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34908 = k34899;
var G__34908__$1 = (((G__34908 instanceof cljs.core.Keyword))?G__34908.fqn:null);
switch (G__34908__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34899,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34911){
var vec__34912 = p__34911;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34898){
var self__ = this;
var G__34898__$1 = this;
return (new cljs.core.RecordIter((0),G__34898__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34900,other34901){
var self__ = this;
var this34900__$1 = this;
return (((!((other34901 == null)))) && ((((this34900__$1.constructor === other34901.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34900__$1.w,other34901.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34900__$1.h,other34901.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34900__$1.__extmap,other34901.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34899){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34933 = k34899;
var G__34933__$1 = (((G__34933 instanceof cljs.core.Keyword))?G__34933.fqn:null);
switch (G__34933__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34899);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34898){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34934 = cljs.core.keyword_identical_QMARK_;
var expr__34935 = k__5352__auto__;
if(cljs.core.truth_((pred__34934.cljs$core$IFn$_invoke$arity$2 ? pred__34934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34935) : pred__34934.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34935)))){
return (new shadow.dom.Size(G__34898,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34934.cljs$core$IFn$_invoke$arity$2 ? pred__34934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34935) : pred__34934.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34935)))){
return (new shadow.dom.Size(self__.w,G__34898,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34898),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34898){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34898,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34905){
var extmap__5385__auto__ = (function (){var G__34937 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34905,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34905)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34937);
} else {
return G__34937;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34905),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34905),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__35406 = (i + (1));
var G__35407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35406;
ret = G__35407;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34942){
var vec__34943 = p__34942;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34947 = arguments.length;
switch (G__34947) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35412 = ps;
var G__35413 = (i + (1));
el__$1 = G__35412;
i = G__35413;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35000 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35003_35415 = cljs.core.seq(props);
var chunk__35004_35416 = null;
var count__35005_35417 = (0);
var i__35006_35418 = (0);
while(true){
if((i__35006_35418 < count__35005_35417)){
var vec__35013_35419 = chunk__35004_35416.cljs$core$IIndexed$_nth$arity$2(null,i__35006_35418);
var k_35420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013_35419,(0),null);
var v_35421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013_35419,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35420);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35420),v_35421);


var G__35422 = seq__35003_35415;
var G__35423 = chunk__35004_35416;
var G__35424 = count__35005_35417;
var G__35425 = (i__35006_35418 + (1));
seq__35003_35415 = G__35422;
chunk__35004_35416 = G__35423;
count__35005_35417 = G__35424;
i__35006_35418 = G__35425;
continue;
} else {
var temp__5804__auto___35426 = cljs.core.seq(seq__35003_35415);
if(temp__5804__auto___35426){
var seq__35003_35427__$1 = temp__5804__auto___35426;
if(cljs.core.chunked_seq_QMARK_(seq__35003_35427__$1)){
var c__5568__auto___35428 = cljs.core.chunk_first(seq__35003_35427__$1);
var G__35429 = cljs.core.chunk_rest(seq__35003_35427__$1);
var G__35430 = c__5568__auto___35428;
var G__35431 = cljs.core.count(c__5568__auto___35428);
var G__35432 = (0);
seq__35003_35415 = G__35429;
chunk__35004_35416 = G__35430;
count__35005_35417 = G__35431;
i__35006_35418 = G__35432;
continue;
} else {
var vec__35018_35433 = cljs.core.first(seq__35003_35427__$1);
var k_35434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018_35433,(0),null);
var v_35435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018_35433,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35434);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35434),v_35435);


var G__35436 = cljs.core.next(seq__35003_35427__$1);
var G__35437 = null;
var G__35438 = (0);
var G__35439 = (0);
seq__35003_35415 = G__35436;
chunk__35004_35416 = G__35437;
count__35005_35417 = G__35438;
i__35006_35418 = G__35439;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35033 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35033,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35033,(1),null);
var seq__35036_35440 = cljs.core.seq(node_children);
var chunk__35038_35441 = null;
var count__35039_35442 = (0);
var i__35040_35443 = (0);
while(true){
if((i__35040_35443 < count__35039_35442)){
var child_struct_35444 = chunk__35038_35441.cljs$core$IIndexed$_nth$arity$2(null,i__35040_35443);
if((!((child_struct_35444 == null)))){
if(typeof child_struct_35444 === 'string'){
var text_35445 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35445),child_struct_35444].join(''));
} else {
var children_35446 = shadow.dom.svg_node(child_struct_35444);
if(cljs.core.seq_QMARK_(children_35446)){
var seq__35093_35447 = cljs.core.seq(children_35446);
var chunk__35095_35448 = null;
var count__35096_35449 = (0);
var i__35097_35450 = (0);
while(true){
if((i__35097_35450 < count__35096_35449)){
var child_35454 = chunk__35095_35448.cljs$core$IIndexed$_nth$arity$2(null,i__35097_35450);
if(cljs.core.truth_(child_35454)){
node.appendChild(child_35454);


var G__35455 = seq__35093_35447;
var G__35456 = chunk__35095_35448;
var G__35457 = count__35096_35449;
var G__35458 = (i__35097_35450 + (1));
seq__35093_35447 = G__35455;
chunk__35095_35448 = G__35456;
count__35096_35449 = G__35457;
i__35097_35450 = G__35458;
continue;
} else {
var G__35459 = seq__35093_35447;
var G__35460 = chunk__35095_35448;
var G__35461 = count__35096_35449;
var G__35462 = (i__35097_35450 + (1));
seq__35093_35447 = G__35459;
chunk__35095_35448 = G__35460;
count__35096_35449 = G__35461;
i__35097_35450 = G__35462;
continue;
}
} else {
var temp__5804__auto___35463 = cljs.core.seq(seq__35093_35447);
if(temp__5804__auto___35463){
var seq__35093_35464__$1 = temp__5804__auto___35463;
if(cljs.core.chunked_seq_QMARK_(seq__35093_35464__$1)){
var c__5568__auto___35465 = cljs.core.chunk_first(seq__35093_35464__$1);
var G__35466 = cljs.core.chunk_rest(seq__35093_35464__$1);
var G__35467 = c__5568__auto___35465;
var G__35468 = cljs.core.count(c__5568__auto___35465);
var G__35469 = (0);
seq__35093_35447 = G__35466;
chunk__35095_35448 = G__35467;
count__35096_35449 = G__35468;
i__35097_35450 = G__35469;
continue;
} else {
var child_35470 = cljs.core.first(seq__35093_35464__$1);
if(cljs.core.truth_(child_35470)){
node.appendChild(child_35470);


var G__35471 = cljs.core.next(seq__35093_35464__$1);
var G__35472 = null;
var G__35473 = (0);
var G__35474 = (0);
seq__35093_35447 = G__35471;
chunk__35095_35448 = G__35472;
count__35096_35449 = G__35473;
i__35097_35450 = G__35474;
continue;
} else {
var G__35475 = cljs.core.next(seq__35093_35464__$1);
var G__35476 = null;
var G__35477 = (0);
var G__35478 = (0);
seq__35093_35447 = G__35475;
chunk__35095_35448 = G__35476;
count__35096_35449 = G__35477;
i__35097_35450 = G__35478;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35446);
}
}


var G__35479 = seq__35036_35440;
var G__35480 = chunk__35038_35441;
var G__35481 = count__35039_35442;
var G__35482 = (i__35040_35443 + (1));
seq__35036_35440 = G__35479;
chunk__35038_35441 = G__35480;
count__35039_35442 = G__35481;
i__35040_35443 = G__35482;
continue;
} else {
var G__35483 = seq__35036_35440;
var G__35484 = chunk__35038_35441;
var G__35485 = count__35039_35442;
var G__35486 = (i__35040_35443 + (1));
seq__35036_35440 = G__35483;
chunk__35038_35441 = G__35484;
count__35039_35442 = G__35485;
i__35040_35443 = G__35486;
continue;
}
} else {
var temp__5804__auto___35487 = cljs.core.seq(seq__35036_35440);
if(temp__5804__auto___35487){
var seq__35036_35488__$1 = temp__5804__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__35036_35488__$1)){
var c__5568__auto___35489 = cljs.core.chunk_first(seq__35036_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__35036_35488__$1);
var G__35491 = c__5568__auto___35489;
var G__35492 = cljs.core.count(c__5568__auto___35489);
var G__35493 = (0);
seq__35036_35440 = G__35490;
chunk__35038_35441 = G__35491;
count__35039_35442 = G__35492;
i__35040_35443 = G__35493;
continue;
} else {
var child_struct_35494 = cljs.core.first(seq__35036_35488__$1);
if((!((child_struct_35494 == null)))){
if(typeof child_struct_35494 === 'string'){
var text_35495 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35495),child_struct_35494].join(''));
} else {
var children_35496 = shadow.dom.svg_node(child_struct_35494);
if(cljs.core.seq_QMARK_(children_35496)){
var seq__35099_35497 = cljs.core.seq(children_35496);
var chunk__35101_35498 = null;
var count__35102_35499 = (0);
var i__35103_35500 = (0);
while(true){
if((i__35103_35500 < count__35102_35499)){
var child_35501 = chunk__35101_35498.cljs$core$IIndexed$_nth$arity$2(null,i__35103_35500);
if(cljs.core.truth_(child_35501)){
node.appendChild(child_35501);


var G__35502 = seq__35099_35497;
var G__35503 = chunk__35101_35498;
var G__35504 = count__35102_35499;
var G__35505 = (i__35103_35500 + (1));
seq__35099_35497 = G__35502;
chunk__35101_35498 = G__35503;
count__35102_35499 = G__35504;
i__35103_35500 = G__35505;
continue;
} else {
var G__35506 = seq__35099_35497;
var G__35507 = chunk__35101_35498;
var G__35508 = count__35102_35499;
var G__35509 = (i__35103_35500 + (1));
seq__35099_35497 = G__35506;
chunk__35101_35498 = G__35507;
count__35102_35499 = G__35508;
i__35103_35500 = G__35509;
continue;
}
} else {
var temp__5804__auto___35510__$1 = cljs.core.seq(seq__35099_35497);
if(temp__5804__auto___35510__$1){
var seq__35099_35511__$1 = temp__5804__auto___35510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35099_35511__$1)){
var c__5568__auto___35512 = cljs.core.chunk_first(seq__35099_35511__$1);
var G__35513 = cljs.core.chunk_rest(seq__35099_35511__$1);
var G__35514 = c__5568__auto___35512;
var G__35515 = cljs.core.count(c__5568__auto___35512);
var G__35516 = (0);
seq__35099_35497 = G__35513;
chunk__35101_35498 = G__35514;
count__35102_35499 = G__35515;
i__35103_35500 = G__35516;
continue;
} else {
var child_35517 = cljs.core.first(seq__35099_35511__$1);
if(cljs.core.truth_(child_35517)){
node.appendChild(child_35517);


var G__35518 = cljs.core.next(seq__35099_35511__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__35099_35497 = G__35518;
chunk__35101_35498 = G__35519;
count__35102_35499 = G__35520;
i__35103_35500 = G__35521;
continue;
} else {
var G__35522 = cljs.core.next(seq__35099_35511__$1);
var G__35523 = null;
var G__35524 = (0);
var G__35525 = (0);
seq__35099_35497 = G__35522;
chunk__35101_35498 = G__35523;
count__35102_35499 = G__35524;
i__35103_35500 = G__35525;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35496);
}
}


var G__35526 = cljs.core.next(seq__35036_35488__$1);
var G__35527 = null;
var G__35528 = (0);
var G__35529 = (0);
seq__35036_35440 = G__35526;
chunk__35038_35441 = G__35527;
count__35039_35442 = G__35528;
i__35040_35443 = G__35529;
continue;
} else {
var G__35530 = cljs.core.next(seq__35036_35488__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__35036_35440 = G__35530;
chunk__35038_35441 = G__35531;
count__35039_35442 = G__35532;
i__35040_35443 = G__35533;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35538 = arguments.length;
var i__5770__auto___35539 = (0);
while(true){
if((i__5770__auto___35539 < len__5769__auto___35538)){
args__5775__auto__.push((arguments[i__5770__auto___35539]));

var G__35540 = (i__5770__auto___35539 + (1));
i__5770__auto___35539 = G__35540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35115){
var G__35116 = cljs.core.first(seq35115);
var seq35115__$1 = cljs.core.next(seq35115);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35116,seq35115__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35120 = arguments.length;
switch (G__35120) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30828__auto___35542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_35128){
var state_val_35129 = (state_35128[(1)]);
if((state_val_35129 === (1))){
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35128__$1,(2),once_or_cleanup);
} else {
if((state_val_35129 === (2))){
var inst_35125 = (state_35128[(2)]);
var inst_35126 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35128__$1 = (function (){var statearr_35130 = state_35128;
(statearr_35130[(7)] = inst_35125);

return statearr_35130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35128__$1,inst_35126);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30612__auto__ = null;
var shadow$dom$state_machine__30612__auto____0 = (function (){
var statearr_35131 = [null,null,null,null,null,null,null,null];
(statearr_35131[(0)] = shadow$dom$state_machine__30612__auto__);

(statearr_35131[(1)] = (1));

return statearr_35131;
});
var shadow$dom$state_machine__30612__auto____1 = (function (state_35128){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_35128);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e35132){var ex__30615__auto__ = e35132;
var statearr_35133_35559 = state_35128;
(statearr_35133_35559[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_35128[(4)]))){
var statearr_35134_35566 = state_35128;
(statearr_35134_35566[(1)] = cljs.core.first((state_35128[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35567 = state_35128;
state_35128 = G__35567;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
shadow$dom$state_machine__30612__auto__ = function(state_35128){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30612__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30612__auto____1.call(this,state_35128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30612__auto____0;
shadow$dom$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30612__auto____1;
return shadow$dom$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_35135 = f__30829__auto__();
(statearr_35135[(6)] = c__30828__auto___35542);

return statearr_35135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
