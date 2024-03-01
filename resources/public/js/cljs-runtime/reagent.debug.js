goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__46925__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46926__i = 0, G__46926__a = new Array(arguments.length -  0);
while (G__46926__i < G__46926__a.length) {G__46926__a[G__46926__i] = arguments[G__46926__i + 0]; ++G__46926__i;}
  args = new cljs.core.IndexedSeq(G__46926__a,0,null);
} 
return G__46925__delegate.call(this,args);};
G__46925.cljs$lang$maxFixedArity = 0;
G__46925.cljs$lang$applyTo = (function (arglist__46927){
var args = cljs.core.seq(arglist__46927);
return G__46925__delegate(args);
});
G__46925.cljs$core$IFn$_invoke$arity$variadic = G__46925__delegate;
return G__46925;
})()
);

(o.error = (function() { 
var G__46928__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46929__i = 0, G__46929__a = new Array(arguments.length -  0);
while (G__46929__i < G__46929__a.length) {G__46929__a[G__46929__i] = arguments[G__46929__i + 0]; ++G__46929__i;}
  args = new cljs.core.IndexedSeq(G__46929__a,0,null);
} 
return G__46928__delegate.call(this,args);};
G__46928.cljs$lang$maxFixedArity = 0;
G__46928.cljs$lang$applyTo = (function (arglist__46930){
var args = cljs.core.seq(arglist__46930);
return G__46928__delegate(args);
});
G__46928.cljs$core$IFn$_invoke$arity$variadic = G__46928__delegate;
return G__46928;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
