goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__40135 = arguments.length;
switch (G__40135) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__40141 = fixed_arity;
switch (G__40141) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__40145){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__40145);

while(true){
var ret__39509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39509__auto__)){
continue;
} else {
return ret__39509__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__40145 = null;
if (arguments.length > 0) {
var G__40948__i = 0, G__40948__a = new Array(arguments.length -  0);
while (G__40948__i < G__40948__a.length) {G__40948__a[G__40948__i] = arguments[G__40948__i + 0]; ++G__40948__i;}
  G__40145 = new cljs.core.IndexedSeq(G__40948__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__40145);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__40949){
var G__40145 = cljs.core.seq(arglist__40949);
return sci$impl$fns$arity_0__delegate(G__40145);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__40148,G__40149){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40148);

(invoc_array[vararg_idx] = G__40149);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__40148,var_args){
var G__40149 = null;
if (arguments.length > 1) {
var G__40951__i = 0, G__40951__a = new Array(arguments.length -  1);
while (G__40951__i < G__40951__a.length) {G__40951__a[G__40951__i] = arguments[G__40951__i + 1]; ++G__40951__i;}
  G__40149 = new cljs.core.IndexedSeq(G__40951__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__40148,G__40149);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__40952){
var G__40148 = cljs.core.first(arglist__40952);
var G__40149 = cljs.core.rest(arglist__40952);
return sci$impl$fns$arity_1__delegate(G__40148,G__40149);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__40154,G__40155,G__40156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40154);

(invoc_array[(1)] = G__40155);

(invoc_array[vararg_idx] = G__40156);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__40154,G__40155,var_args){
var G__40156 = null;
if (arguments.length > 2) {
var G__40957__i = 0, G__40957__a = new Array(arguments.length -  2);
while (G__40957__i < G__40957__a.length) {G__40957__a[G__40957__i] = arguments[G__40957__i + 2]; ++G__40957__i;}
  G__40156 = new cljs.core.IndexedSeq(G__40957__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__40154,G__40155,G__40156);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__40958){
var G__40154 = cljs.core.first(arglist__40958);
arglist__40958 = cljs.core.next(arglist__40958);
var G__40155 = cljs.core.first(arglist__40958);
var G__40156 = cljs.core.rest(arglist__40958);
return sci$impl$fns$arity_2__delegate(G__40154,G__40155,G__40156);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__40157,G__40158,G__40159,G__40160){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40157);

(invoc_array[(1)] = G__40158);

(invoc_array[(2)] = G__40159);

(invoc_array[vararg_idx] = G__40160);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__40157,G__40158,G__40159,var_args){
var G__40160 = null;
if (arguments.length > 3) {
var G__40959__i = 0, G__40959__a = new Array(arguments.length -  3);
while (G__40959__i < G__40959__a.length) {G__40959__a[G__40959__i] = arguments[G__40959__i + 3]; ++G__40959__i;}
  G__40160 = new cljs.core.IndexedSeq(G__40959__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__40157,G__40158,G__40159,G__40160);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__40961){
var G__40157 = cljs.core.first(arglist__40961);
arglist__40961 = cljs.core.next(arglist__40961);
var G__40158 = cljs.core.first(arglist__40961);
arglist__40961 = cljs.core.next(arglist__40961);
var G__40159 = cljs.core.first(arglist__40961);
var G__40160 = cljs.core.rest(arglist__40961);
return sci$impl$fns$arity_3__delegate(G__40157,G__40158,G__40159,G__40160);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__40161,G__40162,G__40163,G__40164,G__40165){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40161);

(invoc_array[(1)] = G__40162);

(invoc_array[(2)] = G__40163);

(invoc_array[(3)] = G__40164);

(invoc_array[vararg_idx] = G__40165);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__40161,G__40162,G__40163,G__40164,var_args){
var G__40165 = null;
if (arguments.length > 4) {
var G__40962__i = 0, G__40962__a = new Array(arguments.length -  4);
while (G__40962__i < G__40962__a.length) {G__40962__a[G__40962__i] = arguments[G__40962__i + 4]; ++G__40962__i;}
  G__40165 = new cljs.core.IndexedSeq(G__40962__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__40161,G__40162,G__40163,G__40164,G__40165);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__40963){
var G__40161 = cljs.core.first(arglist__40963);
arglist__40963 = cljs.core.next(arglist__40963);
var G__40162 = cljs.core.first(arglist__40963);
arglist__40963 = cljs.core.next(arglist__40963);
var G__40163 = cljs.core.first(arglist__40963);
arglist__40963 = cljs.core.next(arglist__40963);
var G__40164 = cljs.core.first(arglist__40963);
var G__40165 = cljs.core.rest(arglist__40963);
return sci$impl$fns$arity_4__delegate(G__40161,G__40162,G__40163,G__40164,G__40165);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__40166,G__40167,G__40168,G__40169,G__40170,G__40171){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40166);

(invoc_array[(1)] = G__40167);

(invoc_array[(2)] = G__40168);

(invoc_array[(3)] = G__40169);

(invoc_array[(4)] = G__40170);

(invoc_array[vararg_idx] = G__40171);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__40166,G__40167,G__40168,G__40169,G__40170,var_args){
var G__40171 = null;
if (arguments.length > 5) {
var G__40967__i = 0, G__40967__a = new Array(arguments.length -  5);
while (G__40967__i < G__40967__a.length) {G__40967__a[G__40967__i] = arguments[G__40967__i + 5]; ++G__40967__i;}
  G__40171 = new cljs.core.IndexedSeq(G__40967__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__40166,G__40167,G__40168,G__40169,G__40170,G__40171);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__40968){
var G__40166 = cljs.core.first(arglist__40968);
arglist__40968 = cljs.core.next(arglist__40968);
var G__40167 = cljs.core.first(arglist__40968);
arglist__40968 = cljs.core.next(arglist__40968);
var G__40168 = cljs.core.first(arglist__40968);
arglist__40968 = cljs.core.next(arglist__40968);
var G__40169 = cljs.core.first(arglist__40968);
arglist__40968 = cljs.core.next(arglist__40968);
var G__40170 = cljs.core.first(arglist__40968);
var G__40171 = cljs.core.rest(arglist__40968);
return sci$impl$fns$arity_5__delegate(G__40166,G__40167,G__40168,G__40169,G__40170,G__40171);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__40193,G__40194,G__40195,G__40196,G__40197,G__40199,G__40200){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40193);

(invoc_array[(1)] = G__40194);

(invoc_array[(2)] = G__40195);

(invoc_array[(3)] = G__40196);

(invoc_array[(4)] = G__40197);

(invoc_array[(5)] = G__40199);

(invoc_array[vararg_idx] = G__40200);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__40193,G__40194,G__40195,G__40196,G__40197,G__40199,var_args){
var G__40200 = null;
if (arguments.length > 6) {
var G__40971__i = 0, G__40971__a = new Array(arguments.length -  6);
while (G__40971__i < G__40971__a.length) {G__40971__a[G__40971__i] = arguments[G__40971__i + 6]; ++G__40971__i;}
  G__40200 = new cljs.core.IndexedSeq(G__40971__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__40193,G__40194,G__40195,G__40196,G__40197,G__40199,G__40200);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__40972){
var G__40193 = cljs.core.first(arglist__40972);
arglist__40972 = cljs.core.next(arglist__40972);
var G__40194 = cljs.core.first(arglist__40972);
arglist__40972 = cljs.core.next(arglist__40972);
var G__40195 = cljs.core.first(arglist__40972);
arglist__40972 = cljs.core.next(arglist__40972);
var G__40196 = cljs.core.first(arglist__40972);
arglist__40972 = cljs.core.next(arglist__40972);
var G__40197 = cljs.core.first(arglist__40972);
arglist__40972 = cljs.core.next(arglist__40972);
var G__40199 = cljs.core.first(arglist__40972);
var G__40200 = cljs.core.rest(arglist__40972);
return sci$impl$fns$arity_6__delegate(G__40193,G__40194,G__40195,G__40196,G__40197,G__40199,G__40200);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__40215,G__40216,G__40217,G__40218,G__40219,G__40220,G__40221,G__40222){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40215);

(invoc_array[(1)] = G__40216);

(invoc_array[(2)] = G__40217);

(invoc_array[(3)] = G__40218);

(invoc_array[(4)] = G__40219);

(invoc_array[(5)] = G__40220);

(invoc_array[(6)] = G__40221);

(invoc_array[vararg_idx] = G__40222);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__40215,G__40216,G__40217,G__40218,G__40219,G__40220,G__40221,var_args){
var G__40222 = null;
if (arguments.length > 7) {
var G__40975__i = 0, G__40975__a = new Array(arguments.length -  7);
while (G__40975__i < G__40975__a.length) {G__40975__a[G__40975__i] = arguments[G__40975__i + 7]; ++G__40975__i;}
  G__40222 = new cljs.core.IndexedSeq(G__40975__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__40215,G__40216,G__40217,G__40218,G__40219,G__40220,G__40221,G__40222);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__40976){
var G__40215 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40216 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40217 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40218 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40219 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40220 = cljs.core.first(arglist__40976);
arglist__40976 = cljs.core.next(arglist__40976);
var G__40221 = cljs.core.first(arglist__40976);
var G__40222 = cljs.core.rest(arglist__40976);
return sci$impl$fns$arity_7__delegate(G__40215,G__40216,G__40217,G__40218,G__40219,G__40220,G__40221,G__40222);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__40223,G__40224,G__40225,G__40226,G__40227,G__40228,G__40229,G__40230,G__40231){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40223);

(invoc_array[(1)] = G__40224);

(invoc_array[(2)] = G__40225);

(invoc_array[(3)] = G__40226);

(invoc_array[(4)] = G__40227);

(invoc_array[(5)] = G__40228);

(invoc_array[(6)] = G__40229);

(invoc_array[(7)] = G__40230);

(invoc_array[vararg_idx] = G__40231);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__40223,G__40224,G__40225,G__40226,G__40227,G__40228,G__40229,G__40230,var_args){
var G__40231 = null;
if (arguments.length > 8) {
var G__40982__i = 0, G__40982__a = new Array(arguments.length -  8);
while (G__40982__i < G__40982__a.length) {G__40982__a[G__40982__i] = arguments[G__40982__i + 8]; ++G__40982__i;}
  G__40231 = new cljs.core.IndexedSeq(G__40982__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__40223,G__40224,G__40225,G__40226,G__40227,G__40228,G__40229,G__40230,G__40231);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__40989){
var G__40223 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40224 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40225 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40226 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40227 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40228 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40229 = cljs.core.first(arglist__40989);
arglist__40989 = cljs.core.next(arglist__40989);
var G__40230 = cljs.core.first(arglist__40989);
var G__40231 = cljs.core.rest(arglist__40989);
return sci$impl$fns$arity_8__delegate(G__40223,G__40224,G__40225,G__40226,G__40227,G__40228,G__40229,G__40230,G__40231);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__40232,G__40233,G__40234,G__40235,G__40236,G__40237,G__40238,G__40239,G__40240,G__40241){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40232);

(invoc_array[(1)] = G__40233);

(invoc_array[(2)] = G__40234);

(invoc_array[(3)] = G__40235);

(invoc_array[(4)] = G__40236);

(invoc_array[(5)] = G__40237);

(invoc_array[(6)] = G__40238);

(invoc_array[(7)] = G__40239);

(invoc_array[(8)] = G__40240);

(invoc_array[vararg_idx] = G__40241);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__40232,G__40233,G__40234,G__40235,G__40236,G__40237,G__40238,G__40239,G__40240,var_args){
var G__40241 = null;
if (arguments.length > 9) {
var G__40993__i = 0, G__40993__a = new Array(arguments.length -  9);
while (G__40993__i < G__40993__a.length) {G__40993__a[G__40993__i] = arguments[G__40993__i + 9]; ++G__40993__i;}
  G__40241 = new cljs.core.IndexedSeq(G__40993__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__40232,G__40233,G__40234,G__40235,G__40236,G__40237,G__40238,G__40239,G__40240,G__40241);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__40994){
var G__40232 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40233 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40234 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40235 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40236 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40237 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40238 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40239 = cljs.core.first(arglist__40994);
arglist__40994 = cljs.core.next(arglist__40994);
var G__40240 = cljs.core.first(arglist__40994);
var G__40241 = cljs.core.rest(arglist__40994);
return sci$impl$fns$arity_9__delegate(G__40232,G__40233,G__40234,G__40235,G__40236,G__40237,G__40238,G__40239,G__40240,G__40241);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__40246,G__40247,G__40248,G__40249,G__40250,G__40251,G__40252,G__40253,G__40254,G__40255,G__40256){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40246);

(invoc_array[(1)] = G__40247);

(invoc_array[(2)] = G__40248);

(invoc_array[(3)] = G__40249);

(invoc_array[(4)] = G__40250);

(invoc_array[(5)] = G__40251);

(invoc_array[(6)] = G__40252);

(invoc_array[(7)] = G__40253);

(invoc_array[(8)] = G__40254);

(invoc_array[(9)] = G__40255);

(invoc_array[vararg_idx] = G__40256);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__40246,G__40247,G__40248,G__40249,G__40250,G__40251,G__40252,G__40253,G__40254,G__40255,var_args){
var G__40256 = null;
if (arguments.length > 10) {
var G__41004__i = 0, G__41004__a = new Array(arguments.length -  10);
while (G__41004__i < G__41004__a.length) {G__41004__a[G__41004__i] = arguments[G__41004__i + 10]; ++G__41004__i;}
  G__40256 = new cljs.core.IndexedSeq(G__41004__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__40246,G__40247,G__40248,G__40249,G__40250,G__40251,G__40252,G__40253,G__40254,G__40255,G__40256);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41005){
var G__40246 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40247 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40248 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40249 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40250 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40251 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40252 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40253 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40254 = cljs.core.first(arglist__41005);
arglist__41005 = cljs.core.next(arglist__41005);
var G__40255 = cljs.core.first(arglist__41005);
var G__40256 = cljs.core.rest(arglist__41005);
return sci$impl$fns$arity_10__delegate(G__40246,G__40247,G__40248,G__40249,G__40250,G__40251,G__40252,G__40253,G__40254,G__40255,G__40256);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__40257,G__40258,G__40259,G__40260,G__40261,G__40262,G__40263,G__40264,G__40265,G__40266,G__40267,G__40268){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40257);

(invoc_array[(1)] = G__40258);

(invoc_array[(2)] = G__40259);

(invoc_array[(3)] = G__40260);

(invoc_array[(4)] = G__40261);

(invoc_array[(5)] = G__40262);

(invoc_array[(6)] = G__40263);

(invoc_array[(7)] = G__40264);

(invoc_array[(8)] = G__40265);

(invoc_array[(9)] = G__40266);

(invoc_array[(10)] = G__40267);

(invoc_array[vararg_idx] = G__40268);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__40257,G__40258,G__40259,G__40260,G__40261,G__40262,G__40263,G__40264,G__40265,G__40266,G__40267,var_args){
var G__40268 = null;
if (arguments.length > 11) {
var G__41018__i = 0, G__41018__a = new Array(arguments.length -  11);
while (G__41018__i < G__41018__a.length) {G__41018__a[G__41018__i] = arguments[G__41018__i + 11]; ++G__41018__i;}
  G__40268 = new cljs.core.IndexedSeq(G__41018__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__40257,G__40258,G__40259,G__40260,G__40261,G__40262,G__40263,G__40264,G__40265,G__40266,G__40267,G__40268);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41023){
var G__40257 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40258 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40259 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40260 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40261 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40262 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40263 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40264 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40265 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40266 = cljs.core.first(arglist__41023);
arglist__41023 = cljs.core.next(arglist__41023);
var G__40267 = cljs.core.first(arglist__41023);
var G__40268 = cljs.core.rest(arglist__41023);
return sci$impl$fns$arity_11__delegate(G__40257,G__40258,G__40259,G__40260,G__40261,G__40262,G__40263,G__40264,G__40265,G__40266,G__40267,G__40268);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__40269,G__40270,G__40271,G__40272,G__40273,G__40274,G__40275,G__40276,G__40277,G__40278,G__40279,G__40280,G__40281){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40269);

(invoc_array[(1)] = G__40270);

(invoc_array[(2)] = G__40271);

(invoc_array[(3)] = G__40272);

(invoc_array[(4)] = G__40273);

(invoc_array[(5)] = G__40274);

(invoc_array[(6)] = G__40275);

(invoc_array[(7)] = G__40276);

(invoc_array[(8)] = G__40277);

(invoc_array[(9)] = G__40278);

(invoc_array[(10)] = G__40279);

(invoc_array[(11)] = G__40280);

(invoc_array[vararg_idx] = G__40281);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__40269,G__40270,G__40271,G__40272,G__40273,G__40274,G__40275,G__40276,G__40277,G__40278,G__40279,G__40280,var_args){
var G__40281 = null;
if (arguments.length > 12) {
var G__41034__i = 0, G__41034__a = new Array(arguments.length -  12);
while (G__41034__i < G__41034__a.length) {G__41034__a[G__41034__i] = arguments[G__41034__i + 12]; ++G__41034__i;}
  G__40281 = new cljs.core.IndexedSeq(G__41034__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__40269,G__40270,G__40271,G__40272,G__40273,G__40274,G__40275,G__40276,G__40277,G__40278,G__40279,G__40280,G__40281);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41035){
var G__40269 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40270 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40271 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40272 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40273 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40274 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40275 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40276 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40277 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40278 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40279 = cljs.core.first(arglist__41035);
arglist__41035 = cljs.core.next(arglist__41035);
var G__40280 = cljs.core.first(arglist__41035);
var G__40281 = cljs.core.rest(arglist__41035);
return sci$impl$fns$arity_12__delegate(G__40269,G__40270,G__40271,G__40272,G__40273,G__40274,G__40275,G__40276,G__40277,G__40278,G__40279,G__40280,G__40281);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__40289,G__40290,G__40291,G__40292,G__40293,G__40294,G__40295,G__40296,G__40297,G__40298,G__40299,G__40300,G__40301,G__40302){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40289);

(invoc_array[(1)] = G__40290);

(invoc_array[(2)] = G__40291);

(invoc_array[(3)] = G__40292);

(invoc_array[(4)] = G__40293);

(invoc_array[(5)] = G__40294);

(invoc_array[(6)] = G__40295);

(invoc_array[(7)] = G__40296);

(invoc_array[(8)] = G__40297);

(invoc_array[(9)] = G__40298);

(invoc_array[(10)] = G__40299);

(invoc_array[(11)] = G__40300);

(invoc_array[(12)] = G__40301);

(invoc_array[vararg_idx] = G__40302);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__40289,G__40290,G__40291,G__40292,G__40293,G__40294,G__40295,G__40296,G__40297,G__40298,G__40299,G__40300,G__40301,var_args){
var G__40302 = null;
if (arguments.length > 13) {
var G__41041__i = 0, G__41041__a = new Array(arguments.length -  13);
while (G__41041__i < G__41041__a.length) {G__41041__a[G__41041__i] = arguments[G__41041__i + 13]; ++G__41041__i;}
  G__40302 = new cljs.core.IndexedSeq(G__41041__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__40289,G__40290,G__40291,G__40292,G__40293,G__40294,G__40295,G__40296,G__40297,G__40298,G__40299,G__40300,G__40301,G__40302);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41042){
var G__40289 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40290 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40291 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40292 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40293 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40294 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40295 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40296 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40297 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40298 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40299 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40300 = cljs.core.first(arglist__41042);
arglist__41042 = cljs.core.next(arglist__41042);
var G__40301 = cljs.core.first(arglist__41042);
var G__40302 = cljs.core.rest(arglist__41042);
return sci$impl$fns$arity_13__delegate(G__40289,G__40290,G__40291,G__40292,G__40293,G__40294,G__40295,G__40296,G__40297,G__40298,G__40299,G__40300,G__40301,G__40302);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__40306,G__40307,G__40308,G__40309,G__40310,G__40311,G__40312,G__40313,G__40314,G__40315,G__40316,G__40317,G__40318,G__40319,G__40320){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40306);

(invoc_array[(1)] = G__40307);

(invoc_array[(2)] = G__40308);

(invoc_array[(3)] = G__40309);

(invoc_array[(4)] = G__40310);

(invoc_array[(5)] = G__40311);

(invoc_array[(6)] = G__40312);

(invoc_array[(7)] = G__40313);

(invoc_array[(8)] = G__40314);

(invoc_array[(9)] = G__40315);

(invoc_array[(10)] = G__40316);

(invoc_array[(11)] = G__40317);

(invoc_array[(12)] = G__40318);

(invoc_array[(13)] = G__40319);

(invoc_array[vararg_idx] = G__40320);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__40306,G__40307,G__40308,G__40309,G__40310,G__40311,G__40312,G__40313,G__40314,G__40315,G__40316,G__40317,G__40318,G__40319,var_args){
var G__40320 = null;
if (arguments.length > 14) {
var G__41053__i = 0, G__41053__a = new Array(arguments.length -  14);
while (G__41053__i < G__41053__a.length) {G__41053__a[G__41053__i] = arguments[G__41053__i + 14]; ++G__41053__i;}
  G__40320 = new cljs.core.IndexedSeq(G__41053__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__40306,G__40307,G__40308,G__40309,G__40310,G__40311,G__40312,G__40313,G__40314,G__40315,G__40316,G__40317,G__40318,G__40319,G__40320);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41055){
var G__40306 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40307 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40308 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40309 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40310 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40311 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40312 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40313 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40314 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40315 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40316 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40317 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40318 = cljs.core.first(arglist__41055);
arglist__41055 = cljs.core.next(arglist__41055);
var G__40319 = cljs.core.first(arglist__41055);
var G__40320 = cljs.core.rest(arglist__41055);
return sci$impl$fns$arity_14__delegate(G__40306,G__40307,G__40308,G__40309,G__40310,G__40311,G__40312,G__40313,G__40314,G__40315,G__40316,G__40317,G__40318,G__40319,G__40320);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__40323,G__40324,G__40325,G__40326,G__40327,G__40328,G__40329,G__40330,G__40331,G__40332,G__40333,G__40334,G__40335,G__40336,G__40337,G__40338){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40323);

(invoc_array[(1)] = G__40324);

(invoc_array[(2)] = G__40325);

(invoc_array[(3)] = G__40326);

(invoc_array[(4)] = G__40327);

(invoc_array[(5)] = G__40328);

(invoc_array[(6)] = G__40329);

(invoc_array[(7)] = G__40330);

(invoc_array[(8)] = G__40331);

(invoc_array[(9)] = G__40332);

(invoc_array[(10)] = G__40333);

(invoc_array[(11)] = G__40334);

(invoc_array[(12)] = G__40335);

(invoc_array[(13)] = G__40336);

(invoc_array[(14)] = G__40337);

(invoc_array[vararg_idx] = G__40338);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__40323,G__40324,G__40325,G__40326,G__40327,G__40328,G__40329,G__40330,G__40331,G__40332,G__40333,G__40334,G__40335,G__40336,G__40337,var_args){
var G__40338 = null;
if (arguments.length > 15) {
var G__41079__i = 0, G__41079__a = new Array(arguments.length -  15);
while (G__41079__i < G__41079__a.length) {G__41079__a[G__41079__i] = arguments[G__41079__i + 15]; ++G__41079__i;}
  G__40338 = new cljs.core.IndexedSeq(G__41079__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__40323,G__40324,G__40325,G__40326,G__40327,G__40328,G__40329,G__40330,G__40331,G__40332,G__40333,G__40334,G__40335,G__40336,G__40337,G__40338);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41080){
var G__40323 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40324 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40325 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40326 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40327 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40328 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40329 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40330 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40331 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40332 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40333 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40334 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40335 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40336 = cljs.core.first(arglist__41080);
arglist__41080 = cljs.core.next(arglist__41080);
var G__40337 = cljs.core.first(arglist__41080);
var G__40338 = cljs.core.rest(arglist__41080);
return sci$impl$fns$arity_15__delegate(G__40323,G__40324,G__40325,G__40326,G__40327,G__40328,G__40329,G__40330,G__40331,G__40332,G__40333,G__40334,G__40335,G__40336,G__40337,G__40338);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__40340,G__40341,G__40342,G__40343,G__40344,G__40345,G__40346,G__40347,G__40348,G__40349,G__40350,G__40351,G__40352,G__40353,G__40354,G__40355,G__40356){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40340);

(invoc_array[(1)] = G__40341);

(invoc_array[(2)] = G__40342);

(invoc_array[(3)] = G__40343);

(invoc_array[(4)] = G__40344);

(invoc_array[(5)] = G__40345);

(invoc_array[(6)] = G__40346);

(invoc_array[(7)] = G__40347);

(invoc_array[(8)] = G__40348);

(invoc_array[(9)] = G__40349);

(invoc_array[(10)] = G__40350);

(invoc_array[(11)] = G__40351);

(invoc_array[(12)] = G__40352);

(invoc_array[(13)] = G__40353);

(invoc_array[(14)] = G__40354);

(invoc_array[(15)] = G__40355);

(invoc_array[vararg_idx] = G__40356);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__40340,G__40341,G__40342,G__40343,G__40344,G__40345,G__40346,G__40347,G__40348,G__40349,G__40350,G__40351,G__40352,G__40353,G__40354,G__40355,var_args){
var G__40356 = null;
if (arguments.length > 16) {
var G__41091__i = 0, G__41091__a = new Array(arguments.length -  16);
while (G__41091__i < G__41091__a.length) {G__41091__a[G__41091__i] = arguments[G__41091__i + 16]; ++G__41091__i;}
  G__40356 = new cljs.core.IndexedSeq(G__41091__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__40340,G__40341,G__40342,G__40343,G__40344,G__40345,G__40346,G__40347,G__40348,G__40349,G__40350,G__40351,G__40352,G__40353,G__40354,G__40355,G__40356);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41092){
var G__40340 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40341 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40342 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40343 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40344 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40345 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40346 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40347 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40348 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40349 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40350 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40351 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40352 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40353 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40354 = cljs.core.first(arglist__41092);
arglist__41092 = cljs.core.next(arglist__41092);
var G__40355 = cljs.core.first(arglist__41092);
var G__40356 = cljs.core.rest(arglist__41092);
return sci$impl$fns$arity_16__delegate(G__40340,G__40341,G__40342,G__40343,G__40344,G__40345,G__40346,G__40347,G__40348,G__40349,G__40350,G__40351,G__40352,G__40353,G__40354,G__40355,G__40356);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__40358,G__40359,G__40360,G__40361,G__40362,G__40363,G__40364,G__40365,G__40366,G__40367,G__40368,G__40369,G__40370,G__40371,G__40372,G__40373,G__40374,G__40375){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40358);

(invoc_array[(1)] = G__40359);

(invoc_array[(2)] = G__40360);

(invoc_array[(3)] = G__40361);

(invoc_array[(4)] = G__40362);

(invoc_array[(5)] = G__40363);

(invoc_array[(6)] = G__40364);

(invoc_array[(7)] = G__40365);

(invoc_array[(8)] = G__40366);

(invoc_array[(9)] = G__40367);

(invoc_array[(10)] = G__40368);

(invoc_array[(11)] = G__40369);

(invoc_array[(12)] = G__40370);

(invoc_array[(13)] = G__40371);

(invoc_array[(14)] = G__40372);

(invoc_array[(15)] = G__40373);

(invoc_array[(16)] = G__40374);

(invoc_array[vararg_idx] = G__40375);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__40358,G__40359,G__40360,G__40361,G__40362,G__40363,G__40364,G__40365,G__40366,G__40367,G__40368,G__40369,G__40370,G__40371,G__40372,G__40373,G__40374,var_args){
var G__40375 = null;
if (arguments.length > 17) {
var G__41099__i = 0, G__41099__a = new Array(arguments.length -  17);
while (G__41099__i < G__41099__a.length) {G__41099__a[G__41099__i] = arguments[G__41099__i + 17]; ++G__41099__i;}
  G__40375 = new cljs.core.IndexedSeq(G__41099__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__40358,G__40359,G__40360,G__40361,G__40362,G__40363,G__40364,G__40365,G__40366,G__40367,G__40368,G__40369,G__40370,G__40371,G__40372,G__40373,G__40374,G__40375);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41100){
var G__40358 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40359 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40360 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40361 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40362 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40363 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40364 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40365 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40366 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40367 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40368 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40369 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40370 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40371 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40372 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40373 = cljs.core.first(arglist__41100);
arglist__41100 = cljs.core.next(arglist__41100);
var G__40374 = cljs.core.first(arglist__41100);
var G__40375 = cljs.core.rest(arglist__41100);
return sci$impl$fns$arity_17__delegate(G__40358,G__40359,G__40360,G__40361,G__40362,G__40363,G__40364,G__40365,G__40366,G__40367,G__40368,G__40369,G__40370,G__40371,G__40372,G__40373,G__40374,G__40375);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__40379,G__40380,G__40381,G__40382,G__40383,G__40384,G__40385,G__40386,G__40387,G__40388,G__40389,G__40390,G__40391,G__40392,G__40393,G__40394,G__40395,G__40396,G__40397){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40379);

(invoc_array[(1)] = G__40380);

(invoc_array[(2)] = G__40381);

(invoc_array[(3)] = G__40382);

(invoc_array[(4)] = G__40383);

(invoc_array[(5)] = G__40384);

(invoc_array[(6)] = G__40385);

(invoc_array[(7)] = G__40386);

(invoc_array[(8)] = G__40387);

(invoc_array[(9)] = G__40388);

(invoc_array[(10)] = G__40389);

(invoc_array[(11)] = G__40390);

(invoc_array[(12)] = G__40391);

(invoc_array[(13)] = G__40392);

(invoc_array[(14)] = G__40393);

(invoc_array[(15)] = G__40394);

(invoc_array[(16)] = G__40395);

(invoc_array[(17)] = G__40396);

(invoc_array[vararg_idx] = G__40397);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__40379,G__40380,G__40381,G__40382,G__40383,G__40384,G__40385,G__40386,G__40387,G__40388,G__40389,G__40390,G__40391,G__40392,G__40393,G__40394,G__40395,G__40396,var_args){
var G__40397 = null;
if (arguments.length > 18) {
var G__41102__i = 0, G__41102__a = new Array(arguments.length -  18);
while (G__41102__i < G__41102__a.length) {G__41102__a[G__41102__i] = arguments[G__41102__i + 18]; ++G__41102__i;}
  G__40397 = new cljs.core.IndexedSeq(G__41102__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__40379,G__40380,G__40381,G__40382,G__40383,G__40384,G__40385,G__40386,G__40387,G__40388,G__40389,G__40390,G__40391,G__40392,G__40393,G__40394,G__40395,G__40396,G__40397);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41103){
var G__40379 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40380 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40381 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40382 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40383 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40384 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40385 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40386 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40387 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40388 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40389 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40390 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40391 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40392 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40393 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40394 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40395 = cljs.core.first(arglist__41103);
arglist__41103 = cljs.core.next(arglist__41103);
var G__40396 = cljs.core.first(arglist__41103);
var G__40397 = cljs.core.rest(arglist__41103);
return sci$impl$fns$arity_18__delegate(G__40379,G__40380,G__40381,G__40382,G__40383,G__40384,G__40385,G__40386,G__40387,G__40388,G__40389,G__40390,G__40391,G__40392,G__40393,G__40394,G__40395,G__40396,G__40397);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__40403,G__40404,G__40405,G__40406,G__40407,G__40408,G__40409,G__40410,G__40411,G__40412,G__40413,G__40414,G__40415,G__40416,G__40417,G__40418,G__40419,G__40420,G__40421,G__40422){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40403);

(invoc_array[(1)] = G__40404);

(invoc_array[(2)] = G__40405);

(invoc_array[(3)] = G__40406);

(invoc_array[(4)] = G__40407);

(invoc_array[(5)] = G__40408);

(invoc_array[(6)] = G__40409);

(invoc_array[(7)] = G__40410);

(invoc_array[(8)] = G__40411);

(invoc_array[(9)] = G__40412);

(invoc_array[(10)] = G__40413);

(invoc_array[(11)] = G__40414);

(invoc_array[(12)] = G__40415);

(invoc_array[(13)] = G__40416);

(invoc_array[(14)] = G__40417);

(invoc_array[(15)] = G__40418);

(invoc_array[(16)] = G__40419);

(invoc_array[(17)] = G__40420);

(invoc_array[(18)] = G__40421);

(invoc_array[vararg_idx] = G__40422);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__40403,G__40404,G__40405,G__40406,G__40407,G__40408,G__40409,G__40410,G__40411,G__40412,G__40413,G__40414,G__40415,G__40416,G__40417,G__40418,G__40419,G__40420,G__40421,var_args){
var G__40422 = null;
if (arguments.length > 19) {
var G__41106__i = 0, G__41106__a = new Array(arguments.length -  19);
while (G__41106__i < G__41106__a.length) {G__41106__a[G__41106__i] = arguments[G__41106__i + 19]; ++G__41106__i;}
  G__40422 = new cljs.core.IndexedSeq(G__41106__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__40403,G__40404,G__40405,G__40406,G__40407,G__40408,G__40409,G__40410,G__40411,G__40412,G__40413,G__40414,G__40415,G__40416,G__40417,G__40418,G__40419,G__40420,G__40421,G__40422);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41107){
var G__40403 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40404 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40405 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40406 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40407 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40408 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40409 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40410 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40411 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40412 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40413 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40414 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40415 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40416 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40417 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40418 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40419 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40420 = cljs.core.first(arglist__41107);
arglist__41107 = cljs.core.next(arglist__41107);
var G__40421 = cljs.core.first(arglist__41107);
var G__40422 = cljs.core.rest(arglist__41107);
return sci$impl$fns$arity_19__delegate(G__40403,G__40404,G__40405,G__40406,G__40407,G__40408,G__40409,G__40410,G__40411,G__40412,G__40413,G__40414,G__40415,G__40416,G__40417,G__40418,G__40419,G__40420,G__40421,G__40422);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__40423,G__40424,G__40425,G__40426,G__40427,G__40428,G__40429,G__40430,G__40431,G__40432,G__40433,G__40434,G__40435,G__40436,G__40437,G__40438,G__40439,G__40440,G__40441,G__40442,G__40443){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40423);

(invoc_array[(1)] = G__40424);

(invoc_array[(2)] = G__40425);

(invoc_array[(3)] = G__40426);

(invoc_array[(4)] = G__40427);

(invoc_array[(5)] = G__40428);

(invoc_array[(6)] = G__40429);

(invoc_array[(7)] = G__40430);

(invoc_array[(8)] = G__40431);

(invoc_array[(9)] = G__40432);

(invoc_array[(10)] = G__40433);

(invoc_array[(11)] = G__40434);

(invoc_array[(12)] = G__40435);

(invoc_array[(13)] = G__40436);

(invoc_array[(14)] = G__40437);

(invoc_array[(15)] = G__40438);

(invoc_array[(16)] = G__40439);

(invoc_array[(17)] = G__40440);

(invoc_array[(18)] = G__40441);

(invoc_array[(19)] = G__40442);

(invoc_array[vararg_idx] = G__40443);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__40423,G__40424,G__40425,G__40426,G__40427,G__40428,G__40429,G__40430,G__40431,G__40432,G__40433,G__40434,G__40435,G__40436,G__40437,G__40438,G__40439,G__40440,G__40441,G__40442,var_args){
var G__40443 = null;
if (arguments.length > 20) {
var G__41114__i = 0, G__41114__a = new Array(arguments.length -  20);
while (G__41114__i < G__41114__a.length) {G__41114__a[G__41114__i] = arguments[G__41114__i + 20]; ++G__41114__i;}
  G__40443 = new cljs.core.IndexedSeq(G__41114__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__40423,G__40424,G__40425,G__40426,G__40427,G__40428,G__40429,G__40430,G__40431,G__40432,G__40433,G__40434,G__40435,G__40436,G__40437,G__40438,G__40439,G__40440,G__40441,G__40442,G__40443);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41115){
var G__40423 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40424 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40425 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40426 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40427 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40428 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40429 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40430 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40431 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40432 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40433 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40434 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40435 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40436 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40437 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40438 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40439 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40440 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40441 = cljs.core.first(arglist__41115);
arglist__41115 = cljs.core.next(arglist__41115);
var G__40442 = cljs.core.first(arglist__41115);
var G__40443 = cljs.core.rest(arglist__41115);
return sci$impl$fns$arity_20__delegate(G__40423,G__40424,G__40425,G__40426,G__40427,G__40428,G__40429,G__40430,G__40431,G__40432,G__40433,G__40434,G__40435,G__40436,G__40437,G__40438,G__40439,G__40440,G__40441,G__40442,G__40443);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40141)].join('')));

}
})():(function (){var G__40449 = fixed_arity;
switch (G__40449) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__39509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39509__auto__)){
continue;
} else {
return ret__39509__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__40472){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40472);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__40475,G__40476){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40475);

