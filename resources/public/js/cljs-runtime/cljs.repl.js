goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36338){
var map__36340 = p__36338;
var map__36340__$1 = cljs.core.__destructure_map(map__36340);
var m = map__36340__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36346_36587 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36347_36588 = null;
var count__36348_36589 = (0);
var i__36349_36590 = (0);
while(true){
if((i__36349_36590 < count__36348_36589)){
var f_36591 = chunk__36347_36588.cljs$core$IIndexed$_nth$arity$2(null,i__36349_36590);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36591], 0));


var G__36592 = seq__36346_36587;
var G__36593 = chunk__36347_36588;
var G__36594 = count__36348_36589;
var G__36595 = (i__36349_36590 + (1));
seq__36346_36587 = G__36592;
chunk__36347_36588 = G__36593;
count__36348_36589 = G__36594;
i__36349_36590 = G__36595;
continue;
} else {
var temp__5804__auto___36596 = cljs.core.seq(seq__36346_36587);
if(temp__5804__auto___36596){
var seq__36346_36597__$1 = temp__5804__auto___36596;
if(cljs.core.chunked_seq_QMARK_(seq__36346_36597__$1)){
var c__5568__auto___36598 = cljs.core.chunk_first(seq__36346_36597__$1);
var G__36599 = cljs.core.chunk_rest(seq__36346_36597__$1);
var G__36600 = c__5568__auto___36598;
var G__36601 = cljs.core.count(c__5568__auto___36598);
var G__36602 = (0);
seq__36346_36587 = G__36599;
chunk__36347_36588 = G__36600;
count__36348_36589 = G__36601;
i__36349_36590 = G__36602;
continue;
} else {
var f_36603 = cljs.core.first(seq__36346_36597__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36603], 0));


var G__36605 = cljs.core.next(seq__36346_36597__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__36346_36587 = G__36605;
chunk__36347_36588 = G__36606;
count__36348_36589 = G__36607;
i__36349_36590 = G__36608;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36609 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36609], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36609)))?cljs.core.second(arglists_36609):arglists_36609)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36379_36610 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36380_36611 = null;
var count__36381_36612 = (0);
var i__36382_36613 = (0);
while(true){
if((i__36382_36613 < count__36381_36612)){
var vec__36402_36614 = chunk__36380_36611.cljs$core$IIndexed$_nth$arity$2(null,i__36382_36613);
var name_36615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36402_36614,(0),null);
var map__36405_36616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36402_36614,(1),null);
var map__36405_36617__$1 = cljs.core.__destructure_map(map__36405_36616);
var doc_36618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405_36617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405_36617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36615], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36619], 0));

if(cljs.core.truth_(doc_36618)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36618], 0));
} else {
}


var G__36620 = seq__36379_36610;
var G__36621 = chunk__36380_36611;
var G__36622 = count__36381_36612;
var G__36623 = (i__36382_36613 + (1));
seq__36379_36610 = G__36620;
chunk__36380_36611 = G__36621;
count__36381_36612 = G__36622;
i__36382_36613 = G__36623;
continue;
} else {
var temp__5804__auto___36624 = cljs.core.seq(seq__36379_36610);
if(temp__5804__auto___36624){
var seq__36379_36625__$1 = temp__5804__auto___36624;
if(cljs.core.chunked_seq_QMARK_(seq__36379_36625__$1)){
var c__5568__auto___36626 = cljs.core.chunk_first(seq__36379_36625__$1);
var G__36627 = cljs.core.chunk_rest(seq__36379_36625__$1);
var G__36628 = c__5568__auto___36626;
var G__36629 = cljs.core.count(c__5568__auto___36626);
var G__36630 = (0);
seq__36379_36610 = G__36627;
chunk__36380_36611 = G__36628;
count__36381_36612 = G__36629;
i__36382_36613 = G__36630;
continue;
} else {
var vec__36409_36631 = cljs.core.first(seq__36379_36625__$1);
var name_36632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409_36631,(0),null);
var map__36412_36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409_36631,(1),null);
var map__36412_36634__$1 = cljs.core.__destructure_map(map__36412_36633);
var doc_36635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36412_36634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36412_36634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36636], 0));

if(cljs.core.truth_(doc_36635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36635], 0));
} else {
}


var G__36637 = cljs.core.next(seq__36379_36625__$1);
var G__36638 = null;
var G__36639 = (0);
var G__36640 = (0);
seq__36379_36610 = G__36637;
chunk__36380_36611 = G__36638;
count__36381_36612 = G__36639;
i__36382_36613 = G__36640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36419 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36420 = null;
var count__36421 = (0);
var i__36422 = (0);
while(true){
if((i__36422 < count__36421)){
var role = chunk__36420.cljs$core$IIndexed$_nth$arity$2(null,i__36422);
var temp__5804__auto___36641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36641__$1)){
var spec_36642 = temp__5804__auto___36641__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36642)], 0));
} else {
}


