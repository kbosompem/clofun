goog.provide('sci.nrepl.completions');
goog.scope(function(){
  sci.nrepl.completions.goog$module$goog$object = goog.module.get('goog.object');
});
sci.nrepl.completions.format = (function sci$nrepl$completions$format(fmt_str,x){
return clojure.string.replace(fmt_str,"%s",x);
});
sci.nrepl.completions.fully_qualified_syms = (function sci$nrepl$completions$fully_qualified_syms(ctx,ns_sym){
var syms = sci.core.eval_string_STAR_(ctx,sci.nrepl.completions.format("(keys (ns-map '%s))",ns_sym));
var sym_strs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46581_SHARP_){
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46581_SHARP_)].join('');
}),syms);
var sym_expr = ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",sym_strs),"]"].join('');
var syms__$1 = sci.core.eval_string_STAR_(ctx,sym_expr);
var syms__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46582_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46582_SHARP_),"nbb.internal");
}),syms__$1);
return syms__$2;
});
sci.nrepl.completions.ns_imports__GT_completions = (function sci$nrepl$completions$ns_imports__GT_completions(ctx,query_ns,query){
var vec__46594 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query,/\//);
var _ns_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46594,(0),null);
var name_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46594,(1),null);
var resolved = sci.core.eval_string_STAR_(ctx,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"resolved__46584__auto__","resolved__46584__auto__",-1933513993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","resolve","cljs.core/resolve",1796776582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,query_ns,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"resolved__46584__auto__","resolved__46584__auto__",-1933513993,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"resolved__46584__auto__","resolved__46584__auto__",-1933513993,null),null,(1),null))], 0)))),null,(1),null))], 0))))], 0)));
if(cljs.core.truth_(resolved)){
var temp__5804__auto__ = (cljs.core.truth_(name_part)?(function (){var ends_with_dot_QMARK_ = clojure.string.ends_with_QMARK_(name_part,".");
var fields = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_part,/\./);
var fields__$1 = ((ends_with_dot_QMARK_)?fields:cljs.core.butlast(fields));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_ns),"/",((cljs.core.seq(fields__$1))?(function (){var joined = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",fields__$1);
return [joined,"."].join('');
})():null)].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.nrepl.completions.goog$module$goog$object.getValueByKeys,resolved,fields__$1)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_ns),"/"].join(''),resolved], null));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__46610 = temp__5804__auto__;
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(0),null);
var imported = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(1),null);
var props = (function (){var obj = imported;
var props = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj)){
var G__46659 = Object.getPrototypeOf(obj);
var G__46660 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(props,Object.getOwnPropertyNames(obj));
obj = G__46659;
props = G__46660;
continue;
} else {
return props;
}
break;
}
})();
var completions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null);
}),props);
return completions;
} else {
return null;
}
} else {
return null;
}
});
sci.nrepl.completions.match = (function sci$nrepl$completions$match(_alias__GT_ns,ns__GT_alias,query,p__46615){
var vec__46616 = p__46615;
var sym_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46616,(0),null);
var sym_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46616,(1),null);
var qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46616,(2),null);
var pat = cljs.core.re_pattern(query);
var or__5045__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unqualified","unqualified",-98904653),qualifier);
if(and__5043__auto__){
return cljs.core.re_find(pat,sym_name);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_ns,sym_name], null):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(sym_ns)){
var or__5045__auto____$1 = (cljs.core.truth_(cljs.core.re_find(pat,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns__GT_alias,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym_ns))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_name)].join('')))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_ns,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns__GT_alias,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym_ns))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_name)].join('')], null):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.re_find(pat,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_name)].join('')))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_ns,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_name)].join('')], null);
} else {
return null;
}
}
} else {
return null;
}
}
});
sci.nrepl.completions.completions = (function sci$nrepl$completions$completions(p__46620){
var map__46621 = p__46620;
var map__46621__$1 = cljs.core.__destructure_map(map__46621);
var request = map__46621__$1;
var ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46621__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46621__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
try{var sci_ns = (cljs.core.truth_(ns_str)?sci.core.find_ns(ctx,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns_str)):null);
var bm__46354__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,(function (){var or__5045__auto__ = sci_ns;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref(sci.core.ns);
}
})()]);
if(cljs.core.map_QMARK_(bm__46354__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__46354__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__46354__auto__);

try{var temp__5802__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(request);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var query = temp__5802__auto__;
var has_namespace_QMARK_ = clojure.string.includes_QMARK_(query,"/");
var query_ns = ((has_namespace_QMARK_)?(function (){var G__46629 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query,/\//);
var G__46629__$1 = (((G__46629 == null))?null:cljs.core.first(G__46629));
if((G__46629__$1 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__46629__$1);
}
})():null);
var from_current_ns = sci.nrepl.completions.fully_qualified_syms(ctx,sci.core.eval_string_STAR_(ctx,"(ns-name *ns*)"));
var from_current_ns__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(sym),cljs.core.name(sym),new cljs.core.Keyword(null,"unqualified","unqualified",-98904653)], null);
}),from_current_ns);
var alias__GT_ns = sci.core.eval_string_STAR_(ctx,"(let [m (ns-aliases *ns*)] (zipmap (keys m) (map ns-name (vals m))))");
var ns__GT_alias = cljs.core.zipmap(cljs.core.vals(alias__GT_ns),cljs.core.keys(alias__GT_ns));
var from_aliased_nss = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (alias){
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(alias__GT_ns,alias);
var syms = sci.core.eval_string_STAR_(ctx,sci.nrepl.completions.format("(keys (ns-publics '%s))",ns));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),new cljs.core.Keyword(null,"qualified","qualified",-2065109343)], null);
}),syms);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keys(alias__GT_ns)], 0)));
var all_namespaces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),null,new cljs.core.Keyword(null,"qualified","qualified",-2065109343)], null);
}),sci.core.eval_string_STAR_(ctx,"(all-ns)"));
var from_imports = ((has_namespace_QMARK_)?sci.nrepl.completions.ns_imports__GT_completions(ctx,query_ns,query):null);
var fully_qualified_names = (cljs.core.truth_(from_imports)?null:((has_namespace_QMARK_)?(function (){var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(alias__GT_ns,query_ns,query_ns);
var syms = sci.core.eval_string_STAR_(ctx,sci.nrepl.completions.format("(and (find-ns '%s)\n                                                                                         (keys (ns-publics '%s)))",ns));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),new cljs.core.Keyword(null,"qualified","qualified",-2065109343)], null);
}),syms);
})():null));
var svs = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(from_current_ns__$1,from_aliased_nss,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_namespaces,fully_qualified_names], 0));
var completions = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (entry){
return sci.nrepl.completions.match(alias__GT_ns,ns__GT_alias,query,entry);
}),svs);
var completions__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(completions,from_imports);
var completions__$2 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46632){
var vec__46639 = p__46632;
var namespace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46639,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46639,(1),null);
var G__46650 = new cljs.core.PersistentArrayMap(null, 1, ["candidate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null);
if(cljs.core.truth_(namespace)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46650,"ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace));
} else {
return G__46650;
}
}),completions__$1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completions","completions",-190930179),completions__$2,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
}
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e46622){var e = e46622;
console.error("ERROR",e);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completions","completions",-190930179),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
}});

//# sourceMappingURL=sci.nrepl.completions.js.map
