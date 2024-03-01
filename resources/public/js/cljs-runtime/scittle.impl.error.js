goog.provide('scittle.impl.error');
scittle.impl.error.println = (function scittle$impl$error$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46627 = arguments.length;
var i__5770__auto___46628 = (0);
while(true){
if((i__5770__auto___46628 < len__5769__auto___46627)){
args__5775__auto__.push((arguments[i__5770__auto___46628]));

var G__46630 = (i__5770__auto___46628 + (1));
i__5770__auto___46628 = G__46630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
return console.error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",strs));
}));

(scittle.impl.error.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(scittle.impl.error.println.cljs$lang$applyTo = (function (seq46579){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46579));
}));

scittle.impl.error.ruler = (function scittle$impl$error$ruler(title){
return scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,"----- ",title," ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((((50) - (7)) - cljs.core.count(title)),"-"))], 0));
});
scittle.impl.error.split_stacktrace = (function scittle$impl$error$split_stacktrace(stacktrace,verbose_QMARK_){
if(cljs.core.truth_(verbose_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stacktrace], null);
} else {
var stack_count = cljs.core.count(stacktrace);
if((stack_count <= (10))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stacktrace], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),stacktrace),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((stack_count - (5)),stacktrace)], null);
}
}
});
scittle.impl.error.print_stacktrace = (function scittle$impl$error$print_stacktrace(stacktrace,p__46587){
var map__46588 = p__46587;
var map__46588__$1 = cljs.core.__destructure_map(map__46588);
var verbose_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46588__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var stacktrace__$1 = sci.core.format_stacktrace(stacktrace);
var segments = scittle.impl.error.split_stacktrace(stacktrace__$1,verbose_QMARK_);
var vec__46590 = segments;
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590,(1),null);
cljs.core.run_BANG_((function (p1__46585_SHARP_){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46585_SHARP_,"\n"], 0));
}),fst);

if(cljs.core.truth_(snd)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["...\n"], 0));

return cljs.core.run_BANG_((function (p1__46586_SHARP_){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46586_SHARP_,"\n"], 0));
}),snd);
} else {
return null;
}
});
scittle.impl.error.error_context = (function scittle$impl$error$error_context(ex,src_map){
var map__46597 = cljs.core.ex_data(ex);
var map__46597__$1 = cljs.core.__destructure_map(map__46597);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46597__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46597__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var and__5043__auto__ = file;
if(cljs.core.truth_(and__5043__auto__)){
return line;
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,file);
if(cljs.core.truth_(temp__5804__auto__)){
var content = temp__5804__auto__;
var matching_line = (line - (1));
var start_line = (function (){var x__5130__auto__ = (matching_line - (4));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var end_line = (matching_line + (6));
var vec__46602 = cljs.core.split_at(((matching_line - start_line) + (1)),cljs.core.take.cljs$core$IFn$_invoke$arity$2((end_line - start_line),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start_line,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,clojure.string.split_lines(content)))));
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(1),null);
var snippet_lines = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,[clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((column - (1))," ")),["^--- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(ex))].join('')].join('')], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0));
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,snippet_lines);
var max_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.str),indices));
var snippet_lines__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46606){
var vec__46607 = p__46606;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46607,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46607,(1),null);
if(cljs.core.truth_(idx)){
var line_number = (idx + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number).padStart(max_size,"0")),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line__$1)].join('');
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((2) + max_size)," ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line__$1)].join('');
}
}),snippet_lines);
return ["\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",snippet_lines__$1)].join('');
} else {
return null;
}
} else {
return null;
}
});
scittle.impl.error.right_pad = (function scittle$impl$error$right_pad(s,n){
var n__$1 = (n - cljs.core.count(s));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n__$1," "))].join('');
});
scittle.impl.error.error_handler = (function scittle$impl$error$error_handler(e,src_map){
var d = cljs.core.ex_data(e);
var sci_error_QMARK_ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("sci","error","sci/error",-979082803));
var stacktrace = sci.core.stacktrace(e);
scittle.impl.error.ruler("Scittle error");

var temp__5804__auto___46634 = e.name;
if(cljs.core.truth_(temp__5804__auto___46634)){
var name_46635 = temp__5804__auto___46634;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Error",name_46635)){
} else {
scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Type:    ",name_46635], 0));
}
} else {
}

var temp__5804__auto___46636 = e.message;
if(cljs.core.truth_(temp__5804__auto___46636)){
var m_46638 = temp__5804__auto___46636;
scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Message:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_46638)].join('')], 0));
} else {
}

var temp__5804__auto___46642 = cljs.core.ex_data(cljs.core.ex_cause(e));
if(cljs.core.truth_(temp__5804__auto___46642)){
var d_46643__$1 = temp__5804__auto___46642;
scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data:     ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_46643__$1], 0))], 0));
} else {
}

var map__46619_46644 = d;
var map__46619_46645__$1 = cljs.core.__destructure_map(map__46619_46644);
var file_46646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_46647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46645__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46645__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(line_46647)){
scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Location: ",(cljs.core.truth_(file_46646)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_46646),":"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46647),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46648),""].join('')], 0));
} else {
}

var temp__5804__auto___46649 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(temp__5804__auto___46649)){
var phase_46651 = temp__5804__auto___46649;
scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Phase:   ",phase_46651], 0));
} else {
}

var temp__5804__auto___46652 = ((sci_error_QMARK_)?scittle.impl.error.error_context(e,src_map):null);
if(cljs.core.truth_(temp__5804__auto___46652)){
var ec_46654 = temp__5804__auto___46652;
scittle.impl.error.ruler("Context");

scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ec_46654], 0));
} else {
}

if(sci_error_QMARK_){
var temp__5804__auto__ = (function (){var st = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46623_46655 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46624_46656 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46625_46657 = true;
var _STAR_print_fn_STAR__temp_val__46626_46658 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46625_46657);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46626_46658);

try{if(cljs.core.truth_(stacktrace)){
scittle.impl.error.print_stacktrace(stacktrace,src_map);
} else {
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46624_46656);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46623_46655);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
if(clojure.string.blank_QMARK_(st)){
return null;
} else {
return st;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var st = temp__5804__auto__;
scittle.impl.error.ruler("Stack trace");

return scittle.impl.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st], 0));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=scittle.impl.error.js.map