(invoc_array[(1)] = G__40476);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__40477,G__40478,G__40479){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40477);

(invoc_array[(1)] = G__40478);

(invoc_array[(2)] = G__40479);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__40480,G__40481,G__40482,G__40483){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40480);

(invoc_array[(1)] = G__40481);

(invoc_array[(2)] = G__40482);

(invoc_array[(3)] = G__40483);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__40490,G__40491,G__40492,G__40493,G__40494){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40490);

(invoc_array[(1)] = G__40491);

(invoc_array[(2)] = G__40492);

(invoc_array[(3)] = G__40493);

(invoc_array[(4)] = G__40494);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__40498,G__40499,G__40500,G__40501,G__40502,G__40503){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40498);

(invoc_array[(1)] = G__40499);

(invoc_array[(2)] = G__40500);

(invoc_array[(3)] = G__40501);

(invoc_array[(4)] = G__40502);

(invoc_array[(5)] = G__40503);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__40508,G__40509,G__40510,G__40511,G__40512,G__40513,G__40514){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40508);

(invoc_array[(1)] = G__40509);

(invoc_array[(2)] = G__40510);

(invoc_array[(3)] = G__40511);

(invoc_array[(4)] = G__40512);

(invoc_array[(5)] = G__40513);

(invoc_array[(6)] = G__40514);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__40528,G__40529,G__40530,G__40531,G__40532,G__40533,G__40534,G__40535){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40528);

