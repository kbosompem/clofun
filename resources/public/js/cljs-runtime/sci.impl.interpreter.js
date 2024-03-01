goog.provide('sci.impl.interpreter');
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var m__43577__auto__ = cljs.core.meta(form);
var loc__43578__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = true;
if(and__5043__auto__){
var and__5043__auto____$1 = m__43577__auto__;
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__43577__auto__);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__43577__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__43577__auto__)], null):null);
if(cljs.core.truth_(loc__43578__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__43578__auto__);
} else {
}

try{var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__45246 = cljs.core.rest(exprs);
var G__45247 = (function (){var G__45230 = ctx;
var G__45231 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__45230,G__45231) : sci.impl.interpreter.eval_form.call(null,G__45230,G__45231));
})();
exprs = G__45246;
ret = G__45247;
continue;
} else {
return ret;
}
break;
}
}finally {if(cljs.core.truth_(loc__43578__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = null);
} else {
}
}} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx__$1,form,true);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
if((analyzed instanceof sci.impl.types.EvalForm)){
var G__45232 = ctx__$1;
var G__45233 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__45232,G__45233) : sci.impl.interpreter.eval_form.call(null,G__45232,G__45233));
} else {
try{return sci.impl.types.eval(analyzed,ctx__$1,bindings);
}catch (e45234){if((e45234 instanceof Error)){
var e = e45234;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,e,analyzed);
} else {
throw e45234;

}
}}
}
} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,form);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
try{return sci.impl.types.eval(analyzed,ctx__$1,bindings);
}catch (e45235){if((e45235 instanceof Error)){
var e = e45235;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,e,analyzed);
} else {
throw e45235;

}
}}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(var_args){
var G__45237 = arguments.length;
switch (G__45237) {
case 2:
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,s){
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3(ctx,s,null);
}));

(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,s,opts){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,(function (){var or__5045__auto__ = (cljs.core.truth_(opts)?new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref(sci.impl.utils.current_ns);
}
})()]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)){
if(cljs.core.truth_((cljs.core.truth_(opts)?new cljs.core.Keyword("sci.impl","eval-string+","sci.impl/eval-string+",-178784582).cljs$core$IFn$_invoke$arity$1(opts):null))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),ret,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], null);
} else {
return ret;
}
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__45252 = ret__$1;
ret = G__45252;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}}));

(sci.impl.interpreter.eval_string_STAR_.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_string_STAR_,sci.impl.interpreter.eval_string_STAR_);
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__45242 = arguments.length;
switch (G__45242) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
