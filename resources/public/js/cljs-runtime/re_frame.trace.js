goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__49786){
var map__49787 = p__49786;
var map__49787__$1 = cljs.core.__destructure_map(map__49787);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__49790_49826 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__49791_49827 = null;
var count__49792_49828 = (0);
var i__49793_49829 = (0);
while(true){
if((i__49793_49829 < count__49792_49828)){
var vec__49806_49830 = chunk__49791_49827.cljs$core$IIndexed$_nth$arity$2(null,i__49793_49829);
var k_49831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49806_49830,(0),null);
var cb_49832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49806_49830,(1),null);
try{var G__49810_49833 = cljs.core.deref(re_frame.trace.traces);
(cb_49832.cljs$core$IFn$_invoke$arity$1 ? cb_49832.cljs$core$IFn$_invoke$arity$1(G__49810_49833) : cb_49832.call(null,G__49810_49833));
}catch (e49809){var e_49834 = e49809;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_49831,"while storing",cljs.core.deref(re_frame.trace.traces),e_49834], 0));
}

var G__49835 = seq__49790_49826;
var G__49836 = chunk__49791_49827;
var G__49837 = count__49792_49828;
var G__49838 = (i__49793_49829 + (1));
seq__49790_49826 = G__49835;
chunk__49791_49827 = G__49836;
count__49792_49828 = G__49837;
i__49793_49829 = G__49838;
continue;
} else {
var temp__5804__auto___49839 = cljs.core.seq(seq__49790_49826);
if(temp__5804__auto___49839){
var seq__49790_49840__$1 = temp__5804__auto___49839;
if(cljs.core.chunked_seq_QMARK_(seq__49790_49840__$1)){
var c__5568__auto___49841 = cljs.core.chunk_first(seq__49790_49840__$1);
var G__49842 = cljs.core.chunk_rest(seq__49790_49840__$1);
var G__49843 = c__5568__auto___49841;
var G__49844 = cljs.core.count(c__5568__auto___49841);
var G__49845 = (0);
seq__49790_49826 = G__49842;
chunk__49791_49827 = G__49843;
count__49792_49828 = G__49844;
i__49793_49829 = G__49845;
continue;
} else {
var vec__49811_49846 = cljs.core.first(seq__49790_49840__$1);
var k_49847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49811_49846,(0),null);
var cb_49848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49811_49846,(1),null);
try{var G__49815_49849 = cljs.core.deref(re_frame.trace.traces);
(cb_49848.cljs$core$IFn$_invoke$arity$1 ? cb_49848.cljs$core$IFn$_invoke$arity$1(G__49815_49849) : cb_49848.call(null,G__49815_49849));
}catch (e49814){var e_49850 = e49814;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_49847,"while storing",cljs.core.deref(re_frame.trace.traces),e_49850], 0));
}

var G__49851 = cljs.core.next(seq__49790_49840__$1);
var G__49852 = null;
var G__49853 = (0);
var G__49854 = (0);
seq__49790_49826 = G__49851;
chunk__49791_49827 = G__49852;
count__49792_49828 = G__49853;
i__49793_49829 = G__49854;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