(invoc_array[(1)] = G__40529);

(invoc_array[(2)] = G__40530);

(invoc_array[(3)] = G__40531);

(invoc_array[(4)] = G__40532);

(invoc_array[(5)] = G__40533);

(invoc_array[(6)] = G__40534);

(invoc_array[(7)] = G__40535);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__40536,G__40537,G__40538,G__40539,G__40540,G__40541,G__40542,G__40543,G__40544){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40536);

(invoc_array[(1)] = G__40537);

(invoc_array[(2)] = G__40538);

(invoc_array[(3)] = G__40539);

(invoc_array[(4)] = G__40540);

(invoc_array[(5)] = G__40541);

(invoc_array[(6)] = G__40542);

(invoc_array[(7)] = G__40543);

(invoc_array[(8)] = G__40544);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__40556,G__40557,G__40558,G__40559,G__40560,G__40561,G__40562,G__40563,G__40564,G__40565){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40556);

(invoc_array[(1)] = G__40557);

(invoc_array[(2)] = G__40558);

(invoc_array[(3)] = G__40559);

(invoc_array[(4)] = G__40560);

(invoc_array[(5)] = G__40561);

(invoc_array[(6)] = G__40562);

(invoc_array[(7)] = G__40563);

(invoc_array[(8)] = G__40564);