var G__36643 = seq__36419;
var G__36644 = chunk__36420;
var G__36645 = count__36421;
var G__36646 = (i__36422 + (1));
seq__36419 = G__36643;
chunk__36420 = G__36644;
count__36421 = G__36645;
i__36422 = G__36646;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36419);
if(temp__5804__auto____$1){
var seq__36419__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36419__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36419__$1);
var G__36647 = cljs.core.chunk_rest(seq__36419__$1);
var G__36648 = c__5568__auto__;
var G__36649 = cljs.core.count(c__5568__auto__);
var G__36650 = (0);
seq__36419 = G__36647;
chunk__36420 = G__36648;
count__36421 = G__36649;
i__36422 = G__36650;
continue;
} else {
var role = cljs.core.first(seq__36419__$1);
var temp__5804__auto___36651__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36651__$2)){
var spec_36657 = temp__5804__auto___36651__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36657)], 0));
} else {
}


var G__36659 = cljs.core.next(seq__36419__$1);
var G__36660 = null;
var G__36661 = (0);
var G__36662 = (0);
seq__36419 = G__36659;
chunk__36420 = G__36660;
count__36421 = G__36661;
i__36422 = G__36662;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36666 = cljs.core.ex_cause(t);
via = G__36665;
t = G__36666;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36482 = datafied_throwable;
var map__36482__$1 = cljs.core.__destructure_map(map__36482);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36482__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36483 = cljs.core.last(via);
var map__36483__$1 = cljs.core.__destructure_map(map__36483);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36483__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36484 = data;
var map__36484__$1 = cljs.core.__destructure_map(map__36484);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36485 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36485__$1 = cljs.core.__destructure_map(map__36485);
var top_data = map__36485__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36488 = phase;
var G__36488__$1 = (((G__36488 instanceof cljs.core.Keyword))?G__36488.fqn:null);
switch (G__36488__$1) {
case "read-source":
var map__36489 = data;
var map__36489__$1 = cljs.core.__destructure_map(map__36489);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36489__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36489__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36491__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36491,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36491);
var G__36491__$2 = (cljs.core.truth_((function (){var fexpr__36493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36493.cljs$core$IFn$_invoke$arity$1 ? fexpr__36493.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36493.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36491__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36491__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36491__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36491__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36494 = top_data;
var G__36494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36494);
var G__36494__$2 = (cljs.core.truth_((function (){var fexpr__36495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36495.cljs$core$IFn$_invoke$arity$1 ? fexpr__36495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36495.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36494__$1);
var G__36494__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36494__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36494__$2);
var G__36494__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36494__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36494__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36497 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497,(3),null);
var G__36500 = top_data;
var G__36500__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36500,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36500);
var G__36500__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36500__$1);
var G__36500__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36500__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36500__$2);
var G__36500__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36500__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36500__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36500__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36500__$4;
}

break;
case "execution":
var vec__36504 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36504,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36504,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36504,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36504,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36476_SHARP_){
var or__5045__auto__ = (p1__36476_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36509 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36509.cljs$core$IFn$_invoke$arity$1 ? fexpr__36509.cljs$core$IFn$_invoke$arity$1(p1__36476_SHARP_) : fexpr__36509.call(null,p1__36476_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36514 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36514__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36514);
var G__36514__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36514__$1);
var G__36514__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36514__$2);
var G__36514__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36514__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36514__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36488__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36533){
var map__36534 = p__36533;
var map__36534__$1 = cljs.core.__destructure_map(map__36534);
var triage_data = map__36534__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36537 = phase;
var G__36537__$1 = (((G__36537 instanceof cljs.core.Keyword))?G__36537.fqn:null);
switch (G__36537__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36538 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36539 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36540 = loc;
var G__36541 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36542_36700 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36543_36701 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36544_36702 = true;
var _STAR_print_fn_STAR__temp_val__36545_36703 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36544_36702);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36545_36703);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36530_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36530_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36543_36701);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36542_36700);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36538,G__36539,G__36540,G__36541) : format.call(null,G__36538,G__36539,G__36540,G__36541));

break;
case "macroexpansion":
var G__36546 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36547 = cause_type;
var G__36548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36549 = loc;
var G__36550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36546,G__36547,G__36548,G__36549,G__36550) : format.call(null,G__36546,G__36547,G__36548,G__36549,G__36550));

break;
case "compile-syntax-check":
var G__36555 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36556 = cause_type;
var G__36557 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36558 = loc;
var G__36559 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36555,G__36556,G__36557,G__36558,G__36559) : format.call(null,G__36555,G__36556,G__36557,G__36558,G__36559));

break;
case "compilation":
var G__36560 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36561 = cause_type;
var G__36562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36563 = loc;
var G__36564 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36560,G__36561,G__36562,G__36563,G__36564) : format.call(null,G__36560,G__36561,G__36562,G__36563,G__36564));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36565 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36566 = symbol;
var G__36567 = loc;
var G__36568 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36573_36708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36574_36709 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36575_36710 = true;
var _STAR_print_fn_STAR__temp_val__36576_36711 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36575_36710);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36576_36711);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36532_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36532_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36574_36709);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36573_36708);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36565,G__36566,G__36567,G__36568) : format.call(null,G__36565,G__36566,G__36567,G__36568));
} else {
var G__36578 = "Execution error%s at %s(%s).\n%s\n";
var G__36579 = cause_type;
var G__36580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36581 = loc;
var G__36582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36578,G__36579,G__36580,G__36581,G__36582) : format.call(null,G__36578,G__36579,G__36580,G__36581,G__36582));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36537__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
