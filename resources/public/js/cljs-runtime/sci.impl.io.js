goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__42179 = arguments.length;
switch (G__42179) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__42188 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__42189 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__42189);

try{var G__42190 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__42190);

return G__42190;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__42188);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__42193 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__42195 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__42195);

try{var G__42196 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__42196);

return G__42196;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__42193);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__42197 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__42198 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__42198);

try{var G__42199 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__42199);

return G__42199;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__42197);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__42200 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__42201 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__42201);

try{var G__42202 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__42202);

return G__42202;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__42200);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__42204 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__42205 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__42205);

try{var G__42206 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__42206);

return G__42206;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__42204);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__42212 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__42213 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42213);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42212);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42553 = arguments.length;
var i__5770__auto___42554 = (0);
while(true){
if((i__5770__auto___42554 < len__5769__auto___42553)){
args__5775__auto__.push((arguments[i__5770__auto___42554]));

var G__42555 = (i__5770__auto___42554 + (1));
i__5770__auto___42554 = G__42555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__42215 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__42216 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42217 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42218 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42219 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42220 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42221 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42222 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__42223 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__42224 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42225 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42226 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42227 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42228 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42229 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42230 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42223);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42224);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42225);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42226);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42227);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42228);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42229);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42230);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42222);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42221);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42220);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42219);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42218);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42217);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42216);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42215);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq42214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42214));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__42231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__42232 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42232);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42231);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42556 = arguments.length;
var i__5770__auto___42557 = (0);
while(true){
if((i__5770__auto___42557 < len__5769__auto___42556)){
args__5775__auto__.push((arguments[i__5770__auto___42557]));

var G__42558 = (i__5770__auto___42557 + (1));
i__5770__auto___42557 = G__42558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__42234 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42235 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42236 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42237 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42238 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42240 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__42241 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42242 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42243 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42244 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42245 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42246 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42247 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42241);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42242);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42243);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42244);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42246);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42247);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42240);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42239);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42238);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42237);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42236);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42235);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42234);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq42233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42233));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42559 = arguments.length;
var i__5770__auto___42560 = (0);
while(true){
if((i__5770__auto___42560 < len__5769__auto___42559)){
args__5775__auto__.push((arguments[i__5770__auto___42560]));

var G__42561 = (i__5770__auto___42560 + (1));
i__5770__auto___42560 = G__42561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__42254 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__42255 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42256 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42257 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42258 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42259 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42261 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__42262 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__42263 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42264 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42265 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42266 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42267 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42268 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42269 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42262);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42263);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42264);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42265);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42266);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42267);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42268);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42269);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42260);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42259);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42258);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42257);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42256);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42255);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42254);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq42251){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42251));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42562 = arguments.length;
var i__5770__auto___42563 = (0);
while(true){
if((i__5770__auto___42563 < len__5769__auto___42562)){
args__5775__auto__.push((arguments[i__5770__auto___42563]));

var G__42564 = (i__5770__auto___42563 + (1));
i__5770__auto___42563 = G__42564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__42276 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42277 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42278 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42279 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42280 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42282 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__42283 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42284 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42285 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42286 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42287 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42288 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42289 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42283);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42284);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42285);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42286);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42287);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42288);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42289);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42281);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42280);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42279);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42278);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42277);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42276);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq42272){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42272));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42565 = arguments.length;
var i__5770__auto___42566 = (0);
while(true){
if((i__5770__auto___42566 < len__5769__auto___42565)){
args__5775__auto__.push((arguments[i__5770__auto___42566]));

var G__42567 = (i__5770__auto___42566 + (1));
i__5770__auto___42566 = G__42567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__42385 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__42386 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42387 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42388 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42389 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42391 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__42392 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__42393 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42394 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__42395 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42396 = null;
var _STAR_print_newline_STAR__temp_val__42397 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42398 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42392);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42393);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42394);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42395);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42396);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42397);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42398);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42391);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42390);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42389);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42388);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42387);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42386);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42385);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq42292){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42292));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42568 = arguments.length;
var i__5770__auto___42569 = (0);
while(true){
if((i__5770__auto___42569 < len__5769__auto___42568)){
args__5775__auto__.push((arguments[i__5770__auto___42569]));

var G__42570 = (i__5770__auto___42569 + (1));
i__5770__auto___42569 = G__42570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__42512 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42513 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42514 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42515 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42516 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42518 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__42519 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42520 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42521 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42522 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42523 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42524 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42525 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42519);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42520);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42521);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42522);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42523);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42524);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42525);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42518);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42517);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42516);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42515);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42514);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42513);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42512);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq42510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42510));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42572 = arguments.length;
var i__5770__auto___42573 = (0);
while(true){
if((i__5770__auto___42573 < len__5769__auto___42572)){
args__5775__auto__.push((arguments[i__5770__auto___42573]));

var G__42574 = (i__5770__auto___42573 + (1));
i__5770__auto___42573 = G__42574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__42527 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__42528 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__42529 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__42530 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__42531 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__42532 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__42533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__42534 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__42535 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__42536 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__42537 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__42538 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__42539 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__42540 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__42541 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__42542 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42535);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42536);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42537);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__42538);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__42539);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__42540);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42541);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__42542);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__42534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__42532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__42531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__42530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42529);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42528);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42527);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq42526){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42526));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42576 = arguments.length;
var i__5770__auto___42577 = (0);
while(true){
if((i__5770__auto___42577 < len__5769__auto___42576)){
args__5775__auto__.push((arguments[i__5770__auto___42577]));

var G__42578 = (i__5770__auto___42577 + (1));
i__5770__auto___42577 = G__42578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__42543__auto__","s__42543__auto__",-1340901256,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__42544__auto__","x__42544__auto__",-1940634172,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__42543__auto__","s__42543__auto__",-1340901256,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__42544__auto__","x__42544__auto__",-1940634172,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__42543__auto__","s__42543__auto__",-1340901256,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq42545){
var G__42546 = cljs.core.first(seq42545);
var seq42545__$1 = cljs.core.next(seq42545);
var G__42547 = cljs.core.first(seq42545__$1);
var seq42545__$2 = cljs.core.next(seq42545__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42546,G__42547,seq42545__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