(invoc_array[(9)] = G__40565);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__40576,G__40577,G__40578,G__40579,G__40580,G__40581,G__40582,G__40583,G__40584,G__40585,G__40586){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40576);

(invoc_array[(1)] = G__40577);

(invoc_array[(2)] = G__40578);

(invoc_array[(3)] = G__40579);

(invoc_array[(4)] = G__40580);

(invoc_array[(5)] = G__40581);

(invoc_array[(6)] = G__40582);

(invoc_array[(7)] = G__40583);

(invoc_array[(8)] = G__40584);

(invoc_array[(9)] = G__40585);

(invoc_array[(10)] = G__40586);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__40592,G__40593,G__40594,G__40595,G__40596,G__40597,G__40598,G__40599,G__40600,G__40601,G__40602,G__40603){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40592);

(invoc_array[(1)] = G__40593);

(invoc_array[(2)] = G__40594);

(invoc_array[(3)] = G__40595);

(invoc_array[(4)] = G__40596);

(invoc_array[(5)] = G__40597);

(invoc_array[(6)] = G__40598);

(invoc_array[(7)] = G__40599);

(invoc_array[(8)] = G__40600);

(invoc_array[(9)] = G__40601);

(invoc_array[(10)] = G__40602);

(invoc_array[(11)] = G__40603);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__40618,G__40619,G__40620,G__40621,G__40622,G__40623,G__40624,G__40625,G__40626,G__40627,G__40628,G__40629,G__40630){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40618);

