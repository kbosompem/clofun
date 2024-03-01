goog.provide('sci.nrepl.info');
sci.nrepl.info.format_1 = (function sci$nrepl$info$format_1(fmt_str,x){
return clojure.string.replace_first(fmt_str,"%s",x);
});
sci.nrepl.info.info = (function sci$nrepl$info$info(p__46589){
var map__46593 = p__46589;
var map__46593__$1 = cljs.core.__destructure_map(map__46593);
var ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46593__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46593__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46593__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
if(cljs.core.not(sym)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no-eldoc","done"], null),new cljs.core.Keyword(null,"err","err",-2089457205),"Message should contain a `sym`"], null);
} else {
var code = sci.nrepl.info.format_1(sci.nrepl.info.format_1("(when-let [the-var (ns-resolve '%s '%s)]\n               (meta the-var))",ns_str),sym);
var vec__46598 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.nrepl.info","success","sci.nrepl.info/success",-493835426),sci.core.eval_string_STAR_(ctx,code)], null);
}catch (e46605){var e = e46605;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.nrepl.info","error","sci.nrepl.info/error",1267042764),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
}})();
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(1),null);
var map__46601 = val;
var map__46601__$1 = cljs.core.__destructure_map(map__46601);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"line","line",212345235));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
if(cljs.core.truth_((function (){var and__5043__auto__ = name;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword("sci.nrepl.info","success","sci.nrepl.info/success",-493835426));
} else {
return and__5043__auto__;
}
})())){
var G__46613 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),(function (){var G__46614 = val;
var G__46614__$1 = (((G__46614 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__46614));
if((G__46614__$1 == null)){
return null;
} else {
return cljs.core.ns_name(G__46614__$1);
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists], 0)),new cljs.core.Keyword(null,"eldoc","eldoc",-1321421900),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46583_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__46583_SHARP_);
}),arglists),new cljs.core.Keyword(null,"arglists-str","arglists-str",1439431437),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,arglists).join("\n"),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null),new cljs.core.Keyword(null,"name","name",1843675177),name], null);
var G__46613__$1 = (cljs.core.truth_(doc)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46613,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__46613);
var G__46613__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46613__$1,new cljs.core.Keyword(null,"file","file",-1269645878),file):G__46613__$1);
if(cljs.core.truth_(line)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46613__$2,new cljs.core.Keyword(null,"line","line",212345235),line);
} else {
return G__46613__$2;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done","no-eldoc"], null)], null);
}
}
});

//# sourceMappingURL=sci.nrepl.info.js.map
