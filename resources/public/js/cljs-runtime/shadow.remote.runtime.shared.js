goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32766,res){
var map__32768 = p__32766;
var map__32768__$1 = cljs.core.__destructure_map(map__32768);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32768__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32768__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32770 = res;
var G__32770__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32770,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32770);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32770__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32770__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32787,msg,handlers,timeout_after_ms){
var map__32789 = p__32787;
var map__32789__$1 = cljs.core.__destructure_map(map__32789);
var runtime = map__32789__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33158 = arguments.length;
var i__5770__auto___33159 = (0);
while(true){
if((i__5770__auto___33159 < len__5769__auto___33158)){
args__5775__auto__.push((arguments[i__5770__auto___33159]));

var G__33161 = (i__5770__auto___33159 + (1));
i__5770__auto___33159 = G__33161;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32802,ev,args){
var map__32803 = p__32802;
var map__32803__$1 = cljs.core.__destructure_map(map__32803);
var runtime = map__32803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32805 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32808 = null;
var count__32809 = (0);
var i__32810 = (0);
while(true){
if((i__32810 < count__32809)){
var ext = chunk__32808.cljs$core$IIndexed$_nth$arity$2(null,i__32810);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33195 = seq__32805;
var G__33196 = chunk__32808;
var G__33197 = count__32809;
var G__33198 = (i__32810 + (1));
seq__32805 = G__33195;
chunk__32808 = G__33196;
count__32809 = G__33197;
i__32810 = G__33198;
continue;
} else {
var G__33199 = seq__32805;
var G__33200 = chunk__32808;
var G__33201 = count__32809;
var G__33202 = (i__32810 + (1));
seq__32805 = G__33199;
chunk__32808 = G__33200;
count__32809 = G__33201;
i__32810 = G__33202;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32805);
if(temp__5804__auto__){
var seq__32805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32805__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32805__$1);
var G__33205 = cljs.core.chunk_rest(seq__32805__$1);
var G__33206 = c__5568__auto__;
var G__33207 = cljs.core.count(c__5568__auto__);
var G__33208 = (0);
seq__32805 = G__33205;
chunk__32808 = G__33206;
count__32809 = G__33207;
i__32810 = G__33208;
continue;
} else {
var ext = cljs.core.first(seq__32805__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33213 = cljs.core.next(seq__32805__$1);
var G__33214 = null;
var G__33215 = (0);
var G__33216 = (0);
seq__32805 = G__33213;
chunk__32808 = G__33214;
count__32809 = G__33215;
i__32810 = G__33216;
continue;
} else {
var G__33217 = cljs.core.next(seq__32805__$1);
var G__33218 = null;
var G__33219 = (0);
var G__33220 = (0);
seq__32805 = G__33217;
chunk__32808 = G__33218;
count__32809 = G__33219;
i__32810 = G__33220;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32796){
var G__32797 = cljs.core.first(seq32796);
var seq32796__$1 = cljs.core.next(seq32796);
var G__32798 = cljs.core.first(seq32796__$1);
var seq32796__$2 = cljs.core.next(seq32796__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32797,G__32798,seq32796__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32825,p__32826){
var map__32827 = p__32825;
var map__32827__$1 = cljs.core.__destructure_map(map__32827);
var runtime = map__32827__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32827__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32828 = p__32826;
var map__32828__$1 = cljs.core.__destructure_map(map__32828);
var msg = map__32828__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32828__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32829 = cljs.core.deref(state_ref);
var map__32829__$1 = cljs.core.__destructure_map(map__32829);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32844){
var map__32845 = p__32844;
var map__32845__$1 = cljs.core.__destructure_map(map__32845);
var runtime = map__32845__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32889,msg){
var map__32890 = p__32889;
var map__32890__$1 = cljs.core.__destructure_map(map__32890);
var runtime = map__32890__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32906,key,p__32907){
var map__32910 = p__32906;
var map__32910__$1 = cljs.core.__destructure_map(map__32910);
var state = map__32910__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32910__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32912 = p__32907;
var map__32912__$1 = cljs.core.__destructure_map(map__32912);
var spec = map__32912__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32912__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32928,key,spec){
var map__32929 = p__32928;
var map__32929__$1 = cljs.core.__destructure_map(map__32929);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32930_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32930_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32931_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32931_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32932_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32932_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32933_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32933_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32935_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32935_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32978,key){
var map__32983 = p__32978;
var map__32983__$1 = cljs.core.__destructure_map(map__32983);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33006,msg){
var map__33008 = p__33006;
var map__33008__$1 = cljs.core.__destructure_map(map__33008);
var runtime = map__33008__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33008__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33015,p__33016){
var map__33017 = p__33015;
var map__33017__$1 = cljs.core.__destructure_map(map__33017);
var runtime = map__33017__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33018 = p__33016;
var map__33018__$1 = cljs.core.__destructure_map(map__33018);
var msg = map__33018__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33023 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33025 = null;
var count__33026 = (0);
var i__33027 = (0);
while(true){
if((i__33027 < count__33026)){
var map__33041 = chunk__33025.cljs$core$IIndexed$_nth$arity$2(null,i__33027);
var map__33041__$1 = cljs.core.__destructure_map(map__33041);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33278 = seq__33023;
var G__33279 = chunk__33025;
var G__33280 = count__33026;
var G__33281 = (i__33027 + (1));
seq__33023 = G__33278;
chunk__33025 = G__33279;
count__33026 = G__33280;
i__33027 = G__33281;
continue;
} else {
var G__33283 = seq__33023;
var G__33284 = chunk__33025;
var G__33285 = count__33026;
var G__33286 = (i__33027 + (1));
seq__33023 = G__33283;
chunk__33025 = G__33284;
count__33026 = G__33285;
i__33027 = G__33286;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33023);
if(temp__5804__auto__){
var seq__33023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33023__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33023__$1);
var G__33299 = cljs.core.chunk_rest(seq__33023__$1);
var G__33301 = c__5568__auto__;
var G__33302 = cljs.core.count(c__5568__auto__);
var G__33303 = (0);
seq__33023 = G__33299;
chunk__33025 = G__33301;
count__33026 = G__33302;
i__33027 = G__33303;
continue;
} else {
var map__33045 = cljs.core.first(seq__33023__$1);
var map__33045__$1 = cljs.core.__destructure_map(map__33045);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33045__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33304 = cljs.core.next(seq__33023__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__33023 = G__33304;
chunk__33025 = G__33305;
count__33026 = G__33306;
i__33027 = G__33307;
continue;
} else {
var G__33308 = cljs.core.next(seq__33023__$1);
var G__33309 = null;
var G__33310 = (0);
var G__33311 = (0);
seq__33023 = G__33308;
chunk__33025 = G__33309;
count__33026 = G__33310;
i__33027 = G__33311;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