(invoc_array[(1)] = G__40619);

(invoc_array[(2)] = G__40620);

(invoc_array[(3)] = G__40621);

(invoc_array[(4)] = G__40622);

(invoc_array[(5)] = G__40623);

(invoc_array[(6)] = G__40624);

(invoc_array[(7)] = G__40625);

(invoc_array[(8)] = G__40626);

(invoc_array[(9)] = G__40627);

(invoc_array[(10)] = G__40628);

(invoc_array[(11)] = G__40629);

(invoc_array[(12)] = G__40630);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__40638,G__40639,G__40640,G__40641,G__40642,G__40643,G__40644,G__40645,G__40646,G__40647,G__40648,G__40649,G__40650,G__40651){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40638);

(invoc_array[(1)] = G__40639);

(invoc_array[(2)] = G__40640);

(invoc_array[(3)] = G__40641);

(invoc_array[(4)] = G__40642);

(invoc_array[(5)] = G__40643);

(invoc_array[(6)] = G__40644);

(invoc_array[(7)] = G__40645);

(invoc_array[(8)] = G__40646);

(invoc_array[(9)] = G__40647);

(invoc_array[(10)] = G__40648);

(invoc_array[(11)] = G__40649);

(invoc_array[(12)] = G__40650);

(invoc_array[(13)] = G__40651);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__40664,G__40665,G__40666,G__40667,G__40668,G__40669,G__40670,G__40671,G__40672,G__40673,G__40674,G__40675,G__40676,G__40677,G__40678){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40664);

