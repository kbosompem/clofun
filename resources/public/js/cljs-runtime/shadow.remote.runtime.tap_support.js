goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36841,p__36842){
var map__36843 = p__36841;
var map__36843__$1 = cljs.core.__destructure_map(map__36843);
var svc = map__36843__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36843__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36843__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36843__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36844 = p__36842;
var map__36844__$1 = cljs.core.__destructure_map(map__36844);
var msg = map__36844__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36844__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36844__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36844__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36844__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36845,p__36846){
var map__36847 = p__36845;
var map__36847__$1 = cljs.core.__destructure_map(map__36847);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36847__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36848 = p__36846;
var map__36848__$1 = cljs.core.__destructure_map(map__36848);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36848__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36849,p__36850){
var map__36853 = p__36849;
var map__36853__$1 = cljs.core.__destructure_map(map__36853);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36853__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36853__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36854 = p__36850;
var map__36854__$1 = cljs.core.__destructure_map(map__36854);
var msg = map__36854__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36854__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36857,tid){
var map__36858 = p__36857;
var map__36858__$1 = cljs.core.__destructure_map(map__36858);
var svc = map__36858__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36869 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36870 = null;
var count__36871 = (0);
var i__36872 = (0);
while(true){
if((i__36872 < count__36871)){
var vec__36883 = chunk__36870.cljs$core$IIndexed$_nth$arity$2(null,i__36872);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36901 = seq__36869;
var G__36902 = chunk__36870;
var G__36903 = count__36871;
var G__36904 = (i__36872 + (1));
seq__36869 = G__36901;
chunk__36870 = G__36902;
count__36871 = G__36903;
i__36872 = G__36904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36869);
if(temp__5804__auto__){
var seq__36869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36869__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36869__$1);
var G__36905 = cljs.core.chunk_rest(seq__36869__$1);
var G__36906 = c__5568__auto__;
var G__36907 = cljs.core.count(c__5568__auto__);
var G__36908 = (0);
seq__36869 = G__36905;
chunk__36870 = G__36906;
count__36871 = G__36907;
i__36872 = G__36908;
continue;
} else {
var vec__36893 = cljs.core.first(seq__36869__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36909 = cljs.core.next(seq__36869__$1);
var G__36910 = null;
var G__36911 = (0);
var G__36912 = (0);
seq__36869 = G__36909;
chunk__36870 = G__36910;
count__36871 = G__36911;
i__36872 = G__36912;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36859_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36859_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36860_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36860_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36861_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36861_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36862_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36862_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36899){
var map__36900 = p__36899;
var map__36900__$1 = cljs.core.__destructure_map(map__36900);
var svc = map__36900__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36900__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36900__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
