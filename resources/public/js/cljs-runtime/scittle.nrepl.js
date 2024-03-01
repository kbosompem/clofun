goog.provide('scittle.nrepl');
scittle.nrepl.nrepl_websocket = (function scittle$nrepl$nrepl_websocket(){
return window.ws_nrepl;
});
scittle.nrepl.nrepl_reply = (function scittle$nrepl$nrepl_reply(p__46670,p__46671){
var map__46672 = p__46670;
var map__46672__$1 = cljs.core.__destructure_map(map__46672);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46672__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var session = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46672__$1,new cljs.core.Keyword(null,"session","session",1008279103));
var map__46673 = p__46671;
var map__46673__$1 = cljs.core.__destructure_map(map__46673);
var payload = map__46673__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46673__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return scittle.nrepl.nrepl_websocket().send(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var ns__$1 = (function (){var or__5045__auto__ = ns;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scittle.core._BANG_last_ns));
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(payload,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1], 0)),new cljs.core.Keyword(null,"ctx","ctx",-493610118));
})()));
});
scittle.nrepl.handle_nrepl_eval = (function scittle$nrepl$handle_nrepl_eval(p__46674){
var map__46675 = p__46674;
var map__46675__$1 = cljs.core.__destructure_map(map__46675);
var msg = map__46675__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46675__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var vec__46676 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scittle.nrepl","success","scittle.nrepl/success",-1990302191),scittle.core.eval_string(code)], null);
}catch (e46679){var e = e46679;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scittle.nrepl","error","scittle.nrepl/error",-1402941771),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
}})();
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46676,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46676,(1),null);
var G__46680 = kind;
var G__46680__$1 = (((G__46680 instanceof cljs.core.Keyword))?G__46680.fqn:null);
switch (G__46680__$1) {
case "scittle.nrepl/success":
scittle.nrepl.nrepl_reply(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0))], null));

return scittle.nrepl.nrepl_reply(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null));

break;
case "scittle.nrepl/error":
scittle.nrepl.nrepl_reply(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",-2089457205),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0))], null));

return scittle.nrepl.nrepl_reply(msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",-1413771341),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error","done"], null)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46680__$1)].join('')));

}
});
scittle.nrepl.handle_nrepl_info = (function scittle$nrepl$handle_nrepl_info(msg){
var info = sci.nrepl.info.info(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"ctx","ctx",-493610118),sci.ctx_store.get_ctx()));
return scittle.nrepl.nrepl_reply(msg,info);
});
scittle.nrepl.handle_describe = (function scittle$nrepl$handle_describe(msg){
return scittle.nrepl.nrepl_reply(msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"versions","versions",536521978),new cljs.core.PersistentArrayMap(null, 1, ["scittle-nrepl",new cljs.core.PersistentArrayMap(null, 3, ["major","0","minor","0","incremental","1"], null)], null),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(scittle.nrepl.ops),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"load-file","load-file",-424586670),null,new cljs.core.Keyword(null,"clone","clone",711747572),null], null), null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["close",null], null), null)], 0))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null));
});
/**
 * Operations supported by the nrepl server.
 */
scittle.nrepl.ops = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),scittle.nrepl.handle_nrepl_eval,new cljs.core.Keyword(null,"info","info",-317069002),scittle.nrepl.handle_nrepl_info,new cljs.core.Keyword(null,"eldoc","eldoc",-1321421900),scittle.nrepl.handle_nrepl_info,new cljs.core.Keyword(null,"lookup","lookup",1225356838),scittle.nrepl.handle_nrepl_info,new cljs.core.Keyword(null,"describe","describe",1369790582),scittle.nrepl.handle_describe,new cljs.core.Keyword(null,"complete","complete",-500388775),(function (msg){
var completions = sci.nrepl.completions.completions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"ctx","ctx",-493610118),sci.ctx_store.get_ctx()));
return scittle.nrepl.nrepl_reply(msg,completions);
})], null);
scittle.nrepl.handle_nrepl_message = (function scittle$nrepl$handle_nrepl_message(msg){
var temp__5802__auto__ = (function (){var G__46683 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(msg);
return (scittle.nrepl.ops.cljs$core$IFn$_invoke$arity$1 ? scittle.nrepl.ops.cljs$core$IFn$_invoke$arity$1(G__46683) : scittle.nrepl.ops.call(null,G__46683));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(msg) : handler.call(null,msg));
} else {
return scittle.nrepl.nrepl_reply(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error","done"], null),new cljs.core.Keyword(null,"err","err",-2089457205),"unkown-op"], null)], 0)));
}
});
scittle.nrepl.ws_url = (function scittle$nrepl$ws_url(host,port,path){
return ["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
});
var temp__5804__auto___46685 = window.SCITTLE_NREPL_WEBSOCKET_PORT;
if(cljs.core.truth_(temp__5804__auto___46685)){
var ws_port_46686 = temp__5804__auto___46685;
(window.ws_nrepl = (new WebSocket(scittle.nrepl.ws_url(window.location.hostname,ws_port_46686,"_nrepl"))));
} else {
}
var temp__5804__auto___46687 = scittle.nrepl.nrepl_websocket();
if(cljs.core.truth_(temp__5804__auto___46687)){
var ws_46688 = temp__5804__auto___46687;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ws","ws",86841443),ws_46688], 0));

(ws_46688.onmessage = (function (event){
return scittle.nrepl.handle_nrepl_message(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(event.data));
}));

(ws_46688.onerror = (function (event){
return console.log(event);
}));
} else {
}

//# sourceMappingURL=scittle.nrepl.js.map