(invoc_array[(1)] = G__40665);

(invoc_array[(2)] = G__40666);

(invoc_array[(3)] = G__40667);

(invoc_array[(4)] = G__40668);

(invoc_array[(5)] = G__40669);

(invoc_array[(6)] = G__40670);

(invoc_array[(7)] = G__40671);

(invoc_array[(8)] = G__40672);

(invoc_array[(9)] = G__40673);

(invoc_array[(10)] = G__40674);

(invoc_array[(11)] = G__40675);

(invoc_array[(12)] = G__40676);

(invoc_array[(13)] = G__40677);

(invoc_array[(14)] = G__40678);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__40684,G__40685,G__40686,G__40687,G__40688,G__40689,G__40690,G__40691,G__40692,G__40693,G__40694,G__40695,G__40696,G__40697,G__40698,G__40699){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40684);

(invoc_array[(1)] = G__40685);

(invoc_array[(2)] = G__40686);

(invoc_array[(3)] = G__40687);

(invoc_array[(4)] = G__40688);

(invoc_array[(5)] = G__40689);

(invoc_array[(6)] = G__40690);

(invoc_array[(7)] = G__40691);

(invoc_array[(8)] = G__40692);

(invoc_array[(9)] = G__40693);

(invoc_array[(10)] = G__40694);

(invoc_array[(11)] = G__40695);

(invoc_array[(12)] = G__40696);

(invoc_array[(13)] = G__40697);

(invoc_array[(14)] = G__40698);

(invoc_array[(15)] = G__40699);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__40711,G__40712,G__40713,G__40714,G__40715,G__40716,G__40717,G__40718,G__40719,G__40720,G__40721,G__40722,G__40723,G__40724,G__40725,G__40726,G__40727){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40711);

(invoc_array[(1)] = G__40712);

(invoc_array[(2)] = G__40713);

(invoc_array[(3)] = G__40714);

(invoc_array[(4)] = G__40715);

(invoc_array[(5)] = G__40716);

(invoc_array[(6)] = G__40717);

(invoc_array[(7)] = G__40718);

(invoc_array[(8)] = G__40719);

(invoc_array[(9)] = G__40720);

(invoc_array[(10)] = G__40721);

(invoc_array[(11)] = G__40722);

(invoc_array[(12)] = G__40723);

(invoc_array[(13)] = G__40724);

(invoc_array[(14)] = G__40725);

(invoc_array[(15)] = G__40726);

(invoc_array[(16)] = G__40727);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__40731,G__40732,G__40733,G__40734,G__40735,G__40736,G__40737,G__40738,G__40739,G__40740,G__40741,G__40742,G__40743,G__40744,G__40745,G__40746,G__40747,G__40748){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40731);

(invoc_array[(1)] = G__40732);

(invoc_array[(2)] = G__40733);

(invoc_array[(3)] = G__40734);

(invoc_array[(4)] = G__40735);

(invoc_array[(5)] = G__40736);

(invoc_array[(6)] = G__40737);

(invoc_array[(7)] = G__40738);

(invoc_array[(8)] = G__40739);

(invoc_array[(9)] = G__40740);

(invoc_array[(10)] = G__40741);

(invoc_array[(11)] = G__40742);

(invoc_array[(12)] = G__40743);

(invoc_array[(13)] = G__40744);

(invoc_array[(14)] = G__40745);

(invoc_array[(15)] = G__40746);

(invoc_array[(16)] = G__40747);

(invoc_array[(17)] = G__40748);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__40772,G__40773,G__40774,G__40775,G__40776,G__40777,G__40778,G__40779,G__40780,G__40781,G__40782,G__40783,G__40784,G__40785,G__40786,G__40787,G__40788,G__40789,G__40790){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40772);

(invoc_array[(1)] = G__40773);

(invoc_array[(2)] = G__40774);

(invoc_array[(3)] = G__40775);

(invoc_array[(4)] = G__40776);

(invoc_array[(5)] = G__40777);

(invoc_array[(6)] = G__40778);

(invoc_array[(7)] = G__40779);

(invoc_array[(8)] = G__40780);

(invoc_array[(9)] = G__40781);

(invoc_array[(10)] = G__40782);

(invoc_array[(11)] = G__40783);

(invoc_array[(12)] = G__40784);

(invoc_array[(13)] = G__40785);

(invoc_array[(14)] = G__40786);

(invoc_array[(15)] = G__40787);

(invoc_array[(16)] = G__40788);

(invoc_array[(17)] = G__40789);

(invoc_array[(18)] = G__40790);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__40802,G__40803,G__40804,G__40805,G__40806,G__40807,G__40808,G__40809,G__40810,G__40811,G__40812,G__40813,G__40814,G__40815,G__40816,G__40817,G__40818,G__40819,G__40820,G__40821){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40802);

(invoc_array[(1)] = G__40803);

(invoc_array[(2)] = G__40804);

(invoc_array[(3)] = G__40805);

(invoc_array[(4)] = G__40806);

(invoc_array[(5)] = G__40807);

(invoc_array[(6)] = G__40808);

(invoc_array[(7)] = G__40809);

(invoc_array[(8)] = G__40810);

(invoc_array[(9)] = G__40811);

(invoc_array[(10)] = G__40812);

(invoc_array[(11)] = G__40813);

(invoc_array[(12)] = G__40814);

(invoc_array[(13)] = G__40815);

(invoc_array[(14)] = G__40816);

(invoc_array[(15)] = G__40817);

(invoc_array[(16)] = G__40818);

(invoc_array[(17)] = G__40819);

(invoc_array[(18)] = G__40820);

(invoc_array[(19)] = G__40821);

while(true){
var ret__39510__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__39510__auto__)){
continue;
} else {
return ret__39510__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40449)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__41257 = cljs.core.next(params__$1);
var G__41258 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41259 = lets;
params__$1 = G__41257;
new_params = G__41258;
lets = G__41259;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41260 = cljs.core.next(params__$1);
var G__41261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41260;
new_params = G__41261;
lets = G__41262;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41263 = arguments.length;
var i__5770__auto___41264 = (0);
while(true){
if((i__5770__auto___41264 < len__5769__auto___41263)){
args__5775__auto__.push((arguments[i__5770__auto___41264]));

var G__41269 = (i__5770__auto___41264 + (1));
i__5770__auto___41264 = G__41269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__40857 = sig;
var seq__40858 = cljs.core.seq(vec__40857);
var first__40859 = cljs.core.first(seq__40858);
var seq__40858__$1 = cljs.core.next(seq__40858);
var params = first__40859;
var body = seq__40858__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq40845){
var G__40846 = cljs.core.first(seq40845);
var seq40845__$1 = cljs.core.next(seq40845);
var G__40847 = cljs.core.first(seq40845__$1);
var seq40845__$2 = cljs.core.next(seq40845__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40846,G__40847,seq40845__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__41273 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41274 = cljs.core.next(fdecls);
ret = G__41273;
fdecls = G__41274;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41275 = arguments.length;
var i__5770__auto___41276 = (0);
while(true){
if((i__5770__auto___41276 < len__5769__auto___41275)){
args__5775__auto__.push((arguments[i__5770__auto___41276]));

var G__41277 = (i__5770__auto___41276 + (1));
i__5770__auto___41276 = G__41277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq40883){
var G__40884 = cljs.core.first(seq40883);
var seq40883__$1 = cljs.core.next(seq40883);
var G__40885 = cljs.core.first(seq40883__$1);
var seq40883__$2 = cljs.core.next(seq40883__$1);
var G__40886 = cljs.core.first(seq40883__$2);
var seq40883__$3 = cljs.core.next(seq40883__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40884,G__40885,G__40886,seq40883__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41281 = arguments.length;
var i__5770__auto___41282 = (0);
while(true){
if((i__5770__auto___41282 < len__5769__auto___41281)){
args__5775__auto__.push((arguments[i__5770__auto___41282]));

var G__41283 = (i__5770__auto___41282 + (1));
i__5770__auto___41282 = G__41283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__41284 = cljs.core.cons(f,p);
var G__41285 = cljs.core.next(args__$1);
p = G__41284;
args__$1 = G__41285;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41286 = cljs.core.cons(f,p);
var G__41287 = cljs.core.next(args__$1);
p = G__41286;
args__$1 = G__41287;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__41288 = cljs.core.next(fd);
fd = G__41288;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__41289 = cljs.core.next(fd);
fd = G__41289;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__41290 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__41291 = cljs.core.next(ds);
acc = G__41290;
ds = G__41291;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__41293 = cljs.core.next(p);
var G__41294 = cljs.core.cons(cljs.core.first(p),d);
p = G__41293;
d = G__41294;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq40900){
var G__40901 = cljs.core.first(seq40900);
var seq40900__$1 = cljs.core.next(seq40900);
var G__40902 = cljs.core.first(seq40900__$1);
var seq40900__$2 = cljs.core.next(seq40900__$1);
var G__40903 = cljs.core.first(seq40900__$2);
var seq40900__$3 = cljs.core.next(seq40900__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40901,G__40902,G__40903,seq40900__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
